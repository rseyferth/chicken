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
	 * @param  {Object}  [initValues={}]          			 A hash of key-value pairs to initialize the object with
	 * @param  {Boolean} [convertObjectsToObservables=true]	 Whether to convert any  Object values in the `initValues` parameter into Observable instance
	 **/
	constructor(initValues = {}, convertObjectsToObservables = true) {
		
		// Basics
		super();

		////////////////
		// Properties //
		////////////////
		
		/**
		 * @attribute observers
		 * @type {Map}
		 */
		this.observers = new Map();
		
		/**
		 * @attribute attributes
		 * @type {Map}
		 */
		this.attributes = new Map();


		////////////////////
		// Initialization //
		////////////////////

		// Initialize values
		_.each(initValues, (value, key) => {
			this.set(key, value, convertObjectsToObservables);
		});

	}

	////////////////////
	// Public methods //
	////////////////////

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
		let value = this.attributes.get(currentPart);

		// Value found?
		if (value === undefined || parts.length === 0) {
			return value;
		}

		// Check if the value is also an observable
		if (typeof value === 'object' && value.isObservable) {

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
	 * @param {boolean} [convertObjectsToObservables=false]
	 *        						Whether to convert standard object values into Observable instances
	 * @chainable
	 */
	set(key, value, convertObjectsToObservables = false) {

		// Convert?
		if (convertObjectsToObservables === true && typeof value === 'object' && value.constructor === Object) {
			value = new Observable(value);
		}

		// Is there a dot in there?
		if (typeof key === 'string' && key.match(/\.[\w]/)) {		
			
			////////////////////////
			// Split and deep set //
			////////////////////////

			let parts = key.split(/\./);
			let currentPart = parts.shift();
			
			// Does the first key exist?
			if (!this.attributes.has(currentPart)) {

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
				this.attributes.set(currentPart, newValue);

			

			}

			// Do deep setting
			this.get(currentPart).set(parts.join('.'), value);

			return this;


		}

		// Store the value
		this.attributes.set(key, value);

		// Is the value observable?
		if (typeof value === 'object' && value.isObservable) {

			// Study the object
			value.study(() => {
				this._triggerAttributeChanged(key);
			});

		}

		// Update attribute
		this._triggerAttributeChanged(key, value);

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



	get isObservable() {
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
	Change: 'change'
	
};

ClassMap.register('Observable', Observable);

module.exports = Observable;
