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
var jquery_1 = __importDefault(require("jquery"));
var Observable_1 = __importDefault(require("../Core/Observable"));
var Middleware_1 = __importDefault(require("../Routing/Middleware"));
var Application_1 = __importDefault(require("../Application"));
/**
 * @module Auth
 */
var Auth = /** @class */ (function (_super) {
    __extends(Auth, _super);
    /**
     * @class Auth.Auth
     *
     * @param 	{Object} options
     * @constructor
     */
    function Auth(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        // Default options
        _this.settings = underscore_1.default.defaults(options, {
            getUserUri: '/me',
            onAuthenticated: null,
            onUnauthenticated: null,
            onSessionTimedOut: null,
            onInvalidated: null,
            middlewareName: 'auth'
        });
        _this.set('isAuthenticated', false);
        // Register the middleware
        _this.middleware = new Middleware_1.default(_this.settings.middlewareName, function (next, request, routeMatch) {
            return _this.middlewareAction(next, request, routeMatch);
        });
        Middleware_1.default.register(_this.middleware);
        return _this;
    }
    /**
     * Act as middleware for given request
     *
     * @method middleWareAction
     * @param  {Callback} 			next		The callback to call when everything is okay
     * @param  {Routing.Request} 	request
     * @param  {Routing.RouteMatch} 		routeMatch
     */
    Auth.prototype.middlewareAction = function (next, request, routeMatch) {
        // Are we not authenticated?
        if (!this.isAuthenticated()) {
            // Trigger the unauthenticated event
            if (!this.settings.onUnauthenticated) {
                throw new Error('Protected route called without authentication.');
            }
            // Do the callback
            this.doCallback('onUnauthenticated', [request, routeMatch]);
            return;
        }
        // Ok.
        next();
    };
    Auth.prototype.doCallback = function (key, params) {
        var _this = this;
        // Promise
        return new Promise(function (resolve, reject) {
            // Do we have one?
            var callback = _this.settings[key];
            if (!callback) {
                reject('There is no callback defined for ' + key);
            }
            // Is it a string with a uri?
            if (typeof callback === 'string') {
                Application_1.default.getInstance().goto(callback);
                resolve();
            }
            // Get the result from the callback
            var result = callback.apply(_this, params);
            // Is there something resolvable in there?
            if (result && result instanceof Promise) {
                // Link it.
                result.then(function (result) {
                    resolve(result);
                }, function (error) {
                    reject(error);
                });
            }
            else {
                // Just resolve now
                resolve(result);
            }
        });
    };
    /**
     * Check whether the session is authenticated
     *
     * @method isAuthenticated
     * @return {Boolean}
     */
    Auth.prototype.isAuthenticated = function () {
        return this.get('isAuthenticated');
    };
    /**
     * Authorize given ApiCall instance, adding necessary
     * authorization headers, etc.
     *
     * @method authorizeApiCall
     * @param  {Api.ApiCall} apiCall
     * @return {Api.ApiCall}
     */
    Auth.prototype.authorizeApiCall = function (apiCall) {
        // Extend with my options
        var ajaxOptions = this.getAjaxOptions();
        jquery_1.default.extend(apiCall.ajaxOptions, ajaxOptions);
        return apiCall;
    };
    Auth.prototype.getAjaxOptions = function () {
        return {};
    };
    /**
     * Read given Api Error and update session accordingly, if
     * appropriate.
     *
     * @method processApiError
     * @param  {object} error
     * @return {object}
     */
    Auth.prototype.processApiError = function (error) {
        return error;
    };
    return Auth;
}(Observable_1.default));
exports.default = Auth;
//# sourceMappingURL=Auth.js.map