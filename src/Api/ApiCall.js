import $ from 'jquery';
import QueryString from 'query-string';

import ApiError from '~/Api/ApiError';
import Obj from '~/Core/Obj';

/**
 * @module Api
 */
class ApiCall extends Obj {

	/**
	 * @class Api.ApiCall 
	 * 
	 * @constructor 
	 * @param  {Api.Api} api 	The Api instance this call originates from
	 * @param  {string} method      The HTTP method to use (get, post, put, etc.)
	 * @param  {string} uri			The uri to call
	 * @param  {Object} data        
	 * @param  {Object} ajaxOptions 	 
	 */
	constructor(api, method, uri, data = {}, ajaxOptions = {}) {

		super();

		/**
		 * @property api
		 * @type {Api.Api}
		 */
		this.api = api;

		/**
		 * The HTTP method (get, post, put, patch, or delete)
		 * 
		 * @property method
		 * @type {string}
		 */
		this.method = method;
		
		/**
		 * @property uri
		 * @type {string}
		 */
		this.uri = uri;

		/**
		 * Data to send along with the request
		 * 
		 * @property data
		 * @type {Mixed}
		 */
		this.data = data;

		/**
		 * Configuration options for the Ajax call
		 *
		 * @property ajaxOptions
		 * @type {Object}
		 */
		this.ajaxOptions = ajaxOptions;

		/**
		 * Query parameters to add onto the url
		 *
		 * @property queryParams
		 * @type {Object}
		 */
		this.queryParams = {};


		/**
		 * The model class used when it cannot be deduced from the
		 * Api result
		 * 
		 * @property modelClass
		 * @type {Class}
		 */
		this.modelClass = null;

	}

	/**
	 * Execute the Api Call
	 *
	 * @method execute
	 * @return {Promise}
	 */
	execute() {

		// Authorize it
		let auth = this.api.getAuth();
		if (auth && auth.isAuthenticated()) {
			auth.authorizeApiCall(this);
		}

		// Make a promise
		return this.promise('complete', (resolve, reject) => {

			// Combine options
			let queryString = QueryString.stringify(this.queryParams);
			if (queryString.length > 0) queryString = '?' + queryString;
			let options = $.extend({
				
				url: this.api.makeUrl(this.uri) + queryString,
				method: this.method,
				data: this.data
				
			}, this.ajaxOptions);

			// Make the call
			this.api.ajax(options)
				.then((result) => {

					resolve(this.api.deserialize(result, this));
					
				}).fail((error) => {

					// Make error
					let errorObj = new ApiError(this, error);
					reject(errorObj);

				});


		});

	}


	/**
	 * Add given key/value(s) to the queryParams
	 *
	 * @method query
	 * @param  {string|Object} keyOrHash  Either a key or a key/value hash
	 * @param  {Mixed} value     When given a single key/value pair, enter the value as the second argument
	 * @chainable
	 */
	query(keyOrHash, value = null) {

		// Is it a key / value?
		if (typeof keyOrHash === 'string') {
			this.queryParams[keyOrHash] = value;
		} else {
			$.extend(this.queryParams, keyOrHash);
		}
		return this;


	}


}
module.exports = ApiCall;