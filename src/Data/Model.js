import inflection from 'inflection';
import _ from 'underscore';
import $ from 'jquery';
import moment from 'moment';

import App from '~/Helpers/App';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';
import ModelStore from '~/Data/ModelStore';
import Collection from '~/Data/Collection';
import ClassMap from '~/Helpers/ClassMap';

/**
 * @module Data
 */
class Model extends Observable
{

	/**
	 * The Model class is an extension of Observable, and is used
	 * to hold data that is received from an Api, and save that data, etc.
	 * 
	 * @class Data.Model
	 *
	 * @constructor
	 * @param  {Object}  initValues           
	 * @param  {Boolean} convertToObservables 
	 */
	constructor(initValues = {}, convertToObservables = true) {	

		super(initValues, convertToObservables);

		/**
		 * The original values as received from the Api
		 * 
		 * @property originalValues
		 * @type {object}
		 */
		this.originalValues = initValues;

		/**
		 * Values of relationships, keyed by the relationshipname
		 * 
		 * @property related
		 * @type {Object}
		 */
		this.related = {};


		/**
		 * The watchable current state of this model. This
		 * contains attributes for 'busy', 'saving', and 'dirty'.
		 *
		 * You can use this in a view to update the view according
		 * to the model state, using the 'is' property e.g.:
		 *
		 * 	{{#if author.is.busy}}
		 * 		Please wait a moment...
		 * 	{{/if}}
		 * 
		 * @property state
		 * @type {Observable}
		 */
		this.state = new Observable({
			busy: false,
			saving: false,
			dirty: false
		});
		this.state.study(() => {
			this._scheduleAttributeChanged('is');
		});


		// Check computed!
		if (this.constructor.definition) {

			// Apply to model
			this.constructor.definition.initializeModel(this);

		}
		
	}


	///////////
	// State //
	///////////

	/**
	 * Get the model state. This method is used to make the state
	 * available in views.
	 * 
	 * @method getIs
	 * @return {Observable}
	 */
	getIs() {
		return this.state;
	}

	/**
	 * @method isBusy
	 * @return {Boolean} 
	 */
	isBusy() {
		return this.state.get('busy');
	}


	/////////////////////////
	// Information methods //
	/////////////////////////

	/**
	 * Checks whether this model is new or has already been saved. This
	 * is determined by checking whether the 'id' is set.
	 * 
	 * @method isNew
	 * @return {Boolean} 
	 */
	isNew() {
		return !this.get('id');
	}


	/////////////////
	// Get and set //
	/////////////////

	_get(key) {

		// Is there a getter?
		let methodName = 'get' + inflection.camelize(key);
		if (this[methodName] && typeof this[methodName] === 'function') {
			return this[methodName].apply(this, [this.attributes[key]]);
		}

		// Is it a relationship?
		if (this.related[key]) return this.related[key];

		
		// Nothing special. Do basics
		return super._get(key);

	}

	_set(key, value) {
	
		// Cast if necessary
		value = this.castValue(key, value);
		
		// Continue with it
		super._set(key, value);

		// Is dirty?
		if (this.state) {
			this._scheduleUpdateDirty();
		}

		return this;


	}

	/**
	 * Get a value for use in the API, meaning it is in
	 * database format. For example, dates will be converted back
	 * from Moment instances into strings.
	 *
	 * @method getForApi
	 * @param  {string} key 
	 * @return {mixed} 
	 */
	getForApi(key) {

		// Get value
		let value = this.uncastValue(key, this.attributes[key]);		
		return value;


	}

	/**
	 * Cast given value according to the AttributeDefinition for given
	 * key. For example, if you pass a string containing a date as value,
	 * for a Date key, you will receive a Moment instance.
	 * 
	 * @method castValue
	 * @param  {string} key   
	 * @param  {Mixed} value 
	 * @return {Mixed}       
	 */
	castValue(key, value) {

		// Do we need to cast it?
		let attributeDefinition = this.getAttributeDefinition(key);
		if (attributeDefinition) {
			value = attributeDefinition.cast(value);
		}

		return value;

	}

	/**
	 * Uncast given value according to the AttributeDefinition for given key.
	 *
	 * @method uncastValue
	 * @param  {string} key   
	 * @param  {Mixed} value 
	 * @return {Mixed}       
	 */
	uncastValue(key, value) {

		// Do we need to uncast it?
		let attributeDefinition = this.getAttributeDefinition(key);
		if (attributeDefinition) {
			value = attributeDefinition.uncast(value);
		}

		return value;

	}


	/////////////////////////
	// Api related methods //
	/////////////////////////

	/**
	 * Set attribute values that were retrieved from the API, meaning
	 * they will not be seen as dirty, and will overwrite the original values
	 * of the model. 
	 *
	 * @method setAttributesFromApi
	 * @param {Object} attributes
	 * @chainable
	 */
	setAttributesFromApi(attributes) {

		// Loop through them and set values that are not dirty
		_.each(attributes, (value, key) => {

			// Dirty?
			if (this.isDirty(key)) return;

			// Set it, and see this as a non-dirty value
			this.setAttribute(key, value);
			this.originalValues[key] = this.uncastValue(key, this.attributes[key]);

		});
		return this;

	}

	/**
	 * Get attribute values for use in the API.
	 *
	 * @method getAttributesForApi
	 * @param  {Boolean} onlyDirty  When true, only attributes that have been changed will be retrieved
	 * @return {Object}      A hash containing attribute key/values
	 */
	getAttributesForApi(onlyDirty = true) {

		// Which attributes to use?
		let attr = onlyDirty ? this.getDirty() : _.defaults({}, this.attributes);
		attr = _.mapObject(attr, (value, key) => {

			// Do we need to cast it?
			let attributeDefinition = this.getAttributeDefinition(key);
			if (attributeDefinition) {
				value = attributeDefinition.cast(value);
			} else {

				// Is it a moment?
				if (moment.isMoment(value)) {

					// Make it ISO 8601
					value = value.format('YYYY-MM-DD HH:mm:ss');

				} 

				// Is it an array or model?
				else if (value instanceof ObservableArray) {
					value = JSON.stringify(value.toArray());
				}				
				else if (value instanceof Model) {
					value = JSON.stringify(value.getAttributesForApi(onlyDirty));
				}

			}

			return value;
		});
		
		delete attr.id;
		return attr;

	}

	/**
	 * Get the Api instance that is used by this model
	 *
	 * @method getApi
	 * @return {Api.Api}
	 */
	getApi() {

		// Check model definition
		let apiName = this.getDefinition() ? this.getDefinition().api : null;
		return App().apis[apiName];

	}

	/**
	 * Get the uri for this model, that can be used in an API call
	 *
	 * @method getApiUri
	 * @return {string}
	 */
	getApiUri() {

		// Check definition
		let def = this.getDefinition();
		if (!def) throw new Error('Cannot guess the ApiUri for a model that has no ModelDefinition');

		// Get api uri
		return def.getApiUri(this.get('id'));

	}

	/**
	 * Save the model to the Api. 
	 *
	 * Possible options are:
	 * 
	 * **uri** (string)
	 * A custom uri to use instead of the model's default uri
	 * 
	 * **includeRelated** (boolean)
	 * _(Default: true)_ 
	 * Whether to included modifications in the relationships 
	 *
	 * **includeRelatedData** (boolean)	
	 * _(Default: false)_ 
	 * Whether to embed relationship data into the request. Note: this is not following JSONAPI specifications.
	 *
	 * @method save
	 * @param  {Object} [options={}]	Optional options hash
	 * @return {Promise} The promise returned by the ApiCall.execute method
	 */
	save(options = {}) {

		// Make settings
		let settings = $.extend({
			uri: null,
			includeRelated: true,
			includeRelatedData: false
		}, options);

		// Busy?
		if (this.isBusy()) throw new Error('Model has not completed its last action');
		this.state.set('busy', true);
		this.state.set('saving', true);

		// Create the call
		if (!settings.uri) settings.uri = this.getApiUri();
		let apiCall = this.getApi().saveModel(this, settings);

		// Handle it.
		apiCall.getPromise('complete').then(() => {

			// No longer dirty!
			this.state.set('dirty', false);
			
			// No longer busy
			this.state.set('busy', false);
			this.state.set('saving', false);

			// Trigger.
			this.trigger('save', apiCall);

		}, () => {
			
			// No longer busy
			this.state.set('busy', false);
			this.state.set('saving', false);

			this.trigger('error', apiCall);

		});

		// Done.
		return apiCall.execute();
		
	}






	///////////////////////
	// Dirtying of model //
	///////////////////////



	/**
	 * @method getDirty
	 * @return {Object} Key/value hash containing dirty attributes
	 */
	getDirty() {

		// Get dirty values
		let dirty = {};
		_.each(this.attributes, (value, key) => {

			// Not in original or changed?
			if (this.isDirty(key)) { 

				// Then it's dirty
				dirty[key] = value;

			}

		});

		return dirty;

	}

	/**
	 * Determine whether the model, or a specific attribute is dirty
	 * (meaning it has been changed since initialization or Api update)
	 * 
	 * @method isDirty
	 * @param  {string}  [key]    Optional attribute name
	 * @return {Boolean}     
	 */
	isDirty(key = null) {

		// Specific key?
		if (key) {

			// None at all?
			if (this.attributes[key] === undefined) return false;

			// Is it new?
			if (this.attributes[key] && this.originalValues[key] === undefined) return true;

			// Has it changed
			let oldValue = this.originalValues[key];
			let newValue = this.uncastValue(key, this.attributes[key]);
			return oldValue != newValue;

		} else {

			// Loop to see if anything is dirty
			for (let key in this.attributes) {
				if (this.isDirty(key)) return true;
			}
			return false;

		}

	}

	/**
	 * Check the current dirty state of the model and update
	 * its status value.
	 *
	 * @method updateDirty
	 * @chainable
	 */
	updateDirty() {

		let isDirty = this.isDirty();
		if (isDirty !== this.get('isDirty')) {
			this.state.set('dirty', this.isDirty());
		}
		return this;

	}

	_scheduleUpdateDirty() {
		
		// Already going?
		if (this._scheduleUpdateDirtyTimeout) return;

		// Wait a bit
		this._scheduleUpdateDirtyTimeout = setTimeout(() => {
			this.updateDirty();
			this._scheduleUpdateDirtyTimeout = null;
		}, Model.UpdateDirtyDelay);

	}



	///////////////////
	// Relationships //
	///////////////////

	/**
	 * Set the given model as the value of a relationship
	 * 
	 * @method setRelatedModel
	 * @param {string} relationshipName 
	 * @param {Data.Model} relatedModel    
	 * @chainable
	 */
	setRelatedModel(relationshipName, relatedModel) {

		// Set it
		this.related[relationshipName] = relatedModel;
		return this;

	}

	/**
	 * Add the given model to a relationship collection
	 *
	 * @method addRelatedModel
	 * @param {string} relationshipName 
	 * @param {Data.Model} relatedModel     
	 * @param {boolean} fromApi		
	 * @chainable
	 */
	addRelatedModel(relationshipName, relatedModel, fromApi = false) {
		
		// Check if collection exists
		if (this.related[relationshipName] === undefined) {
				
			// Make collection
			this.related[relationshipName] = new Collection(relatedModel.constructor);

		} 
		
		// Is it a valid collection?
		else if ((!this.related instanceof Collection)) {
			throw new TypeError('Tried to add a related model to an existing object that is not a Collection');
		}

		// Add model
		let coll = this.related[relationshipName];
		if (fromApi) {
			coll.addFromApi(relatedModel);
		} else {
			coll.add(relatedModel);			
		}

		return this;

	}



	//////////////////////
	// Model definition //
	//////////////////////

	/**
	 * Get this model's ModelDefinition. 
	 * Can be undefined for non-defined Models.
	 *
	 * @method getDefinition
	 * @return {Data.ModelDefinition}
	 */
	getDefinition() {
		return this.constructor.definition;
	}

	/**
	 * Get the definition for given attribute key. 
	 * Can be undefined for non-defined Models, or if the
	 * attribute is not defined in the ModelDefinition.
	 *
	 * @method getAttributeDefinition
	 * @param  {string} key
	 * @return {Data.ModelAttribute}  
	 */
	getAttributeDefinition(key) {

		// Check if the model has a definition at all
		let def = this.getDefinition();
		if (!def) return;

		// Get the attribute
		return def.attributes[key];

	}





}

/**
 * A map of registered model classes
 * 
 * @static
 * @property registry
 * @type {Map}
 */
Model.registry = new Map();

/**
 * A map of Model stores, containing loaded records
 *
 * @static
 * @property stores
 * @type {Map}
 */
Model.stores = new Map();


/**
 * @static
 * @method getStore
 * @param  {string} modelName 
 * @return {Map}           
 */
Model.getStore = (modelName) => {
	if (!Model.stores.has(modelName)) {
		Model.stores.set(modelName, new ModelStore(modelName));
	}
	return Model.stores.get(modelName);
};

/**
 * @static 
 * @method getFromStaore
 * @param  {string} modelName 
 * @param  {number} id        
 * @return {Data.Model}           
 */
Model.getFromStore = (modelName, id) => {

	// Is there a store?
	if (!Model.stores.has(modelName)) return null;
	let store = Model.getStore(modelName);
	return store.get(id);

};

/**
 * Create a new model instance
 *
 * @static
 * @method create
 * @param  {string} modelName  
 * @param  {Object} [initValues={}]
 * @return {Data.Model}            
 */
Model.create = (modelName, initValues = {}) => {

	let ModelClass = Model.registry.get(modelName);
	if (!ModelClass) return new Model(initValues);
	return new ModelClass(initValues);

};


/**
 * The number of milliseconds to delay checking whether the 
 * model has dirty attributes, after it an attribute has been changed.
 * 
 * @property UpdateDirtyDelay
 * @static
 * @type {Number}
 */
Model.UpdateDirtyDelay = 100;


ClassMap.register('Model', Model);

module.exports = Model;