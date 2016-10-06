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
		this.items = [];
		

		// Import start values
		this.import(initValues, convertToObservables, true);


		/**
		 * Whenever this property is true, no notifications will be triggered
		 * 
		 * @attribute notificationsDisabled
		 * @type {Boolean}
		 */
		this.notificationsDisabled = false;



	}


	import(arr, convertToObservables = true) {

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

		// Trigger changes
		if (!this.notificationsDisabled) {
			this.trigger(ObservableArray.Events.Import);
			this.trigger(ObservableArray.Events.Change);
			this.trigger(ObservableArray.Events.Add, arr);
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
			return _.map(this.items, (item) => {
				return item.get(restKey);
			});
			

		} else if (Number.isInteger(currentPart) || currentPart.match(/^\d+$/)) {

			// Get the value
			value = this.items[currentPart];

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
			this.items[key] = value;
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
			let item = this.items[currentPart];
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
				this.items[currentPart] = newValue;	

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

		// Is the last value a boolean?
		let doNotNotify = false;
		if (values.length > 1 && typeof values[values.length - 1] === 'boolean') {
			doNotNotify = values.pop();
		}

		// Add items
		_.each(values, (value) => {
			
			this._add(value);

		});

		// Trigger events
		if (!doNotNotify) {
			this.trigger(ObservableArray.Events.Change);
			this.trigger(ObservableArray.Events.Add, values);
		}

		return this;

	}


	_add(value) {

		// Add it.
		this.items.push(value);

		// Is it observable?
		if (ObservableArray.isObservable(value)) {
			value.on('change', () => {
				this.trigger('change');
			});
		}

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

		this.items = _.difference(this.items, values);

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
		var deleted = _.difference(this.items, []);

		// Now clear
		this.items = [];

		// Trigger events
		this.trigger(ObservableArray.Events.Change);
		this.trigger(ObservableArray.Events.Delete, deleted);
		this.trigger(ObservableArray.Events.Empty);

		return this;

	}


	/**
	 * Get the first item in the collection
	 * 
	 * @method first
	 * @return {mixed} 
	 */
	first() {
		return _.first(this.items);
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
	 * Get a keyed array containing all items in this ObservableArray
	 * by the value of given key.
	 *
	 * @method keyBy
	 * @param  {string} key 	The attribute key. You can also use dot-notation in this key.
	 * @return {Object}     
	 */
	keyBy(key) {

		// Loop it.
		let result = {};
		_.each(this.items, (item) => {
			let keyValue = item.get(key);
			if (keyValue) result[keyValue] = item;
		});

		return result;

	}


	sortBy(keyOrCallback) {

		// Is it a key?
		let callback = keyOrCallback;
		if (typeof keyOrCallback === 'string') {
			callback = (item) => {
				return item.get(keyOrCallback);
			};
		}

		// Now sort!
		this.items = _.sortBy(this.items, callback);
		return this;

	}


	/**
	 * Get a keyed array containing ObservableArray's with values that have the same
	 * value for given key.
	 *
	 * @method groupBy
	 * @param  {string} key  The attribute key. You can also use dot-notation in this key.
	 * @param  {string} [defaultGroup=default] The key under which to put items that have no value for given key
	 * @return {Object}
	 */
	groupBy(key, defaultGroup = 'default') {

		// Loop it
		let result = {};
		_.each(this.items, (item) => {

			// Get value
			let keyValue = item.get(key);

			// Nothing?
			if (!keyValue) keyValue = defaultGroup;

			// Group known?
			if (!result[keyValue]) result[keyValue] = new ObservableArray;
			result[keyValue].add(item);

		});

		return result;

	}

	/**
	 * Get value for given valueAttribute key from all items
	 * 
	 *
	 * @method list 
	 * @param  {string} valueAttribute 
	 * @param  {string} keyAttribute   
	 * @return {[type]}                [description]
	 */
	list(valueAttribute, keyAttribute = null) {

		let result = keyAttribute ? {} : [];
		_.each(this.items, (item) => {
			if (keyAttribute) {
				result[item.get(keyAttribute)] = item.get(valueAttribute);
			} else {
				result.push(item.get(valueAttribute));
			}
		});
		
		return result;

	}

	/**
	 * Get the lowest value for objects in this array
	 *
	 * @method getLowestValue
	 * @param  {string}  key          
	 * @return {mixed}
	 */
	getLowestValue(key) {

		// Get a list.
		let list = this.list(key);
		return _.min(list);

	}


	each(callback) {

		_.each(this.items, callback);
		return this;

	}





	/**
	 * The number of items in the array
	 * 
	 * @property length
	 * @type {Number}
	 */
	get length() {
		return this.items.length;
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