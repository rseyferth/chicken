import Chicken_Core_Object from './Object';

/**
 * @module Core
 */
class Chicken_Core_Observable extends Chicken_Core_Object {

	/**
	 * The basic object class that notifies **observers** and **students** about 
	 * changes in its attributes. 
	 *
	 * ## Observers
	 * An observer is an object (in actuality a callback) that watches for changes on 
	 * a certain attribute or it's child attributes, in case of nested Observables. 
	 * An observer can {{#crossLink "Core.Observable/disregard"}}{{/crossLink}} the attribute to stop watching.
	 *
	 * <code>
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
	 *  obj.disregard('foo', callback);
	 *  obj.set('foo', 'back-to-bar'); // Will not alert anthing
	 * </code>
	 *
	 * ## Students
	 * A student is an object (in actuality a callback) that watches for changes in
	 * **any attribute** or any **child attribute**, in case of nested Observables.
	 * An observer can **neglect** their study to stop wachting.
	 *
	 * @class Core.Observable
	 * @extends Core.Object
	 */
	constructor() {
		
		// Basics
		super();

		// Init values
		this._observers = new Map();
		this._data = new Map();

	}

	////////////////////
	// Public methods //
	////////////////////

	/**
	 * Get attribute from object
	 *
	 * @method get
	 * @param  {string} key The name of the key to retrieve the value of
	 * @return The value or undefined when the key is not set
	 */
	get(key) {
		return this._data.get(key);
	}

	/**
	 * Set attribute on object. When you set a attribute on Observable, all
	 * *observers* and *students* will be notified of the change.
	 *
	 * @method set
	 * @param {string} key   The name of the key to store the value of
	 * @param {mixed} value  The value to store
	 * @chainable
	 */
	set(key, value) {

		// Store the value
		this._data.set(key, value);

		// Is the value observable?
		if (value instanceof Chicken_Core_Observable) {

			// Study the object
			value.study((changedAttributes) => {
				this._triggerAttributeChanged(key);
			});

		}

		// Update attribute
		this._triggerAttributeChanged(key, value);

		return this;
	}

	study(callback) {

		// This is an alias of the 'changed' event
		return this.on('changed', callback);

	}
	neglect(callback) {

		// This is an alias of the 'changed' event
		return this.off('changed', callback);

	}


	observe(key, callback) {

		// Get the set
		if (!this._observers.has(key)) {
			this._observers.set(key, new Set());
		}
		var observers = this._observers.get(key);

		// Add callback
		observers.add(callback);

		return this;

	}


	disregard(key, callback) {

		// Get the observers
		var observers = this._observers.get(key);
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
		var observers = this._observers.get(key);
		if (observers !== undefined) {

			// Call them
			observers.forEach((observer) => {
				observer.apply(this);
			});

		}

		// Trigger object changed?
		if (calledFromObjectChanged === false) {
			this._triggerObjectChanged([key], true);
		}

	}

	_triggerObjectChanged(changedAttributes, calledFromAttributeChanged = false) {

		// Trigger changed event
		this.trigger('changed', changedAttributes);

		// Called from attribute?
		if (calledFromAttributeChanged === false) {

			// Call individual attributes
			changedAttributes.forEach((value, key) => {
				this._triggerAttributeChanged(key, value, true);
			});

		}

	}




}

export default Chicken_Core_Observable;