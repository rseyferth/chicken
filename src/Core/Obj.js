/**
 * @module Core
 */
class Obj {

	/**
	 * Basic object that can trigger events
	 *
	 * @class Core.Obj
	 * @constructor
	 */
	constructor() {
		
		// Init values
		this._listeners = new Map();

	}

	////////////////////
	// Public methods //
	////////////////////

	/**
	 * Add listener for chosen event
	 *
	 * @method on
	 * @param  {string}   eventName The event name to listen for.
	 * @param  {Function} callback  The function to call when the event occurs. Depending on the event, this 
	 *                              callback can receive 0 or more arguments when called.
	 * @example
	 * 		obj.on('message', function(message) {
	 * 			console.log(message);
	 * 		});
	 * @chainable
	 */
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

	/**
	 * Remove a previously added listener for chosen event
	 *
	 * @method off
	 * @param  {string}   eventName The event name to remove listener for
	 * @param  {Function} callback  The previously added callback to remove from listeners
	 * @chainable
	 */
	off(eventName, callback) {

		// Get the callbacks
		var callbacks = this._listeners.get(eventName);
		if (callbacks === undefined) return this;

		// Remove callback
		callbacks.delete(callback);

		return this;

	}

	/**
	 * Trigger calling of all registered callbacks for given event
	 * with given arguments.
	 *
	 * @method trigger
	 * @param  {string}    eventName The event name to trigger callbacks for
	 * @param  {...mixed}  args      Zero or more arguments to pass along to each callback
	 * @chainable
	 */
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

module.exports = Obj;