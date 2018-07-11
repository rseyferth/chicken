import _, { Dictionary } from 'underscore';
import Model, { ModelSaveOptions, ModelConstructor } from './Model';
import ObservableArray from '../Core/ObservableArray';

export interface PageInfo {

    currentPage : number;
    pageCount : number;
    size : number;
    recordCount : number;
    from? : number;
    through? : number;

}

export default class Collection extends ObservableArray
{

    modelClass? : ModelConstructor;
    
    itemsById : Dictionary<Model> = {};
    originalIds : string[] = [];
    meta : Dictionary<any> = {};
    page : Dictionary<any> = {};

	constructor(modelClass? : ModelConstructor) {
		
		super();

		this.modelClass = modelClass;

	}

	knows(idOrModel : string | Model) : boolean {
        let id : string = idOrModel instanceof Model ? idOrModel.get('id') : idOrModel;
		return this.itemsById[id] !== undefined;
	}

	setMetaData(data : Dictionary<any>) {

		this.meta = _.extend(this.meta, data);
		return this;

	}

	setPageInfo(currentPage : number, pageCount : number, recordsPerPage? :number, totalRecordCount? : number) {

		// Basics
		this.page = {
			currentPage: currentPage,
			pageCount: pageCount,
			size: recordsPerPage,
			recordCount: totalRecordCount
		};
		
		// Calculate current
		if (recordsPerPage) {
			this.page.from = (currentPage - 1) * recordsPerPage! + 1;
			this.page.through = Math.min(totalRecordCount!, currentPage * recordsPerPage!);
		}
	}


	get(key) {

		// Page info?
		if (this.page && /^page\.(currentPage|pageCount|size|recordCount|through)$/.test(key)) {
			let [, k] = key.split(/\./);
			return this.page[k];
		}


		// Basics
		return super.get(key);

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

	_add(value : Model) : Collection {

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

	_delete(value : any) : Collection {
		
		// Is value an id?
		if (typeof value === 'number' || typeof value === 'string') {
			value = this.itemsById[value];
			if (!value) return this;
		}

		// Is value a model?
		if (!(value instanceof Model)) {
			throw new TypeError('You cannot delete non-Model values to a Collection');
		}

		// Basics
		super._delete(value);

		// And from keyed array
		delete this.itemsById[value.get('id')];

		return this;

	}


	empty() : Collection {

		// Do the basics
		super.empty();

		// Clear ids
		this.itemsById = {};
		
		return this;

	}


	isDirty() : boolean {

		// Compare item id's
		let currentIds = _.map(this.items, (item) => {
			return item.get('id');			
		});
		let newIds = _.difference(currentIds, this.originalIds);
		let removedIds = _.difference(this.originalIds, currentIds);

		// Are any of the id's different?
		return newIds.length > 0 || removedIds.length > 0;

	}

	hasDirtyChildren() : boolean {
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
	clone(cacheMap? : Map<any, any>) : Collection {
		
		//create cacheMap?
		if (!cacheMap) cacheMap = new Map();
		
		//known in cache map? return it
		if (cacheMap.has(this)) return this;

		//create copy
		let c : any = this.constructor;
		let copy = new c(this.modelClass);

		//store in cacheMap1
		cacheMap.set(this, copy);

		//copy items
		_.each(this.items, (item) => {
			copy.items.push(item.clone(cacheMap));
		});

		return copy;
	}


	search(query, limit? : number | false, fields? : string[]) {

		// No models in me?
		if (this.items.length === 0) return new Collection(this.modelClass);

		// No fields defined?
		if (!fields) {

			// Try to get fields from definition
			let def = this.modelClass!.definition;
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
		let words : string[] = query.split(/\s+/);
		let result : Dictionary<any>[] = [];
		_.each(this.items, (model) => {

			// How many words are matched by the fields
			let wordsMatched = 0;
			let entireMatch = false;
			_.each(words, (word) => {

				// Not empty?
				if (!word) return;

				// Loop through fields
				_.each(fields!, (field) => {

					// Entire match?
					let value = model.get(field);
					if (value && value === word) {
						entireMatch = true;
						wordsMatched++;
					} else {

						// Check if it contains me
						value = ('' + value).toLowerCase();
						let w = word!.toLowerCase();
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


	filter(...args : any[]) : any {

		// Do the basics
		let items = super.filter.apply(this, args);
		
		// Did we receive an ObservableArray?
		if (items instanceof ObservableArray) {
			
			// Make collection
			let collectionResult = new Collection(this.modelClass);
			collectionResult.items = items.items;
			return collectionResult;

		} else {

			// Return items as they are
			return items;

		}
		


	}


	saveAll(saveOptions? : ModelSaveOptions, breakOnError : boolean = true, saveOnlyDirtyModels : boolean = true) : Promise<any> {

		// Create promise
		return new Promise((resolve, reject) => {

			// Prepare queue
			let queue = _.filter(this.items, (item) => {
				return saveOnlyDirtyModels ? item.isDirty() : true;
			});

			// Next
			let saveNext = () => {

				// Queue empty?
				if (queue.length === 0) {
					resolve();
					return;
				}

				// Save next
				let model = queue.shift();
				model.save(saveOptions).then(() => {
					saveNext();
				}, (error) => {

					// Break?
					if (breakOnError) {
						reject(error);
					} else {
						saveNext();
					}

				});
				
			};
			
			// GO!
			saveNext();
			
		});

	}


	
	static fromArray(arr : Model[]) : Collection {
	
		// Empty?
		if (arr.length === 0) return new Collection();
	
		// Create collection
		let coll = new Collection(<ModelConstructor>_.first(arr)!.constructor);
		coll.items = arr;
		return coll;
	
	
	}
	
	static merge(...collections : Collection[]) : Collection {
	
		// Get all items
		collections = _.flatten(collections);
		let items = _.flatten(_.pluck(collections, 'items'));
	
		// Create new collection
		let result = new Collection();
		result.import(items, false);
		return result;
	
	}
	
	static combine = (...collections : Collection[]) : Collection => {
	
		// Combine items by id
		collections = _.flatten(collections);
		let itemArrays = _.map(_.pluck(collections, 'items'), (arr) => {
			let items = {};
			_.each(arr, (item : Model) => {
				items[item.get('id')] = item;
			});		
			return items;
		});
		itemArrays.unshift({});
		let resultArray = _.extend.apply(undefined, itemArrays);
	
		// Create new collection
		let result = new Collection();
		result.import(resultArray, false);
		return result;
	
	}

}
