import QueryString from 'query-string';

import ClassMap from '../Helpers/ClassMap';

/**
 * @module Routing
 */
class Request
{

	/**
	 * @class Routing.Request
	 *
	 * @constructor
	 * @param {object} 			location 		The location received from the History library
	 * @param {Application} 	[application] 	The Application instance that this Request is a part of
	 */
	constructor(location, application = null) {

		// Guess application if not given
		if (!application) application = ClassMap.get('Application').getInstance();

		// Parse the uri 
		let uri = Request.cleanUri(location.pathname);
		
		// Strip of base part
		var baseUrl = Request.cleanUri(application.settings.get('baseUrl'));
		if (uri.length >= baseUrl.length && uri.substr(0, baseUrl.length)) {
			uri = uri.substr(baseUrl.length);
		}
		// Add the / back again
		if (!/^\//.test(uri)) uri = '/' + uri;

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

		
		/**
		 * @property hash
		 * @type {string}
		 */
		this.hash = location.hash || '';
		if (!this.hash && /#/.test(this.uri)) {
			
			// Split it of
			let [uri, hash] = this.uri.split(/#/);
			this.uri = uri;
			this.hash = hash;			

		}

		/**
		 * @property transition
		 * @type {string|null}
		 */
		this.transition = location.state ? location.state.transition : null;

	}


	getFlash(key) {

		if (this.flash && this.flash[key]) return this.flash[key];
		return null;

	}


	


}

Request.cleanUri = (uri) => {

	if (/^\//.test(uri)) uri = uri.substr(1);
	if (/\/$/.test(uri)) uri = uri.substr(0, uri.length - 1);
	return uri;

};


export default Request;
