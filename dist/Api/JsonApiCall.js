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
var inflection_1 = __importDefault(require("inflection"));
var moment_1 = __importDefault(require("moment"));
var ApiCall_1 = __importDefault(require("./ApiCall"));
/**
 * @module Api
 */
var JsonApiCall = /** @class */ (function (_super) {
    __extends(JsonApiCall, _super);
    function JsonApiCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @class Api.JsonApiCall
     * @extends Api.ApiCall
     *
     * @constructor
     * @param  {Api.JsonApi} api 	The Api instance this call originates from
     * @param  {string} method      The HTTP method to use (get, post, put, etc.)
     * @param  {string} uri			The uri to call
     * @param  {Object} data
     * @param  {Object} ajaxOptions
     */
    /**
      * Include the given relationships in the request
      *
      * @method include
      * @chainable
      *
      * @param  {string} relations  JSONAPI include options for request
      */
    JsonApiCall.prototype.include = function (relations) {
        if (relations instanceof Array) {
            relations = relations.join(',');
        }
        relations = inflection_1.default.underscore(relations);
        return this.query('include', relations);
    };
    JsonApiCall.prototype.filter = function (key, value) {
        // Value a moment?
        if (moment_1.default.isMoment(value))
            value = value.format('YYYY-MM-DD');
        return this.query('filter[' + inflection_1.default.underscore(key) + ']', value);
    };
    JsonApiCall.prototype.enrich = function (keys) {
        return this.query('enrich', keys);
    };
    JsonApiCall.prototype.sort = function (key, direction) {
        if (direction === void 0) { direction = 'ascending'; }
        // Format key
        key = inflection_1.default.underscore(key);
        // Check direction
        if (/^desc/.test(direction))
            key = '-' + key;
        // Apply
        return this.query('sort', key);
    };
    return JsonApiCall;
}(ApiCall_1.default));
exports.default = JsonApiCall;
//# sourceMappingURL=JsonApiCall.js.map