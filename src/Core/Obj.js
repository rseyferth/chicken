import _ from 'underscore';

var promiseCount = 0;

var objectCount = 0;

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
		this._promises = new Map();

		this.__chickenUid_Obj = `**Obj${++objectCount}**`;
	
	}

	__getUid() {
		return this.__chickenUid_Obj;
	}

	////////////////////
	// Public methods //
	////////////////////

	promise(key, callback) {
		
		// Do the callback
		var promise = this._getPromiseInfo(key);
		callback.apply(null, [promise.resolve, promise.reject]);
		return promise.promise;

	}

	resolvePromise(key, ...args) {
		this._getPromiseInfo(key).resolve.apply(this, args);
		return this;
	}
	rejectPromise(key, ...args) {
		this._getPromiseInfo(key).reject.apply(this, args);
		return this;
	}

	getPromise(key) {
		return this._getPromiseInfo(key).promise;
	}

	resetPromise(key) {
		this._promises.delete(key);
	}

	_getPromiseInfo(key) {

		// Was the promise already defined
		if (!this._promises.has(key)) {

			// Store it
			var p = {};
			p.promise = new Promise((resolve, reject) => {
				p.resolve = resolve;
				p.reject = reject;		
				p.id = promiseCount++;
			});
			this._promises.set(key, p);

		}
		return this._promises.get(key);
		

	}

	when(...args) {

		// The last one should be a callback
		var successCallback = args.pop();
		var failCallback = (error, ...args) => {
			throw new Error('Uncaught promise failure for ' + args.join(', ') + ': ' + error);			
		};
		if (args.length > 1 && typeof _.last(args) === 'function') {
			failCallback = successCallback;
			successCallback = args.pop();
		}

		// Collect promises
		var promises = [];
		_.each(args, (arg) => {
			promises.push(this._getPromiseInfo(arg).promise);			
		});

		// One?
		if (promises.length === 1) {

			// Simple.
			promises[0].then(successCallback, failCallback);

		} else {

			// When all are done
			Promise.all(promises).then(successCallback, failCallback);

		}

		return this;

	}



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

export default Obj;