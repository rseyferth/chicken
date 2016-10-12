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
		this.relationshipsByLocalKey = null;
		this.apiAttributeNames = null;

		this.computedAttributes = {};

		this.validationRules = {};

		this.isDynamic = false;


		callback.apply(this, [this]);

	}

	/**
	 * Making a model dynamic means that not all attributes are defined,
	 * and when submitting the model to an API, all set attributes will
	 * be sent.
	 * 
	 * @method dynamic
	 * @param  {Boolean} [isDynamic=true] 	
	 * @chainable
	 */
	dynamic(isDynamic = true) {
		this.isDynamic = isDynamic;
		return this;
	}


	getRelationshipsByLocalKey() {

		// Initialized?
		if (!this.relationshipsByLocalKey) {

			// Loop through relationships
			this.relationshipsByLocalKey = {};
			_.each(this.relationships, (relationship) => {

				// Stored on local model?
				if (relationship.isStoredOnLocalModel()) {
					this.relationshipsByLocalKey[relationship.localKey] = relationship;
				}

			});

		}
		return this.relationshipsByLocalKey;

	}

	getRelationshipByLocalKey(localKey) {

		
		return this.getRelationshipsByLocalKey()[localKey];

	}

	getApiAttributeNames() {

		// Initialized?
		if (!this.apiAttributeNames) {
			this.apiAttributeNames = _.filter(this.attributeNames, (name) => {
				return this.attributes[name].includeInRequests;
			});
		}
		return this.apiAttributeNames;

	}


	hasAttribute(key) {
		return this.attributes[key] !== undefined;
	}


	initializeModel(model) {

		// Don't notify
		model.withoutNotifications(() => {

			// Default values
			_.each(this.attributes, (attr) => {
				if (attr.defaultValue && model.attributes[attr.name] === undefined) {
					model.set(attr.name, attr.defaultValue);
				}
			});
			
			// Add computed
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
	number(name) {
		let attr = this.attribute(name, ModelAttribute.Number);
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


	dateTime(name) {
		let attr = this.attribute(name, ModelAttribute.DateTime);
		return attr;
	}

	time(name) {
		let attr = this.attribute(name, ModelAttribute.Time);
		return attr;
	}

	text(name) {
		let attr = this.attribute(name, ModelAttribute.Text);
		return attr;		
	}

	boolean(name) {
		let attr = this.attribute(name, ModelAttribute.Boolean);
		return attr;		
	}


	//////////
	// JSON //
	//////////

	array(name) {
		let attr = this.attribute(name, ModelAttribute.Array);
		return attr;
	}

	object(name) {
		let attr = this.attribute(name, ModelAttribute.Object);
		return attr;	
	}


	//////////////////////
	// Column shortcuts //
	//////////////////////

	timestamps() {
		this.dateTime('createdAt').hidden();
		this.dateTime('updatedAt').hidden();
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


	/////////////////////
	// Form validation //
	/////////////////////

	validation(rules, formKey = 'default') {

		this.validationRules[formKey] = rules;
		return this;

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