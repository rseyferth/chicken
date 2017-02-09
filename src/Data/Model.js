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
import Utils from '~/Helpers/Utils';
import ComputedProperty from '~/Core/ComputedProperty';

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
	constructor(initValues = {}, convertToObservables = false) {

		super(initValues, convertToObservables);

		/**
		 * The original values as received from the Api
		 * 
		 * @property originalValues
		 * @type {object}
		 */
		this.originalValues = {};
		_.each(initValues, (value, key) => {
			this.originalValues[key] = this.uncastValue(key, value);
		});
		
		/**
		 * Values of relationships, keyed by the relationshipname
		 * 
		 * @property related
		 * @type {Object}
		 */
		this.related = this.related || {};


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
			dirty: false,
			deleting:false,
			deleted: false,
			new: !this.get('id')
		});

		this.state.study(() => {
			this._scheduleAttributeChanged('is');
		});


		/**
		 * list of studied relationships
		 * @type {Object}
		 */
		this._relationshipStudies = {};


		// Check computed!
		if (this.constructor.definition) {

			// Apply to model
			this.constructor.definition.initializeModel(this);

		}

		// A initialize method on the model?
		if (typeof this.initialize === 'function') {
			this.initialize();
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

		// Is it a relationship that was not yet loaded
		let relationship = this.getRelationship(key);
		if (!this.related) this.related = {};
		if (relationship && !this.related[key]) {
			this.related[key] = relationship.getInitValue();
		}

		// Is it a relationship?
		if (this.related && this.related[key]) return this.related[key];


		// Nothing special. Do basics
		return super._get(key);

	}

	_set(key, value) {
		
		// Is there a setter?
		let methodName = 'set' + inflection.camelize(key);
		if (this[methodName] && typeof this[methodName] === 'function') {
			return this[methodName].apply(this, [value]);
		}

		// Is it a relationship that was not yet loaded
		if (!this.related) this.related = {};
		if (this.getRelationship(key)) {

			// Set the model
			this.setRelatedModel(key, value);			

		} else {
		
			// Cast if necessary
			value = this.castValue(key, value);
			
			// Continue with it
			super._set(key, value);
			
		}

		// Is dirty?
		if (this.state) {
			this._scheduleUpdateDirty();
		}

		return this;


	}

	/**
	 * Override Observable.observe
	 *
	 * Check if model has HasMany, HasManyTrough or BelongToMany relations it can study
	 */
	observe(keyOrKeys, callback) {

		//can have multiple keys, call function for each key
		if (Array.isArray(keyOrKeys)) {
			_.each(keyOrKeys, (key) => {
				this.observe(key, callback);
			});
			return this;
		}
		var key = keyOrKeys;

		//Study relation?
		let rel = this.getRelationship(key);
		if (rel && rel.usesCollection()) { 
		
			if (this._relationshipStudies[key] === undefined) {
				this._relationshipStudies[key] = () => {
					this._scheduleAttributeChanged(key);
				};
				this.get(key).study(this._relationshipStudies[key]);
			}
		}

		//super
		return super.observe(keyOrKeys, callback);
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
	 * @param  {Boolean} [onlyDirty=true]  When true, only attributes that have been changed will be retrieved
	 * @param  {Boolean} [modelIsDynamic=false]	 When true, attributes that are not in the model definition are also passed along. This overrides the model definition's 'dynamic' value
	 * @return {Object}      A hash containing attribute key/values
	 */
	getAttributesForApi(onlyDirty = true) {

		// Which attributes to use?
		let attr = onlyDirty ? this.getDirty() : _.defaults({}, this.attributes);

		// Check model definition
		let modelDefinition = this.getDefinition();

		if (modelDefinition) {

			// Use only attributes in the model definition
			let modelAttr = _.pick(attr, (value, key) => {


				// Dynamic?
				if (!modelDefinition.isDynamic) {

					// Has property?
					if (!(modelDefinition.hasAttribute(key) || modelDefinition.getRelationshipByLocalKey(key) !== undefined)) return false;

				}

				// Is the value computed?
				if (value instanceof ComputedProperty) return false;

				// OK.
				return true;

			});

			// Now uncast the values
			attr = _.mapObject(modelAttr, (value, key) => {

				// Get the actual value
				value = Utils.getValue(value);

				// Uncast it for DB usage
				let definition = this.getAttributeDefinition(key);
				if (definition) value = definition.uncast(value);
				return value;

			});

			// Not only dirty?
			if (!onlyDirty && !modelDefinition.isDynamic) {

				// Also add defined attributes that were not set in the model (by default value)
				let missingKeys = _.difference(modelDefinition.getApiAttributeNames(), _.keys(attr));
				_.each(missingKeys, (key) => {
					attr[key] = this.getAttributeDefinition(key).getDefaultValue();
				});
				
			}

			// Remove hidden attributes
			attr = _.omit(attr, modelDefinition.getHiddenAttributeNames());

			

			return attr;

		} else {

			// Loop attributes
			let convertedAttr =  {};
			_.each(attr, (value, key) => {

				// Is the value computed?
				if (value instanceof ComputedProperty) return;

				// Get the actual value
				value = Utils.getValue(value);

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

				// Set it
				convertedAttr[key] = value;

			});

			// Switch
			attr = convertedAttr;


		}
		
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
			includeRelatedData: false	// False, true or an array of relationship-names to save
		}, options);

		// Busy?
		if (this.isBusy()) throw new Error('Model has not completed its last action');
		this.state.set('busy', true);
		this.state.set('saving', true);

		// Create the call
		if (!settings.uri) settings.uri = this.getApiUri();
		let apiCall = this.getApi().saveModel(this, settings);

		// Handle it.
		apiCall.getPromise('complete').then((result) => {

			// Check result
			if (result instanceof Model) {

				// Use id for me.
				if (!this.get('id')) {
					this.set('id', result.get('id'));
					this.state.set('new', false);
				}

			}

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

	/**
	 * Delete the model from the Api. 
	 *
	 * Possible options are:
	 * 
	 * **uri** (string)
	 * A custom uri to use instead of the model's default uri
	 *
	 * @method delete
	 * @param  {Object} [options={}]	Optional options hash
	 * @return {Promise} The promise returned by the ApiCall.execute method
	 */
	delete(options = {}) {

		// Make settings
		let settings = $.extend({
			uri: null,
			modelIsDynamic: false			
		}, options);

		// Busy?
		if (this.isBusy()) throw new Error('Model has not completed its last action');
		this.state.set('busy', true);
		this.state.set('deleting', true);

		// Create the call
		if (!settings.uri) settings.uri = this.getApiUri();
		let apiCall = this.getApi().deleteModel(this, settings);

		// Handle it.
		apiCall.getPromise('complete').then(() => {

			// No longer busy
			this.state.set('busy', false);
			this.state.set('saving', false);
			this.state.set('deleted', true);

			//remove model from the store
			Model.deleteFromStore(this.getModelName(), this.get('id'));

		}, () => {
			
			// No longer busy
			this.state.set('busy', false);
			this.state.set('saving', false);

			this.trigger('error', apiCall);

		});

		// Done.
		return apiCall.execute();
		
	}


	///////////////////
	// Handy methods //
	///////////////////

	toObject(includedUids = []) {

		// Get basics
		let obj = super.toObject(includedUids);

		// Add relationships
		_.each(this.related, (item, key) => {
		
			// Observable?
			if (Observable.isObservable(item)) {

				// Array?
				if (item instanceof Observable) {
					item = item.toObject(includedUids);
				} else {
					item = item.toArray(includedUids);
				}

			}

			obj[key] = item;

		});
		return obj;

	}


	//////////////////////////
	// Forms and validation //
	//////////////////////////

	getValidationRules(formKey = 'default') {

		// Check definition
		let def = this.getDefinition();
		if (def) {
			let rules = def.validationRules[formKey];
			return rules ? rules : null;
		} else {
			return null;
		}

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

			// Get value
			let newValue = this.attributes[key];
			let oldValue = this.originalValues[key];

			// None at all?
			if (newValue === undefined) return false;

			// Is the value computed?
			if (newValue instanceof ComputedProperty) return false;

			// Is it new?
			if (newValue !== undefined && oldValue === undefined) return true;

			//uncast newValue for comparison with original value
			newValue = this.uncastValue(key, newValue);

			// Has it changed
			return !Utils.areEqual(oldValue, newValue);

		} else {

			// Loop to see if anything is dirty
			for (let key in this.attributes) {
				if (this.isDirty(key)) return true;
			}

			//check relationships with touchLocalOnUpdate
			let dirtyRelation = _.find(this.related,(rel, key) => {
				if (this.getRelationship(key) && this.getRelationship(key).touchLocalOnUpdate) {
					return rel.isDirty();
				}
				return false;
			});

			return !(!dirtyRelation);

		}

	}

	/**
	 * Reset dirtyness of model, for given key of for whole model
	 *
	 * @method resetDirty
	 * @param  {string|array} [keys]  	Optional attribute name(s)
	 * @chainable
	 */
	resetDirty(keys = null) {

		// Null?
		if (keys === null) keys = _.keys(this.attributes);
		if (typeof keys === 'string') keys = [keys];

		// Specific key?
		_.each(keys, (key) => {

			this.originalValues[key] = this.uncastValue(key, this.attributes[key]);

		});
		return this;

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

		// Get the relationship itself
		let relationship = this.getRelationship(relationshipName);
		if (!relationship) throw new Error('Error trying to set related model; there is no relationship defined on "' + this.getModelName() + '" by the name "' + relationshipName + '"');
		if (relationship.isStoredOnLocalModel()) {
			
			// Get the remote key's value and set it on the local key
			this.set(relationship.localKey, relatedModel.get(relationship.remoteKey));

		} else if (relationship.isStoredOnRemoteModel()) {

			// Get the local key's value and set it on the remote key
			relatedModel.set(relationship.remoteKey, this.get(relationship.localKey));

		}
		
		this.related[relationshipName] = relatedModel;
	
		// Trigger
		this._scheduleAttributeChanged(relationshipName);


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
	addRelatedModel(relationshipName, relatedModel, fromApi = false, pivotAttributes = null) {
		
		// Check if collection exists
		let relationship = this.getRelationship(relationshipName);
		if (this.related[relationshipName] === undefined) {
				
			// Make collection
			if (relationship) {
				this.related[relationshipName] = relationship.getInitValue();
			} else {
				this.related[relationshipName] = new Collection(relatedModel.constructor);
			}

		} 


		// Is it a valid collection?
		else if (!(this.related[relationshipName] instanceof Collection)) {
			throw new TypeError('Tried to add a related model to an existing object that is not a Collection');
		}

		// Check relationship
		if (relationship && relationship.isPivot() && relatedModel.isPivot) {

			// Create pivot wrapper
			let Pivot = ClassMap.get('Pivot');
			relatedModel = Pivot.createFor(relatedModel, pivotAttributes);

		}
		
		// Add model
		let coll = this.related[relationshipName];
		if (fromApi) {
			coll.addFromApi(relatedModel);
		} else {
			coll.add(relatedModel);			
		}

		// Set the inverse?
		if (relationship && relationship.inverseRelationshipName && relatedModel.hasRelationship(relationship.inverseRelationshipName)) {

			// Set it
			relatedModel.withoutNotifications(() => {
				relatedModel.setRelatedModel(relationship.inverseRelationshipName, this);
			});
			
		}

		// Trigger
		this._scheduleAttributeChanged(relationshipName);

		return this;

	}



	//////////////////////
	// Model definition //
	//////////////////////

	/**
	 * Get the model class name for the current instance. When no definition was
	 * made for this model, 'DefaultModel' will be returned.
	 *
	 * @method getModelName
	 * @return {string} 
	 */
	getModelName() {
		let definition = this.getDefinition();
		if (!definition) return 'DefaultModel';
		return definition.name;
	}

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


	getRelationship(key) {

		// Check if the model has a definition at all
		let def = this.getDefinition();
		if (!def) return null;

		// Get the relationship
		let relationship = def.relationships[key];
		return relationship;

	}

	hasRelationship(key) {

		return !!this.getRelationship(key);

	}

	getRelationshipByLocalKey(key) {

		// Check if the model has a definition at all
		let def = this.getDefinition();
		if (!def) return null;

		// Is it the local key?
		return def.getRelationshipByLocalKey(key);


	}


	isPivot() {
		return false;
	}


	/**
	 * Check whether this instance is the same instance as given parameter.
	 *
	 * @method is
	 * @param  {Chicken.Data.Model}  obj
	 * @return {Boolean}     
	 */
	is(obj) {

		return Utils.uidFor(this) === Utils.uidFor(obj);

	}


	/**
	 * Create copy of model and its attributes and relations
	 *
	 * @method clone
	 * @param  {Chicken.Data.Model}  obj
	 * @return {Boolean}     
	 */
	clone(cacheMap) {

		//create cacheMap?
		if (!cacheMap) cacheMap = new Map();
		
		//known in cache map? return it
		if (cacheMap.has(this)) return cacheMap.get(this);

		//create copy
		let c = this.constructor;
		let copy = new c();

		//store in cacheMap
		cacheMap.set(this, copy);

		//get all attributes
		let attr = {};
		_.each(this.attributes, (value, key) => {
			attr[key] = this.get(key);
			if (attr[key] instanceof Object && typeof attr[key].clone === 'function') {
				attr[key] = attr[key].clone(cacheMap);
			}
			
		});
		
		//store attributes
		copy.attributes = attr;		
		
		//copy relationships
		_.each(this.related, (value, key) => {			
			if (value) copy.related[key] = value.clone(cacheMap);
		});

		

		return copy;
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

Model.deleteFromStore = (modelName, id) => {

	//Is there a store
	if (!Model.stores.has(modelName)) return store;
	//throw new Error('Cannot delete `' + modelName + '` with id `' + id + '` from store. The store cannot be found.');
	let store = Model.getStore(modelName);
	return store.forget(id);

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