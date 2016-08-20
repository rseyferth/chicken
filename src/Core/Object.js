class Chicken_Core_Object {

	/**
	 * Create new object
	 * @return {Chicken_Core_Object}
	 */
	constructor() {
		
		// Init values
		this._listeners = new Map();

	}

	////////////////////
	// Public methods //
	////////////////////

	on(eventName, callback) {

		// Get the set
		if (!this._listeners.has(eventName)) {
			this._listeners.set(eventName, new Set());
		}
		var events = this._listeners.get(eventName);
		
		// Add callback
		events.add(callback);

		// Chain
		return this;

	}

	off(eventName, callback) {

		// Get the callbacks
		var callbacks = this._listeners.get(eventName);
		if (callbacks === undefined) return this;

		// Remove callback
		callbacks.delete(callback);

		return this;

	}

	trigger(eventName, ...args) {

		// Get the callbacks
		var callbacks = this._listeners.get(eventName);
		if (callbacks === undefined) return this;

		// Loop and call
		callbacks.forEach((cb) => {
			cb.apply(this, args);			
		});	


		return this;
	}



	/////////////////////
	// Private methods //
	/////////////////////





}

export default Chicken_Core_Object;