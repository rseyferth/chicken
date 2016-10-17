import _ from 'underscore';
import inflection from 'inflection';

import Model from '~/Data/Model';
import Collection from '~/Data/Collection';
import PivotCollection from '~/Data/PivotCollection';

class Relationship {

	constructor(name, localModel) {

		this.name = name;

		this.type = null;

		this.localModel = localModel;

		this.localKey = null;

		this.remoteModel = null;
		this.remoteKey = null;

		this.morphModelKey = null;

		this.pivotModel = null;

		this.pivotAttributes = [];


	}

	////////////////////////
	// Relationship types //
	////////////////////////

	hasMany(remoteModel, localKey = 'id', remoteKey = null) {

		// Basics
		this.type = Relationship.HasMany;
		this.remoteModel = remoteModel;

		// Guess/store the keys
		if (!this.localKey) this.localKey = localKey;
		if (remoteKey || !this.remoteKey) {
			this.remoteKey = remoteKey || inflection.camelize(inflection.singularize(this.localModel), true) + 'Id';
		}

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

	belongsToMorph(morphModelKey, localKey, remoteKey = 'id') {

		// Basics
		this.type = Relationship.BelongsToMorph;
		this.remoteModel = null;

		// Guess/store the keys
		this.localKey = localKey;
		this.remoteKey = remoteKey;
		this.morphModelKey = morphModelKey;

		return this;

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

	isStoredOnLocalModel() {

		return this.type === Relationship.BelongsTo;

	}

	isStoredOnRemoteModel() {

		return this.type === Relationship.HasOne || this.type === Relationship.HasMany;

	}


	getInitValue() {

		// Depends on the type
		switch (this.type) {

			case Relationship.HasMany:
			case Relationship.HasManyThrough:
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




module.exports = Relationship;
