"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module AuthError
 */
var AuthError = /** @class */ (function () {
    function AuthError(auth, xhrError) {
        this.auth = auth;
        this.xhrError = xhrError;
    }
    AuthError.prototype.getMessage = function () {
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
    return AuthError;
}());
exports.default = AuthError;
//# sourceMappingURL=AuthError.js.map