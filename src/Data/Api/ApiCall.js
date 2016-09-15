import $ from 'jquery';
import QueryString from 'query-string';

import Obj from '~/Core/Obj';

/**
 * @module Data.Api
 */
class ApiCall extends Obj {

	/**
	 * @class ApiCall 
	 * 
	 * @constructor 
	 * @param  {Data.Api.Api} api 	The Api instance this call originates from
	 * @param  {string} method      The HTTP method to use (get, post, put, etc.)
	 * @param  {string} uri			The uri to call
	 * @param  {Object} data        
	 * @param  {Object} ajaxOptions 	 
	 */
	constructor(api, method, uri, data = {}, ajaxOptions = {}) {

		super();

		this.api = api;

		this.method = method;
		this.uri = uri;
		this.data = data;
		this.ajaxOptions = ajaxOptions;
		this.queryParams = {};

		this.modelClass = null;

	}

	/**
	 * Execute the Api Call
	 *
	 * @method execute
	 * @return {Promise}
	 */
	execute() {

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

					reject(error);

				});


		});

	}


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