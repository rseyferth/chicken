"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var Obj_1 = __importDefault(require("./Obj"));
var Reference_1 = __importDefault(require("./Reference"));
var ComputedProperty_1 = __importDefault(require("./ComputedProperty"));
var Utils_1 = require("../Helpers/Utils");
var ObservableArray_1 = __importDefault(require("./ObservableArray"));
/**
 * @module Core
 */
var Observable = /** @class */ (function (_super) {
    __extends(Observable, _super);
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
    function Observable(initValues, convertToObservables) {
        if (initValues === void 0) { initValues = {}; }
        if (convertToObservables === void 0) { convertToObservables = true; }
        var _this = 
        // Basics
        _super.call(this) || this;
        _this.notificationsDisabled = false;
        _this.observers = new Map();
        _this.attributes = new Obj_1.default();
        // Initialize values
        _this.withoutNotifications(function () {
            _this.import(initValues, convertToObservables);
        });
        return _this;
    }
    ////////////////////
    // Public methods //
    ////////////////////
    Observable.prototype.has = function (key) {
        // Split
        var parts = typeof key === 'number' ? [key] : key.split(/\./);
        var currentPart = parts.shift();
        // No deep shit?
        if (parts.length === 0)
            return this._has(currentPart) !== undefined;
        // Look deeper
        var value = this._get(currentPart);
        // No value
        if (value === undefined) {
            return false;
        }
        // Check if the value is also an observable
        if (value instanceof Observable) {
            // Pass the rest along to go a level deeper
            return value.has(parts.join('.'));
        }
        else {
            return false;
        }
    };
    Observable.prototype._has = function (key) {
        return this.attributes[key] !== undefined;
    };
    /**
     * Get attribute from object
     *
     * @method get
     * @param  {string} key The name of the key to retrieve the value of. You can use dot-notation to use deep-getting
     * @return The value or undefined when the key is not set
     */
    Observable.prototype.get = function (key) {
        // Split
        if (key === undefined)
            throw new TypeError('There was no key provided');
        var parts = key;
        if (typeof key === 'string')
            parts = key.split(/\./);
        var currentPart = parts.shift();
        // Get value
        var value = this._get(currentPart);
        // Nothing?
        if (value === undefined)
            return;
        // Is it a reference?
        if (value instanceof Reference_1.default) {
            value = value.getValue();
        }
        // Value found?
        if (parts.length === 0) {
            // Is it computed?
            if (value instanceof ComputedProperty_1.default) {
                return value.getValue();
            }
            // Return the value as is.
            return value;
        }
        // Check if the value is also an observable
        if (value.get) {
            // Pass the rest along to go a level deeper
            return value.get(parts.join('.'));
        }
        else {
            // Nothing to be retrieved
            return;
            //throw new Error('The found value for ' + currentPart + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value));
        }
    };
    Observable.prototype._get = function (key) {
        return this.attributes[key];
    };
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
    Observable.prototype.set = function (key, value, convertToObservables) {
        var _this = this;
        if (convertToObservables === void 0) { convertToObservables = false; }
        // Object given?
        if (typeof key === 'object') {
            // Loop and set each
            underscore_1.default.each(key, function (v, k) {
                _this.set(k, v, convertToObservables);
            });
            return this;
        }
        // Convert?
        if (convertToObservables === true && typeof value === 'object' && value !== null) {
            if (value.constructor === Obj_1.default) {
                value = new Observable(value);
            }
            else if (Array.isArray(value)) {
                value = new ObservableArray_1.default(value);
            }
        }
        // Is it a computed attribute
        if (value instanceof ComputedProperty_1.default) {
            value.initialize(key, this);
        }
        // Is there a dot in there?
        if (typeof key === 'string' && key.match(/\.[\w]/)) {
            ////////////////////////
            // Split and deep set //
            ////////////////////////
            var parts = key.split(/\./);
            var currentPart = parts.shift();
            // Does the first key not exist?
            if (this.attributes[currentPart] === undefined) {
                // Should it be an array?
                var newValue = void 0;
                if (typeof parts[0] === 'number' || (typeof parts[0] === 'string' && parts[0].match(/^\d+$/))) {
                    // Create list
                    newValue = new ObservableArray_1.default();
                }
                else {
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
    };
    Observable.prototype.setAttribute = function (key, value) {
        var _this = this;
        // Is the value identical?
        if (Utils_1.areEqual(value, this.get(key))) {
            return this;
        }
        // Set it
        this._set(key, value);
        // Is the value observable?
        if (value && typeof value === 'object' && value.study) {
            // Study the object
            value.study(function () {
                _this._scheduleAttributeChanged(key);
            });
        }
        // Is the value a reference?
        else if (value instanceof Reference_1.default) {
            // Study the object
            value.watch(function () {
                _this._scheduleAttributeChanged(key);
            });
        }
        // Update attribute
        this._scheduleAttributeChanged(key);
        return this;
    };
    Observable.prototype.setIfChanged = function (key, value) {
        // Original
        var originalValue = this.get(key);
        if (originalValue == value)
            return this;
        return this.set(key, value);
    };
    Observable.prototype._set = function (key, value) {
        // Is there a current value that is a reference?
        if (this.attributes[key] instanceof Reference_1.default && !(value instanceof Reference_1.default)) {
            // Write the referenced value
            this.attributes[key].setValue(value);
        }
        else {
            // Store the value
            this.attributes[key] = value;
        }
        return this;
    };
    Observable.prototype.setSilently = function (key, value, convertToObservables) {
        var _this = this;
        if (convertToObservables === void 0) { convertToObservables = false; }
        return this.withoutNotifications(function () {
            _this.set(key, value, convertToObservables);
        });
    };
    Observable.prototype.unset = function (key) {
        this._unset(key);
        // Update attribute
        this._scheduleAttributeChanged(key);
        return this;
    };
    Observable.prototype._unset = function (key) {
        delete this.attributes[key];
    };
    Observable.prototype.import = function (obj, convertToObservables) {
        var _this = this;
        if (convertToObservables === void 0) { convertToObservables = true; }
        // Import all items in hash
        this.withoutNotifications(function () {
            underscore_1.default.each(obj, function (value, key) {
                _this.set(key, value, convertToObservables);
            });
        });
        // Notify!
        if (!this.notificationsDisabled)
            this.trigger(Observable.Events.Import);
        return this;
    };
    Observable.prototype.fill = function (obj) {
        var _this = this;
        // Loop through object
        underscore_1.default.each(obj, function (value, key) {
            // Get existing value
            if (_this.has(key)) {
                // Get value
                var curValue = _this.get(key);
                // Observable?
                if (curValue instanceof Observable) {
                    curValue.fill(value);
                }
                else {
                    _this.set(key, value, true);
                }
            }
            else {
                // Just set it.
                _this.set(key, value, true);
            }
        });
        return this;
    };
    /**
     * Increment given attribute's numeric value
     *
     * @method increment
     * @param  {string} key
     * @param  {Number} by           (Default = 1)
     * @param  {Number} defaultValue (Default = 0)
     * @chainable
     */
    Observable.prototype.increment = function (key, by, defaultValue) {
        if (by === void 0) { by = 1; }
        if (defaultValue === void 0) { defaultValue = 0; }
        var v = this.get(key);
        if (v === undefined || typeof v !== 'number')
            v = defaultValue;
        v += by;
        this.set(key, v);
        return this;
    };
    /**
     * Decrement given attribute's numeric value
     *
     * @method increment
     * @param  {string} key
     * @param  {Number} by           (Default = 1)
     * @param  {Number} defaultValue (Default = 0)
     * @chainable
     */
    Observable.prototype.decrement = function (key, by, defaultValue) {
        if (by === void 0) { by = 1; }
        if (defaultValue === void 0) { defaultValue = 0; }
        var v = this.get(key);
        if (v === undefined || typeof v !== 'number')
            v = defaultValue;
        v -= by;
        this.set(key, v);
        return this;
    };
    /**
     * Toggle the given attribute's boolean value
     *
     * @method toggle
     * @param  {string}  key
     * @param  {Boolean} valueWhenUndefined  (Default = true) What value to set when the attribute does not have a value yet
     * @chainable
     */
    Observable.prototype.toggle = function (key, valueWhenUndefined) {
        if (valueWhenUndefined === void 0) { valueWhenUndefined = true; }
        var v = this.get(key);
        if (v === undefined || typeof v !== 'boolean') {
            v = valueWhenUndefined;
        }
        else {
            v = !v;
        }
        this.set(key, v);
        return this;
    };
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
    Observable.prototype.study = function (callback) {
        // This is an alias of the 'change' event
        return this.on(Observable.Events.Change, callback);
    };
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
    Observable.prototype.neglect = function (callback) {
        // This is an alias of the 'change' event
        return this.off(Observable.Events.Change, callback);
    };
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
    Observable.prototype.observe = function (keyOrKeys, callback) {
        ////////////////////
        // More than one? //
        ////////////////////
        var _this = this;
        if (Array.isArray(keyOrKeys)) {
            underscore_1.default.each(keyOrKeys, function (key) {
                _this.observe(key, callback);
            });
            return this;
        }
        var key = keyOrKeys;
        //////////////////////////////
        // Does the key have a dot? //
        //////////////////////////////
        var parts = key.split(/\./);
        if (parts.length > 1) {
            // Get the object concerned
            var attrKey = parts.shift();
            var obj = this.get(attrKey);
            var objKey = parts.join('.');
            // Is it an observable?
            if (obj.observe) {
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
        observers.add(callback);
        return this;
    };
    /**
     * Stop observing the attribute with given key, or any of it's
     * child attributes.
     *
     * @method disregard
     * @param  {string}   key      The name of the attribute to disregard
     * @param  {Function} callback
     * @chainable
     */
    Observable.prototype.disregard = function (key, callback) {
        // Get the observers
        var observers = this.observers.get(key);
        if (observers === undefined)
            return this;
        // Remove callback
        observers.delete(callback);
        return this;
    };
    /**
     * Get the Observable including all its children
     * as a native object.
     *
     * @method toObject
     * @return {object}
     */
    Observable.prototype.toObject = function (includedUids) {
        if (includedUids === void 0) { includedUids = []; }
        var obj = {};
        underscore_1.default.each(this.attributes, function (item, key) {
            // Observable?
            if (item.get) {
                // Already included?
                var guid = Utils_1.uidFor(item);
                if (underscore_1.default.indexOf(includedUids, guid) !== -1) {
                    obj[key] = '...recursive(' + guid + ')...';
                    return;
                }
                includedUids.push(guid);
                // Array?
                if (item instanceof Observable) {
                    item = item.toObject(includedUids);
                }
                else {
                    item = item.toArray(includedUids);
                }
            }
            obj[key] = item;
        });
        return obj;
    };
    /**
     * Apply given callback for each attribute defined in this observable
     *
     * @method each
     * @param  {Function} callback
     * @chainable
     */
    Observable.prototype.each = function (callback, context) {
        if (context === void 0) { context = null; }
        underscore_1.default.each(this.attributes, callback, context);
        return this;
    };
    /**
     * Execute given callback without triggering change notifications.
     *
     * @method withoutNotifications
     * @param  {Function} callback
     * @chainable
     */
    Observable.prototype.withoutNotifications = function (callback) {
        var wasDisabled = this.notificationsDisabled;
        this.notificationsDisabled = true;
        callback();
        this.notificationsDisabled = wasDisabled;
        return this;
    };
    Observable.prototype.clone = function (convertToObservables) {
        if (convertToObservables === void 0) { convertToObservables = true; }
        // Make copy!
        var c = this.constructor;
        var copy = new c(this.toObject(), convertToObservables);
        return copy;
    };
    /////////////////////
    // Private methods //
    /////////////////////
    Observable.prototype._scheduleAttributeChanged = function (key) {
        var _this = this;
        // Notifications disabled?
        if (this.notificationsDisabled)
            return;
        // Already something scheduled?
        if (!this._scheduleAttributesChangedTimeout) {
            // Schedule it
            this._scheduleAttributesChangedAttributes = [];
            this._scheduleAttributesChangedTimeout = setTimeout(function () {
                // Trigger it now!
                _this._scheduleAttributesChangedTimeout = false;
                _this._triggerAttributesChanged();
            }, Observable.AttributeChangedDelay);
        }
        // Add attribute to the set
        this._scheduleAttributesChangedAttributes.push(key);
    };
    Observable.prototype._triggerAttributesChanged = function () {
        var _this = this;
        // Notifications disabled?
        if (this.notificationsDisabled)
            return;
        // Clear for next time.
        if (this._scheduleAttributesChangedTimeout)
            clearTimeout(this._scheduleAttributesChangedTimeout);
        this._scheduleAttributesChangedTimeout = false;
        // Check my attributes
        var attrs = underscore_1.default.unique(this._scheduleAttributesChangedAttributes);
        if (attrs) {
            // Collect the observers, using a Set to make sure the same observer can't be called twice
            var combinedObservers = new Set();
            underscore_1.default.each(attrs, function (attr) {
                // Get observers
                var attrObservers = _this.observers.get(attr);
                if (attrObservers) {
                    attrObservers.forEach(function (observer) {
                        // Add it.
                        combinedObservers.add(observer);
                    });
                }
            });
            // Did we have any observers?
            combinedObservers.forEach(function (observer) {
                // Now call it.
                observer.apply(_this);
            });
            // Students as well.
            this.trigger(Observable.Events.Change, attrs);
        }
    };
    Observable.prototype.isObservable = function () {
        return true;
    };
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
    Observable.AttributeChangedDelay = 1;
    return Observable;
}(Obj_1.default));
exports.default = Observable;
//# sourceMappingURL=Observable.js.map