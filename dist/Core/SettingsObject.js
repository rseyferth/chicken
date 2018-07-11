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
var Observable_1 = __importDefault(require("./Observable"));
/**
 * @module Core
 */
var SettingsObject = /** @class */ (function (_super) {
    __extends(SettingsObject, _super);
    function SettingsObject(defaultSettings, allowedKeys) {
        if (defaultSettings === void 0) { defaultSettings = {}; }
        if (allowedKeys === void 0) { allowedKeys = []; }
        var _this = 
        // Instantiate with default settings
        _super.call(this, defaultSettings) || this;
        _this.allowedKeys = allowedKeys;
        _this.notificationsDisabled = true;
        return _this;
    }
    /**
     * Apply given settings
     *
     * @method apply
     * @param {object} 	settings	A hash-object with keys and values
     * @chainable
     */
    SettingsObject.prototype.apply = function (settings) {
        var _this = this;
        // Apply each key individually
        underscore_1.default.each(settings, function (value, key) {
            _this.set(key, value);
        });
        return this;
    };
    // Extra check for allowedKeys.
    SettingsObject.prototype.set = function (key, value) {
        // Is it allowed?
        if (this.allowedKeys && this.allowedKeys.length > 0 && !underscore_1.default.contains(this.allowedKeys, key)) {
            throw new Error("This SettingsObject does not have a setting for \"" + key + "\". The allowed settings are: " + this.allowedKeys.join(', '));
        }
        // Do it.
        return _super.prototype.set.call(this, key, value);
    };
    return SettingsObject;
}(Observable_1.default));
exports.default = SettingsObject;
//# sourceMappingURL=SettingsObject.js.map