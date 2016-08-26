(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"), require("_"), require("XRegExp"));
	else if(typeof define === 'function' && define.amd)
		define(["$", "_", "XRegExp"], factory);
	else if(typeof exports === 'object')
		exports["Chicken"] = factory(require("$"), require("_"), require("XRegExp"));
	else
		root["Chicken"] = factory(root["$"], root["_"], root["XRegExp"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _xregexp = __webpack_require__(3);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _Application = __webpack_require__(4);

	var _Application2 = _interopRequireDefault(_Application);

	var _Obj = __webpack_require__(31);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _Observable = __webpack_require__(30);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(41);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _SettingsObject = __webpack_require__(33);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _Element = __webpack_require__(36);

	var _Element2 = _interopRequireDefault(_Element);

	var _Renderer = __webpack_require__(37);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _View = __webpack_require__(48);

	var _View2 = _interopRequireDefault(_View);

	var _ViewContainer = __webpack_require__(35);

	var _ViewContainer2 = _interopRequireDefault(_ViewContainer);

	var _Chainable = __webpack_require__(34);

	var _Chainable2 = _interopRequireDefault(_Chainable);

	var _ClassMap = __webpack_require__(32);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Action = __webpack_require__(46);

	var _Action2 = _interopRequireDefault(_Action);

	var _Controller2 = __webpack_require__(47);

	var _Controller3 = _interopRequireDefault(_Controller2);

	var _Request = __webpack_require__(50);

	var _Request2 = _interopRequireDefault(_Request);

	var _Route = __webpack_require__(44);

	var _Route2 = _interopRequireDefault(_Route);

	var _RouteMatch = __webpack_require__(45);

	var _RouteMatch2 = _interopRequireDefault(_RouteMatch);

	var _Router = __webpack_require__(43);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //////////////////////
	// Vendor libraries //
	//////////////////////

	///////////////////////////////////////
	// Make sure dependencies are loaded //
	///////////////////////////////////////

	if (_jquery2.default === undefined || typeof _jquery2.default !== 'function') throw new Error('Error while initializing Chicken: could not find global jQuery ($). Was jQuery not loaded?');
	if (_underscore2.default === undefined || typeof _underscore2.default !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore (_). Was Underscore not loaded?');
	if (_xregexp2.default === undefined || typeof _xregexp2.default !== 'function') throw new Error('Error while initializing Chicken: could not find global XRegExp. Was XRegExp not loaded?');

	/////////////////////
	// Chicken Classes //
	/////////////////////

	// Core


	// Dom


	// Helpers


	// Routing


	/////////////////////////////
	// Chicken Package exports //
	/////////////////////////////

	var Chicken = {

		////////////////
		// Class tree //
		////////////////

		Application: _Application2.default,

		Core: {
			Obj: _Obj2.default,
			Observable: _Observable2.default,
			ObservableArray: _ObservableArray2.default,
			SettingsObject: _SettingsObject2.default
		},

		Dom: {
			Element: _Element2.default,
			Renderer: _Renderer2.default,
			View: _View2.default,
			ViewContainer: _ViewContainer2.default
		},

		Helpers: {
			Chainable: _Chainable2.default,
			ClassMap: _ClassMap2.default
		},

		Routing: {
			Action: _Action2.default,
			Controller: _Controller3.default,
			Request: _Request2.default,
			Route: _Route2.default,
			RouteMatch: _RouteMatch2.default,
			Router: _Router2.default
		},

		/////////////////
		// Application //
		/////////////////

		application: function application() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			// Arguments given?
			if (args.length > 0) {

				// Create app
				var app = new (Function.prototype.bind.apply(_Application2.default, [null].concat(args)))();

				// Store globally
				Chicken.app = app;

				// Return
				return app;
			} else {
				return _Application2.default.getInstance();
			}
		},

		////////////////////////
		// Easy instantiators //
		////////////////////////

		controller: function controller(name, actions) {

			// Create class
			var ChickenController = function (_Controller) {
				_inherits(ChickenController, _Controller);

				function ChickenController(action) {
					_classCallCheck(this, ChickenController);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(ChickenController).call(this, action));
				}

				return ChickenController;
			}(_Controller3.default);
			_jquery2.default.extend(ChickenController.prototype, actions);

			// Store it
			_Controller3.default.registry.set(name, ChickenController);
		},

		view: function view() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return new (Function.prototype.bind.apply(_View2.default, [null].concat(args)))();
		}

	};

	module.exports = Chicken;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _history = __webpack_require__(5);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable2 = __webpack_require__(30);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _SettingsObject = __webpack_require__(33);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _ViewContainer = __webpack_require__(35);

	var _ViewContainer2 = _interopRequireDefault(_ViewContainer);

	var _Renderer = __webpack_require__(37);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _ClassMap = __webpack_require__(32);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Router = __webpack_require__(43);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //////////////////////
	// Vendor libraries //
	//////////////////////

	/////////////////////
	// Chicken classes //
	/////////////////////

	//////////////////////
	// Class definitino //
	//////////////////////

	var __instance = undefined;

	var Application = function (_Observable) {
		_inherits(Application, _Observable);

		/**
	  * The Application class is 
	  *
	  * @class Application
	  * @extend Core.Observable
	  */
		function Application($app, settings, history) {
			_classCallCheck(this, Application);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Application).call(this));

			// Basics


			__instance = _this;

			////////////////
			// Properties //
			////////////////

			/**
	   * The jQuery element that is the Application
	   * 
	   * @property $app
	   * @type {jQuery}
	   */
			_this.$app = $app ? $app : (0, _jquery2.default)('#application');

			/**
	   * All ViewContainers in the application. This is automatically
	   * kept up to date to contain all and only still existing containers.
	   *
	   * @property viewContainers
	   * @type {Map}
	   */
			_this.viewContainers = new Map();

			/**
	   * @property router
	   * @type {Routing.Router}
	   */
			_this.router = new _Router2.default(_this);

			/**
	   * @property settings
	   * @type {Core.SettingsObject}
	   */
			_this.settings = _SettingsObject2.default.create({
				baseUrl: '/',

				viewPath: 'views',
				viewExtension: 'hbs',

				renderer: settings.renderer === undefined ? new _Renderer2.default() : null

			}, ['baseUrl', 'viewPath', 'viewExtension']).apply(settings);

			/**
	   * @property history
	   * @type {History}
	   */
			_this.history = history ? history : (0, _history.createHistory)();

			return _this;
		}

		_createClass(Application, [{
			key: 'findViewContainers',
			value: function findViewContainers() {
				var _this2 = this;

				var $element = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


				// No element to look in?
				if (!$element) $element = this.$app;

				// Find view containers
				$element.find(_ViewContainer2.default.ElementSelector).each(function (index, el) {

					// Create view container
					var vc = new _ViewContainer2.default((0, _jquery2.default)(el), _this2);

					// Already known?
					if (_this2.viewContainers.has(vc.name)) {
						throw new Error('There is already a view named "' + vc.name + '". It is not possible to have two views with the same name at the same time.');
					}

					// Store it.
					_this2.viewContainers.set(vc.name, vc);

					// Initialize
					vc.initialize();
				});

				return this;
			}
		}, {
			key: 'updateViewContainers',
			value: function updateViewContainers() {
				var $lookForNewOnesIn = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


				// Check if all old ones are still there


				// Look for new ones
				if ($lookForNewOnesIn) this.findViewContainers($lookForNewOnesIn);

				return this;
			}
		}, {
			key: 'getViewContainer',
			value: function getViewContainer(key) {
				return this.viewContainers.get(key);
			}
		}, {
			key: 'routes',
			value: function routes(callback) {

				// Run callback with router
				callback.apply(this.router, []);
				return this;
			}
		}, {
			key: 'start',
			value: function start() {
				var _this3 = this;

				// Find initial view containers
				this.findViewContainers();

				// Listen to browser's address bar
				this.history.listen(function (location) {
					_this3.router.handle(location);
				});

				// Start with current location
				this.router.handle(this.history.getCurrentLocation());
			}
		}, {
			key: 'config',
			value: function config() {

				// Get all?
				if (arguments.length === 0) {
					return this.settings;
				}

				// Get one?
				else if (arguments.length === 1) {
						return this.settings.get(arguments.length <= 0 ? undefined : arguments[0]);
					}

					// Set?
					else {
							return this.settings.set(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
						}
			}
		}, {
			key: 'uri',
			value: function uri() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				// Add baseUrl
				args.unshift(this.settings.get('baseUrl') === '/' ? '' : this.settings.get('baseUrl'));
				var url = args.join('/');

				// Was the last one an extension?
				if (/^\.[a-z]+$/.test(_underscore2.default.last(args))) {

					// Replace last slash
					url = url.replace(/\/\.[a-z]+$/, _underscore2.default.last(args));
				}
				return url;
			}
		}]);

		return Application;
	}(_Observable3.default);

	Application.getInstance = function () {
		return __instance;
	};

	_ClassMap2.default.register('Application', Application);

	module.exports = Application;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locationsAreEqual = exports.Actions = exports.useQueries = exports.useBeforeUnload = exports.useBasename = exports.createMemoryHistory = exports.createHashHistory = exports.createHistory = undefined;

	var _LocationUtils = __webpack_require__(6);

	Object.defineProperty(exports, 'locationsAreEqual', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.locationsAreEqual;
	  }
	});

	var _createBrowserHistory = __webpack_require__(12);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createHashHistory2 = __webpack_require__(21);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	var _createMemoryHistory2 = __webpack_require__(23);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	var _useBasename2 = __webpack_require__(24);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	var _useBeforeUnload2 = __webpack_require__(25);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	var _useQueries2 = __webpack_require__(26);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	var _Actions2 = __webpack_require__(11);

	var _Actions3 = _interopRequireDefault(_Actions2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createHistory = _createBrowserHistory2.default;
	exports.createHashHistory = _createHashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;
	exports.useBasename = _useBasename3.default;
	exports.useBeforeUnload = _useBeforeUnload3.default;
	exports.useQueries = _useQueries3.default;
	exports.Actions = _Actions3.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(9);

	var _Actions = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};

	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};

	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;

	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (typeofA !== typeofB) return false;

	  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

	    if (!Array.isArray(a)) return Object.keys(a).every(function (key) {
	      return statesAreEqual(a[key], b[key]);
	    });

	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }

	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = exports.isAbsolutePath = undefined;

	var _warning = __webpack_require__(10);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isAbsolutePath = exports.isAbsolutePath = function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	};

	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);

	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;


	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};

	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);

	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;


	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};

	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);

	  var search = _parsePath3.search;

	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};

	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;

	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var path = (basename || '') + pathname;

	  if (search && search !== '?') path += search;

	  if (hash) path += hash;

	  return path;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';

	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';

	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(13);

	var _BrowserProtocol = __webpack_require__(14);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(17);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(15);

	var _createHistory = __webpack_require__(18);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;


	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};

	exports.default = createBrowserHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(6);

	var _DOMUtils = __webpack_require__(15);

	var _DOMStateStorage = __webpack_require__(16);

	var _PathUtils = __webpack_require__(9);

	/* eslint-disable no-alert */


	var PopStateEvent = 'popstate';

	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;

	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/mjackson/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	};

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);
	  };
	};

	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;


	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};

	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(10);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR']; /* eslint-disable no-empty */


	var SecurityError = 'SecurityError';
	var KeyPrefix = '@@History/';

	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};

	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;
	    return;
	  }

	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

	      return;
	    }

	    throw error;
	  }
	};

	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

	      return undefined;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return undefined;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(14);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _LocationUtils = __webpack_require__(6);

	var _PathUtils = __webpack_require__(9);

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AsyncUtils = __webpack_require__(19);

	var _PathUtils = __webpack_require__(9);

	var _runTransitionHook = __webpack_require__(20);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(11);

	var _LocationUtils = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;


	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];

	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

	    if (currentLocation) return allKeys.indexOf(currentLocation.key);

	    return -1;
	  };

	  var updateLocation = function updateLocation(nextLocation) {
	    currentLocation = nextLocation;

	    var currentIndex = getCurrentIndex();

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(_toConsumableArray(allKeys.slice(0, currentIndex + 1)), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }

	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };

	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);

	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var listen = function listen(listener) {
	    listeners.push(listener);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };

	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

	      pendingLocation = null;

	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);

	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };

	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };

	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };

	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };

	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };

	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};

	exports.default = createHistory;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    isDone = true;

	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }

	    callback.apply(undefined, args);
	  };

	  var next = function next() {
	    if (isDone) return;

	    hasNext = true;

	    if (isSync) return; // Iterate instead of recursing if possible.

	    isSync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }

	    isSync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, _toConsumableArray(doneArgs));
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };

	  next();
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _warning = __webpack_require__(10);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};

	exports.default = runTransitionHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(10);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(13);

	var _DOMUtils = __webpack_require__(15);

	var _HashProtocol = __webpack_require__(22);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(18);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey;


	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, queryKey);
	  };

	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, queryKey);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var go = function go(n) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

	    history.go(n);
	  };

	  var createHref = function createHref(path) {
	    return '#' + history.createHref(path);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(14);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _warning = __webpack_require__(10);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(6);

	var _DOMUtils = __webpack_require__(15);

	var _DOMStateStorage = __webpack_require__(16);

	var _PathUtils = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.substring(index + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var i = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
	};

	var ensureSlash = function ensureSlash() {
	  var path = getHashPath();

	  if ((0, _PathUtils.isAbsolutePath)(path)) return true;

	  replaceHashPath('/' + path);

	  return false;
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(queryKey) {
	  var path = getHashPath();
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }

	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;

	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};

	var prevLocation = void 0;

	var startListener = exports.startListener = function startListener(listener, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    if (!ensureSlash()) return; // Hash path must always begin with a /

	    var currentLocation = getCurrentLocation(queryKey);

	    if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	    prevLocation = currentLocation;

	    listener(currentLocation);
	  };

	  ensureSlash();
	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;

	  var path = (0, _PathUtils.createPath)(location);

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, queryKey) {
	  return updateLocation(location, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, queryKey) {
	  return updateLocation(location, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(10);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(6);

	var _PathUtils = __webpack_require__(9);

	var _createHistory = __webpack_require__(18);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};

	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);

	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }

	    var init = (0, _PathUtils.parsePath)(path);

	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };

	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };

	  var go = function go(n) {
	    if (!n) return;

	    if (!canGo(n)) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

	      return;
	    }

	    current += n;
	    var currentLocation = getCurrentLocation();

	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };

	  var pushLocation = function pushLocation(location) {
	    current += 1;

	    if (current < entries.length) entries.splice(current);

	    entries.push(location);

	    saveState(location.key, location.state);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };

	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;


	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }

	  var storage = createStateStorage(entries);

	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };

	  var readState = function readState(key) {
	    return storage[key];
	  };

	  return history;
	};

	exports.default = createMemoryHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(20);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var basename = options.basename;


	    var addBasename = function addBasename(location) {
	      if (!location) return location;

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    };

	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    };

	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };

	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };

	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useBasename;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _DOMUtils = __webpack_require__(15);

	var _ExecutionEnvironment = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var startListener = function startListener(getPromptMessage) {
	  var handleBeforeUnload = function handleBeforeUnload(event) {
	    var message = getPromptMessage();

	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }

	    return undefined;
	  };

	  (0, _DOMUtils.addEventListener)(window, 'beforeunload', handleBeforeUnload);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, 'beforeunload', handleBeforeUnload);
	  };
	};

	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	var useBeforeUnload = function useBeforeUnload(createHistory) {
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'useBeforeUnload only works in DOM environments') : (0, _invariant2.default)(false) : void 0;

	  return function (options) {
	    var history = createHistory(options);

	    var listeners = [];
	    var stopListener = void 0;

	    var getPromptMessage = function getPromptMessage() {
	      var message = void 0;
	      for (var i = 0, len = listeners.length; message == null && i < len; ++i) {
	        message = listeners[i].call();
	      }return message;
	    };

	    var listenBeforeUnload = function listenBeforeUnload(listener) {
	      if (listeners.push(listener) === 1) stopListener = startListener(getPromptMessage);

	      return function () {
	        listeners = listeners.filter(function (item) {
	          return item !== listener;
	        });

	        if (listeners.length === 0 && stopListener) {
	          stopListener();
	          stopListener = null;
	        }
	      };
	    };

	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload
	    });
	  };
	};

	exports.default = useBeforeUnload;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(27);

	var _runTransitionHook = __webpack_require__(20);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(6);

	var _PathUtils = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};

	var defaultParseQueryString = _queryString.parse;

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;


	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;

	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    };

	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';

	      return _extends({}, object, {
	        search: search
	      });
	    };

	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };

	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };

	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

	      return decodeQuery(newLocation);
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useQueries;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(28);
	var objectAssign = __webpack_require__(29);

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});

		return ret;
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};

		opts = objectAssign(defaults, opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(31);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _ClassMap = __webpack_require__(32);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Core
	 */
	var Observable = function (_Obj) {
		_inherits(Observable, _Obj);

		/**
	  * The basic object class that notifies **observers** and **students** about 
	  * changes in its attributes. 
	  *
	  * ## Observers
	  * An observer is an object (in actuality a callback) that watches for changes on 
	  * a certain attribute or it's child attributes, in case of nested Observables. 
	  * An observer can {{#crossLink "Core.Observable/disregard"}}{{/crossLink}} the attribute to stop watching.
	  *
	  * 	// Initialize object and watch for changes
	  * 	var obj = new Chicken.Core.Observable();
	  * 	obj.set('foo', 'bar');
	  * 	var callback = () => {
	  * 		alert('Changed: ' + obj.get('foo'));
	  * 	};
	  * 	obj.observe('foo', callback);
	  * 	
	  * 	// Change
	  * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
	  * 	
	  * 	// Stop watching
	  * 	obj.disregard('foo', callback);
	  * 	obj.set('foo', 'back-to-bar'); // Will not alert anthing
	  *
	  * ## Students
	  * A student is an object (in actuality a callback) that watches for changes in
	  * **any attribute** or any **child attribute**, in case of nested Observables.
	  * An observer can **neglect** their study to stop wachting.
	  *
	  * 	// Initialize object
	  * 	var obj = new Chicken.Core.Observable();
	  * 	obj.set('foo', 'bar');
	  * 	var childObj = new Chicken.Core.Observable();
	  * 	childObj.set('free', 'willy');
	  * 	obj.set('child', childObj);
	  *
	  * 	// Listen
	  * 	var callback = (changedAttributes) {
	  * 		console.log(changedAttributes);
	  * 	};
	  * 	obj.study(callback);
	  *
	  * 	// Update attributes
	  *	obj.set('foo', 'boo');                  // Will log ['foo']
	  *	obj.get('child').set('free', 'tibet');  // Will log ['child']
	  * 	childObj.set('foo', 'bee');             // Will log ['child']
	  *
	  * 	// Neglect my study
	  * 	obj.neglect(callback);
	  * 	obj.set('foo', 'back to bar');          // Will not log anything
	  *
	  * @class Core.Observable
	  * @extends Core.Object
	  *
	  * @constructor
	  * @param  {Object}  [initValues={}]       			 A hash of key-value pairs to initialize the object with
	  * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
	  **/
		function Observable() {
			var initValues = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			var convertToObservables = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

			_classCallCheck(this, Observable);

			////////////////
			// Properties //
			////////////////

			/**
	   * @property observers
	   * @type {Map}
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Observable).call(this));

			// Basics


			_this.observers = new Map();

			/**
	   * @attribute attributes
	   * @type {object}
	   */
			_this.attributes = {};

			////////////////////
			// Initialization //
			////////////////////

			// Initialize values
			_this.import(initValues, convertToObservables, true);

			return _this;
		}

		////////////////////
		// Public methods //
		////////////////////

		/**
	  * Check if attribute is defined
	  *
	  * @method has
	  * @param  {string}  key The name of the key to check
	  * @return {Boolean}     True when the attribute has been defined
	  */


		_createClass(Observable, [{
			key: 'has',
			value: function has(key) {

				// Split
				var parts = Number.isInteger(key) ? [key] : key.split(/\./);
				var currentPart = parts.shift();

				// No deep shit?
				if (parts.length === 0) return this.attributes[currentPart] !== undefined;

				// Look deeper
				var value = this.attributes[currentPart];

				// No value
				if (value === undefined) {
					return false;
				}

				// Check if the value is also an observable
				if (Observable.isObservable(value)) {

					// Pass the rest along to go a level deeper
					return value.has(parts.join('.'));
				} else {

					return false;
				}
			}

			/**
	   * Get attribute from object
	   *
	   * @method get
	   * @param  {string} key The name of the key to retrieve the value of. You can use dot-notation to use deep-getting
	   * @return The value or undefined when the key is not set
	   */

		}, {
			key: 'get',
			value: function get(key) {

				// Split
				var parts = Number.isInteger(key) ? [key] : key.split(/\./);
				var currentPart = parts.shift();

				// Get value
				var value = this.attributes[currentPart];

				// Value found?
				if (value === undefined || parts.length === 0) {
					return value;
				}

				// Check if the value is also an observable
				if (Observable.isObservable(value)) {

					// Pass the rest along to go a level deeper
					return value.get(parts.join('.'));
				} else {

					throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
				}
			}

			/**
	   * Set attribute on object. When you set a attribute on Observable, all
	   * *observers* and *students* will be notified of the change.
	   *
	   * @method set
	   * @param {string/array} key   	The name of the key to store the value of. You can use dot-notation to use deep-setting
	   * @param {mixed} value 		The value to store
	   * @param {boolean} [convertToObservables=false]
	   *        						Whether to convert standard object values into Observable instances
	   * @param {boolean} [doNotNotify=false]
	   *        						Whether to skip notifying listeners
	   * @chainable
	   */

		}, {
			key: 'set',
			value: function set(key, value) {
				var _this2 = this;

				var convertToObservables = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
				var doNotNotify = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];


				// Convert?
				if (convertToObservables === true && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
					if (value.constructor === Object) {
						value = new Observable(value);
					} else if (Array.isArray(value)) {
						value = _ClassMap2.default.create('ObservableArray', [value]);
					}
				}

				// Is there a dot in there?
				if (typeof key === 'string' && key.match(/\.[\w]/)) {
					var _ret = function () {

						////////////////////////
						// Split and deep set //
						////////////////////////

						var parts = key.split(/\./);
						var currentPart = parts.shift();

						// Does the first key not exist?
						if (_this2.attributes[currentPart] === undefined) {

							// Should it be an array?
							var newValue = void 0;
							if (Number.isInteger(parts[0]) || typeof parts[0] === 'string' && parts[0].match(/^\d+$/)) {

								// Create list (using classmap to prevent circular dependencies)
								newValue = _ClassMap2.default.create('ObservableArray');
							} else {

								// Create it
								newValue = new Observable();
							}

							// Study it
							newValue.study(function () {
								_this2._triggerAttributeChanged(currentPart);
							});

							// Store it
							_this2.attributes[currentPart] = newValue;
						}

						// Do deep setting
						_this2.get(currentPart).set(parts.join('.'), value);

						return {
							v: _this2
						};
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}

				// Store the value
				this.attributes[key] = value;

				// Is the value observable?
				if (Observable.isObservable(value)) {

					// Study the object
					value.study(function () {
						_this2._triggerAttributeChanged(key);
					});
				}

				// Update attribute
				if (!doNotNotify) this._triggerAttributeChanged(key, value);

				return this;
			}
		}, {
			key: 'import',
			value: function _import(obj) {
				var _this3 = this;

				var convertToObservables = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
				var doNotNotify = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Go through to the object's first level
				_underscore2.default.each(obj, function (value, key) {

					// Is the value an array or object?
					if ((Array.isArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && value.constructor === Object) && convertToObservables === true) {

						// Do I have this value?
						if (_this3.attributes.has(key) && Observable.isObservable(_this3.attributes.get(key))) {

							// Import
							var obj = _this3.attributes.get(key);
							obj.import(value, convertToObservables, doNotNotify);
						} else {

							// Array or object?
							if (Array.isArray(value)) {

								// Put a new observable array in there
								_this3.attributes.set(key, _ClassMap2.default.create('ObservableArray', [value]));
							} else {

								// Put a new observable in there
								_this3.attributes.set(key, new Observable(value));
							}
						}
					} else {

						// Just set the value (don't notify)
						_this3.set(key, value, convertToObservables, true);
					}
				});

				// Notify!
				this.trigger(Observable.Events.Import);

				return this;
			}

			/**
	   * Listen for any changes in any of the object's attributes. 
	   * The callback will receive an array containing the names of
	   * all updates attributes. 
	   *
	   * Note: This is an alias of the 'change' event, so calling
	   * ```this.on('change', callback)``` will achieve the same result.
	   *
	   * @example
	   * 	// Initialize object
	   * 	var obj = new Chicken.Core.Observable();
	   * 	obj.set('foo', 'bar');
	   * 	var childObj = new Chicken.Core.Observable();
	   * 	childObj.set('free', 'willy');
	   * 	obj.set('child', childObj);
	   *
	   * 	// Listen
	   * 	obj.study((changedAttributes) {
	   * 		console.log(changedAttributes);
	   * 	});
	   *
	   * 	// Update attributes
	   *	obj.set('foo', 'boo');                  // Will log ['foo']
	   *	obj.get('child').set('free', 'tibet');  // Will log ['child']
	   * 	childObj.set('foo', 'bee');             // Will log ['child']
	   *
	   * @method study
	   * @param  {Function} callback
	   * @chainable
	   */

		}, {
			key: 'study',
			value: function study(callback) {

				// This is an alias of the 'change' event
				return this.on(Observable.Events.Change, callback);
			}

			/**
	   * Stop listening for changes on the object's attributes.
	   *
	   * Note: This is an alias of the 'change' event, so calling
	   * ```this.off('change', callback)``` will achieve the same result.
	   *
	   * @example
	   * 
	   * 
	   * @method neglect
	   * @param  {Function} callback 
	   * @chainable
	   */

		}, {
			key: 'neglect',
			value: function neglect(callback) {

				// This is an alias of the 'change' event
				return this.off(Observable.Events.Change, callback);
			}

			/**
	   * Observe the attribute with given key, so that callback is called
	   * whenever the attribute or it's child attributes change.
	   *
	   * 	// Initialize object and watch for changes
	   * 	var obj = new Chicken.Core.Observable();
	   * 	obj.set('foo', 'bar');
	   * 	var callback = () => {
	   * 		alert('Changed: ' + obj.get('foo'));
	   * 	};
	   * 	obj.observe('foo', callback);
	   * 	
	   * 	// Change
	   * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
	   * 	
	   * @method observe
	   * @param  {string}   key      The name of the attribute to observe
	   * @param  {Function} callback 
	   * @chainable
	   */

		}, {
			key: 'observe',
			value: function observe(key, callback) {

				// Get the set
				if (!this.observers.has(key)) {
					this.observers.set(key, new Set());
				}
				var observers = this.observers.get(key);

				// Add callback
				observers.add(callback);

				return this;
			}

			/**
	   * Stop observing the attribute with given key, or any of it's
	   * child attributes.
	   *
	   * @method disregard
	   * @param  {string}   key      The name of the attribute to disregard
	   * @param  {Function} callback 
	   * @chainable
	   */

		}, {
			key: 'disregard',
			value: function disregard(key, callback) {

				// Get the observers
				var observers = this.observers.get(key);
				if (observers === undefined) return this;

				// Remove callback
				observers.delete(callback);

				return this;
			}
		}, {
			key: 'toObject',
			value: function toObject() {

				var obj = {};
				_underscore2.default.each(this.attributes, function (item, key) {

					// Observable?
					if (Observable.isObservable(item)) {

						// Array?
						if (item instanceof Observable) {
							item = item.toObject();
						} else {
							item = item.toArray();
						}
					}

					obj[key] = item;
				});

				return obj;
			}
		}, {
			key: 'clone',
			value: function clone() {
				var convertToObservables = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];


				// Make copy!
				var c = this.constructor;
				var copy = new c(this.toObject(), convertToObservables);
				return copy;
			}

			/////////////////////
			// Private methods //
			/////////////////////

		}, {
			key: '_triggerAttributeChanged',
			value: function _triggerAttributeChanged(key, value) {
				var _this4 = this;

				var calledFromObjectChanged = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Listeners?
				var observers = this.observers.get(key);
				if (observers !== undefined) {

					// Call them
					observers.forEach(function (observer) {
						observer.apply(_this4);
					});
				}

				// Trigger object change?
				if (calledFromObjectChanged === false) {
					this._triggerObjectChanged([key], true);
				}
			}
		}, {
			key: '_triggerObjectChanged',
			value: function _triggerObjectChanged(changedAttributes) {
				var _this5 = this;

				var calledFromAttributeChanged = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];


				// Trigger change event
				this.trigger(Observable.Events.Change, changedAttributes);

				// Called from attribute?
				if (calledFromAttributeChanged === false) {

					// Call individual attributes
					changedAttributes.forEach(function (value, key) {
						_this5._triggerAttributeChanged(key, value, true);
					});
				}
			}
		}, {
			key: 'isObservable',
			value: function isObservable() {
				return true;
			}
		}]);

		return Observable;
	}(_Obj3.default);

	////////////
	// Events //
	////////////

	Observable.Events = {

		/**
	  * This event is fired whenever anything changes in the array
	  * of one of its observable items.
	  * 
	  * @event change
	  */
		Change: 'change',

		/**
	  * This event is fired whenever an import is completed
	  *
	  * @event import
	  */
		Import: 'import'

	};

	Observable.isObservable = function (obj) {

		return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && typeof obj.isObservable === 'function' && obj.isObservable() === true;
	};

	_ClassMap2.default.register('Observable', Observable);

	module.exports = Observable;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var promiseCount = 0;

	/**
	 * @module Core
	 */

	var Obj = function () {

		/**
	  * Basic object that can trigger events
	  *
	  * @class Core.Obj
	  * @constructor
	  */
		function Obj() {
			_classCallCheck(this, Obj);

			// Init values
			this._listeners = new Map();
			this._promises = new Map();
		}

		////////////////////
		// Public methods //
		////////////////////

		_createClass(Obj, [{
			key: 'promise',
			value: function promise(key, callback) {

				// Do the callback
				var promise = this._getPromiseInfo(key);
				callback.apply(null, [promise.resolve, promise.reject]);
				return promise.promise;
			}
		}, {
			key: 'resolvePromise',
			value: function resolvePromise(key) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				this._getPromiseInfo(key).resolve.apply(this, args);
				return this;
			}
		}, {
			key: 'getPromise',
			value: function getPromise(key) {
				return this._getPromiseInfo(key).promise;
			}
		}, {
			key: '_getPromiseInfo',
			value: function _getPromiseInfo(key) {

				// Was the promise already defined
				if (!this._promises.has(key)) {

					// Store it
					var p = {};
					p.promise = new Promise(function (resolve, reject) {
						p.resolve = resolve;
						p.reject = reject;
						p.id = promiseCount++;
					});
					this._promises.set(key, p);
				}
				return this._promises.get(key);
			}
		}, {
			key: 'when',
			value: function when() {
				var _this = this;

				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				// The last one should be a callback
				var successCallback = args.pop();
				var failCallback = function failCallback(error) {
					throw new Error('Uncaught promise failure for ' + args.join(', ') + ': ' + error);
				};
				if (args.length > 1 && typeof _underscore2.default.last(args) === 'function') {
					failCallback = successCallback;
					successCallback = args.pop();
				}

				// Collect promises
				var promises = [];
				_underscore2.default.each(args, function (arg) {
					promises.push(_this._getPromiseInfo(arg).promise);
				});

				// One?
				if (promises.length === 1) {

					// Simple.
					promises[0].then(successCallback, failCallback);
				} else {

					// When all are done
					Promise.all(promises).then(successCallback, failCallback);
				}

				return this;
			}

			/**
	   * Add listener for chosen event
	   *
	   * @method on
	   * @param  {string}   eventName The event name to listen for.
	   * @param  {Function} callback  The function to call when the event occurs. Depending on the event, this 
	   *                              callback can receive 0 or more arguments when called.
	   * @example
	   * 		obj.on('message', function(message) {
	   * 			console.log(message);
	   * 		});
	   * @chainable
	   */

		}, {
			key: 'on',
			value: function on(eventName, callback) {

				// Get the set
				if (!this._listeners.has(eventName)) {
					this._listeners.set(eventName, new Set());
				}
				var events = this._listeners.get(eventName);

				// Add callback
				events.add(callback);

				// Chain
				return this;
			}

			/**
	   * Remove a previously added listener for chosen event
	   *
	   * @method off
	   * @param  {string}   eventName The event name to remove listener for
	   * @param  {Function} callback  The previously added callback to remove from listeners
	   * @chainable
	   */

		}, {
			key: 'off',
			value: function off(eventName, callback) {

				// Get the callbacks
				var callbacks = this._listeners.get(eventName);
				if (callbacks === undefined) return this;

				// Remove callback
				callbacks.delete(callback);

				return this;
			}

			/**
	   * Trigger calling of all registered callbacks for given event
	   * with given arguments.
	   *
	   * @method trigger
	   * @param  {string}    eventName The event name to trigger callbacks for
	   * @param  {...mixed}  args      Zero or more arguments to pass along to each callback
	   * @chainable
	   */

		}, {
			key: 'trigger',
			value: function trigger(eventName) {
				var _this2 = this;

				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}

				// Get the callbacks
				var callbacks = this._listeners.get(eventName);
				if (callbacks === undefined) return this;

				// Loop and call
				callbacks.forEach(function (cb) {
					cb.apply(_this2, args);
				});

				return this;
			}

			/////////////////////
			// Private methods //
			/////////////////////


		}]);

		return Obj;
	}();

	module.exports = Obj;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * @module Helpers
	 */

	var ClassMap = {

		classes: new Map(),

		get: function get(className) {
			return this.classes.get(className);
		},
		register: function register(className, c) {
			this.classes.set(className, c);
			return this;
		},
		create: function create(className) {
			var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

			var c = this.get(className);
			if (c === undefined) throw new Error('The ' + className + ' class is not registered in the ClassMap');
			return new (Function.prototype.bind.apply(c, [null].concat(_toConsumableArray(args))))();
		}
	};

	module.exports = ClassMap;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable2 = __webpack_require__(30);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Chainable = __webpack_require__(34);

	var _Chainable2 = _interopRequireDefault(_Chainable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Core
	 */
	var SettingsObject = function (_Observable) {
		_inherits(SettingsObject, _Observable);

		/**
	  * @class Core.SettingsObject
	  * @extends Core.Observable
	  *
	  * @constructor
	  * @param {object}  defaultSettings  	Initialize with these default settings
	  * @param {array}   [allowedKeys] 		Optional array of allowed keys. By default all keys are allowed	 
	  */
		function SettingsObject() {
			var defaultSettings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			var allowedKeys = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

			_classCallCheck(this, SettingsObject);

			/**
	   * @property allowedKeys
	   * @type Array
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsObject).call(this, defaultSettings));

			// Instantiate with default settings


			_this.allowedKeys = allowedKeys;

			return _this;
		}

		/**
	  * Apply given settings
	  *
	  * @method apply
	  * @param {object} 	settings	A hash-object with keys and values
	  * @chainable
	  */


		_createClass(SettingsObject, [{
			key: 'apply',
			value: function apply(settings) {
				var _this2 = this;

				// Apply each key individually
				_underscore2.default.each(settings, function (value, key) {
					_this2.set(key, value);
				});

				return this;
			}

			// Extra check for allowedKeys.

		}, {
			key: 'set',
			value: function set(key, value) {

				// Is it allowed?
				if (this.allowedKeys && this.allowedKeys.length > 0 && !this.allowedKeys.includes(key)) {
					throw new Error('This SettingsObject does not have a setting for "' + key + '". The allowed settings are: ' + this.allowedKeys.join(', '));
				}

				// Do it.
				return _get(Object.getPrototypeOf(SettingsObject.prototype), 'set', this).call(this, key, value);
			}
		}]);

		return SettingsObject;
	}(_Observable3.default);

	module.exports = (0, _Chainable2.default)(SettingsObject);

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (cls) {

		cls.create = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return new (Function.prototype.bind.apply(cls, [null].concat(args)))();
		};

		return cls;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Element2 = __webpack_require__(36);

	var _Element3 = _interopRequireDefault(_Element2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Dom
	 */
	var ViewContainer = function (_Element) {
		_inherits(ViewContainer, _Element);

		/**
	  * A ViewContainer is en DomElement in your application that
	  * can contain a rendered View. Each ViewContainer needs a 
	  * unique name, and the main ViewContainer for the application
	  * is always called 'main'.
	  * 
	  * @class Dom.ViewContainer 
	  * @extends Core.Object
	  *
	  * @constructor
	  * @param {jQuery} $element
	  * @param {Application} application
	  */
		function ViewContainer($element, application) {
			_classCallCheck(this, ViewContainer);

			// Private props
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ViewContainer).call(this, $element, application));

			_this._isLoading = false;

			////////////////
			// Properties //
			////////////////

			/**
	   * The unique name you can use in your routes to target this
	   * ViewContainer.
	   * 
	   * @property name
	   * @type {string}
	   */
			_this.name = ViewContainer.getViewName($element);

			/**
	   * The Routing.Action that rendered the content that is currently
	   * in this ViewContainer
	   * 
	   * @property currentAction
	   * @type {Routing.Action}
	   */
			_this.currentAction = null;

			_this.currentView = null;

			return _this;
		}

		/**
	  * Initialize the ViewContainer. 
	  *
	  * @method initialize
	  * @chainable
	  */


		_createClass(ViewContainer, [{
			key: 'initialize',
			value: function initialize() {
				this.$element.addClass(ViewContainer.Classes.Initialized);
				return this;
			}

			/**
	   * @method setActionContent
	   * @param {string} 				content 			The (HTML) content to render
	   * @param {boolean}				setLoadingFalse		Whether to set the loading-state to false
	   * @chainable
	   */

		}, {
			key: 'setContent',
			value: function setContent(content) {
				var setLoadingFalse = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];


				// Set HTML
				_get(Object.getPrototypeOf(ViewContainer.prototype), 'setContent', this).call(this, content);

				// No longer loading
				if (setLoadingFalse) this.setLoading(false);

				return this;
			}
		}, {
			key: 'setView',
			value: function setView(view) {

				this.currentView = view;
				return this;
			}
		}, {
			key: 'setAction',
			value: function setAction(action) {
				this.currentAction = action;
				return this;
			}
		}, {
			key: 'setLoading',
			value: function setLoading() {
				var loading = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

				this._isLoading = loading;
				this.$element.toggleClass(ViewContainer.Classes.Loading, loading);
				return this;
			}
		}, {
			key: 'isLoading',
			value: function isLoading() {
				return this._isLoading;
			}
		}]);

		return ViewContainer;
	}(_Element3.default);

	ViewContainer.Classes = {
		Initialized: 'initialized',
		Loading: 'loading'
	};
	ViewContainer.ElementSelector = 'view-container:not(.initialized),[view-container]:not(.initialized)';
	ViewContainer.DefaultName = 'main';

	ViewContainer.getViewName = function ($element) {

		// Get it either from the name-attr or view-attr
		var name = $element.is('view-container') ? $element.attr('name') : $element.attr('view-container');

		// No?
		if (!name) name = ViewContainer.DefaultName;

		return name;
	};

	module.exports = ViewContainer;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Obj2 = __webpack_require__(31);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Application = __webpack_require__(4);

	var _Application2 = _interopRequireDefault(_Application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Dom
	 */
	var Element = function (_Obj) {
		_inherits(Element, _Obj);

		/**
	  * @class Dom.Element
	  * @extends Core.Obj
	  *
	  * @constructor
	  * @param {jQuery} $element
	  * @param {Application} [application]
	  */
		function Element($element) {
			var application = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			_classCallCheck(this, Element);

			/**
	   * @property application
	   * @type {Application}
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Element).call(this));

			_this.application = application ? application : _Application2.default.getInstance();

			/**
	   * The jQuery element that is the ViewContainer
	   * 
	   * @property $element
	   * @type {jQuery}
	   */
			_this.$element = $element;

			return _this;
		}

		_createClass(Element, [{
			key: 'setContent',
			value: function setContent(content) {

				// Set it
				this.$element.html(content);
				this.trigger('content', content);

				// Update view containers
				this.application.updateViewContainers(this.$element);
			}
		}]);

		return Element;
	}(_Obj3.default);

	module.exports = Element;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _htmlbarsStandalone = __webpack_require__(38);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _Utils = __webpack_require__(40);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _Observable = __webpack_require__(30);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(41);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Binding = __webpack_require__(42);

	var _Binding2 = _interopRequireDefault(_Binding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Dom
	 */
	var Renderer = function () {

		/**
	  * @class Dom.Renderer
	  * 
	  * @constructor
	  */
		function Renderer() {
			var _this = this;

			_classCallCheck(this, Renderer);

			/**
	   * @property dom
	   * @type {HTMLBars.DOMHelper}
	   */
			this.dom = new _htmlbarsStandalone2.default.DOMHelper();

			/**
	   * Hooks are the way to configure the way HTMLBars renders your
	   * templates. Renderer comes pre-configured with hooks that allow you
	   * to bind to Observables (models) and ObservableArrays (collections).
	   * 
	   * @property hooks
	   * @type {object}
	   */
			this.hooks = _underscore2.default.defaults({

				/**
	    * The `get` hook is responsible for retrieving Bindings from the data store.
	    * 
	    * @method hooks.get
	    * @param  {Renderer} 	renderer   	The Renderer instance (this)
	    * @param  {Scope} 		scope 		The Scope in which the `get` was called, 
	    *                           		containing the data that is available in this Scope
	    * @param  {string} 	path 		The path (key) of the variable to retrieve 		
	    * @return {mixed}     	The retrieved value
	    */
				get: function get(renderer, scope, path) {

					// Get first part
					var keys = path.split(/\./);

					// Look into local data
					var appliedScope = scope.self;
					if (scope.localPresent[keys[0]]) {
						appliedScope = scope.locals[keys[0]];
						keys.shift();
						path = keys.join('.');
					}

					// No path? Return the whole data
					if (path === '') return appliedScope;

					// Is data an observable?
					if (appliedScope instanceof _Observable2.default) {

						// Create a binding
						var binding = new _Binding2.default(_this, appliedScope, path);

						// Get the value
						return binding;
					} else {

						// Do native thing (deep-get)
						var value = _this.hooks.getRoot(scope, keys[0])[0];
						for (var i = 1; i < keys.length; i++) {
							if (value) {
								value = _this.hooks.getChild(value, keys[i]);
							} else {
								break;
							}
						};
					}

					return value;
				},

				/**
	    * Get value from reference (Binding)
	    *
	    * @method hooks.getValue
	    * @param  {Binding} reference 
	    * @return {mixed}           
	    */
				getValue: function getValue(reference) {
					return reference instanceof _Binding2.default ? reference.getValue() : reference;
				},

				/**
	    * Link a morph to one or more values (in our case Bindings)
	    *
	    * @method hooks.linksRenderNode
	    * @param  {HTMLBarsMorph} morph    
	    * @param  {Dom.Renderer} renderer 
	    * @param  {Scope} scope    
	    * @param  {string} type   				This is originally called 'params'. Values can be `@range`, `@attribute`
	    * @param  {array} values     			Array of values that have been linked to the morph. The should be Binding instances
	    * @return {[type]}          [description]
	    */
				linkRenderNode: function linkRenderNode(morph, renderer, scope, type, values) {

					// Add this morph to all involved bindings
					_underscore2.default.each(values, function (binding) {
						if (binding instanceof _Binding2.default) binding.addMorph(morph);
					});
				},

				/**
	    * This hook applies a value to an attribute
	    *
	    * @method hooks.attribute
	    * @param  {HTMLBarsMorph} 	morph        
	    * @param  {Dom.Renderer} 	renderer  
	    * @param  {Scope} 			scope
	    * @param  {string} 		attributeName 
	    * @param  {mixed} 			value 			This should be a Binding instance
	    */
				attribute: function attribute(morph, renderer, scope, attributeName, value) {
					_this.applyValue(morph, value);
				},

				/**
	    * This hook applies a value to a 'range', which is a piece of text within
	    * an element.
	    *
	    * @method hooks.range
	    * @param  {HTMLBarsMorph} 	morph        
	    * @param  {Dom.Renderer} 	renderer  
	    * @param  {Scope} 			scope
	    * @param  {string} 		path 
	    * @param  {mixed} 			value 			This should be a Binding instance
	    * @param  {??} 			visitor  
	    */
				range: function range(morph, renderer, scope, path, value, visitor) {

					// What does this do exactly? Prevent recursion?
					if (_htmlbarsStandalone2.default.Runtime.Hooks.Helpers.handleRedirect(morph, renderer, scope, path, [], {}, null, null, visitor)) {
						return;
					}

					// Apply
					_this.applyValue(morph, value);
				}

			}, _htmlbarsStandalone2.default.Runtime.Hooks.Default);

			/**
	   * @property helpers
	   * @type {Object}
	   */
			this.helpers = {

				each: function each(params, hash, blocks) {

					// Get the value
					var list = params[0] instanceof _Binding2.default ? params[0].getValue() : params[0];
					var keyPath = hash.key;
					_Utils2.default.each(list, function (item, i) {
						blocks.template.yieldItem('item' + i, [item, i]);
					});
				},

				if: function _if(params, hash, blocks) {

					// Is the param truth-like?
					if (_Utils2.default.isTruthlike(params[0])) {
						if (blocks.template.yield) {
							blocks.template.yield();
						} else {
							return params[1];
						}
					} else {
						if (options.inverse.yield) {
							options.inverse.yield();
						} else {
							return params[2];
						}
					}
				}

			},

			/**
	   * @property partials
	   * @type {Object}
	   */
			this.partials = {};

			/**
	   * @property useFragmentCache
	   * @default true
	   * @type {Boolean}
	   */
			this.useFragmentCache = true;
		}

		_createClass(Renderer, [{
			key: 'applyValue',
			value: function applyValue(morph, value) {

				// Is it a Binding
				if (value instanceof _Binding2.default) {

					// Apply it
					value.applyValue(morph);
				} else {

					// Just set the value
					var value = this.hooks.getValue(value);
					if (morph.lastValue !== value) morph.setContent(value);
					morph.lastValue = value;
				}
			}
		}]);

		return Renderer;
	}();

	module.exports = Renderer;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof2(exports))==='object'&&( false?'undefined':_typeof2(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object')exports["HTMLBars"]=factory();else root["HTMLBars"]=factory();})(undefined,function(){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.loaded=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';var _compiler=__webpack_require__(1);var _hooks=__webpack_require__(48);var _hooks2=_interopRequireDefault(_hooks);var _domHelper=__webpack_require__(51);var _domHelper2=_interopRequireDefault(_domHelper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}module.exports={DOMHelper:_domHelper2.default,Compiler:{compile:_compiler.compile,template:_compiler.template},Runtime:{Hooks:{Default:_hooks2.default,Helpers:{handleRedirect:_hooks.handleRedirect}}}};/***/},/* 1 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.compileSpec=compileSpec;exports.template=template;exports.compile=compile;var _parser=__webpack_require__(2);var _templateCompiler=__webpack_require__(27);var _templateCompiler2=_interopRequireDefault(_templateCompiler);var _hooks=__webpack_require__(48);var _render=__webpack_require__(42);var _render2=_interopRequireDefault(_render);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
		 * Compile a string into a template spec string. The template spec is a string
		 * representation of a template. Usually, you would use compileSpec for
		 * pre-compilation of a template on the server.
		 *
		 * Example usage:
		 *
		 *     var templateSpec = compileSpec("Howdy {{name}}");
		 *     // This next step is basically what plain compile does
		 *     var template = new Function("return " + templateSpec)();
		 *
		 * @method compileSpec
		 * @param {String} string An HTMLBars template string
		 * @return {TemplateSpec} A template spec string
		 *//*jshint evil:true*/function compileSpec(string,options){var ast=(0,_parser.preprocess)(string,options);var compiler=new _templateCompiler2.default(options);var program=compiler.compile(ast);return program;}/*
		 * @method template
		 * @param {TemplateSpec} templateSpec A precompiled template
		 * @return {Template} A template spec string
		 */function template(templateSpec){return new Function('return '+templateSpec)();}/*
		 * Compile a string into a template rendering function
		 *
		 * Example usage:
		 *
		 *     // Template is the hydration portion of the compiled template
		 *     var template = compile("Howdy {{name}}");
		 *
		 *     // Template accepts three arguments:
		 *     //
		 *     //   1. A context object
		 *     //   2. An env object
		 *     //   3. A contextualElement (optional, document.body is the default)
		 *     //
		 *     // The env object *must* have at least these two properties:
		 *     //
		 *     //   1. `hooks` - Basic hooks for rendering a template
		 *     //   2. `dom` - An instance of DOMHelper
		 *     //
		 *     import {hooks} from 'htmlbars-runtime';
		 *     import {DOMHelper} from 'morph';
		 *     var context = {name: 'whatever'},
		 *         env = {hooks: hooks, dom: new DOMHelper()},
		 *         contextualElement = document.body;
		 *     var domFragment = template(context, env, contextualElement);
		 *
		 * @method compile
		 * @param {String} string An HTMLBars template string
		 * @param {Object} options A set of options to provide to the compiler
		 * @return {Template} A function for rendering the template
		 */function compile(string,options){return(0,_hooks.wrap)(template(compileSpec(string,options)),_render2.default);}/***/},/* 2 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.preprocess=preprocess;exports.Parser=Parser;var _base=__webpack_require__(3);var _htmlbarsSyntax=__webpack_require__(11);var syntax=_interopRequireWildcard(_htmlbarsSyntax);var _eventedTokenizer=__webpack_require__(18);var _eventedTokenizer2=_interopRequireDefault(_eventedTokenizer);var _entityParser=__webpack_require__(20);var _entityParser2=_interopRequireDefault(_entityParser);var _html5NamedCharRefs=__webpack_require__(21);var _html5NamedCharRefs2=_interopRequireDefault(_html5NamedCharRefs);var _handlebarsNodeVisitors=__webpack_require__(22);var _handlebarsNodeVisitors2=_interopRequireDefault(_handlebarsNodeVisitors);var _tokenizerEventHandlers=__webpack_require__(25);var _tokenizerEventHandlers2=_interopRequireDefault(_tokenizerEventHandlers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function preprocess(html,options){var ast=(typeof html==='undefined'?'undefined':_typeof(html))==='object'?html:(0,_base.parse)(html);var combined=new Parser(html,options).acceptNode(ast);if(options&&options.plugins&&options.plugins.ast){for(var i=0,l=options.plugins.ast.length;i<l;i++){var plugin=new options.plugins.ast[i](options);plugin.syntax=syntax;combined=plugin.transform(combined);}}return combined;}exports.default=preprocess;var entityParser=new _entityParser2.default(_html5NamedCharRefs2.default);function Parser(source,options){this.options=options||{};this.elementStack=[];this.tokenizer=new _eventedTokenizer2.default(this,entityParser);this.currentNode=null;this.currentAttribute=null;if(typeof source==='string'){this.source=source.split(/(?:\r\n?|\n)/g);}}for(var key in _handlebarsNodeVisitors2.default){Parser.prototype[key]=_handlebarsNodeVisitors2.default[key];}for(var _key in _tokenizerEventHandlers2.default){Parser.prototype[_key]=_tokenizerEventHandlers2.default[_key];}Parser.prototype.acceptNode=function(node){return this[node.type](node);};Parser.prototype.currentElement=function(){return this.elementStack[this.elementStack.length-1];};Parser.prototype.sourceForMustache=function(mustache){var firstLine=mustache.loc.start.line-1;var lastLine=mustache.loc.end.line-1;var currentLine=firstLine-1;var firstColumn=mustache.loc.start.column+2;var lastColumn=mustache.loc.end.column-2;var string=[];var line;if(!this.source){return'{{'+mustache.path.id.original+'}}';}while(currentLine<lastLine){currentLine++;line=this.source[currentLine];if(currentLine===firstLine){if(firstLine===lastLine){string.push(line.slice(firstColumn,lastColumn));}else{string.push(line.slice(firstColumn));}}else if(currentLine===lastLine){string.push(line.slice(0,lastColumn));}else{string.push(line);}}return string.join('\n');};/***/},/* 3 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.parser=undefined;exports.parse=parse;var _parser=__webpack_require__(4);var _parser2=_interopRequireDefault(_parser);var _ast=__webpack_require__(5);var _ast2=_interopRequireDefault(_ast);var _whitespaceControl=__webpack_require__(6);var _whitespaceControl2=_interopRequireDefault(_whitespaceControl);var _helpers=__webpack_require__(9);var Helpers=_interopRequireWildcard(_helpers);var _utils=__webpack_require__(10);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.parser=_parser2.default;var yy={};(0,_utils.extend)(yy,Helpers,_ast2.default);function parse(input,options){// Just return if an already-compiled AST was passed in.
	if(input.type==='Program'){return input;}_parser2.default.yy=yy;// Altering the shared object here, but this is ok as parser is a sync operation
	yy.locInfo=function(locInfo){return new yy.SourceLocation(options&&options.srcName,locInfo);};var strip=new _whitespaceControl2.default();return strip.accept(_parser2.default.parse(input));}/***/},/* 4 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});/* istanbul ignore next *//* Jison generated parser */var handlebars=function(){var parser={trace:function trace(){},yy:{},symbols_:{'error':2,'root':3,'program':4,'EOF':5,'program_repetition0':6,'statement':7,'mustache':8,'block':9,'rawBlock':10,'partial':11,'content':12,'COMMENT':13,'CONTENT':14,'openRawBlock':15,'END_RAW_BLOCK':16,'OPEN_RAW_BLOCK':17,'helperName':18,'openRawBlock_repetition0':19,'openRawBlock_option0':20,'CLOSE_RAW_BLOCK':21,'openBlock':22,'block_option0':23,'closeBlock':24,'openInverse':25,'block_option1':26,'OPEN_BLOCK':27,'openBlock_repetition0':28,'openBlock_option0':29,'openBlock_option1':30,'CLOSE':31,'OPEN_INVERSE':32,'openInverse_repetition0':33,'openInverse_option0':34,'openInverse_option1':35,'openInverseChain':36,'OPEN_INVERSE_CHAIN':37,'openInverseChain_repetition0':38,'openInverseChain_option0':39,'openInverseChain_option1':40,'inverseAndProgram':41,'INVERSE':42,'inverseChain':43,'inverseChain_option0':44,'OPEN_ENDBLOCK':45,'OPEN':46,'mustache_repetition0':47,'mustache_option0':48,'OPEN_UNESCAPED':49,'mustache_repetition1':50,'mustache_option1':51,'CLOSE_UNESCAPED':52,'OPEN_PARTIAL':53,'partialName':54,'partial_repetition0':55,'partial_option0':56,'param':57,'sexpr':58,'OPEN_SEXPR':59,'sexpr_repetition0':60,'sexpr_option0':61,'CLOSE_SEXPR':62,'hash':63,'hash_repetition_plus0':64,'hashSegment':65,'ID':66,'EQUALS':67,'blockParams':68,'OPEN_BLOCK_PARAMS':69,'blockParams_repetition_plus0':70,'CLOSE_BLOCK_PARAMS':71,'path':72,'dataName':73,'STRING':74,'NUMBER':75,'BOOLEAN':76,'UNDEFINED':77,'NULL':78,'DATA':79,'pathSegments':80,'SEP':81,'$accept':0,'$end':1},terminals_:{2:'error',5:'EOF',13:'COMMENT',14:'CONTENT',16:'END_RAW_BLOCK',17:'OPEN_RAW_BLOCK',21:'CLOSE_RAW_BLOCK',27:'OPEN_BLOCK',31:'CLOSE',32:'OPEN_INVERSE',37:'OPEN_INVERSE_CHAIN',42:'INVERSE',45:'OPEN_ENDBLOCK',46:'OPEN',49:'OPEN_UNESCAPED',52:'CLOSE_UNESCAPED',53:'OPEN_PARTIAL',59:'OPEN_SEXPR',62:'CLOSE_SEXPR',66:'ID',67:'EQUALS',69:'OPEN_BLOCK_PARAMS',71:'CLOSE_BLOCK_PARAMS',74:'STRING',75:'NUMBER',76:'BOOLEAN',77:'UNDEFINED',78:'NULL',79:'DATA',81:'SEP'},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[12,1],[10,3],[15,5],[9,4],[9,4],[22,6],[25,6],[36,6],[41,2],[43,3],[43,1],[24,3],[8,5],[8,5],[11,5],[57,1],[57,1],[58,5],[63,1],[65,3],[68,3],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[54,1],[54,1],[73,2],[72,1],[80,3],[80,1],[6,0],[6,2],[19,0],[19,2],[20,0],[20,1],[23,0],[23,1],[26,0],[26,1],[28,0],[28,2],[29,0],[29,1],[30,0],[30,1],[33,0],[33,2],[34,0],[34,1],[35,0],[35,1],[38,0],[38,2],[39,0],[39,1],[40,0],[40,1],[44,0],[44,1],[47,0],[47,2],[48,0],[48,1],[50,0],[50,2],[51,0],[51,1],[55,0],[55,2],[56,0],[56,1],[60,0],[60,2],[61,0],[61,1],[64,1],[64,2],[70,1],[70,2]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:return $$[$0-1];break;case 2:this.$=new yy.Program($$[$0],null,{},yy.locInfo(this._$));break;case 3:this.$=$$[$0];break;case 4:this.$=$$[$0];break;case 5:this.$=$$[$0];break;case 6:this.$=$$[$0];break;case 7:this.$=$$[$0];break;case 8:this.$=new yy.CommentStatement(yy.stripComment($$[$0]),yy.stripFlags($$[$0],$$[$0]),yy.locInfo(this._$));break;case 9:this.$=new yy.ContentStatement($$[$0],yy.locInfo(this._$));break;case 10:this.$=yy.prepareRawBlock($$[$0-2],$$[$0-1],$$[$0],this._$);break;case 11:this.$={path:$$[$0-3],params:$$[$0-2],hash:$$[$0-1]};break;case 12:this.$=yy.prepareBlock($$[$0-3],$$[$0-2],$$[$0-1],$$[$0],false,this._$);break;case 13:this.$=yy.prepareBlock($$[$0-3],$$[$0-2],$$[$0-1],$$[$0],true,this._$);break;case 14:this.$={path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 15:this.$={path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 16:this.$={path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 17:this.$={strip:yy.stripFlags($$[$0-1],$$[$0-1]),program:$$[$0]};break;case 18:var inverse=yy.prepareBlock($$[$0-2],$$[$0-1],$$[$0],$$[$0],false,this._$),program=new yy.Program([inverse],null,{},yy.locInfo(this._$));program.chained=true;this.$={strip:$$[$0-2].strip,program:program,chain:true};break;case 19:this.$=$$[$0];break;case 20:this.$={path:$$[$0-1],strip:yy.stripFlags($$[$0-2],$$[$0])};break;case 21:this.$=yy.prepareMustache($$[$0-3],$$[$0-2],$$[$0-1],$$[$0-4],yy.stripFlags($$[$0-4],$$[$0]),this._$);break;case 22:this.$=yy.prepareMustache($$[$0-3],$$[$0-2],$$[$0-1],$$[$0-4],yy.stripFlags($$[$0-4],$$[$0]),this._$);break;case 23:this.$=new yy.PartialStatement($$[$0-3],$$[$0-2],$$[$0-1],yy.stripFlags($$[$0-4],$$[$0]),yy.locInfo(this._$));break;case 24:this.$=$$[$0];break;case 25:this.$=$$[$0];break;case 26:this.$=new yy.SubExpression($$[$0-3],$$[$0-2],$$[$0-1],yy.locInfo(this._$));break;case 27:this.$=new yy.Hash($$[$0],yy.locInfo(this._$));break;case 28:this.$=new yy.HashPair(yy.id($$[$0-2]),$$[$0],yy.locInfo(this._$));break;case 29:this.$=yy.id($$[$0-1]);break;case 30:this.$=$$[$0];break;case 31:this.$=$$[$0];break;case 32:this.$=new yy.StringLiteral($$[$0],yy.locInfo(this._$));break;case 33:this.$=new yy.NumberLiteral($$[$0],yy.locInfo(this._$));break;case 34:this.$=new yy.BooleanLiteral($$[$0],yy.locInfo(this._$));break;case 35:this.$=new yy.UndefinedLiteral(yy.locInfo(this._$));break;case 36:this.$=new yy.NullLiteral(yy.locInfo(this._$));break;case 37:this.$=$$[$0];break;case 38:this.$=$$[$0];break;case 39:this.$=yy.preparePath(true,$$[$0],this._$);break;case 40:this.$=yy.preparePath(false,$$[$0],this._$);break;case 41:$$[$0-2].push({part:yy.id($$[$0]),original:$$[$0],separator:$$[$0-1]});this.$=$$[$0-2];break;case 42:this.$=[{part:yy.id($$[$0]),original:$$[$0]}];break;case 43:this.$=[];break;case 44:$$[$0-1].push($$[$0]);break;case 45:this.$=[];break;case 46:$$[$0-1].push($$[$0]);break;case 53:this.$=[];break;case 54:$$[$0-1].push($$[$0]);break;case 59:this.$=[];break;case 60:$$[$0-1].push($$[$0]);break;case 65:this.$=[];break;case 66:$$[$0-1].push($$[$0]);break;case 73:this.$=[];break;case 74:$$[$0-1].push($$[$0]);break;case 77:this.$=[];break;case 78:$$[$0-1].push($$[$0]);break;case 81:this.$=[];break;case 82:$$[$0-1].push($$[$0]);break;case 85:this.$=[];break;case 86:$$[$0-1].push($$[$0]);break;case 89:this.$=[$$[$0]];break;case 90:$$[$0-1].push($$[$0]);break;case 91:this.$=[$$[$0]];break;case 92:$$[$0-1].push($$[$0]);break;}},table:[{3:1,4:2,5:[2,43],6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],46:[2,43],49:[2,43],53:[2,43]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:[1,11],14:[1,18],15:16,17:[1,21],22:14,25:15,27:[1,19],32:[1,20],37:[2,2],42:[2,2],45:[2,2],46:[1,12],49:[1,13],53:[1,17]},{1:[2,1]},{5:[2,44],13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],37:[2,44],42:[2,44],45:[2,44],46:[2,44],49:[2,44],53:[2,44]},{5:[2,3],13:[2,3],14:[2,3],17:[2,3],27:[2,3],32:[2,3],37:[2,3],42:[2,3],45:[2,3],46:[2,3],49:[2,3],53:[2,3]},{5:[2,4],13:[2,4],14:[2,4],17:[2,4],27:[2,4],32:[2,4],37:[2,4],42:[2,4],45:[2,4],46:[2,4],49:[2,4],53:[2,4]},{5:[2,5],13:[2,5],14:[2,5],17:[2,5],27:[2,5],32:[2,5],37:[2,5],42:[2,5],45:[2,5],46:[2,5],49:[2,5],53:[2,5]},{5:[2,6],13:[2,6],14:[2,6],17:[2,6],27:[2,6],32:[2,6],37:[2,6],42:[2,6],45:[2,6],46:[2,6],49:[2,6],53:[2,6]},{5:[2,7],13:[2,7],14:[2,7],17:[2,7],27:[2,7],32:[2,7],37:[2,7],42:[2,7],45:[2,7],46:[2,7],49:[2,7],53:[2,7]},{5:[2,8],13:[2,8],14:[2,8],17:[2,8],27:[2,8],32:[2,8],37:[2,8],42:[2,8],45:[2,8],46:[2,8],49:[2,8],53:[2,8]},{18:22,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:33,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{4:34,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],37:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{4:35,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{12:36,14:[1,18]},{18:38,54:37,58:39,59:[1,40],66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],27:[2,9],32:[2,9],37:[2,9],42:[2,9],45:[2,9],46:[2,9],49:[2,9],53:[2,9]},{18:41,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:42,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:43,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{31:[2,73],47:44,59:[2,73],66:[2,73],74:[2,73],75:[2,73],76:[2,73],77:[2,73],78:[2,73],79:[2,73]},{21:[2,30],31:[2,30],52:[2,30],59:[2,30],62:[2,30],66:[2,30],69:[2,30],74:[2,30],75:[2,30],76:[2,30],77:[2,30],78:[2,30],79:[2,30]},{21:[2,31],31:[2,31],52:[2,31],59:[2,31],62:[2,31],66:[2,31],69:[2,31],74:[2,31],75:[2,31],76:[2,31],77:[2,31],78:[2,31],79:[2,31]},{21:[2,32],31:[2,32],52:[2,32],59:[2,32],62:[2,32],66:[2,32],69:[2,32],74:[2,32],75:[2,32],76:[2,32],77:[2,32],78:[2,32],79:[2,32]},{21:[2,33],31:[2,33],52:[2,33],59:[2,33],62:[2,33],66:[2,33],69:[2,33],74:[2,33],75:[2,33],76:[2,33],77:[2,33],78:[2,33],79:[2,33]},{21:[2,34],31:[2,34],52:[2,34],59:[2,34],62:[2,34],66:[2,34],69:[2,34],74:[2,34],75:[2,34],76:[2,34],77:[2,34],78:[2,34],79:[2,34]},{21:[2,35],31:[2,35],52:[2,35],59:[2,35],62:[2,35],66:[2,35],69:[2,35],74:[2,35],75:[2,35],76:[2,35],77:[2,35],78:[2,35],79:[2,35]},{21:[2,36],31:[2,36],52:[2,36],59:[2,36],62:[2,36],66:[2,36],69:[2,36],74:[2,36],75:[2,36],76:[2,36],77:[2,36],78:[2,36],79:[2,36]},{21:[2,40],31:[2,40],52:[2,40],59:[2,40],62:[2,40],66:[2,40],69:[2,40],74:[2,40],75:[2,40],76:[2,40],77:[2,40],78:[2,40],79:[2,40],81:[1,45]},{66:[1,32],80:46},{21:[2,42],31:[2,42],52:[2,42],59:[2,42],62:[2,42],66:[2,42],69:[2,42],74:[2,42],75:[2,42],76:[2,42],77:[2,42],78:[2,42],79:[2,42],81:[2,42]},{50:47,52:[2,77],59:[2,77],66:[2,77],74:[2,77],75:[2,77],76:[2,77],77:[2,77],78:[2,77],79:[2,77]},{23:48,36:50,37:[1,52],41:51,42:[1,53],43:49,45:[2,49]},{26:54,41:55,42:[1,53],45:[2,51]},{16:[1,56]},{31:[2,81],55:57,59:[2,81],66:[2,81],74:[2,81],75:[2,81],76:[2,81],77:[2,81],78:[2,81],79:[2,81]},{31:[2,37],59:[2,37],66:[2,37],74:[2,37],75:[2,37],76:[2,37],77:[2,37],78:[2,37],79:[2,37]},{31:[2,38],59:[2,38],66:[2,38],74:[2,38],75:[2,38],76:[2,38],77:[2,38],78:[2,38],79:[2,38]},{18:58,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{28:59,31:[2,53],59:[2,53],66:[2,53],69:[2,53],74:[2,53],75:[2,53],76:[2,53],77:[2,53],78:[2,53],79:[2,53]},{31:[2,59],33:60,59:[2,59],66:[2,59],69:[2,59],74:[2,59],75:[2,59],76:[2,59],77:[2,59],78:[2,59],79:[2,59]},{19:61,21:[2,45],59:[2,45],66:[2,45],74:[2,45],75:[2,45],76:[2,45],77:[2,45],78:[2,45],79:[2,45]},{18:65,31:[2,75],48:62,57:63,58:66,59:[1,40],63:64,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{66:[1,70]},{21:[2,39],31:[2,39],52:[2,39],59:[2,39],62:[2,39],66:[2,39],69:[2,39],74:[2,39],75:[2,39],76:[2,39],77:[2,39],78:[2,39],79:[2,39],81:[1,45]},{18:65,51:71,52:[2,79],57:72,58:66,59:[1,40],63:73,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{24:74,45:[1,75]},{45:[2,50]},{4:76,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],37:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{45:[2,19]},{18:77,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{4:78,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{24:79,45:[1,75]},{45:[2,52]},{5:[2,10],13:[2,10],14:[2,10],17:[2,10],27:[2,10],32:[2,10],37:[2,10],42:[2,10],45:[2,10],46:[2,10],49:[2,10],53:[2,10]},{18:65,31:[2,83],56:80,57:81,58:66,59:[1,40],63:82,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{59:[2,85],60:83,62:[2,85],66:[2,85],74:[2,85],75:[2,85],76:[2,85],77:[2,85],78:[2,85],79:[2,85]},{18:65,29:84,31:[2,55],57:85,58:66,59:[1,40],63:86,64:67,65:68,66:[1,69],69:[2,55],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:65,31:[2,61],34:87,57:88,58:66,59:[1,40],63:89,64:67,65:68,66:[1,69],69:[2,61],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:65,20:90,21:[2,47],57:91,58:66,59:[1,40],63:92,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{31:[1,93]},{31:[2,74],59:[2,74],66:[2,74],74:[2,74],75:[2,74],76:[2,74],77:[2,74],78:[2,74],79:[2,74]},{31:[2,76]},{21:[2,24],31:[2,24],52:[2,24],59:[2,24],62:[2,24],66:[2,24],69:[2,24],74:[2,24],75:[2,24],76:[2,24],77:[2,24],78:[2,24],79:[2,24]},{21:[2,25],31:[2,25],52:[2,25],59:[2,25],62:[2,25],66:[2,25],69:[2,25],74:[2,25],75:[2,25],76:[2,25],77:[2,25],78:[2,25],79:[2,25]},{21:[2,27],31:[2,27],52:[2,27],62:[2,27],65:94,66:[1,95],69:[2,27]},{21:[2,89],31:[2,89],52:[2,89],62:[2,89],66:[2,89],69:[2,89]},{21:[2,42],31:[2,42],52:[2,42],59:[2,42],62:[2,42],66:[2,42],67:[1,96],69:[2,42],74:[2,42],75:[2,42],76:[2,42],77:[2,42],78:[2,42],79:[2,42],81:[2,42]},{21:[2,41],31:[2,41],52:[2,41],59:[2,41],62:[2,41],66:[2,41],69:[2,41],74:[2,41],75:[2,41],76:[2,41],77:[2,41],78:[2,41],79:[2,41],81:[2,41]},{52:[1,97]},{52:[2,78],59:[2,78],66:[2,78],74:[2,78],75:[2,78],76:[2,78],77:[2,78],78:[2,78],79:[2,78]},{52:[2,80]},{5:[2,12],13:[2,12],14:[2,12],17:[2,12],27:[2,12],32:[2,12],37:[2,12],42:[2,12],45:[2,12],46:[2,12],49:[2,12],53:[2,12]},{18:98,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{36:50,37:[1,52],41:51,42:[1,53],43:100,44:99,45:[2,71]},{31:[2,65],38:101,59:[2,65],66:[2,65],69:[2,65],74:[2,65],75:[2,65],76:[2,65],77:[2,65],78:[2,65],79:[2,65]},{45:[2,17]},{5:[2,13],13:[2,13],14:[2,13],17:[2,13],27:[2,13],32:[2,13],37:[2,13],42:[2,13],45:[2,13],46:[2,13],49:[2,13],53:[2,13]},{31:[1,102]},{31:[2,82],59:[2,82],66:[2,82],74:[2,82],75:[2,82],76:[2,82],77:[2,82],78:[2,82],79:[2,82]},{31:[2,84]},{18:65,57:104,58:66,59:[1,40],61:103,62:[2,87],63:105,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{30:106,31:[2,57],68:107,69:[1,108]},{31:[2,54],59:[2,54],66:[2,54],69:[2,54],74:[2,54],75:[2,54],76:[2,54],77:[2,54],78:[2,54],79:[2,54]},{31:[2,56],69:[2,56]},{31:[2,63],35:109,68:110,69:[1,108]},{31:[2,60],59:[2,60],66:[2,60],69:[2,60],74:[2,60],75:[2,60],76:[2,60],77:[2,60],78:[2,60],79:[2,60]},{31:[2,62],69:[2,62]},{21:[1,111]},{21:[2,46],59:[2,46],66:[2,46],74:[2,46],75:[2,46],76:[2,46],77:[2,46],78:[2,46],79:[2,46]},{21:[2,48]},{5:[2,21],13:[2,21],14:[2,21],17:[2,21],27:[2,21],32:[2,21],37:[2,21],42:[2,21],45:[2,21],46:[2,21],49:[2,21],53:[2,21]},{21:[2,90],31:[2,90],52:[2,90],62:[2,90],66:[2,90],69:[2,90]},{67:[1,96]},{18:65,57:112,58:66,59:[1,40],66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,22],13:[2,22],14:[2,22],17:[2,22],27:[2,22],32:[2,22],37:[2,22],42:[2,22],45:[2,22],46:[2,22],49:[2,22],53:[2,22]},{31:[1,113]},{45:[2,18]},{45:[2,72]},{18:65,31:[2,67],39:114,57:115,58:66,59:[1,40],63:116,64:67,65:68,66:[1,69],69:[2,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,23],13:[2,23],14:[2,23],17:[2,23],27:[2,23],32:[2,23],37:[2,23],42:[2,23],45:[2,23],46:[2,23],49:[2,23],53:[2,23]},{62:[1,117]},{59:[2,86],62:[2,86],66:[2,86],74:[2,86],75:[2,86],76:[2,86],77:[2,86],78:[2,86],79:[2,86]},{62:[2,88]},{31:[1,118]},{31:[2,58]},{66:[1,120],70:119},{31:[1,121]},{31:[2,64]},{14:[2,11]},{21:[2,28],31:[2,28],52:[2,28],62:[2,28],66:[2,28],69:[2,28]},{5:[2,20],13:[2,20],14:[2,20],17:[2,20],27:[2,20],32:[2,20],37:[2,20],42:[2,20],45:[2,20],46:[2,20],49:[2,20],53:[2,20]},{31:[2,69],40:122,68:123,69:[1,108]},{31:[2,66],59:[2,66],66:[2,66],69:[2,66],74:[2,66],75:[2,66],76:[2,66],77:[2,66],78:[2,66],79:[2,66]},{31:[2,68],69:[2,68]},{21:[2,26],31:[2,26],52:[2,26],59:[2,26],62:[2,26],66:[2,26],69:[2,26],74:[2,26],75:[2,26],76:[2,26],77:[2,26],78:[2,26],79:[2,26]},{13:[2,14],14:[2,14],17:[2,14],27:[2,14],32:[2,14],37:[2,14],42:[2,14],45:[2,14],46:[2,14],49:[2,14],53:[2,14]},{66:[1,125],71:[1,124]},{66:[2,91],71:[2,91]},{13:[2,15],14:[2,15],17:[2,15],27:[2,15],32:[2,15],42:[2,15],45:[2,15],46:[2,15],49:[2,15],53:[2,15]},{31:[1,126]},{31:[2,70]},{31:[2,29]},{66:[2,92],71:[2,92]},{13:[2,16],14:[2,16],17:[2,16],27:[2,16],32:[2,16],37:[2,16],42:[2,16],45:[2,16],46:[2,16],49:[2,16],53:[2,16]}],defaultActions:{4:[2,1],49:[2,50],51:[2,19],55:[2,52],64:[2,76],73:[2,80],78:[2,17],82:[2,84],92:[2,48],99:[2,18],100:[2,72],105:[2,88],107:[2,58],110:[2,64],111:[2,11],123:[2,70],124:[2,29]},parseError:function parseError(str,hash){throw new Error(str);},parse:function parse(input){var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext='',yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=='undefined')this.lexer.yylloc={};var yyloc=this.lexer.yylloc;lstack.push(yyloc);var ranges=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==='function')this.parseError=this.yy.parseError;function popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;lstack.length=lstack.length-n;}function lex(){var token;token=self.lexer.lex()||1;if(typeof token!=='number'){token=self.symbols_[token]||token;}return token;}var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(true){state=stack[stack.length-1];if(this.defaultActions[state]){action=this.defaultActions[state];}else{if(symbol===null||typeof symbol=='undefined'){symbol=lex();}action=table[state]&&table[state][symbol];}if(typeof action==='undefined'||!action.length||!action[0]){var errStr='';if(!recovering){expected=[];for(p in table[state]){if(this.terminals_[p]&&p>2){expected.push('\''+this.terminals_[p]+'\'');}}if(this.lexer.showPosition){errStr='Parse error on line '+(yylineno+1)+':\n'+this.lexer.showPosition()+'\nExpecting '+expected.join(', ')+', got \''+(this.terminals_[symbol]||symbol)+'\'';}else{errStr='Parse error on line '+(yylineno+1)+': Unexpected '+(symbol==1?'end of input':'\''+(this.terminals_[symbol]||symbol)+'\'');}this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected});}}if(action[0]instanceof Array&&action.length>1){throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);}switch(action[0]){case 1:stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.lexer.yylloc);stack.push(action[1]);symbol=null;if(!preErrorSymbol){yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;if(recovering>0)recovering--;}else{symbol=preErrorSymbol;preErrorSymbol=null;}break;case 2:len=this.productions_[action[1]][1];yyval.$=vstack[vstack.length-len];yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};if(ranges){yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]];}r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof r!=='undefined'){return r;}if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);lstack=lstack.slice(0,-1*len);}stack.push(this.productions_[action[1]][0]);vstack.push(yyval.$);lstack.push(yyval._$);newState=table[stack[stack.length-2]][stack[stack.length-1]];stack.push(newState);break;case 3:return true;}}return true;}};/* Jison generated lexer */var lexer=function(){var lexer={EOF:1,parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash);}else{throw new Error(str);}},setInput:function setInput(input){this._input=input;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match='';this.conditionStack=['INITIAL'];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this;},input:function input(){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++;}else{this.yylloc.last_column++;}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return ch;},unput:function unput(ch){var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1);//this.yyleng -= len;
	this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1)this.yylineno-=lines.length-1;var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len];}return this;},more:function more(){this._more=true;return this;},less:function less(n){this.unput(this.match.slice(n));},pastInput:function pastInput(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?'...':'')+past.substr(-20).replace(/\n/g,'');},upcomingInput:function upcomingInput(){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length);}return(next.substr(0,20)+(next.length>20?'...':'')).replace(/\n/g,'');},showPosition:function showPosition(){var pre=this.pastInput();var c=new Array(pre.length+1).join('-');return pre+this.upcomingInput()+'\n'+c+'^';},next:function next(){if(this.done){return this.EOF;}if(!this._input)this.done=true;var token,match,tempMatch,index,col,lines;if(!this._more){this.yytext='';this.match='';}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(!this.options.flex)break;}}if(match){lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines)this.yylineno+=lines.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng];}this._more=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(token)return token;else return;}if(this._input===''){return this.EOF;}else{return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),{text:'',token:null,line:this.yylineno});}},lex:function lex(){var r=this.next();if(typeof r!=='undefined'){return r;}else{return this.lex();}},begin:function begin(condition){this.conditionStack.push(condition);},popState:function popState(){return this.conditionStack.pop();},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;},topState:function topState(){return this.conditionStack[this.conditionStack.length-2];},pushState:function begin(condition){this.begin(condition);}};lexer.options={};lexer.performAction=function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){function strip(start,end){return yy_.yytext=yy_.yytext.substr(start,yy_.yyleng-end);}var YYSTATE=YY_START;switch($avoiding_name_collisions){case 0:if(yy_.yytext.slice(-2)==='\\\\'){strip(0,1);this.begin('mu');}else if(yy_.yytext.slice(-1)==='\\'){strip(0,1);this.begin('emu');}else{this.begin('mu');}if(yy_.yytext)return 14;break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:yy_.yytext=yy_.yytext.substr(5,yy_.yyleng-9);this.popState();return 16;break;case 4:return 14;break;case 5:this.popState();return 13;break;case 6:return 59;break;case 7:return 62;break;case 8:return 17;break;case 9:this.popState();this.begin('raw');return 21;break;case 10:return 53;break;case 11:return 27;break;case 12:return 45;break;case 13:this.popState();return 42;break;case 14:this.popState();return 42;break;case 15:return 32;break;case 16:return 37;break;case 17:return 49;break;case 18:return 46;break;case 19:this.unput(yy_.yytext);this.popState();this.begin('com');break;case 20:this.popState();return 13;break;case 21:return 46;break;case 22:return 67;break;case 23:return 66;break;case 24:return 66;break;case 25:return 81;break;case 26:// ignore whitespace
	break;case 27:this.popState();return 52;break;case 28:this.popState();return 31;break;case 29:yy_.yytext=strip(1,2).replace(/\\"/g,'"');return 74;break;case 30:yy_.yytext=strip(1,2).replace(/\\'/g,'\'');return 74;break;case 31:return 79;break;case 32:return 76;break;case 33:return 76;break;case 34:return 77;break;case 35:return 78;break;case 36:return 75;break;case 37:return 69;break;case 38:return 71;break;case 39:return 66;break;case 40:return 66;break;case 41:return'INVALID';break;case 42:return 5;break;}};lexer.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];lexer.conditions={'mu':{'rules':[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],'inclusive':false},'emu':{'rules':[2],'inclusive':false},'com':{'rules':[5],'inclusive':false},'raw':{'rules':[3,4],'inclusive':false},'INITIAL':{'rules':[0,1,42],'inclusive':true}};return lexer;}();parser.lexer=lexer;function Parser(){this.yy={};}Parser.prototype=parser;parser.Parser=Parser;return new Parser();}();exports.default=handlebars;/***/},/* 5 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var AST={Program:function Program(statements,blockParams,strip,locInfo){this.loc=locInfo;this.type='Program';this.body=statements;this.blockParams=blockParams;this.strip=strip;},MustacheStatement:function MustacheStatement(path,params,hash,escaped,strip,locInfo){this.loc=locInfo;this.type='MustacheStatement';this.path=path;this.params=params||[];this.hash=hash;this.escaped=escaped;this.strip=strip;},BlockStatement:function BlockStatement(path,params,hash,program,inverse,openStrip,inverseStrip,closeStrip,locInfo){this.loc=locInfo;this.type='BlockStatement';this.path=path;this.params=params||[];this.hash=hash;this.program=program;this.inverse=inverse;this.openStrip=openStrip;this.inverseStrip=inverseStrip;this.closeStrip=closeStrip;},PartialStatement:function PartialStatement(name,params,hash,strip,locInfo){this.loc=locInfo;this.type='PartialStatement';this.name=name;this.params=params||[];this.hash=hash;this.indent='';this.strip=strip;},ContentStatement:function ContentStatement(string,locInfo){this.loc=locInfo;this.type='ContentStatement';this.original=this.value=string;},CommentStatement:function CommentStatement(comment,strip,locInfo){this.loc=locInfo;this.type='CommentStatement';this.value=comment;this.strip=strip;},SubExpression:function SubExpression(path,params,hash,locInfo){this.loc=locInfo;this.type='SubExpression';this.path=path;this.params=params||[];this.hash=hash;},PathExpression:function PathExpression(data,depth,parts,original,locInfo){this.loc=locInfo;this.type='PathExpression';this.data=data;this.original=original;this.parts=parts;this.depth=depth;},StringLiteral:function StringLiteral(string,locInfo){this.loc=locInfo;this.type='StringLiteral';this.original=this.value=string;},NumberLiteral:function NumberLiteral(number,locInfo){this.loc=locInfo;this.type='NumberLiteral';this.original=this.value=Number(number);},BooleanLiteral:function BooleanLiteral(bool,locInfo){this.loc=locInfo;this.type='BooleanLiteral';this.original=this.value=bool==='true';},UndefinedLiteral:function UndefinedLiteral(locInfo){this.loc=locInfo;this.type='UndefinedLiteral';this.original=this.value=undefined;},NullLiteral:function NullLiteral(locInfo){this.loc=locInfo;this.type='NullLiteral';this.original=this.value=null;},Hash:function Hash(pairs,locInfo){this.loc=locInfo;this.type='Hash';this.pairs=pairs;},HashPair:function HashPair(key,value,locInfo){this.loc=locInfo;this.type='HashPair';this.key=key;this.value=value;},// Public API used to evaluate derived attributes regarding AST nodes
	helpers:{// a mustache is definitely a helper if:
	// * it is an eligible helper, and
	// * it has at least one parameter or hash segment
	helperExpression:function helperExpression(node){return!!(node.type==='SubExpression'||node.params.length||node.hash);},scopedId:function scopedId(path){return /^\.|this\b/.test(path.original);},// an ID is simple if it only has one part, and that part is not
	// `..` or `this`.
	simpleId:function simpleId(path){return path.parts.length===1&&!AST.helpers.scopedId(path)&&!path.depth;}}};// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports.default=AST;/***/},/* 6 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _visitor=__webpack_require__(7);var _visitor2=_interopRequireDefault(_visitor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function WhitespaceControl(){}WhitespaceControl.prototype=new _visitor2.default();WhitespaceControl.prototype.Program=function(program){var isRoot=!this.isRootSeen;this.isRootSeen=true;var body=program.body;for(var i=0,l=body.length;i<l;i++){var current=body[i],strip=this.accept(current);if(!strip){continue;}var _isPrevWhitespace=isPrevWhitespace(body,i,isRoot),_isNextWhitespace=isNextWhitespace(body,i,isRoot),openStandalone=strip.openStandalone&&_isPrevWhitespace,closeStandalone=strip.closeStandalone&&_isNextWhitespace,inlineStandalone=strip.inlineStandalone&&_isPrevWhitespace&&_isNextWhitespace;if(strip.close){omitRight(body,i,true);}if(strip.open){omitLeft(body,i,true);}if(inlineStandalone){omitRight(body,i);if(omitLeft(body,i)){// If we are on a standalone node, save the indent info for partials
	if(current.type==='PartialStatement'){// Pull out the whitespace from the final line
	current.indent=/([ \t]+$)/.exec(body[i-1].original)[1];}}}if(openStandalone){omitRight((current.program||current.inverse).body);// Strip out the previous content node if it's whitespace only
	omitLeft(body,i);}if(closeStandalone){// Always strip the next node
	omitRight(body,i);omitLeft((current.inverse||current.program).body);}}return program;};WhitespaceControl.prototype.BlockStatement=function(block){this.accept(block.program);this.accept(block.inverse);// Find the inverse program that is involed with whitespace stripping.
	var program=block.program||block.inverse,inverse=block.program&&block.inverse,firstInverse=inverse,lastInverse=inverse;if(inverse&&inverse.chained){firstInverse=inverse.body[0].program;// Walk the inverse chain to find the last inverse that is actually in the chain.
	while(lastInverse.chained){lastInverse=lastInverse.body[lastInverse.body.length-1].program;}}var strip={open:block.openStrip.open,close:block.closeStrip.close,// Determine the standalone candiacy. Basically flag our content as being possibly standalone
	// so our parent can determine if we actually are standalone
	openStandalone:isNextWhitespace(program.body),closeStandalone:isPrevWhitespace((firstInverse||program).body)};if(block.openStrip.close){omitRight(program.body,null,true);}if(inverse){var inverseStrip=block.inverseStrip;if(inverseStrip.open){omitLeft(program.body,null,true);}if(inverseStrip.close){omitRight(firstInverse.body,null,true);}if(block.closeStrip.open){omitLeft(lastInverse.body,null,true);}// Find standalone else statments
	if(isPrevWhitespace(program.body)&&isNextWhitespace(firstInverse.body)){omitLeft(program.body);omitRight(firstInverse.body);}}else if(block.closeStrip.open){omitLeft(program.body,null,true);}return strip;};WhitespaceControl.prototype.MustacheStatement=function(mustache){return mustache.strip;};WhitespaceControl.prototype.PartialStatement=WhitespaceControl.prototype.CommentStatement=function(node){/* istanbul ignore next */var strip=node.strip||{};return{inlineStandalone:true,open:strip.open,close:strip.close};};function isPrevWhitespace(body,i,isRoot){if(i===undefined){i=body.length;}// Nodes that end with newlines are considered whitespace (but are special
	// cased for strip operations)
	var prev=body[i-1],sibling=body[i-2];if(!prev){return isRoot;}if(prev.type==='ContentStatement'){return(sibling||!isRoot?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(prev.original);}}function isNextWhitespace(body,i,isRoot){if(i===undefined){i=-1;}var next=body[i+1],sibling=body[i+2];if(!next){return isRoot;}if(next.type==='ContentStatement'){return(sibling||!isRoot?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(next.original);}}// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body,i,multiple){var current=body[i==null?0:i+1];if(!current||current.type!=='ContentStatement'||!multiple&&current.rightStripped){return;}var original=current.value;current.value=current.value.replace(multiple?/^\s+/:/^[ \t]*\r?\n?/,'');current.rightStripped=current.value!==original;}// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body,i,multiple){var current=body[i==null?body.length-1:i-1];if(!current||current.type!=='ContentStatement'||!multiple&&current.leftStripped){return;}// We omit the last node if it's whitespace only and not preceeded by a non-content node.
	var original=current.value;current.value=current.value.replace(multiple?/\s+$/:/[ \t]+$/,'');current.leftStripped=current.value!==original;return current.leftStripped;}exports.default=WhitespaceControl;/***/},/* 7 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _exception=__webpack_require__(8);var _exception2=_interopRequireDefault(_exception);var _ast=__webpack_require__(5);var _ast2=_interopRequireDefault(_ast);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function Visitor(){this.parents=[];}Visitor.prototype={constructor:Visitor,mutating:false,// Visits a given value. If mutating, will replace the value if necessary.
	acceptKey:function acceptKey(node,name){var value=this.accept(node[name]);if(this.mutating){// Hacky sanity check:
	if(value&&(!value.type||!_ast2.default[value.type])){throw new _exception2.default('Unexpected node type "'+value.type+'" found when accepting '+name+' on '+node.type);}node[name]=value;}},// Performs an accept operation with added sanity check to ensure
	// required keys are not removed.
	acceptRequired:function acceptRequired(node,name){this.acceptKey(node,name);if(!node[name]){throw new _exception2.default(node.type+' requires '+name);}},// Traverses a given array. If mutating, empty respnses will be removed
	// for child elements.
	acceptArray:function acceptArray(array){for(var i=0,l=array.length;i<l;i++){this.acceptKey(array,i);if(!array[i]){array.splice(i,1);i--;l--;}}},accept:function accept(object){if(!object){return;}if(this.current){this.parents.unshift(this.current);}this.current=object;var ret=this[object.type](object);this.current=this.parents.shift();if(!this.mutating||ret){return ret;}else if(ret!==false){return object;}},Program:function Program(program){this.acceptArray(program.body);},MustacheStatement:function MustacheStatement(mustache){this.acceptRequired(mustache,'path');this.acceptArray(mustache.params);this.acceptKey(mustache,'hash');},BlockStatement:function BlockStatement(block){this.acceptRequired(block,'path');this.acceptArray(block.params);this.acceptKey(block,'hash');this.acceptKey(block,'program');this.acceptKey(block,'inverse');},PartialStatement:function PartialStatement(partial){this.acceptRequired(partial,'name');this.acceptArray(partial.params);this.acceptKey(partial,'hash');},ContentStatement:function ContentStatement()/* content */{},CommentStatement:function CommentStatement()/* comment */{},SubExpression:function SubExpression(sexpr){this.acceptRequired(sexpr,'path');this.acceptArray(sexpr.params);this.acceptKey(sexpr,'hash');},PathExpression:function PathExpression()/* path */{},StringLiteral:function StringLiteral()/* string */{},NumberLiteral:function NumberLiteral()/* number */{},BooleanLiteral:function BooleanLiteral()/* bool */{},UndefinedLiteral:function UndefinedLiteral()/* literal */{},NullLiteral:function NullLiteral()/* literal */{},Hash:function Hash(hash){this.acceptArray(hash.pairs);},HashPair:function HashPair(pair){this.acceptRequired(pair,'value');}};exports.default=Visitor;/***/},/* 8 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var errorProps=['description','fileName','lineNumber','message','name','number','stack'];function Exception(message,node){var loc=node&&node.loc,line=void 0,column=void 0;if(loc){line=loc.start.line;column=loc.start.column;message+=' - '+line+':'+column;}var tmp=Error.prototype.constructor.call(this,message);// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	for(var idx=0;idx<errorProps.length;idx++){this[errorProps[idx]]=tmp[errorProps[idx]];}if(Error.captureStackTrace){Error.captureStackTrace(this,Exception);}if(loc){this.lineNumber=line;this.column=column;}}Exception.prototype=new Error();exports.default=Exception;/***/},/* 9 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.SourceLocation=SourceLocation;exports.id=id;exports.stripFlags=stripFlags;exports.stripComment=stripComment;exports.preparePath=preparePath;exports.prepareMustache=prepareMustache;exports.prepareRawBlock=prepareRawBlock;exports.prepareBlock=prepareBlock;var _exception=__webpack_require__(8);var _exception2=_interopRequireDefault(_exception);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function SourceLocation(source,locInfo){this.source=source;this.start={line:locInfo.first_line,column:locInfo.first_column};this.end={line:locInfo.last_line,column:locInfo.last_column};}function id(token){if(/^\[.*\]$/.test(token)){return token.substr(1,token.length-2);}else{return token;}}function stripFlags(open,close){return{open:open.charAt(2)==='~',close:close.charAt(close.length-3)==='~'};}function stripComment(comment){return comment.replace(/^\{\{~?\!-?-?/,'').replace(/-?-?~?\}\}$/,'');}function preparePath(data,parts,locInfo){locInfo=this.locInfo(locInfo);var original=data?'@':'',dig=[],depth=0,depthString='';for(var i=0,l=parts.length;i<l;i++){var part=parts[i].part,// If we have [] syntax then we do not treat path references as operators,
	// i.e. foo.[this] resolves to approximately context.foo['this']
	isLiteral=parts[i].original!==part;original+=(parts[i].separator||'')+part;if(!isLiteral&&(part==='..'||part==='.'||part==='this')){if(dig.length>0){throw new _exception2.default('Invalid path: '+original,{loc:locInfo});}else if(part==='..'){depth++;depthString+='../';}}else{dig.push(part);}}return new this.PathExpression(data,depth,dig,original,locInfo);}function prepareMustache(path,params,hash,open,strip,locInfo){// Must use charAt to support IE pre-10
	var escapeFlag=open.charAt(3)||open.charAt(2),escaped=escapeFlag!=='{'&&escapeFlag!=='&';return new this.MustacheStatement(path,params,hash,escaped,strip,this.locInfo(locInfo));}function prepareRawBlock(openRawBlock,content,close,locInfo){if(openRawBlock.path.original!==close){var errorNode={loc:openRawBlock.path.loc};throw new _exception2.default(openRawBlock.path.original+' doesn\'t match '+close,errorNode);}locInfo=this.locInfo(locInfo);var program=new this.Program([content],null,{},locInfo);return new this.BlockStatement(openRawBlock.path,openRawBlock.params,openRawBlock.hash,program,undefined,{},{},{},locInfo);}function prepareBlock(openBlock,program,inverseAndProgram,close,inverted,locInfo){// When we are chaining inverse calls, we will not have a close path
	if(close&&close.path&&openBlock.path.original!==close.path.original){var errorNode={loc:openBlock.path.loc};throw new _exception2.default(openBlock.path.original+' doesn\'t match '+close.path.original,errorNode);}program.blockParams=openBlock.blockParams;var inverse=void 0,inverseStrip=void 0;if(inverseAndProgram){if(inverseAndProgram.chain){inverseAndProgram.program.body[0].closeStrip=close.strip;}inverseStrip=inverseAndProgram.strip;inverse=inverseAndProgram.program;}if(inverted){inverted=inverse;inverse=program;program=inverted;}return new this.BlockStatement(openBlock.path,openBlock.params,openBlock.hash,program,inverse,openBlock.strip,inverseStrip,close&&close.strip,this.locInfo(locInfo));}/***/},/* 10 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.extend=extend;exports.indexOf=indexOf;exports.escapeExpression=escapeExpression;exports.isEmpty=isEmpty;exports.blockParams=blockParams;exports.appendContextPath=appendContextPath;var escape={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#x27;','`':'&#x60;'};var badChars=/[&<>"'`]/g,possible=/[&<>"'`]/;function escapeChar(chr){return escape[chr];}function extend(obj/* , ...source */){for(var i=1;i<arguments.length;i++){for(var key in arguments[i]){if(Object.prototype.hasOwnProperty.call(arguments[i],key)){obj[key]=arguments[i][key];}}}return obj;}var toString=exports.toString=Object.prototype.toString;// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */var isFunction=function isFunction(value){return typeof value==='function';};// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */if(isFunction(/x/)){exports.isFunction=isFunction=function isFunction(value){return typeof value==='function'&&toString.call(value)==='[object Function]';};}var isFunction=exports.isFunction=undefined;/*eslint-enable func-style, no-var *//* istanbul ignore next */var isArray=exports.isArray=Array.isArray||function(value){return value&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'?toString.call(value)==='[object Array]':false;};// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	function indexOf(array,value){for(var i=0,len=array.length;i<len;i++){if(array[i]===value){return i;}}return-1;}function escapeExpression(string){if(typeof string!=='string'){// don't escape SafeStrings, since they're already safe
	if(string&&string.toHTML){return string.toHTML();}else if(string==null){return'';}else if(!string){return string+'';}// Force a string conversion as this will be done by the append regardless and
	// the regex test will do this transparently behind the scenes, causing issues if
	// an object's to string has escaped characters in it.
	string=''+string;}if(!possible.test(string)){return string;}return string.replace(badChars,escapeChar);}function isEmpty(value){if(!value&&value!==0){return true;}else if(isArray(value)&&value.length===0){return true;}else{return false;}}function blockParams(params,ids){params.path=ids;return params;}function appendContextPath(contextPath,id){return(contextPath?contextPath+'.':'')+id;}/***/},/* 11 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Walker=exports.traverse=exports.print=exports.parse=exports.builders=undefined;var _builders=__webpack_require__(12);var _builders2=_interopRequireDefault(_builders);var _parser=__webpack_require__(2);var _parser2=_interopRequireDefault(_parser);var _print=__webpack_require__(13);var _print2=_interopRequireDefault(_print);var _traverse=__webpack_require__(14);var _traverse2=_interopRequireDefault(_traverse);var _walker=__webpack_require__(17);var _walker2=_interopRequireDefault(_walker);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.builders=_builders2.default;exports.parse=_parser2.default;exports.print=_print2.default;exports.traverse=_traverse2.default;exports.Walker=_walker2.default;/***/},/* 12 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.buildMustache=buildMustache;exports.buildBlock=buildBlock;exports.buildElementModifier=buildElementModifier;exports.buildPartial=buildPartial;exports.buildComment=buildComment;exports.buildConcat=buildConcat;exports.buildElement=buildElement;exports.buildComponent=buildComponent;exports.buildAttr=buildAttr;exports.buildText=buildText;exports.buildSexpr=buildSexpr;exports.buildPath=buildPath;exports.buildString=buildString;exports.buildBoolean=buildBoolean;exports.buildNumber=buildNumber;exports.buildNull=buildNull;exports.buildUndefined=buildUndefined;exports.buildHash=buildHash;exports.buildPair=buildPair;exports.buildProgram=buildProgram;// Statements
	function buildMustache(path,params,hash,raw,loc){return{type:'MustacheStatement',path:buildPath(path),params:params||[],hash:hash||buildHash([]),escaped:!raw,loc:buildLoc(loc)};}function buildBlock(path,params,hash,program,inverse,loc){return{type:'BlockStatement',path:buildPath(path),params:params||[],hash:hash||buildHash([]),program:program||null,inverse:inverse||null,loc:buildLoc(loc)};}function buildElementModifier(path,params,hash,loc){return{type:'ElementModifierStatement',path:buildPath(path),params:params||[],hash:hash||buildHash([]),loc:buildLoc(loc)};}function buildPartial(name,params,hash,indent){return{type:'PartialStatement',name:name,params:params||[],hash:hash||buildHash([]),indent:indent};}function buildComment(value){return{type:'CommentStatement',value:value};}function buildConcat(parts){return{type:'ConcatStatement',parts:parts||[]};}// Nodes
	function buildElement(tag,attributes,modifiers,children,loc){return{type:'ElementNode',tag:tag||'',attributes:attributes||[],modifiers:modifiers||[],children:children||[],loc:buildLoc(loc)};}function buildComponent(tag,attributes,program,loc){return{type:'ComponentNode',tag:tag,attributes:attributes,program:program,loc:buildLoc(loc),// this should be true only if this component node is guaranteed
	// to produce start and end points that can never change after the
	// initial render, regardless of changes to dynamic inputs. If
	// a component represents a "fragment" (any number of top-level nodes),
	// this will usually not be true.
	isStatic:false};}function buildAttr(name,value,loc){return{type:'AttrNode',name:name,value:value,loc:buildLoc(loc)};}function buildText(chars,loc){return{type:'TextNode',chars:chars||'',loc:buildLoc(loc)};}// Expressions
	function buildSexpr(path,params,hash){return{type:'SubExpression',path:buildPath(path),params:params||[],hash:hash||buildHash([])};}function buildPath(original){if(typeof original==='string'){return{type:'PathExpression',original:original,parts:original.split('.')};}else{return original;}}function buildString(value){return{type:'StringLiteral',value:value,original:value};}function buildBoolean(value){return{type:'BooleanLiteral',value:value,original:value};}function buildNumber(value){return{type:'NumberLiteral',value:value,original:value};}function buildNull(){return{type:'NullLiteral',value:null,original:null};}function buildUndefined(){return{type:'UndefinedLiteral',value:undefined,original:undefined};}// Miscellaneous
	function buildHash(pairs){return{type:'Hash',pairs:pairs||[]};}function buildPair(key,value){return{type:'HashPair',key:key,value:value};}function buildProgram(body,blockParams,loc){return{type:'Program',body:body||[],blockParams:blockParams||[],loc:buildLoc(loc)};}function buildSource(source){return source||null;}function buildPosition(line,column){return{line:typeof line==='number'?line:null,column:typeof column==='number'?column:null};}function buildLoc(startLine,startColumn,endLine,endColumn,source){if(arguments.length===1){var loc=startLine;if((typeof loc==='undefined'?'undefined':_typeof(loc))==='object'){return{source:buildSource(loc.source),start:buildPosition(loc.start.line,loc.start.column),end:buildPosition(loc.end.line,loc.end.column)};}else{return null;}}else{return{source:buildSource(source),start:buildPosition(startLine,startColumn),end:buildPosition(endLine,endColumn)};}}exports.default={mustache:buildMustache,block:buildBlock,partial:buildPartial,comment:buildComment,element:buildElement,elementModifier:buildElementModifier,component:buildComponent,attr:buildAttr,text:buildText,sexpr:buildSexpr,path:buildPath,string:buildString,boolean:buildBoolean,number:buildNumber,undefined:buildUndefined,null:buildNull,concat:buildConcat,hash:buildHash,pair:buildPair,program:buildProgram,loc:buildLoc,pos:buildPosition};/***/},/* 13 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=build;function build(ast){if(!ast){return'';}var output=[];switch(ast.type){case'Program':{var chainBlock=ast.chained&&ast.body[0];if(chainBlock){chainBlock.chained=true;}var body=buildEach(ast.body).join('');output.push(body);}break;case'ElementNode':output.push('<',ast.tag);if(ast.attributes.length){output.push(' ',buildEach(ast.attributes).join(' '));}if(ast.modifiers.length){output.push(' ',buildEach(ast.modifiers).join(' '));}output.push('>');output.push.apply(output,buildEach(ast.children));output.push('</',ast.tag,'>');break;case'AttrNode':output.push(ast.name,'=');var value=build(ast.value);if(ast.value.type==='TextNode'){output.push('"',value,'"');}else{output.push(value);}break;case'ConcatStatement':output.push('"');ast.parts.forEach(function(node){if(node.type==='StringLiteral'){output.push(node.original);}else{output.push(build(node));}});output.push('"');break;case'TextNode':output.push(ast.chars);break;case'MustacheStatement':{output.push(compactJoin(['{{',pathParams(ast),'}}']));}break;case'ElementModifierStatement':{output.push(compactJoin(['{{',pathParams(ast),'}}']));}break;case'PathExpression':output.push(ast.original);break;case'SubExpression':{output.push('(',pathParams(ast),')');}break;case'BooleanLiteral':output.push(ast.value?'true':false);break;case'BlockStatement':{var lines=[];if(ast.chained){lines.push(['{{else ',pathParams(ast),'}}'].join(''));}else{lines.push(openBlock(ast));}lines.push(build(ast.program));if(ast.inverse){if(!ast.inverse.chained){lines.push('{{else}}');}lines.push(build(ast.inverse));}if(!ast.chained){lines.push(closeBlock(ast));}output.push(lines.join(''));}break;case'PartialStatement':{output.push(compactJoin(['{{>',pathParams(ast),'}}']));}break;case'CommentStatement':{output.push(compactJoin(['<!--',ast.value,'-->']));}break;case'StringLiteral':{output.push('"'+ast.value+'"');}break;case'NumberLiteral':{output.push(ast.value);}break;case'UndefinedLiteral':{output.push('undefined');}break;case'NullLiteral':{output.push('null');}break;case'Hash':{output.push(ast.pairs.map(function(pair){return build(pair);}).join(' '));}break;case'HashPair':{output.push(ast.key+'='+build(ast.value));}break;}return output.join('');}function compact(array){var newArray=[];array.forEach(function(a){if(typeof a!=='undefined'&&a!==null&&a!==''){newArray.push(a);}});return newArray;}function buildEach(asts){var output=[];asts.forEach(function(node){output.push(build(node));});return output;}function pathParams(ast){var name=build(ast.name);var path=build(ast.path);var params=buildEach(ast.params).join(' ');var hash=build(ast.hash);return compactJoin([name,path,params,hash],' ');}function compactJoin(array,delimiter){return compact(array).join(delimiter||'');}function blockParams(block){var params=block.program.blockParams;if(params.length){return' as |'+params.join(',')+'|';}}function openBlock(block){return['{{#',pathParams(block),blockParams(block),'}}'].join('');}function closeBlock(block){return['{{/',build(block.path),'}}'].join('');}/***/},/* 14 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.default=traverse;exports.normalizeVisitor=normalizeVisitor;var _visitorKeys=__webpack_require__(15);var _visitorKeys2=_interopRequireDefault(_visitorKeys);var _errors=__webpack_require__(16);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function visitNode(visitor,node){var handler=visitor[node.type]||visitor.All;var result=void 0;if(handler&&handler.enter){result=handler.enter.call(null,node);}if(result===undefined){var keys=_visitorKeys2.default[node.type];for(var i=0;i<keys.length;i++){visitKey(visitor,handler,node,keys[i]);}if(handler&&handler.exit){result=handler.exit.call(null,node);}}return result;}function visitKey(visitor,handler,node,key){var value=node[key];if(!value){return;}var keyHandler=handler&&(handler.keys[key]||handler.keys.All);var result=void 0;if(keyHandler&&keyHandler.enter){result=keyHandler.enter.call(null,node,key);if(result!==undefined){throw(0,_errors.cannotReplaceOrRemoveInKeyHandlerYet)(node,key);}}if(Array.isArray(value)){visitArray(visitor,value);}else{var _result=visitNode(visitor,value);if(_result!==undefined){assignKey(node,key,_result);}}if(keyHandler&&keyHandler.exit){result=keyHandler.exit.call(null,node,key);if(result!==undefined){throw(0,_errors.cannotReplaceOrRemoveInKeyHandlerYet)(node,key);}}}function visitArray(visitor,array){for(var i=0;i<array.length;i++){var result=visitNode(visitor,array[i]);if(result!==undefined){i+=spliceArray(array,i,result)-1;}}}function assignKey(node,key,result){if(result===null){throw(0,_errors.cannotRemoveNode)(node[key],node,key);}else if(Array.isArray(result)){if(result.length===1){node[key]=result[0];}else{if(result.length===0){throw(0,_errors.cannotRemoveNode)(node[key],node,key);}else{throw(0,_errors.cannotReplaceNode)(node[key],node,key);}}}else{node[key]=result;}}function spliceArray(array,index,result){if(result===null){array.splice(index,1);return 0;}else if(Array.isArray(result)){array.splice.apply(array,[index,1].concat(_toConsumableArray(result)));return result.length;}else{array.splice(index,1,result);return 1;}}function traverse(node,visitor){visitNode(normalizeVisitor(visitor),node);}function normalizeVisitor(visitor){var normalizedVisitor={};for(var type in visitor){var handler=visitor[type]||visitor.All;var normalizedKeys={};if((typeof handler==='undefined'?'undefined':_typeof(handler))==='object'){var keys=handler.keys;if(keys){for(var key in keys){var keyHandler=keys[key];if((typeof keyHandler==='undefined'?'undefined':_typeof(keyHandler))==='object'){normalizedKeys[key]={enter:typeof keyHandler.enter==='function'?keyHandler.enter:null,exit:typeof keyHandler.exit==='function'?keyHandler.exit:null};}else if(typeof keyHandler==='function'){normalizedKeys[key]={enter:keyHandler,exit:null};}}}normalizedVisitor[type]={enter:typeof handler.enter==='function'?handler.enter:null,exit:typeof handler.exit==='function'?handler.exit:null,keys:normalizedKeys};}else if(typeof handler==='function'){normalizedVisitor[type]={enter:handler,exit:null,keys:normalizedKeys};}}return normalizedVisitor;}/***/},/* 15 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default={Program:['body'],MustacheStatement:['path','params','hash'],BlockStatement:['path','params','hash','program','inverse'],ElementModifierStatement:['path','params','hash'],PartialStatement:['name','params','hash'],CommentStatement:[],ElementNode:['attributes','modifiers','children'],ComponentNode:['attributes','program'],AttrNode:['value'],TextNode:[],ConcatStatement:['parts'],SubExpression:['path','params','hash'],PathExpression:[],StringLiteral:[],BooleanLiteral:[],NumberLiteral:[],NullLiteral:[],UndefinedLiteral:[],Hash:['pairs'],HashPair:['value']};/***/},/* 16 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.cannotRemoveNode=cannotRemoveNode;exports.cannotReplaceNode=cannotReplaceNode;exports.cannotReplaceOrRemoveInKeyHandlerYet=cannotReplaceOrRemoveInKeyHandlerYet;function TraversalError(message,node,parent,key){this.name='TraversalError';this.message=message;this.node=node;this.parent=parent;this.key=key;}TraversalError.prototype=Object.create(Error.prototype);TraversalError.prototype.constructor=TraversalError;exports.default=TraversalError;function cannotRemoveNode(node,parent,key){return new TraversalError('Cannot remove a node unless it is part of an array',node,parent,key);}function cannotReplaceNode(node,parent,key){return new TraversalError('Cannot replace a node with multiple nodes unless it is part of an array',node,parent,key);}function cannotReplaceOrRemoveInKeyHandlerYet(node,key){return new TraversalError('Replacing and removing in key handlers is not yet supported.',node,null,key);}/***/},/* 17 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});function Walker(order){this.order=order;this.stack=[];}exports.default=Walker;Walker.prototype.visit=function(node,callback){if(!node){return;}this.stack.push(node);if(this.order==='post'){this.children(node,callback);callback(node,this);}else{callback(node,this);this.children(node,callback);}this.stack.pop();};var visitors={Program:function Program(walker,node,callback){for(var i=0;i<node.body.length;i++){walker.visit(node.body[i],callback);}},ElementNode:function ElementNode(walker,node,callback){for(var i=0;i<node.children.length;i++){walker.visit(node.children[i],callback);}},BlockStatement:function BlockStatement(walker,node,callback){walker.visit(node.program,callback);walker.visit(node.inverse,callback);},ComponentNode:function ComponentNode(walker,node,callback){walker.visit(node.program,callback);}};Walker.prototype.children=function(node,callback){var visitor=visitors[node.type];if(visitor){visitor(this,node,callback);}};/***/},/* 18 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utils=__webpack_require__(19);function EventedTokenizer(delegate,entityParser){this.delegate=delegate;this.entityParser=entityParser;this.state=null;this.input=null;this.index=-1;this.line=-1;this.column=-1;this.tagLine=-1;this.tagColumn=-1;this.reset();}EventedTokenizer.prototype={reset:function reset(){this.state='beforeData';this.input='';this.index=0;this.line=1;this.column=0;this.tagLine=-1;this.tagColumn=-1;this.delegate.reset();},tokenize:function tokenize(input){this.reset();this.tokenizePart(input);this.tokenizeEOF();},tokenizePart:function tokenizePart(input){this.input+=(0,_utils.preprocessInput)(input);while(this.index<this.input.length){this.states[this.state].call(this);}},tokenizeEOF:function tokenizeEOF(){this.flushData();},flushData:function flushData(){if(this.state==='data'){this.delegate.finishData();this.state='beforeData';}},peek:function peek(){return this.input.charAt(this.index);},consume:function consume(){var char=this.peek();this.index++;if(char==='\n'){this.line++;this.column=0;}else{this.column++;}return char;},consumeCharRef:function consumeCharRef(){var endIndex=this.input.indexOf(';',this.index);if(endIndex===-1){return;}var entity=this.input.slice(this.index,endIndex);var chars=this.entityParser.parse(entity);if(chars){var count=entity.length;// consume the entity chars
	while(count){this.consume();count--;}// consume the `;`
	this.consume();return chars;}},markTagStart:function markTagStart(){// these properties to be removed in next major bump
	this.tagLine=this.line;this.tagColumn=this.column;if(this.delegate.tagOpen){this.delegate.tagOpen();}},states:{beforeData:function beforeData(){var char=this.peek();if(char==='<'){this.state='tagOpen';this.markTagStart();this.consume();}else{this.state='data';this.delegate.beginData();}},data:function data(){var char=this.peek();if(char==='<'){this.delegate.finishData();this.state='tagOpen';this.markTagStart();this.consume();}else if(char==='&'){this.consume();this.delegate.appendToData(this.consumeCharRef()||'&');}else{this.consume();this.delegate.appendToData(char);}},tagOpen:function tagOpen(){var char=this.consume();if(char==='!'){this.state='markupDeclaration';}else if(char==='/'){this.state='endTagOpen';}else if((0,_utils.isAlpha)(char)){this.state='tagName';this.delegate.beginStartTag();this.delegate.appendToTagName(char.toLowerCase());}},markupDeclaration:function markupDeclaration(){var char=this.consume();if(char==='-'&&this.input.charAt(this.index)==='-'){this.consume();this.state='commentStart';this.delegate.beginComment();}},commentStart:function commentStart(){var char=this.consume();if(char==='-'){this.state='commentStartDash';}else if(char==='>'){this.delegate.finishComment();this.state='beforeData';}else{this.delegate.appendToCommentData(char);this.state='comment';}},commentStartDash:function commentStartDash(){var char=this.consume();if(char==='-'){this.state='commentEnd';}else if(char==='>'){this.delegate.finishComment();this.state='beforeData';}else{this.delegate.appendToCommentData('-');this.state='comment';}},comment:function comment(){var char=this.consume();if(char==='-'){this.state='commentEndDash';}else{this.delegate.appendToCommentData(char);}},commentEndDash:function commentEndDash(){var char=this.consume();if(char==='-'){this.state='commentEnd';}else{this.delegate.appendToCommentData('-'+char);this.state='comment';}},commentEnd:function commentEnd(){var char=this.consume();if(char==='>'){this.delegate.finishComment();this.state='beforeData';}else{this.delegate.appendToCommentData('--'+char);this.state='comment';}},tagName:function tagName(){var char=this.consume();if((0,_utils.isSpace)(char)){this.state='beforeAttributeName';}else if(char==='/'){this.state='selfClosingStartTag';}else if(char==='>'){this.delegate.finishTag();this.state='beforeData';}else{this.delegate.appendToTagName(char);}},beforeAttributeName:function beforeAttributeName(){var char=this.peek();if((0,_utils.isSpace)(char)){this.consume();return;}else if(char==='/'){this.state='selfClosingStartTag';this.consume();}else if(char==='>'){this.consume();this.delegate.finishTag();this.state='beforeData';}else{this.state='attributeName';this.delegate.beginAttribute();this.consume();this.delegate.appendToAttributeName(char);}},attributeName:function attributeName(){var char=this.peek();if((0,_utils.isSpace)(char)){this.state='afterAttributeName';this.consume();}else if(char==='/'){this.delegate.beginAttributeValue(false);this.delegate.finishAttributeValue();this.consume();this.state='selfClosingStartTag';}else if(char==='='){this.state='beforeAttributeValue';this.consume();}else if(char==='>'){this.delegate.beginAttributeValue(false);this.delegate.finishAttributeValue();this.consume();this.delegate.finishTag();this.state='beforeData';}else{this.consume();this.delegate.appendToAttributeName(char);}},afterAttributeName:function afterAttributeName(){var char=this.peek();if((0,_utils.isSpace)(char)){this.consume();return;}else if(char==='/'){this.delegate.beginAttributeValue(false);this.delegate.finishAttributeValue();this.consume();this.state='selfClosingStartTag';}else if(char==='='){this.consume();this.state='beforeAttributeValue';}else if(char==='>'){this.delegate.beginAttributeValue(false);this.delegate.finishAttributeValue();this.consume();this.delegate.finishTag();this.state='beforeData';}else{this.delegate.beginAttributeValue(false);this.delegate.finishAttributeValue();this.consume();this.state='attributeName';this.delegate.beginAttribute();this.delegate.appendToAttributeName(char);}},beforeAttributeValue:function beforeAttributeValue(){var char=this.peek();if((0,_utils.isSpace)(char)){this.consume();}else if(char==='"'){this.state='attributeValueDoubleQuoted';this.delegate.beginAttributeValue(true);this.consume();}else if(char==='\''){this.state='attributeValueSingleQuoted';this.delegate.beginAttributeValue(true);this.consume();}else if(char==='>'){this.delegate.beginAttributeValue(false);this.delegate.finishAttributeValue();this.consume();this.delegate.finishTag();this.state='beforeData';}else{this.state='attributeValueUnquoted';this.delegate.beginAttributeValue(false);this.consume();this.delegate.appendToAttributeValue(char);}},attributeValueDoubleQuoted:function attributeValueDoubleQuoted(){var char=this.consume();if(char==='"'){this.delegate.finishAttributeValue();this.state='afterAttributeValueQuoted';}else if(char==='&'){this.delegate.appendToAttributeValue(this.consumeCharRef('"')||'&');}else{this.delegate.appendToAttributeValue(char);}},attributeValueSingleQuoted:function attributeValueSingleQuoted(){var char=this.consume();if(char==='\''){this.delegate.finishAttributeValue();this.state='afterAttributeValueQuoted';}else if(char==='&'){this.delegate.appendToAttributeValue(this.consumeCharRef('\'')||'&');}else{this.delegate.appendToAttributeValue(char);}},attributeValueUnquoted:function attributeValueUnquoted(){var char=this.peek();if((0,_utils.isSpace)(char)){this.delegate.finishAttributeValue();this.consume();this.state='beforeAttributeName';}else if(char==='&'){this.consume();this.delegate.appendToAttributeValue(this.consumeCharRef('>')||'&');}else if(char==='>'){this.delegate.finishAttributeValue();this.consume();this.delegate.finishTag();this.state='beforeData';}else{this.consume();this.delegate.appendToAttributeValue(char);}},afterAttributeValueQuoted:function afterAttributeValueQuoted(){var char=this.peek();if((0,_utils.isSpace)(char)){this.consume();this.state='beforeAttributeName';}else if(char==='/'){this.consume();this.state='selfClosingStartTag';}else if(char==='>'){this.consume();this.delegate.finishTag();this.state='beforeData';}else{this.state='beforeAttributeName';}},selfClosingStartTag:function selfClosingStartTag(){var char=this.peek();if(char==='>'){this.consume();this.delegate.markTagAsSelfClosing();this.delegate.finishTag();this.state='beforeData';}else{this.state='beforeAttributeName';}},endTagOpen:function endTagOpen(){var char=this.consume();if((0,_utils.isAlpha)(char)){this.state='tagName';this.delegate.beginEndTag();this.delegate.appendToTagName(char.toLowerCase());}}}};exports.default=EventedTokenizer;/***/},/* 19 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.isSpace=isSpace;exports.isAlpha=isAlpha;exports.preprocessInput=preprocessInput;var WSP=/[\t\n\f ]/;var ALPHA=/[A-Za-z]/;var CRLF=/\r\n?/g;function isSpace(char){return WSP.test(char);}function isAlpha(char){return ALPHA.test(char);}function preprocessInput(input){return input.replace(CRLF,'\n');}/***/},/* 20 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});function EntityParser(named){this.named=named;}var HEXCHARCODE=/^#[xX]([A-Fa-f0-9]+)$/;var CHARCODE=/^#([0-9]+)$/;var NAMED=/^([A-Za-z0-9]+)$/;EntityParser.prototype.parse=function(entity){if(!entity){return;}var matches=entity.match(HEXCHARCODE);if(matches){return String.fromCharCode(parseInt(matches[1],16));}matches=entity.match(CHARCODE);if(matches){return String.fromCharCode(parseInt(matches[1],10));}matches=entity.match(NAMED);if(matches){return this.named[matches[1]];}};exports.default=EntityParser;/***/},/* 21 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default={Aacute:'Á',aacute:'á',Abreve:'Ă',abreve:'ă',ac:'∾',acd:'∿',acE:'∾̳',Acirc:'Â',acirc:'â',acute:'´',Acy:'А',acy:'а',AElig:'Æ',aelig:'æ',af:'⁡',Afr:'𝔄',afr:'𝔞',Agrave:'À',agrave:'à',alefsym:'ℵ',aleph:'ℵ',Alpha:'Α',alpha:'α',Amacr:'Ā',amacr:'ā',amalg:'⨿',AMP:'&',amp:'&',And:'⩓',and:'∧',andand:'⩕',andd:'⩜',andslope:'⩘',andv:'⩚',ang:'∠',ange:'⦤',angle:'∠',angmsd:'∡',angmsdaa:'⦨',angmsdab:'⦩',angmsdac:'⦪',angmsdad:'⦫',angmsdae:'⦬',angmsdaf:'⦭',angmsdag:'⦮',angmsdah:'⦯',angrt:'∟',angrtvb:'⊾',angrtvbd:'⦝',angsph:'∢',angst:'Å',angzarr:'⍼',Aogon:'Ą',aogon:'ą',Aopf:'𝔸',aopf:'𝕒',ap:'≈',apacir:'⩯',apE:'⩰',ape:'≊',apid:'≋',apos:'\'',ApplyFunction:'⁡',approx:'≈',approxeq:'≊',Aring:'Å',aring:'å',Ascr:'𝒜',ascr:'𝒶',Assign:'≔',ast:'*',asymp:'≈',asympeq:'≍',Atilde:'Ã',atilde:'ã',Auml:'Ä',auml:'ä',awconint:'∳',awint:'⨑',backcong:'≌',backepsilon:'϶',backprime:'‵',backsim:'∽',backsimeq:'⋍',Backslash:'∖',Barv:'⫧',barvee:'⊽',Barwed:'⌆',barwed:'⌅',barwedge:'⌅',bbrk:'⎵',bbrktbrk:'⎶',bcong:'≌',Bcy:'Б',bcy:'б',bdquo:'„',becaus:'∵',Because:'∵',because:'∵',bemptyv:'⦰',bepsi:'϶',bernou:'ℬ',Bernoullis:'ℬ',Beta:'Β',beta:'β',beth:'ℶ',between:'≬',Bfr:'𝔅',bfr:'𝔟',bigcap:'⋂',bigcirc:'◯',bigcup:'⋃',bigodot:'⨀',bigoplus:'⨁',bigotimes:'⨂',bigsqcup:'⨆',bigstar:'★',bigtriangledown:'▽',bigtriangleup:'△',biguplus:'⨄',bigvee:'⋁',bigwedge:'⋀',bkarow:'⤍',blacklozenge:'⧫',blacksquare:'▪',blacktriangle:'▴',blacktriangledown:'▾',blacktriangleleft:'◂',blacktriangleright:'▸',blank:'␣',blk12:'▒',blk14:'░',blk34:'▓',block:'█',bne:'=⃥',bnequiv:'≡⃥',bNot:'⫭',bnot:'⌐',Bopf:'𝔹',bopf:'𝕓',bot:'⊥',bottom:'⊥',bowtie:'⋈',boxbox:'⧉',boxDL:'╗',boxDl:'╖',boxdL:'╕',boxdl:'┐',boxDR:'╔',boxDr:'╓',boxdR:'╒',boxdr:'┌',boxH:'═',boxh:'─',boxHD:'╦',boxHd:'╤',boxhD:'╥',boxhd:'┬',boxHU:'╩',boxHu:'╧',boxhU:'╨',boxhu:'┴',boxminus:'⊟',boxplus:'⊞',boxtimes:'⊠',boxUL:'╝',boxUl:'╜',boxuL:'╛',boxul:'┘',boxUR:'╚',boxUr:'╙',boxuR:'╘',boxur:'└',boxV:'║',boxv:'│',boxVH:'╬',boxVh:'╫',boxvH:'╪',boxvh:'┼',boxVL:'╣',boxVl:'╢',boxvL:'╡',boxvl:'┤',boxVR:'╠',boxVr:'╟',boxvR:'╞',boxvr:'├',bprime:'‵',Breve:'˘',breve:'˘',brvbar:'¦',Bscr:'ℬ',bscr:'𝒷',bsemi:'⁏',bsim:'∽',bsime:'⋍',bsol:'\\',bsolb:'⧅',bsolhsub:'⟈',bull:'•',bullet:'•',bump:'≎',bumpE:'⪮',bumpe:'≏',Bumpeq:'≎',bumpeq:'≏',Cacute:'Ć',cacute:'ć',Cap:'⋒',cap:'∩',capand:'⩄',capbrcup:'⩉',capcap:'⩋',capcup:'⩇',capdot:'⩀',CapitalDifferentialD:'ⅅ',caps:'∩︀',caret:'⁁',caron:'ˇ',Cayleys:'ℭ',ccaps:'⩍',Ccaron:'Č',ccaron:'č',Ccedil:'Ç',ccedil:'ç',Ccirc:'Ĉ',ccirc:'ĉ',Cconint:'∰',ccups:'⩌',ccupssm:'⩐',Cdot:'Ċ',cdot:'ċ',cedil:'¸',Cedilla:'¸',cemptyv:'⦲',cent:'¢',CenterDot:'·',centerdot:'·',Cfr:'ℭ',cfr:'𝔠',CHcy:'Ч',chcy:'ч',check:'✓',checkmark:'✓',Chi:'Χ',chi:'χ',cir:'○',circ:'ˆ',circeq:'≗',circlearrowleft:'↺',circlearrowright:'↻',circledast:'⊛',circledcirc:'⊚',circleddash:'⊝',CircleDot:'⊙',circledR:'®',circledS:'Ⓢ',CircleMinus:'⊖',CirclePlus:'⊕',CircleTimes:'⊗',cirE:'⧃',cire:'≗',cirfnint:'⨐',cirmid:'⫯',cirscir:'⧂',ClockwiseContourIntegral:'∲',CloseCurlyDoubleQuote:'”',CloseCurlyQuote:'’',clubs:'♣',clubsuit:'♣',Colon:'∷',colon:':',Colone:'⩴',colone:'≔',coloneq:'≔',comma:',',commat:'@',comp:'∁',compfn:'∘',complement:'∁',complexes:'ℂ',cong:'≅',congdot:'⩭',Congruent:'≡',Conint:'∯',conint:'∮',ContourIntegral:'∮',Copf:'ℂ',copf:'𝕔',coprod:'∐',Coproduct:'∐',COPY:'©',copy:'©',copysr:'℗',CounterClockwiseContourIntegral:'∳',crarr:'↵',Cross:'⨯',cross:'✗',Cscr:'𝒞',cscr:'𝒸',csub:'⫏',csube:'⫑',csup:'⫐',csupe:'⫒',ctdot:'⋯',cudarrl:'⤸',cudarrr:'⤵',cuepr:'⋞',cuesc:'⋟',cularr:'↶',cularrp:'⤽',Cup:'⋓',cup:'∪',cupbrcap:'⩈',CupCap:'≍',cupcap:'⩆',cupcup:'⩊',cupdot:'⊍',cupor:'⩅',cups:'∪︀',curarr:'↷',curarrm:'⤼',curlyeqprec:'⋞',curlyeqsucc:'⋟',curlyvee:'⋎',curlywedge:'⋏',curren:'¤',curvearrowleft:'↶',curvearrowright:'↷',cuvee:'⋎',cuwed:'⋏',cwconint:'∲',cwint:'∱',cylcty:'⌭',Dagger:'‡',dagger:'†',daleth:'ℸ',Darr:'↡',dArr:'⇓',darr:'↓',dash:'‐',Dashv:'⫤',dashv:'⊣',dbkarow:'⤏',dblac:'˝',Dcaron:'Ď',dcaron:'ď',Dcy:'Д',dcy:'д',DD:'ⅅ',dd:'ⅆ',ddagger:'‡',ddarr:'⇊',DDotrahd:'⤑',ddotseq:'⩷',deg:'°',Del:'∇',Delta:'Δ',delta:'δ',demptyv:'⦱',dfisht:'⥿',Dfr:'𝔇',dfr:'𝔡',dHar:'⥥',dharl:'⇃',dharr:'⇂',DiacriticalAcute:'´',DiacriticalDot:'˙',DiacriticalDoubleAcute:'˝',DiacriticalGrave:'`',DiacriticalTilde:'˜',diam:'⋄',Diamond:'⋄',diamond:'⋄',diamondsuit:'♦',diams:'♦',die:'¨',DifferentialD:'ⅆ',digamma:'ϝ',disin:'⋲',div:'÷',divide:'÷',divideontimes:'⋇',divonx:'⋇',DJcy:'Ђ',djcy:'ђ',dlcorn:'⌞',dlcrop:'⌍',dollar:'$',Dopf:'𝔻',dopf:'𝕕',Dot:'¨',dot:'˙',DotDot:'⃜',doteq:'≐',doteqdot:'≑',DotEqual:'≐',dotminus:'∸',dotplus:'∔',dotsquare:'⊡',doublebarwedge:'⌆',DoubleContourIntegral:'∯',DoubleDot:'¨',DoubleDownArrow:'⇓',DoubleLeftArrow:'⇐',DoubleLeftRightArrow:'⇔',DoubleLeftTee:'⫤',DoubleLongLeftArrow:'⟸',DoubleLongLeftRightArrow:'⟺',DoubleLongRightArrow:'⟹',DoubleRightArrow:'⇒',DoubleRightTee:'⊨',DoubleUpArrow:'⇑',DoubleUpDownArrow:'⇕',DoubleVerticalBar:'∥',DownArrow:'↓',Downarrow:'⇓',downarrow:'↓',DownArrowBar:'⤓',DownArrowUpArrow:'⇵',DownBreve:'̑',downdownarrows:'⇊',downharpoonleft:'⇃',downharpoonright:'⇂',DownLeftRightVector:'⥐',DownLeftTeeVector:'⥞',DownLeftVector:'↽',DownLeftVectorBar:'⥖',DownRightTeeVector:'⥟',DownRightVector:'⇁',DownRightVectorBar:'⥗',DownTee:'⊤',DownTeeArrow:'↧',drbkarow:'⤐',drcorn:'⌟',drcrop:'⌌',Dscr:'𝒟',dscr:'𝒹',DScy:'Ѕ',dscy:'ѕ',dsol:'⧶',Dstrok:'Đ',dstrok:'đ',dtdot:'⋱',dtri:'▿',dtrif:'▾',duarr:'⇵',duhar:'⥯',dwangle:'⦦',DZcy:'Џ',dzcy:'џ',dzigrarr:'⟿',Eacute:'É',eacute:'é',easter:'⩮',Ecaron:'Ě',ecaron:'ě',ecir:'≖',Ecirc:'Ê',ecirc:'ê',ecolon:'≕',Ecy:'Э',ecy:'э',eDDot:'⩷',Edot:'Ė',eDot:'≑',edot:'ė',ee:'ⅇ',efDot:'≒',Efr:'𝔈',efr:'𝔢',eg:'⪚',Egrave:'È',egrave:'è',egs:'⪖',egsdot:'⪘',el:'⪙',Element:'∈',elinters:'⏧',ell:'ℓ',els:'⪕',elsdot:'⪗',Emacr:'Ē',emacr:'ē',empty:'∅',emptyset:'∅',EmptySmallSquare:'◻',emptyv:'∅',EmptyVerySmallSquare:'▫',emsp:' ',emsp13:' ',emsp14:' ',ENG:'Ŋ',eng:'ŋ',ensp:' ',Eogon:'Ę',eogon:'ę',Eopf:'𝔼',eopf:'𝕖',epar:'⋕',eparsl:'⧣',eplus:'⩱',epsi:'ε',Epsilon:'Ε',epsilon:'ε',epsiv:'ϵ',eqcirc:'≖',eqcolon:'≕',eqsim:'≂',eqslantgtr:'⪖',eqslantless:'⪕',Equal:'⩵',equals:'=',EqualTilde:'≂',equest:'≟',Equilibrium:'⇌',equiv:'≡',equivDD:'⩸',eqvparsl:'⧥',erarr:'⥱',erDot:'≓',Escr:'ℰ',escr:'ℯ',esdot:'≐',Esim:'⩳',esim:'≂',Eta:'Η',eta:'η',ETH:'Ð',eth:'ð',Euml:'Ë',euml:'ë',euro:'€',excl:'!',exist:'∃',Exists:'∃',expectation:'ℰ',ExponentialE:'ⅇ',exponentiale:'ⅇ',fallingdotseq:'≒',Fcy:'Ф',fcy:'ф',female:'♀',ffilig:'ﬃ',fflig:'ﬀ',ffllig:'ﬄ',Ffr:'𝔉',ffr:'𝔣',filig:'ﬁ',FilledSmallSquare:'◼',FilledVerySmallSquare:'▪',fjlig:'fj',flat:'♭',fllig:'ﬂ',fltns:'▱',fnof:'ƒ',Fopf:'𝔽',fopf:'𝕗',ForAll:'∀',forall:'∀',fork:'⋔',forkv:'⫙',Fouriertrf:'ℱ',fpartint:'⨍',frac12:'½',frac13:'⅓',frac14:'¼',frac15:'⅕',frac16:'⅙',frac18:'⅛',frac23:'⅔',frac25:'⅖',frac34:'¾',frac35:'⅗',frac38:'⅜',frac45:'⅘',frac56:'⅚',frac58:'⅝',frac78:'⅞',frasl:'⁄',frown:'⌢',Fscr:'ℱ',fscr:'𝒻',gacute:'ǵ',Gamma:'Γ',gamma:'γ',Gammad:'Ϝ',gammad:'ϝ',gap:'⪆',Gbreve:'Ğ',gbreve:'ğ',Gcedil:'Ģ',Gcirc:'Ĝ',gcirc:'ĝ',Gcy:'Г',gcy:'г',Gdot:'Ġ',gdot:'ġ',gE:'≧',ge:'≥',gEl:'⪌',gel:'⋛',geq:'≥',geqq:'≧',geqslant:'⩾',ges:'⩾',gescc:'⪩',gesdot:'⪀',gesdoto:'⪂',gesdotol:'⪄',gesl:'⋛︀',gesles:'⪔',Gfr:'𝔊',gfr:'𝔤',Gg:'⋙',gg:'≫',ggg:'⋙',gimel:'ℷ',GJcy:'Ѓ',gjcy:'ѓ',gl:'≷',gla:'⪥',glE:'⪒',glj:'⪤',gnap:'⪊',gnapprox:'⪊',gnE:'≩',gne:'⪈',gneq:'⪈',gneqq:'≩',gnsim:'⋧',Gopf:'𝔾',gopf:'𝕘',grave:'`',GreaterEqual:'≥',GreaterEqualLess:'⋛',GreaterFullEqual:'≧',GreaterGreater:'⪢',GreaterLess:'≷',GreaterSlantEqual:'⩾',GreaterTilde:'≳',Gscr:'𝒢',gscr:'ℊ',gsim:'≳',gsime:'⪎',gsiml:'⪐',GT:'>',Gt:'≫',gt:'>',gtcc:'⪧',gtcir:'⩺',gtdot:'⋗',gtlPar:'⦕',gtquest:'⩼',gtrapprox:'⪆',gtrarr:'⥸',gtrdot:'⋗',gtreqless:'⋛',gtreqqless:'⪌',gtrless:'≷',gtrsim:'≳',gvertneqq:'≩︀',gvnE:'≩︀',Hacek:'ˇ',hairsp:' ',half:'½',hamilt:'ℋ',HARDcy:'Ъ',hardcy:'ъ',hArr:'⇔',harr:'↔',harrcir:'⥈',harrw:'↭',Hat:'^',hbar:'ℏ',Hcirc:'Ĥ',hcirc:'ĥ',hearts:'♥',heartsuit:'♥',hellip:'…',hercon:'⊹',Hfr:'ℌ',hfr:'𝔥',HilbertSpace:'ℋ',hksearow:'⤥',hkswarow:'⤦',hoarr:'⇿',homtht:'∻',hookleftarrow:'↩',hookrightarrow:'↪',Hopf:'ℍ',hopf:'𝕙',horbar:'―',HorizontalLine:'─',Hscr:'ℋ',hscr:'𝒽',hslash:'ℏ',Hstrok:'Ħ',hstrok:'ħ',HumpDownHump:'≎',HumpEqual:'≏',hybull:'⁃',hyphen:'‐',Iacute:'Í',iacute:'í',ic:'⁣',Icirc:'Î',icirc:'î',Icy:'И',icy:'и',Idot:'İ',IEcy:'Е',iecy:'е',iexcl:'¡',iff:'⇔',Ifr:'ℑ',ifr:'𝔦',Igrave:'Ì',igrave:'ì',ii:'ⅈ',iiiint:'⨌',iiint:'∭',iinfin:'⧜',iiota:'℩',IJlig:'Ĳ',ijlig:'ĳ',Im:'ℑ',Imacr:'Ī',imacr:'ī',image:'ℑ',ImaginaryI:'ⅈ',imagline:'ℐ',imagpart:'ℑ',imath:'ı',imof:'⊷',imped:'Ƶ',Implies:'⇒',in:'∈',incare:'℅',infin:'∞',infintie:'⧝',inodot:'ı',Int:'∬',int:'∫',intcal:'⊺',integers:'ℤ',Integral:'∫',intercal:'⊺',Intersection:'⋂',intlarhk:'⨗',intprod:'⨼',InvisibleComma:'⁣',InvisibleTimes:'⁢',IOcy:'Ё',iocy:'ё',Iogon:'Į',iogon:'į',Iopf:'𝕀',iopf:'𝕚',Iota:'Ι',iota:'ι',iprod:'⨼',iquest:'¿',Iscr:'ℐ',iscr:'𝒾',isin:'∈',isindot:'⋵',isinE:'⋹',isins:'⋴',isinsv:'⋳',isinv:'∈',it:'⁢',Itilde:'Ĩ',itilde:'ĩ',Iukcy:'І',iukcy:'і',Iuml:'Ï',iuml:'ï',Jcirc:'Ĵ',jcirc:'ĵ',Jcy:'Й',jcy:'й',Jfr:'𝔍',jfr:'𝔧',jmath:'ȷ',Jopf:'𝕁',jopf:'𝕛',Jscr:'𝒥',jscr:'𝒿',Jsercy:'Ј',jsercy:'ј',Jukcy:'Є',jukcy:'є',Kappa:'Κ',kappa:'κ',kappav:'ϰ',Kcedil:'Ķ',kcedil:'ķ',Kcy:'К',kcy:'к',Kfr:'𝔎',kfr:'𝔨',kgreen:'ĸ',KHcy:'Х',khcy:'х',KJcy:'Ќ',kjcy:'ќ',Kopf:'𝕂',kopf:'𝕜',Kscr:'𝒦',kscr:'𝓀',lAarr:'⇚',Lacute:'Ĺ',lacute:'ĺ',laemptyv:'⦴',lagran:'ℒ',Lambda:'Λ',lambda:'λ',Lang:'⟪',lang:'⟨',langd:'⦑',langle:'⟨',lap:'⪅',Laplacetrf:'ℒ',laquo:'«',Larr:'↞',lArr:'⇐',larr:'←',larrb:'⇤',larrbfs:'⤟',larrfs:'⤝',larrhk:'↩',larrlp:'↫',larrpl:'⤹',larrsim:'⥳',larrtl:'↢',lat:'⪫',lAtail:'⤛',latail:'⤙',late:'⪭',lates:'⪭︀',lBarr:'⤎',lbarr:'⤌',lbbrk:'❲',lbrace:'{',lbrack:'[',lbrke:'⦋',lbrksld:'⦏',lbrkslu:'⦍',Lcaron:'Ľ',lcaron:'ľ',Lcedil:'Ļ',lcedil:'ļ',lceil:'⌈',lcub:'{',Lcy:'Л',lcy:'л',ldca:'⤶',ldquo:'“',ldquor:'„',ldrdhar:'⥧',ldrushar:'⥋',ldsh:'↲',lE:'≦',le:'≤',LeftAngleBracket:'⟨',LeftArrow:'←',Leftarrow:'⇐',leftarrow:'←',LeftArrowBar:'⇤',LeftArrowRightArrow:'⇆',leftarrowtail:'↢',LeftCeiling:'⌈',LeftDoubleBracket:'⟦',LeftDownTeeVector:'⥡',LeftDownVector:'⇃',LeftDownVectorBar:'⥙',LeftFloor:'⌊',leftharpoondown:'↽',leftharpoonup:'↼',leftleftarrows:'⇇',LeftRightArrow:'↔',Leftrightarrow:'⇔',leftrightarrow:'↔',leftrightarrows:'⇆',leftrightharpoons:'⇋',leftrightsquigarrow:'↭',LeftRightVector:'⥎',LeftTee:'⊣',LeftTeeArrow:'↤',LeftTeeVector:'⥚',leftthreetimes:'⋋',LeftTriangle:'⊲',LeftTriangleBar:'⧏',LeftTriangleEqual:'⊴',LeftUpDownVector:'⥑',LeftUpTeeVector:'⥠',LeftUpVector:'↿',LeftUpVectorBar:'⥘',LeftVector:'↼',LeftVectorBar:'⥒',lEg:'⪋',leg:'⋚',leq:'≤',leqq:'≦',leqslant:'⩽',les:'⩽',lescc:'⪨',lesdot:'⩿',lesdoto:'⪁',lesdotor:'⪃',lesg:'⋚︀',lesges:'⪓',lessapprox:'⪅',lessdot:'⋖',lesseqgtr:'⋚',lesseqqgtr:'⪋',LessEqualGreater:'⋚',LessFullEqual:'≦',LessGreater:'≶',lessgtr:'≶',LessLess:'⪡',lesssim:'≲',LessSlantEqual:'⩽',LessTilde:'≲',lfisht:'⥼',lfloor:'⌊',Lfr:'𝔏',lfr:'𝔩',lg:'≶',lgE:'⪑',lHar:'⥢',lhard:'↽',lharu:'↼',lharul:'⥪',lhblk:'▄',LJcy:'Љ',ljcy:'љ',Ll:'⋘',ll:'≪',llarr:'⇇',llcorner:'⌞',Lleftarrow:'⇚',llhard:'⥫',lltri:'◺',Lmidot:'Ŀ',lmidot:'ŀ',lmoust:'⎰',lmoustache:'⎰',lnap:'⪉',lnapprox:'⪉',lnE:'≨',lne:'⪇',lneq:'⪇',lneqq:'≨',lnsim:'⋦',loang:'⟬',loarr:'⇽',lobrk:'⟦',LongLeftArrow:'⟵',Longleftarrow:'⟸',longleftarrow:'⟵',LongLeftRightArrow:'⟷',Longleftrightarrow:'⟺',longleftrightarrow:'⟷',longmapsto:'⟼',LongRightArrow:'⟶',Longrightarrow:'⟹',longrightarrow:'⟶',looparrowleft:'↫',looparrowright:'↬',lopar:'⦅',Lopf:'𝕃',lopf:'𝕝',loplus:'⨭',lotimes:'⨴',lowast:'∗',lowbar:'_',LowerLeftArrow:'↙',LowerRightArrow:'↘',loz:'◊',lozenge:'◊',lozf:'⧫',lpar:'(',lparlt:'⦓',lrarr:'⇆',lrcorner:'⌟',lrhar:'⇋',lrhard:'⥭',lrm:'‎',lrtri:'⊿',lsaquo:'‹',Lscr:'ℒ',lscr:'𝓁',Lsh:'↰',lsh:'↰',lsim:'≲',lsime:'⪍',lsimg:'⪏',lsqb:'[',lsquo:'‘',lsquor:'‚',Lstrok:'Ł',lstrok:'ł',LT:'<',Lt:'≪',lt:'<',ltcc:'⪦',ltcir:'⩹',ltdot:'⋖',lthree:'⋋',ltimes:'⋉',ltlarr:'⥶',ltquest:'⩻',ltri:'◃',ltrie:'⊴',ltrif:'◂',ltrPar:'⦖',lurdshar:'⥊',luruhar:'⥦',lvertneqq:'≨︀',lvnE:'≨︀',macr:'¯',male:'♂',malt:'✠',maltese:'✠',Map:'⤅',map:'↦',mapsto:'↦',mapstodown:'↧',mapstoleft:'↤',mapstoup:'↥',marker:'▮',mcomma:'⨩',Mcy:'М',mcy:'м',mdash:'—',mDDot:'∺',measuredangle:'∡',MediumSpace:' ',Mellintrf:'ℳ',Mfr:'𝔐',mfr:'𝔪',mho:'℧',micro:'µ',mid:'∣',midast:'*',midcir:'⫰',middot:'·',minus:'−',minusb:'⊟',minusd:'∸',minusdu:'⨪',MinusPlus:'∓',mlcp:'⫛',mldr:'…',mnplus:'∓',models:'⊧',Mopf:'𝕄',mopf:'𝕞',mp:'∓',Mscr:'ℳ',mscr:'𝓂',mstpos:'∾',Mu:'Μ',mu:'μ',multimap:'⊸',mumap:'⊸',nabla:'∇',Nacute:'Ń',nacute:'ń',nang:'∠⃒',nap:'≉',napE:'⩰̸',napid:'≋̸',napos:'ŉ',napprox:'≉',natur:'♮',natural:'♮',naturals:'ℕ',nbsp:' ',nbump:'≎̸',nbumpe:'≏̸',ncap:'⩃',Ncaron:'Ň',ncaron:'ň',Ncedil:'Ņ',ncedil:'ņ',ncong:'≇',ncongdot:'⩭̸',ncup:'⩂',Ncy:'Н',ncy:'н',ndash:'–',ne:'≠',nearhk:'⤤',neArr:'⇗',nearr:'↗',nearrow:'↗',nedot:'≐̸',NegativeMediumSpace:'​',NegativeThickSpace:'​',NegativeThinSpace:'​',NegativeVeryThinSpace:'​',nequiv:'≢',nesear:'⤨',nesim:'≂̸',NestedGreaterGreater:'≫',NestedLessLess:'≪',NewLine:'\n',nexist:'∄',nexists:'∄',Nfr:'𝔑',nfr:'𝔫',ngE:'≧̸',nge:'≱',ngeq:'≱',ngeqq:'≧̸',ngeqslant:'⩾̸',nges:'⩾̸',nGg:'⋙̸',ngsim:'≵',nGt:'≫⃒',ngt:'≯',ngtr:'≯',nGtv:'≫̸',nhArr:'⇎',nharr:'↮',nhpar:'⫲',ni:'∋',nis:'⋼',nisd:'⋺',niv:'∋',NJcy:'Њ',njcy:'њ',nlArr:'⇍',nlarr:'↚',nldr:'‥',nlE:'≦̸',nle:'≰',nLeftarrow:'⇍',nleftarrow:'↚',nLeftrightarrow:'⇎',nleftrightarrow:'↮',nleq:'≰',nleqq:'≦̸',nleqslant:'⩽̸',nles:'⩽̸',nless:'≮',nLl:'⋘̸',nlsim:'≴',nLt:'≪⃒',nlt:'≮',nltri:'⋪',nltrie:'⋬',nLtv:'≪̸',nmid:'∤',NoBreak:'⁠',NonBreakingSpace:' ',Nopf:'ℕ',nopf:'𝕟',Not:'⫬',not:'¬',NotCongruent:'≢',NotCupCap:'≭',NotDoubleVerticalBar:'∦',NotElement:'∉',NotEqual:'≠',NotEqualTilde:'≂̸',NotExists:'∄',NotGreater:'≯',NotGreaterEqual:'≱',NotGreaterFullEqual:'≧̸',NotGreaterGreater:'≫̸',NotGreaterLess:'≹',NotGreaterSlantEqual:'⩾̸',NotGreaterTilde:'≵',NotHumpDownHump:'≎̸',NotHumpEqual:'≏̸',notin:'∉',notindot:'⋵̸',notinE:'⋹̸',notinva:'∉',notinvb:'⋷',notinvc:'⋶',NotLeftTriangle:'⋪',NotLeftTriangleBar:'⧏̸',NotLeftTriangleEqual:'⋬',NotLess:'≮',NotLessEqual:'≰',NotLessGreater:'≸',NotLessLess:'≪̸',NotLessSlantEqual:'⩽̸',NotLessTilde:'≴',NotNestedGreaterGreater:'⪢̸',NotNestedLessLess:'⪡̸',notni:'∌',notniva:'∌',notnivb:'⋾',notnivc:'⋽',NotPrecedes:'⊀',NotPrecedesEqual:'⪯̸',NotPrecedesSlantEqual:'⋠',NotReverseElement:'∌',NotRightTriangle:'⋫',NotRightTriangleBar:'⧐̸',NotRightTriangleEqual:'⋭',NotSquareSubset:'⊏̸',NotSquareSubsetEqual:'⋢',NotSquareSuperset:'⊐̸',NotSquareSupersetEqual:'⋣',NotSubset:'⊂⃒',NotSubsetEqual:'⊈',NotSucceeds:'⊁',NotSucceedsEqual:'⪰̸',NotSucceedsSlantEqual:'⋡',NotSucceedsTilde:'≿̸',NotSuperset:'⊃⃒',NotSupersetEqual:'⊉',NotTilde:'≁',NotTildeEqual:'≄',NotTildeFullEqual:'≇',NotTildeTilde:'≉',NotVerticalBar:'∤',npar:'∦',nparallel:'∦',nparsl:'⫽⃥',npart:'∂̸',npolint:'⨔',npr:'⊀',nprcue:'⋠',npre:'⪯̸',nprec:'⊀',npreceq:'⪯̸',nrArr:'⇏',nrarr:'↛',nrarrc:'⤳̸',nrarrw:'↝̸',nRightarrow:'⇏',nrightarrow:'↛',nrtri:'⋫',nrtrie:'⋭',nsc:'⊁',nsccue:'⋡',nsce:'⪰̸',Nscr:'𝒩',nscr:'𝓃',nshortmid:'∤',nshortparallel:'∦',nsim:'≁',nsime:'≄',nsimeq:'≄',nsmid:'∤',nspar:'∦',nsqsube:'⋢',nsqsupe:'⋣',nsub:'⊄',nsubE:'⫅̸',nsube:'⊈',nsubset:'⊂⃒',nsubseteq:'⊈',nsubseteqq:'⫅̸',nsucc:'⊁',nsucceq:'⪰̸',nsup:'⊅',nsupE:'⫆̸',nsupe:'⊉',nsupset:'⊃⃒',nsupseteq:'⊉',nsupseteqq:'⫆̸',ntgl:'≹',Ntilde:'Ñ',ntilde:'ñ',ntlg:'≸',ntriangleleft:'⋪',ntrianglelefteq:'⋬',ntriangleright:'⋫',ntrianglerighteq:'⋭',Nu:'Ν',nu:'ν',num:'#',numero:'№',numsp:' ',nvap:'≍⃒',nVDash:'⊯',nVdash:'⊮',nvDash:'⊭',nvdash:'⊬',nvge:'≥⃒',nvgt:'>⃒',nvHarr:'⤄',nvinfin:'⧞',nvlArr:'⤂',nvle:'≤⃒',nvlt:'<⃒',nvltrie:'⊴⃒',nvrArr:'⤃',nvrtrie:'⊵⃒',nvsim:'∼⃒',nwarhk:'⤣',nwArr:'⇖',nwarr:'↖',nwarrow:'↖',nwnear:'⤧',Oacute:'Ó',oacute:'ó',oast:'⊛',ocir:'⊚',Ocirc:'Ô',ocirc:'ô',Ocy:'О',ocy:'о',odash:'⊝',Odblac:'Ő',odblac:'ő',odiv:'⨸',odot:'⊙',odsold:'⦼',OElig:'Œ',oelig:'œ',ofcir:'⦿',Ofr:'𝔒',ofr:'𝔬',ogon:'˛',Ograve:'Ò',ograve:'ò',ogt:'⧁',ohbar:'⦵',ohm:'Ω',oint:'∮',olarr:'↺',olcir:'⦾',olcross:'⦻',oline:'‾',olt:'⧀',Omacr:'Ō',omacr:'ō',Omega:'Ω',omega:'ω',Omicron:'Ο',omicron:'ο',omid:'⦶',ominus:'⊖',Oopf:'𝕆',oopf:'𝕠',opar:'⦷',OpenCurlyDoubleQuote:'“',OpenCurlyQuote:'‘',operp:'⦹',oplus:'⊕',Or:'⩔',or:'∨',orarr:'↻',ord:'⩝',order:'ℴ',orderof:'ℴ',ordf:'ª',ordm:'º',origof:'⊶',oror:'⩖',orslope:'⩗',orv:'⩛',oS:'Ⓢ',Oscr:'𝒪',oscr:'ℴ',Oslash:'Ø',oslash:'ø',osol:'⊘',Otilde:'Õ',otilde:'õ',Otimes:'⨷',otimes:'⊗',otimesas:'⨶',Ouml:'Ö',ouml:'ö',ovbar:'⌽',OverBar:'‾',OverBrace:'⏞',OverBracket:'⎴',OverParenthesis:'⏜',par:'∥',para:'¶',parallel:'∥',parsim:'⫳',parsl:'⫽',part:'∂',PartialD:'∂',Pcy:'П',pcy:'п',percnt:'%',period:'.',permil:'‰',perp:'⊥',pertenk:'‱',Pfr:'𝔓',pfr:'𝔭',Phi:'Φ',phi:'φ',phiv:'ϕ',phmmat:'ℳ',phone:'☎',Pi:'Π',pi:'π',pitchfork:'⋔',piv:'ϖ',planck:'ℏ',planckh:'ℎ',plankv:'ℏ',plus:'+',plusacir:'⨣',plusb:'⊞',pluscir:'⨢',plusdo:'∔',plusdu:'⨥',pluse:'⩲',PlusMinus:'±',plusmn:'±',plussim:'⨦',plustwo:'⨧',pm:'±',Poincareplane:'ℌ',pointint:'⨕',Popf:'ℙ',popf:'𝕡',pound:'£',Pr:'⪻',pr:'≺',prap:'⪷',prcue:'≼',prE:'⪳',pre:'⪯',prec:'≺',precapprox:'⪷',preccurlyeq:'≼',Precedes:'≺',PrecedesEqual:'⪯',PrecedesSlantEqual:'≼',PrecedesTilde:'≾',preceq:'⪯',precnapprox:'⪹',precneqq:'⪵',precnsim:'⋨',precsim:'≾',Prime:'″',prime:'′',primes:'ℙ',prnap:'⪹',prnE:'⪵',prnsim:'⋨',prod:'∏',Product:'∏',profalar:'⌮',profline:'⌒',profsurf:'⌓',prop:'∝',Proportion:'∷',Proportional:'∝',propto:'∝',prsim:'≾',prurel:'⊰',Pscr:'𝒫',pscr:'𝓅',Psi:'Ψ',psi:'ψ',puncsp:' ',Qfr:'𝔔',qfr:'𝔮',qint:'⨌',Qopf:'ℚ',qopf:'𝕢',qprime:'⁗',Qscr:'𝒬',qscr:'𝓆',quaternions:'ℍ',quatint:'⨖',quest:'?',questeq:'≟',QUOT:'"',quot:'"',rAarr:'⇛',race:'∽̱',Racute:'Ŕ',racute:'ŕ',radic:'√',raemptyv:'⦳',Rang:'⟫',rang:'⟩',rangd:'⦒',range:'⦥',rangle:'⟩',raquo:'»',Rarr:'↠',rArr:'⇒',rarr:'→',rarrap:'⥵',rarrb:'⇥',rarrbfs:'⤠',rarrc:'⤳',rarrfs:'⤞',rarrhk:'↪',rarrlp:'↬',rarrpl:'⥅',rarrsim:'⥴',Rarrtl:'⤖',rarrtl:'↣',rarrw:'↝',rAtail:'⤜',ratail:'⤚',ratio:'∶',rationals:'ℚ',RBarr:'⤐',rBarr:'⤏',rbarr:'⤍',rbbrk:'❳',rbrace:'}',rbrack:']',rbrke:'⦌',rbrksld:'⦎',rbrkslu:'⦐',Rcaron:'Ř',rcaron:'ř',Rcedil:'Ŗ',rcedil:'ŗ',rceil:'⌉',rcub:'}',Rcy:'Р',rcy:'р',rdca:'⤷',rdldhar:'⥩',rdquo:'”',rdquor:'”',rdsh:'↳',Re:'ℜ',real:'ℜ',realine:'ℛ',realpart:'ℜ',reals:'ℝ',rect:'▭',REG:'®',reg:'®',ReverseElement:'∋',ReverseEquilibrium:'⇋',ReverseUpEquilibrium:'⥯',rfisht:'⥽',rfloor:'⌋',Rfr:'ℜ',rfr:'𝔯',rHar:'⥤',rhard:'⇁',rharu:'⇀',rharul:'⥬',Rho:'Ρ',rho:'ρ',rhov:'ϱ',RightAngleBracket:'⟩',RightArrow:'→',Rightarrow:'⇒',rightarrow:'→',RightArrowBar:'⇥',RightArrowLeftArrow:'⇄',rightarrowtail:'↣',RightCeiling:'⌉',RightDoubleBracket:'⟧',RightDownTeeVector:'⥝',RightDownVector:'⇂',RightDownVectorBar:'⥕',RightFloor:'⌋',rightharpoondown:'⇁',rightharpoonup:'⇀',rightleftarrows:'⇄',rightleftharpoons:'⇌',rightrightarrows:'⇉',rightsquigarrow:'↝',RightTee:'⊢',RightTeeArrow:'↦',RightTeeVector:'⥛',rightthreetimes:'⋌',RightTriangle:'⊳',RightTriangleBar:'⧐',RightTriangleEqual:'⊵',RightUpDownVector:'⥏',RightUpTeeVector:'⥜',RightUpVector:'↾',RightUpVectorBar:'⥔',RightVector:'⇀',RightVectorBar:'⥓',ring:'˚',risingdotseq:'≓',rlarr:'⇄',rlhar:'⇌',rlm:'‏',rmoust:'⎱',rmoustache:'⎱',rnmid:'⫮',roang:'⟭',roarr:'⇾',robrk:'⟧',ropar:'⦆',Ropf:'ℝ',ropf:'𝕣',roplus:'⨮',rotimes:'⨵',RoundImplies:'⥰',rpar:')',rpargt:'⦔',rppolint:'⨒',rrarr:'⇉',Rrightarrow:'⇛',rsaquo:'›',Rscr:'ℛ',rscr:'𝓇',Rsh:'↱',rsh:'↱',rsqb:']',rsquo:'’',rsquor:'’',rthree:'⋌',rtimes:'⋊',rtri:'▹',rtrie:'⊵',rtrif:'▸',rtriltri:'⧎',RuleDelayed:'⧴',ruluhar:'⥨',rx:'℞',Sacute:'Ś',sacute:'ś',sbquo:'‚',Sc:'⪼',sc:'≻',scap:'⪸',Scaron:'Š',scaron:'š',sccue:'≽',scE:'⪴',sce:'⪰',Scedil:'Ş',scedil:'ş',Scirc:'Ŝ',scirc:'ŝ',scnap:'⪺',scnE:'⪶',scnsim:'⋩',scpolint:'⨓',scsim:'≿',Scy:'С',scy:'с',sdot:'⋅',sdotb:'⊡',sdote:'⩦',searhk:'⤥',seArr:'⇘',searr:'↘',searrow:'↘',sect:'§',semi:';',seswar:'⤩',setminus:'∖',setmn:'∖',sext:'✶',Sfr:'𝔖',sfr:'𝔰',sfrown:'⌢',sharp:'♯',SHCHcy:'Щ',shchcy:'щ',SHcy:'Ш',shcy:'ш',ShortDownArrow:'↓',ShortLeftArrow:'←',shortmid:'∣',shortparallel:'∥',ShortRightArrow:'→',ShortUpArrow:'↑',shy:'­',Sigma:'Σ',sigma:'σ',sigmaf:'ς',sigmav:'ς',sim:'∼',simdot:'⩪',sime:'≃',simeq:'≃',simg:'⪞',simgE:'⪠',siml:'⪝',simlE:'⪟',simne:'≆',simplus:'⨤',simrarr:'⥲',slarr:'←',SmallCircle:'∘',smallsetminus:'∖',smashp:'⨳',smeparsl:'⧤',smid:'∣',smile:'⌣',smt:'⪪',smte:'⪬',smtes:'⪬︀',SOFTcy:'Ь',softcy:'ь',sol:'/',solb:'⧄',solbar:'⌿',Sopf:'𝕊',sopf:'𝕤',spades:'♠',spadesuit:'♠',spar:'∥',sqcap:'⊓',sqcaps:'⊓︀',sqcup:'⊔',sqcups:'⊔︀',Sqrt:'√',sqsub:'⊏',sqsube:'⊑',sqsubset:'⊏',sqsubseteq:'⊑',sqsup:'⊐',sqsupe:'⊒',sqsupset:'⊐',sqsupseteq:'⊒',squ:'□',Square:'□',square:'□',SquareIntersection:'⊓',SquareSubset:'⊏',SquareSubsetEqual:'⊑',SquareSuperset:'⊐',SquareSupersetEqual:'⊒',SquareUnion:'⊔',squarf:'▪',squf:'▪',srarr:'→',Sscr:'𝒮',sscr:'𝓈',ssetmn:'∖',ssmile:'⌣',sstarf:'⋆',Star:'⋆',star:'☆',starf:'★',straightepsilon:'ϵ',straightphi:'ϕ',strns:'¯',Sub:'⋐',sub:'⊂',subdot:'⪽',subE:'⫅',sube:'⊆',subedot:'⫃',submult:'⫁',subnE:'⫋',subne:'⊊',subplus:'⪿',subrarr:'⥹',Subset:'⋐',subset:'⊂',subseteq:'⊆',subseteqq:'⫅',SubsetEqual:'⊆',subsetneq:'⊊',subsetneqq:'⫋',subsim:'⫇',subsub:'⫕',subsup:'⫓',succ:'≻',succapprox:'⪸',succcurlyeq:'≽',Succeeds:'≻',SucceedsEqual:'⪰',SucceedsSlantEqual:'≽',SucceedsTilde:'≿',succeq:'⪰',succnapprox:'⪺',succneqq:'⪶',succnsim:'⋩',succsim:'≿',SuchThat:'∋',Sum:'∑',sum:'∑',sung:'♪',Sup:'⋑',sup:'⊃',sup1:'¹',sup2:'²',sup3:'³',supdot:'⪾',supdsub:'⫘',supE:'⫆',supe:'⊇',supedot:'⫄',Superset:'⊃',SupersetEqual:'⊇',suphsol:'⟉',suphsub:'⫗',suplarr:'⥻',supmult:'⫂',supnE:'⫌',supne:'⊋',supplus:'⫀',Supset:'⋑',supset:'⊃',supseteq:'⊇',supseteqq:'⫆',supsetneq:'⊋',supsetneqq:'⫌',supsim:'⫈',supsub:'⫔',supsup:'⫖',swarhk:'⤦',swArr:'⇙',swarr:'↙',swarrow:'↙',swnwar:'⤪',szlig:'ß',Tab:'\t',target:'⌖',Tau:'Τ',tau:'τ',tbrk:'⎴',Tcaron:'Ť',tcaron:'ť',Tcedil:'Ţ',tcedil:'ţ',Tcy:'Т',tcy:'т',tdot:'⃛',telrec:'⌕',Tfr:'𝔗',tfr:'𝔱',there4:'∴',Therefore:'∴',therefore:'∴',Theta:'Θ',theta:'θ',thetasym:'ϑ',thetav:'ϑ',thickapprox:'≈',thicksim:'∼',ThickSpace:'  ',thinsp:' ',ThinSpace:' ',thkap:'≈',thksim:'∼',THORN:'Þ',thorn:'þ',Tilde:'∼',tilde:'˜',TildeEqual:'≃',TildeFullEqual:'≅',TildeTilde:'≈',times:'×',timesb:'⊠',timesbar:'⨱',timesd:'⨰',tint:'∭',toea:'⤨',top:'⊤',topbot:'⌶',topcir:'⫱',Topf:'𝕋',topf:'𝕥',topfork:'⫚',tosa:'⤩',tprime:'‴',TRADE:'™',trade:'™',triangle:'▵',triangledown:'▿',triangleleft:'◃',trianglelefteq:'⊴',triangleq:'≜',triangleright:'▹',trianglerighteq:'⊵',tridot:'◬',trie:'≜',triminus:'⨺',TripleDot:'⃛',triplus:'⨹',trisb:'⧍',tritime:'⨻',trpezium:'⏢',Tscr:'𝒯',tscr:'𝓉',TScy:'Ц',tscy:'ц',TSHcy:'Ћ',tshcy:'ћ',Tstrok:'Ŧ',tstrok:'ŧ',twixt:'≬',twoheadleftarrow:'↞',twoheadrightarrow:'↠',Uacute:'Ú',uacute:'ú',Uarr:'↟',uArr:'⇑',uarr:'↑',Uarrocir:'⥉',Ubrcy:'Ў',ubrcy:'ў',Ubreve:'Ŭ',ubreve:'ŭ',Ucirc:'Û',ucirc:'û',Ucy:'У',ucy:'у',udarr:'⇅',Udblac:'Ű',udblac:'ű',udhar:'⥮',ufisht:'⥾',Ufr:'𝔘',ufr:'𝔲',Ugrave:'Ù',ugrave:'ù',uHar:'⥣',uharl:'↿',uharr:'↾',uhblk:'▀',ulcorn:'⌜',ulcorner:'⌜',ulcrop:'⌏',ultri:'◸',Umacr:'Ū',umacr:'ū',uml:'¨',UnderBar:'_',UnderBrace:'⏟',UnderBracket:'⎵',UnderParenthesis:'⏝',Union:'⋃',UnionPlus:'⊎',Uogon:'Ų',uogon:'ų',Uopf:'𝕌',uopf:'𝕦',UpArrow:'↑',Uparrow:'⇑',uparrow:'↑',UpArrowBar:'⤒',UpArrowDownArrow:'⇅',UpDownArrow:'↕',Updownarrow:'⇕',updownarrow:'↕',UpEquilibrium:'⥮',upharpoonleft:'↿',upharpoonright:'↾',uplus:'⊎',UpperLeftArrow:'↖',UpperRightArrow:'↗',Upsi:'ϒ',upsi:'υ',upsih:'ϒ',Upsilon:'Υ',upsilon:'υ',UpTee:'⊥',UpTeeArrow:'↥',upuparrows:'⇈',urcorn:'⌝',urcorner:'⌝',urcrop:'⌎',Uring:'Ů',uring:'ů',urtri:'◹',Uscr:'𝒰',uscr:'𝓊',utdot:'⋰',Utilde:'Ũ',utilde:'ũ',utri:'▵',utrif:'▴',uuarr:'⇈',Uuml:'Ü',uuml:'ü',uwangle:'⦧',vangrt:'⦜',varepsilon:'ϵ',varkappa:'ϰ',varnothing:'∅',varphi:'ϕ',varpi:'ϖ',varpropto:'∝',vArr:'⇕',varr:'↕',varrho:'ϱ',varsigma:'ς',varsubsetneq:'⊊︀',varsubsetneqq:'⫋︀',varsupsetneq:'⊋︀',varsupsetneqq:'⫌︀',vartheta:'ϑ',vartriangleleft:'⊲',vartriangleright:'⊳',Vbar:'⫫',vBar:'⫨',vBarv:'⫩',Vcy:'В',vcy:'в',VDash:'⊫',Vdash:'⊩',vDash:'⊨',vdash:'⊢',Vdashl:'⫦',Vee:'⋁',vee:'∨',veebar:'⊻',veeeq:'≚',vellip:'⋮',Verbar:'‖',verbar:'|',Vert:'‖',vert:'|',VerticalBar:'∣',VerticalLine:'|',VerticalSeparator:'❘',VerticalTilde:'≀',VeryThinSpace:' ',Vfr:'𝔙',vfr:'𝔳',vltri:'⊲',vnsub:'⊂⃒',vnsup:'⊃⃒',Vopf:'𝕍',vopf:'𝕧',vprop:'∝',vrtri:'⊳',Vscr:'𝒱',vscr:'𝓋',vsubnE:'⫋︀',vsubne:'⊊︀',vsupnE:'⫌︀',vsupne:'⊋︀',Vvdash:'⊪',vzigzag:'⦚',Wcirc:'Ŵ',wcirc:'ŵ',wedbar:'⩟',Wedge:'⋀',wedge:'∧',wedgeq:'≙',weierp:'℘',Wfr:'𝔚',wfr:'𝔴',Wopf:'𝕎',wopf:'𝕨',wp:'℘',wr:'≀',wreath:'≀',Wscr:'𝒲',wscr:'𝓌',xcap:'⋂',xcirc:'◯',xcup:'⋃',xdtri:'▽',Xfr:'𝔛',xfr:'𝔵',xhArr:'⟺',xharr:'⟷',Xi:'Ξ',xi:'ξ',xlArr:'⟸',xlarr:'⟵',xmap:'⟼',xnis:'⋻',xodot:'⨀',Xopf:'𝕏',xopf:'𝕩',xoplus:'⨁',xotime:'⨂',xrArr:'⟹',xrarr:'⟶',Xscr:'𝒳',xscr:'𝓍',xsqcup:'⨆',xuplus:'⨄',xutri:'△',xvee:'⋁',xwedge:'⋀',Yacute:'Ý',yacute:'ý',YAcy:'Я',yacy:'я',Ycirc:'Ŷ',ycirc:'ŷ',Ycy:'Ы',ycy:'ы',yen:'¥',Yfr:'𝔜',yfr:'𝔶',YIcy:'Ї',yicy:'ї',Yopf:'𝕐',yopf:'𝕪',Yscr:'𝒴',yscr:'𝓎',YUcy:'Ю',yucy:'ю',Yuml:'Ÿ',yuml:'ÿ',Zacute:'Ź',zacute:'ź',Zcaron:'Ž',zcaron:'ž',Zcy:'З',zcy:'з',Zdot:'Ż',zdot:'ż',zeetrf:'ℨ',ZeroWidthSpace:'​',Zeta:'Ζ',zeta:'ζ',Zfr:'ℨ',zfr:'𝔷',ZHcy:'Ж',zhcy:'ж',zigrarr:'⇝',Zopf:'ℤ',zopf:'𝕫',Zscr:'𝒵',zscr:'𝓏',zwj:'‍',zwnj:'‌'};/***/},/* 22 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _builders=__webpack_require__(12);var _builders2=_interopRequireDefault(_builders);var _utils=__webpack_require__(23);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={Program:function Program(program){var body=[];var node=_builders2.default.program(body,program.blockParams,program.loc);var i,l=program.body.length;this.elementStack.push(node);if(l===0){return this.elementStack.pop();}for(i=0;i<l;i++){this.acceptNode(program.body[i]);}// Ensure that that the element stack is balanced properly.
	var poppedNode=this.elementStack.pop();if(poppedNode!==node){throw new Error('Unclosed element `'+poppedNode.tag+'` (on line '+poppedNode.loc.start.line+').');}return node;},BlockStatement:function BlockStatement(block){delete block.inverseStrip;delete block.openString;delete block.closeStrip;if(this.tokenizer.state==='comment'){this.appendToCommentData('{{'+this.sourceForMustache(block)+'}}');return;}if(this.tokenizer.state!=='comment'&&this.tokenizer.state!=='data'&&this.tokenizer.state!=='beforeData'){throw new Error('A block may only be used inside an HTML element or another block.');}block=acceptCommonNodes(this,block);var program=block.program?this.acceptNode(block.program):null;var inverse=block.inverse?this.acceptNode(block.inverse):null;var node=_builders2.default.block(block.path,block.params,block.hash,program,inverse,block.loc);var parentProgram=this.currentElement();(0,_utils.appendChild)(parentProgram,node);},MustacheStatement:function MustacheStatement(rawMustache){var tokenizer=this.tokenizer;var path=rawMustache.path;var params=rawMustache.params;var hash=rawMustache.hash;var escaped=rawMustache.escaped;var loc=rawMustache.loc;var mustache=_builders2.default.mustache(path,params,hash,!escaped,loc);if(tokenizer.state==='comment'){this.appendToCommentData('{{'+this.sourceForMustache(mustache)+'}}');return;}acceptCommonNodes(this,mustache);switch(tokenizer.state){// Tag helpers
	case'tagName':addElementModifier(this.currentNode,mustache);tokenizer.state='beforeAttributeName';break;case'beforeAttributeName':addElementModifier(this.currentNode,mustache);break;case'attributeName':case'afterAttributeName':this.beginAttributeValue(false);this.finishAttributeValue();addElementModifier(this.currentNode,mustache);tokenizer.state='beforeAttributeName';break;case'afterAttributeValueQuoted':addElementModifier(this.currentNode,mustache);tokenizer.state='beforeAttributeName';break;// Attribute values
	case'beforeAttributeValue':appendDynamicAttributeValuePart(this.currentAttribute,mustache);tokenizer.state='attributeValueUnquoted';break;case'attributeValueDoubleQuoted':case'attributeValueSingleQuoted':case'attributeValueUnquoted':appendDynamicAttributeValuePart(this.currentAttribute,mustache);break;// TODO: Only append child when the tokenizer state makes
	// sense to do so, otherwise throw an error.
	default:(0,_utils.appendChild)(this.currentElement(),mustache);}return mustache;},ContentStatement:function ContentStatement(content){updateTokenizerLocation(this.tokenizer,content);this.tokenizer.tokenizePart(content.value);this.tokenizer.flushData();},CommentStatement:function CommentStatement(comment){return comment;},PartialStatement:function PartialStatement(partial){(0,_utils.appendChild)(this.currentElement(),partial);return partial;},SubExpression:function SubExpression(sexpr){return acceptCommonNodes(this,sexpr);},PathExpression:function PathExpression(path){delete path.data;delete path.depth;return path;},Hash:function Hash(hash){for(var i=0;i<hash.pairs.length;i++){this.acceptNode(hash.pairs[i].value);}return hash;},StringLiteral:function StringLiteral(){},BooleanLiteral:function BooleanLiteral(){},NumberLiteral:function NumberLiteral(){},UndefinedLiteral:function UndefinedLiteral(){},NullLiteral:function NullLiteral(){}};function calculateRightStrippedOffsets(original,value){if(value===''){// if it is empty, just return the count of newlines
	// in original
	return{lines:original.split('\n').length-1,columns:0};}// otherwise, return the number of newlines prior to
	// `value`
	var difference=original.split(value)[0];var lines=difference.split(/\n/);var lineCount=lines.length-1;return{lines:lineCount,columns:lines[lineCount].length};}function updateTokenizerLocation(tokenizer,content){var line=content.loc.start.line;var column=content.loc.start.column;if(content.rightStripped){var offsets=calculateRightStrippedOffsets(content.original,content.value);line=line+offsets.lines;if(offsets.lines){column=offsets.columns;}else{column=column+offsets.columns;}}tokenizer.line=line;tokenizer.column=column;}function acceptCommonNodes(compiler,node){compiler.acceptNode(node.path);if(node.params){for(var i=0;i<node.params.length;i++){compiler.acceptNode(node.params[i]);}}else{node.params=[];}if(node.hash){compiler.acceptNode(node.hash);}else{node.hash=_builders2.default.hash();}return node;}function addElementModifier(element,mustache){var path=mustache.path;var params=mustache.params;var hash=mustache.hash;var loc=mustache.loc;var modifier=_builders2.default.elementModifier(path,params,hash,loc);element.modifiers.push(modifier);}function appendDynamicAttributeValuePart(attribute,part){attribute.isDynamic=true;attribute.parts.push(part);}/***/},/* 23 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.parseComponentBlockParams=parseComponentBlockParams;exports.childrenFor=childrenFor;exports.appendChild=appendChild;exports.isHelper=isHelper;exports.unwrapMustache=unwrapMustache;var _arrayUtils=__webpack_require__(24);// Regex to validate the identifier for block parameters. 
	// Based on the ID validation regex in Handlebars.
	var ID_INVERSE_PATTERN=/[!"#%-,\.\/;->@\[-\^`\{-~]/;// Checks the component's attributes to see if it uses block params.
	// If it does, registers the block params with the program and
	// removes the corresponding attributes from the element.
	function parseComponentBlockParams(element,program){var l=element.attributes.length;var attrNames=[];for(var i=0;i<l;i++){attrNames.push(element.attributes[i].name);}var asIndex=(0,_arrayUtils.indexOfArray)(attrNames,'as');if(asIndex!==-1&&l>asIndex&&attrNames[asIndex+1].charAt(0)==='|'){// Some basic validation, since we're doing the parsing ourselves
	var paramsString=attrNames.slice(asIndex).join(' ');if(paramsString.charAt(paramsString.length-1)!=='|'||paramsString.match(/\|/g).length!==2){throw new Error('Invalid block parameters syntax: \''+paramsString+'\'');}var params=[];for(i=asIndex+1;i<l;i++){var param=attrNames[i].replace(/\|/g,'');if(param!==''){if(ID_INVERSE_PATTERN.test(param)){throw new Error('Invalid identifier for block parameters: \''+param+'\' in \''+paramsString+'\'');}params.push(param);}}if(params.length===0){throw new Error('Cannot use zero block parameters: \''+paramsString+'\'');}element.attributes=element.attributes.slice(0,asIndex);program.blockParams=params;}}function childrenFor(node){if(node.type==='Program'){return node.body;}if(node.type==='ElementNode'){return node.children;}}function appendChild(parent,node){childrenFor(parent).push(node);}function isHelper(mustache){return mustache.params&&mustache.params.length>0||mustache.hash&&mustache.hash.pairs.length>0;}function unwrapMustache(mustache){if(isHelper(mustache)){return mustache;}else{return mustache.path;}}/***/},/* 24 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.forEach=forEach;exports.map=map;function forEach(array,callback,binding){var i,l;if(binding===undefined){for(i=0,l=array.length;i<l;i++){callback(array[i],i,array);}}else{for(i=0,l=array.length;i<l;i++){callback.call(binding,array[i],i,array);}}}function map(array,callback){var output=[];var i,l;for(i=0,l=array.length;i<l;i++){output.push(callback(array[i],i,array));}return output;}var getIdx;if(Array.prototype.indexOf){getIdx=function getIdx(array,obj,from){return array.indexOf(obj,from);};}else{getIdx=function getIdx(array,obj,from){if(from===undefined||from===null){from=0;}else if(from<0){from=Math.max(0,array.length+from);}for(var i=from,l=array.length;i<l;i++){if(array[i]===obj){return i;}}return-1;};}var isArray=exports.isArray=Array.isArray||function(array){return Object.prototype.toString.call(array)==='[object Array]';};var indexOfArray=exports.indexOfArray=getIdx;/***/},/* 25 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _voidTagNames=__webpack_require__(26);var _voidTagNames2=_interopRequireDefault(_voidTagNames);var _builders=__webpack_require__(12);var _builders2=_interopRequireDefault(_builders);var _utils=__webpack_require__(23);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={reset:function reset(){this.currentNode=null;},// Comment
	beginComment:function beginComment(){this.currentNode=_builders2.default.comment('');this.currentNode.loc={source:null,start:_builders2.default.pos(this.tagOpenLine,this.tagOpenColumn),end:null};},appendToCommentData:function appendToCommentData(char){this.currentNode.value+=char;},finishComment:function finishComment(){this.currentNode.loc.end=_builders2.default.pos(this.tokenizer.line,this.tokenizer.column);(0,_utils.appendChild)(this.currentElement(),this.currentNode);},// Data
	beginData:function beginData(){this.currentNode=_builders2.default.text();this.currentNode.loc={source:null,start:_builders2.default.pos(this.tokenizer.line,this.tokenizer.column),end:null};},appendToData:function appendToData(char){this.currentNode.chars+=char;},finishData:function finishData(){this.currentNode.loc.end=_builders2.default.pos(this.tokenizer.line,this.tokenizer.column);(0,_utils.appendChild)(this.currentElement(),this.currentNode);},// Tags - basic
	tagOpen:function tagOpen(){this.tagOpenLine=this.tokenizer.line;this.tagOpenColumn=this.tokenizer.column;},beginStartTag:function beginStartTag(){this.currentNode={type:'StartTag',name:'',attributes:[],modifiers:[],selfClosing:false,loc:null};},beginEndTag:function beginEndTag(){this.currentNode={type:'EndTag',name:'',attributes:[],modifiers:[],selfClosing:false,loc:null};},finishTag:function finishTag(){var _tokenizer=this.tokenizer;var line=_tokenizer.line;var column=_tokenizer.column;var tag=this.currentNode;tag.loc=_builders2.default.loc(this.tagOpenLine,this.tagOpenColumn,line,column);if(tag.type==='StartTag'){this.finishStartTag();if(_voidTagNames2.default.hasOwnProperty(tag.name)||tag.selfClosing){this.finishEndTag(true);}}else if(tag.type==='EndTag'){this.finishEndTag(false);}},finishStartTag:function finishStartTag(){var _currentNode=this.currentNode;var name=_currentNode.name;var attributes=_currentNode.attributes;var modifiers=_currentNode.modifiers;validateStartTag(this.currentNode,this.tokenizer);var loc=_builders2.default.loc(this.tagOpenLine,this.tagOpenColumn);var element=_builders2.default.element(name,attributes,modifiers,[],loc);this.elementStack.push(element);},finishEndTag:function finishEndTag(isVoid){var tag=this.currentNode;var element=this.elementStack.pop();var parent=this.currentElement();var disableComponentGeneration=this.options.disableComponentGeneration===true;validateEndTag(tag,element,isVoid);element.loc.end.line=this.tokenizer.line;element.loc.end.column=this.tokenizer.column;if(disableComponentGeneration||cannotBeComponent(element.tag)){(0,_utils.appendChild)(parent,element);}else{var program=_builders2.default.program(element.children);(0,_utils.parseComponentBlockParams)(element,program);var component=_builders2.default.component(element.tag,element.attributes,program,element.loc);(0,_utils.appendChild)(parent,component);}},markTagAsSelfClosing:function markTagAsSelfClosing(){this.currentNode.selfClosing=true;},// Tags - name
	appendToTagName:function appendToTagName(char){this.currentNode.name+=char;},// Tags - attributes
	beginAttribute:function beginAttribute(){var tag=this.currentNode;if(tag.type==='EndTag'){throw new Error('Invalid end tag: closing tag must not have attributes, '+('in `'+tag.name+'` (on line '+this.tokenizer.line+').'));}this.currentAttribute={name:'',parts:[],isQuoted:false,isDynamic:false,// beginAttribute isn't called until after the first char is consumed
	start:_builders2.default.pos(this.tokenizer.line,this.tokenizer.column),valueStartLine:null,valueStartColumn:null};},appendToAttributeName:function appendToAttributeName(char){this.currentAttribute.name+=char;},beginAttributeValue:function beginAttributeValue(isQuoted){this.currentAttribute.isQuoted=isQuoted;this.currentAttribute.valueStartLine=this.tokenizer.line;this.currentAttribute.valueStartColumn=this.tokenizer.column;},appendToAttributeValue:function appendToAttributeValue(char){var parts=this.currentAttribute.parts;if(typeof parts[parts.length-1]==='string'){parts[parts.length-1]+=char;}else{parts.push(char);}},finishAttributeValue:function finishAttributeValue(){var _currentAttribute=this.currentAttribute;var name=_currentAttribute.name;var parts=_currentAttribute.parts;var isQuoted=_currentAttribute.isQuoted;var isDynamic=_currentAttribute.isDynamic;var valueStartLine=_currentAttribute.valueStartLine;var valueStartColumn=_currentAttribute.valueStartColumn;var value=assembleAttributeValue(parts,isQuoted,isDynamic,this.tokenizer.line);value.loc=_builders2.default.loc(valueStartLine,valueStartColumn,this.tokenizer.line,this.tokenizer.column);var loc=_builders2.default.loc(this.currentAttribute.start.line,this.currentAttribute.start.column,this.tokenizer.line,this.tokenizer.column);var attribute=_builders2.default.attr(name,value,loc);this.currentNode.attributes.push(attribute);}};function assembleAttributeValue(parts,isQuoted,isDynamic,line){if(isDynamic){if(isQuoted){return assembleConcatenatedValue(parts);}else{if(parts.length===1||parts.length===2&&parts[1]==='/'){return parts[0];}else{throw new Error('An unquoted attribute value must be a string or a mustache, '+'preceeded by whitespace or a \'=\' character, and '+('followed by whitespace, a \'>\' character or a \'/>\' (on line '+line+')'));}}}else{return _builders2.default.text(parts.length>0?parts[0]:'');}}function assembleConcatenatedValue(parts){for(var i=0;i<parts.length;i++){var part=parts[i];if(typeof part==='string'){parts[i]=_builders2.default.string(parts[i]);}else{if(part.type==='MustacheStatement'){parts[i]=(0,_utils.unwrapMustache)(part);}else{throw new Error('Unsupported node in quoted attribute value: '+part.type);}}}return _builders2.default.concat(parts);}function cannotBeComponent(tagName){return tagName.indexOf('-')===-1&&tagName.indexOf('.')===-1;}function validateStartTag(tag,tokenizer){// No support for <script> tags
	if(tag.name==='script'){throw new Error('`SCRIPT` tags are not allowed in HTMLBars templates (on line '+tokenizer.tagLine+')');}}function validateEndTag(tag,element,selfClosing){if(_voidTagNames2.default[tag.name]&&!selfClosing){// EngTag is also called by StartTag for void and self-closing tags (i.e.
	// <input> or <br />, so we need to check for that here. Otherwise, we would
	// throw an error for those cases.
	throw new Error('Invalid end tag '+formatEndTagInfo(tag)+' (void elements cannot have end tags).');}else if(element.tag===undefined){throw new Error('Closing tag '+formatEndTagInfo(tag)+' without an open tag.');}else if(element.tag!==tag.name){throw new Error('Closing tag '+formatEndTagInfo(tag)+' did not match last open tag `'+element.tag+'` (on line '+element.loc.start.line+').');}}function formatEndTagInfo(tag){return'`'+tag.name+'` (on line '+tag.loc.end.line+')';}/***/},/* 26 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _arrayUtils=__webpack_require__(24);// The HTML elements in this list are speced by
	// http://www.w3.org/TR/html-markup/syntax.html#syntax-elements,
	// and will be forced to close regardless of if they have a
	// self-closing /> at the end.
	var voidTagNames='area base br col command embed hr img input keygen link meta param source track wbr';var voidMap={};(0,_arrayUtils.forEach)(voidTagNames.split(' '),function(tagName){voidMap[tagName]=true;});exports.default=voidMap;/***/},/* 27 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _fragmentOpcodeCompiler=__webpack_require__(28);var _fragmentOpcodeCompiler2=_interopRequireDefault(_fragmentOpcodeCompiler);var _fragmentJavascriptCompiler=__webpack_require__(37);var _fragmentJavascriptCompiler2=_interopRequireDefault(_fragmentJavascriptCompiler);var _hydrationOpcodeCompiler=__webpack_require__(39);var _hydrationOpcodeCompiler2=_interopRequireDefault(_hydrationOpcodeCompiler);var _hydrationJavascriptCompiler=__webpack_require__(40);var _hydrationJavascriptCompiler2=_interopRequireDefault(_hydrationJavascriptCompiler);var _templateVisitor=__webpack_require__(29);var _templateVisitor2=_interopRequireDefault(_templateVisitor);var _utils=__webpack_require__(30);var _quoting=__webpack_require__(38);var _arrayUtils=__webpack_require__(24);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function TemplateCompiler(options){this.options=options||{};this.consumerBuildMeta=this.options.buildMeta||function(){};this.fragmentOpcodeCompiler=new _fragmentOpcodeCompiler2.default();this.fragmentCompiler=new _fragmentJavascriptCompiler2.default();this.hydrationOpcodeCompiler=new _hydrationOpcodeCompiler2.default();this.hydrationCompiler=new _hydrationJavascriptCompiler2.default();this.templates=[];this.childTemplates=[];}exports.default=TemplateCompiler;TemplateCompiler.prototype.compile=function(ast){var templateVisitor=new _templateVisitor2.default();templateVisitor.visit(ast);(0,_utils.processOpcodes)(this,templateVisitor.actions);return this.templates.pop();};TemplateCompiler.prototype.startProgram=function(program,childTemplateCount,blankChildTextNodes){this.fragmentOpcodeCompiler.startProgram(program,childTemplateCount,blankChildTextNodes);this.hydrationOpcodeCompiler.startProgram(program,childTemplateCount,blankChildTextNodes);this.childTemplates.length=0;while(childTemplateCount--){this.childTemplates.push(this.templates.pop());}};TemplateCompiler.prototype.insertBoundary=function(first){this.hydrationOpcodeCompiler.insertBoundary(first);};TemplateCompiler.prototype.getChildTemplateVars=function(indent){var vars='';if(this.childTemplates){for(var i=0;i<this.childTemplates.length;i++){vars+=indent+'var child'+i+' = '+this.childTemplates[i]+';\n';}}return vars;};TemplateCompiler.prototype.getHydrationHooks=function(indent,hooks){var hookVars=[];for(var hook in hooks){hookVars.push(hook+' = hooks.'+hook);}if(hookVars.length>0){return indent+'var hooks = env.hooks, '+hookVars.join(', ')+';\n';}else{return'';}};TemplateCompiler.prototype.endProgram=function(program,programDepth){this.fragmentOpcodeCompiler.endProgram(program);this.hydrationOpcodeCompiler.endProgram(program);var indent=(0,_quoting.repeat)('  ',programDepth);var options={indent:indent+'    '};// function build(dom) { return fragment; }
	var fragmentProgram=this.fragmentCompiler.compile(this.fragmentOpcodeCompiler.opcodes,options);// function hydrate(fragment) { return mustaches; }
	var hydrationPrograms=this.hydrationCompiler.compile(this.hydrationOpcodeCompiler.opcodes,options);var blockParams=program.blockParams||[];var templateSignature='context, rootNode, env, options';if(blockParams.length>0){templateSignature+=', blockArguments';}var statements=(0,_arrayUtils.map)(hydrationPrograms.statements,function(s){return indent+'      '+JSON.stringify(s);}).join(',\n');var locals=JSON.stringify(hydrationPrograms.locals);var templates=(0,_arrayUtils.map)(this.childTemplates,function(_,index){return'child'+index;}).join(', ');var template='(function() {\n'+this.getChildTemplateVars(indent+'  ')+indent+'  return {\n'+this.buildMeta(indent+'    ',program)+indent+'    isEmpty: '+(program.body.length?'false':'true')+',\n'+indent+'    arity: '+blockParams.length+',\n'+indent+'    cachedFragment: null,\n'+indent+'    hasRendered: false,\n'+indent+'    buildFragment: '+fragmentProgram+',\n'+indent+'    buildRenderNodes: '+hydrationPrograms.createMorphsProgram+',\n'+indent+'    statements: [\n'+statements+'\n'+indent+'    ],\n'+indent+'    locals: '+locals+',\n'+indent+'    templates: ['+templates+']\n'+indent+'  };\n'+indent+'}())';this.templates.push(template);};TemplateCompiler.prototype.buildMeta=function(indent,program){var meta=this.consumerBuildMeta(program)||{};var head=indent+'meta: ';var stringMeta=JSON.stringify(meta,null,2).replace(/\n/g,'\n'+indent);var tail=',\n';return head+stringMeta+tail;};TemplateCompiler.prototype.openElement=function(element,i,l,r,c,b){this.fragmentOpcodeCompiler.openElement(element,i,l,r,c,b);this.hydrationOpcodeCompiler.openElement(element,i,l,r,c,b);};TemplateCompiler.prototype.closeElement=function(element,i,l,r){this.fragmentOpcodeCompiler.closeElement(element,i,l,r);this.hydrationOpcodeCompiler.closeElement(element,i,l,r);};TemplateCompiler.prototype.component=function(component,i,l,s){this.fragmentOpcodeCompiler.component(component,i,l,s);this.hydrationOpcodeCompiler.component(component,i,l,s);};TemplateCompiler.prototype.block=function(block,i,l,s){this.fragmentOpcodeCompiler.block(block,i,l,s);this.hydrationOpcodeCompiler.block(block,i,l,s);};TemplateCompiler.prototype.text=function(string,i,l,r){this.fragmentOpcodeCompiler.text(string,i,l,r);this.hydrationOpcodeCompiler.text(string,i,l,r);};TemplateCompiler.prototype.comment=function(string,i,l,r){this.fragmentOpcodeCompiler.comment(string,i,l,r);this.hydrationOpcodeCompiler.comment(string,i,l,r);};TemplateCompiler.prototype.mustache=function(mustache,i,l,s){this.fragmentOpcodeCompiler.mustache(mustache,i,l,s);this.hydrationOpcodeCompiler.mustache(mustache,i,l,s);};TemplateCompiler.prototype.setNamespace=function(namespace){this.fragmentOpcodeCompiler.setNamespace(namespace);};/***/},/* 28 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _templateVisitor=__webpack_require__(29);var _templateVisitor2=_interopRequireDefault(_templateVisitor);var _utils=__webpack_require__(30);var _htmlbarsUtil=__webpack_require__(31);var _arrayUtils=__webpack_require__(24);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function FragmentOpcodeCompiler(){this.opcodes=[];}exports.default=FragmentOpcodeCompiler;FragmentOpcodeCompiler.prototype.compile=function(ast){var templateVisitor=new _templateVisitor2.default();templateVisitor.visit(ast);(0,_utils.processOpcodes)(this,templateVisitor.actions);return this.opcodes;};FragmentOpcodeCompiler.prototype.opcode=function(type,params){this.opcodes.push([type,params]);};FragmentOpcodeCompiler.prototype.text=function(text){this.opcode('createText',[text.chars]);this.opcode('appendChild');};FragmentOpcodeCompiler.prototype.comment=function(comment){this.opcode('createComment',[comment.value]);this.opcode('appendChild');};FragmentOpcodeCompiler.prototype.openElement=function(element){this.opcode('createElement',[element.tag]);(0,_arrayUtils.forEach)(element.attributes,this.attribute,this);};FragmentOpcodeCompiler.prototype.closeElement=function(){this.opcode('appendChild');};FragmentOpcodeCompiler.prototype.startProgram=function(){this.opcodes.length=0;this.opcode('createFragment');};FragmentOpcodeCompiler.prototype.endProgram=function(){this.opcode('returnNode');};FragmentOpcodeCompiler.prototype.mustache=function(){this.pushMorphPlaceholderNode();};FragmentOpcodeCompiler.prototype.component=function(){this.pushMorphPlaceholderNode();};FragmentOpcodeCompiler.prototype.block=function(){this.pushMorphPlaceholderNode();};FragmentOpcodeCompiler.prototype.pushMorphPlaceholderNode=function(){this.opcode('createComment',['']);this.opcode('appendChild');};FragmentOpcodeCompiler.prototype.attribute=function(attr){if(attr.value.type==='TextNode'){var namespace=(0,_htmlbarsUtil.getAttrNamespace)(attr.name);this.opcode('setAttribute',[attr.name,attr.value.chars,namespace]);}};FragmentOpcodeCompiler.prototype.setNamespace=function(namespace){this.opcode('setNamespace',[namespace]);};/***/},/* 29 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var push=Array.prototype.push;function Frame(){this.parentNode=null;this.children=null;this.childIndex=null;this.childCount=null;this.childTemplateCount=0;this.mustacheCount=0;this.actions=[];}/**
		 * Takes in an AST and outputs a list of actions to be consumed
		 * by a compiler. For example, the template
		 *
		 *     foo{{bar}}<div>baz</div>
		 *
		 * produces the actions
		 *
		 *     [['startProgram', [programNode, 0]],
		 *      ['text', [textNode, 0, 3]],
		 *      ['mustache', [mustacheNode, 1, 3]],
		 *      ['openElement', [elementNode, 2, 3, 0]],
		 *      ['text', [textNode, 0, 1]],
		 *      ['closeElement', [elementNode, 2, 3],
		 *      ['endProgram', [programNode]]]
		 *
		 * This visitor walks the AST depth first and backwards. As
		 * a result the bottom-most child template will appear at the
		 * top of the actions list whereas the root template will appear
		 * at the bottom of the list. For example,
		 *
		 *     <div>{{#if}}foo{{else}}bar<b></b>{{/if}}</div>
		 *
		 * produces the actions
		 *
		 *     [['startProgram', [programNode, 0]],
		 *      ['text', [textNode, 0, 2, 0]],
		 *      ['openElement', [elementNode, 1, 2, 0]],
		 *      ['closeElement', [elementNode, 1, 2]],
		 *      ['endProgram', [programNode]],
		 *      ['startProgram', [programNode, 0]],
		 *      ['text', [textNode, 0, 1]],
		 *      ['endProgram', [programNode]],
		 *      ['startProgram', [programNode, 2]],
		 *      ['openElement', [elementNode, 0, 1, 1]],
		 *      ['block', [blockNode, 0, 1]],
		 *      ['closeElement', [elementNode, 0, 1]],
		 *      ['endProgram', [programNode]]]
		 *
		 * The state of the traversal is maintained by a stack of frames.
		 * Whenever a node with children is entered (either a ProgramNode
		 * or an ElementNode) a frame is pushed onto the stack. The frame
		 * contains information about the state of the traversal of that
		 * node. For example,
		 *
		 *   - index of the current child node being visited
		 *   - the number of mustaches contained within its child nodes
		 *   - the list of actions generated by its child nodes
		 */function TemplateVisitor(){this.frameStack=[];this.actions=[];this.programDepth=-1;}// Traversal methods
	TemplateVisitor.prototype.visit=function(node){this[node.type](node);};TemplateVisitor.prototype.Program=function(program){this.programDepth++;var parentFrame=this.getCurrentFrame();var programFrame=this.pushFrame();programFrame.parentNode=program;programFrame.children=program.body;programFrame.childCount=program.body.length;programFrame.blankChildTextNodes=[];programFrame.actions.push(['endProgram',[program,this.programDepth]]);for(var i=program.body.length-1;i>=0;i--){programFrame.childIndex=i;this.visit(program.body[i]);}programFrame.actions.push(['startProgram',[program,programFrame.childTemplateCount,programFrame.blankChildTextNodes.reverse()]]);this.popFrame();this.programDepth--;// Push the completed template into the global actions list
	if(parentFrame){parentFrame.childTemplateCount++;}push.apply(this.actions,programFrame.actions.reverse());};TemplateVisitor.prototype.ElementNode=function(element){var parentFrame=this.getCurrentFrame();var elementFrame=this.pushFrame();elementFrame.parentNode=element;elementFrame.children=element.children;elementFrame.childCount=element.children.length;elementFrame.mustacheCount+=element.modifiers.length;elementFrame.blankChildTextNodes=[];var actionArgs=[element,parentFrame.childIndex,parentFrame.childCount];elementFrame.actions.push(['closeElement',actionArgs]);for(var i=element.attributes.length-1;i>=0;i--){this.visit(element.attributes[i]);}for(i=element.children.length-1;i>=0;i--){elementFrame.childIndex=i;this.visit(element.children[i]);}elementFrame.actions.push(['openElement',actionArgs.concat([elementFrame.mustacheCount,elementFrame.blankChildTextNodes.reverse()])]);this.popFrame();// Propagate the element's frame state to the parent frame
	if(elementFrame.mustacheCount>0){parentFrame.mustacheCount++;}parentFrame.childTemplateCount+=elementFrame.childTemplateCount;push.apply(parentFrame.actions,elementFrame.actions);};TemplateVisitor.prototype.AttrNode=function(attr){if(attr.value.type!=='TextNode'){this.getCurrentFrame().mustacheCount++;}};TemplateVisitor.prototype.TextNode=function(text){var frame=this.getCurrentFrame();if(text.chars===''){frame.blankChildTextNodes.push(domIndexOf(frame.children,text));}frame.actions.push(['text',[text,frame.childIndex,frame.childCount]]);};TemplateVisitor.prototype.BlockStatement=function(node){var frame=this.getCurrentFrame();frame.mustacheCount++;frame.actions.push(['block',[node,frame.childIndex,frame.childCount]]);if(node.inverse){this.visit(node.inverse);}if(node.program){this.visit(node.program);}};TemplateVisitor.prototype.ComponentNode=function(node){var frame=this.getCurrentFrame();frame.mustacheCount++;frame.actions.push(['component',[node,frame.childIndex,frame.childCount]]);if(node.program){this.visit(node.program);}};TemplateVisitor.prototype.PartialStatement=function(node){var frame=this.getCurrentFrame();frame.mustacheCount++;frame.actions.push(['mustache',[node,frame.childIndex,frame.childCount]]);};TemplateVisitor.prototype.CommentStatement=function(text){var frame=this.getCurrentFrame();frame.actions.push(['comment',[text,frame.childIndex,frame.childCount]]);};TemplateVisitor.prototype.MustacheStatement=function(mustache){var frame=this.getCurrentFrame();frame.mustacheCount++;frame.actions.push(['mustache',[mustache,frame.childIndex,frame.childCount]]);};// Frame helpers
	TemplateVisitor.prototype.getCurrentFrame=function(){return this.frameStack[this.frameStack.length-1];};TemplateVisitor.prototype.pushFrame=function(){var frame=new Frame();this.frameStack.push(frame);return frame;};TemplateVisitor.prototype.popFrame=function(){return this.frameStack.pop();};exports.default=TemplateVisitor;// Returns the index of `domNode` in the `nodes` array, skipping
	// over any nodes which do not represent DOM nodes.
	function domIndexOf(nodes,domNode){var index=-1;for(var i=0;i<nodes.length;i++){var node=nodes[i];if(node.type!=='TextNode'&&node.type!=='ElementNode'){continue;}else{index++;}if(node===domNode){return index;}}return-1;}/***/},/* 30 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.processOpcodes=processOpcodes;function processOpcodes(compiler,opcodes){for(var i=0,l=opcodes.length;i<l;i++){var method=opcodes[i][0];var params=opcodes[i][1];if(params){compiler[method].apply(compiler,params);}else{compiler[method].call(compiler);}}}/***/},/* 31 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.dump=exports.linkParams=exports.validateChildMorphs=exports.getAttrNamespace=exports.escapeExpression=exports.SafeString=undefined;var _safeString=__webpack_require__(32);var _safeString2=_interopRequireDefault(_safeString);var _utils=__webpack_require__(34);var _namespaces=__webpack_require__(35);var _morphUtils=__webpack_require__(36);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.SafeString=_safeString2.default;exports.escapeExpression=_utils.escapeExpression;exports.getAttrNamespace=_namespaces.getAttrNamespace;exports.validateChildMorphs=_morphUtils.validateChildMorphs;exports.linkParams=_morphUtils.linkParams;exports.dump=_morphUtils.dump;/***/},/* 32 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _safeString=__webpack_require__(33);var _safeString2=_interopRequireDefault(_safeString);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_safeString2.default;/***/},/* 33 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});// Build out our basic SafeString type
	function SafeString(string){this.string=string;}SafeString.prototype.toString=SafeString.prototype.toHTML=function(){return''+this.string;};exports.default=SafeString;/***/},/* 34 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.extend=extend;exports.indexOf=indexOf;exports.escapeExpression=escapeExpression;exports.isEmpty=isEmpty;exports.blockParams=blockParams;exports.appendContextPath=appendContextPath;var escape={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#x27;','`':'&#x60;'};var badChars=/[&<>"'`]/g,possible=/[&<>"'`]/;function escapeChar(chr){return escape[chr];}function extend(obj/* , ...source */){for(var i=1;i<arguments.length;i++){for(var key in arguments[i]){if(Object.prototype.hasOwnProperty.call(arguments[i],key)){obj[key]=arguments[i][key];}}}return obj;}var toString=exports.toString=Object.prototype.toString;// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */var isFunction=function isFunction(value){return typeof value==='function';};// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */if(isFunction(/x/)){exports.isFunction=isFunction=function isFunction(value){return typeof value==='function'&&toString.call(value)==='[object Function]';};}var isFunction=exports.isFunction=undefined;/*eslint-enable func-style, no-var *//* istanbul ignore next */var isArray=exports.isArray=Array.isArray||function(value){return value&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'?toString.call(value)==='[object Array]':false;};// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	function indexOf(array,value){for(var i=0,len=array.length;i<len;i++){if(array[i]===value){return i;}}return-1;}function escapeExpression(string){if(typeof string!=='string'){// don't escape SafeStrings, since they're already safe
	if(string&&string.toHTML){return string.toHTML();}else if(string==null){return'';}else if(!string){return string+'';}// Force a string conversion as this will be done by the append regardless and
	// the regex test will do this transparently behind the scenes, causing issues if
	// an object's to string has escaped characters in it.
	string=''+string;}if(!possible.test(string)){return string;}return string.replace(badChars,escapeChar);}function isEmpty(value){if(!value&&value!==0){return true;}else if(isArray(value)&&value.length===0){return true;}else{return false;}}function blockParams(params,ids){params.path=ids;return params;}function appendContextPath(contextPath,id){return(contextPath?contextPath+'.':'')+id;}/***/},/* 35 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.getAttrNamespace=getAttrNamespace;// ref http://dev.w3.org/html5/spec-LC/namespaces.html
	var defaultNamespaces={html:'http://www.w3.org/1999/xhtml',mathml:'http://www.w3.org/1998/Math/MathML',svg:'http://www.w3.org/2000/svg',xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace'};function getAttrNamespace(attrName,detectedNamespace){if(detectedNamespace){return detectedNamespace;}var namespace;var colonIndex=attrName.indexOf(':');if(colonIndex!==-1){var prefix=attrName.slice(0,colonIndex);namespace=defaultNamespaces[prefix];}return namespace||null;}/***/},/* 36 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.visitChildren=visitChildren;exports.validateChildMorphs=validateChildMorphs;exports.linkParams=linkParams;exports.dump=dump;/*globals console*/function visitChildren(nodes,callback){if(!nodes||nodes.length===0){return;}nodes=nodes.slice();while(nodes.length){var node=nodes.pop();callback(node);if(node.childNodes){nodes.push.apply(nodes,node.childNodes);}else if(node.firstChildMorph){var current=node.firstChildMorph;while(current){nodes.push(current);current=current.nextMorph;}}else if(node.morphList){var _current=node.morphList.firstChildMorph;while(_current){nodes.push(_current);_current=_current.nextMorph;}}}}function validateChildMorphs(env,morph,visitor){var morphList=morph.morphList;if(morph.morphList){var current=morphList.firstChildMorph;while(current){var next=current.nextMorph;validateChildMorphs(env,current,visitor);current=next;}}else if(morph.lastResult){morph.lastResult.revalidateWith(env,undefined,undefined,undefined,visitor);}else if(morph.childNodes){// This means that the childNodes were wired up manually
	for(var i=0,l=morph.childNodes.length;i<l;i++){validateChildMorphs(env,morph.childNodes[i],visitor);}}}function linkParams(env,scope,morph,path,params,hash){if(morph.linkedParams){return;}if(env.hooks.linkRenderNode(morph,env,scope,path,params,hash)){morph.linkedParams={params:params,hash:hash};}}function dump(node){console.group(node,node.isDirty);if(node.childNodes){map(node.childNodes,dump);}else if(node.firstChildMorph){var current=node.firstChildMorph;while(current){dump(current);current=current.nextMorph;}}else if(node.morphList){dump(node.morphList);}console.groupEnd();}function map(nodes,cb){for(var i=0,l=nodes.length;i<l;i++){cb(nodes[i]);}}/***/},/* 37 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utils=__webpack_require__(30);var _quoting=__webpack_require__(38);var svgNamespace='http://www.w3.org/2000/svg',// http://www.w3.org/html/wg/drafts/html/master/syntax.html#html-integration-point
	svgHTMLIntegrationPoints={'foreignObject':true,'desc':true,'title':true};function FragmentJavaScriptCompiler(){this.source=[];this.depth=-1;}exports.default=FragmentJavaScriptCompiler;FragmentJavaScriptCompiler.prototype.compile=function(opcodes,options){this.source.length=0;this.depth=-1;this.indent=options&&options.indent||'';this.namespaceFrameStack=[{namespace:null,depth:null}];this.domNamespace=null;this.source.push('function buildFragment(dom) {\n');(0,_utils.processOpcodes)(this,opcodes);this.source.push(this.indent+'}');return this.source.join('');};FragmentJavaScriptCompiler.prototype.createFragment=function(){var el='el'+ ++this.depth;this.source.push(this.indent+'  var '+el+' = dom.createDocumentFragment();\n');};FragmentJavaScriptCompiler.prototype.createElement=function(tagName){var el='el'+ ++this.depth;if(tagName==='svg'){this.pushNamespaceFrame({namespace:svgNamespace,depth:this.depth});}this.ensureNamespace();this.source.push(this.indent+'  var '+el+' = dom.createElement('+(0,_quoting.string)(tagName)+');\n');if(svgHTMLIntegrationPoints[tagName]){this.pushNamespaceFrame({namespace:null,depth:this.depth});}};FragmentJavaScriptCompiler.prototype.createText=function(str){var el='el'+ ++this.depth;this.source.push(this.indent+'  var '+el+' = dom.createTextNode('+(0,_quoting.string)(str)+');\n');};FragmentJavaScriptCompiler.prototype.createComment=function(str){var el='el'+ ++this.depth;this.source.push(this.indent+'  var '+el+' = dom.createComment('+(0,_quoting.string)(str)+');\n');};FragmentJavaScriptCompiler.prototype.returnNode=function(){var el='el'+this.depth;this.source.push(this.indent+'  return '+el+';\n');};FragmentJavaScriptCompiler.prototype.setAttribute=function(name,value,namespace){var el='el'+this.depth;if(namespace){this.source.push(this.indent+'  dom.setAttributeNS('+el+','+(0,_quoting.string)(namespace)+','+(0,_quoting.string)(name)+','+(0,_quoting.string)(value)+');\n');}else{this.source.push(this.indent+'  dom.setAttribute('+el+','+(0,_quoting.string)(name)+','+(0,_quoting.string)(value)+');\n');}};FragmentJavaScriptCompiler.prototype.appendChild=function(){if(this.depth===this.getCurrentNamespaceFrame().depth){this.popNamespaceFrame();}var child='el'+this.depth--;var el='el'+this.depth;this.source.push(this.indent+'  dom.appendChild('+el+', '+child+');\n');};FragmentJavaScriptCompiler.prototype.getCurrentNamespaceFrame=function(){return this.namespaceFrameStack[this.namespaceFrameStack.length-1];};FragmentJavaScriptCompiler.prototype.pushNamespaceFrame=function(frame){this.namespaceFrameStack.push(frame);};FragmentJavaScriptCompiler.prototype.popNamespaceFrame=function(){return this.namespaceFrameStack.pop();};FragmentJavaScriptCompiler.prototype.ensureNamespace=function(){var correctNamespace=this.getCurrentNamespaceFrame().namespace;if(this.domNamespace!==correctNamespace){this.source.push(this.indent+'  dom.setNamespace('+(correctNamespace?(0,_quoting.string)(correctNamespace):'null')+');\n');this.domNamespace=correctNamespace;}};/***/},/* 38 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hash=hash;exports.repeat=repeat;function escapeString(str){str=str.replace(/\\/g,'\\\\');str=str.replace(/"/g,'\\"');str=str.replace(/\n/g,'\\n');return str;}exports.escapeString=escapeString;function string(str){return'"'+escapeString(str)+'"';}exports.string=string;function array(a){return'['+a+']';}exports.array=array;function hash(pairs){return'{'+pairs.join(', ')+'}';}function repeat(chars,times){var str='';while(times--){str+=chars;}return str;}/***/},/* 39 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _templateVisitor=__webpack_require__(29);var _templateVisitor2=_interopRequireDefault(_templateVisitor);var _utils=__webpack_require__(30);var _htmlbarsUtil=__webpack_require__(31);var _arrayUtils=__webpack_require__(24);var _utils2=__webpack_require__(23);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function detectIsElementChecked(element){for(var i=0,len=element.attributes.length;i<len;i++){if(element.attributes[i].name==='checked'){return true;}}return false;}function HydrationOpcodeCompiler(){this.opcodes=[];this.paths=[];this.templateId=0;this.currentDOMChildIndex=0;this.morphs=[];this.morphNum=0;this.element=null;this.elementNum=-1;}exports.default=HydrationOpcodeCompiler;HydrationOpcodeCompiler.prototype.compile=function(ast){var templateVisitor=new _templateVisitor2.default();templateVisitor.visit(ast);(0,_utils.processOpcodes)(this,templateVisitor.actions);return this.opcodes;};HydrationOpcodeCompiler.prototype.accept=function(node){this[node.type](node);};HydrationOpcodeCompiler.prototype.opcode=function(type){var params=[].slice.call(arguments,1);this.opcodes.push([type,params]);};HydrationOpcodeCompiler.prototype.startProgram=function(program,c,blankChildTextNodes){this.opcodes.length=0;this.paths.length=0;this.morphs.length=0;this.templateId=0;this.currentDOMChildIndex=-1;this.morphNum=0;var blockParams=program.blockParams||[];for(var i=0;i<blockParams.length;i++){this.opcode('printSetHook',blockParams[i],i);}if(blankChildTextNodes.length>0){this.opcode('repairClonedNode',blankChildTextNodes);}};HydrationOpcodeCompiler.prototype.insertBoundary=function(first){this.opcode(first?'openBoundary':'closeBoundary');};HydrationOpcodeCompiler.prototype.endProgram=function(){distributeMorphs(this.morphs,this.opcodes);};HydrationOpcodeCompiler.prototype.text=function(){++this.currentDOMChildIndex;};HydrationOpcodeCompiler.prototype.comment=function(){++this.currentDOMChildIndex;};HydrationOpcodeCompiler.prototype.openElement=function(element,pos,len,mustacheCount,blankChildTextNodes){distributeMorphs(this.morphs,this.opcodes);++this.currentDOMChildIndex;this.element=this.currentDOMChildIndex;this.opcode('consumeParent',this.currentDOMChildIndex);// If our parent reference will be used more than once, cache its reference.
	if(mustacheCount>1){shareElement(this);}var isElementChecked=detectIsElementChecked(element);if(blankChildTextNodes.length>0||isElementChecked){this.opcode('repairClonedNode',blankChildTextNodes,isElementChecked);}this.paths.push(this.currentDOMChildIndex);this.currentDOMChildIndex=-1;(0,_arrayUtils.forEach)(element.attributes,this.attribute,this);(0,_arrayUtils.forEach)(element.modifiers,this.elementModifier,this);};HydrationOpcodeCompiler.prototype.closeElement=function(){distributeMorphs(this.morphs,this.opcodes);this.opcode('popParent');this.currentDOMChildIndex=this.paths.pop();};HydrationOpcodeCompiler.prototype.mustache=function(mustache,childIndex,childCount){this.pushMorphPlaceholderNode(childIndex,childCount);var opcode;if((0,_utils2.isHelper)(mustache)){prepareHash(this,mustache.hash);prepareParams(this,mustache.params);preparePath(this,mustache.path);opcode='printInlineHook';}else{preparePath(this,mustache.path);opcode='printContentHook';}var morphNum=this.morphNum++;var start=this.currentDOMChildIndex;var end=this.currentDOMChildIndex;this.morphs.push([morphNum,this.paths.slice(),start,end,mustache.escaped]);this.opcode(opcode,meta(mustache));};function meta(node){var loc=node.loc;if(!loc){return[];}var source=loc.source;var start=loc.start;var end=loc.end;return['loc',[source||null,[start.line,start.column],[end.line,end.column]]];}HydrationOpcodeCompiler.prototype.block=function(block,childIndex,childCount){this.pushMorphPlaceholderNode(childIndex,childCount);prepareHash(this,block.hash);prepareParams(this,block.params);preparePath(this,block.path);var morphNum=this.morphNum++;var start=this.currentDOMChildIndex;var end=this.currentDOMChildIndex;this.morphs.push([morphNum,this.paths.slice(),start,end,true]);var templateId=this.templateId++;var inverseId=block.inverse===null?null:this.templateId++;this.opcode('printBlockHook',templateId,inverseId,meta(block));};HydrationOpcodeCompiler.prototype.component=function(component,childIndex,childCount){this.pushMorphPlaceholderNode(childIndex,childCount,component.isStatic);var program=component.program||{};var blockParams=program.blockParams||[];var attrs=component.attributes;for(var i=attrs.length-1;i>=0;i--){var name=attrs[i].name;var value=attrs[i].value;// TODO: Introduce context specific AST nodes to avoid switching here.
	if(value.type==='TextNode'){this.opcode('pushLiteral',value.chars);}else if(value.type==='MustacheStatement'){this.accept((0,_utils2.unwrapMustache)(value));}else if(value.type==='ConcatStatement'){prepareParams(this,value.parts);this.opcode('pushConcatHook',this.morphNum);}this.opcode('pushLiteral',name);}var morphNum=this.morphNum++;var start=this.currentDOMChildIndex;var end=this.currentDOMChildIndex;this.morphs.push([morphNum,this.paths.slice(),start,end,true]);this.opcode('prepareObject',attrs.length);this.opcode('pushLiteral',component.tag);this.opcode('printComponentHook',this.templateId++,blockParams.length,meta(component));};HydrationOpcodeCompiler.prototype.attribute=function(attr){var value=attr.value;var escaped=true;var namespace=(0,_htmlbarsUtil.getAttrNamespace)(attr.name);// TODO: Introduce context specific AST nodes to avoid switching here.
	if(value.type==='TextNode'){return;}else if(value.type==='MustacheStatement'){escaped=value.escaped;this.accept((0,_utils2.unwrapMustache)(value));}else if(value.type==='ConcatStatement'){prepareParams(this,value.parts);this.opcode('pushConcatHook',this.morphNum);}this.opcode('pushLiteral',attr.name);var attrMorphNum=this.morphNum++;if(this.element!==null){shareElement(this);}this.opcode('createAttrMorph',attrMorphNum,this.elementNum,attr.name,escaped,namespace);this.opcode('printAttributeHook');};HydrationOpcodeCompiler.prototype.elementModifier=function(modifier){prepareHash(this,modifier.hash);prepareParams(this,modifier.params);preparePath(this,modifier.path);// If we have a helper in a node, and this element has not been cached, cache it
	if(this.element!==null){shareElement(this);}publishElementMorph(this);this.opcode('printElementHook',meta(modifier));};HydrationOpcodeCompiler.prototype.pushMorphPlaceholderNode=function(childIndex,childCount,skipBoundaryNodes){if(!skipBoundaryNodes){if(this.paths.length===0){if(childIndex===0){this.opcode('openBoundary');}if(childIndex===childCount-1){this.opcode('closeBoundary');}}}this.comment();};HydrationOpcodeCompiler.prototype.MustacheStatement=function(mustache){prepareHash(this,mustache.hash);prepareParams(this,mustache.params);preparePath(this,mustache.path);this.opcode('pushSexprHook',meta(mustache));};HydrationOpcodeCompiler.prototype.SubExpression=function(sexpr){prepareHash(this,sexpr.hash);prepareParams(this,sexpr.params);preparePath(this,sexpr.path);this.opcode('pushSexprHook',meta(sexpr));};HydrationOpcodeCompiler.prototype.PathExpression=function(path){this.opcode('pushGetHook',path.original,meta(path));};HydrationOpcodeCompiler.prototype.StringLiteral=function(node){this.opcode('pushLiteral',node.value);};HydrationOpcodeCompiler.prototype.BooleanLiteral=function(node){this.opcode('pushLiteral',node.value);};HydrationOpcodeCompiler.prototype.NumberLiteral=function(node){this.opcode('pushLiteral',node.value);};HydrationOpcodeCompiler.prototype.UndefinedLiteral=function(node){this.opcode('pushLiteral',node.value);};HydrationOpcodeCompiler.prototype.NullLiteral=function(node){this.opcode('pushLiteral',node.value);};function preparePath(compiler,path){compiler.opcode('pushLiteral',path.original);}function prepareParams(compiler,params){for(var i=params.length-1;i>=0;i--){var param=params[i];compiler[param.type](param);}compiler.opcode('prepareArray',params.length);}function prepareHash(compiler,hash){var pairs=hash.pairs;for(var i=pairs.length-1;i>=0;i--){var key=pairs[i].key;var value=pairs[i].value;compiler[value.type](value);compiler.opcode('pushLiteral',key);}compiler.opcode('prepareObject',pairs.length);}function shareElement(compiler){compiler.opcode('shareElement',++compiler.elementNum);compiler.element=null;// Set element to null so we don't cache it twice
	}function publishElementMorph(compiler){var morphNum=compiler.morphNum++;compiler.opcode('createElementMorph',morphNum,compiler.elementNum);}function distributeMorphs(morphs,opcodes){if(morphs.length===0){return;}// Splice morphs after the most recent shareParent/consumeParent.
	var o;for(o=opcodes.length-1;o>=0;--o){var opcode=opcodes[o][0];if(opcode==='shareElement'||opcode==='consumeParent'||opcode==='popParent'){break;}}var spliceArgs=[o+1,0];for(var i=0;i<morphs.length;++i){spliceArgs.push(['createMorph',morphs[i].slice()]);}opcodes.splice.apply(opcodes,spliceArgs);morphs.length=0;}/***/},/* 40 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utils=__webpack_require__(30);var _quoting=__webpack_require__(38);var _templateUtils=__webpack_require__(41);function HydrationJavaScriptCompiler(){this.stack=[];this.source=[];this.mustaches=[];this.parents=[['fragment']];this.parentCount=0;this.morphs=[];this.fragmentProcessing=[];this.hooks=undefined;}exports.default=HydrationJavaScriptCompiler;var prototype=HydrationJavaScriptCompiler.prototype;prototype.compile=function(opcodes,options){this.stack.length=0;this.mustaches.length=0;this.source.length=0;this.parents.length=1;this.parents[0]=['fragment'];this.morphs.length=0;this.fragmentProcessing.length=0;this.parentCount=0;this.indent=options&&options.indent||'';this.hooks={};this.hasOpenBoundary=false;this.hasCloseBoundary=false;this.statements=[];this.expressionStack=[];this.locals=[];this.hasOpenBoundary=false;this.hasCloseBoundary=false;(0,_utils.processOpcodes)(this,opcodes);if(this.hasOpenBoundary){this.source.unshift(this.indent+'  dom.insertBoundary(fragment, 0);\n');}if(this.hasCloseBoundary){this.source.unshift(this.indent+'  dom.insertBoundary(fragment, null);\n');}var i,l;var indent=this.indent;var morphs;var result={createMorphsProgram:'',hydrateMorphsProgram:'',fragmentProcessingProgram:'',statements:this.statements,locals:this.locals,hasMorphs:false};result.hydrateMorphsProgram=this.source.join('');if(this.morphs.length){result.hasMorphs=true;morphs=indent+'  var morphs = new Array('+this.morphs.length+');\n';for(i=0,l=this.morphs.length;i<l;++i){var morph=this.morphs[i];morphs+=indent+'  morphs['+i+'] = '+morph+';\n';}}if(this.fragmentProcessing.length){var processing='';for(i=0,l=this.fragmentProcessing.length;i<l;++i){processing+=this.indent+'  '+this.fragmentProcessing[i]+'\n';}result.fragmentProcessingProgram=processing;}var createMorphsProgram;if(result.hasMorphs){createMorphsProgram='function buildRenderNodes(dom, fragment, contextualElement) {\n'+result.fragmentProcessingProgram+morphs;if(this.hasOpenBoundary){createMorphsProgram+=indent+'  dom.insertBoundary(fragment, 0);\n';}if(this.hasCloseBoundary){createMorphsProgram+=indent+'  dom.insertBoundary(fragment, null);\n';}createMorphsProgram+=indent+'  return morphs;\n'+indent+'}';}else{createMorphsProgram='function buildRenderNodes() { return []; }';}result.createMorphsProgram=createMorphsProgram;return result;};prototype.prepareArray=function(length){var values=[];for(var i=0;i<length;i++){values.push(this.expressionStack.pop());}this.expressionStack.push(values);};prototype.prepareObject=function(size){var pairs=[];for(var i=0;i<size;i++){pairs.push(this.expressionStack.pop(),this.expressionStack.pop());}this.expressionStack.push(pairs);};prototype.openBoundary=function(){this.hasOpenBoundary=true;};prototype.closeBoundary=function(){this.hasCloseBoundary=true;};prototype.pushLiteral=function(value){this.expressionStack.push(value);};prototype.pushGetHook=function(path,meta){this.expressionStack.push((0,_templateUtils.buildStatement)('get',path,meta));};prototype.pushSexprHook=function(meta){var statement=(0,_templateUtils.buildStatement)('subexpr',this.expressionStack.pop(),this.expressionStack.pop(),this.expressionStack.pop(),meta);this.expressionStack.push(statement);};prototype.pushConcatHook=function(){this.expressionStack.push((0,_templateUtils.buildStatement)('concat',this.expressionStack.pop()));};prototype.printSetHook=function(name){this.locals.push(name);};prototype.printBlockHook=function(templateId,inverseId,meta){this.pushStatement('block',this.expressionStack.pop(),// path
	this.expressionStack.pop(),// params
	this.expressionStack.pop(),// hash
	templateId,inverseId,meta);};prototype.printInlineHook=function(meta){var path=this.expressionStack.pop();var params=this.expressionStack.pop();var hash=this.expressionStack.pop();this.pushStatement('inline',path,params,hash,meta);};prototype.printContentHook=function(meta){this.pushStatement('content',this.expressionStack.pop(),meta);};prototype.printComponentHook=function(templateId){this.pushStatement('component',this.expressionStack.pop(),// path
	this.expressionStack.pop(),// attrs
	templateId);};prototype.printAttributeHook=function(){this.pushStatement('attribute',this.expressionStack.pop(),// name
	this.expressionStack.pop()// value;
	);};prototype.printElementHook=function(meta){this.pushStatement('element',this.expressionStack.pop(),// path
	this.expressionStack.pop(),// params
	this.expressionStack.pop(),// hash
	meta);};prototype.createMorph=function(morphNum,parentPath,startIndex,endIndex,escaped){var isRoot=parentPath.length===0;var parent=this.getParent();var morphMethod=escaped?'createMorphAt':'createUnsafeMorphAt';var morph='dom.'+morphMethod+'('+parent+','+(startIndex===null?'-1':startIndex)+','+(endIndex===null?'-1':endIndex)+(isRoot?',contextualElement)':')');this.morphs[morphNum]=morph;};prototype.createAttrMorph=function(attrMorphNum,elementNum,name,escaped,namespace){var morphMethod=escaped?'createAttrMorph':'createUnsafeAttrMorph';var morph='dom.'+morphMethod+'(element'+elementNum+', \''+name+(namespace?'\', \''+namespace:'')+'\')';this.morphs[attrMorphNum]=morph;};prototype.createElementMorph=function(morphNum,elementNum){var morphMethod='createElementMorph';var morph='dom.'+morphMethod+'(element'+elementNum+')';this.morphs[morphNum]=morph;};prototype.repairClonedNode=function(blankChildTextNodes,isElementChecked){var parent=this.getParent(),processing='if (this.cachedFragment) { dom.repairClonedNode('+parent+','+(0,_quoting.array)(blankChildTextNodes)+(isElementChecked?',true':'')+'); }';this.fragmentProcessing.push(processing);};prototype.shareElement=function(elementNum){var elementNodesName='element'+elementNum;this.fragmentProcessing.push('var '+elementNodesName+' = '+this.getParent()+';');this.parents[this.parents.length-1]=[elementNodesName];};prototype.consumeParent=function(i){var newParent=this.lastParent().slice();newParent.push(i);this.parents.push(newParent);};prototype.popParent=function(){this.parents.pop();};prototype.getParent=function(){var last=this.lastParent().slice();var frag=last.shift();if(!last.length){return frag;}return'dom.childAt('+frag+', ['+last.join(', ')+'])';};prototype.lastParent=function(){return this.parents[this.parents.length-1];};prototype.pushStatement=function(){this.statements.push(_templateUtils.buildStatement.apply(undefined,arguments));};/***/},/* 41 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.RenderState=RenderState;exports.blockFor=blockFor;exports.renderAndCleanup=renderAndCleanup;exports.clearMorph=clearMorph;exports.clearMorphList=clearMorphList;exports.buildStatement=buildStatement;var _morphUtils=__webpack_require__(36);var _render=__webpack_require__(42);function RenderState(renderNode,morphList){// The morph list that is no longer needed and can be
	// destroyed.
	this.morphListToClear=morphList;// The morph list that needs to be pruned of any items
	// that were not yielded on a subsequent render.
	this.morphListToPrune=null;// A map of morphs for each item yielded in during this
	// rendering pass. Any morphs in the DOM but not in this map
	// will be pruned during cleanup.
	this.handledMorphs={};this.collisions=undefined;// The morph to clear once rendering is complete. By
	// default, we set this to the previous morph (to catch
	// the case where nothing is yielded; in that case, we
	// should just clear the morph). Otherwise this gets set
	// to null if anything is rendered.
	this.morphToClear=renderNode;this.shadowOptions=null;}function Block(render,template,blockOptions){this.render=render;this.template=template;this.blockOptions=blockOptions;this.arity=template.arity;}Block.prototype.invoke=function(env,blockArguments,_self,renderNode,parentScope,visitor){if(renderNode.lastResult){renderNode.lastResult.revalidateWith(env,undefined,_self,blockArguments,visitor);}else{this._firstRender(env,blockArguments,_self,renderNode,parentScope);}};Block.prototype._firstRender=function(env,blockArguments,_self,renderNode,parentScope){var options={renderState:new RenderState(renderNode)};var render=this.render;var template=this.template;var scope=this.blockOptions.scope;var shadowScope=scope?env.hooks.createChildScope(scope):env.hooks.createFreshScope();env.hooks.bindShadowScope(env,parentScope,shadowScope,this.blockOptions.options);if(_self!==undefined){env.hooks.bindSelf(env,shadowScope,_self);}else if(this.blockOptions.self!==undefined){env.hooks.bindSelf(env,shadowScope,this.blockOptions.self);}bindBlocks(env,shadowScope,this.blockOptions.yieldTo);renderAndCleanup(renderNode,env,options,null,function(){options.renderState.morphToClear=null;var renderOptions=new _render.RenderOptions(renderNode,undefined,blockArguments);render(template,env,shadowScope,renderOptions);});};function blockFor(render,template,blockOptions){return new Block(render,template,blockOptions);}function bindBlocks(env,shadowScope,blocks){if(!blocks){return;}if(blocks instanceof Block){env.hooks.bindBlock(env,shadowScope,blocks);}else{for(var name in blocks){if(blocks.hasOwnProperty(name)){env.hooks.bindBlock(env,shadowScope,blocks[name],name);}}}}function renderAndCleanup(morph,env,options,shadowOptions,callback){// The RenderState object is used to collect information about what the
	// helper or hook being invoked has yielded. Once it has finished either
	// yielding multiple items (via yieldItem) or a single template (via
	// yieldTemplate), we detect what was rendered and how it differs from
	// the previous render, cleaning up old state in DOM as appropriate.
	var renderState=options.renderState;renderState.collisions=undefined;renderState.shadowOptions=shadowOptions;// Invoke the callback, instructing it to save information about what it
	// renders into RenderState.
	var result=callback(options);// The hook can opt-out of cleanup if it handled cleanup itself.
	if(result&&result.handled){return;}var morphMap=morph.morphMap;// Walk the morph list, clearing any items that were yielded in a previous
	// render but were not yielded during this render.
	var morphList=renderState.morphListToPrune;if(morphList){var handledMorphs=renderState.handledMorphs;var item=morphList.firstChildMorph;while(item){var next=item.nextMorph;// If we don't see the key in handledMorphs, it wasn't
	// yielded in and we can safely remove it from DOM.
	if(!(item.key in handledMorphs)){morphMap[item.key]=undefined;clearMorph(item,env,true);item.destroy();}item=next;}}morphList=renderState.morphListToClear;if(morphList){clearMorphList(morphList,morph,env);}var toClear=renderState.morphToClear;if(toClear){clearMorph(toClear,env);}}function clearMorph(morph,env,destroySelf){var cleanup=env.hooks.cleanupRenderNode;var destroy=env.hooks.destroyRenderNode;var willCleanup=env.hooks.willCleanupTree;var didCleanup=env.hooks.didCleanupTree;function destroyNode(node){if(cleanup){cleanup(node);}if(destroy){destroy(node);}}if(willCleanup){willCleanup(env,morph,destroySelf);}if(cleanup){cleanup(morph);}if(destroySelf&&destroy){destroy(morph);}(0,_morphUtils.visitChildren)(morph.childNodes,destroyNode);// TODO: Deal with logical children that are not in the DOM tree
	morph.clear();if(didCleanup){didCleanup(env,morph,destroySelf);}morph.lastResult=null;morph.lastYielded=null;morph.childNodes=null;}function clearMorphList(morphList,morph,env){var item=morphList.firstChildMorph;while(item){var next=item.nextMorph;morph.morphMap[item.key]=undefined;clearMorph(item,env,true);item.destroy();item=next;}// Remove the MorphList from the morph.
	morphList.clear();morph.morphList=null;}function buildStatement(){var statement=[].concat(Array.prototype.slice.call(arguments));// ensure array length is 7 by padding with 0
	for(var i=arguments.length;i<7;i++){statement[i]=0;}return statement;}/***/},/* 42 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=render;exports.RenderOptions=RenderOptions;exports.manualElement=manualElement;exports.attachAttributes=attachAttributes;exports.createChildMorph=createChildMorph;exports.getCachedFragment=getCachedFragment;var _morphUtils=__webpack_require__(36);var _nodeVisitor=__webpack_require__(43);var _nodeVisitor2=_interopRequireDefault(_nodeVisitor);var _morph=__webpack_require__(45);var _morph2=_interopRequireDefault(_morph);var _templateUtils=__webpack_require__(41);var _voidTagNames=__webpack_require__(26);var _voidTagNames2=_interopRequireDefault(_voidTagNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var svgNamespace='http://www.w3.org/2000/svg';function render(template,env,scope,options){var dom=env.dom;var contextualElement;if(options){if(options.renderNode){contextualElement=options.renderNode.contextualElement;}else if(options.contextualElement){contextualElement=options.contextualElement;}}dom.detectNamespace(contextualElement);var renderResult=RenderResult.build(env,scope,template,options,contextualElement);renderResult.render();return renderResult;}function RenderOptions(renderNode,self,blockArguments,contextualElement){this.renderNode=renderNode||null;this.self=self;this.blockArguments=blockArguments||null;this.contextualElement=contextualElement||null;}function RenderResult(env,scope,options,rootNode,ownerNode,nodes,fragment,template,shouldSetContent){this.root=rootNode;this.fragment=fragment;this.nodes=nodes;this.template=template;this.statements=template.statements.slice();this.env=env;this.scope=scope;this.shouldSetContent=shouldSetContent;if(options.self!==undefined){this.bindSelf(options.self);}if(options.blockArguments!==undefined){this.bindLocals(options.blockArguments);}this.initializeNodes(ownerNode);}RenderResult.build=function(env,scope,template,options,contextualElement){var dom=env.dom;var fragment=getCachedFragment(template,env);var nodes=template.buildRenderNodes(dom,fragment,contextualElement);var rootNode,ownerNode,shouldSetContent;if(options&&options.renderNode){rootNode=options.renderNode;ownerNode=rootNode.ownerNode;shouldSetContent=true;}else{rootNode=dom.createMorph(null,fragment.firstChild,fragment.lastChild,contextualElement);ownerNode=rootNode;rootNode.ownerNode=ownerNode;shouldSetContent=false;}if(rootNode.childNodes){(0,_morphUtils.visitChildren)(rootNode.childNodes,function(node){(0,_templateUtils.clearMorph)(node,env,true);});}rootNode.childNodes=nodes;return new RenderResult(env,scope,options,rootNode,ownerNode,nodes,fragment,template,shouldSetContent);};function manualElement(tagName,attributes,_isEmpty){var statements=[];for(var key in attributes){if(typeof attributes[key]==='string'){continue;}statements.push((0,_templateUtils.buildStatement)('attribute',key,attributes[key]));}var isEmpty=_isEmpty||_voidTagNames2.default[tagName];if(!isEmpty){statements.push((0,_templateUtils.buildStatement)('content','yield'));}var template={arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();if(tagName==='svg'){dom.setNamespace(svgNamespace);}var el1=dom.createElement(tagName);for(var key in attributes){if(typeof attributes[key]!=='string'){continue;}dom.setAttribute(el1,key,attributes[key]);}if(!isEmpty){var el2=dom.createComment('');dom.appendChild(el1,el2);}dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment){var element=dom.childAt(fragment,[0]);var morphs=[];for(var key in attributes){if(typeof attributes[key]==='string'){continue;}morphs.push(dom.createAttrMorph(element,key));}if(!isEmpty){morphs.push(dom.createMorphAt(element,0,0));}return morphs;},statements:statements,locals:[],templates:[]};return template;}function attachAttributes(attributes){var statements=[];for(var key in attributes){if(typeof attributes[key]==='string'){continue;}statements.push((0,_templateUtils.buildStatement)('attribute',key,attributes[key]));}var template={arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=this.element;if(el0.namespaceURI==='http://www.w3.org/2000/svg'){dom.setNamespace(svgNamespace);}for(var key in attributes){if(typeof attributes[key]!=='string'){continue;}dom.setAttribute(el0,key,attributes[key]);}return el0;},buildRenderNodes:function buildRenderNodes(dom){var element=this.element;var morphs=[];for(var key in attributes){if(typeof attributes[key]==='string'){continue;}morphs.push(dom.createAttrMorph(element,key));}return morphs;},statements:statements,locals:[],templates:[],element:null};return template;}RenderResult.prototype.initializeNodes=function(ownerNode){var childNodes=this.root.childNodes;for(var i=0,l=childNodes.length;i<l;i++){childNodes[i].ownerNode=ownerNode;}};RenderResult.prototype.render=function(){this.root.lastResult=this;this.root.rendered=true;this.populateNodes(_nodeVisitor.AlwaysDirtyVisitor);if(this.shouldSetContent&&this.root.setContent){this.root.setContent(this.fragment);}};RenderResult.prototype.dirty=function(){(0,_morphUtils.visitChildren)([this.root],function(node){node.isDirty=true;});};RenderResult.prototype.revalidate=function(env,self,blockArguments,scope){this.revalidateWith(env,scope,self,blockArguments,_nodeVisitor2.default);};RenderResult.prototype.rerender=function(env,self,blockArguments,scope){this.revalidateWith(env,scope,self,blockArguments,_nodeVisitor.AlwaysDirtyVisitor);};RenderResult.prototype.revalidateWith=function(env,scope,self,blockArguments,visitor){if(env!==undefined){this.env=env;}if(scope!==undefined){this.scope=scope;}this.updateScope();if(self!==undefined){this.updateSelf(self);}if(blockArguments!==undefined){this.updateLocals(blockArguments);}this.populateNodes(visitor);};RenderResult.prototype.destroy=function(){var rootNode=this.root;(0,_templateUtils.clearMorph)(rootNode,this.env,true);};RenderResult.prototype.populateNodes=function(visitor){var env=this.env;var scope=this.scope;var template=this.template;var nodes=this.nodes;var statements=this.statements;var i,l;for(i=0,l=statements.length;i<l;i++){var statement=statements[i];var morph=nodes[i];if(env.hooks.willRenderNode){env.hooks.willRenderNode(morph,env,scope);}switch(statement[0]){case'block':visitor.block(statement,morph,env,scope,template,visitor);break;case'inline':visitor.inline(statement,morph,env,scope,visitor);break;case'content':visitor.content(statement,morph,env,scope,visitor);break;case'element':visitor.element(statement,morph,env,scope,template,visitor);break;case'attribute':visitor.attribute(statement,morph,env,scope);break;case'component':visitor.component(statement,morph,env,scope,template,visitor);break;}if(env.hooks.didRenderNode){env.hooks.didRenderNode(morph,env,scope);}}};RenderResult.prototype.bindScope=function(){this.env.hooks.bindScope(this.env,this.scope);};RenderResult.prototype.updateScope=function(){this.env.hooks.updateScope(this.env,this.scope);};RenderResult.prototype.bindSelf=function(self){this.env.hooks.bindSelf(this.env,this.scope,self);};RenderResult.prototype.updateSelf=function(self){this.env.hooks.updateSelf(this.env,this.scope,self);};RenderResult.prototype.bindLocals=function(blockArguments){var localNames=this.template.locals;for(var i=0,l=localNames.length;i<l;i++){this.env.hooks.bindLocal(this.env,this.scope,localNames[i],blockArguments[i]);}};RenderResult.prototype.updateLocals=function(blockArguments){var localNames=this.template.locals;for(var i=0,l=localNames.length;i<l;i++){this.env.hooks.updateLocal(this.env,this.scope,localNames[i],blockArguments[i]);}};function initializeNode(node,owner){node.ownerNode=owner;}function createChildMorph(dom,parentMorph,contextualElement){var morph=_morph2.default.empty(dom,contextualElement||parentMorph.contextualElement);initializeNode(morph,parentMorph.ownerNode);return morph;}function getCachedFragment(template,env){var dom=env.dom,fragment;if(env.useFragmentCache&&dom.canClone){if(template.cachedFragment===null){fragment=template.buildFragment(dom);if(template.hasRendered){template.cachedFragment=fragment;}else{template.hasRendered=true;}}if(template.cachedFragment){fragment=dom.cloneNode(template.cachedFragment,true);}}else if(!fragment){fragment=template.buildFragment(dom);}return fragment;}/***/},/* 43 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.AlwaysDirtyVisitor=undefined;var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _morphUtils=__webpack_require__(36);var _expressionVisitor=__webpack_require__(44);/**
		  Node classification:

		  # Primary Statement Nodes:

		  These nodes are responsible for a render node that represents a morph-range.

		  * block
		  * inline
		  * content
		  * element
		  * component

		  # Leaf Statement Nodes:

		  This node is responsible for a render node that represents a morph-attr.

		  * attribute
		*/function linkParamsAndHash(env,scope,morph,path,params,hash){if(morph.linkedParams){params=morph.linkedParams.params;hash=morph.linkedParams.hash;}else{params=params&&(0,_expressionVisitor.acceptParams)(params,env,scope);hash=hash&&(0,_expressionVisitor.acceptHash)(hash,env,scope);}(0,_morphUtils.linkParams)(env,scope,morph,path,params,hash);return[params,hash];}var AlwaysDirtyVisitor=exports.AlwaysDirtyVisitor={block:function block(node,morph,env,scope,template,visitor){var _node=_slicedToArray(node,6);var path=_node[1];var params=_node[2];var hash=_node[3];var templateId=_node[4];var inverseId=_node[5];var paramsAndHash=linkParamsAndHash(env,scope,morph,path,params,hash);morph.isDirty=morph.isSubtreeDirty=false;env.hooks.block(morph,env,scope,path,paramsAndHash[0],paramsAndHash[1],templateId===null?null:template.templates[templateId],inverseId===null?null:template.templates[inverseId],visitor);},inline:function inline(node,morph,env,scope,visitor){var _node2=_slicedToArray(node,4);var path=_node2[1];var params=_node2[2];var hash=_node2[3];var paramsAndHash=linkParamsAndHash(env,scope,morph,path,params,hash);morph.isDirty=morph.isSubtreeDirty=false;env.hooks.inline(morph,env,scope,path,paramsAndHash[0],paramsAndHash[1],visitor);},content:function content(node,morph,env,scope,visitor){var _node3=_slicedToArray(node,2);var path=_node3[1];morph.isDirty=morph.isSubtreeDirty=false;if(isHelper(env,scope,path)){env.hooks.inline(morph,env,scope,path,[],{},visitor);if(morph.linkedResult){(0,_morphUtils.linkParams)(env,scope,morph,'@content-helper',[morph.linkedResult],null);}return;}var params=void 0;if(morph.linkedParams){params=morph.linkedParams.params;}else{params=[env.hooks.get(env,scope,path)];}(0,_morphUtils.linkParams)(env,scope,morph,'@range',params,null);env.hooks.range(morph,env,scope,path,params[0],visitor);},element:function element(node,morph,env,scope,visitor){var _node4=_slicedToArray(node,4);var path=_node4[1];var params=_node4[2];var hash=_node4[3];var paramsAndHash=linkParamsAndHash(env,scope,morph,path,params,hash);morph.isDirty=morph.isSubtreeDirty=false;env.hooks.element(morph,env,scope,path,paramsAndHash[0],paramsAndHash[1],visitor);},attribute:function attribute(node,morph,env,scope){var _node5=_slicedToArray(node,3);var name=_node5[1];var value=_node5[2];var paramsAndHash=linkParamsAndHash(env,scope,morph,'@attribute',[value],null);morph.isDirty=morph.isSubtreeDirty=false;env.hooks.attribute(morph,env,scope,name,paramsAndHash[0][0]);},component:function component(node,morph,env,scope,template,visitor){var _node6=_slicedToArray(node,5);var path=_node6[1];var attrs=_node6[2];var templateId=_node6[3];var inverseId=_node6[4];var paramsAndHash=linkParamsAndHash(env,scope,morph,path,[],attrs);var templates={default:template.templates[templateId],inverse:template.templates[inverseId]};morph.isDirty=morph.isSubtreeDirty=false;env.hooks.component(morph,env,scope,path,paramsAndHash[0],paramsAndHash[1],templates,visitor);},attributes:function attributes(node,morph,env,scope,parentMorph,visitor){var _node7=_slicedToArray(node,2);var template=_node7[1];env.hooks.attributes(morph,env,scope,template,parentMorph,visitor);}};exports.default={block:function block(node,morph,env,scope,template,visitor){dirtyCheck(env,morph,visitor,function(visitor){AlwaysDirtyVisitor.block(node,morph,env,scope,template,visitor);});},inline:function inline(node,morph,env,scope,visitor){dirtyCheck(env,morph,visitor,function(visitor){AlwaysDirtyVisitor.inline(node,morph,env,scope,visitor);});},content:function content(node,morph,env,scope,visitor){dirtyCheck(env,morph,visitor,function(visitor){AlwaysDirtyVisitor.content(node,morph,env,scope,visitor);});},element:function element(node,morph,env,scope,template,visitor){dirtyCheck(env,morph,visitor,function(visitor){AlwaysDirtyVisitor.element(node,morph,env,scope,template,visitor);});},attribute:function attribute(node,morph,env,scope,template){dirtyCheck(env,morph,null,function(){AlwaysDirtyVisitor.attribute(node,morph,env,scope,template);});},component:function component(node,morph,env,scope,template,visitor){dirtyCheck(env,morph,visitor,function(visitor){AlwaysDirtyVisitor.component(node,morph,env,scope,template,visitor);});},attributes:function attributes(node,morph,env,scope,parentMorph,visitor){AlwaysDirtyVisitor.attributes(node,morph,env,scope,parentMorph,visitor);}};function dirtyCheck(_env,morph,visitor,callback){var isDirty=morph.isDirty;var isSubtreeDirty=morph.isSubtreeDirty;var env=_env;if(isSubtreeDirty){visitor=AlwaysDirtyVisitor;}if(isDirty||isSubtreeDirty){callback(visitor);}else{if(morph.buildChildEnv){env=morph.buildChildEnv(morph.getState(),env);}(0,_morphUtils.validateChildMorphs)(env,morph,visitor);}}function isHelper(env,scope,path){return env.hooks.keywords[path]!==undefined||env.hooks.hasHelper(env,scope,path);}/***/},/* 44 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();exports.acceptParams=acceptParams;exports.acceptHash=acceptHash;/**
		  # Expression Nodes:

		  These nodes are not directly responsible for any part of the DOM, but are
		  eventually passed to a Statement Node.

		  * get
		  * subexpr
		  * concat
		*/function acceptParams(nodes,env,scope){var array=[];for(var i=0,l=nodes.length;i<l;i++){array.push(acceptExpression(nodes[i],env,scope).value);}return array;}function acceptHash(pairs,env,scope){var object={};for(var i=0,l=pairs.length;i<l;i+=2){var key=pairs[i];var value=pairs[i+1];object[key]=acceptExpression(value,env,scope).value;}return object;}function acceptExpression(node,env,scope){var ret={value:null};// Primitive literals are unambiguously non-array representations of
	// themselves.
	if(Array.isArray(node)){// if (node.length !== 7) { throw new Error('FIXME: Invalid statement length!'); }
	ret.value=evaluateNode(node,env,scope);}else{ret.value=node;}return ret;}function evaluateNode(node,env,scope){switch(node[0]){// can be used by manualElement
	case'value':return node[1];case'get':return evaluateGet(node,env,scope);case'subexpr':return evaluateSubexpr(node,env,scope);case'concat':return evaluateConcat(node,env,scope);}}function evaluateGet(node,env,scope){var _node=_slicedToArray(node,2);var path=_node[1];return env.hooks.get(env,scope,path);}function evaluateSubexpr(node,env,scope){var _node2=_slicedToArray(node,4);var path=_node2[1];var rawParams=_node2[2];var rawHash=_node2[3];var params=acceptParams(rawParams,env,scope);var hash=acceptHash(rawHash,env,scope);return env.hooks.subexpr(env,scope,path,params,hash);}function evaluateConcat(node,env,scope){var _node3=_slicedToArray(node,2);var rawParts=_node3[1];var parts=acceptParams(rawParts,env,scope);return env.hooks.concat(env,parts);}/***/},/* 45 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _morphRange=__webpack_require__(46);var _morphRange2=_interopRequireDefault(_morphRange);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var guid=1;function HTMLBarsMorph(domHelper,contextualElement){this.super$constructor(domHelper,contextualElement);this._state=undefined;this.ownerNode=null;this.isDirty=false;this.isSubtreeDirty=false;this.lastYielded=null;this.lastResult=null;this.lastValue=null;this.buildChildEnv=null;this.morphList=null;this.morphMap=null;this.key=null;this.linkedParams=null;this.linkedResult=null;this.childNodes=null;this.rendered=false;this.guid='range'+guid++;this.seen=false;}HTMLBarsMorph.empty=function(domHelper,contextualElement){var morph=new HTMLBarsMorph(domHelper,contextualElement);morph.clear();return morph;};HTMLBarsMorph.create=function(domHelper,contextualElement,node){var morph=new HTMLBarsMorph(domHelper,contextualElement);morph.setNode(node);return morph;};HTMLBarsMorph.attach=function(domHelper,contextualElement,firstNode,lastNode){var morph=new HTMLBarsMorph(domHelper,contextualElement);morph.setRange(firstNode,lastNode);return morph;};var prototype=HTMLBarsMorph.prototype=Object.create(_morphRange2.default.prototype);prototype.constructor=HTMLBarsMorph;prototype.super$constructor=_morphRange2.default;prototype.getState=function(){if(!this._state){this._state={};}return this._state;};prototype.setState=function(newState){/*jshint -W093 */return this._state=newState;};exports.default=HTMLBarsMorph;/***/},/* 46 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var _utils=__webpack_require__(47);// constructor just initializes the fields
	// use one of the static initializers to create a valid morph.
	function Morph(domHelper,contextualElement){this.domHelper=domHelper;// context if content if current content is detached
	this.contextualElement=contextualElement;// inclusive range of morph
	// these should be nodeType 1, 3, or 8
	this.firstNode=null;this.lastNode=null;// flag to force text to setContent to be treated as html
	this.parseTextAsHTML=false;// morph list graph
	this.parentMorphList=null;this.previousMorph=null;this.nextMorph=null;}Morph.empty=function(domHelper,contextualElement){var morph=new Morph(domHelper,contextualElement);morph.clear();return morph;};Morph.create=function(domHelper,contextualElement,node){var morph=new Morph(domHelper,contextualElement);morph.setNode(node);return morph;};Morph.attach=function(domHelper,contextualElement,firstNode,lastNode){var morph=new Morph(domHelper,contextualElement);morph.setRange(firstNode,lastNode);return morph;};Morph.prototype.setContent=function Morph$setContent(content){if(content===null||content===undefined){return this.clear();}var type=typeof content==='undefined'?'undefined':_typeof(content);switch(type){case'string':if(this.parseTextAsHTML){return this.domHelper.setMorphHTML(this,content);}return this.setText(content);case'object':if(typeof content.nodeType==='number'){return this.setNode(content);}/* Handlebars.SafeString */if(typeof content.toHTML==='function'){return this.setHTML(content.toHTML());}if(this.parseTextAsHTML){return this.setHTML(content.toString());}/* falls through */case'boolean':case'number':return this.setText(content.toString());case'function':raiseCannotBindToFunction(content);default:throw new TypeError('unsupported content');}};function raiseCannotBindToFunction(content){var functionName=content.name;var message;if(functionName){message='Unsupported Content: Cannot bind to function `'+functionName+'`';}else{message='Unsupported Content: Cannot bind to function';}throw new TypeError(message);}Morph.prototype.clear=function Morph$clear(){var node=this.setNode(this.domHelper.createComment(''));return node;};Morph.prototype.setText=function Morph$setText(text){var firstNode=this.firstNode;var lastNode=this.lastNode;if(firstNode&&lastNode===firstNode&&firstNode.nodeType===3){firstNode.nodeValue=text;return firstNode;}return this.setNode(text?this.domHelper.createTextNode(text):this.domHelper.createComment(''));};Morph.prototype.setNode=function Morph$setNode(newNode){var firstNode,lastNode;switch(newNode.nodeType){case 3:firstNode=newNode;lastNode=newNode;break;case 11:firstNode=newNode.firstChild;lastNode=newNode.lastChild;if(firstNode===null){firstNode=this.domHelper.createComment('');newNode.appendChild(firstNode);lastNode=firstNode;}break;default:firstNode=newNode;lastNode=newNode;break;}this.setRange(firstNode,lastNode);return newNode;};Morph.prototype.setRange=function(firstNode,lastNode){var previousFirstNode=this.firstNode;if(previousFirstNode!==null){var parentNode=previousFirstNode.parentNode;if(parentNode!==null){(0,_utils.insertBefore)(parentNode,firstNode,lastNode,previousFirstNode);(0,_utils.clear)(parentNode,previousFirstNode,this.lastNode);}}this.firstNode=firstNode;this.lastNode=lastNode;if(this.parentMorphList){this._syncFirstNode();this._syncLastNode();}};Morph.prototype.destroy=function Morph$destroy(){this.unlink();var firstNode=this.firstNode;var lastNode=this.lastNode;var parentNode=firstNode&&firstNode.parentNode;this.firstNode=null;this.lastNode=null;(0,_utils.clear)(parentNode,firstNode,lastNode);};Morph.prototype.unlink=function Morph$unlink(){var parentMorphList=this.parentMorphList;var previousMorph=this.previousMorph;var nextMorph=this.nextMorph;if(previousMorph){if(nextMorph){previousMorph.nextMorph=nextMorph;nextMorph.previousMorph=previousMorph;}else{previousMorph.nextMorph=null;parentMorphList.lastChildMorph=previousMorph;}}else{if(nextMorph){nextMorph.previousMorph=null;parentMorphList.firstChildMorph=nextMorph;}else if(parentMorphList){parentMorphList.lastChildMorph=parentMorphList.firstChildMorph=null;}}this.parentMorphList=null;this.nextMorph=null;this.previousMorph=null;if(parentMorphList&&parentMorphList.mountedMorph){if(!parentMorphList.firstChildMorph){// list is empty
	parentMorphList.mountedMorph.clear();return;}else{parentMorphList.firstChildMorph._syncFirstNode();parentMorphList.lastChildMorph._syncLastNode();}}};Morph.prototype.setHTML=function(text){var fragment=this.domHelper.parseHTML(text,this.contextualElement);return this.setNode(fragment);};Morph.prototype.setMorphList=function Morph$appendMorphList(morphList){morphList.mountedMorph=this;this.clear();var originalFirstNode=this.firstNode;if(morphList.firstChildMorph){this.firstNode=morphList.firstChildMorph.firstNode;this.lastNode=morphList.lastChildMorph.lastNode;var current=morphList.firstChildMorph;while(current){var next=current.nextMorph;current.insertBeforeNode(originalFirstNode,null);current=next;}originalFirstNode.parentNode.removeChild(originalFirstNode);}};Morph.prototype._syncFirstNode=function Morph$syncFirstNode(){var morph=this;var parentMorphList;while(parentMorphList=morph.parentMorphList){if(parentMorphList.mountedMorph===null){break;}if(morph!==parentMorphList.firstChildMorph){break;}if(morph.firstNode===parentMorphList.mountedMorph.firstNode){break;}parentMorphList.mountedMorph.firstNode=morph.firstNode;morph=parentMorphList.mountedMorph;}};Morph.prototype._syncLastNode=function Morph$syncLastNode(){var morph=this;var parentMorphList;while(parentMorphList=morph.parentMorphList){if(parentMorphList.mountedMorph===null){break;}if(morph!==parentMorphList.lastChildMorph){break;}if(morph.lastNode===parentMorphList.mountedMorph.lastNode){break;}parentMorphList.mountedMorph.lastNode=morph.lastNode;morph=parentMorphList.mountedMorph;}};Morph.prototype.insertBeforeNode=function Morph$insertBeforeNode(parentNode,refNode){(0,_utils.insertBefore)(parentNode,this.firstNode,this.lastNode,refNode);};Morph.prototype.appendToNode=function Morph$appendToNode(parentNode){(0,_utils.insertBefore)(parentNode,this.firstNode,this.lastNode,null);};exports.default=Morph;/***/},/* 47 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.clear=clear;exports.insertBefore=insertBefore;// inclusive of both nodes
	function clear(parentNode,firstNode,lastNode){if(!parentNode){return;}var node=firstNode;var nextNode;do{nextNode=node.nextSibling;parentNode.removeChild(node);if(node===lastNode){break;}node=nextNode;}while(node);}function insertBefore(parentNode,firstNode,lastNode,refNode){var node=firstNode;var nextNode;do{nextNode=node.nextSibling;parentNode.insertBefore(node,refNode);if(node===lastNode){break;}node=nextNode;}while(node);}/***/},/* 48 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.keywords=undefined;exports.wrap=wrap;exports.wrapForHelper=wrapForHelper;exports.createScope=createScope;exports.createFreshScope=createFreshScope;exports.bindShadowScope=bindShadowScope;exports.createChildScope=createChildScope;exports.bindSelf=bindSelf;exports.updateSelf=updateSelf;exports.bindLocal=bindLocal;exports.updateLocal=updateLocal;exports.bindBlock=bindBlock;exports.block=block;exports.continueBlock=continueBlock;exports.hostBlock=hostBlock;exports.handleRedirect=handleRedirect;exports.handleKeyword=handleKeyword;exports.linkRenderNode=linkRenderNode;exports.inline=inline;exports.keyword=keyword;exports.invokeHelper=invokeHelper;exports.classify=classify;exports.partial=partial;exports.range=range;exports.element=element;exports.attribute=attribute;exports.subexpr=subexpr;exports.get=get;exports.getRoot=getRoot;exports.getBlock=getBlock;exports.getChild=getChild;exports.getValue=getValue;exports.getCellOrValue=getCellOrValue;exports.component=component;exports.concat=concat;exports.hasHelper=hasHelper;exports.lookupHelper=lookupHelper;exports.bindScope=bindScope;exports.updateScope=updateScope;var _render2=__webpack_require__(42);var _render3=_interopRequireDefault(_render2);var _morphList=__webpack_require__(49);var _morphList2=_interopRequireDefault(_morphList);var _objectUtils=__webpack_require__(50);var _morphUtils=__webpack_require__(36);var _templateUtils=__webpack_require__(41);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
		  HTMLBars delegates the runtime behavior of a template to
		  hooks provided by the host environment. These hooks explain
		  the lexical environment of a Handlebars template, the internal
		  representation of references, and the interaction between an
		  HTMLBars template and the DOM it is managing.

		  While HTMLBars host hooks have access to all of this internal
		  machinery, templates and helpers have access to the abstraction
		  provided by the host hooks.

		  ## The Lexical Environment

		  The default lexical environment of an HTMLBars template includes:

		  * Any local variables, provided by *block arguments*
		  * The current value of `self`

		  ## Simple Nesting

		  Let's look at a simple template with a nested block:

		  ```hbs
		  <h1>{{title}}</h1>

		  {{#if author}}
		    <p class="byline">{{author}}</p>
		  {{/if}}
		  ```

		  In this case, the lexical environment at the top-level of the
		  template does not change inside of the `if` block. This is
		  achieved via an implementation of `if` that looks like this:

		  ```js
		  registerHelper('if', function(params) {
		    if (!!params[0]) {
		      return this.yield();
		    }
		  });
		  ```

		  A call to `this.yield` invokes the child template using the
		  current lexical environment.

		  ## Block Arguments

		  It is possible for nested blocks to introduce new local
		  variables:

		  ```hbs
		  {{#count-calls as |i|}}
		  <h1>{{title}}</h1>
		  <p>Called {{i}} times</p>
		  {{/count}}
		  ```

		  In this example, the child block inherits its surrounding
		  lexical environment, but augments it with a single new
		  variable binding.

		  The implementation of `count-calls` supplies the value of
		  `i`, but does not otherwise alter the environment:

		  ```js
		  var count = 0;
		  registerHelper('count-calls', function() {
		    return this.yield([ ++count ]);
		  });
		  ```
		*/function wrap(template){if(template===null){return null;}return{meta:template.meta,arity:template.arity,raw:template,render:function render(self,env,options,blockArguments){var scope=env.hooks.createFreshScope();var contextualElement=options&&options.contextualElement;var renderOptions=new _render2.RenderOptions(null,self,blockArguments,contextualElement);return(0,_render3.default)(template,env,scope,renderOptions);}};}function wrapForHelper(template,env,scope,morph,renderState,visitor){if(!template){return{};}var yieldArgs=yieldTemplate(template,env,scope,morph,renderState,visitor);return{meta:template.meta,arity:template.arity,'yield':yieldArgs,// quoted since it's a reserved word, see issue #420
	yieldItem:yieldItem(template,env,scope,morph,renderState,visitor),raw:template,render:function render(self,blockArguments){yieldArgs(blockArguments,self);}};}// Called by a user-land helper to render a template.
	function yieldTemplate(template,env,parentScope,morph,renderState,visitor){return function(blockArguments,self){// Render state is used to track the progress of the helper (since it
	// may call into us multiple times). As the user-land helper calls
	// into library code, we track what needs to be cleaned up after the
	// helper has returned.
	//
	// Here, we remember that a template has been yielded and so we do not
	// need to remove the previous template. (If no template is yielded
	// this render by the helper, we assume nothing should be shown and
	// remove any previous rendered templates.)
	renderState.morphToClear=null;// In this conditional is true, it means that on the previous rendering pass
	// the helper yielded multiple items via `yieldItem()`, but this time they
	// are yielding a single template. In that case, we mark the morph list for
	// cleanup so it is removed from the DOM.
	if(morph.morphList){(0,_templateUtils.clearMorphList)(morph.morphList,morph,env);renderState.morphListToClear=null;}var scope=parentScope;if(morph.lastYielded&&isStableTemplate(template,morph.lastYielded)){return morph.lastResult.revalidateWith(env,undefined,self,blockArguments,visitor);}// Check to make sure that we actually **need** a new scope, and can't
	// share the parent scope. Note that we need to move this check into
	// a host hook, because the host's notion of scope may require a new
	// scope in more cases than the ones we can determine statically.
	if(self!==undefined||parentScope===null||template.arity){scope=env.hooks.createChildScope(parentScope);}morph.lastYielded={self:self,template:template,shadowTemplate:null};// Render the template that was selected by the helper
	var renderOptions=new _render2.RenderOptions(morph,self,blockArguments);(0,_render3.default)(template,env,scope,renderOptions);};}function yieldItem(template,env,parentScope,morph,renderState,visitor){// Initialize state that tracks multiple items being
	// yielded in.
	var currentMorph=null;// Candidate morphs for deletion.
	var candidates={};// Reuse existing MorphList if this is not a first-time
	// render.
	var morphList=morph.morphList;if(morphList){currentMorph=morphList.firstChildMorph;}// Advances the currentMorph pointer to the morph in the previously-rendered
	// list that matches the yielded key. While doing so, it marks any morphs
	// that it advances past as candidates for deletion. Assuming those morphs
	// are not yielded in later, they will be removed in the prune step during
	// cleanup.
	// Note that this helper function assumes that the morph being seeked to is
	// guaranteed to exist in the previous MorphList; if this is called and the
	// morph does not exist, it will result in an infinite loop
	function advanceToKey(key){var seek=currentMorph;while(seek.key!==key){candidates[seek.key]=seek;seek=seek.nextMorph;}currentMorph=seek.nextMorph;return seek;}return function(_key,blockArguments,self){if(typeof _key!=='string'){throw new Error('You must provide a string key when calling `yieldItem`; you provided '+_key);}// At least one item has been yielded, so we do not wholesale
	// clear the last MorphList but instead apply a prune operation.
	renderState.morphListToClear=null;morph.lastYielded=null;var morphList,morphMap;if(!morph.morphList){morph.morphList=new _morphList2.default();morph.morphMap={};morph.setMorphList(morph.morphList);}morphList=morph.morphList;morphMap=morph.morphMap;// A map of morphs that have been yielded in on this
	// rendering pass. Any morphs that do not make it into
	// this list will be pruned from the MorphList during the cleanup
	// process.
	var handledMorphs=renderState.handledMorphs;var key=void 0;if(_key in handledMorphs){// In this branch we are dealing with a duplicate key. The strategy
	// is to take the original key and append a counter to it that is
	// incremented every time the key is reused. In order to greatly
	// reduce the chance of colliding with another valid key we also add
	// an extra string "--z8mS2hvDW0A--" to the new key.
	var collisions=renderState.collisions;if(collisions===undefined){collisions=renderState.collisions={};}var count=collisions[_key]|0;collisions[_key]=++count;key=_key+'--z8mS2hvDW0A--'+count;}else{key=_key;}if(currentMorph&&currentMorph.key===key){yieldTemplate(template,env,parentScope,currentMorph,renderState,visitor)(blockArguments,self);currentMorph=currentMorph.nextMorph;handledMorphs[key]=currentMorph;}else if(morphMap[key]!==undefined){var foundMorph=morphMap[key];if(key in candidates){// If we already saw this morph, move it forward to this position
	morphList.insertBeforeMorph(foundMorph,currentMorph);}else{// Otherwise, move the pointer forward to the existing morph for this key
	advanceToKey(key);}handledMorphs[foundMorph.key]=foundMorph;yieldTemplate(template,env,parentScope,foundMorph,renderState,visitor)(blockArguments,self);}else{var childMorph=(0,_render2.createChildMorph)(env.dom,morph);childMorph.key=key;morphMap[key]=handledMorphs[key]=childMorph;morphList.insertBeforeMorph(childMorph,currentMorph);yieldTemplate(template,env,parentScope,childMorph,renderState,visitor)(blockArguments,self);}renderState.morphListToPrune=morphList;morph.childNodes=null;};}function isStableTemplate(template,lastYielded){return!lastYielded.shadowTemplate&&template===lastYielded.template;}function optionsFor(template,inverse,env,scope,morph,visitor){// If there was a template yielded last time, set morphToClear so it will be cleared
	// if no template is yielded on this render.
	var morphToClear=morph.lastResult?morph:null;var renderState=new _templateUtils.RenderState(morphToClear,morph.morphList||null);return{templates:{template:wrapForHelper(template,env,scope,morph,renderState,visitor),inverse:wrapForHelper(inverse,env,scope,morph,renderState,visitor)},renderState:renderState};}function thisFor(options){return{arity:options.template.arity,'yield':options.template.yield,// quoted since it's a reserved word, see issue #420
	yieldItem:options.template.yieldItem,yieldIn:options.template.yieldIn};}/**
		  Host Hook: createScope

		  @param {Scope?} parentScope
		  @return Scope

		  Corresponds to entering a new HTMLBars block.

		  This hook is invoked when a block is entered with
		  a new `self` or additional local variables.

		  When invoked for a top-level template, the
		  `parentScope` is `null`, and this hook should return
		  a fresh Scope.

		  When invoked for a child template, the `parentScope`
		  is the scope for the parent environment.

		  Note that the `Scope` is an opaque value that is
		  passed to other host hooks. For example, the `get`
		  hook uses the scope to retrieve a value for a given
		  scope and variable name.
		*/function createScope(env,parentScope){if(parentScope){return env.hooks.createChildScope(parentScope);}else{return env.hooks.createFreshScope();}}function createFreshScope(){// because `in` checks have unpredictable performance, keep a
	// separate dictionary to track whether a local was bound.
	// See `bindLocal` for more information.
	return{self:null,blocks:{},locals:{},localPresent:{}};}/**
		  Host Hook: bindShadowScope

		  @param {Scope?} parentScope
		  @return Scope

		  Corresponds to rendering a new template into an existing
		  render tree, but with a new top-level lexical scope. This
		  template is called the "shadow root".

		  If a shadow template invokes `{{yield}}`, it will render
		  the block provided to the shadow root in the original
		  lexical scope.

		  ```hbs
		  {{!-- post template --}}
		  <p>{{props.title}}</p>
		  {{yield}}

		  {{!-- blog template --}}
		  {{#post title="Hello world"}}
		    <p>by {{byline}}</p>
		    <article>This is my first post</article>
		  {{/post}}

		  {{#post title="Goodbye world"}}
		    <p>by {{byline}}</p>
		    <article>This is my last post</article>
		  {{/post}}
		  ```

		  ```js
		  helpers.post = function(params, hash, options) {
		    options.template.yieldIn(postTemplate, { props: hash });
		  };

		  blog.render({ byline: "Yehuda Katz" });
		  ```

		  Produces:

		  ```html
		  <p>Hello world</p>
		  <p>by Yehuda Katz</p>
		  <article>This is my first post</article>

		  <p>Goodbye world</p>
		  <p>by Yehuda Katz</p>
		  <article>This is my last post</article>
		  ```

		  In short, `yieldIn` creates a new top-level scope for the
		  provided template and renders it, making the original block
		  available to `{{yield}}` in that template.
		*/function bindShadowScope(env/*, parentScope, shadowScope */){return env.hooks.createFreshScope();}function createChildScope(parent){var scope=Object.create(parent);scope.locals=Object.create(parent.locals);scope.localPresent=Object.create(parent.localPresent);scope.blocks=Object.create(parent.blocks);return scope;}/**
		  Host Hook: bindSelf

		  @param {Scope} scope
		  @param {any} self

		  Corresponds to entering a template.

		  This hook is invoked when the `self` value for a scope is ready to be bound.

		  The host must ensure that child scopes reflect the change to the `self` in
		  future calls to the `get` hook.
		*/function bindSelf(env,scope,self){scope.self=self;}function updateSelf(env,scope,self){env.hooks.bindSelf(env,scope,self);}/**
		  Host Hook: bindLocal

		  @param {Environment} env
		  @param {Scope} scope
		  @param {String} name
		  @param {any} value

		  Corresponds to entering a template with block arguments.

		  This hook is invoked when a local variable for a scope has been provided.

		  The host must ensure that child scopes reflect the change in future calls
		  to the `get` hook.
		*/function bindLocal(env,scope,name,value){scope.localPresent[name]=true;scope.locals[name]=value;}function updateLocal(env,scope,name,value){env.hooks.bindLocal(env,scope,name,value);}/**
		  Host Hook: bindBlock

		  @param {Environment} env
		  @param {Scope} scope
		  @param {Function} block

		  Corresponds to entering a shadow template that was invoked by a block helper with
		  `yieldIn`.

		  This hook is invoked with an opaque block that will be passed along
		  to the shadow template, and inserted into the shadow template when
		  `{{yield}}` is used. Optionally provide a non-default block name
		  that can be targeted by `{{yield to=blockName}}`.
		*/function bindBlock(env,scope,block){var name=arguments.length<=3||arguments[3]===undefined?'default':arguments[3];scope.blocks[name]=block;}/**
		  Host Hook: block

		  @param {RenderNode} renderNode
		  @param {Environment} env
		  @param {Scope} scope
		  @param {String} path
		  @param {Array} params
		  @param {Object} hash
		  @param {Block} block
		  @param {Block} elseBlock

		  Corresponds to:

		  ```hbs
		  {{#helper param1 param2 key1=val1 key2=val2}}
		    {{!-- child template --}}
		  {{/helper}}
		  ```

		  This host hook is a workhorse of the system. It is invoked
		  whenever a block is encountered, and is responsible for
		  resolving the helper to call, and then invoke it.

		  The helper should be invoked with:

		  - `{Array} params`: the parameters passed to the helper
		    in the template.
		  - `{Object} hash`: an object containing the keys and values passed
		    in the hash position in the template.

		  The values in `params` and `hash` will already be resolved
		  through a previous call to the `get` host hook.

		  The helper should be invoked with a `this` value that is
		  an object with one field:

		  `{Function} yield`: when invoked, this function executes the
		  block with the current scope. It takes an optional array of
		  block parameters. If block parameters are supplied, HTMLBars
		  will invoke the `bindLocal` host hook to bind the supplied
		  values to the block arguments provided by the template.

		  In general, the default implementation of `block` should work
		  for most host environments. It delegates to other host hooks
		  where appropriate, and properly invokes the helper with the
		  appropriate arguments.
		*/function block(morph,env,scope,path,params,hash,template,inverse,visitor){if(handleRedirect(morph,env,scope,path,params,hash,template,inverse,visitor)){return;}continueBlock(morph,env,scope,path,params,hash,template,inverse,visitor);}function continueBlock(morph,env,scope,path,params,hash,template,inverse,visitor){hostBlock(morph,env,scope,template,inverse,null,visitor,function(options){var helper=env.hooks.lookupHelper(env,scope,path);return env.hooks.invokeHelper(morph,env,scope,visitor,params,hash,helper,options.templates,thisFor(options.templates));});}function hostBlock(morph,env,scope,template,inverse,shadowOptions,visitor,callback){var options=optionsFor(template,inverse,env,scope,morph,visitor);(0,_templateUtils.renderAndCleanup)(morph,env,options,shadowOptions,callback);}function handleRedirect(morph,env,scope,path,params,hash,template,inverse,visitor){if(!path){return false;}var redirect=env.hooks.classify(env,scope,path);if(redirect){switch(redirect){case'component':env.hooks.component(morph,env,scope,path,params,hash,{default:template,inverse:inverse},visitor);break;case'inline':env.hooks.inline(morph,env,scope,path,params,hash,visitor);break;case'block':env.hooks.block(morph,env,scope,path,params,hash,template,inverse,visitor);break;default:throw new Error('Internal HTMLBars redirection to '+redirect+' not supported');}return true;}if(handleKeyword(path,morph,env,scope,params,hash,template,inverse,visitor)){return true;}return false;}function handleKeyword(path,morph,env,scope,params,hash,template,inverse,visitor){var keyword=env.hooks.keywords[path];if(!keyword){return false;}if(typeof keyword==='function'){return keyword(morph,env,scope,params,hash,template,inverse,visitor);}if(keyword.willRender){keyword.willRender(morph,env);}var lastState,newState;if(keyword.setupState){lastState=(0,_objectUtils.shallowCopy)(morph.getState());newState=morph.setState(keyword.setupState(lastState,env,scope,params,hash));}if(keyword.childEnv){// Build the child environment...
	env=keyword.childEnv(morph.getState(),env);// ..then save off the child env builder on the render node. If the render
	// node tree is re-rendered and this node is not dirty, the child env
	// builder will still be invoked so that child dirty render nodes still get
	// the correct child env.
	morph.buildChildEnv=keyword.childEnv;}var firstTime=!morph.rendered;if(keyword.isEmpty){var isEmpty=keyword.isEmpty(morph.getState(),env,scope,params,hash);if(isEmpty){if(!firstTime){(0,_templateUtils.clearMorph)(morph,env,false);}return true;}}if(firstTime){if(keyword.render){keyword.render(morph,env,scope,params,hash,template,inverse,visitor);}morph.rendered=true;return true;}var isStable;if(keyword.isStable){isStable=keyword.isStable(lastState,newState);}else{isStable=stableState(lastState,newState);}if(isStable){if(keyword.rerender){var newEnv=keyword.rerender(morph,env,scope,params,hash,template,inverse,visitor);env=newEnv||env;}(0,_morphUtils.validateChildMorphs)(env,morph,visitor);return true;}else{(0,_templateUtils.clearMorph)(morph,env,false);}// If the node is unstable, re-render from scratch
	if(keyword.render){keyword.render(morph,env,scope,params,hash,template,inverse,visitor);morph.rendered=true;return true;}}function stableState(oldState,newState){if((0,_objectUtils.keyLength)(oldState)!==(0,_objectUtils.keyLength)(newState)){return false;}for(var prop in oldState){if(oldState[prop]!==newState[prop]){return false;}}return true;}function linkRenderNode()/* morph, env, scope, params, hash */{return;}/**
		  Host Hook: inline

		  @param {RenderNode} renderNode
		  @param {Environment} env
		  @param {Scope} scope
		  @param {String} path
		  @param {Array} params
		  @param {Hash} hash

		  Corresponds to:

		  ```hbs
		  {{helper param1 param2 key1=val1 key2=val2}}
		  ```

		  This host hook is similar to the `block` host hook, but it
		  invokes helpers that do not supply an attached block.

		  Like the `block` hook, the helper should be invoked with:

		  - `{Array} params`: the parameters passed to the helper
		    in the template.
		  - `{Object} hash`: an object containing the keys and values passed
		    in the hash position in the template.

		  The values in `params` and `hash` will already be resolved
		  through a previous call to the `get` host hook.

		  In general, the default implementation of `inline` should work
		  for most host environments. It delegates to other host hooks
		  where appropriate, and properly invokes the helper with the
		  appropriate arguments.

		  The default implementation of `inline` also makes `partial`
		  a keyword. Instead of invoking a helper named `partial`,
		  it invokes the `partial` host hook.
		*/function inline(morph,env,scope,path,params,hash,visitor){if(handleRedirect(morph,env,scope,path,params,hash,null,null,visitor)){return;}var value=void 0,hasValue=void 0;if(morph.linkedResult){value=env.hooks.getValue(morph.linkedResult);hasValue=true;}else{var options=optionsFor(null,null,env,scope,morph);var helper=env.hooks.lookupHelper(env,scope,path);var result=env.hooks.invokeHelper(morph,env,scope,visitor,params,hash,helper,options.templates,thisFor(options.templates));if(result&&result.link){morph.linkedResult=result.value;(0,_morphUtils.linkParams)(env,scope,morph,'@content-helper',[morph.linkedResult],null);}if(result&&'value'in result){value=env.hooks.getValue(result.value);hasValue=true;}}if(hasValue){if(morph.lastValue!==value){morph.setContent(value);}morph.lastValue=value;}}function keyword(path,morph,env,scope,params,hash,template,inverse,visitor){handleKeyword(path,morph,env,scope,params,hash,template,inverse,visitor);}function invokeHelper(morph,env,scope,visitor,_params,_hash,helper,templates,context){var params=normalizeArray(env,_params);var hash=normalizeObject(env,_hash);return{value:helper.call(context,params,hash,templates)};}function normalizeArray(env,array){var out=new Array(array.length);for(var i=0,l=array.length;i<l;i++){out[i]=env.hooks.getCellOrValue(array[i]);}return out;}function normalizeObject(env,object){var out={};for(var prop in object){out[prop]=env.hooks.getCellOrValue(object[prop]);}return out;}function classify()/* env, scope, path */{return null;}var keywords=exports.keywords={partial:function partial(morph,env,scope,params){var value=env.hooks.partial(morph,env,scope,params[0]);morph.setContent(value);return true;},// quoted since it's a reserved word, see issue #420
	'yield':function _yield(morph,env,scope,params,hash,template,inverse,visitor){// the current scope is provided purely for the creation of shadow
	// scopes; it should not be provided to user code.
	var to=env.hooks.getValue(hash.to)||'default';var block=env.hooks.getBlock(scope,to);if(block){block.invoke(env,params,hash.self,morph,scope,visitor);}return true;},hasBlock:function hasBlock(morph,env,scope,params){var name=env.hooks.getValue(params[0])||'default';return!!env.hooks.getBlock(scope,name);},hasBlockParams:function hasBlockParams(morph,env,scope,params){var name=env.hooks.getValue(params[0])||'default';var block=env.hooks.getBlock(scope,name);return!!(block&&block.arity);}};/**
		  Host Hook: partial

		  @param {RenderNode} renderNode
		  @param {Environment} env
		  @param {Scope} scope
		  @param {String} path

		  Corresponds to:

		  ```hbs
		  {{partial "location"}}
		  ```

		  This host hook is invoked by the default implementation of
		  the `inline` hook. This makes `partial` a keyword in an
		  HTMLBars environment using the default `inline` host hook.

		  It is implemented as a host hook so that it can retrieve
		  the named partial out of the `Environment`. Helpers, in
		  contrast, only have access to the values passed in to them,
		  and not to the ambient lexical environment.

		  The host hook should invoke the referenced partial with
		  the ambient `self`.
		*/function partial(renderNode,env,scope,path){var template=env.partials[path];return template.render(scope.self,env,{}).fragment;}/**
		  Host hook: range

		  @param {RenderNode} renderNode
		  @param {Environment} env
		  @param {Scope} scope
		  @param {any} value

		  Corresponds to:

		  ```hbs
		  {{content}}
		  {{{unescaped}}}
		  ```

		  This hook is responsible for updating a render node
		  that represents a range of content with a value.
		*/function range(morph,env,scope,path,value,visitor){if(handleRedirect(morph,env,scope,path,[],{},null,null,visitor)){return;}value=env.hooks.getValue(value);if(morph.lastValue!==value){morph.setContent(value);}morph.lastValue=value;}/**
		  Host hook: element

		  @param {RenderNode} renderNode
		  @param {Environment} env
		  @param {Scope} scope
		  @param {String} path
		  @param {Array} params
		  @param {Hash} hash

		  Corresponds to:

		  ```hbs
		  <div {{bind-attr foo=bar}}></div>
		  ```

		  This hook is responsible for invoking a helper that
		  modifies an element.

		  Its purpose is largely legacy support for awkward
		  idioms that became common when using the string-based
		  Handlebars engine.

		  Most of the uses of the `element` hook are expected
		  to be superseded by component syntax and the
		  `attribute` hook.
		*/function element(morph,env,scope,path,params,hash,visitor){if(handleRedirect(morph,env,scope,path,params,hash,null,null,visitor)){return;}var helper=env.hooks.lookupHelper(env,scope,path);if(helper){env.hooks.invokeHelper(null,env,scope,null,params,hash,helper,{element:morph.element});}}/**
		  Host hook: attribute

		  @param {RenderNode} renderNode
		  @param {Environment} env
		  @param {String} name
		  @param {any} value

		  Corresponds to:

		  ```hbs
		  <div foo={{bar}}></div>
		  ```

		  This hook is responsible for updating a render node
		  that represents an element's attribute with a value.

		  It receives the name of the attribute as well as an
		  already-resolved value, and should update the render
		  node with the value if appropriate.
		*/function attribute(morph,env,scope,name,value){value=env.hooks.getValue(value);if(morph.lastValue!==value){morph.setContent(value);}morph.lastValue=value;}function subexpr(env,scope,helperName,params,hash){var helper=env.hooks.lookupHelper(env,scope,helperName);var result=env.hooks.invokeHelper(null,env,scope,null,params,hash,helper,{});if(result&&'value'in result){return env.hooks.getValue(result.value);}}/**
		  Host Hook: get

		  @param {Environment} env
		  @param {Scope} scope
		  @param {String} path

		  Corresponds to:

		  ```hbs
		  {{foo.bar}}
		    ^

		  {{helper foo.bar key=value}}
		           ^           ^
		  ```

		  This hook is the "leaf" hook of the system. It is used to
		  resolve a path relative to the current scope.
		*/function get(env,scope,path){if(path===''){return scope.self;}var keys=path.split('.');var value=env.hooks.getRoot(scope,keys[0])[0];for(var i=1;i<keys.length;i++){if(value){value=env.hooks.getChild(value,keys[i]);}else{break;}}return value;}function getRoot(scope,key){if(scope.localPresent[key]){return[scope.locals[key]];}else if(scope.self){return[scope.self[key]];}else{return[undefined];}}function getBlock(scope,key){return scope.blocks[key];}function getChild(value,key){return value[key];}function getValue(reference){return reference;}function getCellOrValue(reference){return reference;}function component(morph,env,scope,tagName,params,attrs,templates,visitor){if(env.hooks.hasHelper(env,scope,tagName)){return env.hooks.block(morph,env,scope,tagName,params,attrs,templates.default,templates.inverse,visitor);}componentFallback(morph,env,scope,tagName,attrs,templates.default);}function concat(env,params){var value='';for(var i=0,l=params.length;i<l;i++){value+=env.hooks.getValue(params[i]);}return value;}function componentFallback(morph,env,scope,tagName,attrs,template){var element=env.dom.createElement(tagName);for(var name in attrs){element.setAttribute(name,env.hooks.getValue(attrs[name]));}var fragment=(0,_render3.default)(template,env,scope,{}).fragment;element.appendChild(fragment);morph.setNode(element);}function hasHelper(env,scope,helperName){return env.helpers[helperName]!==undefined;}function lookupHelper(env,scope,helperName){return env.helpers[helperName];}function bindScope()/* env, scope */{// this function is used to handle host-specified extensions to scope
	// other than `self`, `locals` and `block`.
	}function updateScope(env,scope){env.hooks.bindScope(env,scope);}exports.default={// fundamental hooks that you will likely want to override
	bindLocal:bindLocal,bindSelf:bindSelf,bindScope:bindScope,classify:classify,component:component,concat:concat,createFreshScope:createFreshScope,getChild:getChild,getRoot:getRoot,getBlock:getBlock,getValue:getValue,getCellOrValue:getCellOrValue,keywords:keywords,linkRenderNode:linkRenderNode,partial:partial,subexpr:subexpr,// fundamental hooks with good default behavior
	bindBlock:bindBlock,bindShadowScope:bindShadowScope,updateLocal:updateLocal,updateSelf:updateSelf,updateScope:updateScope,createChildScope:createChildScope,hasHelper:hasHelper,lookupHelper:lookupHelper,invokeHelper:invokeHelper,cleanupRenderNode:null,destroyRenderNode:null,willCleanupTree:null,didCleanupTree:null,willRenderNode:null,didRenderNode:null,// derived hooks
	attribute:attribute,block:block,createScope:createScope,element:element,get:get,inline:inline,range:range,keyword:keyword};/***/},/* 49 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utils=__webpack_require__(47);function MorphList(){// morph graph
	this.firstChildMorph=null;this.lastChildMorph=null;this.mountedMorph=null;}var prototype=MorphList.prototype;prototype.clear=function MorphList$clear(){var current=this.firstChildMorph;while(current){var next=current.nextMorph;current.previousMorph=null;current.nextMorph=null;current.parentMorphList=null;current=next;}this.firstChildMorph=this.lastChildMorph=null;};prototype.destroy=function MorphList$destroy(){};prototype.appendMorph=function MorphList$appendMorph(morph){this.insertBeforeMorph(morph,null);};prototype.insertBeforeMorph=function MorphList$insertBeforeMorph(morph,referenceMorph){if(morph.parentMorphList!==null){morph.unlink();}if(referenceMorph&&referenceMorph.parentMorphList!==this){throw new Error('The morph before which the new morph is to be inserted is not a child of this morph.');}var mountedMorph=this.mountedMorph;if(mountedMorph){var parentNode=mountedMorph.firstNode.parentNode;var referenceNode=referenceMorph?referenceMorph.firstNode:mountedMorph.lastNode.nextSibling;(0,_utils.insertBefore)(parentNode,morph.firstNode,morph.lastNode,referenceNode);// was not in list mode replace current content
	if(!this.firstChildMorph){(0,_utils.clear)(this.mountedMorph.firstNode.parentNode,this.mountedMorph.firstNode,this.mountedMorph.lastNode);}}morph.parentMorphList=this;var previousMorph=referenceMorph?referenceMorph.previousMorph:this.lastChildMorph;if(previousMorph){previousMorph.nextMorph=morph;morph.previousMorph=previousMorph;}else{this.firstChildMorph=morph;}if(referenceMorph){referenceMorph.previousMorph=morph;morph.nextMorph=referenceMorph;}else{this.lastChildMorph=morph;}this.firstChildMorph._syncFirstNode();this.lastChildMorph._syncLastNode();};prototype.removeChildMorph=function MorphList$removeChildMorph(morph){if(morph.parentMorphList!==this){throw new Error('Cannot remove a morph from a parent it is not inside of');}morph.destroy();};exports.default=MorphList;/***/},/* 50 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.merge=merge;exports.shallowCopy=shallowCopy;exports.keySet=keySet;exports.keyLength=keyLength;function merge(options,defaults){for(var prop in defaults){if(options.hasOwnProperty(prop)){continue;}options[prop]=defaults[prop];}return options;}function shallowCopy(obj){return merge({},obj);}function keySet(obj){var set={};for(var prop in obj){if(obj.hasOwnProperty(prop)){set[prop]=true;}}return set;}function keyLength(obj){var count=0;for(var prop in obj){if(obj.hasOwnProperty(prop)){count++;}}return count;}/***/},/* 51 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/*globals module, URL*/var _morph=__webpack_require__(45);var _morph2=_interopRequireDefault(_morph);var _morphAttr=__webpack_require__(53);var _morphAttr2=_interopRequireDefault(_morphAttr);var _buildHtmlDom=__webpack_require__(56);var _classes=__webpack_require__(57);var _prop=__webpack_require__(55);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var doc=typeof document==='undefined'?false:document;var deletesBlankTextNodes=doc&&function(document){var element=document.createElement('div');element.appendChild(document.createTextNode(''));var clonedElement=element.cloneNode(true);return clonedElement.childNodes.length===0;}(doc);var ignoresCheckedAttribute=doc&&function(document){var element=document.createElement('input');element.setAttribute('checked','checked');var clonedElement=element.cloneNode(false);return!clonedElement.checked;}(doc);var canRemoveSvgViewBoxAttribute=doc&&(doc.createElementNS?function(document){var element=document.createElementNS(_buildHtmlDom.svgNamespace,'svg');element.setAttribute('viewBox','0 0 100 100');element.removeAttribute('viewBox');return!element.getAttribute('viewBox');}(doc):true);var canClone=doc&&function(document){var element=document.createElement('div');element.appendChild(document.createTextNode(' '));element.appendChild(document.createTextNode(' '));var clonedElement=element.cloneNode(true);return clonedElement.childNodes[0].nodeValue===' ';}(doc);// This is not the namespace of the element, but of
	// the elements inside that elements.
	function interiorNamespace(element){if(element&&element.namespaceURI===_buildHtmlDom.svgNamespace&&!_buildHtmlDom.svgHTMLIntegrationPoints[element.tagName]){return _buildHtmlDom.svgNamespace;}else{return null;}}// The HTML spec allows for "omitted start tags". These tags are optional
	// when their intended child is the first thing in the parent tag. For
	// example, this is a tbody start tag:
	//
	// <table>
	//   <tbody>
	//     <tr>
	//
	// The tbody may be omitted, and the browser will accept and render:
	//
	// <table>
	//   <tr>
	//
	// However, the omitted start tag will still be added to the DOM. Here
	// we test the string and context to see if the browser is about to
	// perform this cleanup.
	//
	// http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html#optional-tags
	// describes which tags are omittable. The spec for tbody and colgroup
	// explains this behavior:
	//
	// http://www.whatwg.org/specs/web-apps/current-work/multipage/tables.html#the-tbody-element
	// http://www.whatwg.org/specs/web-apps/current-work/multipage/tables.html#the-colgroup-element
	//
	var omittedStartTagChildTest=/<([\w:]+)/;function detectOmittedStartTag(string,contextualElement){// Omitted start tags are only inside table tags.
	if(contextualElement.tagName==='TABLE'){var omittedStartTagChildMatch=omittedStartTagChildTest.exec(string);if(omittedStartTagChildMatch){var omittedStartTagChild=omittedStartTagChildMatch[1];// It is already asserted that the contextual element is a table
	// and not the proper start tag. Just see if a tag was omitted.
	return omittedStartTagChild==='tr'||omittedStartTagChild==='col';}}}function buildSVGDOM(html,dom){var div=dom.document.createElement('div');div.innerHTML='<svg>'+html+'</svg>';return div.firstChild.childNodes;}var guid=1;function ElementMorph(element,dom,namespace){this.element=element;this.dom=dom;this.namespace=namespace;this.guid='element'+guid++;this._state=undefined;this.isDirty=true;}ElementMorph.prototype.getState=function(){if(!this._state){this._state={};}return this._state;};ElementMorph.prototype.setState=function(newState){/*jshint -W093 */return this._state=newState;};// renderAndCleanup calls `clear` on all items in the morph map
	// just before calling `destroy` on the morph.
	//
	// As a future refactor this could be changed to set the property
	// back to its original/default value.
	ElementMorph.prototype.clear=function(){};ElementMorph.prototype.destroy=function(){this.element=null;this.dom=null;};/*
		 * A class wrapping DOM functions to address environment compatibility,
		 * namespaces, contextual elements for morph un-escaped content
		 * insertion.
		 *
		 * When entering a template, a DOMHelper should be passed:
		 *
		 *   template(context, { hooks: hooks, dom: new DOMHelper() });
		 *
		 * TODO: support foreignObject as a passed contextual element. It has
		 * a namespace (svg) that does not match its internal namespace
		 * (xhtml).
		 *
		 * @class DOMHelper
		 * @constructor
		 * @param {HTMLDocument} _document The document DOM methods are proxied to
		 */function DOMHelper(_document){this.document=_document||document;if(!this.document){throw new Error('A document object must be passed to the DOMHelper, or available on the global scope');}this.canClone=canClone;this.namespace=null;installEnvironmentSpecificMethods(this);}var prototype=DOMHelper.prototype;prototype.constructor=DOMHelper;prototype.getElementById=function(id,rootNode){rootNode=rootNode||this.document;return rootNode.getElementById(id);};prototype.insertBefore=function(element,childElement,referenceChild){return element.insertBefore(childElement,referenceChild);};prototype.appendChild=function(element,childElement){return element.appendChild(childElement);};var itemAt;// It appears that sometimes, in yet to be itentified scenarios PhantomJS 2.0
	// crashes on childNodes.item(index), but works as expected with childNodes[index];
	//
	// Although it would be nice to move to childNodes[index] in all scenarios,
	// this would require SimpleDOM to maintain the childNodes array. This would be
	// quite costly, in both dev time and runtime.
	//
	// So instead, we choose the best possible method and call it a day.
	//
	/*global navigator */if(typeof navigator!=='undefined'&&navigator.userAgent.indexOf('PhantomJS')){itemAt=function itemAt(nodes,index){return nodes[index];};}else{itemAt=function itemAt(nodes,index){return nodes.item(index);};}prototype.childAt=function(element,indices){var child=element;for(var i=0;i<indices.length;i++){child=itemAt(child.childNodes,indices[i]);}return child;};// Note to a Fellow Implementor:
	// Ahh, accessing a child node at an index. Seems like it should be so simple,
	// doesn't it? Unfortunately, this particular method has caused us a surprising
	// amount of pain. As you'll note below, this method has been modified to walk
	// the linked list of child nodes rather than access the child by index
	// directly, even though there are two (2) APIs in the DOM that do this for us.
	// If you're thinking to yourself, "What an oversight! What an opportunity to
	// optimize this code!" then to you I say: stop! For I have a tale to tell.
	//
	// First, this code must be compatible with simple-dom for rendering on the
	// server where there is no real DOM. Previously, we accessed a child node
	// directly via `element.childNodes[index]`. While we *could* in theory do a
	// full-fidelity simulation of a live `childNodes` array, this is slow,
	// complicated and error-prone.
	//
	// "No problem," we thought, "we'll just use the similar
	// `childNodes.item(index)` API." Then, we could just implement our own `item`
	// method in simple-dom and walk the child node linked list there, allowing
	// us to retain the performance advantages of the (surely optimized) `item()`
	// API in the browser.
	//
	// Unfortunately, an enterprising soul named Samy Alzahrani discovered that in
	// IE8, accessing an item out-of-bounds via `item()` causes an exception where
	// other browsers return null. This necessitated a... check of
	// `childNodes.length`, bringing us back around to having to support a
	// full-fidelity `childNodes` array!
	//
	// Worst of all, Kris Selden investigated how browsers are actualy implemented
	// and discovered that they're all linked lists under the hood anyway. Accessing
	// `childNodes` requires them to allocate a new live collection backed by that
	// linked list, which is itself a rather expensive operation. Our assumed
	// optimization had backfired! That is the danger of magical thinking about
	// the performance of native implementations.
	//
	// And this, my friends, is why the following implementation just walks the
	// linked list, as surprised as that may make you. Please ensure you understand
	// the above before changing this and submitting a PR.
	//
	// Tom Dale, January 18th, 2015, Portland OR
	prototype.childAtIndex=function(element,index){var node=element.firstChild;for(var idx=0;node&&idx<index;idx++){node=node.nextSibling;}return node;};prototype.appendText=function(element,text){return element.appendChild(this.document.createTextNode(text));};prototype.setAttribute=function(element,name,value){element.setAttribute(name,String(value));};prototype.getAttribute=function(element,name){return element.getAttribute(name);};prototype.setAttributeNS=function(element,namespace,name,value){element.setAttributeNS(namespace,name,String(value));};prototype.getAttributeNS=function(element,namespace,name){return element.getAttributeNS(namespace,name);};if(canRemoveSvgViewBoxAttribute){prototype.removeAttribute=function(element,name){element.removeAttribute(name);};}else{prototype.removeAttribute=function(element,name){if(element.tagName==='svg'&&name==='viewBox'){element.setAttribute(name,null);}else{element.removeAttribute(name);}};}prototype.setPropertyStrict=function(element,name,value){if(value===undefined){value=null;}if(value===null&&(name==='value'||name==='type'||name==='src')){value='';}element[name]=value;};prototype.getPropertyStrict=function(element,name){return element[name];};prototype.setProperty=function(element,name,value,namespace){if(element.namespaceURI===_buildHtmlDom.svgNamespace){if((0,_prop.isAttrRemovalValue)(value)){element.removeAttribute(name);}else{if(namespace){element.setAttributeNS(namespace,name,value);}else{element.setAttribute(name,value);}}}else{var _normalizeProperty=(0,_prop.normalizeProperty)(element,name);var normalized=_normalizeProperty.normalized;var type=_normalizeProperty.type;if(type==='prop'){element[normalized]=value;}else{if((0,_prop.isAttrRemovalValue)(value)){element.removeAttribute(name);}else{if(namespace&&element.setAttributeNS){element.setAttributeNS(namespace,name,value);}else{element.setAttribute(name,value);}}}}};if(doc&&doc.createElementNS){// Only opt into namespace detection if a contextualElement
	// is passed.
	prototype.createElement=function(tagName,contextualElement){var namespace=this.namespace;if(contextualElement){if(tagName==='svg'){namespace=_buildHtmlDom.svgNamespace;}else{namespace=interiorNamespace(contextualElement);}}if(namespace){return this.document.createElementNS(namespace,tagName);}else{return this.document.createElement(tagName);}};prototype.setAttributeNS=function(element,namespace,name,value){element.setAttributeNS(namespace,name,String(value));};}else{prototype.createElement=function(tagName){return this.document.createElement(tagName);};prototype.setAttributeNS=function(element,namespace,name,value){element.setAttribute(name,String(value));};}prototype.addClasses=_classes.addClasses;prototype.removeClasses=_classes.removeClasses;prototype.setNamespace=function(ns){this.namespace=ns;};prototype.detectNamespace=function(element){this.namespace=interiorNamespace(element);};prototype.createDocumentFragment=function(){return this.document.createDocumentFragment();};prototype.createTextNode=function(text){return this.document.createTextNode(text);};prototype.createComment=function(text){return this.document.createComment(text);};prototype.repairClonedNode=function(element,blankChildTextNodes,isChecked){if(deletesBlankTextNodes&&blankChildTextNodes.length>0){for(var i=0,len=blankChildTextNodes.length;i<len;i++){var textNode=this.document.createTextNode(''),offset=blankChildTextNodes[i],before=this.childAtIndex(element,offset);if(before){element.insertBefore(textNode,before);}else{element.appendChild(textNode);}}}if(ignoresCheckedAttribute&&isChecked){element.setAttribute('checked','checked');}};prototype.cloneNode=function(element,deep){var clone=element.cloneNode(!!deep);return clone;};prototype.AttrMorphClass=_morphAttr2.default;prototype.createAttrMorph=function(element,attrName,namespace){return this.AttrMorphClass.create(element,attrName,this,namespace);};prototype.ElementMorphClass=ElementMorph;prototype.createElementMorph=function(element,namespace){return new this.ElementMorphClass(element,this,namespace);};prototype.createUnsafeAttrMorph=function(element,attrName,namespace){var morph=this.createAttrMorph(element,attrName,namespace);morph.escaped=false;return morph;};prototype.MorphClass=_morph2.default;prototype.createMorph=function(parent,start,end,contextualElement){if(contextualElement&&contextualElement.nodeType===11){throw new Error('Cannot pass a fragment as the contextual element to createMorph');}if(!contextualElement&&parent&&parent.nodeType===1){contextualElement=parent;}var morph=new this.MorphClass(this,contextualElement);morph.firstNode=start;morph.lastNode=end;return morph;};prototype.createFragmentMorph=function(contextualElement){if(contextualElement&&contextualElement.nodeType===11){throw new Error('Cannot pass a fragment as the contextual element to createMorph');}var fragment=this.createDocumentFragment();return _morph2.default.create(this,contextualElement,fragment);};prototype.replaceContentWithMorph=function(element){var firstChild=element.firstChild;if(!firstChild){var comment=this.createComment('');this.appendChild(element,comment);return _morph2.default.create(this,element,comment);}else{var morph=_morph2.default.attach(this,element,firstChild,element.lastChild);morph.clear();return morph;}};prototype.createUnsafeMorph=function(parent,start,end,contextualElement){var morph=this.createMorph(parent,start,end,contextualElement);morph.parseTextAsHTML=true;return morph;};// This helper is just to keep the templates good looking,
	// passing integers instead of element references.
	prototype.createMorphAt=function(parent,startIndex,endIndex,contextualElement){var single=startIndex===endIndex;var start=this.childAtIndex(parent,startIndex);var end=single?start:this.childAtIndex(parent,endIndex);return this.createMorph(parent,start,end,contextualElement);};prototype.createUnsafeMorphAt=function(parent,startIndex,endIndex,contextualElement){var morph=this.createMorphAt(parent,startIndex,endIndex,contextualElement);morph.parseTextAsHTML=true;return morph;};prototype.insertMorphBefore=function(element,referenceChild,contextualElement){var insertion=this.document.createComment('');element.insertBefore(insertion,referenceChild);return this.createMorph(element,insertion,insertion,contextualElement);};prototype.appendMorph=function(element,contextualElement){var insertion=this.document.createComment('');element.appendChild(insertion);return this.createMorph(element,insertion,insertion,contextualElement);};prototype.insertBoundary=function(fragment,index){// this will always be null or firstChild
	var child=index===null?null:this.childAtIndex(fragment,index);this.insertBefore(fragment,this.createTextNode(''),child);};prototype.setMorphHTML=function(morph,html){morph.setHTML(html);};prototype.parseHTML=function(html,contextualElement){var childNodes;if(interiorNamespace(contextualElement)===_buildHtmlDom.svgNamespace){childNodes=buildSVGDOM(html,this);}else{var nodes=(0,_buildHtmlDom.buildHTMLDOM)(html,contextualElement,this);if(detectOmittedStartTag(html,contextualElement)){var node=nodes[0];while(node&&node.nodeType!==1){node=node.nextSibling;}childNodes=node.childNodes;}else{childNodes=nodes;}}// Copy node list to a fragment.
	var fragment=this.document.createDocumentFragment();if(childNodes&&childNodes.length>0){var currentNode=childNodes[0];// We prepend an <option> to <select> boxes to absorb any browser bugs
	// related to auto-select behavior. Skip past it.
	if(contextualElement.tagName==='SELECT'){currentNode=currentNode.nextSibling;}while(currentNode){var tempNode=currentNode;currentNode=currentNode.nextSibling;fragment.appendChild(tempNode);}}return fragment;};var nodeURL;var parsingNode;function installEnvironmentSpecificMethods(domHelper){var protocol=browserProtocolForURL.call(domHelper,'foobar:baz');// Test to see if our DOM implementation parses
	// and normalizes URLs.
	if(protocol==='foobar:'){// Swap in the method that doesn't do this test now that
	// we know it works.
	domHelper.protocolForURL=browserProtocolForURL;}else if((typeof URL==='undefined'?'undefined':_typeof(URL))==='object'){// URL globally provided, likely from FastBoot's sandbox
	nodeURL=URL;domHelper.protocolForURL=nodeProtocolForURL;}else if((false?'undefined':_typeof(module))==='object'&&typeof module.require==='function'){// Otherwise, we need to fall back to our own URL parsing.
	// Global `require` is shadowed by Ember's loader so we have to use the fully
	// qualified `module.require`.
	nodeURL=module.require('url');domHelper.protocolForURL=nodeProtocolForURL;}else{throw new Error('DOM Helper could not find valid URL parsing mechanism');}// A SimpleDOM-specific extension that allows us to place HTML directly
	// into the DOM tree, for when the output target is always serialized HTML.
	if(domHelper.document.createRawHTMLSection){domHelper.setMorphHTML=nodeSetMorphHTML;}}function nodeSetMorphHTML(morph,html){var section=this.document.createRawHTMLSection(html);morph.setNode(section);}function browserProtocolForURL(url){if(!parsingNode){parsingNode=this.document.createElement('a');}parsingNode.href=url;return parsingNode.protocol;}function nodeProtocolForURL(url){var protocol=null;if(typeof url==='string'){protocol=nodeURL.parse(url).protocol;}return protocol===null?':':protocol;}exports.default=DOMHelper;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(52)(module));/***/},/* 52 *//***/function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
	module.children=[];module.webpackPolyfill=1;}return module;};/***/},/* 53 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.sanitizeAttributeValue=undefined;var _sanitizeAttributeValue=__webpack_require__(54);var _prop=__webpack_require__(55);var _buildHtmlDom=__webpack_require__(56);var _htmlbarsUtil=__webpack_require__(31);function getProperty(){return this.domHelper.getPropertyStrict(this.element,this.attrName);}function updateProperty(value){if(this._renderedInitially===true||!(0,_prop.isAttrRemovalValue)(value)){var element=this.element;var attrName=this.attrName;if(attrName==='value'&&element.tagName==='INPUT'&&element.value===value){// Do nothing. Attempts to avoid accidently changing the input cursor location.
	// See https://github.com/tildeio/htmlbars/pull/447 for more details.
	}else{// do not render if initial value is undefined or null
	this.domHelper.setPropertyStrict(element,attrName,value);}}this._renderedInitially=true;}function getAttribute(){return this.domHelper.getAttribute(this.element,this.attrName);}// normalize to be more inline with updateProperty behavior
	function normalizeAttributeValue(value){if(value===false||value===undefined||value===null){return null;}if(value===true){return'';}// onclick function etc in SSR
	if(typeof value==='function'){return null;}return String(value);}function updateAttribute(_value){var value=normalizeAttributeValue(_value);if((0,_prop.isAttrRemovalValue)(value)){this.domHelper.removeAttribute(this.element,this.attrName);}else{this.domHelper.setAttribute(this.element,this.attrName,value);}}function getAttributeNS(){return this.domHelper.getAttributeNS(this.element,this.namespace,this.attrName);}function updateAttributeNS(_value){var value=normalizeAttributeValue(_value);if((0,_prop.isAttrRemovalValue)(value)){this.domHelper.removeAttribute(this.element,this.attrName);}else{this.domHelper.setAttributeNS(this.element,this.namespace,this.attrName,value);}}var UNSET={unset:true};var guid=1;AttrMorph.create=function(element,attrName,domHelper,namespace){var ns=(0,_htmlbarsUtil.getAttrNamespace)(attrName,namespace);if(ns){return new AttributeNSAttrMorph(element,attrName,domHelper,ns);}else{return createNonNamespacedAttrMorph(element,attrName,domHelper);}};function createNonNamespacedAttrMorph(element,attrName,domHelper){var _normalizeProperty=(0,_prop.normalizeProperty)(element,attrName);var normalized=_normalizeProperty.normalized;var type=_normalizeProperty.type;if(element.namespaceURI===_buildHtmlDom.svgNamespace||attrName==='style'||type==='attr'){return new AttributeAttrMorph(element,normalized,domHelper);}else{return new PropertyAttrMorph(element,normalized,domHelper);}}function AttrMorph(element,attrName,domHelper){this.element=element;this.domHelper=domHelper;this.attrName=attrName;this._state=undefined;this.isDirty=false;this.isSubtreeDirty=false;this.escaped=true;this.lastValue=UNSET;this.lastResult=null;this.lastYielded=null;this.childNodes=null;this.linkedParams=null;this.linkedResult=null;this.guid='attr'+guid++;this.seen=false;this.ownerNode=null;this.rendered=false;this._renderedInitially=false;this.namespace=undefined;this.didInit();}AttrMorph.prototype.getState=function(){if(!this._state){this._state={};}return this._state;};AttrMorph.prototype.setState=function(newState){/*jshint -W093 */return this._state=newState;};AttrMorph.prototype.didInit=function(){};AttrMorph.prototype.willSetContent=function(){};AttrMorph.prototype.setContent=function(value){this.willSetContent(value);if(this.lastValue===value){return;}this.lastValue=value;if(this.escaped){var sanitized=(0,_sanitizeAttributeValue.sanitizeAttributeValue)(this.domHelper,this.element,this.attrName,value);this._update(sanitized,this.namespace);}else{this._update(value,this.namespace);}};AttrMorph.prototype.getContent=function(){var value=this.lastValue=this._get();return value;};// renderAndCleanup calls `clear` on all items in the morph map
	// just before calling `destroy` on the morph.
	//
	// As a future refactor this could be changed to set the property
	// back to its original/default value.
	AttrMorph.prototype.clear=function(){};AttrMorph.prototype.destroy=function(){this.element=null;this.domHelper=null;};AttrMorph.prototype._$superAttrMorph=AttrMorph;function PropertyAttrMorph(element,attrName,domHelper){this._$superAttrMorph(element,attrName,domHelper);}PropertyAttrMorph.prototype=Object.create(AttrMorph.prototype);PropertyAttrMorph.prototype._update=updateProperty;PropertyAttrMorph.prototype._get=getProperty;function AttributeNSAttrMorph(element,attrName,domHelper,namespace){this._$superAttrMorph(element,attrName,domHelper);this.namespace=namespace;}AttributeNSAttrMorph.prototype=Object.create(AttrMorph.prototype);AttributeNSAttrMorph.prototype._update=updateAttributeNS;AttributeNSAttrMorph.prototype._get=getAttributeNS;function AttributeAttrMorph(element,attrName,domHelper){this._$superAttrMorph(element,attrName,domHelper);}AttributeAttrMorph.prototype=Object.create(AttrMorph.prototype);AttributeAttrMorph.prototype._update=updateAttribute;AttributeAttrMorph.prototype._get=getAttribute;exports.default=AttrMorph;exports.sanitizeAttributeValue=_sanitizeAttributeValue.sanitizeAttributeValue;/***/},/* 54 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.sanitizeAttributeValue=sanitizeAttributeValue;/* jshint scripturl:true */var badProtocols={'javascript:':true,'vbscript:':true};var badTags={'A':true,'BODY':true,'LINK':true,'IMG':true,'IFRAME':true,'BASE':true,'FORM':true};var badTagsForDataURI={'EMBED':true};var badAttributes=exports.badAttributes={'href':true,'src':true,'background':true,'action':true};var badAttributesForDataURI={'src':true};function sanitizeAttributeValue(dom,element,attribute,value){var tagName;if(!element){tagName=null;}else{tagName=element.tagName.toUpperCase();}if(value&&value.toHTML){return value.toHTML();}if((tagName===null||badTags[tagName])&&badAttributes[attribute]){var protocol=dom.protocolForURL(value);if(badProtocols[protocol]===true){return'unsafe:'+value;}}if(badTagsForDataURI[tagName]&&badAttributesForDataURI[attribute]){return'unsafe:'+value;}return value;}/***/},/* 55 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.isAttrRemovalValue=isAttrRemovalValue;exports.normalizeProperty=normalizeProperty;function isAttrRemovalValue(value){return value===null||value===undefined;}/*
		 *
		 * @method normalizeProperty
		 * @param element {HTMLElement}
		 * @param slotName {String}
		 * @returns {Object} { name, type }
		 */function normalizeProperty(element,slotName){var type,normalized;if(slotName in element){normalized=slotName;type='prop';}else{var lower=slotName.toLowerCase();if(lower in element){type='prop';normalized=lower;}else{type='attr';normalized=slotName;}}if(type==='prop'&&(normalized.toLowerCase()==='style'||preferAttr(element.tagName,normalized))){type='attr';}return{normalized:normalized,type:type};}// properties that MUST be set as attributes, due to:
	// * browser bug
	// * strange spec outlier
	var ATTR_OVERRIDES={// phantomjs < 2.0 lets you set it as a prop but won't reflect it
	// back to the attribute. button.getAttribute('type') === null
	BUTTON:{type:true,form:true},INPUT:{// TODO: remove when IE8 is droped
	// Some versions of IE (IE8) throw an exception when setting
	// `input.list = 'somestring'`:
	// https://github.com/emberjs/ember.js/issues/10908
	// https://github.com/emberjs/ember.js/issues/11364
	list:true,// Some version of IE (like IE9) actually throw an exception
	// if you set input.type = 'something-unknown'
	type:true,form:true,// Chrome 46.0.2464.0: 'autocorrect' in document.createElement('input') === false
	// Safari 8.0.7: 'autocorrect' in document.createElement('input') === false
	// Mobile Safari (iOS 8.4 simulator): 'autocorrect' in document.createElement('input') === true
	autocorrect:true},// element.form is actually a legitimate readOnly property, that is to be
	// mutated, but must be mutated by setAttribute...
	SELECT:{form:true},OPTION:{form:true},TEXTAREA:{form:true},LABEL:{form:true},FIELDSET:{form:true},LEGEND:{form:true},OBJECT:{form:true}};function preferAttr(tagName,propName){var tag=ATTR_OVERRIDES[tagName.toUpperCase()];return tag&&tag[propName.toLowerCase()]||false;}/***/},/* 56 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});/* global XMLSerializer:false */var svgHTMLIntegrationPoints=exports.svgHTMLIntegrationPoints={foreignObject:1,desc:1,title:1};var svgNamespace=exports.svgNamespace='http://www.w3.org/2000/svg';var doc=typeof document==='undefined'?false:document;// Safari does not like using innerHTML on SVG HTML integration
	// points (desc/title/foreignObject).
	var needsIntegrationPointFix=doc&&function(document){if(document.createElementNS===undefined){return;}// In FF title will not accept innerHTML.
	var testEl=document.createElementNS(svgNamespace,'title');testEl.innerHTML='<div></div>';return testEl.childNodes.length===0||testEl.childNodes[0].nodeType!==1;}(doc);// Internet Explorer prior to 9 does not allow setting innerHTML if the first element
	// is a "zero-scope" element. This problem can be worked around by making
	// the first node an invisible text node. We, like Modernizr, use &shy;
	var needsShy=doc&&function(document){var testEl=document.createElement('div');testEl.innerHTML='<div></div>';testEl.firstChild.innerHTML='<script><\/script>';return testEl.firstChild.innerHTML==='';}(doc);// IE 8 (and likely earlier) likes to move whitespace preceeding
	// a script tag to appear after it. This means that we can
	// accidentally remove whitespace when updating a morph.
	var movesWhitespace=doc&&function(document){var testEl=document.createElement('div');testEl.innerHTML='Test: <script type=\'text/x-placeholder\'><\/script>Value';return testEl.childNodes[0].nodeValue==='Test:'&&testEl.childNodes[2].nodeValue===' Value';}(doc);var tagNamesRequiringInnerHTMLFix=doc&&function(document){var tagNamesRequiringInnerHTMLFix;// IE 9 and earlier don't allow us to set innerHTML on col, colgroup, frameset,
	// html, style, table, tbody, tfoot, thead, title, tr. Detect this and add
	// them to an initial list of corrected tags.
	//
	// Here we are only dealing with the ones which can have child nodes.
	//
	var tableNeedsInnerHTMLFix;var tableInnerHTMLTestElement=document.createElement('table');try{tableInnerHTMLTestElement.innerHTML='<tbody></tbody>';}catch(e){}finally{tableNeedsInnerHTMLFix=tableInnerHTMLTestElement.childNodes.length===0;}if(tableNeedsInnerHTMLFix){tagNamesRequiringInnerHTMLFix={colgroup:['table'],table:[],tbody:['table'],tfoot:['table'],thead:['table'],tr:['table','tbody']};}// IE 8 doesn't allow setting innerHTML on a select tag. Detect this and
	// add it to the list of corrected tags.
	//
	var selectInnerHTMLTestElement=document.createElement('select');selectInnerHTMLTestElement.innerHTML='<option></option>';if(!selectInnerHTMLTestElement.childNodes[0]){tagNamesRequiringInnerHTMLFix=tagNamesRequiringInnerHTMLFix||{};tagNamesRequiringInnerHTMLFix.select=[];}return tagNamesRequiringInnerHTMLFix;}(doc);function scriptSafeInnerHTML(element,html){// without a leading text node, IE will drop a leading script tag.
	html='&shy;'+html;element.innerHTML=html;var nodes=element.childNodes;// Look for &shy; to remove it.
	var shyElement=nodes[0];while(shyElement.nodeType===1&&!shyElement.nodeName){shyElement=shyElement.firstChild;}// At this point it's the actual unicode character.
	if(shyElement.nodeType===3&&shyElement.nodeValue.charAt(0)==='­'){var newValue=shyElement.nodeValue.slice(1);if(newValue.length){shyElement.nodeValue=shyElement.nodeValue.slice(1);}else{shyElement.parentNode.removeChild(shyElement);}}return nodes;}function buildDOMWithFix(html,contextualElement){var tagName=contextualElement.tagName;// Firefox versions < 11 do not have support for element.outerHTML.
	var outerHTML=contextualElement.outerHTML||new XMLSerializer().serializeToString(contextualElement);if(!outerHTML){throw'Can\'t set innerHTML on '+tagName+' in this browser';}html=fixSelect(html,contextualElement);var wrappingTags=tagNamesRequiringInnerHTMLFix[tagName.toLowerCase()];var startTag=outerHTML.match(new RegExp('<'+tagName+'([^>]*)>','i'))[0];var endTag='</'+tagName+'>';var wrappedHTML=[startTag,html,endTag];var i=wrappingTags.length;var wrappedDepth=1+i;while(i--){wrappedHTML.unshift('<'+wrappingTags[i]+'>');wrappedHTML.push('</'+wrappingTags[i]+'>');}var wrapper=document.createElement('div');scriptSafeInnerHTML(wrapper,wrappedHTML.join(''));var element=wrapper;while(wrappedDepth--){element=element.firstChild;while(element&&element.nodeType!==1){element=element.nextSibling;}}while(element&&element.tagName!==tagName){element=element.nextSibling;}return element?element.childNodes:[];}var buildDOM;if(needsShy){buildDOM=function buildDOM(html,contextualElement,dom){html=fixSelect(html,contextualElement);contextualElement=dom.cloneNode(contextualElement,false);scriptSafeInnerHTML(contextualElement,html);return contextualElement.childNodes;};}else{buildDOM=function buildDOM(html,contextualElement,dom){html=fixSelect(html,contextualElement);contextualElement=dom.cloneNode(contextualElement,false);contextualElement.innerHTML=html;return contextualElement.childNodes;};}function fixSelect(html,contextualElement){if(contextualElement.tagName==='SELECT'){html='<option></option>'+html;}return html;}var buildIESafeDOM;if(tagNamesRequiringInnerHTMLFix||movesWhitespace){buildIESafeDOM=function buildIESafeDOM(html,contextualElement,dom){// Make a list of the leading text on script nodes. Include
	// script tags without any whitespace for easier processing later.
	var spacesBefore=[];var spacesAfter=[];if(typeof html==='string'){html=html.replace(/(\s*)(<script)/g,function(match,spaces,tag){spacesBefore.push(spaces);return tag;});html=html.replace(/(<\/script>)(\s*)/g,function(match,tag,spaces){spacesAfter.push(spaces);return tag;});}// Fetch nodes
	var nodes;if(tagNamesRequiringInnerHTMLFix[contextualElement.tagName.toLowerCase()]){// buildDOMWithFix uses string wrappers for problematic innerHTML.
	nodes=buildDOMWithFix(html,contextualElement);}else{nodes=buildDOM(html,contextualElement,dom);}// Build a list of script tags, the nodes themselves will be
	// mutated as we add test nodes.
	var i,j,node,nodeScriptNodes;var scriptNodes=[];for(i=0;i<nodes.length;i++){node=nodes[i];if(node.nodeType!==1){continue;}if(node.tagName==='SCRIPT'){scriptNodes.push(node);}else{nodeScriptNodes=node.getElementsByTagName('script');for(j=0;j<nodeScriptNodes.length;j++){scriptNodes.push(nodeScriptNodes[j]);}}}// Walk the script tags and put back their leading text nodes.
	var scriptNode,textNode,spaceBefore,spaceAfter;for(i=0;i<scriptNodes.length;i++){scriptNode=scriptNodes[i];spaceBefore=spacesBefore[i];if(spaceBefore&&spaceBefore.length>0){textNode=dom.document.createTextNode(spaceBefore);scriptNode.parentNode.insertBefore(textNode,scriptNode);}spaceAfter=spacesAfter[i];if(spaceAfter&&spaceAfter.length>0){textNode=dom.document.createTextNode(spaceAfter);scriptNode.parentNode.insertBefore(textNode,scriptNode.nextSibling);}}return nodes;};}else{buildIESafeDOM=buildDOM;}var buildHTMLDOM;if(needsIntegrationPointFix){exports.buildHTMLDOM=buildHTMLDOM=function buildHTMLDOM(html,contextualElement,dom){if(svgHTMLIntegrationPoints[contextualElement.tagName]){return buildIESafeDOM(html,document.createElement('div'),dom);}else{return buildIESafeDOM(html,contextualElement,dom);}};}else{exports.buildHTMLDOM=buildHTMLDOM=buildIESafeDOM;}exports.buildHTMLDOM=buildHTMLDOM;/***/},/* 57 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var doc=typeof document==='undefined'?false:document;// PhantomJS has a broken classList. See https://github.com/ariya/phantomjs/issues/12782
	var canClassList=doc&&function(){var d=document.createElement('div');if(!d.classList){return false;}d.classList.add('boo');d.classList.add('boo','baz');return d.className==='boo baz';}();function buildClassList(element){var classString=element.getAttribute('class')||'';return classString!==''&&classString!==' '?classString.split(' '):[];}function intersect(containingArray,valuesArray){var containingIndex=0;var containingLength=containingArray.length;var valuesIndex=0;var valuesLength=valuesArray.length;var intersection=new Array(valuesLength);// TODO: rewrite this loop in an optimal manner
	for(;containingIndex<containingLength;containingIndex++){valuesIndex=0;for(;valuesIndex<valuesLength;valuesIndex++){if(valuesArray[valuesIndex]===containingArray[containingIndex]){intersection[valuesIndex]=containingIndex;break;}}}return intersection;}function addClassesViaAttribute(element,classNames){var existingClasses=buildClassList(element);var indexes=intersect(existingClasses,classNames);var didChange=false;for(var i=0,l=classNames.length;i<l;i++){if(indexes[i]===undefined){didChange=true;existingClasses.push(classNames[i]);}}if(didChange){element.setAttribute('class',existingClasses.length>0?existingClasses.join(' '):'');}}function removeClassesViaAttribute(element,classNames){var existingClasses=buildClassList(element);var indexes=intersect(classNames,existingClasses);var didChange=false;var newClasses=[];for(var i=0,l=existingClasses.length;i<l;i++){if(indexes[i]===undefined){newClasses.push(existingClasses[i]);}else{didChange=true;}}if(didChange){element.setAttribute('class',newClasses.length>0?newClasses.join(' '):'');}}var addClasses,removeClasses;if(canClassList){exports.addClasses=addClasses=function addClasses(element,classNames){if(element.classList){if(classNames.length===1){element.classList.add(classNames[0]);}else if(classNames.length===2){element.classList.add(classNames[0],classNames[1]);}else{element.classList.add.apply(element.classList,classNames);}}else{addClassesViaAttribute(element,classNames);}};exports.removeClasses=removeClasses=function removeClasses(element,classNames){if(element.classList){if(classNames.length===1){element.classList.remove(classNames[0]);}else if(classNames.length===2){element.classList.remove(classNames[0],classNames[1]);}else{element.classList.remove.apply(element.classList,classNames);}}else{removeClassesViaAttribute(element,classNames);}};}else{exports.addClasses=addClasses=addClassesViaAttribute;exports.removeClasses=removeClasses=removeClassesViaAttribute;}exports.addClasses=addClasses;exports.removeClasses=removeClasses;/***/}/******/]));});;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)(module)))

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable = __webpack_require__(30);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(41);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @module Helpers
	 */
	module.exports = {

		/**
	  * @class Helpers.Utils
	  * @static
	  */

		each: function each(obj, callback, context) {
			if (obj instanceof _Observable2.default) {
				obj = obj.attributes;
			} else if (obj instanceof _ObservableArray2.default) {
				obj = obj.items;
			}
			return _underscore2.default.each(obj, callback, context);
		},

		isTruthlike: function isTruthlike(value) {

			// Null/undef
			if (value === null || value === undefined) return false;

			// Bool?
			if (value === true) return true;
			if (value === false) return false;

			// 0 and 1?
			if (value === 1 || value === '1') return true;
			if (value === 0 || value === '0') return false;

			// Array?
			if (Array.isArray(value) || value instanceof _ObservableArray2.default) {
				return value.length > 0;
			}

			// Object
			if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.contructor === Object) {
				return _underscore2.default.key(value).length > 0;
			}

			// Do it natively
			return !!value;
		}

	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(31);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _ClassMap = __webpack_require__(32);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Core
	 */
	var ObservableArray = function (_Obj) {
		_inherits(ObservableArray, _Obj);

		/**
	  * An ObservableArray is a simple list that notifies listeners
	  * of any changes in the list or any of it's observable items.
	  *
	  * @class Core.ObservableArray
	  *
	  * @constructor
	  * @param  {Array}  [initValues=[]]        			 An array of values to initialize the object with
	  * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
	  */
		function ObservableArray() {
			var initValues = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
			var convertToObservables = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

			_classCallCheck(this, ObservableArray);

			// Properties
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObservableArray).call(this));

			_this.items = [];

			// Import start values
			_this.import(initValues, convertToObservables, true);

			return _this;
		}

		_createClass(ObservableArray, [{
			key: 'import',
			value: function _import(arr) {
				var _this2 = this;

				var convertToObservables = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
				var doNotNotify = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Go through to the object's first level
				_underscore2.default.each(arr, function (value) {

					// Is the value an array or object?
					if ((Array.isArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') && convertToObservables === true) {

						// Array or object?
						if (Array.isArray(value)) {

							// Put a new observable array in there
							_this2.items.push(new ObservableArray(value));
						} else {

							// Put a new observable in there
							_this2.items.push(_ClassMap2.default.create('Observable', [value]));
						}
					} else {

						// Just add the value (don't notify)
						_this2.items.push(value);
					}
				});

				// Trigger import
				this.trigger(ObservableArray.Events.Import);

				// Notify of change?
				if (!doNotNotify) {
					this.trigger('change');
					this.trigger('added', arr);
				}

				return this;
			}
		}, {
			key: 'get',
			value: function get(key) {

				// Split
				var parts = Number.isInteger(key) ? [key] : key.split(/\./);
				var currentPart = parts.shift();

				// Is it a wildcard?
				var value = undefined;
				if (currentPart === '*') {

					// We will return an array containg all the values we retrieve!
					var restKey = parts.join('.');
					return _underscore2.default.map(this.items, function (item) {
						return item.get(restKey);
					});
				} else if (Number.isInteger(currentPart) || currentPart.match(/^\d+$/)) {

					// Get the value
					value = this.items[currentPart];
				} else {

					throw new TypeError('Invalid key');
				}

				// Value found?
				if (value === undefined || parts.length === 0) {
					return value;
				}

				// Check if the value is also an observable
				if (ObservableArray.isObservable(value)) {

					// Pass the rest along to go a level deeper
					return value.get(parts.join('.'));
				} else {

					throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
				}
			}
		}, {
			key: 'set',
			value: function set(key, value) {
				var _this3 = this;

				var convertToObservables = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Convert?
				if (convertToObservables === true && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Object) {
					value = _ClassMap2.default.create('Observable', value);
				}

				// Numeric?
				if (Number.isInteger(key) || typeof key === 'string' && key.match(/^\d+$/)) {

					// Set it
					this.items[key] = value;
					return this;
				}

				// Is there a dot in there?
				if (typeof key === 'string' && key.match(/\.\w/)) {

					////////////////////////
					// Split and deep set //
					////////////////////////

					var parts = key.split(/\./);
					var currentPart = parts.shift();

					// Does the first key exist?
					var item = this.items[currentPart];
					if (item === undefined) {

						// Should it be an array or an observable?
						var newValue = void 0;
						if (Number.isInteger(parts[0]) || typeof parts[0] === 'string' && parts[0].match(/^\d+$/)) {

							// Create list (using classmap to prevent circular dependencies)
							newValue = new ObservableArray();
						} else {

							// Create it
							newValue = _ClassMap2.default.create('Observable');
						}

						// Study it
						newValue.study(function () {
							_this3.trigger(ObservableArray.Events.Change);
						});

						// Store it
						this.items[currentPart] = newValue;
					}

					// Do deep setting
					this.get(currentPart).set(parts.join('.'), value);

					return this;
				}

				throw new TypeError('Invalid key');
			}

			/**
	   * Add one or more items to the array
	   *
	   * @method add
	   * @param {...[mixed]} values One or more values to add
	   * @chainable
	   */

		}, {
			key: 'add',
			value: function add() {
				var _this4 = this;

				for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
					values[_key] = arguments[_key];
				}

				// Add items
				_underscore2.default.each(values, function (value) {

					// Add it.
					_this4.items.push(value);

					// Is it observable?
					if (ObservableArray.isObservable(value)) {
						value.on('change', function () {
							_this4.trigger('change');
						});
					}
				});

				// Trigger events
				this.trigger(ObservableArray.Events.Change);
				this.trigger(ObservableArray.Events.Add, values);

				return this;
			}

			/**
	   * Delete one or more items from the array
	   *
	   * @method delete
	   * @param  {...[mixed]} values One or more values to delete
	   * @chainable
	   */

		}, {
			key: 'delete',
			value: function _delete() {
				for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					values[_key2] = arguments[_key2];
				}

				this.items = _underscore2.default.difference(this.items, values);

				// Trigger events
				this.trigger('change');
				this.trigger('delete', values);

				return this;
			}

			/**
	   * Remove all items from the array
	   *
	   * @method empty
	   * @chainable
	   */

		}, {
			key: 'empty',
			value: function empty() {

				// Values that are deleted
				var deleted = _underscore2.default.difference(this.items, []);

				// Now clear
				this.items = [];

				// Trigger events
				this.trigger(ObservableArray.Events.Change);
				this.trigger(ObservableArray.Events.Delete, deleted);
				this.trigger(ObservableArray.Events.Empty);

				return this;
			}

			/**
	   * Listen for any changes in any of the object's attributes. 
	   * The callback will receive an array containing the names of
	   * all updates attributes. 
	   *
	   * Note: This is an alias of the 'changed' event, so calling
	   * ```this.on('changed', callback)``` will achieve the same result.
	   *
	   * @example
	   * 	// Initialize object
	   * 	var obj = new Chicken.Core.Observable();
	   * 	obj.set('foo', 'bar');
	   * 	var childObj = new Chicken.Core.Observable();
	   * 	childObj.set('free', 'willy');
	   * 	obj.set('child', childObj);
	   *
	   * 	// Listen
	   * 	obj.study((changedAttributes) {
	   * 		console.log(changedAttributes);
	   * 	});
	   *
	   * 	// Update attributes
	   *	obj.set('foo', 'boo');                  // Will log ['foo']
	   *	obj.get('child').set('free', 'tibet');  // Will log ['child']
	   * 	childObj.set('foo', 'bee');             // Will log ['child']
	   *
	   * @method study
	   * @param  {Function} callback
	   * @chainable
	   */

		}, {
			key: 'study',
			value: function study(callback) {

				// This is an alias of the 'changed' event
				return this.on('change', callback);
			}

			/**
	   * Stop listening for changes on the object's attributes.
	   *
	   * Note: This is an alias of the 'changed' event, so calling
	   * ```this.off('changed', callback)``` will achieve the same result.
	   *
	   * @example
	   * 
	   * 
	   * @method neglect
	   * @param  {Function} callback 
	   * @chainable
	   */

		}, {
			key: 'neglect',
			value: function neglect(callback) {

				// This is an alias of the 'changed' event
				return this.off('change', callback);
			}
		}, {
			key: 'toArray',
			value: function toArray() {

				return this.items.map(function (item) {

					// Observable?
					if (ObservableArray.isObservable(item)) {

						// Array?
						if (item instanceof ObservableArray) {
							return item.toArray();
						} else {
							return item.toObject();
						}
					}

					return item;
				});
			}

			/**
	   * The number of items in the array
	   * 
	   * @property length
	   * @type {Number}
	   */

		}, {
			key: 'isObservable',
			value: function isObservable() {
				return true;
			}
		}, {
			key: 'length',
			get: function get() {
				return this.items.length;
			}
		}]);

		return ObservableArray;
	}(_Obj3.default);

	////////////
	// Events //
	////////////

	ObservableArray.Events = {

		/**
	  * This event is fired whenever anything changes in the array
	  * of one of its observable items.
	  * 
	  * @event change
	  */
		Change: 'change',

		/**
	  * This event is fired whenever one or more items are added
	  * 
	  * @event add
	  * @param {Array} values		The item values that were added
	  */
		Add: 'add',

		/**
	  * This event is fired whenever one or more items are deleted
	  * 
	  * @event delete
	  * @param {Array} values		The item values that were deleted
	  */
		Delete: 'delete',

		/**
	  * This event is fired when the array is emptied. Not that the `delete`
	  * event is also triggered, right before the `empty` event.
	  *
	  * @event empty
	  */
		Empty: 'empty',

		/**
	  * This event is fired whenever an import is completed
	  *
	  * @event import
	  */
		Import: 'import'

	};

	ObservableArray.isObservable = function (obj) {

		return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && typeof obj.isObservable === 'function' && obj.isObservable() === true;
	};

	_ClassMap2.default.register('ObservableArray', ObservableArray);

	module.exports = ObservableArray;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Dom
	 */
	var Binding = function () {

		/**
	  * @class Dom.Binding
	  * 
	  * @constructor
	  * @param  {Dom.Renderer} 							renderer   
	  * @param  {Core.Observable|Core.ObservableArray} 	observable 
	  * @param  {string} 								path       	
	  */
		function Binding(renderer, observable, path) {
			var _this = this;

			_classCallCheck(this, Binding);

			/**
	   * The Renderer this Binding has been created by. This is 
	   * used to be able to hook back into Rendere functions.
	   *
	   * @property renderer
	   * @type {Dom.Renderer}
	   */
			this.renderer = renderer;

			/**
	   * The Observable (or ObservableArray) that contains the data.
	   * 
	   * @property observable
	   * @type {Core.Observable|Core.ObservableArray}
	   */
			this.observable = observable;

			/**
	   * The path/key in the Observable to observe
	   * @type {string}
	   */
			this.path = path;

			/**
	   * The list of 'morph' objects that are bound by this Binding. A
	   * morph refers to a specific part of the DocumentFragment that can be
	   * updated. These morphs are provides by the HTMLBars package.
	   * 
	   * @property morphs
	   * @type {Array} 
	   */
			this.morphs = [];

			////////////////
			// Now watch! //
			////////////////

			this.observable.observe(path, function () {

				// Trigger updates for all morphs
				_underscore2.default.each(_this.morphs, function (morph) {
					_this.applyValue(morph);
				});
			});
		}

		/**
	  * Get the current value of the data object
	  *
	  * @method getValue
	  * @return {mixed}
	  */


		_createClass(Binding, [{
			key: 'getValue',
			value: function getValue() {
				return this.observable.get(this.path);
			}
		}, {
			key: 'setValue',
			value: function setValue(value) {
				return this.observable.set(this.path, value);
			}

			/**
	   * Add a morph object to the list of morphs, so that it will
	   * be updated when the data changes. And in cases when applicable,
	   * vice-versa.
	   *
	   * @method addMorph
	   * @param {HTMLBarsMorph} morph 
	   */

		}, {
			key: 'addMorph',
			value: function addMorph(morph) {

				//////////////////////////////////////////
				// Add the morph, for data->dom binding //
				//////////////////////////////////////////

				this.morphs.push(morph);

				///////////////////////////////////////////
				// Check node type for dom->data binding //
				///////////////////////////////////////////

				for (var key in Binding.TwoWay) {

					// Check if it applies
					var twoWay = Binding.TwoWay[key];
					if (twoWay.match(morph)) {

						// Let's bind!
						twoWay.bind(this, morph);
						break;
					}
				}
			}

			/**
	   * Apply the current value to the given morph
	   *
	   * @method applyValue
	   * @param  {HTMLBarsMorph} 	morph
	   */

		}, {
			key: 'applyValue',
			value: function applyValue(morph) {

				// Set it		
				morph.setContent(this.renderer.hooks.getValue(this));
			}
		}]);

		return Binding;
	}();

	Binding.TwoWay = {

		InputValue: {
			match: function match(morph) {
				return morph.element && /^INPUT$/.test(morph.element.tagName) && morph.attrName === 'value' && /^text|password|number|email$/.test(morph.element.type);
			},
			bind: function bind(binding, morph) {

				// Listen to key up, etc
				var $element = (0, _jquery2.default)(morph.element);
				$element.on('keyup change paste', function () {
					binding.setValue($element.val());
				});
			}
		},

		TextareaContent: {
			match: function match(morph) {
				return morph.contextualElement && /^TEXTAREA$/.test(morph.contextualElement.tagName) && morph.attributeName === undefined;
			},
			bind: function bind(binding, morph) {

				// Listen to key up, etc
				var $element = (0, _jquery2.default)(morph.contextualElement);
				$element.on('keyup change paste', function () {
					binding.setValue($element.val());
				});
			}

		},

		SelectValue: {
			match: function match(morph) {
				return morph.element && /^SELECT$/.test(morph.element.tagName) && morph.attrName === 'value';
			},
			bind: function bind(binding, morph) {

				// Listen to change
				var $element = (0, _jquery2.default)(morph.element);
				$element.on('change', function () {
					binding.setValue($element.val());
				});
			}

		},

		CheckboxChecked: {
			match: function match(morph) {
				return morph.element && /^INPUT$/.test(morph.element.tagName) && morph.attrName === 'checked' && /^checkbox$/.test(morph.element.type);
			},
			bind: function bind(binding, morph) {

				// Listen to key up, etc
				var $element = (0, _jquery2.default)(morph.element);
				$element.on('change', function () {
					binding.setValue($element.prop('checked'));
				});
			}
		}

	};

	module.exports = Binding;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(31);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _SettingsObject = __webpack_require__(33);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _Route = __webpack_require__(44);

	var _Route2 = _interopRequireDefault(_Route);

	var _Request = __webpack_require__(50);

	var _Request2 = _interopRequireDefault(_Request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: ["error", { allow: ["table"] }] */

	/**
	 * @module Routing
	 */
	var Router = function (_Obj) {
		_inherits(Router, _Obj);

		/**
	  * 
	  * 
	  * @class Routing.Router
	  * @extends Core.Object
	  */
		function Router(application) {
			_classCallCheck(this, Router);

			////////////////
			// Properties //
			////////////////

			/**
	   * @property routes
	   * @type {Array}
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Router).call(this));

			_this.routes = [];

			/**
	   * @property application
	   * @type {Application}
	   */
			_this.application = application;

			///////////////////////////////////////////
			// Grouped configuration state variables //
			///////////////////////////////////////////

			_this._currentConfig = _SettingsObject2.default.create({

				parentRoute: null,
				viewContainer: 'main'

			}, ['parentRoute', 'viewContainer']);

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


		_createClass(Router, [{
			key: 'route',
			value: function route(pattern, actions) {
				var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];


				// Merge options
				options = _underscore2.default.defaults({}, options, _underscore2.default.omit(this._currentConfig.toObject(), 'parentRoute'));

				// Create the route
				var route = new _Route2.default(this, this._currentConfig.get('parentRoute'), pattern, actions, options);

				// Add route
				this.routes.push(route);

				// Return route
				return route;
			}

			/**
	   * Configure the Router to add the given options to
	   * the Routes you define within the callback.
	   *
	   * @method group
	   * @param  {object}   options  
	   * @param  {Function} callback 
	   * @chainable
	   */

		}, {
			key: 'group',
			value: function group(options, callback) {

				// Store options
				var oldConfig = this._currentConfig.clone();
				this._currentConfig.apply(options);

				// Do the callback
				callback.apply(this);

				// Restore options
				this._currentConfig = oldConfig;

				return this;
			}

			//////////////////////
			// Router in action //
			//////////////////////

			/**
	   * Handle given Request, by finding a matching Route
	   * and executing it.
	   * 
	   * @method handle
	   * @param  {Routing.Request} request 
	   * @returns {Routing.RouteMatch}
	   */

		}, {
			key: 'handle',
			value: function handle(request) {
				var _this2 = this;

				/////////////////
				// Match route //
				/////////////////

				// Is it just a URL passed along?
				if (!(request instanceof _Request2.default)) {
					request = new _Request2.default(request);
				}

				// Loop through routes until we found something.
				var routeMatch = false;
				_underscore2.default.find(this.routes, function (route) {
					routeMatch = route.match(request);
					return routeMatch;
				});

				// Found something?
				if (routeMatch === false) {

					// There is no route matching the request
					throw new Error('[Routing.Router] Could not find matching route. 404 handling is not implemented yet.');
				}

				/////////////////////////////
				// Start executing actions //
				/////////////////////////////

				var numberOfActionsStarted = 0;
				var actionPromises = [];
				routeMatch.actions.forEach(function (action, vcName) {

					// Get depends on promises
					var dependsOnPromises = _underscore2.default.map(action.dependsOn, function (dependsOnAction) {
						return dependsOnAction.getPromise('complete');
					});

					// Wait?
					if (dependsOnPromises.length > 0) {

						// Wait for it
						Promise.all(dependsOnPromises).then(function () {

							// Now we're ready!
							action.execute(_this2.application);
						}, function (error) {
							throw new Error('[Routing.Router] Action for "' + vcName + '" was not started, due to error in dependancy route: ' + error);
						});
					} else {

						// Start now
						numberOfActionsStarted++;
						action.execute(_this2.application);
					}

					// Add complete promise
					actionPromises.push(action.getPromise('complete'));
				});

				////////////////////////////
				// Keep track of progress //
				////////////////////////////

				// Any action started?
				if (numberOfActionsStarted === 0) {

					throw new Error('[Routing.Router] No actions for started for route ' + routeMatch.matchedRoute.getFullPattern() + '. Check your configuration.');
				}

				// Listen to the result
				Promise.all(actionPromises).then(function () {

					//@TODO What to do?

				}, function (error) {

					throw new Error('[Routing.Router] Executing route failed: ' + error);
				});

				return routeMatch;
			}

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

		}, {
			key: 'outputToConsole',
			value: function outputToConsole() {

				// Loop and log
				console.table(_underscore2.default.map(this.routes, function (route) {
					return {
						'Pattern': route.getFullPattern(),
						'Actions': route.isAbstract() ? '(abstract)' : _underscore2.default.map(route.getFullActions(), function (action, targetViewContainer) {
							return targetViewContainer + ': ' + (typeof action === 'function' ? '(Callback)' : action);
						}).join(', '),
						'Regular expression': route.getRegExp()
					};
				}));

				return this;
			}
		}]);

		return Router;
	}(_Obj3.default);

	module.exports = Router;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _xregexp = __webpack_require__(3);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _Obj2 = __webpack_require__(31);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _RouteMatch = __webpack_require__(45);

	var _RouteMatch2 = _interopRequireDefault(_RouteMatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Routing
	 */
	var Route = function (_Obj) {
		_inherits(Route, _Obj);

		/**
	  * A Route configures a uri and its actions, parameters,
	  * and models.
	  * 
	  * @class Routing.Route
	  * @extends Core.Object
	  * 
	  * @constructor
	  * @param {Routing.Router} 	router 				The application's Router instance
	  * @param {Routing.Route} 	parent 				The route that the route you are creating is to be child of. Use `null` when there is no parent.
	  * @param {string} 			pattern 			The route's pattern, not including the parent's pattern
	  * @param {object|string}	[actions=null]		An action string o object containing one or more actions, keyed by the target ViewContainer. 
	  *                                        		If you don't define actions this route will be made abstract.
	  * @param {object}			[options={}]		An object containing one or more configuration options
	  */
		function Route(router, parent, pattern) {
			var actions = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
			var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

			_classCallCheck(this, Route);

			// Private vars
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Route).call(this));

			// Basics


			_this._parameterConstraints = new Map();
			_this._actions = actions;

			////////////////
			// Properties //
			////////////////

			/**
	   * The Route that this Route is nested in
	   * 
	   * @property parentRoute
	   * @type {Routing.Route}
	   */
			_this.parentRoute = parent;

			/**
	   * The Router that this Route is a part of
	   * 
	   * @property router
	   * @type {Routing.Router}
	   */
			_this.router = router;

			/**
	   * The defined pattern, not including any parent patterns
	   * 
	   * @property pattern
	   * @type {string}
	   */
			_this.pattern = pattern.replace(/(.)\/$/, '$1'); // Remove trailing slash


			/**
	   * The parameter names used in this route
	   * 
	   * @property parameters
	   * @type {array}
	   */
			_this.parameters = [];

			/**
	   * The options used when defining this Route
	   * 
	   * @property options
	   * @type {object}
	   */
			_this.options = _underscore2.default.defaults(options, {
				abstract: actions === null,
				as: null,
				viewContainer: 'main'
			});

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
	  *  				.nest({ viewContainer: 'dogs'}, function() {
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


		_createClass(Route, [{
			key: 'nest',
			value: function nest() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				// Check if options were given
				var callback = args.pop();
				var options = args.length > 0 ? args.pop() : {};

				// Make me the parent route
				this.router.group(_underscore2.default.defaults({
					parentRoute: this
				}, options), callback);

				return this;
			}

			/**
	   * Check whether this Route matches the given Request. If so, the method
	   * will return a complete RouteMatch. If not, the method will return `false`.
	   * 
	   * @method match
	   * @param  {Routing.Request} request     
	   * @return {Routing.RouteMatch|boolean}  
	   */

		}, {
			key: 'match',
			value: function match(request) {

				// Am I an abstract route?
				if (this.isAbstract()) return;

				// Does it match?
				var match = _xregexp2.default.exec(request.uri, this.getRegExp());

				// No match?
				if (!match) return false;

				// We matched! Let's create a match object.
				return new _RouteMatch2.default(this, match, request);
			}

			/**
	   * Get the action definitions for the Route. An action definition can either
	   * be a Controller action (e.g.: `Product@index`), or a callback. The result
	   * is keyed by the target ViewContainer name.
	   *
	   * @method getActions
	   * @return {object} 
	   */

		}, {
			key: 'getActions',
			value: function getActions() {

				// Is it still a string (Controller@action) or callback?
				if (typeof this._actions === 'string' || typeof this._actions === 'function') {

					// Wrap in object using default view container
					var actions = {};
					actions[this.options.viewContainer] = this._actions;
					this._actions = actions;
				}

				return this._actions;
			}

			/**
	   * Get the action definitions for this Route, and any parent routes that it may have.
	   *
	   * @method getFullActions
	   * @return {object} [description]
	   */

		}, {
			key: 'getFullActions',
			value: function getFullActions() {

				// Start with mine
				var actions = this.getActions();

				// Add parent
				if (this.parentRoute) {
					return _underscore2.default.defaults(actions, this.parentRoute.actions);
				}
				return actions;
			}

			/**
	   * Get the full Route pattern within the application for this route,
	   * including any parent Routes.
	   *
	   * @method getFullPattern
	   * @return {string}
	   */

		}, {
			key: 'getFullPattern',
			value: function getFullPattern() {

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
			}

			/**
	   * Get all parameter constraints for this Route, combining constraints
	   * defined by parent routes.
	   *
	   * @method getAllParameterConstraints
	   * @return {Map} Map with a regular expression constraint for each constrained parameter
	   */

		}, {
			key: 'getAllParameterConstraints',
			value: function getAllParameterConstraints() {

				// My constraints (don't overwrite)
				var c = new Map(this._parameterConstraints);

				// Get parent's constraints
				if (this.parentRoute) {

					// Prefix the pattern
					this.parentRoute.getAllParameterConstraints().forEach(function (regex, key) {
						if (!c.has(key)) c.set(key, regex);
					});
				}

				return c;
			}

			/**
	   * Get the Route's complete Regular Expression, including
	   * parameters
	   * 
	   * @method getRegExp
	   * @return {XRegExp}
	   */

		}, {
			key: 'getRegExp',
			value: function getRegExp() {
				var _this2 = this;

				// Not yet set?
				if (this._regExp === undefined) {
					(function () {

						// Collect buildingBlocks (a regular expression pattern for each parameter)
						var buildingBlocks = {};

						// Convert :params into regex with building blocks 
						// (see XRegExp.build documentation)
						var constraints = _this2.getAllParameterConstraints();
						var exp = _xregexp2.default.replace(_this2.getFullPattern(), /(([\:\*])([a-zA-Z\-\_]+))/, function (match, complete, paramType, paramName) {

							// Wildcard?
							var paramRegex = void 0;
							if (paramType === '*') {

								// Use wildcard
								paramRegex = Route.ParameterType.Wildcard;
							} else {

								// Check if there is a constraint
								paramRegex = constraints.has(paramName) ? constraints.get(paramName) : Route.ParameterType.Standard;
							}

							// Store as building block for regex
							buildingBlocks[paramName] = paramRegex;

							// Store parameter
							_this2.parameters.push(paramName);

							// Replace with a building block using named parameter
							return '({{' + paramName + '}})';
						}, 'all');

						// Create it
						_this2._regExp = _xregexp2.default.build('^' + exp + '$', buildingBlocks);
					})();
				}

				// Return it
				return this._regExp;
			}

			/**
	   * Add a constraint to a parameter, by supplying a regular expression.
	   * 
	   * @method constrain
	   * @param  {string} parameterName The name of the parameter to add constrains to
	   * @param  {RegExp} regExp        A regular expression to use when matching the parameter
	   * @chainable
	   */

		}, {
			key: 'constrain',
			value: function constrain(parameterName, regExp) {

				// Store it
				this._parameterConstraints.set(parameterName, regExp);

				return this;
			}

			/**
	   * An abstract Route can never be matched. This is useful when you have a Route
	   * that only has subroutes, but no actions itself. If you define a Route without
	   * actions, this will automatically be set to true.
	   * 
	   * @method isAbstract
	   * @return {Boolean}
	   */

		}, {
			key: 'isAbstract',
			value: function isAbstract() {
				return !!this.options.abstract;
			}
		}]);

		return Route;
	}(_Obj3.default);

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

	module.exports = Route;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Action = __webpack_require__(46);

	var _Action2 = _interopRequireDefault(_Action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Routing
	 */
	var RouteMatch = function () {

		/**
	  * When a Request is matched by a Route, a RouteMatch is created,
	  * containing all the information necessary to process the request. 
	  * The Router will use the RouteMatch to execute all the actions defined
	  * in the route(s).
	  * 
	  * @class Routing.RouteMatch
	  *
	  * @constructor
	  * @param {Routing.Route} 		route 			The route that matched
	  * @param {array}  				regExpMatch 	The result from the XRegExp.exec call
	  * @param {Routing.Request}		request 		The request that made this RouteMatch possible
	  */
		function RouteMatch(route, regExpMatch, request) {
			var _this = this;

			_classCallCheck(this, RouteMatch);

			/**
	   * The Route that matched
	   *
	   * @property route
	   * @type {Routing.Route}
	   */
			this.route = route;

			/**
	   * The result from the XRegExp.exec call when the Route was matched
	   * 
	   * @property regExpMatch
	   * @type {array}
	   */
			this.regExpMatch = regExpMatch;

			/**
	   * The request that made this RouteMatch possible
	   *
	   * @property request
	   * @type {Routing.Request}
	   */
			this.request = request;

			/**
	   * The actions that are part of this match,
	   * keyed by the target ViewContainer
	   * 
	   * @property actions
	   * @type {Map}	
	   */
			this.actions = new Map();

			/**
	   * The parameters from the Request and matched route
	   *
	   * @property parameters
	   * @type {Map}
	   */
			this.parameters = new Map();

			////////////////////
			// Create actions //
			////////////////////

			// Read parameters from match
			_underscore2.default.each(route.parameters, function (paramName) {
				_this.parameters.set(paramName, regExpMatch[paramName]);
			});

			// Start with the matched route
			this._readActionsFromRoute(route);
		}

		_createClass(RouteMatch, [{
			key: '_readActionsFromRoute',
			value: function _readActionsFromRoute(route) {
				var _this2 = this;

				// Collect parameters from route
				var params = new Map();
				var paramArray = [];
				_underscore2.default.each(route.parameters, function (paramName) {
					paramArray.push(_this2.parameters.get(paramName));
					params.set(paramName, _this2.parameters.get(paramName));
				});

				// Get actions
				var myActions = {};
				_underscore2.default.each(route.getActions(), function (routeAction, targetViewContainer) {

					// Is there already an action defined for this target
					if (_this2.actions.has(targetViewContainer)) return;

					// Make it.
					var action = new _Action2.default(targetViewContainer, routeAction, _this2.request);

					// Set routes
					action.route = route;
					action.matchedRoute = _this2.route;
					action.routeMatch = _this2;

					// Set parameters
					action.parameters = params;
					action.parameterArray = paramArray;

					// Add it.
					myActions[targetViewContainer] = action;
				});

				// Make any actions that are already there dependent on the new ones, 
				// because these actions are the parent(s) of the existing actions.
				this.actions.forEach(function (previousAction) {
					_underscore2.default.each(myActions, function (myAction) {
						previousAction.dependsOn.push(myAction);
					});
				});

				// Add these actions
				_underscore2.default.each(myActions, function (myAction, targetViewContainer) {
					_this2.actions.set(targetViewContainer, myAction);
				});

				// Now look into the parent
				if (route.parentRoute) {
					this._readActionsFromRoute(route.parentRoute);
				}

				// We're done!
				return this.actions;
			}
		}]);

		return RouteMatch;
	}();

	module.exports = RouteMatch;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _xregexp = __webpack_require__(3);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _Obj2 = __webpack_require__(31);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Controller = __webpack_require__(47);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _View = __webpack_require__(48);

	var _View2 = _interopRequireDefault(_View);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Routing
	 */
	var Action = function (_Obj) {
		_inherits(Action, _Obj);

		/**
	  * @class Routing.Action
	  * @extends Core.Obj
	  */
		function Action(targetViewContainer, controllerActionOrCallback, request) {
			_classCallCheck(this, Action);

			////////////////
			// Attributes //
			////////////////

			/**
	   * The name of the ViewContainer that this action is targeting.
	   * 
	   * @property targetViewContainer
	   * @type {string}
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Action).call(this));

			_this.targetViewContainer = targetViewContainer;

			/**
	   * The Request instance that was used to create this action
	   * 
	   * @property request
	   * @type {Routing.Request}
	   */
			_this.request = request;

			/**
	   * The Route that defined this action
	   *
	   * @property route
	   * @type {Routing.Route}
	   */
			_this.route = null;

			/**
	   * The Route that matched the Request
	   *
	   * @property matchedRoute
	   * @type {Routing.Route}
	   */
			_this.matchedRoute = null;

			/**
	   * The RouteMatch that this Action is a part
	   *
	   * @property routeMatch
	   * @type {Routing.RouteMatch}
	   */
			_this.routeMatch = null;

			/**
	   * The instance of the Controller that has been created by 
	   * this action.
	   * 
	   * @property controller
	   * @type {Routing.Controller}
	   */
			_this.controller = null;

			/**
	   * The name of the Controller class used by this action
	   * 
	   * @property controllerClass
	   * @type {string}
	   */
			_this.controllerClass = null;

			/**
	   * The name of the Controller method used by this action
	   * 
	   * @property controllerMethod
	   * @type {string}
	   */
			_this.controllerMethod = null;

			/**
	   * A callback function, when the route did not configure
	   * a Controller to be used, but an inline callback instead.
	   * 
	   * @property callback
	   * @type {function}
	   */
			_this.callback = false;

			/**
	   * A map of request parameters that are supplied to this action.
	   * 
	   * @property parameters
	   * @type {Map}
	   */
			_this.parameters = new Map();

			/**
	   * An array of request parameters, in the order of the route's
	   * pattern definition
	   *
	   * @property parameterArray
	   * @type {Array}
	   */
			_this.parameterArray = [];

			/**
	   * An array of other Actions that this Action depends on, 
	   * meaning it will wait for them to finish, before executing.
	   *
	   * This is useful when you have a route where the second action
	   * renders into a ViewContainer that is created by the first action.
	   * Child routes will automatically wait for the parent route to finish
	   * before running it's own actions.
	   * 
	   * @property dependsOn
	   * @type {Array}
	   */
			_this.dependsOn = [];

			///////////////////////////
			// Check passed argument //
			///////////////////////////

			if (typeof controllerActionOrCallback === 'string') {

				// Parse controller name
				var match = _xregexp2.default.exec(controllerActionOrCallback, Action.getControllerActionRegExp());
				if (!match) throw new TypeError('Invalid action string: ' + controllerActionOrCallback + '. Use controller@method format.');

				// Store this
				_this.controllerClass = match.class;
				_this.controllerAction = match.action;
			} else if (typeof controllerActionOrCallback === 'function') {

				// Store it
				_this.callback = controllerActionOrCallback;
			} else {

				throw new TypeError('[Routing.Action] Did not understand action: ' + controllerActionOrCallback);
			}

			return _this;
		}

		_createClass(Action, [{
			key: 'execute',
			value: function execute(application) {
				var _this2 = this;

				// Make the promise
				return this.promise('complete', function (resolve, reject) {

					// Get the view container
					_this2.viewContainer = application.getViewContainer(_this2.targetViewContainer);
					if (_this2.viewContainer === undefined) {
						reject('There is no ViewContainer available with the name "' + _this2.targetViewContainer + '"');
						return;
					}

					// The VC is busy now.
					_this2.viewContainer.setLoading(true);

					////////////////
					// Controller //
					////////////////

					if (_this2.controllerClass) {

						// Make controller
						var ChickenController = _Controller2.default.registry.get(_this2.controllerClass);
						if (ChickenController === undefined) {
							reject('No controller defined with name "' + _this2.controllerClass + '"');
							return;
						}
						_this2.controller = new ChickenController(_this2);

						// Call action
						var controllerAction = _this2.controller[_this2.controllerAction];
						if (controllerAction === 'undefined' || typeof controllerAction !== 'function') {
							reject('There is no action on the "' + _this2.controllerClass + '" controller with the name "' + _this2.controllerAction + '"');
							return;
						}

						// Make the call
						_this2._processResult(controllerAction.apply(_this2.controller, _this2.parameterArray), resolve, reject);
					}

					//////////////
					// Callback //
					//////////////
					else if (_this2.callback) {

							// Do the callback
							_this2._processResult(_this2.callback.apply(_this2.controller, _this2.parameterArray), resolve, reject);
						} else {
							reject('There is no controller or callback defined... This shouldn\'t happen.');
							return;
						}
				}).then(function (result) {}, function (error) {

					// No longer loaeding
					if (_this2.viewContainer) _this2.viewContainer.setLoading(false);
				});
			}
		}, {
			key: '_processResult',
			value: function _processResult(result, resolve, reject) {
				var _this3 = this;

				///////////////////////////
				// Is the result a view? //
				///////////////////////////

				if (result instanceof _View2.default) {
					(function () {

						// Render the view
						var view = result;
						view.render().then(function () {

							// Add it
							_this3.viewContainer.setAction(_this3);
							view.addToContainer(_this3.viewContainer);
						}, function (error) {
							reject(error);
						});
					})();
				}

				//////////////////////////////
				// Is the result a promise? //
				//////////////////////////////

				else if (result instanceof Promise) {

						// Wait for it to finish
						result.then(function (promiseResult) {

							// Process result again!
							_this3._processResult(promiseResult, resolve, reject);
						}, function (error) {
							reject(error);
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
								resolve();
							} else {

								console.log(result);

								// Don't know how to render this...
								reject('I don\'t know how to render the result for "' + this.targetViewContainer + '"');
								return;
							}
						}
			}
		}]);

		return Action;
	}(_Obj3.default);

	var _controllerActionRegExp;
	Action.getControllerActionRegExp = function () {
		if (_controllerActionRegExp === undefined) {
			_controllerActionRegExp = (0, _xregexp2.default)('^(?<class>[A-Z][a-zA-Z0-9\-\.]+)@(?<action>[a-z][a-zA-Z0-9\_]+)$');
		}
		return _controllerActionRegExp;
	};

	module.exports = Action;

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Routing
	 */
	var Controller = function () {

		/**
	  * @class Routing.Controller
	  * 
	  * @constructor
	  * @param {Routing.Action} action  The routing action that leads to the creation of this controller
	  */
		function Controller(action, application) {
			_classCallCheck(this, Controller);

			/**
	   * @property action
	   * @type {Routing.Action}
	   */
			this.action = action;

			/**
	   * @property application
	   * @type {Application}
	   */
			this.application = application;
		}

		////////////////
		// Properties //
		////////////////


		/**
	  * Request parameters
	  * 
	  * @property parameters
	  * @type {Map}
	  */


		_createClass(Controller, [{
			key: "parameters",
			get: function get() {
				return this.action.parameters;
			}

			/**
	   * The ViewContainer into which this controller action will render
	   * 
	   * @property viewContainer
	   * @type {Dom.ViewContainer}
	   */

		}, {
			key: "viewContainer",
			get: function get() {
				return this.action.viewContainer;
			}

			/**
	   * @property request
	   * @type {Routing.Request}
	   */

		}, {
			key: "request",
			get: function get() {
				return this.action.request;
			}

			/**
	   * @property route
	   * @type {Routing.Route} 
	   */

		}, {
			key: "route",
			get: function get() {
				return this.action.route;
			}
		}]);

		return Controller;
	}();

	Controller.registry = new Map();

	module.exports = Controller;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _htmlbarsStandalone = __webpack_require__(38);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _App = __webpack_require__(49);

	var _App2 = _interopRequireDefault(_App);

	var _Obj2 = __webpack_require__(31);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Observable = __webpack_require__(30);

	var _Observable2 = _interopRequireDefault(_Observable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Dom
	 */
	var View = function (_Obj) {
		_inherits(View, _Obj);

		/**
	  * ## Creating a View
	  * 
	  * A View is the part where your HTML and data come together. A View
	  * can be created directly:
	  *
	  * 	var view = new Chicken.Dom.View(source);
	  *
	  * Or shortly:
	  *
	  * 	var view = Chicken.view(source);
	  *
	  * A View can be created with three different `source` types:
	  * - HTML string
	  * - Name of a view template
	  * - And URL to a view template
	  *
	  * ## HTML
	  *
	  * The following example should be self-explanatory:
	  *
	  * 	Chicken.application($('#application'))
	  * 		.routes(function() {
	  *
	  *			this.route('/', () => {
	  *
	  *				return Chicken.view('<h1>{{ title }}</h1>')
	  *					.with('title', 'Page title');
	  * 
	  *			});
	  * 
	  * 		});
	  *
	  * Note: The `source` parameter is recognized as HTML when it starts with an HTML tag.
	  *
	  * ## By name
	  *
	  * If you want to put your templates in separate files, you can use 'names' to
	  * link to them. Use `.` in the name in place of a path seperator. Some examples:
	  *
	  * 	Chicken.view('home');               // Will open /views/home.hbs
	  * 	Chicken.view('product.index');      // Will open /views/product/index.hbs
	  * 	Chicken.view('a.b.c.d');            // Will open /views/a/b/c/d.hbs
	  *
	  * You can configure the default path and extension in your Application configuration.
	  *
	  * Note: Only use lowercase, numbers, and dashes in your names (`/[a-z0-9\-]/`)
	  *
	  *
	  * ## By URL
	  *
	  * This is pretty self-explanatory; the principle is the same as 'by name', only 
	  * here you pass a relative or absolute url instead:
	  *
	  * 	Chicken.view('/weird-location/template.xxx');
	  * 	Chicken.view('//my-domain.com/chicken-templates/welcome.hbs');
	  * 
	  * @class Dom.View
	  * @extends Core.Obj
	  *
	  * @constructor
	  * @param {string} source   			The source for the view
	  * @param {Dom.Renderer} renderer 		The Renderer instance that will be used by HTMLBars
	  */
		function View(source, renderer) {
			_classCallCheck(this, View);

			/**
	   * @property data
	   * @type {Core.Observable}
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this));

			_this.data = new _Observable2.default();

			/**
	   * Promises for data to load, keyed by the key
	   * as provided in the `with` method
	   * 
	   * @property dataPromises
	   * @type {Object}
	   */
			_this.dataPromises = {};

			/**
	   * All promises that need to resolve for the 
	   * page to load.
	   *
	   * @property loadPromises
	   * @type {Array}
	   */
			_this.loadPromises = [];

			/**
	   * @property templateString
	   * @type {string}
	   */
			_this.templateString = null;

			/**
	   * @property template
	   * @type {HTMLBars template}
	   */
			_this.template = null;

			/**
	   * @property renderer
	   * @type {Dom.Renderer}
	   */
			_this.renderer = renderer ? renderer : (0, _App2.default)().config('renderer');

			//////////////////////////
			// Check out the source //
			//////////////////////////

			// Is it HTML?
			if (/^\<[a-z\!]/.test(source)) {

				// Use code now
				_this.templateString = source;
			}

			// Name?
			else if (/[a-z0-9\-]+\./.test) {

					// Is it cached?
					if (View.TemplateCache.has(source)) {

						// Use it.
						_this.templateString = View.TemplateCache.get(source);
					} else {

						// Load template
						var url = (0, _App2.default)().uri((0, _App2.default)().config('viewPath'), source.split(/\./).join('/'), '.' + (0, _App2.default)().config('viewExtension'));
						_this._loadTemplate(url);
					}
				}

				// Url.
				else {

						// Load it
						_this._loadTemplate(url);
					}

			return _this;
		}

		_createClass(View, [{
			key: '_loadTemplate',
			value: function _loadTemplate(url) {
				var _this2 = this;

				// Promise.
				var promise = this.promise('template', function (resolve, reject) {

					// Load it.
					_jquery2.default.ajax(url).then(function (result) {

						// Set template code
						_this2.templateString = result;

						// We're done.
						resolve(result);
					}).fail(function (error) {

						reject(error.responseText);
					});
				});

				// Add and return
				this.loadPromises.push(promise);
				return promise;
			}

			/**
	   * To add data to the view, you can use the **with** method. The simplest way is to
	   * call it using a **key** and a **value**:
	   *
	   * 	Chicken.view('page').with('title', 'Page title')
	   *
	   * You can also add a promise-returning method, such as:
	   *
	   * 	Chicken.view('product.index')
	   * 		.with('products', Chicken.api('/products'));
	   *
	   * The view will then wait for the Api call to finish, before showing, so that you
	   * can use the `products` collection your view.
	   *
	   * The same goes for a single model:
	   *
	   * 	Chicken.view('product.show')
	   * 		.with('product', Chicken.api('/product/' + this.parameters.get('id')));
	   * 
	   * When you have multiple data variables you want to pass to the view, you
	   * can also use object notation:
	   *
	   * 	Chicken.view('product.index')
	   * 		.with({
	   * 			products: Chicken.api('/products'),
	   * 			categories: Chicken.api('/categories')
	   * 		});
	   *
	   * 
	   * 
	   * @method with
	   * @param  {...mixed} args   This method can be called in two ways. See documentation
	   * @chainable
	   */

		}, {
			key: 'with',
			value: function _with() {
				var _this3 = this;

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				// Is it a single object hash?
				if (args.length === 1 && _typeof(args[0]) === 'object') {

					// Do an each
					_underscore2.default.each(args[0], function (value, key) {
						_this3.with(key, value);
					});
				} else {

					// Use key/value
					var key = args[0];
					var value = args[1];

					// Is the key a string?

					if (typeof key !== 'string') throw new TypeError('[Dom.View] The "with" method accepts either a key, value or hash-object as arguments.');

					// Is the data a promise?
					if (value instanceof Promise) {

						// Add to promises
						this.dataPromises[key] = value;
						this.loadPromises.push(value);
					} else {

						// Set it now
						this.data.set(key, value, true);
					}
				}

				return this;
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				// We make the 'render' promise.
				return this.promise('render', function (resolve, reject) {

					/////////////////////////////////////////
					// Wait for all loadPromises to finish //
					/////////////////////////////////////////

					Promise.all(_this4.loadPromises).then(function () {

						/////////////////////
						// Create template //
						/////////////////////

						_this4.template = _htmlbarsStandalone2.default.Compiler.compile(_this4.templateString);
						var result = _this4.template.render(_this4.data, _this4.renderer);
						result.revalidate();

						// Resolve the promise
						resolve(result.fragment);

						// Localize and be done!
						_this4.documentFragment = result.fragment;
					});
				});
			}
		}, {
			key: 'addToDOM',
			value: function addToDOM($target) {

				// Add to dom
				$target.html(this.documentFragment);

				// Get the element
				this.$element = $target.find('>*');

				// Done!
				this.resolvePromise('added', this);
			}
		}, {
			key: 'addToContainer',
			value: function addToContainer(viewContainer) {

				viewContainer.setView(this);

				this.addToDOM(viewContainer.$element);
			}
		}]);

		return View;
	}(_Obj3.default);

	View.TemplateCache = new Map();

	module.exports = View;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ClassMap = __webpack_require__(32);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
		return _ClassMap2.default.get('Application').getInstance();
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ClassMap = __webpack_require__(32);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Routing
	 */
	var Request =

	/**
	 * @class Routing.Request
	 *
	 * @constructor
	 * @param {object} 			location 		The location received from the History library
	 * @param {Application} 	[application] 	The Application instance that this Request is a part of
	 */
	function Request(location) {
		var application = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		_classCallCheck(this, Request);

		// Guess application if not given
		if (!application) application = _ClassMap2.default.get('Application').getInstance();

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
	};

	Request.cleanUri = function (uri) {

		if (/^\//.test(uri)) uri = uri.substr(1);
		if (/\/$/.test(uri)) uri = uri.substr(0, uri.length - 1);
		return uri;
	};

	module.exports = Request;

/***/ }
/******/ ])
});
;