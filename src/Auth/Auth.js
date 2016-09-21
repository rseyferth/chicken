import _ from 'underscore';
import inflection from 'inflection';

import Observable from '~/Core/Observable';
import Middleware from '~/Routing/Middleware';

/**
 * @module Auth
 */
class Auth extends Observable
{

	/**
	 * @class Auth.Auth
	 *
	 * @param 	{Object} options 
	 * @constructor
	 */
	constructor(options = {}) {

		super();

		// Default options
		this.settings = _.defaults(options, {

			middlewareName: 'auth'

		});

		this.set('isAuthenticated', false);



		// Check 'on...' settings
		_.each(this.settings, (value, key) => {

			let match = key.match(/^on([A-Z].+)$/);
			if (match) {

				// Is it a callback?
				let eventName = inflection.camelize(match[1], true);
				if (typeof value === 'function') {
				
					// Add event listener
					this.on(eventName, value);

				}

			}

		});

		// Register the middleware
		this.middleware = new Middleware(this.settings.middlewareName, (next, request, routeMatch) => {

			return this.middlewareAction(next, request, routeMatch);

		});
		Middleware.register(this.middleware);

	}

	/**
	 * Act as middleware for given request
	 *
	 * @method middleWareAction
	 * @param  {Callback} 			next		The callback to call when everything is okay
	 * @param  {Routing.Request} 	request 
	 * @param  {Routing.RouteMatch} 		routeMatch   	 	 
	 */
	middlewareAction(next, request, routeMatch) {

		// Are we not authenticated?
		if (!this.isAuthenticated()) {

			// Trigger the unauthenticated event
			if (!this._listeners.has(Auth.Events.Unauthenticated)) {
				throw new Error('Protected route called without authentication.');
			}
			this.trigger(Auth.Events.Unauthenticated, [request, routeMatch]);
			return;

		}

		// Ok.
		next();
		
	}


	/**
	 * Try to authenticate using given credentials
	 * 
	 * @method authenticate
	 * @param  {object} credentials 
	 * @return {Promise}
	 */
	authenticate(/* credentials */) {
		throw new Error('The ' + this.constructor.name + ' class has not implemented the "authenticate" method');		
	}


	/**
	 * Try to invalidate the current authenticated session
	 *
	 * @method invalidate
	 * @return {Promise}
	 */
	invalidate() {
		throw new Error('The ' + this.constructor.name + ' class has not implemented the "invalidate" method');
	}


	/**
	 * Check whether the session is authenticated
	 * 
	 * @method isAuthenticated
	 * @return {Boolean}
	 */
	isAuthenticated() {
		return this.get('isAuthenticated');		
	}


	/**
	 * Authorize given ApiCall instance, adding necessary
	 * authorization headers, etc.
	 * 
	 * @method authorizeApiCall
	 * @param  {Api.ApiCall} apiCall 
	 * @return {Api.ApiCall}
	 */
	authorizeApiCall(apiCall) {
		return apiCall;
	}


}

Auth.Events = {

	/**
	 * This event is triggered when the session was authenticated but is not
	 * any longer
	 * 
	 * @event sessionTimedOut
	 */
	SessionTimedOut: 'sessionTimedOut',


	/**
	 * This event is triggered when the session has been authenticated
	 * 
	 * @event authenticated
	 */
	Authenticated: 'authenticated',

	/**
	 * This event is triggered when the session has been invalidated
	 * 
	 * @event invalidated
	 */
	Invalidated: 'invalidated',


	/**
	 * This event is triggered whenever an unauthenticated user tries to access
	 * a protected routeMatch
	 * 
	 * @event unauthenticated
	 */
	Unauthenticated: 'unauthenticated'



};



module.exports = Auth;