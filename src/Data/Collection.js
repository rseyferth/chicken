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


	/**
	 * Create copy of collection and its items
	 *
	 * @method clone
	 * @return {Collection}
	 */
	clone(cacheMap) {
		
		//create cacheMap?
		if (!cacheMap) cacheMap = new Map();
		
		//known in cache map? return it
		if (cacheMap.has(this)) return this;

		//create copy
		let c = this.constructor;
		let copy = new c(this.modelClass);

		//store in cacheMap1
		cacheMap.set(this, copy);

		//copy items
		_.each(this.items, (item) => {
			copy.items.push(item.clone(cacheMap));
		});

		return copy;
	}


	search(query, limit = false, fields = null) {

		// No models in me?
		if (this.items.length === 0) return new Collection(this.modelClass);

		// No fields defined?
		if (!fields) {

			// Try to get fields from definition
			let def = this.modelClass.definition;
			if (def) {

				// Get fields
				fields = def.getSearchFields();

			}

			// Still no field?
			if (!fields) {

				// Use all but id
				fields = _.without(_.keys(_.first(this.items).attributes), 'id');
				
			}

		}

		// Get words
		let words = query.split(/\s+/);
		let result = [];
		_.each(this.items, (model) => {

			// How many words are matched by the fields
			let wordsMatched = 0;
			let entireMatch = false;
			_.each(words, (word) => {

				// Not empty?
				if (!word) return;

				// Loop through fields
				_.each(fields, (field) => {

					// Entire match?
					let value = model.get(field);
					if (value && value === word) {
						entireMatch = true;
						wordsMatched++;
					} else {

						// Check if it contains me
						value = ('' + value).toLowerCase();
						let w = word.toLowerCase();
						let index = value.indexOf(w);
						if (index > -1) wordsMatched++;
					}


				});

			});

			// Match?
			if (wordsMatched > 0) {
				result.push({
					wordsMatched: wordsMatched,
					entireMatch: entireMatch,
					model: model
				});
			}

		});
		
		// Now sort it
		result.sort((a, b) => {

			// Entire match same?
			if (a.entireMatch !== b.entireMatch) {

				// Entire match is better.
				return a.entireMatch ? -1 : 1;

			}

			// # words matched
			if (a.wordsMatched === b.wordsMatched) return 0;
			return a.wordsMatched > b.wordsMatched ? -1 : 1;

		});
		
		// Check limit
		limit = limit ? Math.min(result.length, limit) : result.length;
		
		// Make collection
		let collectionResult = new Collection(this.modelClass);
		for (let q = 0; q < limit; q++) {
			collectionResult.items.push(result[q].model);
		}
		return collectionResult;

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