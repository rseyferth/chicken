"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiError = /** @class */ (function () {
    function ApiError(apiCall, xhrError) {
        /**
         * @property api
         * @type {Api.ApiCall}
         */
        this.apiCall = apiCall;
        /**
         * @property xhrError
         * @type {jqXHR}
         */
        this.xhrError = xhrError;
    }
    ApiError.prototype.getStatusCode = function () {
        return this.xhrError.status;
    };
    ApiError.prototype.getMessage = function () {
        // JSON body with message?
        if (this.xhrError.responseJSON && this.xhrError.responseJSON.message) {
            return this.xhrError.responseJSON.message;
        }
        // Text?
        if (this.xhrError.responseText)
            return this.xhrError.responseText;
        // Don't know
        return 'Unknown error';
    };
    ApiError.prototype.getFormErrors = function () {
        // JSON body with message?
        if (this.xhrError.responseJSON && this.xhrError.responseJSON.errors) {
            // Get errors
            return this.xhrError.responseJSON.errors;
        }
        return {};
    };
    ApiError.prototype.getStatus = function () {
        return this.xhrError.status;
    };
    return ApiError;
}());
exports.default = ApiError;
//# sourceMappingURL=ApiError.js.map