import inflection from 'inflection';
import _ from 'underscore';
import $ from 'jquery';

import Api from '../Api/Api';
import JsonApiCall from '../Api/JsonApiCall';
import Model from '../Data/Model';
import Collection from '../Data/Collection';
import Utils from '../Helpers/Utils';

/**
 * @module Api
 */
class JsonApi extends Api
{

	/**
	 * @class Api.JsonApi
	 * @extends Api.Api
	 *
	 * @constructor
	 * @param  {Object} options
	 */
	constructor(options) {
		super(options);
	}


	call(method, uri, data = {}, ajaxOptions = {}) {

		// Create api call
		return new JsonApiCall(this, method, uri, data, ajaxOptions);

	}


	saveModel(model, options) {

		// Make settings
		let settings = $.extend({
			includeRelated: true,
			includeRelatedData: false		// False, true, or array of relationship names
		}, options);
		if (!settings.uri) settings.uri = model.getApiUri();		


		// Make the data
		let data = {
			data: this.serialize(model, settings.includeRelated, settings.includeRelatedData)
		};

		// Check method
		let method = model.isNew() ? 'post' : 'patch';


		// Do the call
		var cache = [];
		let apiCall = this.call(method, settings.uri, JSON.stringify(data, function(key, value){
			if (typeof value === 'object' && value !== null) {
				if (cache.indexOf(value) !== -1) {
					// Circular reference found, discard key
					return;
				}
				// Store value in our collection
				cache.push(value);
			}
			return value;		
		}), settings.ajax);
		cache = null; // Enable garbage collection
		

		// Return it
		return apiCall;

	}

	deleteModel(model, options) {

		// Make settings
		let settings = $.extend({			
		}, options);
		if (!settings.uri) settings.uri = model.getApiUri();		

		// Make the data
		let data = {
			data: this.serialize(model)
		};

		// Do the call
		var cache = [];
		let apiCall = this.call('delete', settings.uri, JSON.stringify(data, function(key, value){
			if (typeof value === 'object' && value !== null) {
				if (cache.indexOf(value) !== -1) {
					// Circular reference found, discard key
					return;
				}
				// Store value in our collection
				cache.push(value);
			}
			return value;		
		}), settings.ajax);
		cache = null; // Enable garbage collection
		
		// Return it
		return apiCall;

	}

	serialize(model, includeRelated = true, includeRelatedData = false, includedModelGuids = []) {

		// Check related data
		if (typeof includeRelatedData === 'string') includeRelatedData = [includeRelatedData];

		// Basics: type and id
		let data = {
			type: inflection.pluralize(inflection.underscore(model.getDefinition().name))			
		};
		let id = model.get('id');
		if (id) data.id = id;

		// Add pivot data?		
		if (model.isPivot()) {


			// Get attributes (non-dirty as well.)
			let pivotAttributes = model.getPivot().getAttributesForApi(false);
			if (_.size(pivotAttributes) > 0) {

				// Convert for API
				let meta = {};
				_.each(pivotAttributes, (value, key) => {
					meta[inflection.underscore(key)] = value;
				});

				// Set as meta data
				data.meta = meta;

			}
			

		}


		// Was this model already added before? Then we skip attributes and relationships
		if (!_.contains(includedModelGuids, Utils.uidFor(model))) {

			// Attributes?
			let attr = model.getAttributesForApi(!model.isNew());
			if (_.size(attr) > 0) {
				data.attributes = {};
				_.each(attr, (value, key) => {
					data.attributes[inflection.underscore(key)] = value;
				});
			}
			// Add model guid now, if it hasn't been added before
			includedModelGuids.push(Utils.uidFor(model));

		
			// @TODO Check wheter the reverse of a relationship was already included
			// e.g. In case of author > books > author, the last 'author' should be skipped, even
			// when the 'book' model has it defined.


			// Include related?
			if (includeRelated) {

				// Loop through relationships
				let relationships = {};
				_.each(model.related, (relatedData, key) => {
				
					// Is it a collection?
					if (relatedData instanceof Collection) {

						// Is dirty? or had dirty children
						if (relatedData.isDirty() || relatedData.hasDirtyChildren()) {

							// Add them all
							relationships[key] = { data: _.map(relatedData.items, (item) => {

								// Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
								if (includeRelatedData === false || !_.contains(includeRelatedData, key)) {
									includedModelGuids.push(Utils.uidFor(item));
								}

								// Add that model, but only add relationships when this model has not been added to the resource before, to prevent nesting recursive loop
								return this.serialize(item, true, includeRelatedData, includedModelGuids);

							}) };

						}

					} else if (relatedData instanceof Model) {

						// Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
						if (includeRelatedData === false || _.indexOf(includeRelatedData, key) === -1) {
							includedModelGuids.push(Utils.uidFor(relatedData));
						}
			
						// Is it dirty?
						if (relatedData.isDirty()) {

							// We always add the related model data
							relationships[key] = { data: this.serialize(relatedData, true, includeRelatedData, includedModelGuids) };

						}

					} else if (relatedData) {

						// What is this
						throw new TypeError('Unrecognized data found in model\'s relationship ' + key);
					}

				});
				if (_.size(relationships) > 0) {
					data.relationships = relationships;
				}

			}

		}

		return data;

	}


	deserialize(result, apiCall = null) {

		// Call given?
		if (!apiCall) {
			apiCall = new JsonApiCall(this, 'get', '/foo/bar');
		}

		// Check included data
		if (result.included) {

			// Loop and store them in the model stores
			_.each(result.included, (recordData) => { 
				this.deserializeModel(recordData, apiCall, false);
			});
			_.each(result.included, (recordData) => { 
				this._deserializeRelationships(recordData, apiCall);
			});
			
		}

		// Is the result an object or an array
		let data = result.data;
		if (data === undefined || data === null) throw new Error('No data received from Api');
		if (data instanceof Array) {

			return this.deserializeCollection(data, apiCall, result.meta);

		} else if (data instanceof Object) {

			return this.deserializeModel(data, apiCall);

		} 

		// Don't know...
		throw new TypeError('Unrecognized data received from Api');

	}

	deserializeModel(data, apiCall, deserializeRelationships = true) {
		
		// Look for the type of model
		let resourceType = data.type;
		let modelClass = Model;
		if (!resourceType) {
			throw new TypeError('Api result did not specity the record type');
		}
		let modelName = this._getModelName(resourceType);

		if (Model.registry.has(modelName)) {
			modelClass = Model.registry.get(modelName);
		}

		// Collect attributes
		let attributes = {};
		_.each(data.attributes, (value, key) => {
			attributes[inflection.camelize(key, true)] = value;
		});

		// Check if the model is already in the store
		let model = apiCall.getResponseModel(modelName, data.id);
		if (!model) {

			// Create a new model.
			attributes.id = /^\d+$/.test(data.id) ? parseInt(data.id) : data.id;
			model = new modelClass(attributes);
			apiCall.storeReponseModel(model);

		} else {

			// Set the attributes (not overwriting dirty ones)
			model.setAttributesFromApi(attributes);
	
		}

		// Meta?
		if (data.meta) {
			let metaAttributes = {};
			_.each(data.meta, (value, key) => {
				metaAttributes[inflection.camelize(key, true)] = value;
			});
			model.setMetaAttributes(metaAttributes);
		}

		// Also deserialize relationships?
		if (deserializeRelationships) {

			model.withoutNotifications(() => {
				this._deserializeRelationships(data, apiCall, model);				
			});

		}

		return model;

	}
	deserializeCollection(data, apiCall, meta = null) {

		// Make a collection
		let collection = new Collection(apiCall.modelClass);
		
		// Add records
		_.each(data, (recordData) => {
			collection.addFromApi(this.deserializeModel(recordData, apiCall), true);
		});

		// Store meta data
		if (meta) {

			// Store it
			collection.setMetaData(meta);

			// Check pagination
			if (meta.pagination) {
				collection.setPageInfo(
					meta.pagination.current_page,
					meta.pagination.total_pages,
					meta.pagination.per_page,
					meta.pagination.total
				);
			}

		}
		
		return collection;

	}


	_deserializeRelationships(data, apiCall, model = null) {

		// Model given?
		if (model === null) {

			// Look it up in the store			
			model = apiCall.getResponseModel(this._getModelName(data.type), data.id);
			
			// Not known?
			if (!model) throw new Error('Could not deserialize relationships for unknown model: ' + this._getModelName(data.type) + ' with id ' + data.id);

		}


		// Check relationships records.
		if (data.relationships) {

			_.each(data.relationships, (rel, relationshipName) => {

				// Is there data?
				if (rel.data) {

					// Camelize
					let modelRelName = inflection.camelize(relationshipName, true);
					
					// Is it one record?
					if (rel.data instanceof Array) {

						// Find relationship
						let relationship = model.getRelationship(modelRelName);

						// Loop and add
						_.each(rel.data, (relData) => {

							// Get the model
							let relatedModel = this._getRelatedModel(relData, apiCall);
							if (relatedModel) {

								// Pivot data defined?
								let pivotAttributes = null;
								if (relData.meta && relationship.isPivot() && relationship.pivotModel) {

									// Collect pivot attributes
									pivotAttributes = {};
									_.each(relData.meta, (value, key) => {
										pivotAttributes[inflection.camelize(key, true)] = value;
									});

								}

								// Add to collection
								model.addRelatedModel(modelRelName, relatedModel, true, pivotAttributes);

							}
						});

						// Is the relationship sorted?						
						if (relationship && relationship.sortCallback && model.related[modelRelName]) {

							// Apply sorting
							model.related[modelRelName].sortBy(relationship.sortCallback);

						}

					} else if (rel.data instanceof Object) {

						// Get the one
						let relatedModel = this._getRelatedModel(rel.data, apiCall);
						if (relatedModel) {
							
							// Set it
							model.setRelatedModel(modelRelName, relatedModel);

						}

					} else {

						throw new TypeError('Unrecognized relationship data received from Api');
					}



				}

			});

		}

		// Trigger the event
		model.trigger('deserialized', [this]);

	}


	_getRelatedModel(relationshipData, apiCall) {

		// Check data integrity
		let relType = relationshipData.type;
		let relId = relationshipData.id;
		if (!relType) throw new TypeError('Api result did not specify the relationship type');
		if (!relId) throw new TypeError('Api result did not specify the relationship record id'); 

		// Find model in store
		relType = this._getModelName(relType);
		let relModel = apiCall.getResponseModel(relType, relId);
		return relModel;


	}


	_getModelName(resourceType) {

		// directions.locations => Directions.Location
		// times => Time

		let parts = resourceType.split('.'); 
		let modelType = _.map(parts, (part, index) => {
			part = inflection.camelize(part);
			return index === parts.length - 1 ? inflection.singularize(part) : part;
		}).join('.');

		return modelType;

	}





}
export default JsonApi;