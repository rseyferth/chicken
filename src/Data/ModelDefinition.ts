import inflection from 'inflection';
import _, { Dictionary } from 'underscore';
import { underscored } from 'underscore.string';
import ModelAttribute from './ModelAttribute';
import Relationship from './Relationship';
import Model from './Model';
import ComputedProperty from '../Core/ComputedProperty';

export interface ComputedAttributeSettings {
    dependencies : string[];
    callback : Function;
}


/**
 * @module Data
 */
export default class ModelDefinition
{

    name : string;
    apiUri : string;
    api : string = 'default';

    attributes : Dictionary<ModelAttribute> = {};
    attributeNames : string[] = [];
    relationships : Dictionary<Relationship> = {};
    relationshipsByLocalKey? : Dictionary<Relationship>;

    apiAttributeNames? : string[];
    hiddenAttributeNames? : string[];
    computedAttributes : Dictionary<ComputedAttributeSettings> = {};
    validationRules : Dictionary<any> = {};
    isDynamic : boolean = false;
    primaryKey : string = 'id';
    tableName : string;
    searchFields? : string[];

    

	constructor(name : string, callback : Function) {	

		this.name = name;

		// Guess api uri from model name
		let parts = name.split('.');
		this.apiUri = '/' + _.map(parts, (part, index) => {
			return inflection.underscore(index === parts.length - 1 ? inflection.pluralize(part) : part);
		}).join('/');

		callback.apply(this, [this]);

		_.each(this.relationships, (rel) => {
			rel.addLocalKeyToModelDefinitionAttributes(this);
		}); 


		// Guess the default table name
		this.tableName = inflection.pluralize(underscored(this.name));

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
	dynamic(isDynamic : boolean = true) : ModelDefinition {
		this.isDynamic = isDynamic;
		return this;
	}


	setPrimaryKey(key : string = 'id') : ModelDefinition {
		this.primaryKey = key;
		return this;
	}

	getRelationshipsByLocalKey() : Dictionary<Relationship> {

		// Initialized?
		if (!this.relationshipsByLocalKey) {

			// Loop through relationships
			this.relationshipsByLocalKey  = {};
			_.each(this.relationships, (relationship) => {

				// Stored on local model?
				if (relationship.isStoredOnLocalModel()) {
					this.relationshipsByLocalKey![relationship.localKey!] = relationship;
				}

			});

		}
		return this.relationshipsByLocalKey;

	}

	getRelationshipByLocalKey(localKey : string) : Relationship {
		
		return this.getRelationshipsByLocalKey()[localKey];

	}

	getApiAttributeNames() : string[] {

		// Initialized?
		if (!this.apiAttributeNames) {
			this.apiAttributeNames = _.filter(this.attributeNames, (name) => {
				return this.attributes[name].includeInRequests;
			});
		}
		return this.apiAttributeNames;

	}

	getHiddenAttributeNames() : string[] {
		// Initialized?
		if (!this.hiddenAttributeNames) {
			this.hiddenAttributeNames = _.filter(this.attributeNames, (name) => {				
				return !this.attributes[name].includeInRequests;
			});
		}
		return this.hiddenAttributeNames;
	}


	hasAttribute(key : string) : boolean {
		return this.attributes[key] !== undefined;
	}


	initializeModel(model : Model) : Model {

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



	attribute(name : string, type : string) : ModelAttribute {
		let attr = new ModelAttribute(name, type);
		this.attributeNames.push(name);
		this.attributes[name] = attr;
		return attr;
	}


	computed(name : string, dependencies : string[], callback : Function) : true {

		this.computedAttributes[name] = {
			dependencies: dependencies,
			callback: callback
		};
		return true;

	}



	//////////////////////
	// Column defitions //
	//////////////////////

	integer(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Integer);
		return attr;
	}
	number(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Number);
		return attr;	
	}

	string(name : string, size : number = 1024) {
		let attr = this.attribute(name, ModelAttribute.String);
		attr.size = size;
		return attr;
	}

	date(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Date);
		return attr;
	}


	dateTime(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.DateTime);
		return attr;
	}

	time(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Time);
		return attr;
	}

	text(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Text);
		return attr;		
	}

	boolean(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Boolean);
		return attr;		
	}

	enum(name : string, options : string[]) {
		let attr = this.attribute(name, ModelAttribute.Enum);
		attr.enumOptions = options;
		return attr;
	}


	///////////
	// Model //
	///////////
	model(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Model);
		return attr;
	}



	//////////
	// JSON //
	//////////

	array(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Array);
		return attr;
	}

	object(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Object);
		return attr;	
	}
	translations(name : string) : ModelAttribute {
		let attr = this.attribute(name, ModelAttribute.Object);
		return attr;
	}


	//////////////////////
	// Column shortcuts //
	//////////////////////

	timestamps() : ModelDefinition {
		this.dateTime('createdAt').hidden();
		this.dateTime('updatedAt').hidden();
		return this;
	}


	///////////////////
	// Relationships //
	///////////////////

	relationship(name : string) : Relationship {
		let rel = new Relationship(name, this.name);
		this.relationships[name] = rel;
		return rel;
	}


	/////////////////////
	// Form validation //
	/////////////////////

	validation(rules : any, formKey : string = 'default') : ModelDefinition {

		this.validationRules[formKey] = rules;
		return this;

	}
		


	///////////////
	// Searching //
	///////////////

	searchable(...fields : string[]) : ModelDefinition {

		// Stroe
        this.searchFields = fields;
        return this;

	}

	getSearchFields() : string[] | undefined {
		return this.searchFields;
	}



	/////////
	// Api //
	/////////

	getApiUri(id? : string) : string {
		let uri = this.apiUri;
		if (id) uri += '/' + id;
		return uri;
	}




}