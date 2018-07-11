"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
/**
 * @module Core
 */
var ComputedProperty = /** @class */ (function () {
    /**
     * @class Core.ComputedProperty
     *
     * @constructor
     * @param  {Array}   			dependencies
     * @param  {Function} 			callback
     */
    function ComputedProperty(dependencies, callback) {
        this.dependencies = dependencies;
        this.callback = callback;
    }
    ComputedProperty.prototype.getValue = function () {
        var _this = this;
        // Get dependency values
        var args = underscore_1.default.map(this.dependencies, function (dep) {
            return _this.observable.get(dep);
        });
        // Do the callback
        return this.callback.apply(this.observable, args);
    };
    ComputedProperty.prototype.toString = function () {
        return this.getValue();
    };
    ComputedProperty.prototype.initialize = function (name, observable) {
        var _this = this;
        // Localize
        this.name = name;
        this.observable = observable;
        // Watch the properties
        this.observable.observe(this.dependencies, function () {
            _this.observable._scheduleAttributeChanged(_this.name);
        });
        return this;
    };
    return ComputedProperty;
}());
exports.default = ComputedProperty;
//# sourceMappingURL=ComputedProperty.js.map