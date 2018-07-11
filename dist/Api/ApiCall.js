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
var query_string_1 = __importDefault(require("query-string"));
var underscore_1 = __importDefault(require("underscore"));
var Obj_1 = __importDefault(require("../Core/Obj"));
var Collection_1 = __importDefault(require("../Data/Collection"));
var Model_1 = __importDefault(require("../Data/Model"));
var ApiError_1 = __importDefault(require("./ApiError"));
/**
 * An ApiCall is a once-executing call to the configured API
 *
 * @param  {Api.Api} api 	The Api instance this call originates from
 * @param  {string} method      The HTTP method to use (get, post, put, etc.)
 * @param  {string} uri			The uri to call
 * @param  {Object} data
 * @param  {Object} ajaxOptions
 */
var ApiCall = /** @class */ (function (_super) {
    __extends(ApiCall, _super);
    function ApiCall(api, method, uri, data, ajaxOptions) {
        if (data === void 0) { data = {}; }
        if (ajaxOptions === void 0) { ajaxOptions = {}; }
        var _this = _super.call(this) || this;
        _this.store = {};
        _this.expectModel = false;
        _this.expectCollection = false;
        _this.deserializeResult = true;
        _this.resolvesOnError = false;
        _this.doNotExecuteInView = false;
        /**
         * @property api
         * @type {Api.Api}
         */
        _this.api = api;
        /**
         * The HTTP method (get, post, put, patch, or delete)
         *
         * @property method
         * @type {string}
         */
        _this.method = method;
        /**
         * Data to send along with the request
         *
         * @property data
         * @type {Mixed}
         */
        _this.data = data;
        /**
         * Configuration options for the Ajax call
         *
         * @property ajaxOptions
         * @type {Object}
         */
        _this.ajaxOptions = ajaxOptions;
        /**
         * Query parameters to add onto the url
         *
         * @property queryParams
         * @type {Object}
         */
        _this.queryParams = query_string_1.default.parse(query_string_1.default.extract(uri));
        /**
         * @property uri
         * @type {string}
         */
        _this.uri = uri.split('?')[0];
        /**
         * The model class used when it cannot be deduced from the
         * Api result
         *
         * @property modelClass
         * @type {Class}
         */
        _this.modelClass = null;
        /**
         * When true, the models will be linked to the global Model stores. When false,
         * a local store, specific to this ApiCall, will be used. (Default = true)
         *
         * @property useGlobalStore
         * @type {Boolean}
         */
        _this.useGlobalStore = api.settings.useGlobalStore;
        return _this;
    }
    ApiCall.hook = function (type, callback) {
        if (ApiCall.hooks[type] === undefined)
            throw new Error('Unknown ApiCall hook, use on of the following: ' + underscore_1.default.keys(ApiCall.hooks).join(', '));
        ApiCall.hooks[type].push(callback);
    };
    ;
    ApiCall.prototype.serialize = function () {
        return JSON.stringify(underscore_1.default.pick(this, ['uri', 'method', 'data', 'queryParams']));
    };
    ApiCall.prototype.reset = function () {
        this.resetPromise('complete');
    };
    ApiCall.prototype.executeHook = function (type, args) {
        var _this = this;
        if (args === void 0) { args = []; }
        args.unshift();
        underscore_1.default.each(ApiCall.hooks[type], function (cb) {
            cb.apply(_this, args);
        });
    };
    /**
     * Execute the Api Call
     *
     * @method execute
     * @return {Promise}
     */
    ApiCall.prototype.execute = function () {
        var _this = this;
        // Do hook
        this.executeHook('beforeExecute');
        // Authorize it
        var auth = this.api.getAuth();
        if (auth)
            auth.authorizeApiCall(this);
        // Make a promise
        return this.promise('complete', function (resolve, reject) {
            // Combine options
            var queryString = query_string_1.default.stringify(_this.queryParams);
            if (queryString.length > 0)
                queryString = '?' + queryString;
            var options = jquery_1.default.extend({
                url: _this.api.makeUrl(_this.uri) + queryString,
                method: _this.method,
                data: _this.data
            }, _this.ajaxOptions);
            // Before send
            var beforeSends = [];
            if (_this.api.settings.beforeSend)
                beforeSends.push(_this.api.settings.beforeSend);
            if (options.beforeSend)
                beforeSends.push(options.beforeSend);
            options.beforeSend = function (jqXhr, settings) {
                // Loop and exexcute
                underscore_1.default.each(beforeSends, function (cb) {
                    cb(jqXhr, settings);
                });
            };
            // Make the call
            _this.api.ajax(options)
                .then(function (result, statusText, jqXhr) {
                // 204 (No-Content)?
                if (jqXhr.status === 204 && result === undefined) {
                    resolve(null);
                    return;
                }
                //non Resource response type
                //@DEPRECATED! Use doNotDeserialize() instead
                if (result && result.responseType == 'nonResource') {
                    resolve(result);
                    return;
                }
                // Deserialize it
                var response;
                if (_this.deserializeResult) {
                    // Deserialize
                    response = _this.api.deserialize(result, _this);
                    // Do we expect a single model?
                    if (_this.expectModel && response instanceof Collection_1.default) {
                        response = response.first();
                        // Or a collection
                    }
                    else if (_this.expectCollection && response instanceof Model_1.default) {
                        // Make a collection of it
                        var coll = new Collection_1.default();
                        coll.add(response);
                        response = coll;
                    }
                }
                else {
                    // Use as is
                    response = result;
                }
                // Do hook
                _this.executeHook('beforeResolve', [response]);
                // Done!
                resolve(response);
            }).fail(function (error) {
                if (_this.resolvesOnError) {
                    //resolve with null
                    resolve(null);
                }
                else {
                    // Make error
                    var errorObj = new ApiError_1.default(_this, error);
                    if (auth) {
                        errorObj = auth.processApiError(errorObj);
                    }
                    reject(errorObj);
                }
            });
        });
    };
    ////////////
    // Stores //
    ////////////
    ApiCall.prototype.useLocalStore = function (value) {
        if (value === void 0) { value = true; }
        this.useGlobalStore = !value;
        return this;
    };
    ApiCall.prototype.allowFailure = function (value) {
        if (value === void 0) { value = true; }
        this.resolvesOnError = value;
        return this;
    };
    ApiCall.prototype.getResponseModel = function (modelName, id) {
        // Global?
        if (this.useGlobalStore) {
            // Get from Model store
            return Model_1.default.getFromStore(modelName, id);
        }
        else {
            // Known?
            if (this.store[modelName] === undefined)
                return null;
            return this.store[modelName][id];
        }
    };
    ApiCall.prototype.storeResponseModel = function (model) {
        // Global?
        if (this.useGlobalStore) {
            // Store it
            var store = Model_1.default.getStore(model.getModelName());
            store.set(model.get('id'), model);
        }
        else {
            // Set it locally
            var modelName = model.getModelName();
            if (this.store[modelName] === undefined)
                this.store[modelName] = {};
            this.store[modelName][model.get('id')] = model;
        }
        return this;
    };
    /**
     * Add given key/value(s) to the queryParams
     *
     * @method query
     * @param  {string|Object} keyOrHash  Either a key or a key/value hash
     * @param  {Mixed} value     When given a single key/value pair, enter the value as the second argument
     * @chainable
     */
    ApiCall.prototype.query = function (keyOrHash, value) {
        // Is it a key / value?
        if (typeof keyOrHash === 'string') {
            this.queryParams[keyOrHash] = value;
        }
        else {
            jquery_1.default.extend(this.queryParams, keyOrHash);
        }
        return this;
    };
    ApiCall.prototype.select = function (value) {
        return this.query('select', value);
    };
    ApiCall.prototype.page = function (pageNumber, pageSize) {
        // Reset?
        if (pageNumber === false) {
            // Clear
            delete this.queryParams['page[number]'];
            delete this.queryParams['page[size]'];
            return this;
        }
        // Set it
        if (pageSize)
            this.pageSize(pageSize);
        return this.query('page[number]', pageNumber);
    };
    /**
     * Add given pagesize to the queryParams
     *
     * @method query
     * @param  pageSize
     * @chainable
     */
    ApiCall.prototype.pageSize = function (pageSize) {
        return this.query('page[size]', pageSize.toString());
    };
    /**
     * Set the request data
     *
     * @method setData
     * @param {mixed} data
     * @chainable
     */
    ApiCall.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    /**
     * Do not execute this ApiCall when resolving the View,
     * but instead pass on the ApiCall itself.
     *
     * @param  {Boolean} doNotExecuteInView
     * @chainable
     */
    ApiCall.prototype.doNotExecute = function (doNotExecuteInView) {
        if (doNotExecuteInView === void 0) { doNotExecuteInView = true; }
        this.doNotExecuteInView = doNotExecuteInView;
        return this;
    };
    /**
     * Do not deserialize the response but return the literal
     * response instead.
     *
     * @param  {Boolean} doNotDeserialize
     * @chainable
     */
    ApiCall.prototype.doNotDeserialize = function (doNotDeserialize) {
        if (doNotDeserialize === void 0) { doNotDeserialize = true; }
        this.deserializeResult = !doNotDeserialize;
        return this;
    };
    ApiCall.hooks = {
        beforeExecute: [],
        beforeResolve: []
    };
    return ApiCall;
}(Obj_1.default));
exports.default = ApiCall;
//# sourceMappingURL=ApiCall.js.map