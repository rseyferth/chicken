import inflection from 'inflection';
import _ from 'underscore';

import Api from '../Api/Api';
import PrimitiveJsonApiCall from '../Api/PrimitiveJsonApiCall';
import Model from '../Data/Model';
import Collection from '../Data/Collection';

/**
 * @module Api
 */
class PrimitiveJsonApi extends Api
{

	/**
	 * @class Api.PrimitiveJsonApi
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
		return new PrimitiveJsonApiCall(this, method, uri, data, ajaxOptions);

	}


	saveModel(/*model, options*/) {
		throw new Error('saveModel is not implemented');
	}

	deleteModel(/*model, options*/) {
		throw new Error('deleteModel is not implemented');
	}

	serialize(/*model, includeRelated = true, includeRelatedData = false, includedModelGuids = []*/) {
		throw new Error('serialize is not implemented');
	}


	deserialize(result, apiCall = null) {

		// Call given?
		if (!apiCall) {
			apiCall = new PrimitiveJsonApiCall(this, 'get', '/foo/bar');
		}

		// Check relationship map
		if (result.links) {

			let map = {};
			_.each(result.links, (info, key) => {

				// Check key (e.g. journeys.line)
				let parts = key.split(/\./);
				let localModel = parts[0];
				let attribute = parts[1];

				// Store in map
				map[localModel] = map[localModel] || {};
				map[localModel][attribute] = info.type;

			});
			apiCall.relationshipMap = map;

		}

		// Deduce root element
		let rootElement = _.camelize(inflection.pluralize(apiCall.modelClass.modelName), true);
		
		// Check included data	
		if (result.linked) {

			// Loop and store them in the model stores
			_.each(result.linked, (records, key) => {

				// Guess model
				let modelClass = Model.registry.get(inflection.camelize(inflection.singularize(key)));
				if (!modelClass) throw new Error('Api result contains resource for which there is no Model defined: ' + inflection.camelize(inflection.singularize(key)));
				_.each(records, (recordData) => {
					this.deserializeModel(recordData, apiCall, false, modelClass);
				});				
			});

			// Now loop again, and connect related models to each other
			_.each(result.linked, (records, key) => {

				// Guess model
				let modelClass = Model.registry.get(inflection.camelize(inflection.singularize(key)));
				_.each(records, (recordData) => { 
					this._deserializeRelationships(recordData, apiCall, key, null, modelClass);
				});
				
			});
			
		}

		// Is the result an object or an array
		let data = result[rootElement];
		if (data === undefined || data === null) throw new Error('No data received from Api');
		if (data instanceof Array) {

			return this.deserializeCollection(data, apiCall);

		} else if (data instanceof Object) {

			return this.deserializeModel(data, apiCall);

		} 

		// Don't know...
		throw new TypeError('Unrecognized data received from Api');

	}

	deserializeModel(data, apiCall, deserializeRelationships = true, modelClass = null) {

		// Look for the type of model
		modelClass = modelClass || apiCall.modelClass;
		let modelName = modelClass.modelName;
		
		// Collect attributes
		let attributes = {};
		_.each(data, (value, key) => {
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

		// Also deserialize relationships?
		if (deserializeRelationships) {

			let localKey = _.underscored(inflection.pluralize(modelName));
			model.withoutNotifications(() => {
				this._deserializeRelationships(data, apiCall, localKey, model);
			});

		}

		return model;

	}
	deserializeCollection(data, apiCall) {

		// Make a collection
		let collection = new Collection(apiCall.modelClass);
		
		// Add records
		_.each(data, (recordData) => {
			collection.addFromApi(this.deserializeModel(recordData, apiCall), true);
		});
		
		return collection;

	}


	_deserializeRelationships(data, apiCall, localModelKey, model = null, modelClass = null) {

		// Model given?
		if (model === null) {

			// Look it up in the store			
			model = apiCall.getResponseModel(this._getModelName(modelClass.modelName), data.id);
			
			// Not known?
			if (!model) throw new Error('Could not deserialize relationships for unknown model: ' + this._getModelName(data.type) + ' with id ' + data.id);

		}

		// Check relationships records.
		if (data.links) {

			_.each(data.links, (rel, relationshipName) => {

				// Is there data?
				if (rel) {

					// __chicken variable?
					if (relationshipName.match(/^__/)) return;
									
					// Camelize
					let modelRelName = inflection.camelize(relationshipName, true);
					let resourceType = apiCall.relationshipMap[localModelKey][relationshipName];

					// Is it one record?
					if (rel instanceof Array) {

						// Find relationship
						let relationship = model.getRelationship(modelRelName);

						// Loop and add
						_.each(rel, (relData) => {

							// Get the model
							let relatedModel = this._getRelatedModel(relData, resourceType, apiCall);
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

					} else  {

						// Get the one
						let relatedModel = this._getRelatedModel(rel, resourceType, apiCall);	
						if (relatedModel) {
							
							// Set it
							model.setRelatedModel(modelRelName, relatedModel);

						}

					}



				}

			});

		}

		// Trigger the event
		model.trigger('deserialized', [this]);

	}


	_getRelatedModel(relId, relType, apiCall) {

		// Check data integrity
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
export default PrimitiveJsonApi;