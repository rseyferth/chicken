import inflection from 'inflection';

import Model from '~/Data/Model';
import Collection from '~/Data/Collection';

class Relationship {

	constructor(name, localModel) {

		this.name = name;

		this.type = null;

		this.localModel = localModel;

		this.localKey = null;

		this.remoteModel = null;
		this.remoteKey = null;


		this.pivotModel = null;


	}

	hasMany(remoteModel, localKey = 'id', remoteKey = null) {

		// Basics
		this.type = Relationship.HasMany;
		this.remoteModel = remoteModel;

		// Guess/store the keys
		if (!this.localKey) this.localKey = localKey;
		if (remoteKey || !this.remoteKey) {
			this.remoteKey = remoteKey || inflection.underscore(inflection.singularize(this.localModel)) + 'Id';
		}

		return this;

	}

	belongsTo(remoteModel, localKey = null, remoteKey = 'id') {

		// Basics
		this.type = Relationship.BelongsTo;
		this.remoteModel = remoteModel;

		// Guess/store the keys
		if (localKey || !this.localKey) {
			this.localKey = localKey || inflection.underscore(inflection.singularize(this.localModel)) + 'Id';
		}
		if (!this.remoteKey) this.remoteKey = remoteKey;


	}



	isStoredOnLocalModel() {

		return this.type === Relationship.BelongsTo;

	}


	getInitValue() {

		// Depends on the type
		switch (this.type) {

			case Relationship.HasMany:
			case Relationship.HasManyThrough:
			case Relationship.BelongsToMany:
				return new Collection(Model.registry.get(this.remoteModel));

			default:
				return null;
				
		}

	}




}

Relationship.HasMany = 'HasMany';
Relationship.HasOne = 'HasOne';
Relationship.BelongsTo = 'BelongsTo';

Relationship.HasManyThrough = 'HasManyThrough';
Relationship.BelongsToMany = 'BelongsToMany';




module.exports = Relationship;
