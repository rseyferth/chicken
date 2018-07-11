import _, { Dictionary } from 'underscore';
import Obj from '../Core/Obj';
import Application from '../Application';
import RouteMatch from './RouteMatch';
import Route from './Route';
import Redirect from './Redirect';
import RoutingError from './RoutingError';
import ApiError from '../Api/ApiError';
import SettingsObject from '../Core/SettingsObject';
import Request from './Request';
import Middleware from './Middleware';
import Service from '../Data/Service';

export default class Router extends Obj
{

    routes : Route[] = [];
    application : Application;
    
    errorHandlers : Dictionary<any[]>;
    namedRoutes : Map<string, Route> = new Map();

    private currentConfig : SettingsObject;

	/**
	 * 
	 * 
	 * @class Routing.Router
	 * @extends Core.Object
	 */
	constructor(application : Application /*, parentRouter = null*/) {
        
        super();
		
		this.application = application;

		this.errorHandlers = {
			'all': [],
			'js': [],
			'api': [],
			'api.400': [],
			'api.404': [],
			'api.500': [],
			'router': [],
			'router.403': [],
			'router.404': []
		};


		///////////////////////////////////////////
		// Grouped configuration state variables //
		///////////////////////////////////////////

		this.currentConfig = new SettingsObject({

			parentRoute: null,
			viewContainer: 'main',
			services: [],
			middleware: []

		}, ['parentRoute', 'viewContainer', 'middleware', 'services']);

	}	


	////////////////////////
	// Definition methods //
	////////////////////////

	/**
	 * Create a Route and add it to the Router.
	 *
	 * @method route
	 * @param  {string} 			pattern 	The uri pattern
	 * @param  {Object|String} 		actions     
	 * @param  {Object} 			[options] 
	 * @return {Routing.Route}        
	 */
	route(pattern : string, actions : any, options : Dictionary<any> = {}) {

		// Merge options
		options = _.defaults({}, options, _.omit(this.currentConfig.toObject(), 'parentRoute'));
		
		// Create the route
		var route = new Route(this, this.currentConfig.get('parentRoute'),	pattern, actions, options);
		
		// Add route
		this.routes.push(route);

		// Return route
		return route;

	}

	errorRoute(errorKey : string, actions : any, options : Dictionary<any> = {}) {

		// Get route
		options.isErrorRoute = true;
		let route = this.route('/__errors/' + errorKey, actions, options);
		this.handleErrors(errorKey, route);

		return this;

	}


	catchAll(actions : any, options : Dictionary<any> = {}) {

		return this.route('/:url', actions, options).constrain('url', /.*/);

	}


	/**
	 * Configure the Router to add the given options to
	 * the Routes you define within the callback.
	 *
	 * @method group
	 * @param  {object}   options  
	 * @param  {Function} callback 
	 * @chainable
	 */
	group(options : Dictionary<any>, callback : Function) {

		// Store options
		var oldConfig = this.currentConfig.clone();
		this.currentConfig.apply(options);

		// Do the callback
		callback.apply(this);

		// Restore options
		this.currentConfig = oldConfig;

		return this;

	}




	//////////////////////
	// Router in action //
	//////////////////////

	/**
	 * Handle given Request, by finding a matching Route
	 * and executing it.
	 * 
	 * @method handle
	 * @param  {Routing.Request} request 
	 * @return {Routing.RouteMatch}
	 */
	handle(request : Request) : RouteMatch | boolean {

		/////////////////
		// Match route //
		/////////////////

		// Is it just a URL passed along?
		if (!(request instanceof Request)) {
			request = new Request(request);
		}

		// Loop through routes until we found something.
		let routeMatch : RouteMatch | undefined; 
		_.find(this.routes, (route) => {
			let match = route.match(request);			
			if (match) {
				routeMatch = match;
				return true;
			}
			return false;
		});
		
		// Found something?
		if (!routeMatch) {

			// Create error
			let error = new RoutingError(404, 'Page not found', request);
			return this.getErrorRouteMatch(error) || false;
			
		}


		// First leave current route
		if (this.application.currentRoute) {

			// Leave
			this.application.currentRoute.leave(routeMatch).then(() => {

				this.application.currentRoute = undefined;
				this.handle(request);

			});
			return false;

		}

		// Going.
		this.trigger('navigate', request);
		
		
		// Store it on app
		this.application.currentRoute = routeMatch;
		
		// Make the execution callback
		let executeActions = () => {

			/////////////////////////////
			// Start executing actions //
			/////////////////////////////

			let numberOfActionsStarted : number = 0;
			let actionPromises : Promise<any>[] = [];
			routeMatch!.actions.forEach((action, vcName) => {

				// Get the ViewContainer
				let vc = this.application.getViewContainer(vcName);

				// Disabled navigation for this request?
				if (this.application.navigationDisabledOnce) {

					// Just set the action on the viewcontainer, but don't actually do anything
					if (vc) {
						vc.setAction(action);
					}

					// Done.
					numberOfActionsStarted++;
					return new Promise((resolve) => {
						resolve();
					});

				}
				
				// Add transition
				if (request.transition && !vc.transitionsDisabled) {
					action.transition = request.transition;
				}

				// Get depends on promises
				let dependsOnPromises : Promise<any>[] = _.map(action.dependsOn, (dependsOnAction) => {
					return dependsOnAction.getPromise('complete');
				});

				// And any services that should be loaded
				_.each(routeMatch!.route.options.services, (service : string) => {
					
					// Find service
					let serviceInstance : Service = Service.get(service);
					if (!serviceInstance) throw new Error(`[Routing.Router] There is no service "${service}" registered`);

					// Load it
					let promise : Promise<any> = serviceInstance.load();
					dependsOnPromises.push(promise);

				});

				// Wait?
				if (dependsOnPromises.length > 0) {

					// Wait for it
					Promise.all(dependsOnPromises).then(() => {

						// Now we're ready!
						action.execute(this.application);

					}, (error) => {
						throw new Error('[Routing.Router] Action for "' + vcName + '" was not started, due to error in dependancy route: ' + error);
					});

				} else {

					// Start now
					numberOfActionsStarted++;
					action.execute(this.application);

				}

				// Add complete promise
				actionPromises.push(action.getPromise('complete'));

			});


			////////////////////////////
			// Keep track of progress //
			////////////////////////////

			// Any action started?
			if (numberOfActionsStarted === 0 && routeMatch!.route.options.services.length === 0) {

				throw new Error(`[Routing.Router] No actions for started for route ${routeMatch!.route.getFullPattern()}. Check your configuration.`); 

			}

			// Listen to the result
			Promise.all(actionPromises).then((/*...results*/) => {
				
				//@TODO What to do?
				this.trigger('complete', [routeMatch]);

			});

			// Reset navigation disabled
			this.application.navigationDisabledOnce = false;

		};


		//////////////////////
		// Setup middleware //
		//////////////////////

		// Loop and add middleware
		let callbacksToExecute : Function[] = [];
		_.each(routeMatch.route.getMiddlewareNames(), (mwName) => {

			// Get the middleware
			let middleware = Middleware.registry.get(mwName);
			if (!middleware) throw new Error('There is no middleware registered with the name "' + mwName + '"');

			// Add the callback
			callbacksToExecute.push(middleware.callback);

		});

		// Lastly we will execute the actions
		callbacksToExecute.push(executeActions);

		////////////////////////////////////////////////////////////////
		// Now call the first callback, to start the middleware chain //
		////////////////////////////////////////////////////////////////

		let nextCallback = () => {
			
			// Get the callback to call
			let cb = callbacksToExecute.shift();

			// Get the next in line
			try {
				cb!.apply(this, [nextCallback, request, routeMatch]);				
			} catch (error) {
				
				// Get error route match
				let match = this.getErrorRouteMatch(error);
				
				// Break out
				executeActions();

			}

		};
		nextCallback();
	

		return routeMatch;

	}



	handleErrors(errorType : string, callback : any) {

		// Known code?
		if (this.errorHandlers[errorType] === undefined) {
			throw new Error('It is not possible to catch "' + errorType + '" errors; available error statuses are: ' + _.keys(this.errorHandlers).join(', '));
		}

		// Add it
		this.errorHandlers[errorType].push(callback);

	}
	getErrorHandlers(error : any, obj? : any) : Function[] {

		// Error object?
		if (typeof error === 'string') {
			error = new Error(error);
		}

		// No obj? Use me.
		if (!obj) obj = this;

		// Routing error?
		let handlers : Function[] = [];
		if (error instanceof RoutingError) {

			// Add handlers for the status code
			if (obj.errorHandlers['router.' + error.code]) {
				handlers = _.union(handlers, obj.errorHandlers['router.' + error.code]);
			}

			// Add router-handlers
			if (obj.errorHandlers.router) handlers = _.union(handlers, obj.errorHandlers.router);			


		// Api error?
		} else if (error instanceof ApiError) {

			// Add handlers for the status code
			let statusCode = error.getStatusCode();
			if (obj.errorHandlers['api.' + statusCode]) {
				handlers = _.union(handlers, obj.errorHandlers['api.' + statusCode]);
			}

			// Add api-handlers
			if (obj.errorHandlers.api)	handlers = _.union(handlers, obj.errorHandlers.api);			

		} else {

			// Javascript error
			if (obj.errorHandlers.js) handlers = _.union(handlers, obj.errorHandlers.js);

		}

		// Always add the 'all' handlers
		if (obj.errorHandlers.all) handlers = _.union(handlers, obj.errorHandlers.all);


		// Were we called for a specific object?
		if (obj !== this) {

			// Then append default router callbacks
			handlers = _.union(handlers, this.getErrorHandlers(error));

		}


		return handlers;

	}


	getErrorRouteMatch(error : any) : RouteMatch | undefined {

		// Get the handlers
		let handlers = this.getErrorHandlers(error);
		let handlerResult;
		while (handlers.length > 0) {

			// Get handler and call it
			let handler = handlers.shift();
			
			// Is it a callback?
			let result;
			if (typeof handler === 'function') {

				// Call handler
				result = handler(error, error.request, this);

			} else {

				// Just use the value itself (probably a Route defined through 'errorRoute(...')
				result = handler;

			}

			// Anything?
			if (result) {
				handlerResult = result;
				break;
			}

		}

		// No result?
		if (!handlerResult) throw error;

		// A generic redirect?
		if (handlerResult instanceof Redirect) {
			this.application.goto(handlerResult.uri);
			return undefined;
		}

		// Is it a Route?
		if (handlerResult instanceof Route) {

			// Fake a match
			let match = new RouteMatch(handlerResult, {}, error && error.request ? error.request : null);
			return match;

		}

		return undefined;


	}


	/**
	 * Output a table to the console containing an overview
	 * of all defined routes.
	 *
	 * Note: This is not supported in all browsers!
	 * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
	 *  
	 * @method outputToConsole
	 * @chainable
	 */
	outputToConsole() {

		// Loop and log
		console.table(_.map(this.routes, (route) => {
			return {
				'Pattern': route.getFullPattern(),
				'Actions': route.isAbstract() ? '(abstract)' : _.map(route.getFullActions(), (action, targetViewContainer) => { 
					return targetViewContainer + ': ' + (typeof action === 'function' ? '(Callback)' : action);
				}).join(', '),
				'Regular expression': route.getRegExp()
			};
		}));

		return this;

	}






}
