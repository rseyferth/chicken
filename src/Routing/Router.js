/* eslint no-console: ["error", { allow: ["table"] }] */

import _ from 'underscore';

import Obj from '~/Core/Obj';
import SettingsObject from '~/Core/SettingsObject';
import Route from '~/Routing/Route';
import Request from '~/Routing/Request';


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


		///////////////////////////////////////////
		// Grouped configuration state variables //
		///////////////////////////////////////////

		this._currentConfig = SettingsObject.create({

			parentRoute: null,
			viewContainer: 'main'

		}, ['parentRoute', 'viewContainer']);




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
	 * @returns {Routing.RouteMatch}
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


		/////////////////////////////
		// Start executing actions //
		/////////////////////////////

		var numberOfActionsStarted = 0;
		var actionPromises = [];
		routeMatch.actions.forEach((action, vcName) => {


			// Get depends on promises
			var dependsOnPromises = _.map(action.dependsOn, (dependsOnAction) => {
				return dependsOnAction.getPromise('complete');
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
		if (numberOfActionsStarted === 0) {

			throw new Error('[Routing.Router] No actions for started for route ' + routeMatch.matchedRoute.getFullPattern() + '. Check your configuration.'); 

		}

		// Listen to the result
		Promise.all(actionPromises).then((...results) => {
			
			//@TODO What to do?

		}, (error) => {

			throw new Error('[Routing.Router] Executing route failed: ' + error);

		});

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