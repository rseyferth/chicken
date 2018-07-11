import QueryString from 'query-string';
import Application from '../Application';
import { Dictionary } from '../../node_modules/@types/underscore';

/**
 * @module Routing
 */
export default class Request
{

    static cleanUri(uri : string) : string {

        if (/^\//.test(uri)) uri = uri.substr(1);
        if (/\/$/.test(uri)) uri = uri.substr(0, uri.length - 1);
        return uri;
    
    }

    flash? : Dictionary<any>;
    transition? : string;
    uri : string;
    query : Dictionary<any>;

	/**
	 * @class Routing.Request
	 *
	 * @constructor
	 * @param {object} 			location 		The location received from the History library
	 * @param {Application} 	[application] 	The Application instance that this Request is a part of
	 */
	constructor(location : any, application? : Application) {

		// Guess application if not given
		if (!application) application = Application.getInstance();

		// Parse the uri 
		let uri = Request.cleanUri(location.pathname);
		
		// Strip of base part
		var baseUrl = Request.cleanUri(application.settings.get('baseUrl'));
		if (uri.length >= baseUrl.length && uri.substr(0, baseUrl.length)) {
			uri = uri.substr(baseUrl.length);
		}

		// Add the / back again
		uri = '/' + uri;

		/**
		 * @property uri
		 * @type {string}
		 */
		this.uri = uri;

		/**
		 * @property query
		 * @type {object}
		 */
		this.query = QueryString.parse(location.search);

		/**
		 * @property flash
		 * @type {object|false}
		 */
		this.flash = location.state ? location.state.flash : {};

		this.transition = location.state ? location.state.transition : null;

	}


	getFlash(key) {

		if (this.flash && this.flash[key]) return this.flash[key];
		return null;

	}


	


}
