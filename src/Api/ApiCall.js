import $ from 'jquery';
import QueryString from 'query-string';
import _ from 'underscore';

import ApiError from '../Api/ApiError';
import Obj from '../Core/Obj';
import Model from '../Data/Model';
import Collection from '../Data/Collection';

/**
 * An ApiCall is a once-executing call to the configured API
 * 
 * @param  {Api.Api} api 	The Api instance this call originates from
 * @param  {string} method      The HTTP method to use (get, post, put, etc.)
 * @param  {string} uri			The uri to call
 * @param  {Object} data        
 * @param  {Object} ajaxOptions 	 
 */
class ApiCall extends Obj {

	
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
		this.queryParams = QueryString.parse(QueryString.extract(uri));


		/**
		 * @property uri
		 * @type {string}
		 */
		this.uri = uri.split('?')[0];

		/**
		 * The model class used when it cannot be deduced from the
		 * Api result
		 * 
		 * @property modelClass
		 * @type {Class}
		 */
		this.modelClass = null;

		/**
		 * When true, the models will be linked to the global Model stores. When false,
		 * a local store, specific to this ApiCall, will be used. (Default = true)
		 * 
		 * @property useGlobalStore
		 * @type {Boolean}
		 */
		this.useGlobalStore = api.settings.useGlobalStore;
		
		/**
		 * Local model store, used when useGlobalStore is false.
		 * 
		 * @property store
		 * @type {Object}
		 */
		this.store = {};

		/**
		 * @property expectModel
		 * @type {Boolean}
		 */
		this.expectModel = false;

		/**
		 * @property expectCollection
		 * @type {Boolean}
		 */
		this.expectCollection = false;


		/**
		 * @property deserializeResult
		 * @type {Boolean}
		 */
		this.deserializeResult = true;


		/**
		 * when true, the call will resolve with a null value on error. This can be set
		 * by using the allowFailure method
		 * 
		 * @property allowFailure
		 * @type {Boolean}
		 */
		this.resolvesOnError = false;

		/**
		 * @property doNotExecuteInView
		 * @type {Boolean}
		 */
		this.doNotExecuteInView = false;

	}

	serialize() {

		return JSON.stringify(_.pick(this, ['uri', 'method', 'data', 'queryParams']));

	}

	reset() {
		this.resetPromise('complete');
	}


	executeHook(type, args = []) {

		args.unshift(this);
		_.each(ApiCall.hooks[type], (cb) => {
			cb.apply(this, args);
		});

	}
	

	/**
	 * Execute the Api Call
	 *
	 * @method execute
	 * @return {Promise}
	 */
	execute() {

		// Do hook
		this.executeHook('beforeExecute');

		// Authorize it
		let auth = this.api.getAuth();
		if (auth) auth.authorizeApiCall(this);

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

			// Before send
			let beforeSends = [];
			if (this.api.settings.beforeSend) beforeSends.push(this.api.settings.beforeSend);
			if (options.beforeSend) beforeSends.push(options.beforeSend);
			options.beforeSend = (jqXhr, settings) => {

				// Loop and exexcute
				_.each(beforeSends, (cb) => {
					cb(jqXhr, settings);
				});				

			};
			

			// Make the call
			this.api.ajax(options)
				.then((result, statusText, jqXhr) => {

					// 204 (No-Content)?
					if (jqXhr.status === 204 && result === undefined) {
						resolve(null);
						return;
					}

					//non Resource response type
					//@DEPRECATED! Use doNotDeserialize() instead
					if (result && result.responseType == 'nonResource') {
						resolve(result);
						return;
					}


					// Deserialize it
					let response;
					if (this.deserializeResult) {
						
						// Deserialize
						response = this.api.deserialize(result, this);

						// Do we expect a single model?
						if (this.expectModel && response instanceof Collection) {
							response = response.first();
						
						// Or a collection
						} else if (this.expectCollection && response instanceof Model) {

							// Make a collection of it
							let coll = new Collection();
							coll.add(response);
							response = coll;

						}
						
					} else {

						// Use as is
						response = result;
					}

					// Do hook
					this.executeHook('beforeResolve', [response]);

					// Done!
					resolve(response);
					
				}).fail((error) => {

					if (this.resolvesOnError) {
						
						//resolve with null
						resolve(null);

					} else {

						// Make error
						let errorObj = new ApiError(this, error);
						if (auth) {
							errorObj = auth.processApiError(errorObj);
						} 
						reject(errorObj);
						
					}

					

				});


		});

	}

	////////////
	// Stores //
	////////////

	useLocalStore(value = true) {
		this.useGlobalStore = !value;
		return this;
	}

	allowFailure(value = true) {
		this.resolvesOnError = value;
		return this;
	}


	getResponseModel(modelName, id) {

		// Global?
		if (this.useGlobalStore) {

			// Get from Model store
			return Model.getFromStore(modelName, id);

		} else {

			// Known?
			if (this.store[modelName] === undefined) return null;
			return this.store[modelName][id];
			
		}


	}
	storeReponseModel(model) {

		// Global?
		if (this.useGlobalStore) {

			// Store it
			let store = Model.getStore(model.getModelName());
			store.set(model.get('id'), model);

		} else {

			// Set it locally
			let modelName = model.getModelName();
			if (this.store[modelName] === undefined) this.store[modelName] = {};
			this.store[modelName][model.get('id')] = model;
			
		}
		return this;

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
	
	select(value) {
		return this.query('select', value);
	}


	/**
	 * Add given pagination page to the queryParams
	 *
	 * @method query
	 * @param  pageNumber
	 * @chainable
	 */
	page(pageNumber, pageSize = null) { 

		// Reset?
		if (pageNumber === false) {

			// Clear
			delete this.queryParams['page[number]'];
			delete this.queryParams['page[size]'];
			return this;

		}

		// Set it
		if (pageSize !== null) this.pageSize(pageSize);
		return this.query('page[number]', pageNumber);
	}

	/**
	 * Add given pagesize to the queryParams
	 *
	 * @method query
	 * @param  pageSize
	 * @chainable
	 */
	pageSize(pageSize) {
		return this.query('page[size]', pageSize);
	}

	/**
	 * Set the request data
	 * 
	 * @method setData
	 * @param {mixed} data
	 * @chainable
	 */
	setData(data) {
		this.data = data;
		return this;
	}

	/**
	 * Do not execute this ApiCall when resolving the View,
	 * but instead pass on the ApiCall itself.
	 * 
	 * @param  {Boolean} doNotExecuteInView 
	 * @chainable
	 */
	doNotExecute(doNotExecuteInView = true) {
		this.doNotExecuteInView = doNotExecuteInView;
		return this;
	}

	/**
	 * Do not deserialize the response but return the literal
	 * response instead.
	 * 	
	 * @param  {Boolean} doNotDeserialize 
	 * @chainable
	 */
	doNotDeserialize(doNotDeserialize = true) {
		this.deserializeResult = !doNotDeserialize;
		return this;
	}

}

ApiCall.hooks = {

	beforeExecute: [],
	beforeResolve: []

};
ApiCall.hook = (type, callback) => {
	if (_.contains(ApiCall.hooks, type)) throw new Error('Unknown ApiCall hook, use on of the following: ' + _.keys(ApiCall.hooks).join(', '));
	ApiCall.hooks[type].push(callback);
};

export default ApiCall;