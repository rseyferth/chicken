import inflection from 'inflection';

import Api from '~/Data/Api/Api';
import JsonApiCall from '~/Data/Api/JsonApiCall';
import Model from '~/Data/Model';
import Collection from '~/Data/Collection';

class JsonApi extends Api
{

	constructor(baseUrl) {
		super(baseUrl);
	}

	call(method, uri, data = {}, ajaxOptions = {}) {

		// Create api call
		return new JsonApiCall(this, method, uri, data, ajaxOptions);

	}



	deserialize(result, apiCall) {

		// Is the result an object or an array
		let data = result.data;
		if (data === undefined || data === null) throw new Error('No data received from Api');
		if (data instanceof Array) {

			return this.deserializeCollection(data, apiCall)

		} else if (data instanceof Object) {

			return this.deserializeModel(data, apiCall);

		} 

		// Don't know...
		throw new TypeError('Unrecognized data received from Api');

	}

	deserializeModel(data, apiCall) {

		// Look for the type of model
		let resourceType = data.type;
		let modelClass = Model;
		if (resourceType) {
			let modelName = inflection.singularize(inflection.capitalize(resourceType));
			if (Model.registry.has(modelName)) {
				modelClass = Model.registry.get(modelName);
			}
		}


		// Collect attributes
		let attributes = {};
		_.each(data.attributes, (value, key) => {
			attributes[inflection.camelize(key, true)] = value;
		});
		if (data.id) attributes.id = data.id;


		// Instantiate
		let model = new modelClass(attributes, false);
		

		return model;

	}
	deserializeCollection(data, apiCall) {

		// Make a collection
		let collection = new Collection(apiCall.modelClass);
		
		// Add records
		_.each(data, (recordData) => {
			collection.add(this.deserializeModel(recordData), true);
		});
		
		return collection;

	}



}
module.exports = JsonApi;