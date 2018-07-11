import $ from 'jquery';
import QueryString from 'query-string';
import _, { Dictionary } from 'underscore';
import Obj from '../Core/Obj';
import Api from './Api';
import Collection from '../Data/Collection';
import Model from '../Data/Model';
import ApiError from './ApiError';
import Auth from '../Auth/Auth';

/**
 * An ApiCall is a once-executing call to the configured API
 * 
 * @param  {Api.Api} api 	The Api instance this call originates from
 * @param  {string} method      The HTTP method to use (get, post, put, etc.)
 * @param  {string} uri			The uri to call
 * @param  {Object} data        
 * @param  {Object} ajaxOptions 	 
 */
export default class ApiCall extends Obj {

    static hooks : Dictionary<Function[]> = {
	    beforeExecute: [],
	    beforeResolve: []
    };
    static hook(type : string, callback : Function) : void {
	    if (ApiCall.hooks[type] === undefined) throw new Error('Unknown ApiCall hook, use on of the following: ' + _.keys(ApiCall.hooks).join(', '));
	    ApiCall.hooks[type].push(callback);
    };



    api : Api;
    method : string;
    data : Dictionary<any>;
    ajaxOptions : Dictionary<any>;
    queryParams : Dictionary<any>;
    uri : string;
    modelClass? : any;

    useGlobalStore : boolean;
    store : Dictionary<any> = {};
    
    expectModel : boolean = false;
    expectCollection : boolean = false;
    deserializeResult : boolean = true;
    resolvesOnError : boolean = false;
    doNotExecuteInView : boolean = false;
	
	constructor(api : Api, method : string, uri : string, data : Dictionary<any> = {}, ajaxOptions : Dictionary<any> = {}) {

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
		this.useGlobalStore = api.settings.useGlobalStore!;
	


	}

	serialize() : string {

		return JSON.stringify(_.pick(this, ['uri', 'method', 'data', 'queryParams']));

	}

	reset() {
		this.resetPromise('complete');
	}


	executeHook(type : string, args : any[] = []) {

		args.unshift();
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
	execute() : Promise<any> {

		// Do hook
		this.executeHook('beforeExecute');

		// Authorize it
		let auth : Auth | false = this.api.getAuth();
		if (auth) auth.authorizeApiCall(this);

		// Make a promise
		return this.promise('complete', (resolve : Function, reject : Function) => {

			// Combine options
			let queryString : string = QueryString.stringify(this.queryParams);
			if (queryString.length > 0) queryString = '?' + queryString;
			let options = $.extend({
				
				url: this.api.makeUrl(this.uri) + queryString,
				method: this.method,
				data: this.data
				
			}, this.ajaxOptions);

			// Before send
			let beforeSends : Function[] = [];
			if (this.api.settings.beforeSend) beforeSends.push(this.api.settings.beforeSend);
			if (options.beforeSend) beforeSends.push(options.beforeSend);
			options.beforeSend = (jqXhr : JQueryXHR, settings : Dictionary<any>) => {

				// Loop and exexcute
				_.each(beforeSends, (cb) => {
					cb(jqXhr, settings);
				});				

			};
			

			// Make the call
			this.api.ajax(options)
				.then((result : any, statusText : string, jqXhr : JQueryXHR) => {

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
					let response : any;
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


	getResponseModel(modelName : string, id : string) {

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
	storeResponseModel(model) {

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
	query(keyOrHash : string | object, value? : any) {	

		// Is it a key / value?
		if (typeof keyOrHash === 'string') {
			this.queryParams[keyOrHash] = value;
		} else {
			$.extend(this.queryParams, keyOrHash);
		}
		return this;

	}
	
	select(value : any) {
		return this.query('select', value);
	}


	page(pageNumber : number | false, pageSize? : number) { 

		// Reset?
		if (pageNumber === false) {

			// Clear
			delete this.queryParams['page[number]'];
			delete this.queryParams['page[size]'];
			return this;

		}

		// Set it
		if (pageSize) this.pageSize(pageSize);
		return this.query('page[number]', pageNumber);
	}

	/**
	 * Add given pagesize to the queryParams
	 *
	 * @method query
	 * @param  pageSize
	 * @chainable
	 */
	pageSize(pageSize : number) : ApiCall {
		return this.query('page[size]', pageSize.toString());
	}

	/**
	 * Set the request data
	 * 
	 * @method setData
	 * @param {mixed} data
	 * @chainable
	 */
	setData(data : any) : ApiCall {
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
	doNotExecute(doNotExecuteInView : boolean = true) : ApiCall {
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
	doNotDeserialize(doNotDeserialize : boolean = true) : ApiCall {
		this.deserializeResult = !doNotDeserialize;
		return this;
	}

}
