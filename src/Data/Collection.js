import _ from 'underscore';

import ObservableArray from '~/Core/ObservableArray';
import ClassMap from '~/Helpers/ClassMap';

class Collection extends ObservableArray
{

	constructor(modelClass = null) {
		
		super();

		this.modelClass = modelClass;

		this.itemsById = {};
		this.originalIds = [];


	}

	knows(id) {
		if (ClassMap.isA(id, 'Model')) id = id.get('id');
		return this.itemsById[id] !== undefined;
	}


	addFromApi(item) {

		// Add it
		this.add(item);

		// Store id as original id
		let id = item.get('id');
		if (id && !_.contains(this.originalIds, id)) {
			this.originalIds.push(id);
		}


		return this;

	}

	_add(value) {

		// Is value a model?
		if (!ClassMap.isA(value, 'Model')) {
			throw new TypeError('You cannot add non-Model values to a Collection');
		}

		// Studying?
		if (this.isStudyingModels) {
			value.study(this.modelStudyCallback);
		}

		// Not already in there?
		let modelId = value.get('id');
		if (!modelId || !this.itemsById[modelId]) {

			// Store it and add it
			this.items.push(value);
			if (modelId) {
				this.itemsById[modelId] = value;
			}

		}

		return this;

	}


	isDirty() {

		// Compare item id's
		let currentIds = _.map(this.items, (item) => {
			return item.get('id');			
		});
		let newIds = _.difference(currentIds, this.originalIds);
		let removedIds = _.difference(this.originalIds, currentIds);

		// Are any of the id's different?
		return newIds.length > 0 || removedIds.length > 0;

	}

	hasDirtyChildren() {
		//check children for dirty
		let dirtyChildren = _.filter(this.items, (item) => {
			return item.isDirty();
		});

		return dirtyChildren.length > 0;
	}



}

Collection.combine = (...collections) => {

	// Combine items by id
	collections = _.flatten(collections);
	let itemArrays = _.pluck(collections, 'itemsById');
	itemArrays.unshift({});
	let resultArray = _.extend.apply(this, itemArrays);

	// Create new collection
	let result = new Collection();
	result.import(resultArray, false);
	return result;

};

module.exports = Collection;