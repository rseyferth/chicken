"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var underscore_1 = __importDefault(require("underscore"));
var ApiCall_1 = __importDefault(require("./ApiCall"));
var Model_1 = __importDefault(require("../Data/Model"));
var Application_1 = __importDefault(require("../Application"));
;
/**
 * An Api instance can be used to make contact with one specific
 * API.
 *
 * @param {Object} options - Configuration for the Api
 * @param {string} [options.baseUrl=/api] Base url to prepend to all API calls
 * @param {boolean} [options.queueAjaxCalls=false] Whether to execute the API calls one by one (true), or simultaneously (false)
 *
 */
var Api = /** @class */ (function () {
    /**
     * @class Api.Api
     *
     * @constructor
     * @param  {Object} options
     */
    function Api(options) {
        this.settings = jquery_1.default.extend({
            baseUrl: '/api',
            queueAjaxCalls: false,
            useGlobalStore: true
        }, options);
    }
    Api.prototype.getAuth = function () {
        // Set already?
        if (this.auth)
            return this.auth;
        if (!this.settings.auth)
            return false;
        // Look it up.
        this.auth = Application_1.default.getInstance().auth(this.settings.auth);
        return this.auth;
    };
    //////////////////
    // HTTP methods //
    //////////////////
    /**
     * @method call
     * @param  {string} method
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    Api.prototype.call = function (method, uri, data, ajaxOptions) {
        if (data === void 0) { data = {}; }
        if (ajaxOptions === void 0) { ajaxOptions = {}; }
        // Create api call
        return new ApiCall_1.default(this, method, uri, data, ajaxOptions);
    };
    /**
     * @method get
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    Api.prototype.get = function (uri, data, ajaxOptions) {
        if (data === void 0) { data = {}; }
        if (ajaxOptions === void 0) { ajaxOptions = {}; }
        return this.call('get', uri, data, ajaxOptions);
    };
    /**
     * @method post
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    Api.prototype.post = function (uri, data, ajaxOptions) {
        if (data === void 0) { data = {}; }
        if (ajaxOptions === void 0) { ajaxOptions = {}; }
        return this.call('post', uri, data, ajaxOptions);
    };
    /**
     * @method put
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    Api.prototype.put = function (uri, data, ajaxOptions) {
        if (data === void 0) { data = {}; }
        if (ajaxOptions === void 0) { ajaxOptions = {}; }
        return this.call('put', uri, data, ajaxOptions);
    };
    /**
     * @method path
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    Api.prototype.patch = function (uri, data, ajaxOptions) {
        if (data === void 0) { data = {}; }
        if (ajaxOptions === void 0) { ajaxOptions = {}; }
        return this.call('patch', uri, data, ajaxOptions);
    };
    /**
     * @method delete
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    Api.prototype.delete = function (uri, data, ajaxOptions) {
        if (data === void 0) { data = {}; }
        if (ajaxOptions === void 0) { ajaxOptions = {}; }
        return this.call('delete', uri, data, ajaxOptions);
    };
    ////////////////////
    // Helper methods //
    ////////////////////
    /**
     * @method makeUrl
     * @param  {string} uri 	Relative url within the API
     * @return {string} Fully formed url
     */
    Api.prototype.makeUrl = function (uri) {
        return this.settings.baseUrl + uri;
    };
    /**
     * Make an ajax call using jQuery
     *
     * @method ajax
     * @param  {Object} options
     * @return {jQuery Ajax call}
     */
    Api.prototype.ajax = function (options) {
        return jquery_1.default.ajax.apply(null, [this.getAjaxOptions(options)]);
    };
    /**
     * Get jQuery ajax call options for this api
     *
     * @method getAjaxOptions
     * @param {Object = {}} options   Optional options to merge
     * @return {Function}
     */
    Api.prototype.getAjaxOptions = function (options) {
        if (options === void 0) { options = {}; }
        // Start with given options
        var beforeSends = [];
        if (options.beforeSend) {
            beforeSends.push(options.beforeSend);
            delete options.beforeSend;
        }
        var ajaxOptions = jquery_1.default.extend({
            dataType: 'json'
        }, options);
        // Get auth options
        var auth = this.getAuth();
        if (auth) {
            var authOptions = auth.getAjaxOptions();
            if (authOptions.beforeSend) {
                beforeSends.push(authOptions.beforeSend);
                delete authOptions.beforeSend;
            }
            jquery_1.default.extend(ajaxOptions, authOptions);
        }
        // Make callback
        ajaxOptions.beforeSend = function (jqXhr, jqOptions) {
            // Loop through before sends
            underscore_1.default.each(beforeSends, function (cb) {
                cb(jqXhr, jqOptions);
            });
        };
        return ajaxOptions;
    };
    ///////////////////
    // Model methods //
    ///////////////////
    /**
     * Get a single Model record from the Api
     *
     * @method one
     * @param  {string} modelName
     * @param  {string} idOrUri
     * @return {Api.ApiCall}
     */
    Api.prototype.one = function (modelName, idOrUri) {
        // Get uri from model
        var ModelClass = Model_1.default.registry.get(modelName);
        if (!ModelClass)
            throw new Error('There is no model registered with the name "' + modelName + '"');
        var uri = /^\//.test(idOrUri) ? idOrUri : ModelClass.definition.getApiUri(idOrUri);
        // Make the call
        var call = this.get(uri);
        call.modelClass = ModelClass;
        call.expectModel = true;
        return call;
    };
    /**
     * Get all Model records from the Api
     *
     * @method all
     * @param  {string} modelName
     * @return {Api.ApiCall}
     */
    Api.prototype.all = function (modelName, uri) {
        // Get uri from model
        var ModelClass = Model_1.default.registry.get(modelName);
        if (!ModelClass)
            throw new Error('There is no model registered with the name "' + modelName + '"');
        if (!uri)
            uri = ModelClass.definition.getApiUri();
        // Make the call
        var call = this.get(uri);
        call.modelClass = ModelClass;
        call.expectCollection = true;
        return call;
    };
    Api.prototype.store = function (modelName) {
        // Get uri from model
        var ModelClass = Model_1.default.registry.get(modelName);
        if (!ModelClass)
            throw new Error('There is no model registered with the name "' + modelName + '"');
        var uri = ModelClass.definition.getApiUri();
        // Make the call
        var call = this.post(uri);
        call.modelClass = ModelClass;
        call.expectModel = true;
        return call;
    };
    return Api;
}());
exports.default = Api;
//# sourceMappingURL=Api.js.map