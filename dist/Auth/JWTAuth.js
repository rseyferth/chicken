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
var moment_1 = __importDefault(require("moment"));
var Auth_1 = __importDefault(require("./Auth"));
var AuthError_1 = __importDefault(require("./AuthError"));
/**
 * @module Auth
 */
var JWTAuth = /** @class */ (function (_super) {
    __extends(JWTAuth, _super);
    /**
     * @class Auth.JWTAuth
     * @extends Auth.Auth
     *
     * @param 	{Object} options
     * @constructor
     */
    function JWTAuth(options) {
        var _this = this;
        // Default options
        options = jquery_1.default.extend({
            baseUrl: '',
            authenticateUri: '/authenticate',
            refreshUri: '/authenticate/refresh',
            currentUserUri: '/me',
            authenticateMethod: 'post',
            refreshMethod: 'post',
            middlewareName: 'auth.jwt',
            beforeSend: false,
            identifierKey: 'email',
            passwordKey: 'password',
            tokenValidForMinutes: 360,
            autoRefreshToken: true,
            autoRefreshInterval: 7200,
            localStorageKey: 'ChickenJWTAuthToken',
            storeCredentialsLocally: false
        }, options);
        _this = _super.call(this, options) || this;
        return _this;
    }
    JWTAuth.prototype.initialize = function () {
        var _this = this;
        // Get token from localstorage
        try {
            this.token = JSON.parse(localStorage.getItem(this.settings.localStorageKey + ".token"));
        }
        catch (err) {
            this.token = undefined;
        }
        // Do we have a non-expired token?
        var hasToken = false;
        if (this.token && this.token.receivedAt) {
            // More than 30 minutes old?
            var minTime = moment_1.default().unix() - this.settings.tokenValidForMinutes * 60;
            hasToken = this.token.receivedAt > minTime;
        }
        // No token?
        if (!hasToken) {
            // Credentials stored locally?
            if (this.settings.storeCredentialsLocally) {
                try {
                    // Retrieve credentials
                    var credentials_1 = JSON.parse(localStorage.getItem(this.settings.localStorageKey + ".credentials"));
                    if (credentials_1) {
                        return new Promise(function (resolve) {
                            // Try to authenticate using stored creds
                            _this.authenticate(credentials_1.identifier, credentials_1.password).then(function () {
                                // Auth Successful!
                                resolve(true);
                            }, function () {
                                // Auth failed
                                resolve(false);
                            });
                        });
                    }
                }
                catch (err) {
                    // Continue...
                }
            }
        }
        // Validate the token
        return new Promise(function (resolve) {
            // No token?
            if (!hasToken) {
                resolve(false);
                return;
            }
            // Wheter we are or are not authenticated, we resolve, because initializion is complete
            _this.validateToken().then(function () {
                // Authenticated
                _this.doCallback('onAuthenticated', []).then(function () {
                    _this.set('isAuthenticated', true);
                });
                resolve(true);
            }, function () {
                resolve(false);
            });
        });
    };
    /**
     * Try to authenticate using given credentials
     *
     * @method authenticate
     * @param  {string} identifier 	Usually the email address
     * @param  {string} password
     * @return {Promise}
     */
    JWTAuth.prototype.authenticate = function (identifier, password) {
        var _this = this;
        // Make a call.
        return new Promise(function (resolve, reject) {
            // Prepare data
            var data = {};
            data[_this.settings.identifierKey] = identifier;
            data[_this.settings.passwordKey] = password;
            // Make the call.
            var options = {
                url: "" + _this.settings.baseUrl + _this.settings.authenticateUri,
                data: data,
                method: _this.settings.authenticateMethod
            };
            if (_this.settings.beforeSend)
                options.beforeSend = function (xhr) {
                    _this.settings.beforeSend(xhr);
                };
            jquery_1.default.ajax(options).then(function (result) {
                // Check token.
                if (!result.token)
                    reject('Could not find token in result');
                // Store it.
                _this.setToken(result.token);
                // Store credentials
                if (_this.settings.storeCredentialsLocally) {
                    localStorage.setItem(_this.settings.localStorageKey + ".credentials", JSON.stringify({
                        identifier: identifier,
                        password: password
                    }));
                }
                // Handle user events
                _this.doCallback('onAuthenticated', []).then(function () {
                    _this.set('isAuthenticated', true);
                    resolve(_this.token);
                });
            }).fail(function (error) {
                reject(new AuthError_1.default(_this, error));
            });
        });
    };
    JWTAuth.prototype.invalidate = function () {
        var _this = this;
        return new Promise(function (resolve /*, reject*/) {
            // Waiting to time out?
            if (_this.sessionTimeoutTimeout) {
                clearTimeout(_this.sessionTimeoutTimeout);
                _this.sessionTimeoutTimeout = false;
            }
            if (_this.autoRefreshTimeout) {
                clearTimeout(_this.autoRefreshTimeout);
                _this.autoRefreshTimeout = false;
            }
            // Remove token
            _this.token = undefined;
            localStorage.removeItem(_this.settings.localStorageKey + ".token");
            _this.set('isAuthenticated', false);
            _this.doCallback('onInvalidated', []);
            _this.trigger('invalidated');
            resolve();
        });
    };
    JWTAuth.prototype.refreshToken = function () {
        var _this = this;
        // Waiting to time out?
        if (this.autoRefreshTimeout) {
            clearTimeout(this.autoRefreshTimeout);
            this.autoRefreshTimeout = false;
        }
        // Make a call.
        return new Promise(function (resolve, reject) {
            // Already timed out?
            if (!_this.isAuthenticated()) {
                reject('Cannot refresh token when not authenticated');
                return;
            }
            // Make the call.
            jquery_1.default.ajax({
                url: _this.settings.baseUrl + _this.settings.refreshUri,
                method: _this.settings.refreshMethod,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + _this.token.token);
                }
            }).then(function (result) {
                // Check token.
                if (!result.token)
                    reject('Could not find token in result');
                // Store it.
                _this.setToken(result.token);
                resolve(_this.token);
                // Authenticated
                _this.trigger('tokenRefreshed');
            }).fail(function (error) {
                _this.invalidate();
                reject(new AuthError_1.default(_this, error));
            });
        });
    };
    JWTAuth.prototype.setToken = function (tokenString) {
        // Store it
        this.token = {
            token: tokenString,
            receivedAt: moment_1.default().unix()
        };
        // Waiting to time out?
        if (this.sessionTimeoutTimeout) {
            clearTimeout(this.sessionTimeoutTimeout);
            this.sessionTimeoutTimeout = false;
        }
        if (this.autoRefreshTimeout) {
            clearTimeout(this.autoRefreshTimeout);
            this.autoRefreshTimeout = false;
        }
        // Remember it.
        localStorage.setItem(this.settings.localStorageKey + ".token", JSON.stringify(this.token));
        // We are logged in
        this.validateToken();
    };
    JWTAuth.prototype.clearToken = function () {
        this.token = undefined;
        localStorage.removeItem(this.settings.localStorageKey + ".token");
    };
    JWTAuth.prototype.forgetCredentials = function () {
        localStorage.removeItem(this.settings.localStorageKey + ".credentials");
    };
    JWTAuth.prototype.validateToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Any token?
            if (_this.token) {
                // Is it an object?
                if (_this.token instanceof Object) {
                    // Still valid?
                    var now = moment_1.default().unix();
                    var timesOutAt = _this.token.receivedAt + _this.settings.tokenValidForMinutes * 60;
                    if (timesOutAt < now) {
                        // No longer valid.
                        _this.set('isAuthenticated', false);
                        _this.clearToken();
                        reject();
                        return;
                    }
                    // Auto refresh?
                    if (_this.settings.autoRefreshToken) {
                        // Wait a bit and then refresh
                        if (_this.autoRefreshTimeout)
                            clearTimeout(_this.autoRefreshTimeout);
                        var refreshAt = _this.token.receivedAt + _this.settings.autoRefreshInterval;
                        var timeoutMs = Math.max((refreshAt - now) * 1000, 5000);
                        _this.autoRefreshTimeout = setTimeout(function () {
                            _this.autoRefreshTimeout = false;
                            _this.refreshToken();
                        }, timeoutMs);
                    }
                    // Wait for it to timeout
                    if (_this.sessionTimeoutTimeout)
                        clearTimeout(_this.sessionTimeoutTimeout);
                    _this.sessionTimeoutTimeout = setTimeout(function () {
                        ////////////////////////////////
                        // Make the session time out! //
                        ////////////////////////////////
                        _this.sessionTimeoutTimeout = undefined;
                        _this.trigger('sessionTimedOut');
                        _this.set('isAuthenticated', false);
                        _this.token = undefined;
                        if (_this.autoRefreshTimeout)
                            clearTimeout(_this.autoRefreshTimeout);
                    }, (timesOutAt - now) * 1000);
                    // Done!
                    resolve();
                }
                else {
                    // Not valid
                    _this.set('isAuthenticated', false);
                    reject();
                    _this.token = undefined;
                }
            }
            else {
                // Not authenticated
                _this.set('isAuthenticated', false);
                reject();
            }
        });
    };
    JWTAuth.prototype.processApiError = function (error) {
        // Unauthorized?
        if (error.xhrError.status === 401) {
            if (error.getMessage() === 'Unable to authenticate with invalid token.') {
                this.invalidate();
            }
        }
        return error;
    };
    JWTAuth.prototype.getAjaxOptions = function () {
        var _this = this;
        // Add token.
        var options = {};
        if (this.token) {
            // Add the bearer token
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + _this.token.token);
            };
        }
        return options;
    };
    JWTAuth.Events = {
        /**
         * This event is triggered when a successful token refresh
         * action is completed
         *
         * @event tokenRefreshed
         * @type {String}
         */
        TokenRefreshed: 'tokenRefreshed'
    };
    return JWTAuth;
}(Auth_1.default));
exports.default = JWTAuth;
//# sourceMappingURL=JWTAuth.js.map