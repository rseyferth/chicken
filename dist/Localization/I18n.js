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
var jquery_1 = __importDefault(require("jquery"));
var underscore_1 = __importDefault(require("underscore"));
var Obj_1 = __importDefault(require("../Core/Obj"));
/**
 * @module Localization
 */
var I18n = /** @class */ (function (_super) {
    __extends(I18n, _super);
    function I18n(language) {
        var _this = _super.call(this) || this;
        _this.data = {};
        _this.bundlesToLoad = [];
        _this.setLanguage(language);
        return _this;
    }
    /**
     * Add a bundle that will be loaded when the application starts
     *
     * @method addBundle
     * @param  {string} url
     * @param  {string} [key=null]  Optional key to add loaded data under.
     * @chainable
     */
    I18n.prototype.addBundle = function (url, key) {
        this.bundlesToLoad.push({
            url: url,
            key: key
        });
        return this;
    };
    /**
     * Manually load a bundle into I18n
     *
     * @method loadBundle
     * @param  {string} url
     * @param  {string} [key=null]  Optional key to add loaded data under.
     * @return {Promise}
     */
    I18n.prototype.loadBundle = function (url, key, language) {
        var _this = this;
        // Convert language placeholders
        if (!language)
            language = this.language;
        url = url.replace(/:language/, this.language);
        return new Promise(function (resolve, reject) {
            // Do we have it in cache?
            if (I18n.Cache[url]) {
                resolve(I18n.Cache[url]);
                return;
            }
            // Load it.
            jquery_1.default.ajax(url, {}).then(function (result) {
                resolve(result);
            }).fail(function (error) {
                reject(error);
            });
        }).then(function (result) {
            // Parse result
            result = _this.parseResult(result, url);
            // Is there a key?
            if (key) {
                var r = {};
                r[key] = result;
                result = r;
            }
            // Extend
            jquery_1.default.extend(_this.data[language], result);
        });
    };
    I18n.prototype.setLanguage = function (language) {
        this.language = language;
        if (!this.data[language]) {
            this.data[language] = {};
        }
        return this;
    };
    I18n.prototype.parseResult = function (result, url) {
        // Check extension
        var extension = underscore_1.default.last(url.split(/\./));
        if (extension === 'yaml') {
            // Parse yaml
            //result = yamljs.parse(result);
        }
        else if (extension === 'json') {
            // Parse json
            if (typeof result === 'string')
                result = JSON.parse(result);
        }
        return result;
    };
    I18n.prototype.getData = function (language) {
        if (!language)
            language = this.language;
        return this.data[language];
    };
    /**
     * Load all added bundles
     *
     * @method load
     * @return {Promise}
     */
    I18n.prototype.load = function () {
        var _this = this;
        // Main prmomise for loading
        return this.promise('loaded', function (resolve) {
            // Nothing to load?
            if (_this.bundlesToLoad.length === 0) {
                resolve();
                return;
            }
            // Collect promises
            var promises = [];
            underscore_1.default.each(_this.bundlesToLoad, function (bundle) {
                promises.push(_this.loadBundle(bundle.url, bundle.key));
            });
            // When all is done.
            Promise.all(promises).then(function () {
                resolve();
            });
        });
    };
    /**
     * Get the translation for given key
     *
     * @method translate
     * @param  {string} key        			Dot-notation key to get value of
     * @param  {Object} [attributes={}] 	Optional object containing attributes to pass to the template in the translated value
     * @param  {mixed} [fallback=null]		Optional fallback value when the key is nout found
     * @return {mixed}
     */
    I18n.prototype.translate = function (key, attributes, fallback, language) {
        if (attributes === void 0) { attributes = {}; }
        // Dot notation
        var obj = this.getData(language);
        var parts = key.split(/\./);
        while (parts.length > 0) {
            // Get firs tpart
            var part = parts.shift();
            // Not existing?
            if (!obj[part])
                return fallback !== null ? fallback : '[' + key + ']';
            // Dive in.
            obj = obj[part];
        }
        return this.processValue(obj, attributes);
    };
    I18n.prototype.processValue = function (obj, attributes) {
        var _this = this;
        // What type?
        if (typeof obj === 'string') {
            // Process string
            obj = this.processString(obj, attributes);
        }
        else if (jquery_1.default.isArray(obj)) {
            // Mapped processing
            obj = underscore_1.default.map(obj, function (v) {
                return _this.processValue(v, attributes);
            });
        }
        else if (typeof obj === 'object') {
            var result_1 = {};
            underscore_1.default.each(obj, function (value, key) {
                result_1[key] = _this.processValue(value, attributes);
            });
            obj = result_1;
        }
        return obj;
    };
    I18n.prototype.processString = function (obj, attributes) {
        // Double escaping
        obj = obj.split(/\\n/).join("\n").split(/\\t/).join("\t");
        /////////////////
        // Templating? //
        /////////////////
        if (obj.match(/<%/)) {
            // Convert attributes into real values
            var attr = underscore_1.default.mapObject(attributes, function (value) {
                // Get value?
                if (value !== null && value !== undefined && typeof value === 'object' && typeof value.getValue === 'function') {
                    value = value.getValue();
                }
                return value;
            });
            // Make a template and run it
            var template = underscore_1.default.template(obj);
            try {
                obj = template(attr);
            }
            catch (error) {
                console.warn(error);
            }
        }
        return obj;
    };
    /**
     * Alias of translate
     *
     * @method get
     * @param  {string} key
     * @param  {Object} [attributes={}]
     * @param  {mixed} [fallback=null]
     * @return {mixed}
     */
    I18n.prototype.get = function (key, attributes, fallback, language) {
        if (attributes === void 0) { attributes = {}; }
        return this.translate(key, attributes, fallback, language);
    };
    I18n.Cache = {};
    return I18n;
}(Obj_1.default));
exports.default = I18n;
//# sourceMappingURL=I18n.js.map