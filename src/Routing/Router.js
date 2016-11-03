/* eslint no-console: ["error", { allow: ["table"] }] */

import _ from 'underscore';

import Obj from '~/Core/Obj';
import SettingsObject from '~/Core/SettingsObject';
import Route from '~/Routing/Route';
import Request from '~/Routing/Request';
import Middleware from '~/Routing/Middleware';
import Service from '~/Data/Service';

/**
 * @module Routing
 */
class Router extends Obj
{
	
	/**
	 * 
	 * 
	 * @class Routing.Router
	 * @extends Core.Object
	 */
	constructor(application) {
		super();
		
		////////////////
		// Properties //
		////////////////

		/**
		 * @property routes
		 * @type {Array}
		 */
		this.routes = [];

		/**
		 * @property application
		 * @type {Application}
		 */
		this.application = application;


		/**
		 * @property namedRoutes
		 * @type {Map}
		 */
		this.namedRoutes = new Map();


		///////////////////////////////////////////
		// Grouped configuration state variables //
		///////////////////////////////////////////

		this._currentConfig = SettingsObject.create({

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
	route(pattern, actions, options = {}) {

		// Merge options
		options = _.defaults({}, options, _.omit(this._currentConfig.toObject(), 'parentRoute'));
		
		// Create the route
		var route = new Route(this, this._currentConfig.get('parentRoute'),	pattern, actions, options);
		
		// Add route
		this.routes.push(route);

		// Return route
		return route;

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
	group(options, callback) {

		// Store options
		var oldConfig = this._currentConfig.clone();
		this._currentConfig.apply(options);

		// Do the callback
		callback.apply(this);

		// Restore options
		this._currentConfig = oldConfig;

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
	handle(request) {

		/////////////////
		// Match route //
		/////////////////

		// Is it just a URL passed along?
		if (!(request instanceof Request)) {
			request = new Request(request);
		}

		// Loop through routes until we found something.
		var routeMatch = false;
		_.find(this.routes, (route) => {
			routeMatch = route.match(request);
			return routeMatch;
		});
		
		// Found something?
		if (routeMatch === false) {

			// There is no route matching the request
			throw new Error('[Routing.Router] Could not find matching route. 404 handling is not implemented yet.');

		}

		// Store it on app
		this.application.currentRoute = routeMatch;


		// Make the execution callback
		let executeActions = () => {


			/////////////////////////////
			// Start executing actions //
			/////////////////////////////

			let numberOfActionsStarted = 0;
			let actionPromises = [];
			routeMatch.actions.forEach((action, vcName) => {

				// Get depends on promises
				let dependsOnPromises = _.map(action.dependsOn, (dependsOnAction) => {
					return dependsOnAction.getPromise('complete');
				});

				// And any services that should be loaded
				_.each(routeMatch.route.options.services, (service) => {
					
					// Find service
					let serviceInstance = Service.get(service);
					if (!serviceInstance) throw new Error('[Routing.Router] There is no service "' + service + '" registered');

					// Load it
					let promise = serviceInstance.load();
					if (!promise || !(promise instanceof Promise)) throw new Error('[Routing.Router] The "' + service + '" service\'s load() method should return a Promise');
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
			if (numberOfActionsStarted === 0 && routeMatch.route.options.services.length === 0) {

				throw new Error('[Routing.Router] No actions for started for route ' + routeMatch.route.getFullPattern() + '. Check your configuration.'); 

			}

			// Listen to the result
			Promise.all(actionPromises).then((/*...results*/) => {
				
				//@TODO What to do?

			});

		};


		//////////////////////
		// Setup middleware //
		//////////////////////

		// Loop and add middleware
		let callbacksToExecute = [];
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
			let result = cb.apply(this, [nextCallback, request, routeMatch]);

			// Is there a result?
			if (result !== undefined) {
				// 'WE GOT TO DO SOMETHING WITH THIS MIDDLEWARE RESULT'
			}

		};
		nextCallback();

		

		return routeMatch;

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


module.exports = Router;