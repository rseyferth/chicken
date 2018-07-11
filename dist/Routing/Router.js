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
var Obj_1 = __importDefault(require("../Core/Obj"));
var RouteMatch_1 = __importDefault(require("./RouteMatch"));
var Route_1 = __importDefault(require("./Route"));
var Redirect_1 = __importDefault(require("./Redirect"));
var RoutingError_1 = __importDefault(require("./RoutingError"));
var ApiError_1 = __importDefault(require("../Api/ApiError"));
var SettingsObject_1 = __importDefault(require("../Core/SettingsObject"));
var Request_1 = __importDefault(require("./Request"));
var Middleware_1 = __importDefault(require("./Middleware"));
var Service_1 = __importDefault(require("../Data/Service"));
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    /**
     *
     *
     * @class Routing.Router
     * @extends Core.Object
     */
    function Router(application /*, parentRouter = null*/) {
        var _this = _super.call(this) || this;
        _this.routes = [];
        _this.namedRoutes = new Map();
        _this.application = application;
        _this.errorHandlers = {
            'all': [],
            'js': [],
            'api': [],
            'api.400': [],
            'api.404': [],
            'api.500': [],
            'router': [],
            'router.403': [],
            'router.404': []
        };
        ///////////////////////////////////////////
        // Grouped configuration state variables //
        ///////////////////////////////////////////
        _this.currentConfig = new SettingsObject_1.default({
            parentRoute: null,
            viewContainer: 'main',
            services: [],
            middleware: []
        }, ['parentRoute', 'viewContainer', 'middleware', 'services']);
        return _this;
    }
    ////////////////////////
    // Definition methods //
    ////////////////////////
    /**
     * Create a Route and add it to the Router.
     *
     * @method route
     * @param  {string} 			pattern 	The uri pattern
     * @param  {Object|String} 		actions
     * @param  {Object} 			[options]
     * @return {Routing.Route}
     */
    Router.prototype.route = function (pattern, actions, options) {
        if (options === void 0) { options = {}; }
        // Merge options
        options = underscore_1.default.defaults({}, options, underscore_1.default.omit(this.currentConfig.toObject(), 'parentRoute'));
        // Create the route
        var route = new Route_1.default(this, this.currentConfig.get('parentRoute'), pattern, actions, options);
        // Add route
        this.routes.push(route);
        // Return route
        return route;
    };
    Router.prototype.errorRoute = function (errorKey, actions, options) {
        if (options === void 0) { options = {}; }
        // Get route
        options.isErrorRoute = true;
        var route = this.route('/__errors/' + errorKey, actions, options);
        this.handleErrors(errorKey, route);
        return this;
    };
    Router.prototype.catchAll = function (actions, options) {
        if (options === void 0) { options = {}; }
        return this.route('/:url', actions, options).constrain('url', /.*/);
    };
    /**
     * Configure the Router to add the given options to
     * the Routes you define within the callback.
     *
     * @method group
     * @param  {object}   options
     * @param  {Function} callback
     * @chainable
     */
    Router.prototype.group = function (options, callback) {
        // Store options
        var oldConfig = this.currentConfig.clone();
        this.currentConfig.apply(options);
        // Do the callback
        callback.apply(this);
        // Restore options
        this.currentConfig = oldConfig;
        return this;
    };
    //////////////////////
    // Router in action //
    //////////////////////
    /**
     * Handle given Request, by finding a matching Route
     * and executing it.
     *
     * @method handle
     * @param  {Routing.Request} request
     * @return {Routing.RouteMatch}
     */
    Router.prototype.handle = function (request) {
        /////////////////
        // Match route //
        /////////////////
        var _this = this;
        // Is it just a URL passed along?
        if (!(request instanceof Request_1.default)) {
            request = new Request_1.default(request);
        }
        // Loop through routes until we found something.
        var routeMatch;
        underscore_1.default.find(this.routes, function (route) {
            var match = route.match(request);
            if (match) {
                routeMatch = match;
                return true;
            }
            return false;
        });
        // Found something?
        if (!routeMatch) {
            // Create error
            var error = new RoutingError_1.default(404, 'Page not found', request);
            return this.getErrorRouteMatch(error) || false;
        }
        // First leave current route
        if (this.application.currentRoute) {
            // Leave
            this.application.currentRoute.leave(routeMatch).then(function () {
                _this.application.currentRoute = undefined;
                _this.handle(request);
            });
            return false;
        }
        // Going.
        this.trigger('navigate', request);
        // Store it on app
        this.application.currentRoute = routeMatch;
        // Make the execution callback
        var executeActions = function () {
            /////////////////////////////
            // Start executing actions //
            /////////////////////////////
            var numberOfActionsStarted = 0;
            var actionPromises = [];
            routeMatch.actions.forEach(function (action, vcName) {
                // Get the ViewContainer
                var vc = _this.application.getViewContainer(vcName);
                // Disabled navigation for this request?
                if (_this.application.navigationDisabledOnce) {
                    // Just set the action on the viewcontainer, but don't actually do anything
                    if (vc) {
                        vc.setAction(action);
                    }
                    // Done.
                    numberOfActionsStarted++;
                    return new Promise(function (resolve) {
                        resolve();
                    });
                }
                // Add transition
                if (request.transition && !vc.transitionsDisabled) {
                    action.transition = request.transition;
                }
                // Get depends on promises
                var dependsOnPromises = underscore_1.default.map(action.dependsOn, function (dependsOnAction) {
                    return dependsOnAction.getPromise('complete');
                });
                // And any services that should be loaded
                underscore_1.default.each(routeMatch.route.options.services, function (service) {
                    // Find service
                    var serviceInstance = Service_1.default.get(service);
                    if (!serviceInstance)
                        throw new Error("[Routing.Router] There is no service \"" + service + "\" registered");
                    // Load it
                    var promise = serviceInstance.load();
                    dependsOnPromises.push(promise);
                });
                // Wait?
                if (dependsOnPromises.length > 0) {
                    // Wait for it
                    Promise.all(dependsOnPromises).then(function () {
                        // Now we're ready!
                        action.execute(_this.application);
                    }, function (error) {
                        throw new Error('[Routing.Router] Action for "' + vcName + '" was not started, due to error in dependancy route: ' + error);
                    });
                }
                else {
                    // Start now
                    numberOfActionsStarted++;
                    action.execute(_this.application);
                }
                // Add complete promise
                actionPromises.push(action.getPromise('complete'));
            });
            ////////////////////////////
            // Keep track of progress //
            ////////////////////////////
            // Any action started?
            if (numberOfActionsStarted === 0 && routeMatch.route.options.services.length === 0) {
                throw new Error("[Routing.Router] No actions for started for route " + routeMatch.route.getFullPattern() + ". Check your configuration.");
            }
            // Listen to the result
            Promise.all(actionPromises).then(function ( /*...results*/) {
                //@TODO What to do?
                _this.trigger('complete', [routeMatch]);
            });
            // Reset navigation disabled
            _this.application.navigationDisabledOnce = false;
        };
        //////////////////////
        // Setup middleware //
        //////////////////////
        // Loop and add middleware
        var callbacksToExecute = [];
        underscore_1.default.each(routeMatch.route.getMiddlewareNames(), function (mwName) {
            // Get the middleware
            var middleware = Middleware_1.default.registry.get(mwName);
            if (!middleware)
                throw new Error('There is no middleware registered with the name "' + mwName + '"');
            // Add the callback
            callbacksToExecute.push(middleware.callback);
        });
        // Lastly we will execute the actions
        callbacksToExecute.push(executeActions);
        ////////////////////////////////////////////////////////////////
        // Now call the first callback, to start the middleware chain //
        ////////////////////////////////////////////////////////////////
        var nextCallback = function () {
            // Get the callback to call
            var cb = callbacksToExecute.shift();
            // Get the next in line
            try {
                cb.apply(_this, [nextCallback, request, routeMatch]);
            }
            catch (error) {
                // Get error route match
                var match = _this.getErrorRouteMatch(error);
                // Break out
                executeActions();
            }
        };
        nextCallback();
        return routeMatch;
    };
    Router.prototype.handleErrors = function (errorType, callback) {
        // Known code?
        if (this.errorHandlers[errorType] === undefined) {
            throw new Error('It is not possible to catch "' + errorType + '" errors; available error statuses are: ' + underscore_1.default.keys(this.errorHandlers).join(', '));
        }
        // Add it
        this.errorHandlers[errorType].push(callback);
    };
    Router.prototype.getErrorHandlers = function (error, obj) {
        // Error object?
        if (typeof error === 'string') {
            error = new Error(error);
        }
        // No obj? Use me.
        if (!obj)
            obj = this;
        // Routing error?
        var handlers = [];
        if (error instanceof RoutingError_1.default) {
            // Add handlers for the status code
            if (obj.errorHandlers['router.' + error.code]) {
                handlers = underscore_1.default.union(handlers, obj.errorHandlers['router.' + error.code]);
            }
            // Add router-handlers
            if (obj.errorHandlers.router)
                handlers = underscore_1.default.union(handlers, obj.errorHandlers.router);
            // Api error?
        }
        else if (error instanceof ApiError_1.default) {
            // Add handlers for the status code
            var statusCode = error.getStatusCode();
            if (obj.errorHandlers['api.' + statusCode]) {
                handlers = underscore_1.default.union(handlers, obj.errorHandlers['api.' + statusCode]);
            }
            // Add api-handlers
            if (obj.errorHandlers.api)
                handlers = underscore_1.default.union(handlers, obj.errorHandlers.api);
        }
        else {
            // Javascript error
            if (obj.errorHandlers.js)
                handlers = underscore_1.default.union(handlers, obj.errorHandlers.js);
        }
        // Always add the 'all' handlers
        if (obj.errorHandlers.all)
            handlers = underscore_1.default.union(handlers, obj.errorHandlers.all);
        // Were we called for a specific object?
        if (obj !== this) {
            // Then append default router callbacks
            handlers = underscore_1.default.union(handlers, this.getErrorHandlers(error));
        }
        return handlers;
    };
    Router.prototype.getErrorRouteMatch = function (error) {
        // Get the handlers
        var handlers = this.getErrorHandlers(error);
        var handlerResult;
        while (handlers.length > 0) {
            // Get handler and call it
            var handler = handlers.shift();
            // Is it a callback?
            var result = void 0;
            if (typeof handler === 'function') {
                // Call handler
                result = handler(error, error.request, this);
            }
            else {
                // Just use the value itself (probably a Route defined through 'errorRoute(...')
                result = handler;
            }
            // Anything?
            if (result) {
                handlerResult = result;
                break;
            }
        }
        // No result?
        if (!handlerResult)
            throw error;
        // A generic redirect?
        if (handlerResult instanceof Redirect_1.default) {
            this.application.goto(handlerResult.uri);
            return undefined;
        }
        // Is it a Route?
        if (handlerResult instanceof Route_1.default) {
            // Fake a match
            var match = new RouteMatch_1.default(handlerResult, {}, error && error.request ? error.request : null);
            return match;
        }
        return undefined;
    };
    /**
     * Output a table to the console containing an overview
     * of all defined routes.
     *
     * Note: This is not supported in all browsers!
     * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
     *
     * @method outputToConsole
     * @chainable
     */
    Router.prototype.outputToConsole = function () {
        // Loop and log
        console.table(underscore_1.default.map(this.routes, function (route) {
            return {
                'Pattern': route.getFullPattern(),
                'Actions': route.isAbstract() ? '(abstract)' : underscore_1.default.map(route.getFullActions(), function (action, targetViewContainer) {
                    return targetViewContainer + ': ' + (typeof action === 'function' ? '(Callback)' : action);
                }).join(', '),
                'Regular expression': route.getRegExp()
            };
        }));
        return this;
    };
    return Router;
}(Obj_1.default));
exports.default = Router;
//# sourceMappingURL=Router.js.map