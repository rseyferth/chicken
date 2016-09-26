import inflection from 'inflection';
import _ from 'underscore';

import ModelAttribute from '~/Data/ModelAttribute';
import Relationship from '~/Data/Relationship';
import ComputedProperty from '~/Core/ComputedProperty';

/**
 * @module Data
 */
class ModelDefinition
{

	constructor(name, callback) {	

		this.name = name;

		this.apiUri = '/' + inflection.underscore(inflection.pluralize(name));
		this.api = 'default';

		this.attributes = {};
		this.attributeNames = [];
		this.relationships = {};

		this.computedAttributes = {};


		callback.apply(this, [this]);


	}


	initializeModel(model) {

		// Add computed
		model.withoutNotifications(() => {
			_.each(this.computedAttributes, (attr, key) => {
				model.set(key, new ComputedProperty(attr.dependencies, attr.callback));
			});			
		});

		return model;

	}


		


	attribute(name, type) {
		let attr = new ModelAttribute(name, type);
		this.attributeNames.push(name);
		this.attributes[name] = attr;
		return attr;
	}

	computed(name, dependencies, callback) {

		this.computedAttributes[name] = {
			dependencies: dependencies,
			callback: callback
		};
		return true;

	}



	//////////////////////
	// Column defitions //
	//////////////////////

	integer(name) {
		let attr = this.attribute(name, ModelAttribute.Integer);
		return attr;
	}

	string(name, size) {
		let attr = this.attribute(name, ModelAttribute.String);
		attr.size = size;
		return attr;
	}

	date(name) {
		let attr = this.attribute(name, ModelAttribute.Date);
		return attr;
	}



	//////////////////////
	// Column shortcuts //
	//////////////////////

	timestamps() {
		this.attribute('createdAt', ModelAttribute.DateTime);
		this.attribute('updatedAt', ModelAttribute.DateTime);
		return this;
	}


	///////////////////
	// Relationships //
	///////////////////

	relationship(name) {
		let rel = new Relationship(name, this.name);
		this.relationships[name] = rel;
		return rel;
	}



	/////////
	// Api //
	/////////

	getApiUri(id = null) {
		let uri = this.apiUri;
		if (id) uri += '/' + id;
		return uri;
	}




}

module.exports = ModelDefinition;