import _ from 'underscore';
import inflection from 'inflection';

import Model from '../Data/Model';
import Collection from '../Data/Collection';
import PivotCollection from '../Data/PivotCollection';

class Relationship {

	constructor(name, localModel) {

		this.name = name;

		this.type = null;

		this.localModel = localModel;

		this.localKey = null;

		this.remoteModel = null;
		this.remoteKey = null;

		this.morphModelKey = null;
		this.morphModelValuePrefix = null;

		this.pivotModel = null;

		this.pivotAttributes = [];

		this.inverseRelationshipName = null;

		this.touchLocalOnUpdate = false;

		this.sortCallback = false;

	}

	////////////////////////
	// Relationship types //
	////////////////////////

	hasMany(remoteModel, localKey = 'id', remoteKey = null) {

		// Basics
		this.type = Relationship.HasMany;
		this.remoteModel = remoteModel;
		let cleanModel = _.last(this.localModel.split('.'));

		// Guess/store the keys
		if (!this.localKey) this.localKey = localKey;
		if (remoteKey || !this.remoteKey) {
			this.remoteKey = remoteKey || inflection.camelize(inflection.singularize(cleanModel), true) + 'Id';
		}

		// Guess the inverse relationship name
		this.inverseRelationshipName = inflection.camelize(inflection.singularize(cleanModel), true);

		return this;

	}

	belongsTo(remoteModel, localKey = null, remoteKey = 'id') {

		// Basics
		this.type = Relationship.BelongsTo;
		this.remoteModel = remoteModel;

		// Guess/store the keys
		if (localKey || !this.localKey) {
			this.localKey = localKey || inflection.camelize(inflection.singularize(this.name), true) + 'Id';
		}
		if (!this.remoteKey) this.remoteKey = remoteKey;

		return this;

	}

	hasOne(remoteModel, localKey = 'id', remoteKey = null) {

		// Basics
		this.type = Relationship.HasOne;
		this.remoteModel = remoteModel;

		// Guess/store the keys
		if (!this.localKey) this.localKey = localKey;
		if (remoteKey || !this.remoteKey) {
			this.remoteKey = remoteKey || inflection.camelize(inflection.singularize(this.localModel), true) + 'Id';
		}

		return this;

	}


	///////////
	// Pivot //
	///////////

	belongsToMany(remoteModel, localKey = 'id', remoteKey = 'id', pivotModel = null) {

		// Basics 
		this.type = Relationship.BelongsToMany;
		this.remoteModel = remoteModel;
		this.localKey = localKey;
		this.remoteKey = remoteKey;

		// Pivot model given?
		if (!pivotModel) {
			let models = [this.localModel, this.remoteModel];
			models.sort();
			pivotModel = models.join('');
		}
		this.pivotModel = pivotModel;
		
		return this;

	}



	/////////////////////////
	// Morph relationships //
	/////////////////////////

	belongsToMorph(morphModelKey, localKey, remoteKey = 'id', morphModelValuePrefix = 'App\\') {

		// Basics
		this.type = Relationship.BelongsToMorph;
		this.remoteModel = null;

		// Guess/store the keys
		this.localKey = localKey;
		this.remoteKey = remoteKey;
		this.morphModelKey = morphModelKey;
		this.morphModelValuePrefix = morphModelValuePrefix;

		return this;

	}

	hasManyMorph(remoteModel, morphModelKey, localKey = null, remoteKey = 'id', morphModelValuePrefix = 'App\\') {

		// Basics
		this.type = Relationship.HasManyMorph;
		this.remoteModel = remoteModel;
		
		// Guest/store the keys
		this.morphModelKey = morphModelKey;
		if (localKey || !this.localKey) {
			this.localKey = localKey || this.morphModelKey.replace(/Type$/, 'Id');
		}
		if (!this.remoteKey) this.remoteKey = remoteKey;
		this.morphModelValuePrefix = morphModelValuePrefix;

		return this;

	}

	getMorphModelValue(remoteModel) {

		// Check prefix
		let name = remoteModel.getModelName();
		if (this.morphModelValuePrefix) {
			name = `${this.morphModelValuePrefix}${name}`;
		}
		return name;

	}

	usesCollection() {
		return (this.type == Relationship.BelongsToMany || this.type == Relationship.HasMany || this.type == Relationship.HasManyThrough || this.type == Relationship.HasManyMorph);
	}



	/////////////
	// Setters //
	/////////////

	setLocalKey(value) {
		this.localKey = value;
		return this;
	}
	setRemoteKey(value) {
		this.remoteKey = value;
		return this;
	}



	/////////////
	// Methods //
	/////////////

	/**
	 * set a flag to update the dirty attribute of local model
	 * @return {Relationship} Chainable
	 */
	touchLocal(value = true) {
		this.touchLocalOnUpdate = value;
	}

	/**
	 * Add local key as attribute to the modelDefinition to ensure 
	 * that it is being serialized in the apiCall.
	 * Attributes with `Id` will be cast as an integer,
	 * Attributes with 'Key' will be cast as a string.
	 * For other keys manually define them in the model.
	 * 
	 * @param {ModelDefinition} modelDefinition the definition to at the attribute to
	 * @return {Relationship} chainable
	 */
	addLocalKeyToModelDefinitionAttributes(modelDefinition) {

		// Add morph type
		if (this.morphModelKey) {
			modelDefinition.string(this.morphModelKey);
		}

		// Skip if `id` or already exists
		if (this.localKey == 'id' || modelDefinition.hasAttribute(this.localKey)) return this;
		
		// Add key as string
		if (/Key$/.test(this.localKey)) {
			modelDefinition.string(this.localKey);
		} else {
			modelDefinition.integer(this.localKey);
		} 
		return this;

	}


	/**
	 * Add sorting method to the relationship. The given callback will be
	 * called when the relationship Collection is instantiated from the API.
	 * 
	 * @param  {Function} callback 
	 * @chainable
	 */
	sorted(callback) {

		this.sortCallback = callback;
		return this;

	}

	inverse(relationshipName) {
		
		this.inverseRelationshipName = relationshipName;
		return this;

	}

	isStoredOnLocalModel() {

		return this.type === Relationship.BelongsTo || this.type == Relationship.BelongsToMorph;

	}

	isStoredOnRemoteModel() {

		return this.type === Relationship.HasOne || this.type === Relationship.HasMany || this.type == Relationship.HasManyMorph;

	}


	getInitValue() {

		// Depends on the type
		switch (this.type) {

			case Relationship.HasMany:
			case Relationship.HasManyThrough:
			case Relationship.HasManyMorph:
				return new Collection(Model.registry.get(this.remoteModel));

			case Relationship.BelongsToMany:
				return new PivotCollection(Model.registry.get(this.remoteModel), this);

			default:
				return null;
				
		}

	}

	/**
	 * Add one or more attributes as pivot attributes
	 * 
	 * @method withPivot
	 * @param  {...string} attributes  One or more attribute names
	 * @chainable
	 */
	withPivot(...attributes) {

		this.pivotAttributes = _.union(this.pivotAttributes, attributes);
		return this;

	}

	isPivot() {

		return this.type === Relationship.BelongsToMany;
		
	}




}

Relationship.HasMany = 'HasMany';
Relationship.HasOne = 'HasOne';
Relationship.BelongsTo = 'BelongsTo';

Relationship.HasManyThrough = 'HasManyThrough';
Relationship.BelongsToMany = 'BelongsToMany';

Relationship.BelongsToMorph = 'BelongsToMorph';
Relationship.HasManyMorph = 'HasManyMorph';



export default Relationship;
