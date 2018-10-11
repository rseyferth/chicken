import _ from 'underscore';
import $ from 'jquery';

import Observable from '../Core/Observable';
import Middleware from '../Routing/Middleware';
import App from '../Helpers/App';

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

			getUserUri: '/me',

			onAuthenticated: null,
			onUnauthenticated: null,
			onSessionTimedOut: null,
			onInvalidated: null,

			middlewareName: 'auth'

		});

		this.set('isAuthenticated', false);

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
			if (!this.settings.onUnauthenticated) {
				throw new Error('Protected route called without authentication.');
			}

			// Do the callback
			this.doCallback('onUnauthenticated', [request, routeMatch]);
			return;

		}

		// Ok.
		next();
		
	}


	doCallback(key, params) {

		// Promise
		return new Promise((resolve, reject) => {

			// Do we have one?
			let callback = this.settings[key];
			if (!callback) {
				reject('There is no callback defined for ' + key);
			}

			// Is it a string with a uri?
			if (typeof callback === 'string') {
				App().goto(callback);
				resolve();
			}
			
			// Get the result from the callback
			let result = callback.apply(this, params);

			// Is there something resolvable in there?
			if (result && result instanceof Promise) {

				// Link it.
				result.then((result) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});

			} else {

				// Just resolve now
				resolve(result);

			}

		});

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
		
		// Extend with my options
		let ajaxOptions = this.getAjaxOptions();
		$.extend(apiCall.ajaxOptions, ajaxOptions);
		return apiCall;
		
	}


	getAjaxOptions() {
		return {};
	}


	/**
	 * Read given Api Error and update session accordingly, if
	 * appropriate.
	 *
	 * @method processApiError
	 * @param  {object} error 
	 * @return {object}       
	 */
	processApiError(error) {
		return error;
	}


}



export default Auth;