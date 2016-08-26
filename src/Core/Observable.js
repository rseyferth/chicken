import _ from 'underscore';
import Obj from '~/Core/Obj';
import ClassMap from '~/Helpers/ClassMap';

/**
 * @module Core
 */
class Observable extends Obj {

	/**
	 * The basic object class that notifies **observers** and **students** about 
	 * changes in its attributes. 
	 *
	 * ## Observers
	 * An observer is an object (in actuality a callback) that watches for changes on 
	 * a certain attribute or it's child attributes, in case of nested Observables. 
	 * An observer can {{#crossLink "Core.Observable/disregard"}}{{/crossLink}} the attribute to stop watching.
	 *
	 * 	// Initialize object and watch for changes
	 * 	var obj = new Chicken.Core.Observable();
	 * 	obj.set('foo', 'bar');
	 * 	var callback = () => {
	 * 		alert('Changed: ' + obj.get('foo'));
	 * 	};
	 * 	obj.observe('foo', callback);
	 * 	
	 * 	// Change
	 * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
	 * 	
	 * 	// Stop watching
	 * 	obj.disregard('foo', callback);
	 * 	obj.set('foo', 'back-to-bar'); // Will not alert anthing
	 *
	 * ## Students
	 * A student is an object (in actuality a callback) that watches for changes in
	 * **any attribute** or any **child attribute**, in case of nested Observables.
	 * An observer can **neglect** their study to stop wachting.
	 *
	 * 	// Initialize object
	 * 	var obj = new Chicken.Core.Observable();
	 * 	obj.set('foo', 'bar');
	 * 	var childObj = new Chicken.Core.Observable();
	 * 	childObj.set('free', 'willy');
	 * 	obj.set('child', childObj);
	 *
	 * 	// Listen
	 * 	var callback = (changedAttributes) {
	 * 		console.log(changedAttributes);
	 * 	};
	 * 	obj.study(callback);
	 *
	 * 	// Update attributes
	 *	obj.set('foo', 'boo');                  // Will log ['foo']
	 *	obj.get('child').set('free', 'tibet');  // Will log ['child']
	 * 	childObj.set('foo', 'bee');             // Will log ['child']
	 *
	 * 	// Neglect my study
	 * 	obj.neglect(callback);
	 * 	obj.set('foo', 'back to bar');          // Will not log anything
	 *
	 * @class Core.Observable
	 * @extends Core.Object
	 *
	 * @constructor
	 * @param  {Object}  [initValues={}]       			 A hash of key-value pairs to initialize the object with
	 * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
	 **/
	constructor(initValues = {}, convertToObservables = true) {
		
		// Basics
		super();

		////////////////
		// Properties //
		////////////////
		
		/**
		 * @property observers
		 * @type {Map}
		 */
		this.observers = new Map();
		
		/**
		 * @attribute attributes
		 * @type {object}
		 */
		this.attributes = {};


		////////////////////
		// Initialization //
		////////////////////

		// Initialize values
		this.import(initValues, convertToObservables, true);
		
	}

	////////////////////
	// Public methods //
	////////////////////

	/**
	 * Check if attribute is defined
	 *
	 * @method has
	 * @param  {string}  key The name of the key to check
	 * @return {Boolean}     True when the attribute has been defined
	 */
	has(key) {

		// Split
		let parts = Number.isInteger(key) ? [key] : key.split(/\./);
		let currentPart = parts.shift(); 

		// No deep shit?
		if (parts.length === 0) return this.attributes[currentPart] !== undefined;

		// Look deeper
		let value = this.attributes[currentPart];

		// No value
		if (value === undefined) {
			return false;
		}

		// Check if the value is also an observable
		if (Observable.isObservable(value)) {

			// Pass the rest along to go a level deeper
			return value.has(parts.join('.'));

		} else {

			return false;

		}


	}

	/**
	 * Get attribute from object
	 *
	 * @method get
	 * @param  {string} key The name of the key to retrieve the value of. You can use dot-notation to use deep-getting
	 * @return The value or undefined when the key is not set
	 */
	get(key) {

		// Split
		let parts = Number.isInteger(key) ? [key] : key.split(/\./);
		let currentPart = parts.shift();

		// Get value
		let value = this.attributes[currentPart];

		// Value found?
		if (value === undefined || parts.length === 0) {
			return value;
		}

		// Check if the value is also an observable
		if (Observable.isObservable(value)) {

			// Pass the rest along to go a level deeper
			return value.get(parts.join('.'));

		} else {

			throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value));

		}



	}

	/**
	 * Set attribute on object. When you set a attribute on Observable, all
	 * *observers* and *students* will be notified of the change.
	 *
	 * @method set
	 * @param {string/array} key   	The name of the key to store the value of. You can use dot-notation to use deep-setting
	 * @param {mixed} value 		The value to store
	 * @param {boolean} [convertToObservables=false]
	 *        						Whether to convert standard object values into Observable instances
	 * @param {boolean} [doNotNotify=false]
	 *        						Whether to skip notifying listeners
	 * @chainable
	 */
	set(key, value, convertToObservables = false, doNotNotify = false) {

		// Convert?
		if (convertToObservables === true && typeof value === 'object' && value !== null) {
			if (value.constructor === Object) {
				value = new Observable(value);
			} else if (Array.isArray(value)) {
				value = ClassMap.create('ObservableArray', [value]);
			}
		}



		// Is there a dot in there?
		if (typeof key === 'string' && key.match(/\.[\w]/)) {		
			
			////////////////////////
			// Split and deep set //
			////////////////////////

			let parts = key.split(/\./);
			let currentPart = parts.shift();
			
			// Does the first key not exist?
			if (this.attributes[currentPart] === undefined) {

				// Should it be an array?
				let newValue;
				if (Number.isInteger(parts[0]) || (typeof parts[0] === 'string' && parts[0].match(/^\d+$/))) {

					// Create list (using classmap to prevent circular dependencies)
					newValue = ClassMap.create('ObservableArray');

				} else {

					// Create it
					newValue = new Observable();

				}

				// Study it
				newValue.study(() => {
					this._triggerAttributeChanged(currentPart);
				});
				
				// Store it
				this.attributes[currentPart] = newValue;

			

			}

			// Do deep setting
			this.get(currentPart).set(parts.join('.'), value);

			return this;


		}

		// Store the value
		this.attributes[key] = value;

		// Is the value observable?
		if (Observable.isObservable(value)) {

			// Study the object
			value.study(() => {
				this._triggerAttributeChanged(key);
			});

		}

		// Update attribute
		if (!doNotNotify) this._triggerAttributeChanged(key, value);

		return this;

	}


	import(obj, convertToObservables = true, doNotNotify = false) {

		// Go through to the object's first level
		_.each(obj, (value, key) => {

			// Is the value an array or object?
			if ((Array.isArray(value) || (typeof value === 'object' && value !== null && value.constructor === Object)) && convertToObservables === true) {

				// Do I have this value?
				if (this.attributes[key] !== undefined && Observable.isObservable(this.attributes[key])) {

					// Import
					var obj = this.attributes.get(key);
					obj.import(value, convertToObservables, doNotNotify);

				} else {

					// Array or object?
					if (Array.isArray(value)) {
						
						// Put a new observable array in there
						this.attributes[key] = ClassMap.create('ObservableArray', [value]);

					} else {

						// Put a new observable in there
						this.attributes[key] = new Observable(value);

					}

				}
			
			} else {

				// Just set the value (don't notify)
				this.set(key, value, convertToObservables, true);

			}

		});	

		// Notify!
		this.trigger(Observable.Events.Import);

		return this;

	}


	/**
	 * Listen for any changes in any of the object's attributes. 
	 * The callback will receive an array containing the names of
	 * all updates attributes. 
	 *
	 * Note: This is an alias of the 'change' event, so calling
	 * ```this.on('change', callback)``` will achieve the same result.
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

		// This is an alias of the 'change' event
		return this.on(Observable.Events.Change, callback);

	}

	/**
	 * Stop listening for changes on the object's attributes.
	 *
	 * Note: This is an alias of the 'change' event, so calling
	 * ```this.off('change', callback)``` will achieve the same result.
	 *
	 * @example
	 * 
	 * 
	 * @method neglect
	 * @param  {Function} callback 
	 * @chainable
	 */
	neglect(callback) {

		// This is an alias of the 'change' event
		return this.off(Observable.Events.Change, callback);

	}


	/**
	 * Observe the attribute with given key, so that callback is called
	 * whenever the attribute or it's child attributes change.
	 *
	 * 	// Initialize object and watch for changes
	 * 	var obj = new Chicken.Core.Observable();
	 * 	obj.set('foo', 'bar');
	 * 	var callback = () => {
	 * 		alert('Changed: ' + obj.get('foo'));
	 * 	};
	 * 	obj.observe('foo', callback);
	 * 	
	 * 	// Change
	 * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
	 * 	
	 * @method observe
	 * @param  {string}   key      The name of the attribute to observe
	 * @param  {Function} callback 
	 * @chainable
	 */
	observe(key, callback) {

		// Get the set
		if (!this.observers.has(key)) {
			this.observers.set(key, new Set());
		}
		var observers = this.observers.get(key);

		// Add callback
		observers.add(callback);

		return this;

	}

	/**
	 * Stop observing the attribute with given key, or any of it's
	 * child attributes.
	 *
	 * @method disregard
	 * @param  {string}   key      The name of the attribute to disregard
	 * @param  {Function} callback 
	 * @chainable
	 */
	disregard(key, callback) {

		// Get the observers
		var observers = this.observers.get(key);
		if (observers === undefined) return this;

		// Remove callback
		observers.delete(callback);

		return this;

	}


	toObject() { 

		var obj = {};
		_.each(this.attributes, (item, key) => {

			// Observable?
			if (Observable.isObservable(item)) {

				// Array?
				if (item instanceof Observable) {
					item = item.toObject();
				} else {
					item = item.toArray();
				}

			}

			obj[key] = item;

		});

		return obj;

	}


	clone(convertToObservables = true) {

		// Make copy!
		var c = this.constructor;
		var copy = new c(this.toObject(), convertToObservables);
		return copy;

	}


	/////////////////////
	// Private methods //
	/////////////////////

	_triggerAttributeChanged(key, value, calledFromObjectChanged = false) {

		// Listeners?
		var observers = this.observers.get(key);
		if (observers !== undefined) {

			// Call them
			observers.forEach((observer) => {
				observer.apply(this);
			});

		}

		// Trigger object change?
		if (calledFromObjectChanged === false) {
			this._triggerObjectChanged([key], true);
		}

	}

	_triggerObjectChanged(changedAttributes, calledFromAttributeChanged = false) {

		// Trigger change event
		this.trigger(Observable.Events.Change, changedAttributes);

		// Called from attribute?
		if (calledFromAttributeChanged === false) {

			// Call individual attributes
			changedAttributes.forEach((value, key) => {
				this._triggerAttributeChanged(key, value, true);
			});

		}

	}



	isObservable() {
		return true;
	}



}


////////////
// Events //
////////////

Observable.Events = {

	/**
	 * This event is fired whenever anything changes in the array
	 * of one of its observable items.
	 * 
	 * @event change
	 */
	Change: 'change',

	/**
	 * This event is fired whenever an import is completed
	 *
	 * @event import
	 */
	Import: 'import'
	
};

Observable.isObservable = (obj) => {

	return typeof obj === 'object' && obj !== null && typeof obj.isObservable === 'function' && obj.isObservable() === true;

};


ClassMap.register('Observable', Observable);

module.exports = Observable;
