"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = __importDefault(require("query-string"));
var Application_1 = __importDefault(require("../Application"));
/**
 * @module Routing
 */
var Request = /** @class */ (function () {
    /**
     * @class Routing.Request
     *
     * @constructor
     * @param {object} 			location 		The location received from the History library
     * @param {Application} 	[application] 	The Application instance that this Request is a part of
     */
    function Request(location, application) {
        // Guess application if not given
        if (!application)
            application = Application_1.default.getInstance();
        // Parse the uri 
        var uri = Request.cleanUri(location.pathname);
        // Strip of base part
        var baseUrl = Request.cleanUri(application.settings.get('baseUrl'));
        if (uri.length >= baseUrl.length && uri.substr(0, baseUrl.length)) {
            uri = uri.substr(baseUrl.length);
        }
        // Add the / back again
        uri = '/' + uri;
        /**
         * @property uri
         * @type {string}
         */
        this.uri = uri;
        /**
         * @property query
         * @type {object}
         */
        this.query = query_string_1.default.parse(location.search);
        /**
         * @property flash
         * @type {object|false}
         */
        this.flash = location.state ? location.state.flash : {};
        this.transition = location.state ? location.state.transition : null;
    }
    Request.cleanUri = function (uri) {
        if (/^\//.test(uri))
            uri = uri.substr(1);
        if (/\/$/.test(uri))
            uri = uri.substr(0, uri.length - 1);
        return uri;
    };
    Request.prototype.getFlash = function (key) {
        if (this.flash && this.flash[key])
            return this.flash[key];
        return null;
    };
    return Request;
}());
exports.default = Request;
//# sourceMappingURL=Request.js.map