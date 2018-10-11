import $ from 'jquery';
import _ from 'underscore';

import Model from '../Data/Model';
import ApiCall from '../Api/ApiCall';
import App from '../Helpers/App';

/**
 * An Api instance can be used to make contact with one specific
 * API. 
 *
 * @param {Object} options - Configuration for the Api
 * @param {string} [options.baseUrl=/api] Base url to prepend to all API calls
 * @param {boolean} [options.queueAjaxCalls=false] Whether to execute the API calls one by one (true), or simultaneously (false)
 * 
 */
class Api {

	/**
	 * @class Api.Api
	 *
	 * @constructor
	 * @param  {Object} options 	 
	 */
	constructor(options) {
		
		this.settings = $.extend({
			baseUrl: '/api',
			
			queueAjaxCalls: false,

			auth: false,

			beforeSend: false,

			useGlobalStore: true

		}, options);

	}

	/**
	 * @method deserialize
	 * @return {Data.Model|Data.Collection}
	 */
	deserialize(/* data, apiCall = null */) {
		throw new Error('The Api implementation should have a deserialize method.');		
	}

	/**
	 * @method getAuth
	 * @return {Auth.Auth} 
	 */
	getAuth() {

		// Set already?
		if (this.auth) return this.auth;
		if (this.settings.auth === false) return false;

		// Look it up.
		this.auth = App().auth(this.settings.auth);
		return this.auth;

	}



	//////////////////
	// HTTP methods //
	//////////////////

	/**
	 * @method call
	 * @param  {string} method      
	 * @param  {string} uri         
	 * @param  {Object} [data={}]
	 * @param  {Object} [ajaxOptions={}]
	 * @return {Api.ApiCall}
	 */
	call(method, uri, data = {}, ajaxOptions = {}) {

		// Create api call
		return new ApiCall(this, method, uri, data, ajaxOptions);

	}

	/**
	 * @method get
	 * @param  {string} uri         
	 * @param  {Object} [data={}]
	 * @param  {Object} [ajaxOptions={}]
	 * @return {Api.ApiCall}
	 */
	get(uri, data = {}, ajaxOptions = {}) {
		return this.call('get', uri, data, ajaxOptions);
	}

	/**
	 * @method post
	 * @param  {string} uri         
	 * @param  {Object} [data={}]
	 * @param  {Object} [ajaxOptions={}]
	 * @return {Api.ApiCall}
	 */
	post(uri, data = {}, ajaxOptions = {}) {
		return this.call('post', uri, data, ajaxOptions);
	}

	/**
	 * @method put
	 * @param  {string} uri         
	 * @param  {Object} [data={}]
	 * @param  {Object} [ajaxOptions={}]
	 * @return {Api.ApiCall}
	 */
	put(uri, data = {}, ajaxOptions = {}) {
		return this.call('put', uri, data, ajaxOptions);
	}

	/**
	 * @method path
	 * @param  {string} uri         
	 * @param  {Object} [data={}]
	 * @param  {Object} [ajaxOptions={}]
	 * @return {Api.ApiCall}
	 */
	patch(uri, data = {}, ajaxOptions = {}) {
		return this.call('patch', uri, data, ajaxOptions);
	}

	/**
	 * @method delete
	 * @param  {string} uri         
	 * @param  {Object} [data={}]
	 * @param  {Object} [ajaxOptions={}]
	 * @return {Api.ApiCall}
	 */
	delete(uri, data = {}, ajaxOptions = {}) {
		return this.call('delete', uri, data, ajaxOptions);
	}


	////////////////////
	// Helper methods //
	////////////////////

	/**
	 * @method makeUrl
	 * @param  {string} uri 	Relative url within the API
	 * @return {string} Fully formed url
	 */
	makeUrl(uri) {
		return this.settings.baseUrl + uri;
	}

	/**
	 * Make an ajax call using jQuery
	 * 
	 * @method ajax
	 * @param  {Object} options 
	 * @return {jQuery Ajax call}         
	 */
	ajax(options) {
		let method = this.settings.queueAjaxCalls ? $.ajaxq : $.ajax;
		if (method === undefined) throw new Error('Could not find Ajax or AjaxQ library. Did you include jquery.ajaxq into your project?');
		return method.apply(null, [this.getAjaxOptions(options)]);
	}

	/**
	 * Get jQuery ajax call options for this api
	 *
	 * @method getAjaxOptions
	 * @param {Object = {}} options   Optional options to merge
	 * @return {Function}
	 */
	getAjaxOptions(options = {}) {

		// Start with given options
		let beforeSends = [];		
		if (options.beforeSend) {
			beforeSends.push(options.beforeSend);
			delete options.beforeSend;
		}
		let ajaxOptions = $.extend({
			dataType: 'json'
		}, options);

		// Get auth options
		let auth = this.getAuth();
		if (auth) {
			let authOptions = auth.getAjaxOptions();
			if (authOptions.beforeSend) {
				beforeSends.push(authOptions.beforeSend);
				delete authOptions.beforeSend;
			}
			$.extend(ajaxOptions, authOptions);
		}

		// Make callback
		ajaxOptions.beforeSend = (jqXhr, jqOptions) => {
		
			// Loop through before sends
			_.each(beforeSends, (cb) => {
				cb(jqXhr, jqOptions);
			});
			
		};

		return ajaxOptions;

	}



	///////////////////
	// Model methods //
	///////////////////

	/**
	 * Get a single Model record from the Api
	 * 
	 * @method one
	 * @param  {string} modelName 
	 * @param  {string} idOrUri 
	 * @return {Api.ApiCall}
	 */
	one(modelName, idOrUri = null) {
		
		// Get uri from model
		let ModelClass = Model.registry.get(modelName);
		if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
		let uri = /^\//.test(idOrUri) ? idOrUri : ModelClass.definition.getApiUri(idOrUri);

		// Make the call
		let call = this.get(uri);
		call.modelClass = ModelClass;
		call.expectModel = true;
		return call;

	}

	/**
	 * Get all Model records from the Api
	 * 
	 * @method all
	 * @param  {string} modelName
	 * @return {Api.ApiCall}
	 */
	all(modelName, uri = null) {

		// Get uri from model
		let ModelClass = Model.registry.get(modelName);
		if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
		if (!uri) uri = ModelClass.definition.getApiUri();

		// Make the call
		let call = this.get(uri);
		call.modelClass = ModelClass;
		call.expectCollection = true;
		return call;

	}

	store(modelName) {

		// Get uri from model
		let ModelClass = Model.registry.get(modelName);
		if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
		let uri = ModelClass.definition.getApiUri();

		// Make the call
		let call = this.post(uri);
		call.modelClass = ModelClass;
		call.expectModel = true;
		return call;

	}




	/**
	 * Save given model to the Api
	 *
	 * @method saveModel
	 * @param 	{string}	uri
	 * @param 	{Data.Model} model
	 * @return {Api.ApiCall}
	 */
	saveModel(/* uri, model */) {
		throw new Error('The Api implementation should have a saveModel method.');		
	}





}
export default Api;