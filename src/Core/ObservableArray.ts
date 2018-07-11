import _, { Dictionary } from 'underscore';
import Obj from './Obj';
import IObservable from './IObservable';
import Observable from './Observable';
import Binding from '../Dom/Binding';
import { uidFor } from '../Helpers/Utils';

/**
 * @module Core
 */
export default class ObservableArray extends Obj implements IObservable
{
	_bindings? : Dictionary<Binding>;	
	
	_scheduleChangedTimeout? : any;

    static Events = {    

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

    items: any[] = [];
    
    notificationsDisabled : boolean = false;
    isStudyingChildren : boolean = false;
    allowStudyChildren : boolean = true;
    childStudyCallback : Function;


	constructor(initValues : any[] = [], convertToObservables : boolean = true) {
        
        super();

		
		// Single init value given?
		if (!(initValues instanceof Array)) initValues = [initValues];

		// Import start values
		this.import(initValues, convertToObservables);


		this.childStudyCallback = () => {

			// Trigger on.
			this._scheduleChanged();

		};



	}


	import(items : any[], convertToObservables : boolean = true) {

		// Go through to the object's first level
		_.each(items, (value) => {

			// Is the value an array or object?
			if ((Array.isArray(value) || typeof value === 'object') && convertToObservables === true) {

				// Array or object?
				if (Array.isArray(value)) {
					
					// Put a new observable array in there
					this.items.push(new ObservableArray(value));

				} else {

					// Put a new observable in there
					this.items.push(new Observable(value));

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
			this.trigger(ObservableArray.Events.Add, items);
		}
		
		return this;

	}


	get(key : any) : any {

		// Split
		let parts = Number.isInteger(key) ? [key] : key.split(/\./);
		let currentPart = parts.shift();

		// Is it a wildcard?
		let value : any;
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

			throw new TypeError('Invalid key: ' + key);

		}

		// Value found?
		if (value === undefined || parts.length === 0) {
			return value;
		}

		// Check if the value is also an observable
		if ((<IObservable>value).get) {

			// Pass the rest along to go a level deeper
			return value.get(parts.join('.'));

		} else {

			throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retrieve sub-values. Value is ' + (typeof value));

		}



	}


	set(key : any, value : any, convertToObservables : boolean = false) : ObservableArray {

		// Convert?
		if (convertToObservables === true && typeof value === 'object' && value.constructor === Obj) {
			value = new Observable(value, true);
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
			let currentPart : string | undefined = parts.shift();
			
			// Does the first key exist?
			let item = this.items[currentPart!];
			if (item === undefined) {

				// Should it be an array or an observable?
				let newValue;
				if (typeof parts[0] === 'number' || (typeof parts[0] === 'string' && parts[0].match(/^\d+$/))) {

					// Create list (using classmap to prevent circular dependencies)
					newValue = new ObservableArray();

				} else {

					// Create it
					newValue = new Observable();

				}

				// Study it
				if (this.isStudyingChildren) {

					newValue.study(() => {
						this.trigger(ObservableArray.Events.Change);
					});

				}
				
				// Store it
				this.items[currentPart!] = newValue;	

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
	add(...values : any[]) {

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


	_add(value : any) : ObservableArray {

		// Add it.
		this.items.push(value);

		// Studying?
		if (this.isStudyingChildren && this.allowStudyChildren) {
			if ((<IObservable>value).study) value.study(this.childStudyCallback); 			
		}

		// Is it observable?
		if ((<IObservable>value).on) {
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
	delete(...values : any[]) {

		// Is the last value a boolean?
		let doNotNotify = false;
		if (values.length > 1 && typeof values[values.length - 1] === 'boolean') {
			doNotNotify = values.pop();
		}

		// Add items
		_.each(values, (value) => {
			this._delete(value);
		});

		// Studying?
		if (this.isStudyingChildren) {
			_.each(values, (item) => {

				if ((<IObservable>item).neglect) item.neglect(this.childStudyCallback);
				
			});
				
		}

		// Trigger events
		if (!doNotNotify) {
			this.trigger(ObservableArray.Events.Change);
			this.trigger(ObservableArray.Events.Delete, values);
		}

		return this;

	}


	_delete(value : any) {

		this.items = _.without(this.items, value);

	}


	/**
	 * Remove all items from the array
	 *
	 * @method empty
	 * @chainable
	 */
	empty() : ObservableArray {

		// Values that are deleted
		var deleted = _.difference(this.items, []);

		// Remove all listeners
		if (this.isStudyingChildren) {
			_.each(this.items, (item) => {
				item.neglect(this.childStudyCallback);
			});
		}

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
	 * Get the last item in the collection
	 *
	 * @method last
	 * @return {mixed} 
	 */
	last() {
		return _.last(this.items);
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
	study(callback : Function) : ObservableArray {

		// Already studying?
		if (!this.isStudyingChildren && this.allowStudyChildren) {

			// Set
			this.isStudyingChildren = true;

			// Watch all current children
			_.each(this.items, (item) => {				
				if ((<IObservable>item).study) item.study(this.childStudyCallback);				
			});

		}

		// Connect to change-event
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
	neglect(callback : Function) : ObservableArray {

		// This is an alias of the 'changed' event
		return this.off('change', callback);

	}



	toArray(includedUids : string[] = []) : any[] {

		return this.items.map((item) => {

			// Observable?
			if ((<IObservable>item).get) {
				
				// Already included?
				let guid = uidFor(item);
				if (_.indexOf(includedUids, guid) !== -1) {
					return '...recursive(' + guid + ')...';
				}
				includedUids.push(guid);
				
				// Array?
				if (item instanceof ObservableArray) {
					return item.toArray(includedUids);
				} else {
					return item.toObject(includedUids);
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
	 * @return {Obj}     
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

	reverse() {
		this.items.reverse();
		return this;
	}


	/**
	 * Get a keyed array containing ObservableArray's with values that have the same
	 * value for given key.
	 *
	 * @method groupBy
	 * @param  {string} keyOrCallback  The attribute key. You can also use dot-notation in this key.
	 * @param  {string} [defaultGroup=default] The key under which to put items that have no value for given key
	 * @param  {boolean} [makeObservable=false] 
	 * @return {Obj}
	 */
	groupBy(keyOrCallback, defaultGroup = 'default', makeObservable = false) {

		// Get called class
		let MyClass : any = this.constructor;
		
		// Loop it
		let result : any  = makeObservable ? new Observable() : {};
		_.each(this.items, (item) => {

			// Get value
			let keyValue = typeof keyOrCallback === 'function' ? keyOrCallback(item) : item.get(keyOrCallback);

			// Nothing?
			if (!keyValue) keyValue = defaultGroup;

			// Map?
			if (makeObservable) {

				// Group known?
				if (!result.get(keyValue)) result.set(keyValue, new MyClass);

				// Add it
				result.get(keyValue).add(item);

			} else {

				// Group known?
				if (!result[keyValue]) result[keyValue] = new MyClass;

				// Add it
				result[keyValue].add(item);

			}

		});

		return result;

	}

	/**
	 * Get value for given valueAttribute key from all items
	 * 
	 * @method list 
	 * @param  {string} valueAttribute 
	 * @param  {string} keyAttribute   
	 * @return {[type]}                [description]
	 */
	list(valueAttribute : string, keyAttribute? : string) : Dictionary<any> | any[] {

		let result : any = keyAttribute ? {} : [];
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

	reverseEach(callback) {

		for (let q = this.items.length - 1; q >= 0; q--) {
			callback.apply(null, [this.items[q]]);
		}
		return this;

	}


	find(idOrAttributeOrCallback, value = undefined) {

		// Callback?
		if (typeof idOrAttributeOrCallback === 'function') {
			return _.find(this.items, idOrAttributeOrCallback);
		}

		let attribute = 'id';
		if (value === undefined) {
			value = idOrAttributeOrCallback;
		} else {
			attribute = idOrAttributeOrCallback;
		}

		return _.find(this.items, (item) => {

			if ((<IObservable>item).get) {
				return item.get(attribute) == value;
			} else if (item instanceof Obj) {
				return item[attribute] == value;
			} else {
				return item == value;
			}

		});

	}

	/**
	 * find object with empty attribute 
	 *
	 * @method findEmpty
	 * @param  {string}	attribute 	the attribute checked for definition
	 * @return {mixed}				the object containing the empty property or `undefined`
	 */
	findEmpty(attribute) {

		return _.find(this.items, (item) => {

			if ((<IObservable>item).get) {
				return !item.get(attribute);
			} else if (item instanceof Obj) {
				return !item[attribute];
			} else {
				return false;
			}

		});

	}

	contains(item) {
		return _.contains(this.items, item);
	}

	sum(callback) {
		if (typeof callback === 'string') {
			let key = callback;
			callback = (i) => {
				return i.get(key);
			};
		}
		let values : number[] = _.map(this.items, callback);
		return _.reduce(values, (memo : number, num : number) => {
			return memo + num;
		}, 0);		
	}


	map(callback) {

		return _.map(this.items, callback);

	}

	extend(observableArray) {

		return _.extend(this.items, observableArray.items);

	}

	filter(...args) {

		// Parse arguments
		if (args.length === 0) throw new Error('The filter method requires at least one argument.');
		let callback;
		let returnObservableArray = true;
		if (typeof args[0] === 'function') {

			// Use given callback method
			callback = args[0];
			if (args.length > 1) returnObservableArray = args[1];

		} else if (typeof args[0] === 'string') {

			// Create callback
			let key = args[0];
			let value = args[1];
			callback = (item) => {
				return item.get(key) == value;
			};
			if (args.length > 2) returnObservableArray = args[2];

		}
		
		// Do the filter
		let result = _.filter(this.items, callback);
		return returnObservableArray ? new ObservableArray(result, false) : result;
	}

	


	chunk(size : number = 20) : ObservableArray {

		// Loop and add
		let cls : any = this.constructor;
		let chunks = new ObservableArray();
		let chunk = new cls();
		for (var i = 0; i < this.items.length; i++) {

			// New chunk?
			if (i > 0 && i % size === 0) {

				// New chunk
				chunks.add(chunk);
				chunk = new cls();

			}

			// Add it
			chunk.add(this.items[i]);


		}
		chunks.add(chunk);

		return chunks;

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

	count(callback? : Function) {
		if (callback) {

			// Count only those
			let c = 0;
			_.each(this.items, (item) => {
				if (callback!(item) === true) c++;
			});
			return c;

		}
		return this.length;
	}
	size() {
		return this.length;
	}



	isObservable() {
		return true;
	}


	_scheduleChanged() {

		// Notifications disabled?
		if (this.notificationsDisabled) return;

		// Already something scheduled?
		if (!this._scheduleChangedTimeout) {

			// Schedule it
			this._scheduleChangedTimeout = setTimeout(() => {

				// Trigger it now!
				this._scheduleChangedTimeout = false;
				this._triggerChanged();

			}, ObservableArray.ChangedDelay);

		}
		
	}

	_triggerChanged() {
		this.trigger(ObservableArray.Events.Change);
	}
	
	static ChangedDelay : number = 100;

}