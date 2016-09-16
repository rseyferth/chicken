import inflection from 'inflection';
import _ from 'underscore';
import $ from 'jquery';

import App from '~/Helpers/App';
import Observable from '~/Core/Observable';
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

		this.related = {};




		this.state = new Observable({
			busy: false,
			saving: false,
			dirty: false
		});
		this.state.study(() => {
			this._scheduleAttributeChanged('is');
		});

	}


	///////////
	// State //
	///////////

	getIs() {
		return this.state;
	}
	isBusy() {
		return this.state.get('busy');
	}



	/////////////////
	// Get and set //
	/////////////////


	_get(key) {

		// Is there a getter?
		let methodName = 'get' + inflection.capitalize(key);
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

	getForApi(key) {

		// Get value
		let value = this.uncastValue(key, this.attributes[key]);		
		return value;


	}

	castValue(key, value) {

		// Do we need to cast it?
		let attributeDefinition = this.getAttributeDefinition(key);
		if (attributeDefinition) {
			value = attributeDefinition.cast(value);
		}

		return value;

	}

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

	getAttributesForApi(onlyDirty = true) {

		// Which attributes to use?
		let attr = onlyDirty ? this.getDirty() : $.extend(this.attributes);
		attr = _.mapObject(attr, (value, key) => {

			// Do we need to cast it?
			let attributeDefinition = this.getAttributeDefinition(key);
			if (attributeDefinition) {
				value = attributeDefinition.cast(value);
			}

			return value;
		});
		delete attr.id;
		return attr;

	}

	getApi() {

		// Check model definition
		let apiName = this.getDefinition() ? this.getDefinition().api : null;
		return App().apis[apiName];

	}

	getApiUri() {

		// Check definition
		let def = this.getDefinition();
		if (!def) throw new Error('Cannot guess the ApiUri for a model that has no ModelDefinition');

		// Get api uri
		return def.getApiUri(this.get('id'));

	}


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
			this.resetDirty();
			
			// No longer busy
			this.state.set('busy', false);
			this.state.set('saving', false);

		}, () => {
			
			// No longer busy
			this.state.set('busy', false);
			this.state.set('saving', false);
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

	updateDirty() {

		this.state.set('dirty', this.isDirty());
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

Model.registry = new Map();

Model.stores = new Map();

Model.getStore = (modelName) => {
	if (!Model.stores.has(modelName)) {
		Model.stores.set(modelName, new ModelStore(modelName));
	}
	return Model.stores.get(modelName);
};

Model.getFromStore = (modelName, id) => {

	// Is there a store?
	if (!Model.stores.has(modelName)) return null;
	let store = Model.getStore(modelName);
	return store.get(id);

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