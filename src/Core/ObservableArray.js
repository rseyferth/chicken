import _ from 'underscore';
import Obj from '~/Core/Obj';
import ClassMap from '~/Helpers/ClassMap';

/**
 * @module Core
 */
class ObservableArray extends Obj
{

	/**
	 * An ObservableArray is a simple list that notifies listeners
	 * of any changes in the list or any of it's observable items.
	 *
	 * @class Core.ObservableArray
	 *
	 * @constructor
	 * @param  {Array}  [initValues=[]]        			 An array of values to initialize the object with
	 * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
	 */
	constructor(initValues = [], convertToObservables = true) {
		super();

		
		// Properties
		this._items = [];
		

		// Import start values
		this.import(initValues, convertToObservables, true);


	}


	import(arr, convertToObservables = true, doNotNotify = false) {

		// Go through to the object's first level
		_.each(arr, (value) => {

			// Is the value an array or object?
			if ((Array.isArray(value) || typeof value === 'object') && convertToObservables === true) {

				// Array or object?
				if (Array.isArray(value)) {
					
					// Put a new observable array in there
					this.items.push(new ObservableArray(value));

				} else {

					// Put a new observable in there
					this.items.push(ClassMap.create('Observable', [value]));					

				}

			} else {

				// Just add the value (don't notify)
				this.items.push(value);

			}

		});	

		// Trigger import
		this.trigger(ObservableArray.Events.Import);

		// Notify of change?
		if (!doNotNotify) {
			this.trigger('change');
			this.trigger('added', arr);
		}


		return this;

	}


	get(key) {

		// Split
		let parts = Number.isInteger(key) ? [key] : key.split(/\./);
		let currentPart = parts.shift();

		// Is it a wildcard?
		let value = undefined;
		if (currentPart === '*') {

			// We will return an array containg all the values we retrieve!
			var restKey = parts.join('.');
			return _.map(this._items, (item) => {
				return item.get(restKey);
			});
			

		} else if (Number.isInteger(currentPart) || currentPart.match(/^\d+$/)) {

			// Get the value
			value = this._items[currentPart];

		} else {

			throw new TypeError('Invalid key');

		}

		// Value found?
		if (value === undefined || parts.length === 0) {
			return value;
		}

		// Check if the value is also an observable
		if (ObservableArray.isObservable(value)) {

			// Pass the rest along to go a level deeper
			return value.get(parts.join('.'));

		} else {

			throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value));

		}



	}

	set(key, value, convertToObservables = false) {

		// Convert?
		if (convertToObservables === true && typeof value === 'object' && value.constructor === Object) {
			value = ClassMap.create('Observable', value);
		}

		// Numeric?
		if (Number.isInteger(key) || typeof key === 'string' && key.match(/^\d+$/)) {

			// Set it
			this._items[key] = value;
			return this;

		}


		// Is there a dot in there?
		if (typeof key === 'string' && key.match(/\.\w/)) {		
			
			////////////////////////
			// Split and deep set //
			////////////////////////

			let parts = key.split(/\./);
			let currentPart = parts.shift();
			
			// Does the first key exist?
			let item = this._items[currentPart];
			if (item === undefined) {

				// Should it be an array or an observable?
				let newValue;
				if (Number.isInteger(parts[0]) || (typeof parts[0] === 'string' && parts[0].match(/^\d+$/))) {

					// Create list (using classmap to prevent circular dependencies)
					newValue = new ObservableArray();

				} else {

					// Create it
					newValue = ClassMap.create('Observable');

				}

				// Study it
				newValue.study(() => {
					this.trigger(ObservableArray.Events.Change);
				});
				
				// Store it
				this._items[currentPart] = newValue;	

			}

			// Do deep setting
			this.get(currentPart).set(parts.join('.'), value);

			return this;

		}



		throw new TypeError('Invalid key');


	}

	/**
	 * Add one or more items to the array
	 *
	 * @method add
	 * @param {...[mixed]} values One or more values to add
	 * @chainable
	 */
	add(...values) {

		// Add items
		_.each(values, (value) => {
			
			// Add it.
			this._items.push(value);

			// Is it observable?
			if (ObservableArray.isObservable(value)) {
				value.on('change', () => {
					this.trigger('change');
				});
			}

		});

		// Trigger events
		this.trigger(ObservableArray.Events.Change);
		this.trigger(ObservableArray.Events.Add, values);

		return this;

	}

	/**
	 * Delete one or more items from the array
	 *
	 * @method delete
	 * @param  {...[mixed]} values One or more values to delete
	 * @chainable
	 */
	delete(...values) {

		this._items = _.difference(this._items, values);

		// Trigger events
		this.trigger('change');
		this.trigger('delete', values);

		return this;

	}


	/**
	 * Remove all items from the array
	 *
	 * @method empty
	 * @chainable
	 */
	empty() {

		// Values that are deleted
		var deleted = _.difference(this._items, []);

		// Now clear
		this._items = [];

		// Trigger events
		this.trigger(ObservableArray.Events.Change);
		this.trigger(ObservableArray.Events.Delete, deleted);
		this.trigger(ObservableArray.Events.Empty);

		return this;

	}

	/**
	 * Listen for any changes in any of the object's attributes. 
	 * The callback will receive an array containing the names of
	 * all updates attributes. 
	 *
	 * Note: This is an alias of the 'changed' event, so calling
	 * ```this.on('changed', callback)``` will achieve the same result.
	 *
	 * @example
	 * 	// Initialize object
	 * 	var obj = new Chicken.Core.Observable();
	 * 	obj.set('foo', 'bar');
	 * 	var childObj = new Chicken.Core.Observable();
	 * 	childObj.set('free', 'willy');
	 * 	obj.set('child', childObj);
	 *
	 * 	// Listen
	 * 	obj.study((changedAttributes) {
	 * 		console.log(changedAttributes);
	 * 	});
	 *
	 * 	// Update attributes
	 *	obj.set('foo', 'boo');                  // Will log ['foo']
	 *	obj.get('child').set('free', 'tibet');  // Will log ['child']
	 * 	childObj.set('foo', 'bee');             // Will log ['child']
	 *
	 * @method study
	 * @param  {Function} callback
	 * @chainable
	 */
	study(callback) {

		// This is an alias of the 'changed' event
		return this.on('change', callback);

	}

	/**
	 * Stop listening for changes on the object's attributes.
	 *
	 * Note: This is an alias of the 'changed' event, so calling
	 * ```this.off('changed', callback)``` will achieve the same result.
	 *
	 * @example
	 * 
	 * 
	 * @method neglect
	 * @param  {Function} callback 
	 * @chainable
	 */
	neglect(callback) {

		// This is an alias of the 'changed' event
		return this.off('change', callback);

	}



	toArray() {

		return this.items.map((item) => {

			// Observable?
			if (ObservableArray.isObservable(item)) {

				// Array?
				if (item instanceof ObservableArray) {
					return item.toArray();
				} else {
					return item.toObject();
				}

			}

			return item;
		});

	}



	/**
	 * The number of items in the array
	 * 
	 * @property length
	 * @type {Number}
	 */
	get length() {
		return this._items.length;
	}


	/**
	 * The native Javascript array containing the items
	 * 
	 * @property items
	 * @type {Array}
	 */
	get items() {
		return this._items;
	}



	isObservable() {
		return true;
	}



}

////////////
// Events //
////////////

ObservableArray.Events = {

	/**
	 * This event is fired whenever anything changes in the array
	 * of one of its observable items.
	 * 
	 * @event change
	 */
	Change: 'change',

	/**
	 * This event is fired whenever one or more items are added
	 * 
	 * @event add
	 * @param {Array} values		The item values that were added
	 */
	Add: 'add',


	/**
	 * This event is fired whenever one or more items are deleted
	 * 
	 * @event delete
	 * @param {Array} values		The item values that were deleted
	 */
	Delete: 'delete',


	/**
	 * This event is fired when the array is emptied. Not that the `delete`
	 * event is also triggered, right before the `empty` event.
	 *
	 * @event empty
	 */
	Empty: 'empty',

	/**
	 * This event is fired whenever an import is completed
	 *
	 * @event import
	 */
	Import: 'import'
	
};

ObservableArray.isObservable = (obj) => {

	return typeof obj === 'object' && obj !== null && typeof obj.isObservable === 'function' && obj.isObservable() === true;

};

ClassMap.register('ObservableArray', ObservableArray);




module.exports = ObservableArray;