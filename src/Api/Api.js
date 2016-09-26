import $ from 'jquery';

import Model from '~/Data/Model';
import ApiCall from '~/Api/ApiCall';
import App from '~/Helpers/App';

/**
 * @module Api
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
			
			auth: false,

			getCurrentUser: '/me',
			autoGetAuthenticatedUser: true

		}, options);

		// Listen to auth
		if (this.settings.autoGetAuthenticatedUser) {
		
			let auth = this.getAuth();
			if (auth) {

				// When we are logged in
				if (auth.isAuthenticated()) this.getAuthenticatedUser();

				// Listen to logout/login
				auth.on('invalidated', () => {
					this.getAuthenticatedUserPromise = false;
					this.authenticatedUser = false;
				});
				auth.on('authenticated', () => {
					this.getAuthenticatedUser();
				});
				
			}

		}

		
	}

	/**
	 * @method deserialize
	 * @return {Data.Model|Data.Collection}
	 */
	deserialize(/* data, apiCall */) {
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


	getAuthenticatedUser() {

		// Already loaded/loading?
		if (!this.getAuthenticatedUserPromise) {

			this.getAuthenticatedUserPromise = new Promise((resolve, reject) => {

				// Set?
				if (this.authenticatedUser) {
					resolve(this.authenticatedUser);
					return;
				}

				// Custom way?
				let call;
				if (typeof this.settings.getCurrentUser === 'function') {

					call = this.settings.getCurrentUser();

				} else {

					// Use as uri
					call = this.call('get', this.settings.getCurrentUser);

				}

				// Make the call
				call.execute().then((result) => {

					// Good.
					this.authenticatedUser = result;
					resolve(result);


				}, (error) => {
					reject(error);
				});

			});

		}
		return this.getAuthenticatedUserPromise;

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
		options.dataType = 'json';
		return $.ajax(options);
	}


	///////////////////
	// Model methods //
	///////////////////

	/**
	 * Get a single Model record from the Api
	 * 
	 * @method one
	 * @param  {string} modelName 
	 * @param  {string} id        
	 * @return {Api.ApiCall}
	 */
	one(modelName, id) {

		// Get uri from model
		let ModelClass = Model.registry.get(modelName);
		if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
		let uri = ModelClass.definition.getApiUri(id);

		// Make the call
		let call = this.get(uri);
		call.modelClass = ModelClass;
		return call;

	}

	/**
	 * Get all Model records from the Api
	 * 
	 * @method all
	 * @param  {string} modelName
	 * @return {Api.ApiCall}
	 */
	all(modelName) {

		// Get uri from model
		let ModelClass = Model.registry.get(modelName);
		if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
		let uri = ModelClass.definition.getApiUri();

		// Make the call
		let call = this.get(uri);
		call.modelClass = ModelClass;
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
module.exports = Api;