import inflection from 'inflection';

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
			this.remoteKey = remoteKey ? remoteKey : inflection.underscore(inflection.singularize(this.localModel));
		}

		return this;

	}




}

Relationship.HasMany = 'HasMany';
Relationship.HasOne = 'BelongsTo';	// Practically the same.
Relationship.BelongsTo = 'BelongsTo';

Relationship.HasManyThrough = 'HasManyThrough';
Relationship.BelongsToMany = 'BelongsToMany';




module.exports = Relationship;
