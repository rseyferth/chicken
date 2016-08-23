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
	constructor() {
		super();
		
		////////////////
		// Properties //
		////////////////

		/**
		 * @property routes
		 * @type {Array}
		 */
		this.routes = [];


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
	 * @chainable
	 */
	handle(request) {

		// Is it just a URL passed along?
		if (!(request instanceof Request)) {
			request = new Request(request);
		}

		// Loop through routes until we found something.
		var routeMatch = _.find(this.routes, (route) => {
			return route.match(request);
		});
		


		// Found something?

		console.log('Router', routeMatch);

		return this;

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