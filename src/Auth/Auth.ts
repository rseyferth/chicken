import _ from 'underscore';
import $ from 'jquery';
import Observable from '../Core/Observable';
import Middleware from '../Routing/Middleware';
import Request from '../Routing/Request';
import RouteMatch from '../Routing/RouteMatch';
import Application from '../Application';
import ApiCall from '../Api/ApiCall';


export interface AuthSettings {

    getUserUri? : string;
    onAuthenticated? : Function | null;
    onUnauthenticated? : Function | null;
    onSessionTimedOut? : Function | null;
    onInvalidated? : Function | null;

	middlewareName? : string;
	
	baseUrl?: string;
	authenticateUri?: string;
	refreshUri?: string;
	currentUserUri?: string;

	authenticateMethod? : string;
	refreshMethod? : string;

	beforeSend? : Function;

	identifierKey? : string;
	passwordKey? : string;

	tokenValidForMinutes? : number;

	autoRefreshToken? : boolean;
	autoRefreshInterval? : number;

	localStorageKey? : string;
	storeCredentialsLocally? : boolean;

}

/**
 * @module Auth
 */
export default abstract class Auth extends Observable
{

    settings : AuthSettings;
    middleware : Middleware;

	/**
	 * @class Auth.Auth
	 *
	 * @param 	{Object} options 
	 * @constructor
	 */
	constructor(options : AuthSettings = {}) {

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
		this.middleware = new Middleware(this.settings.middlewareName!, (next : Function, request : Request, routeMatch : RouteMatch) => {

			return this.middlewareAction(next, request, routeMatch);

		});
		Middleware.register(this.middleware);

	}

	abstract initialize() : Promise<any>;

	/**
	 * Act as middleware for given request
	 *
	 * @method middleWareAction
	 * @param  {Callback} 			next		The callback to call when everything is okay
	 * @param  {Routing.Request} 	request 
	 * @param  {Routing.RouteMatch} 		routeMatch   	 	 
	 */
	middlewareAction(next : Function, request : Request, routeMatch : RouteMatch) {

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


	doCallback(key : string, params : any[]) {

		// Promise
		return new Promise((resolve, reject) => {

			// Do we have one?
			let callback : any = this.settings[key];
			if (!callback) {
				reject('There is no callback defined for ' + key);
			}

			// Is it a string with a uri?
			if (typeof callback === 'string') {
				Application.getInstance().goto(callback);
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


	abstract authenticate(...args : any[]) : Promise<any>;
	abstract invalidate();


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
	authorizeApiCall(apiCall : ApiCall) : JQueryAjaxSettings {
		
		// Extend with my options
		let ajaxOptions = this.getAjaxOptions();
		$.extend(apiCall.ajaxOptions, ajaxOptions);
		return apiCall;
		
	}


	getAjaxOptions() : JQueryAjaxSettings {
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
