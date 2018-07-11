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
var xregexp_1 = __importDefault(require("xregexp"));
var underscore_1 = __importDefault(require("underscore"));
var Obj_1 = __importDefault(require("../Core/Obj"));
var Controller_1 = __importDefault(require("./Controller"));
var View_1 = __importDefault(require("../Dom/View"));
var Application_1 = __importDefault(require("../Application"));
var Utils_1 = require("../Helpers/Utils");
var RoutingError_1 = __importDefault(require("./RoutingError"));
var Redirect_1 = __importDefault(require("./Redirect"));
/**
 * @module Routing
 */
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    /**
     * @class Routing.Action
     * @extends Core.Obj
     */
    function Action(targetViewContainer, controllerActionOrCallback, request) {
        var _this = _super.call(this) || this;
        _this.parameters = new Map();
        _this.parameterArray = [];
        _this.dependsOn = [];
        ////////////////
        // Attributes //
        ////////////////
        _this.targetViewContainer = targetViewContainer;
        _this.request = request;
        ///////////////////////////
        // Check passed argument //
        ///////////////////////////
        if (typeof controllerActionOrCallback === 'string') {
            // A view uri?
            if (controllerActionOrCallback.match(/^[a-z\-\d\.]+$/)) {
                // Create a simple view callback
                _this.callback = function () {
                    return new View_1.default(controllerActionOrCallback);
                };
            }
            else {
                // Parse controller name
                var match = xregexp_1.default.exec(controllerActionOrCallback, Action.controllerActionRegexp);
                if (!match)
                    throw new TypeError("Invalid action string: " + controllerActionOrCallback + ". Use controller@method format.");
                // Store this
                _this.controllerClass = match['class'];
                _this.controllerAction = match['action'];
            }
        }
        else if (typeof controllerActionOrCallback === 'function') {
            // Store it
            _this.callback = controllerActionOrCallback;
        }
        else {
            throw new TypeError("[Routing.Action] Did not understand action: " + controllerActionOrCallback);
        }
        return _this;
    }
    Action.prototype.execute = function (application) {
        var _this = this;
        // Make the promise
        return this.promise('complete', function (resolve, reject) {
            // Get the view container
            _this.viewContainer = application.getViewContainer(_this.targetViewContainer);
            if (_this.viewContainer === undefined) {
                reject('There is no ViewContainer available with the name "' + _this.targetViewContainer + '"');
                return;
            }
            // Is there currently an action in this vc?
            if (_this.viewContainer.currentAction) {
                // Was it triggered by the same route?
                if (Utils_1.uidFor(_this.viewContainer.currentAction.route) === Utils_1.uidFor(_this.route)) {
                    // Are the arguments the same as well?
                    var currentParams = JSON.stringify(_this.viewContainer.currentAction.parameterArray);
                    var newParams = JSON.stringify(_this.parameterArray);
                    if (currentParams === newParams) {
                        // Does the route depend on queryString, and did that change?
                        if (_this.viewContainer.currentAction.route.acceptsQuery) {
                            // Then we assume this action has changed.
                            // Is there a flash message in the request?
                        }
                        else if (_this.request.flash && underscore_1.default.size(_this.request.flash) > 0 && _this.viewContainer.currentAction.route.acceptsFlash) {
                            // Then we assume this action has changed.
                        }
                        else {
                            // That means, we've just navigated within nested routes of that page, and this action can be skipped.
                            resolve();
                            return;
                        }
                    }
                }
            }
            // The VC is busy now.
            _this.viewContainer.setLoading(true);
            ////////////////
            // Controller //
            ////////////////
            if (_this.controllerClass) {
                // Make controller
                var ChickenController = Controller_1.default.registry.get(_this.controllerClass);
                if (ChickenController === undefined) {
                    _this.handleError("No controller defined with name \"" + _this.controllerClass + "\"");
                    return;
                }
                _this.controller = new ChickenController(_this);
                // Call action
                var controllerAction = _this.controller[_this.controllerAction];
                if (controllerAction === 'undefined' || typeof controllerAction !== 'function') {
                    _this.handleError('There is no action on the "' + _this.controllerClass + '" controller with the name "' + _this.controllerAction + '"');
                    return;
                }
                // Make the call
                var actionResult = void 0;
                try {
                    actionResult = controllerAction.apply(_this.controller, _this.parameterArray);
                }
                catch (error) {
                    _this.handleError(error, resolve, reject);
                    return;
                }
                _this._processResult(actionResult, resolve, reject);
            }
            //////////////
            // Callback //
            //////////////
            else if (_this.callback) {
                // Do the callback
                _this._processResult(_this.callback.apply(_this.controller, _this.parameterArray), resolve, reject);
            }
            else {
                reject('There is no controller or callback defined... This shouldn\'t happen.');
                return;
            }
        }).then(function (result) {
            // Store result
            _this.result = result;
        }, function ( /* error */) {
            // No longer loading
            if (_this.viewContainer)
                _this.viewContainer.setLoading(false);
        });
    };
    Action.prototype.leave = function () {
        // View?
        if (this.result instanceof View_1.default) {
            return this.result.leave();
        }
        // Leaving is fine.
        return new Promise(function (resolve) {
            resolve();
        });
    };
    Action.prototype._processResult = function (result, resolve, reject) {
        /////////////////////////////////////
        // A 404 in the controller action? //
        /////////////////////////////////////
        var _this = this;
        if (result === false) {
            result = new RoutingError_1.default(404, 'Not found');
        }
        /////////////////
        // A redirect? //
        /////////////////
        if (result instanceof Redirect_1.default) {
            //@TODO Cancel the running request?
            Application_1.default.getInstance().goto(result.uri, undefined, result.flash);
        }
        //////////////////////
        // A routing error? //
        //////////////////////
        else if (result instanceof RoutingError_1.default) {
            // Handle it
            this.handleError(result, resolve, reject);
        }
        ///////////////////////////
        // Is the result a view? //
        ///////////////////////////
        else if (result instanceof View_1.default) {
            // Render the view
            var view_1 = result;
            view_1.render().then(function () {
                // Add it
                _this.viewContainer.setAction(_this);
                view_1.addToContainer(_this.viewContainer);
                resolve(view_1);
            }, function (error) {
                _this.handleError(error, resolve, reject);
            });
        }
        //////////////////////////////
        // Is the result a promise? //
        //////////////////////////////
        else if (result instanceof Promise) {
            // Wait for it to finish
            result.then(function (promiseResult) {
                // Process result again!
                _this._processResult(promiseResult, resolve, reject);
            }, function (error) {
                _this.handleError(error, resolve, reject);
            });
        }
        /////////////////////////////////
        // Is it rendarable by itself? //
        /////////////////////////////////
        else {
            // A string
            if (typeof result === 'string' || result instanceof DocumentFragment) {
                // Set content
                this.viewContainer.setAction(this);
                this.viewContainer.setContent(result);
                resolve(result);
            }
            else {
                // Don't know how to render this...
                reject('I don\'t know how to render the result for "' + this.targetViewContainer + '"');
                return;
            }
        }
    };
    Action.prototype.handleError = function (error, resolve, reject) {
        // Error object?
        if (typeof error === 'string') {
            error = new Error(error);
        }
        // Check router error handling, given priority to action, then route
        var route = this.routeMatch.route;
        var errorHandlers = route.router.getErrorHandlers(error, route);
        // Try to get one
        var handlerResult = false;
        var _loop_1 = function () {
            // Get next
            var callback = errorHandlers.shift();
            // Is the callback actually a string (controller action)?
            if (typeof callback === 'string') {
                // Get the controller action callback
                var _a = callback.split(/@/), controllerName = _a[0], action = _a[1];
                if (controllerName && action) {
                    // Same as me?
                    var ctrl = void 0;
                    if (this_1.controllerClass === controllerName) {
                        ctrl = this_1.controller;
                    }
                    else {
                        var ChickenController = Controller_1.default.registry.get(controllerName);
                        if (!ChickenController)
                            throw new Error('No controller defined with name "' + controllerName + '"');
                        ctrl = new ChickenController(this_1);
                    }
                    // Get action
                    callback = ctrl[action];
                    if (callback === undefined || typeof callback !== 'function') {
                        throw new Error('There is no action on the "' + controllerName + '" controller with the name "' + action + '"');
                    }
                }
                // Is it a route then
                if (typeof callback === 'string') {
                    var viewUri_1 = callback;
                    callback = function () {
                        return new View_1.default(viewUri_1);
                    };
                }
            }
            // Call it.
            handlerResult = callback.apply(this_1, [this_1, error]);
            // Something?
            if (handlerResult)
                return "break";
        };
        var this_1 = this;
        while (errorHandlers.length > 0) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        // No result?
        if (!handlerResult) {
            throw error;
        }
        // Treat the result as my action-result!
        this._processResult(handlerResult, resolve, reject);
    };
    Action.controllerActionRegexp = xregexp_1.default('^(?<class>[A-Z][a-zA-Z0-9\-\.]+)@(?<action>[a-z][a-zA-Z0-9\_]+)$');
    return Action;
}(Obj_1.default));
exports.default = Action;
//# sourceMappingURL=Action.js.map