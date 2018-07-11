"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var query_string_1 = __importDefault(require("query-string"));
var Action_1 = __importDefault(require("./Action"));
var Utils_1 = require("../Helpers/Utils");
/**
 * @module Routing
 */
var RouteMatch = /** @class */ (function () {
    function RouteMatch(route, regExpMatch, request) {
        var _this = this;
        this.route = route;
        this.regExpMatch = regExpMatch;
        this.request = request;
        this.actions = new Map();
        this.parameters = new Map();
        this.query = query_string_1.default.parse(window.location.search);
        ////////////////////
        // Create actions //
        ////////////////////
        // Read parameters from match
        underscore_1.default.each(route.parameters, function (paramName) {
            _this.parameters.set(paramName, regExpMatch[paramName]);
        });
        // Start with the matched route
        this._readActionsFromRoute(route);
    }
    /**
     * Handle leaving this RouteMatch
     *
     * @method leave
     * @param  {Routing.RouteMatch} toRoute The RouteMatch we're going to after leaving this
     * @return {Promise}
     */
    RouteMatch.prototype.leave = function (toRoute) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Loop through action results
            var leavePromises = [];
            _this.actions.forEach(function (action, name) {
                // Get replacing action
                var replacingAction = toRoute.actions.get(name);
                if (replacingAction) {
                    // Was it triggered by the same route?
                    if (action.viewContainer && action.viewContainer.currentAction && Utils_1.uidFor(action.viewContainer.currentAction.route) === Utils_1.uidFor(replacingAction.route)) {
                        // Are the arguments the same as well?
                        var currentParams = JSON.stringify(action.parameterArray);
                        var replacingParams = JSON.stringify(replacingAction.parameterArray);
                        if (currentParams === replacingParams) {
                            // That means, we've just navigated within nested routes of that page, and this action will stay the same
                            return;
                        }
                    }
                }
                // Leave this action				
                leavePromises.push(action.leave());
            });
            // Anything?
            if (leavePromises.length === 0) {
                resolve();
                return;
            }
            // When all is done
            Promise.all(leavePromises).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    RouteMatch.prototype._readActionsFromRoute = function (route) {
        var _this = this;
        // Collect parameters from route
        var params = new Map();
        var paramArray = [];
        underscore_1.default.each(route.parameters, function (paramName) {
            paramArray.push(_this.parameters.get(paramName));
            params.set(paramName, _this.parameters.get(paramName));
        });
        // Get actions
        var myActions = {};
        underscore_1.default.each(route.getActions(), function (routeAction, targetViewContainer) {
            // Is there already an action defined for this target
            if (_this.actions.has(targetViewContainer))
                return;
            // Make it.
            var action = new Action_1.default(targetViewContainer, routeAction, _this.request);
            // Set routes
            action.route = route;
            action.matchedRoute = _this.route;
            action.routeMatch = _this;
            // Set parameters
            action.parameters = params;
            action.parameterArray = paramArray;
            // Add it.
            myActions[targetViewContainer] = action;
        });
        // Make any actions that are already there dependent on the new ones, 
        // because these actions are the parent(s) of the existing actions.
        this.actions.forEach(function (previousAction) {
            underscore_1.default.each(myActions, function (myAction) {
                previousAction.dependsOn.push(myAction);
            });
        });
        // Add these actions
        var actionsToMakeDependentOn = [];
        underscore_1.default.each(myActions, function (myAction, targetViewContainer) {
            // My this action dependent on previous actions defined in this route
            underscore_1.default.each(actionsToMakeDependentOn, function (depAction) {
                myAction.dependsOn.push(depAction);
            });
            // Add the action to my actions
            _this.actions.set(targetViewContainer, myAction);
            actionsToMakeDependentOn.push(myAction);
        });
        // Now look into the parent
        if (route.parentRoute) {
            this._readActionsFromRoute(route.parentRoute);
        }
        // We're done!
        return this.actions;
    };
    return RouteMatch;
}());
exports.default = RouteMatch;
//# sourceMappingURL=RouteMatch.js.map