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
		let overlap = _.intersection(currentIds, this.originalIds);
		if (overlap.length !== this.originalIds.length) return true;

		// Maybe one of the models is dirty
		for (let i in this.items) {
			if (this.items[i].isDirty()) return true;
		}

		// Nope.
		return false;

	}



}
module.exports = Collection;