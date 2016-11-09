import QueryString from 'query-string';

import ClassMap from '~/Helpers/ClassMap';

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

	}


	


}

Request.cleanUri = (uri) => {

	if (/^\//.test(uri)) uri = uri.substr(1);
	if (/\/$/.test(uri)) uri = uri.substr(0, uri.length - 1);
	return uri;

};


module.exports = Request;
