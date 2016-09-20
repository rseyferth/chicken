import inflection from 'inflection';
import _ from 'underscore';
import $ from 'jquery';

import Api from '~/Api/Api';
import JsonApiCall from '~/Api/JsonApiCall';
import Model from '~/Data/Model';
import Collection from '~/Data/Collection';
import Utils from '~/Helpers/Utils';

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
			includeRelatedData: false
		}, options);
		if (!settings.uri) settings.uri = model.getApiUri();		

		// Make the data
		let data = {
			data: this.serialize(model, settings.includeRelated, settings.includeRelatedData)
		};

		// Check method
		let method = model.isNew() ? 'post' : 'patch';

		// Do the call
		let apiCall = this.call(method, settings.uri, JSON.stringify(data));
		

		// Return it
		return apiCall;

	}

	serialize(model, includeRelated = true, includeRelatedData = false, includedModelGuids = []) {

		// Basics: type and id
		let data = {
			type: inflection.pluralize(inflection.underscore(model.getDefinition().name))			
		};
		let id = model.get('id');
		if (id) data.id = id;

		// Was this model already added before? Then we skip attributes and relationships
		if (!_.contains(includedModelGuids, Utils.uidFor(model))) {

			// Attributes?
			let attr = model.getAttributesForApi();
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

						// Is dirty?
						if (relatedData.isDirty()) {

							// Add them all
							relationships[key] = { data: _.map(relatedData.items, (item) => {

								// Store original model to prevent recursive loop
								if (!includeRelatedData) includedModelGuids.push(Utils.uidFor(item));

								// Add that model, but only add relationships when this model has not been added to the resource before, to prevent nesting recursive loop
								return this.serialize(item, true, includeRelatedData, includedModelGuids);

							}) };

						}

					} else if (relatedData instanceof Model) {

						// Store original model to prevent recursive loop
						if (!includeRelatedData) includedModelGuids.push(Utils.uidFor(model));
			
						// We always insert the related model
						// @TODO Implement check wheter this relationship's local key has changed
						relationships[key] = { data: this.serialize(relatedData, true, includeRelatedData, includedModelGuids) };


					} else {
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




	deserialize(result, apiCall) {

		// Check included data
		if (result.included) {

			// Loop and store them in the model stores
			_.each(result.included, (recordData) => { 
				this.deserializeModel(recordData);
			});
			
		}

		// Is the result an object or an array
		let data = result.data;
		if (data === undefined || data === null) throw new Error('No data received from Api');
		if (data instanceof Array) {

			return this.deserializeCollection(data, apiCall);

		} else if (data instanceof Object) {

			return this.deserializeModel(data, apiCall);

		} 

		// Don't know...
		throw new TypeError('Unrecognized data received from Api');

	}

	deserializeModel(data/* , apiCall */) {

		// Look for the type of model
		let resourceType = data.type;
		let modelClass = Model;
		if (!resourceType) {
			throw new TypeError('Api result did not specity the record type');
		}
		let modelName = inflection.singularize(inflection.capitalize(resourceType));
		if (Model.registry.has(modelName)) {
			modelClass = Model.registry.get(modelName);
		}


		// Collect attributes
		let attributes = {};
		_.each(data.attributes, (value, key) => {
			attributes[inflection.camelize(key, true)] = value;
		});
		
		// Check if the model is already in the store
		let store = Model.getStore(modelName);
		let model;
		if (!store.has(data.id)) {

			// Create a new model.
			attributes.id = data.id;
			model = new modelClass(attributes);
			store.set(data.id, model);

		} else {

			// Get and use the model
			model = store.get(data.id);
			
			// Set the attributes (not overwriting dirty ones)
			model.setAttributesFromApi(attributes);

		}

		// Check relationships records.
		if (data.relationships) {
			_.each(data.relationships, (rel, relationshipName) => {

				// Is there data?
				if (rel.data) {

					// Is it one record?
					if (rel.data instanceof Array) {

						// Loop and add
						_.each(rel.data, (relData) => {
							let relatedModel = this._getRelatedModel(relData);
							if (relatedModel) {

								// Add to model
								model.addRelatedModel(relationshipName, relatedModel, true);

							}
						});

					} else if (rel.data instanceof Object) {

						// Get the one
						let relatedModel = this._getRelatedModel(rel.data);
						if (relatedModel) {

							// Set it
							model.setRelatedModel(relationshipName, relatedModel);

						}

					} else {

						throw new TypeError('Unrecognized relationship data received from Api');
					}



				}

			});
		}

		return model;

	}
	deserializeCollection(data, apiCall) {

		// Make a collection
		let collection = new Collection(apiCall.modelClass);
		
		// Add records
		_.each(data, (recordData) => {
			collection.addFromApi(this.deserializeModel(recordData), true);
		});
		
		return collection;

	}



	_getRelatedModel(relationshipData) {

		// Check data integrity
		let relType = relationshipData.type;
		let relId = relationshipData.id;
		if (!relType) throw new TypeError('Api result did not specify the relationship type');
		if (!relId) throw new TypeError('Api result did not specify the relationship record id'); 

		// Find model in store
		relType = inflection.singularize(inflection.capitalize(relType));
		let relModel = Model.getFromStore(relType, relId);
	
		return relModel;


	}



}
module.exports = JsonApi;