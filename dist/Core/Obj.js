"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
/**
 * @module Core
 */
var Obj = /** @class */ (function () {
    /**
     * Basic object that can trigger events
     *
     * @class Core.Obj
     * @constructor
     */
    function Obj() {
        // Init values
        this.listeners = new Map();
        this.promises = new Map();
    }
    ////////////////////
    // Public methods //
    ////////////////////
    Obj.prototype.promise = function (key, callback) {
        // Do the callback
        var promise = this._getPromiseInfo(key);
        callback.apply(null, [promise.resolve, promise.reject]);
        return promise.promise;
    };
    Obj.prototype.resolvePromise = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._getPromiseInfo(key).resolve.apply(this, args);
        return this;
    };
    Obj.prototype.rejectPromise = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._getPromiseInfo(key).reject.apply(this, args);
        return this;
    };
    Obj.prototype.getPromise = function (key) {
        return this._getPromiseInfo(key).promise;
    };
    Obj.prototype.resetPromise = function (key) {
        this.promises.delete(key);
    };
    Obj.prototype._getPromiseInfo = function (key) {
        // Was the promise already defined
        if (!this.promises.has(key)) {
            // Store it
            var p = new PromiseInfo();
            p.promise = new Promise(function (resolve, reject) {
                p.resolve = resolve;
                p.reject = reject;
                p.id = Obj.promiseCount++;
            });
            this.promises.set(key, p);
        }
        return this.promises.get(key);
    };
    Obj.prototype.when = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // The last one should be a callback
        var successCallback = args.pop();
        var failCallback = function (error) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            throw new Error("Uncaught promise failure for " + args.join(', ') + ": " + error);
        };
        if (args.length > 1 && typeof underscore_1.default.last(args) === 'function') {
            failCallback = successCallback;
            successCallback = args.pop();
        }
        // Collect promises
        var promises = [];
        underscore_1.default.each(args, function (arg) {
            promises.push(_this._getPromiseInfo(arg).promise);
        });
        // One?
        if (promises.length === 1) {
            // Simple.
            promises[0].then(successCallback, failCallback);
        }
        else {
            // When all are done
            Promise.all(promises).then(successCallback, failCallback);
        }
        return this;
    };
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
    Obj.prototype.on = function (eventName, callback) {
        // Get the set
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, new Set());
        }
        var events = this.listeners.get(eventName);
        // Add callback
        events.add(callback);
        // Chain
        return this;
    };
    /**
     * Remove a previously added listener for chosen event
     *
     * @method off
     * @param  {string}   eventName The event name to remove listener for
     * @param  {Function} callback  The previously added callback to remove from listeners
     * @chainable
     */
    Obj.prototype.off = function (eventName, callback) {
        // Get the callbacks
        var callbacks = this.listeners.get(eventName);
        if (callbacks === undefined)
            return this;
        // Remove callback
        callbacks.delete(callback);
        return this;
    };
    /**
     * Trigger calling of all registered callbacks for given event
     * with given arguments.
     *
     * @method trigger
     * @param  {string}    eventName The event name to trigger callbacks for
     * @param  {...mixed}  args      Zero or more arguments to pass along to each callback
     * @chainable
     */
    Obj.prototype.trigger = function (eventName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // Get the callbacks
        var callbacks = this.listeners.get(eventName);
        if (callbacks === undefined)
            return this;
        // Loop and call
        callbacks.forEach(function (cb) {
            cb.apply(_this, args);
        });
        return this;
    };
    Obj.promiseCount = 0;
    return Obj;
}());
exports.default = Obj;
var PromiseInfo = /** @class */ (function () {
    function PromiseInfo() {
    }
    return PromiseInfo;
}());
exports.PromiseInfo = PromiseInfo;
//# sourceMappingURL=Obj.js.map