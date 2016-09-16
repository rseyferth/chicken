import $ from 'jquery';

import Model from '~/Data/Model';
import ApiCall from '~/Data/Api/ApiCall';
import SettingsObject from '~/Core/SettingsObject';

class Api {

	constructor(options) {
		
		if (new.target === Api) {
			throw new TypeError('It is not possible to instantiate the abstract Api class');
		}

		this.settings = new SettingsObject(options, {
			baseUrl: '/api'
		});
		
	}


	deserialize(/* data, apiCall */) {
		throw new Error('The Api implementation should have a deserialize method.');		
	}


	//////////////////
	// HTTP methods //
	//////////////////

	call(method, uri, data = {}, ajaxOptions = {}) {

		// Create api call
		return new ApiCall(this, method, uri, data, ajaxOptions);

	}

	get(uri, data = {}, ajaxOptions = {}) {
		return this.call('get', uri, data, ajaxOptions);
	}

	post(uri, data = {}, ajaxOptions = {}) {
		return this.call('post', uri, data, ajaxOptions);
	}

	put(uri, data = {}, ajaxOptions = {}) {
		return this.call('put', uri, data, ajaxOptions);
	}
	patch(uri, data = {}, ajaxOptions = {}) {
		return this.call('patch', uri, data, ajaxOptions);
	}

	delete(uri, data = {}, ajaxOptions = {}) {
		return this.call('delete', uri, data, ajaxOptions);
	}


	////////////////////
	// Helper methods //
	////////////////////

	makeUrl(uri) {
		return this.settings.get('baseUrl') + uri;
	}

	ajax(options) {
		options.dataType = 'json';
		return $.ajax(options);
	}


	///////////////////
	// Model methods //
	///////////////////

	one(modelName, id) {

		// Get uri from model
		let ModelClass = Model.registry.get(modelName);
		let uri = ModelClass.definition.getApiUri(id);

		// Make the call
		let call = this.get(uri);
		call.modelClass = ModelClass;
		return call;

	}

	all(modelName) {

		// Get uri from model
		let ModelClass = Model.registry.get(modelName);
		let uri = ModelClass.definition.getApiUri();

		// Make the call
		let call = this.get(uri);
		call.modelClass = ModelClass;
		return call;

	}


	saveModel(/* uri, model */) {
		throw new Error('The Api implementation should have a saveModel method.');		
	}





}
module.exports = Api;