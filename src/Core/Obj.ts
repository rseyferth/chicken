import _ from 'underscore';

/**
 * @module Core
 */
export default class Obj {

	private static promiseCount = 0;

    listeners: Map<string, Set<Function>>;
    promises: Map<string, PromiseInfo>;

	/**
	 * Basic object that can trigger events
	 *
	 * @class Core.Obj
	 * @constructor
	 */
	constructor() {
		
		// Init values
		this.listeners = new Map<string, Set<Function>>();
		this.promises = new Map<string, PromiseInfo>();

	}

	////////////////////
	// Public methods //
	////////////////////

	promise(key : string, callback : Function) {
		
		// Do the callback
		var promise = this._getPromiseInfo(key);
		callback.apply(null, [promise.resolve, promise.reject]);
		return promise.promise;

	}

	resolvePromise(key : string, ...args : any[]) {
		this._getPromiseInfo(key).resolve.apply(this, args);
		return this;
	}
	rejectPromise(key :string, ...args : any[]) {
		this._getPromiseInfo(key).reject.apply(this, args);
		return this;
	}

	getPromise(key : string) : Promise<any> {
		return this._getPromiseInfo(key).promise;
	}

	resetPromise(key : string) {
		this.promises.delete(key);
	}

	_getPromiseInfo(key : string) : PromiseInfo {

		// Was the promise already defined
		if (!this.promises.has(key)) {

			// Store it
			var p = new PromiseInfo();
			p.promise = new Promise<any>((resolve, reject) => {
				p.resolve = resolve;
				p.reject = reject;		
				p.id = Obj.promiseCount++;
			});
			this.promises.set(key, p);

		}
		return this.promises.get(key)!;
		

	}

	when(...args : any[]) {

		// The last one should be a callback
		let successCallback = args.pop();
		let failCallback = (error : string, ...args : string[]) => {
			throw new Error(`Uncaught promise failure for ${args.join(', ')}: ${error}`);			
		};
		if (args.length > 1 && typeof _.last(args) === 'function') {
			failCallback = successCallback;
			successCallback = args.pop();
		}

		// Collect promises
		let promises : Promise<any>[] = [];
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
	on(eventName : string, callback : Function) {

		// Get the set
		if (!this.listeners.has(eventName)) {
			this.listeners.set(eventName, new Set<Function>());
		}
		var events = this.listeners.get(eventName);
		
		// Add callback
		events!.add(callback);

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
	off(eventName : string, callback : Function) {

		// Get the callbacks
		var callbacks = this.listeners.get(eventName);
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
	trigger(eventName : string, ...args : any[]) {

		// Get the callbacks
		var callbacks = this.listeners.get(eventName);		
		if (callbacks === undefined) return this;
		
		// Loop and call
		callbacks.forEach((cb) => {
			cb.apply(this, args);			
		});	


		return this;
	}




}


export class PromiseInfo {

	promise!: Promise<any>;
	reject!: Function;
	resolve!: Function;
	id!: number;

}
