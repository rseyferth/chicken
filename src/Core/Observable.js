import Chicken_Core_Object from './Object';

class Chicken_Core_Observable extends Chicken_Core_Object {

	/**
	 * Create new observable
	 * @return {Chicken_Core_Observable}
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

	get(key) {
		return this._data.get(key);
	}
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