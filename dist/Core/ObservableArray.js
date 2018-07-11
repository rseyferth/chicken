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
var Observable_1 = __importDefault(require("./Observable"));
var Utils_1 = require("../Helpers/Utils");
/**
 * @module Core
 */
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initValues, convertToObservables) {
        if (initValues === void 0) { initValues = []; }
        if (convertToObservables === void 0) { convertToObservables = true; }
        var _this = _super.call(this) || this;
        _this.items = [];
        _this.notificationsDisabled = false;
        _this.isStudyingChildren = false;
        _this.allowStudyChildren = true;
        // Single init value given?
        if (!(initValues instanceof Array))
            initValues = [initValues];
        // Import start values
        _this.import(initValues, convertToObservables);
        _this.childStudyCallback = function () {
            // Trigger on.
            _this._scheduleChanged();
        };
        return _this;
    }
    ObservableArray.prototype.import = function (items, convertToObservables) {
        var _this = this;
        if (convertToObservables === void 0) { convertToObservables = true; }
        // Go through to the object's first level
        underscore_1.default.each(items, function (value) {
            // Is the value an array or object?
            if ((Array.isArray(value) || typeof value === 'object') && convertToObservables === true) {
                // Array or object?
                if (Array.isArray(value)) {
                    // Put a new observable array in there
                    _this.items.push(new ObservableArray(value));
                }
                else {
                    // Put a new observable in there
                    _this.items.push(new Observable_1.default(value));
                }
            }
            else {
                // Just add the value (don't notify)
                _this.items.push(value);
            }
        });
        // Trigger changes
        if (!this.notificationsDisabled) {
            this.trigger(ObservableArray.Events.Import);
            this.trigger(ObservableArray.Events.Change);
            this.trigger(ObservableArray.Events.Add, items);
        }
        return this;
    };
    ObservableArray.prototype.get = function (key) {
        // Split
        var parts = Number.isInteger(key) ? [key] : key.split(/\./);
        var currentPart = parts.shift();
        // Is it a wildcard?
        var value;
        if (currentPart === '*') {
            // We will return an array containg all the values we retrieve!
            var restKey = parts.join('.');
            return underscore_1.default.map(this.items, function (item) {
                return item.get(restKey);
            });
        }
        else if (Number.isInteger(currentPart) || currentPart.match(/^\d+$/)) {
            // Get the value
            value = this.items[currentPart];
        }
        else {
            throw new TypeError('Invalid key: ' + key);
        }
        // Value found?
        if (value === undefined || parts.length === 0) {
            return value;
        }
        // Check if the value is also an observable
        if (value.get) {
            // Pass the rest along to go a level deeper
            return value.get(parts.join('.'));
        }
        else {
            throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retrieve sub-values. Value is ' + (typeof value));
        }
    };
    ObservableArray.prototype.set = function (key, value, convertToObservables) {
        var _this = this;
        if (convertToObservables === void 0) { convertToObservables = false; }
        // Convert?
        if (convertToObservables === true && typeof value === 'object' && value.constructor === Obj_1.default) {
            value = new Observable_1.default(value, true);
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
            var parts = key.split(/\./);
            var currentPart = parts.shift();
            // Does the first key exist?
            var item = this.items[currentPart];
            if (item === undefined) {
                // Should it be an array or an observable?
                var newValue = void 0;
                if (typeof parts[0] === 'number' || (typeof parts[0] === 'string' && parts[0].match(/^\d+$/))) {
                    // Create list (using classmap to prevent circular dependencies)
                    newValue = new ObservableArray();
                }
                else {
                    // Create it
                    newValue = new Observable_1.default();
                }
                // Study it
                if (this.isStudyingChildren) {
                    newValue.study(function () {
                        _this.trigger(ObservableArray.Events.Change);
                    });
                }
                // Store it
                this.items[currentPart] = newValue;
            }
            // Do deep setting
            this.get(currentPart).set(parts.join('.'), value);
            return this;
        }
        throw new TypeError('Invalid key');
    };
    /**
     * Add one or more items to the array
     *
     * @method add
     * @param {...[mixed]} values One or more values to add
     * @chainable
     */
    ObservableArray.prototype.add = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        // Is the last value a boolean?
        var doNotNotify = false;
        if (values.length > 1 && typeof values[values.length - 1] === 'boolean') {
            doNotNotify = values.pop();
        }
        // Add items
        underscore_1.default.each(values, function (value) {
            _this._add(value);
        });
        // Trigger events
        if (!doNotNotify) {
            this.trigger(ObservableArray.Events.Change);
            this.trigger(ObservableArray.Events.Add, values);
        }
        return this;
    };
    ObservableArray.prototype._add = function (value) {
        var _this = this;
        // Add it.
        this.items.push(value);
        // Studying?
        if (this.isStudyingChildren && this.allowStudyChildren) {
            if (value.study)
                value.study(this.childStudyCallback);
        }
        // Is it observable?
        if (value.on) {
            value.on('change', function () {
                _this.trigger('change');
            });
        }
        return this;
    };
    /**
     * Delete one or more items from the array
     *
     * @method delete
     * @param  {...[mixed]} values One or more values to delete
     * @chainable
     */
    ObservableArray.prototype.delete = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        // Is the last value a boolean?
        var doNotNotify = false;
        if (values.length > 1 && typeof values[values.length - 1] === 'boolean') {
            doNotNotify = values.pop();
        }
        // Add items
        underscore_1.default.each(values, function (value) {
            _this._delete(value);
        });
        // Studying?
        if (this.isStudyingChildren) {
            underscore_1.default.each(values, function (item) {
                if (item.neglect)
                    item.neglect(_this.childStudyCallback);
            });
        }
        // Trigger events
        if (!doNotNotify) {
            this.trigger(ObservableArray.Events.Change);
            this.trigger(ObservableArray.Events.Delete, values);
        }
        return this;
    };
    ObservableArray.prototype._delete = function (value) {
        this.items = underscore_1.default.without(this.items, value);
    };
    /**
     * Remove all items from the array
     *
     * @method empty
     * @chainable
     */
    ObservableArray.prototype.empty = function () {
        var _this = this;
        // Values that are deleted
        var deleted = underscore_1.default.difference(this.items, []);
        // Remove all listeners
        if (this.isStudyingChildren) {
            underscore_1.default.each(this.items, function (item) {
                item.neglect(_this.childStudyCallback);
            });
        }
        // Now clear
        this.items = [];
        // Trigger events
        this.trigger(ObservableArray.Events.Change);
        this.trigger(ObservableArray.Events.Delete, deleted);
        this.trigger(ObservableArray.Events.Empty);
        return this;
    };
    /**
     * Get the first item in the collection
     *
     * @method first
     * @return {mixed}
     */
    ObservableArray.prototype.first = function () {
        return underscore_1.default.first(this.items);
    };
    /**
     * Get the last item in the collection
     *
     * @method last
     * @return {mixed}
     */
    ObservableArray.prototype.last = function () {
        return underscore_1.default.last(this.items);
    };
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
    ObservableArray.prototype.study = function (callback) {
        var _this = this;
        // Already studying?
        if (!this.isStudyingChildren && this.allowStudyChildren) {
            // Set
            this.isStudyingChildren = true;
            // Watch all current children
            underscore_1.default.each(this.items, function (item) {
                if (item.study)
                    item.study(_this.childStudyCallback);
            });
        }
        // Connect to change-event
        return this.on('change', callback);
    };
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
    ObservableArray.prototype.neglect = function (callback) {
        // This is an alias of the 'changed' event
        return this.off('change', callback);
    };
    ObservableArray.prototype.toArray = function (includedUids) {
        if (includedUids === void 0) { includedUids = []; }
        return this.items.map(function (item) {
            // Observable?
            if (item.get) {
                // Already included?
                var guid = Utils_1.uidFor(item);
                if (underscore_1.default.indexOf(includedUids, guid) !== -1) {
                    return '...recursive(' + guid + ')...';
                }
                includedUids.push(guid);
                // Array?
                if (item instanceof ObservableArray) {
                    return item.toArray(includedUids);
                }
                else {
                    return item.toObject(includedUids);
                }
            }
            return item;
        });
    };
    /**
     * Get a keyed array containing all items in this ObservableArray
     * by the value of given key.
     *
     * @method keyBy
     * @param  {string} key 	The attribute key. You can also use dot-notation in this key.
     * @return {Obj}
     */
    ObservableArray.prototype.keyBy = function (key) {
        // Loop it.
        var result = {};
        underscore_1.default.each(this.items, function (item) {
            var keyValue = item.get(key);
            if (keyValue)
                result[keyValue] = item;
        });
        return result;
    };
    ObservableArray.prototype.sortBy = function (keyOrCallback) {
        // Is it a key?
        var callback = keyOrCallback;
        if (typeof keyOrCallback === 'string') {
            callback = function (item) {
                return item.get(keyOrCallback);
            };
        }
        // Now sort!
        this.items = underscore_1.default.sortBy(this.items, callback);
        return this;
    };
    ObservableArray.prototype.reverse = function () {
        this.items.reverse();
        return this;
    };
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
    ObservableArray.prototype.groupBy = function (keyOrCallback, defaultGroup, makeObservable) {
        if (defaultGroup === void 0) { defaultGroup = 'default'; }
        if (makeObservable === void 0) { makeObservable = false; }
        // Get called class
        var MyClass = this.constructor;
        // Loop it
        var result = makeObservable ? new Observable_1.default() : {};
        underscore_1.default.each(this.items, function (item) {
            // Get value
            var keyValue = typeof keyOrCallback === 'function' ? keyOrCallback(item) : item.get(keyOrCallback);
            // Nothing?
            if (!keyValue)
                keyValue = defaultGroup;
            // Map?
            if (makeObservable) {
                // Group known?
                if (!result.get(keyValue))
                    result.set(keyValue, new MyClass);
                // Add it
                result.get(keyValue).add(item);
            }
            else {
                // Group known?
                if (!result[keyValue])
                    result[keyValue] = new MyClass;
                // Add it
                result[keyValue].add(item);
            }
        });
        return result;
    };
    /**
     * Get value for given valueAttribute key from all items
     *
     * @method list
     * @param  {string} valueAttribute
     * @param  {string} keyAttribute
     * @return {[type]}                [description]
     */
    ObservableArray.prototype.list = function (valueAttribute, keyAttribute) {
        var result = keyAttribute ? {} : [];
        underscore_1.default.each(this.items, function (item) {
            if (keyAttribute) {
                result[item.get(keyAttribute)] = item.get(valueAttribute);
            }
            else {
                result.push(item.get(valueAttribute));
            }
        });
        return result;
    };
    /**
     * Get the lowest value for objects in this array
     *
     * @method getLowestValue
     * @param  {string}  key
     * @return {mixed}
     */
    ObservableArray.prototype.getLowestValue = function (key) {
        // Get a list.
        var list = this.list(key);
        return underscore_1.default.min(list);
    };
    ObservableArray.prototype.each = function (callback) {
        underscore_1.default.each(this.items, callback);
        return this;
    };
    ObservableArray.prototype.reverseEach = function (callback) {
        for (var q = this.items.length - 1; q >= 0; q--) {
            callback.apply(null, [this.items[q]]);
        }
        return this;
    };
    ObservableArray.prototype.find = function (idOrAttributeOrCallback, value) {
        if (value === void 0) { value = undefined; }
        // Callback?
        if (typeof idOrAttributeOrCallback === 'function') {
            return underscore_1.default.find(this.items, idOrAttributeOrCallback);
        }
        var attribute = 'id';
        if (value === undefined) {
            value = idOrAttributeOrCallback;
        }
        else {
            attribute = idOrAttributeOrCallback;
        }
        return underscore_1.default.find(this.items, function (item) {
            if (item.get) {
                return item.get(attribute) == value;
            }
            else if (item instanceof Obj_1.default) {
                return item[attribute] == value;
            }
            else {
                return item == value;
            }
        });
    };
    /**
     * find object with empty attribute
     *
     * @method findEmpty
     * @param  {string}	attribute 	the attribute checked for definition
     * @return {mixed}				the object containing the empty property or `undefined`
     */
    ObservableArray.prototype.findEmpty = function (attribute) {
        return underscore_1.default.find(this.items, function (item) {
            if (item.get) {
                return !item.get(attribute);
            }
            else if (item instanceof Obj_1.default) {
                return !item[attribute];
            }
            else {
                return false;
            }
        });
    };
    ObservableArray.prototype.contains = function (item) {
        return underscore_1.default.contains(this.items, item);
    };
    ObservableArray.prototype.sum = function (callback) {
        if (typeof callback === 'string') {
            var key_1 = callback;
            callback = function (i) {
                return i.get(key_1);
            };
        }
        var values = underscore_1.default.map(this.items, callback);
        return underscore_1.default.reduce(values, function (memo, num) {
            return memo + num;
        }, 0);
    };
    ObservableArray.prototype.map = function (callback) {
        return underscore_1.default.map(this.items, callback);
    };
    ObservableArray.prototype.extend = function (observableArray) {
        return underscore_1.default.extend(this.items, observableArray.items);
    };
    ObservableArray.prototype.filter = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Parse arguments
        if (args.length === 0)
            throw new Error('The filter method requires at least one argument.');
        var callback;
        var returnObservableArray = true;
        if (typeof args[0] === 'function') {
            // Use given callback method
            callback = args[0];
            if (args.length > 1)
                returnObservableArray = args[1];
        }
        else if (typeof args[0] === 'string') {
            // Create callback
            var key_2 = args[0];
            var value_1 = args[1];
            callback = function (item) {
                return item.get(key_2) == value_1;
            };
            if (args.length > 2)
                returnObservableArray = args[2];
        }
        // Do the filter
        var result = underscore_1.default.filter(this.items, callback);
        return returnObservableArray ? new ObservableArray(result, false) : result;
    };
    ObservableArray.prototype.chunk = function (size) {
        if (size === void 0) { size = 20; }
        // Loop and add
        var cls = this.constructor;
        var chunks = new ObservableArray();
        var chunk = new cls();
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
    };
    Object.defineProperty(ObservableArray.prototype, "length", {
        /**
         * The number of items in the array
         *
         * @property length
         * @type {Number}
         */
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableArray.prototype.count = function (callback) {
        if (callback) {
            // Count only those
            var c_1 = 0;
            underscore_1.default.each(this.items, function (item) {
                if (callback(item) === true)
                    c_1++;
            });
            return c_1;
        }
        return this.length;
    };
    ObservableArray.prototype.size = function () {
        return this.length;
    };
    ObservableArray.prototype.isObservable = function () {
        return true;
    };
    ObservableArray.prototype._scheduleChanged = function () {
        var _this = this;
        // Notifications disabled?
        if (this.notificationsDisabled)
            return;
        // Already something scheduled?
        if (!this._scheduleChangedTimeout) {
            // Schedule it
            this._scheduleChangedTimeout = setTimeout(function () {
                // Trigger it now!
                _this._scheduleChangedTimeout = false;
                _this._triggerChanged();
            }, ObservableArray.ChangedDelay);
        }
    };
    ObservableArray.prototype._triggerChanged = function () {
        this.trigger(ObservableArray.Events.Change);
    };
    ObservableArray.Events = {
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
    ObservableArray.ChangedDelay = 100;
    return ObservableArray;
}(Obj_1.default));
exports.default = ObservableArray;
//# sourceMappingURL=ObservableArray.js.map