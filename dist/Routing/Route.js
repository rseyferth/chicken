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
var xregexp_1 = __importDefault(require("xregexp"));
var Obj_1 = __importDefault(require("../Core/Obj"));
var RouteMatch_1 = __importDefault(require("./RouteMatch"));
var Model_1 = __importDefault(require("../Data/Model"));
/**
 * @module Routing
 */
var Route = /** @class */ (function (_super) {
    __extends(Route, _super);
    function Route(router, parent, pattern, actions, options) {
        if (actions === void 0) { actions = null; }
        if (options === void 0) { options = {}; }
        var _this = 
        // Basics
        _super.call(this) || this;
        _this.nested = {};
        _this.parameterConstraints = new Map();
        _this.errorHandlers = {};
        _this.parameters = [];
        _this.acceptsQuery = true;
        _this.acceptsFlash = false;
        // Localize
        _this.actions = actions;
        if (parent)
            _this.parentRoute = parent;
        _this.router = router;
        _this.pattern = pattern.replace(/(.)\/$/, '$1'); // Remove trailing slash
        /**
         * The options used when defining this Route
         *
         * @property options
         * @type {object}
         */
        _this.options = underscore_1.default.defaults(options, {
            abstract: actions === null,
            as: null,
            viewContainer: 'main',
            middleware: [],
            services: []
        });
        // Add me to parent route
        if (parent) {
            parent.nested[_this.pattern] = _this;
        }
        return _this;
    }
    ////////////////////
    // Public methods //
    ////////////////////
    /**
     * Call this when you want to define routes nested under the current one. The provided callback
     * will be called with the Router as context, allowing you to use this.route to define the nested
     * routes.
     *
     * @example
     * 	Chicken.createApplication($('#application'), {
     * 		baseUrl: '/'
     * 	}).routes(function() {
     *
     *  	this.route('/animals', 'Animal@index')                            // /animals
     *  		.nest(function() {
     *  			this.route('/dog', 'Animal@dog')                          // /animals/dog
     *  				.nest({ viewContainer: 'dogs' }, function() {
     *      				this.route('/:dogName', 'Animal@dogDetails');     // /animals/dog/:dogName
     *      				this.route('/about-dogs', 'Animal@aboutDogs');    // /animals/dog/about-dogs
     *  				});
     *      		this.route('/cat', 'Animal@cat');                         // /animals/cat
     *  		 });
     *
     *
     * 	});
     *
     *
     * @method nest
     * @param {object} 		[options]   An optional options hash, to apply to all nested routes
     * @param {function} 	callback 	Your callback
     * @chainable
     */
    Route.prototype.nest = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Check if options were given
        var callback = args.pop();
        var options = args.length > 0 ? args.pop() : {};
        // Make me the parent route
        this.router.group(underscore_1.default.defaults({
            parentRoute: this
        }, options), callback);
        return this;
    };
    Route.prototype.abstract = function () {
        this.options.abstract = true;
        return this;
    };
    /**
     * Check whether this Route matches the given Request. If so, the method
     * will return a complete RouteMatch. If not, the method will return `false`.
     *
     * @method match
     * @param  {Routing.Request} request
     * @return {Routing.RouteMatch|boolean}
     */
    Route.prototype.match = function (request) {
        // Am I an abstract route?
        if (this.isAbstract())
            return false;
        // Does it match?
        var match = xregexp_1.default.exec(request.uri, this.getRegExp());
        // No match?
        if (!match)
            return false;
        // Do I have a nested / route?
        if (this.nested['/']) {
            // Use that route instead of me...
            request.uri = request.uri + '/';
            return this.nested['/'].match(request);
        }
        // Convert result
        var result = {};
        underscore_1.default.each(match, function (value, key) {
            result[key] = value;
        });
        // We matched! Let's create a match object.
        return new RouteMatch_1.default(this, result, request);
    };
    Route.prototype.error = function (key, callback) {
        if (this.errorHandlers[key] === undefined)
            this.errorHandlers[key] = [];
        this.errorHandlers[key].push(callback);
        return this;
    };
    /**
     * Get the action definitions for the Route. An action definition can either
     * be a Controller action (e.g.: `Product@index`), or a callback. The result
     * is keyed by the target ViewContainer name.
     *
     * @method getActions
     * @return {object}
     */
    Route.prototype.getActions = function () {
        // Is it still a string (Controller@action) or callback?
        if (typeof this.actions === 'string' || typeof this.actions === 'function') {
            // Wrap in object using default view container
            var actions = {};
            actions[this.options.viewContainer] = this.actions;
            this.actions = actions;
        }
        return this.actions;
    };
    /**
     * Get the action definitions for this Route, and any parent routes that it may have.
     *
     * @method getFullActions
     * @return {object}
     */
    Route.prototype.getFullActions = function () {
        // Start with mine
        var actions = this.getActions();
        // Add parent
        if (this.parentRoute) {
            return underscore_1.default.defaults(actions, this.parentRoute.actions);
        }
        return actions;
    };
    /**
     * Get the full Route pattern within the application for this route,
     * including any parent Routes.
     *
     * @method getFullPattern
     * @return {string}
     */
    Route.prototype.getFullPattern = function () {
        // My pattern as base
        var p = this.pattern;
        // Get parent's full pattern
        if (this.parentRoute) {
            var parentPart = this.parentRoute.getFullPattern();
            if (parentPart !== '/') {
                p = parentPart + p;
            }
        }
        return p;
    };
    Route.prototype.makeUrl = function (attributes) {
        if (attributes === void 0) { attributes = {}; }
        // Get full pattern
        var pattern = this.getFullPattern();
        underscore_1.default.each(attributes, function (value, key) {
            // Is the value a model?
            if (value instanceof Model_1.default)
                value = value.get('id');
            pattern = pattern.split(':' + key).join(value);
        });
        return pattern;
    };
    /**
     * Get all parameter constraints for this Route, combining constraints
     * defined by parent routes.
     *
     * @method getAllParameterConstraints
     * @return {Map} Map with a regular expression constraint for each constrained parameter
     */
    Route.prototype.getAllParameterConstraints = function () {
        // My constraints (don't overwrite)
        var c = new Map(this.parameterConstraints);
        // Get parent's constraints
        if (this.parentRoute) {
            // Prefix the pattern
            this.parentRoute.getAllParameterConstraints().forEach(function (regex, key) {
                if (!c.has(key))
                    c.set(key, regex);
            });
        }
        return c;
    };
    Route.prototype.getMiddlewareNames = function () {
        return this.options.middleware;
    };
    Route.prototype.getRegExp = function () {
        var _this = this;
        // Not yet set?
        if (this.regExp === undefined) {
            // Collect buildingBlocks (a regular expression pattern for each parameter)
            var buildingBlocks_1 = {};
            // Convert :params into regex with building blocks 
            // (see XRegExp.build documentation)
            var constraints_1 = this.getAllParameterConstraints();
            var exp = xregexp_1.default.replace(this.getFullPattern(), /(([\:\*])([a-zA-Z\-\_]+))/, function (match, complete, paramType, paramName) {
                // Wildcard?
                var paramRegex;
                if (paramType === '*') {
                    // Use wildcard
                    paramRegex = Route.ParameterType.Wildcard;
                }
                else {
                    // Check if there is a constraint
                    paramRegex = constraints_1.has(paramName) ? constraints_1.get(paramName) : Route.ParameterType.Standard;
                }
                // Store as building block for regex
                buildingBlocks_1[paramName] = paramRegex;
                // Store parameter
                _this.parameters.push(paramName);
                // Replace with a building block using named parameter
                return '({{' + paramName + '}})';
            }, 'all');
            // Create it
            this.regExp = xregexp_1.default.build('^' + exp + '$', buildingBlocks_1);
        }
        // Return it
        return this.regExp;
    };
    /**
     * Add a constraint to a parameter, by supplying a regular expression.
     *
     * @method constrain
     * @param  {string} parameterName The name of the parameter to add constrains to
     * @param  {RegExp} regExp        A regular expression to use when matching the parameter
     * @chainable
     */
    Route.prototype.constrain = function (parameterName, regExp) {
        // Store it
        this.parameterConstraints.set(parameterName, regExp);
        return this;
    };
    Route.prototype.acceptQuery = function (accept) {
        if (accept === void 0) { accept = true; }
        this.acceptsQuery = accept;
        return this;
    };
    Route.prototype.acceptFlash = function (accept) {
        if (accept === void 0) { accept = true; }
        this.acceptsFlash = accept;
        return this;
    };
    /**
     * Set the name of this Route
     *
     * @method as
     * @param  {string} name
     * @chainable
     */
    Route.prototype.as = function (name) {
        // Does the name start with a .?
        if (/^\./.test(name) && this.parentRoute && this.parentRoute.name) {
            // Strip off a part for each ..
            var parts = this.parentRoute.name.split(/\./);
            while (/^\.\./.test(name)) {
                parts.pop();
                name = name.substr(1);
            }
            // Relative name. Add parent name as prefix
            name = "" + parts.join('.') + name;
        }
        // Store name
        this.name = name;
        // Store in router
        this.router.namedRoutes.set(name, this);
        return this;
    };
    Route.prototype.middleware = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        this.options.middleware = underscore_1.default.unique(underscore_1.default.flatten([this.options.middleware, keys]));
        return this;
    };
    Route.prototype.services = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        this.options.services = underscore_1.default.unique(underscore_1.default.flatten([this.options.services, keys]));
        return this;
    };
    /**
     * An abstract Route can never be matched. This is useful when you have a Route
     * that only has subroutes, but no actions itself. If you define a Route without
     * actions, this will automatically be set to true.
     *
     * @method isAbstract
     * @return {Boolean}
     */
    Route.prototype.isAbstract = function () {
        return !!this.options.abstract;
    };
    Route.ParameterType = {
        /**
         * Regular expression for a standard parameter
         *
         * Default: `/[^\/]+/`
         *
         * @property ParameterType.Standard
         * @static
         * @type {RegExp}
         */
        Standard: /[^\/]+/,
        /**
         * Regular expression for a wildcard parameter
         *
         * Default: `/.+/`
         *
         * @property ParameterType.Wildcard
         * @static
         * @type {RegExp}
         */
        Wildcard: /.+/
    };
    return Route;
}(Obj_1.default));
exports.default = Route;
//# sourceMappingURL=Route.js.map