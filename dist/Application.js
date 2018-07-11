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
var moment_1 = __importDefault(require("moment"));
var query_string_1 = __importDefault(require("query-string"));
var history_1 = require("history"); // https://www.npmjs.com/package/history
var jquery_1 = __importDefault(require("jquery"));
var underscore_1 = __importDefault(require("underscore"));
var Observable_1 = __importDefault(require("./Core/Observable"));
var ViewContainer_1 = __importDefault(require("./Dom/ViewContainer"));
var Router_1 = __importDefault(require("./Routing/Router"));
var SettingsObject_1 = __importDefault(require("./Core/SettingsObject"));
var I18n_1 = __importDefault(require("./Localization/I18n"));
var Element_1 = __importDefault(require("./Dom/Element"));
var Renderer_1 = __importDefault(require("./Dom/Renderer"));
//////////////////////
// Class definitino //
//////////////////////
/**
 * The main Application class, used to create a Chicken application.
 *
 * @param {JQuery} $app - The target jQuery element to create application in
 * @param {Object} settings - Application settings object
 * @param {string} [settings.baseUrl=/] - The root uri of the application
 * @param {History} [history] Optional browser history instance. Will be created for you if you leave it null.
 *
 */
var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    function Application($app, settings, history) {
        var _this = 
        // Basics
        _super.call(this) || this;
        _this.viewContainers = {};
        _this.apis = {};
        _this.auths = {};
        _this.loadPromises = [];
        _this.navigationDisabledOnce = false;
        Application._instance = _this;
        ////////////////
        // Properties //
        ////////////////
        /**
         * The jQuery element that is the Application
         *
         * @property $app
         * @type {jQuery}
         */
        _this.$app = $app ? $app : jquery_1.default('#application');
        /**
         * All ViewContainers in the application. This is automatically
         * kept up to date to contain all and only still existing containers.
         *
         * @property viewContainers
         * @type {Object}
         */
        _this.viewContainers = {};
        /**
         * @property router
         * @type {Routing.Router}
         */
        _this.router = new Router_1.default(_this);
        /**
         * @property settings
         * @type {Core.SettingsObject}
         */
        _this.settings = new SettingsObject_1.default({
            baseUrl: '/',
            language: jquery_1.default('html').attr('lang'),
            viewPath: 'views',
            viewExtension: 'hbs',
            elementLinkAttribute: 'link-to',
            renderer: settings.renderer === undefined ? new Renderer_1.default() : null,
            isCordovaApp: false // For use with Cordova
        }, ['baseUrl', 'viewPath', 'viewExtension', 'renderer', 'elementLinkAttribute', 'isCordovaApp']).apply(settings);
        /**
         * @property i18n
         * @type {Localization.I18n}
         */
        _this.i18n = new I18n_1.default(_this.settings.get('language'));
        /**
         * @property history
         * @type {History}
         */
        _this.history = history;
        if (!_this.history) {
            // Cordova app?
            if (_this.settings.get('isCordovaApp')) {
                // Running actual app or previewing in browser?
                if (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1) {
                    // Create a history in memory
                    _this.history = history_1.createMemoryHistory();
                }
                else {
                    // Create a history using #
                    _this.history = history_1.createHashHistory();
                }
            }
            else {
                // Create a browser history
                _this.history = history_1.createBrowserHistory();
            }
        }
        /**
         * Used to tweak history without navigating away from the page
         *
         * @property navigationDisabledOnce
         * @type {Boolean}
         */
        _this.navigationDisabledOnce = false;
        return _this;
    }
    Application.getInstance = function () {
        return Application._instance;
    };
    Application.prototype.findViewContainers = function ($element) {
        var _this = this;
        // No element to look in?
        if (!$element)
            $element = this.$app;
        // Find view containers
        $element.find(ViewContainer_1.default.ElementSelector).each(function (index, el) {
            // Create view container
            var vc = new ViewContainer_1.default(jquery_1.default(el), _this);
            // Already known?
            if (_this.viewContainers[vc.name]) {
                throw new Error('There is already a view named "' + vc.name + '". It is not possible to have two views with the same name at the same time.');
            }
            // Store it.
            _this.viewContainers[vc.name] = vc;
            // Initialize
            vc.initialize();
        });
        return this;
    };
    Application.prototype.updateViewContainers = function ($lookForNewOnesIn) {
        var _this = this;
        // Check if all old ones are still there
        underscore_1.default.each(this.viewContainers, function (vc, key) {
            // Removed?
            if (!vc.isInDom()) {
                delete _this.viewContainers[key];
            }
        });
        // Look for new ones
        if ($lookForNewOnesIn)
            this.findViewContainers($lookForNewOnesIn);
        return this;
    };
    Application.prototype.getViewContainer = function (key) {
        return this.viewContainers[key];
    };
    Application.prototype.routes = function (callback) {
        // Run callback with router
        callback.apply(this.router, []);
        return this;
    };
    Application.prototype.api = function (key, apiInstance) {
        // Get?
        if (apiInstance === null) {
            if (key === null)
                key = underscore_1.default.first(underscore_1.default.keys(this.apis));
            return this.apis[key];
        }
        // Set
        this.apis[key] = apiInstance;
        return this;
    };
    Application.prototype.auth = function (key, authInstance) {
        // Get?
        if (authInstance === null) {
            if (key === null)
                key = underscore_1.default.first(underscore_1.default.keys(this.auths));
            return this.auths[key];
        }
        // Set
        this.auths[key] = authInstance;
        return this;
    };
    Application.prototype.translations = function (callback) {
        callback.apply(this.i18n, [this.i18n]);
        return this;
    };
    Application.prototype.start = function () {
        var _this = this;
        // Enable momentJS
        moment_1.default.locale(this.settings.get('language'));
        // Add i18n to promises
        this.loadPromises.unshift(this.i18n.load());
        // Do auth initialization
        underscore_1.default.each(this.auths, function (auth) {
            _this.loadPromises.unshift(auth.initialize());
        });
        // When all is done.
        Promise.all(this.loadPromises).then(function () {
            // Find initial view containers
            _this.findViewContainers();
            // Update view containers whenever element contents are set.
            Element_1.default.registerHook(function ($element) {
                // Update view containers
                _this.updateViewContainers($element);
                // Find links
                $element.find('[' + _this.settings.get('elementLinkAttribute') + ']').on('click', function (e) {
                    // Open the uri!
                    e.preventDefault();
                    var uri = jquery_1.default(e.target).attr('href');
                    _this.goto(uri);
                }).each(function (index, el) {
                    // Get uri
                    var $el = jquery_1.default(el);
                    var uri = $el.attr(_this.settings.get('elementLinkAttribute'));
                    if (uri) {
                        // Store in href for easy visilbility, and remove link-to, so it won't be found again by this script
                        $el.removeAttr(_this.settings.get('elementLinkAttribute'));
                        $el.attr('href', uri.toString());
                    }
                });
            });
            // Done!
            _this.resolvePromise('ready');
            // Listen to browser's address bar
            _this.history.listen(function (location) {
                _this.router.handle(location);
            });
            // Start with current location
            _this.router.handle(_this.history.location);
        }, function (error) {
            throw error;
        });
        return this;
    };
    Application.prototype.gotoNamed = function (name, attributes, query, flash, transition) {
        if (attributes === void 0) { attributes = {}; }
        // Find route
        var route = this.router.namedRoutes.get(name);
        if (!route)
            throw new Error('There is no route defined with the name "' + name + '"');
        // Make uri
        var uri = route.makeUrl(attributes);
        return this.goto(uri, query, flash, false, transition);
    };
    Application.prototype.transitionToNamed = function (name, attributes, transition) {
        if (attributes === void 0) { attributes = {}; }
        return this.gotoNamed(name, attributes, undefined, {}, transition);
    };
    Application.prototype.transitionTo = function (uri, transition) {
        return this.goto(uri, undefined, {}, false, transition);
    };
    Application.prototype.goto = function (uri, query, flash, doNotNavigate, transition) {
        if (flash === void 0) { flash = {}; }
        if (doNotNavigate === void 0) { doNotNavigate = false; }
        // Query in the uri?
        var search = query_string_1.default.extract(uri);
        var params = {};
        if (search.length > 0) {
            // Parse objects
            params = query_string_1.default.parse(search);
            // Remove from uri
            uri = uri.substr(0, uri.length - search.length - 1);
        }
        // Check the query
        if (query) {
            // Combine into params
            if (typeof query === 'string') {
                params = jquery_1.default.extend(params, query_string_1.default.parse(query));
            }
            else {
                params = jquery_1.default.extend(params, query);
            }
        }
        // Stringify query
        query = query_string_1.default.stringify(params);
        if (query)
            query = '?' + query;
        // External?		
        if (uri.match(/^(http(s)?\:)?\/\//)) {
            window.location.href = uri + (query || '');
            return this;
        }
        // No navigating? Just add the state to history?
        if (doNotNavigate) {
            // Disable navigation
            this.navigationDisabledOnce = true;
        }
        // Change the history state
        this.history.push({
            pathname: uri,
            search: query,
            state: {
                flash: flash,
                transition: transition
            },
        });
        return this;
    };
    Application.prototype.refresh = function (viewContainerKeys) {
        var _this = this;
        viewContainerKeys = viewContainerKeys || underscore_1.default.keys(this.viewContainers);
        //clear the currentAction of all viewContainer
        underscore_1.default.each(viewContainerKeys, function (viewContainerKey) {
            _this.viewContainers[viewContainerKey].currentAction = undefined;
        });
        // Start with current location
        this.router.handle(this.history.location);
    };
    Application.prototype.getCurrentUri = function () {
        return this.history.location.pathname;
    };
    Application.prototype.config = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Get all?
        if (args.length === 0) {
            return this.settings;
        }
        // Get one?
        else if (args.length === 1) {
            return this.settings.get(args[0]);
        }
        // Set?
        else {
            return this.settings.set(args[0], args[1]);
        }
    };
    Application.prototype.uri = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Add baseUrl (except for cordova app)
        if (!this.settings.get('isCordovaApp')) {
            args.unshift(this.settings.get('baseUrl') === '/' ? '' : this.settings.get('baseUrl'));
        }
        var url = args.join('/');
        // Was the last one an extension?
        if (/^\.[a-z]+$/.test(underscore_1.default.last(args))) {
            // Replace last slash
            url = url.replace(/\/\.[a-z]+$/, underscore_1.default.last(args));
        }
        return url;
    };
    return Application;
}(Observable_1.default));
exports.default = Application;
//# sourceMappingURL=Application.js.map