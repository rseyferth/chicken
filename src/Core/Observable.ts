import _, { Dictionary } from 'underscore';
import Obj from './Obj';
import Reference from './Reference';
import ComputedProperty from './ComputedProperty';
import IObservable from './IObservable';
import Binding from '../Dom/Binding';
import { uidFor, areEqual } from '../Helpers/Utils';
import ObservableArray from './ObservableArray';

/**
 * @module Core
 */
export default class Observable extends Obj implements IObservable {

	_bindings? : Dictionary<Binding>;	

    observers: Map<string, Set<Function>>;
    attributes: Dictionary<any>;
    
    notificationsDisabled: boolean = false;

    private _scheduleAttributesChangedTimeout? : any;
    private _scheduleAttributesChangedAttributes? : string[];

	

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
	 * @param  {Obj}  [initValues={}]       			 A hash of key-value pairs to initialize the object with
	 * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
	 **/
	constructor(initValues : Dictionary<any> = {}, convertToObservables : boolean = true) {
		
		// Basics
		super();

		this.observers = new Map();
		this.attributes = new Obj();

        // Initialize values
		this.withoutNotifications(() => {
			this.import(initValues, convertToObservables);			
		});
		
	}

	////////////////////
	// Public methods //
	////////////////////

    has(key : any) : boolean {

		// Split
		let parts = typeof key === 'number' ? [key] : key.split(/\./);
		let currentPart = parts.shift(); 

		// No deep shit?
		if (parts.length === 0) return this._has(currentPart) !== undefined;

		// Look deeper
		let value = this._get(currentPart);

		// No value
		if (value === undefined) {
			return false;
		}

		// Check if the value is also an observable
		if (value instanceof Observable) {

			// Pass the rest along to go a level deeper
			return value.has(parts.join('.'));

		} else {

			return false;

		}

    } 
	_has(key : string) : boolean {
		return this.attributes[key] !== undefined;
	}


	/**
	 * Get attribute from object
	 *
	 * @method get
	 * @param  {string} key The name of the key to retrieve the value of. You can use dot-notation to use deep-getting
	 * @return The value or undefined when the key is not set
	 */
	get(key : any) : any {

		// Split
		if (key === undefined) throw new TypeError('There was no key provided');
		let parts = key;
		if (typeof key === 'string') parts = key.split(/\./);
		let currentPart = parts.shift();

		// Get value
		let value = this._get(currentPart);

		// Nothing?
		if (value === undefined) return;

		// Is it a reference?
		if (value instanceof Reference) {
			value = value.getValue();
		}

		// Value found?
		if (parts.length === 0) {

			// Is it computed?
			if (value instanceof ComputedProperty) {
				return value.getValue();
			}

			// Return the value as is.
			return value;
		}

		// Check if the value is also an observable
		if ((<IObservable>value).get) {

			// Pass the rest along to go a level deeper
			return value.get(parts.join('.'));

		} else {

			// Nothing to be retrieved
			return;
			//throw new Error('The found value for ' + currentPart + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value));

		}

	}
	_get(key : string) : any {
		return this.attributes[key];
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
	 * @chainable
	 */
	set(key : any, value : any, convertToObservables = false) {	

		// Object given?
		if (typeof key === 'object') {

			// Loop and set each
			_.each(key, (v, k) => {
				this.set(k, v, convertToObservables);				
			});
			return this;

		}

		// Convert?
		if (convertToObservables === true && typeof value === 'object' && value !== null) {
			if (value.constructor === Obj) {
				value = new Observable(value);
			} else if (Array.isArray(value)) {
				value = new ObservableArray(value);
			}
		}

		// Is it a computed attribute
		if (value instanceof ComputedProperty) {
			value.initialize(key, this);
		}


		// Is there a dot in there?
		if (typeof key === 'string' && key.match(/\.[\w]/)) {		
			
			////////////////////////
			// Split and deep set //
			////////////////////////

			let parts = key.split(/\./);
			let currentPart : string = parts.shift()!;
			
			// Does the first key not exist?
			if (this.attributes[currentPart] === undefined) {

				// Should it be an array?
				let newValue;
				if (typeof parts[0] === 'number' || (typeof parts[0] === 'string' && parts[0].match(/^\d+$/))) {

					// Create list
					newValue = new ObservableArray();

				} else {

					// Create it
					newValue = new Observable();

				}

				// Store it
				this.attributes[currentPart] = newValue;

			}

			// Do deep setting
			this.get(currentPart).set(parts.join('.'), value);

			return this;


		}

		// Now set the attribute
		this.setAttribute(key, value);

		return this;

	}
	setAttribute(key : string, value : any) {

		// Is the value identical?
		if (areEqual(value, this.get(key))) {
			return this;
		}

		// Set it
		this._set(key, value);

		// Is the value observable?
		if (value && typeof value === 'object' && (<IObservable>value).study) {
			
			// Study the object
			value.study(() => {
				this._scheduleAttributeChanged(key);
			});

		}

		// Is the value a reference?
		else if (value instanceof Reference) {

			// Study the object
			value.watch(() => {
				this._scheduleAttributeChanged(key);
			});

		} 

		// Update attribute
		this._scheduleAttributeChanged(key);

		return this;


	}

	setIfChanged(key : string, value : any) {

		// Original
		let originalValue = this.get(key);
		if (originalValue == value) return this;

		return this.set(key, value);


	}


	_set(key : string, value : any) : Observable {

		// Is there a current value that is a reference?
		if (this.attributes[key] instanceof Reference && !(value instanceof Reference)) {
		
			// Write the referenced value
			this.attributes[key].setValue(value);

		} else {

			// Store the value
			this.attributes[key] = value;

		}
		return this;

	}


	setSilently(key, value, convertToObservables = false) {
		return this.withoutNotifications(() => {
			this.set(key, value, convertToObservables);
		});
	}



	unset(key) {

		this._unset(key);
		
		// Update attribute
		this._scheduleAttributeChanged(key);

		return this;	
	}

	_unset(key) {
		delete this.attributes[key];
	}


	import(obj, convertToObservables = true) {

		// Import all items in hash
		this.withoutNotifications(() => {
			_.each(obj, (value, key) => {
				this.set(key, value, convertToObservables);
			});
		});

		// Notify!
		if (!this.notificationsDisabled) this.trigger(Observable.Events.Import);

		return this;

	}

	fill(obj) {

		// Loop through object
		_.each(obj, (value, key) => {

			// Get existing value
			if (this.has(key)) {

				// Get value
				let curValue = this.get(key);

				// Observable?
				if (curValue instanceof Observable) {
					curValue.fill(value);
				} else {
					this.set(key, value, true);
				}

			} else {

				// Just set it.
				this.set(key, value, true);

			}

		});
		return this;

	}


	/**
	 * Increment given attribute's numeric value
	 *
	 * @method increment
	 * @param  {string} key          
	 * @param  {Number} by           (Default = 1)
	 * @param  {Number} defaultValue (Default = 0)
	 * @chainable
	 */
	increment(key, by = 1, defaultValue = 0) {

		let v = this.get(key);
		if (v === undefined || typeof v !== 'number') v = defaultValue;
		v += by;
		this.set(key, v);
		return this;

	}

	/**
	 * Decrement given attribute's numeric value
	 *
	 * @method increment
	 * @param  {string} key          
	 * @param  {Number} by           (Default = 1)
	 * @param  {Number} defaultValue (Default = 0)
	 * @chainable
	 */
	decrement(key, by = 1, defaultValue = 0) {

		let v = this.get(key);
		if (v === undefined || typeof v !== 'number') v = defaultValue;
		v -= by;
		this.set(key, v);
		return this;

	}

	/**
	 * Toggle the given attribute's boolean value
	 *
	 * @method toggle
	 * @param  {string}  key                
	 * @param  {Boolean} valueWhenUndefined  (Default = true) What value to set when the attribute does not have a value yet
	 * @chainable
	 */
	toggle(key, valueWhenUndefined = true) {

		let v = this.get(key);
		if (v === undefined || typeof v !== 'boolean') {
			v = valueWhenUndefined;
		} else {
			v = !v;
		}
		this.set(key, v);
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
	 * @param  {string|array}   key      The name of the attribute to observe
	 * @param  {Function} callback 
	 * @chainable
	 */
	observe(keyOrKeys, callback) {
		
		////////////////////
		// More than one? //
		////////////////////

		if (Array.isArray(keyOrKeys)) {
			_.each(keyOrKeys, (key) => {
				this.observe(key, callback);
			});
			return this;
		}
		var key = keyOrKeys;


		//////////////////////////////
		// Does the key have a dot? //
		//////////////////////////////

		let parts = key.split(/\./);
		if (parts.length > 1) {

			// Get the object concerned
			let attrKey = parts.shift();
			let obj = this.get(attrKey);
			let objKey = parts.join('.');

			// Is it an observable?
			if ((<Observable>obj).observe) {
			
				// Observe this observable itself
				this.observe(attrKey, callback);

				// Go deeper
				return obj.observe(objKey, callback);

			}
			
			throw new Error('Cannot observe property of non-existing object: ' + key);
			
		}

		//////////////////
		// Add observer //
		//////////////////
		
		if (!this.observers.has(key)) {
			this.observers.set(key, new Set());
		}
		var observers = this.observers.get(key);

		// Add callback
		observers!.add(callback);

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

	/**
	 * Get the Observable including all its children
	 * as a native object.
	 *
	 * @method toObject
	 * @return {object}
	 */
	toObject(includedUids : string[] = []) : Dictionary<any> { 

		var obj = {};
		_.each(this.attributes, (item, key) => {

			// Observable?
			if ((<IObservable>item).get) {

				// Already included?
				let guid = uidFor(item);
				if (_.indexOf(includedUids, guid) !== -1) {
					obj[key] = '...recursive('+ guid + ')...';
					return;
				}
				includedUids.push(guid);
				
				// Array?
				if (item instanceof Observable) {
					item = item.toObject(includedUids);
				} else {
					item = item.toArray(includedUids);
				}

			}

			obj[key] = item;

		});

		return obj;

	}

	/**
	 * Apply given callback for each attribute defined in this observable
	 *
	 * @method each
	 * @param  {Function} callback
	 * @chainable
	 */
	each(callback, context = null) {

		_.each(this.attributes, callback, context);
		return this;

	}



	/**
	 * Execute given callback without triggering change notifications.
	 * 
	 * @method withoutNotifications
	 * @param  {Function} callback 
	 * @chainable
	 */
	withoutNotifications(callback) {

		let wasDisabled = this.notificationsDisabled;
		this.notificationsDisabled = true;

		callback();

		this.notificationsDisabled = wasDisabled;


		return this;

	}



	clone(convertToObservables : boolean = true) {

		// Make copy!
		var c : any = this.constructor;
		var copy = new c(this.toObject(), convertToObservables);
		return copy;

	}


	/////////////////////
	// Private methods //
	/////////////////////

	_scheduleAttributeChanged(key) {

		// Notifications disabled?
		if (this.notificationsDisabled) return;

		// Already something scheduled?
		if (!this._scheduleAttributesChangedTimeout) {

			// Schedule it
			this._scheduleAttributesChangedAttributes = [];
			this._scheduleAttributesChangedTimeout = setTimeout(() => {

				// Trigger it now!
				this._scheduleAttributesChangedTimeout = false;
				this._triggerAttributesChanged();

			}, Observable.AttributeChangedDelay);

		}

		// Add attribute to the set
		this._scheduleAttributesChangedAttributes!.push(key);

	}

	_triggerAttributesChanged() {

		// Notifications disabled?
		if (this.notificationsDisabled) return;

		// Clear for next time.
		if (this._scheduleAttributesChangedTimeout) clearTimeout(this._scheduleAttributesChangedTimeout);
		this._scheduleAttributesChangedTimeout = false;		

		// Check my attributes
		var attrs = _.unique(this._scheduleAttributesChangedAttributes!);
		if (attrs) {

			// Collect the observers, using a Set to make sure the same observer can't be called twice
			var combinedObservers = new Set();
			_.each(attrs, (attr) => {
				
				// Get observers
				var attrObservers = this.observers.get(attr);
				if (attrObservers) {
					attrObservers.forEach((observer) => {

						// Add it.
						combinedObservers.add(observer);

					});
				}

			});

			// Did we have any observers?
			combinedObservers.forEach((observer) => {

				// Now call it.
				observer.apply(this);

			});

			// Students as well.
			this.trigger(Observable.Events.Change, attrs);

		}


	}


	isObservable() {
		return true;
	}




	
	
	////////////
	// Events //
	////////////
	
	static Events : Dictionary<string> = {
	
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
	
	
	static AttributeChangedDelay : number = 1;

}
