(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("_"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["Chicken"] = factory(require("_"));
	else
		root["Chicken"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	var _Obj = __webpack_require__(4);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _Observable = __webpack_require__(3);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(7);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Router = __webpack_require__(6);

	var _Router2 = _interopRequireDefault(_Router);

	var _Route = __webpack_require__(8);

	var _Route2 = _interopRequireDefault(_Route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/////////////////////////////
	// Chicken Package exports //
	/////////////////////////////

	//////////////////////
	// Vendor libraries //
	//////////////////////

	//import $ from 'jquery';
	//import _ from 'underscore';


	/////////////////////
	// Chicken Classes //
	/////////////////////

	module.exports = {

		Application: _Application2.default,

		Core: {
			Object: _Obj2.default,
			Observable: _Observable2.default,
			ObservableArray: _ObservableArray2.default
		},

		Routing: {
			Route: _Route2.default,
			Router: _Router2.default
		},

		createApplication: function createApplication($element, options) {

			return new _Application2.default($element, options);
		}

	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable2 = __webpack_require__(3);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Router = __webpack_require__(6);

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

	var Chicken_Application = function (_Observable) {
		_inherits(Chicken_Application, _Observable);

		/**
	  * [constructor description]
	  *
	  * @class Application
	  */
		function Chicken_Application($app, settings) {
			_classCallCheck(this, Chicken_Application);

			////////////////
			// Properties //
			////////////////

			/**
	   * The jQuery element that is the Application
	   * 
	   * @property $app
	   * @type {jQuery}
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chicken_Application).call(this));

			// Basics


			_this.$app = $app;

			/**
	   * All ViewContainers in the application. This is automatically
	   * kept up to date to contain all and only still existing containers.
	   *
	   * @property viewContainers
	   * @type {Map}
	   */
			_this.viewContainers = new Map();

			_this.router = new _Router2.default();

			_this.settings = new _Observable3.default(_underscore2.default.defaults(settings, {}));

			return _this;
		}

		_createClass(Chicken_Application, [{
			key: 'routes',
			value: function routes(callback) {

				// Run callback with router
				callback.apply(this.router, []);
				return this;
			}
		}]);

		return Chicken_Application;
	}(_Observable3.default);

	module.exports = Chicken_Application;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(4);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _ClassMap = __webpack_require__(5);

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
	  * @param  {Object}  [initValues={}]          			 A hash of key-value pairs to initialize the object with
	  * @param  {Boolean} [convertObjectsToObservables=true]	 Whether to convert any  Object values in the `initValues` parameter into Observable instance
	  **/
		function Observable() {
			var initValues = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			var convertObjectsToObservables = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

			_classCallCheck(this, Observable);

			////////////////
			// Properties //
			////////////////

			/**
	   * @attribute observers
	   * @type {Map}
	   */
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Observable).call(this));

			// Basics


			_this.observers = new Map();

			/**
	   * @attribute attributes
	   * @type {Map}
	   */
			_this.attributes = new Map();

			////////////////////
			// Initialization //
			////////////////////

			// Initialize values
			_underscore2.default.each(initValues, function (value, key) {
				_this.set(key, value, convertObjectsToObservables);
			});

			return _this;
		}

		////////////////////
		// Public methods //
		////////////////////

		/**
	  * Get attribute from object
	  *
	  * @method get
	  * @param  {string} key The name of the key to retrieve the value of. You can use dot-notation to use deep-getting
	  * @return The value or undefined when the key is not set
	  */


		_createClass(Observable, [{
			key: 'get',
			value: function get(key) {

				// Split
				var parts = Number.isInteger(key) ? [key] : key.split(/\./);
				var currentPart = parts.shift();

				// Get value
				var value = this.attributes.get(currentPart);

				// Value found?
				if (value === undefined || parts.length === 0) {
					return value;
				}

				// Check if the value is also an observable
				if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.isObservable) {

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
	   * @param {boolean} [convertObjectsToObservables=false]
	   *        						Whether to convert standard object values into Observable instances
	   * @chainable
	   */

		}, {
			key: 'set',
			value: function set(key, value) {
				var _this2 = this;

				var convertObjectsToObservables = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Convert?
				if (convertObjectsToObservables === true && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Object) {
					value = new Observable(value);
				}

				// Is there a dot in there?
				if (typeof key === 'string' && key.match(/\.[\w]/)) {
					var _ret = function () {

						////////////////////////
						// Split and deep set //
						////////////////////////

						var parts = key.split(/\./);
						var currentPart = parts.shift();

						// Does the first key exist?
						if (!_this2.attributes.has(currentPart)) {

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
							_this2.attributes.set(currentPart, newValue);
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
				this.attributes.set(key, value);

				// Is the value observable?
				if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.isObservable) {

					// Study the object
					value.study(function () {
						_this2._triggerAttributeChanged(key);
					});
				}

				// Update attribute
				this._triggerAttributeChanged(key, value);

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

			/////////////////////
			// Private methods //
			/////////////////////

		}, {
			key: '_triggerAttributeChanged',
			value: function _triggerAttributeChanged(key, value) {
				var _this3 = this;

				var calledFromObjectChanged = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Listeners?
				var observers = this.observers.get(key);
				if (observers !== undefined) {

					// Call them
					observers.forEach(function (observer) {
						observer.apply(_this3);
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
				var _this4 = this;

				var calledFromAttributeChanged = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];


				// Trigger change event
				this.trigger(Observable.Events.Change, changedAttributes);

				// Called from attribute?
				if (calledFromAttributeChanged === false) {

					// Call individual attributes
					changedAttributes.forEach(function (value, key) {
						_this4._triggerAttributeChanged(key, value, true);
					});
				}
			}
		}, {
			key: 'isObservable',
			get: function get() {
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
		Change: 'change'

	};

	_ClassMap2.default.register('Observable', Observable);

	module.exports = Observable;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
		}

		////////////////////
		// Public methods //
		////////////////////

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


		_createClass(Obj, [{
			key: "on",
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
			key: "off",
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
			key: "trigger",
			value: function trigger(eventName) {
				var _this = this;

				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				// Get the callbacks
				var callbacks = this._listeners.get(eventName);
				if (callbacks === undefined) return this;

				// Loop and call
				callbacks.forEach(function (cb) {
					cb.apply(_this, args);
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Obj2 = __webpack_require__(4);

	var _Obj3 = _interopRequireDefault(_Obj2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
		function Router() {
			_classCallCheck(this, Router);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Router).call(this));

			_this.routes = new Set();

			return _this;
		}

		return Router;
	}(_Obj3.default);

	module.exports = Router;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(4);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _ClassMap = __webpack_require__(5);

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
	  */
		function ObservableArray() {
			_classCallCheck(this, ObservableArray);

			// Add items
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObservableArray).call(this));

			_this._items = [];

			for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
				values[_key] = arguments[_key];
			}

			_this.add.apply(_this, values);
			return _this;
		}

		_createClass(ObservableArray, [{
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
					return _underscore2.default.map(this._items, function (item) {
						return item.get(restKey);
					});
				} else if (Number.isInteger(currentPart) || currentPart.match(/^\d+$/)) {

					// Get the value
					value = this._items[currentPart];
				} else {

					throw new TypeError('Invalid key');
				}

				// Value found?
				if (value === undefined || parts.length === 0) {
					return value;
				}

				// Check if the value is also an observable
				if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.isObservable) {

					// Pass the rest along to go a level deeper
					return value.get(parts.join('.'));
				} else {

					throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
				}
			}
		}, {
			key: 'set',
			value: function set(key, value) {
				var _this2 = this;

				var convertObjectsToObservables = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Convert?
				if (convertObjectsToObservables === true && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Object) {
					value = _ClassMap2.default.create('Observable', value);
				}

				// Numeric?
				if (Number.isInteger(key) || typeof key === 'string' && key.match(/^\d+$/)) {

					// Set it
					this._items[key] = value;
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
					var item = this._items[currentPart];
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
							_this2.trigger(ObservableArray.Events.Change);
						});

						// Store it
						this._items[currentPart] = newValue;
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
				var _this3 = this;

				for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					values[_key2] = arguments[_key2];
				}

				// Add items
				_underscore2.default.each(values, function (value) {

					// Add it.
					_this3._items.push(value);

					// Is it observable?
					if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.isObservable) {
						value.on('change', function () {
							_this3.trigger('change');
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
				for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
					values[_key3] = arguments[_key3];
				}

				this._items = _underscore2.default.difference(this._items, values);

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
				var deleted = _underscore2.default.difference(this._items, []);

				// Now clear
				this._items = [];

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

			/**
	   * The number of items in the array
	   * 
	   * @property length
	   * @type {Number}
	   */

		}, {
			key: 'length',
			get: function get() {
				return this._items.length;
			}

			/**
	   * The native Javascript array containing the items
	   * 
	   * @property items
	   * @type {Array}
	   */

		}, {
			key: 'items',
			get: function get() {
				return this._items;
			}
		}, {
			key: 'isObservable',
			get: function get() {
				return true;
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
		Empty: 'empty'

	};

	_ClassMap2.default.register('ObservableArray', ObservableArray);

	module.exports = ObservableArray;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _xregexp = __webpack_require__(9);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _Obj2 = __webpack_require__(4);

	var _Obj3 = _interopRequireDefault(_Obj2);

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
	  * @param {Routing.Route} 	parent 		The route that the route you are creating is to be child of. Use `null` when there is no parent.
	  * @param {Routing.Router} 	router 		The application's Router instance
	  * @param {string} 			pattern 	The route's pattern, not including the parent's pattern
	  * @param {object}  		actions		An object containing one or more actions, keyed by the target ViewContainer
	  * @param {object = {}}		options		An object containing one or more configuration options
	  */
		function Route(parent, router, pattern, actions) {
			var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

			_classCallCheck(this, Route);

			// Localize
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Route).call(this));

			// Basics


			_this._parent = parent;
			_this._router = router;
			_this._pattern = pattern;

			// Parse the pattern
			_this._regExp = _this._parsePattern();

			// Parse actions
			_this.actions = _this._parseActions(actions);

			return _this;
		}

		////////////////////
		// Public methods //
		////////////////////

		/**
	  * Get the full Route pattern within the application for this route,
	  * including any parent Routes.
	  *
	  * @method getFullPattern
	  * @return {string}
	  */


		_createClass(Route, [{
			key: 'getFullPattern',
			value: function getFullPattern() {

				// My pattern as base
				var p = this.pattern;

				// Loop through parents upwards
				var parent = this._parent;
				while (parent) {

					// Prefix the pattern
					p = parent.pattern + p;

					// Level up
					parent = parent.parentRoute;
				}

				return p;
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

				// Not yet set?
				if (this._regExp === undefined) {

					// Expression
					var exp = '^';

					console.log(exp);

					exp = '^/page$';

					// Create it
					this._regExp = _xregexp2.default.build(exp);
				}

				// Return it
				return this._regExp;
			}

			//////////////////////
			// Internal methods //
			//////////////////////

		}, {
			key: '_parsePattern',
			value: function _parsePattern() {}
		}, {
			key: '_parseActions',
			value: function _parseActions() {}

			////////////////
			// Properties //
			////////////////

			/**
	   * @property parentRoute
	   * @type Routing.Route
	   */

		}, {
			key: 'parentRoute',
			get: function get() {
				return this._parent;
			}

			/**
	   * The application's router
	   * 
	   * @property router
	   * @type Routing.Router
	   */

		}, {
			key: 'router',
			get: function get() {
				return this._router;
			}

			/**
	   * @property pattern
	   * @type string
	   */

		}, {
			key: 'pattern',
			get: function get() {
				return this._pattern;
			}
		}]);

		return Route;
	}(_Obj3.default);

	module.exports = Route;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var XRegExp = __webpack_require__(10);

	__webpack_require__(11)(XRegExp);
	__webpack_require__(12)(XRegExp);
	__webpack_require__(13)(XRegExp);
	__webpack_require__(14)(XRegExp);
	__webpack_require__(15)(XRegExp);
	__webpack_require__(16)(XRegExp);
	__webpack_require__(17)(XRegExp);

	module.exports = XRegExp;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*!
	 * XRegExp 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2007-2016 MIT License
	 */

	'use strict';

	/**
	 * XRegExp provides augmented, extensible regular expressions. You get additional regex syntax and
	 * flags, beyond what browsers support natively. XRegExp is also a regex utility belt with tools to
	 * make your client-side grepping simpler and more powerful, while freeing you from related
	 * cross-browser inconsistencies.
	 */

	// ==--------------------------==
	// Private stuff
	// ==--------------------------==

	// Property name used for extended regex instance data

	var REGEX_DATA = 'xregexp';
	// Optional features that can be installed and uninstalled
	var features = {
	    astral: false,
	    natives: false
	};
	// Native methods to use and restore ('native' is an ES3 reserved keyword)
	var nativ = {
	    exec: RegExp.prototype.exec,
	    test: RegExp.prototype.test,
	    match: String.prototype.match,
	    replace: String.prototype.replace,
	    split: String.prototype.split
	};
	// Storage for fixed/extended native methods
	var fixed = {};
	// Storage for regexes cached by `XRegExp.cache`
	var regexCache = {};
	// Storage for pattern details cached by the `XRegExp` constructor
	var patternCache = {};
	// Storage for regex syntax tokens added internally or by `XRegExp.addToken`
	var tokens = [];
	// Token scopes
	var defaultScope = 'default';
	var classScope = 'class';
	// Regexes that match native regex syntax, including octals
	var nativeTokens = {
	    // Any native multicharacter token in default scope, or any single character
	    'default': /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
	    // Any native multicharacter token in character class scope, or any single character
	    'class': /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
	};
	// Any backreference or dollar-prefixed character in replacement strings
	var replacementToken = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g;
	// Check for correct `exec` handling of nonparticipating capturing groups
	var correctExecNpcg = nativ.exec.call(/()??/, '')[1] === undefined;
	// Check for ES6 `flags` prop support
	var hasFlagsProp = /x/.flags !== undefined;
	// Shortcut to `Object.prototype.toString`
	var toString = {}.toString;

	function hasNativeFlag(flag) {
	    // Can't check based on the presense of properties/getters since browsers might support such
	    // properties even when they don't support the corresponding flag in regex construction (tested
	    // in Chrome 48, where `'unicode' in /x/` is true but trying to construct a regex with flag `u`
	    // throws an error)
	    var isSupported = true;
	    try {
	        // Can't use regex literals for testing even in a `try` because regex literals with
	        // unsupported flags cause a compilation error in IE
	        new RegExp('', flag);
	    } catch (exception) {
	        isSupported = false;
	    }
	    if (isSupported && flag === 'y') {
	        // Work around Safari 9.1.1 bug
	        return new RegExp('aa|.', 'y').test('b');
	    }
	    return isSupported;
	}
	// Check for ES6 `u` flag support
	var hasNativeU = hasNativeFlag('u');
	// Check for ES6 `y` flag support
	var hasNativeY = hasNativeFlag('y');
	// Tracker for known flags, including addon flags
	var registeredFlags = {
	    g: true,
	    i: true,
	    m: true,
	    u: hasNativeU,
	    y: hasNativeY
	};

	/**
	 * Attaches extended data and `XRegExp.prototype` properties to a regex object.
	 *
	 * @param {RegExp} regex Regex to augment.
	 * @param {Array} captureNames Array with capture names, or `null`.
	 * @param {String} xSource XRegExp pattern used to generate `regex`, or `null` if N/A.
	 * @param {String} xFlags XRegExp flags used to generate `regex`, or `null` if N/A.
	 * @param {Boolean} [isInternalOnly=false] Whether the regex will be used only for internal
	 *   operations, and never exposed to users. For internal-only regexes, we can improve perf by
	 *   skipping some operations like attaching `XRegExp.prototype` properties.
	 * @returns {RegExp} Augmented regex.
	 */
	function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
	    var p;

	    regex[REGEX_DATA] = {
	        captureNames: captureNames
	    };

	    if (isInternalOnly) {
	        return regex;
	    }

	    // Can't auto-inherit these since the XRegExp constructor returns a nonprimitive value
	    if (regex.__proto__) {
	        regex.__proto__ = XRegExp.prototype;
	    } else {
	        for (p in XRegExp.prototype) {
	            // An `XRegExp.prototype.hasOwnProperty(p)` check wouldn't be worth it here, since this
	            // is performance sensitive, and enumerable `Object.prototype` or `RegExp.prototype`
	            // extensions exist on `regex.prototype` anyway
	            regex[p] = XRegExp.prototype[p];
	        }
	    }

	    regex[REGEX_DATA].source = xSource;
	    // Emulate the ES6 `flags` prop by ensuring flags are in alphabetical order
	    regex[REGEX_DATA].flags = xFlags ? xFlags.split('').sort().join('') : xFlags;

	    return regex;
	}

	/**
	 * Removes any duplicate characters from the provided string.
	 *
	 * @param {String} str String to remove duplicate characters from.
	 * @returns {String} String with any duplicate characters removed.
	 */
	function clipDuplicates(str) {
	    return nativ.replace.call(str, /([\s\S])(?=[\s\S]*\1)/g, '');
	}

	/**
	 * Copies a regex object while preserving extended data and augmenting with `XRegExp.prototype`
	 * properties. The copy has a fresh `lastIndex` property (set to zero). Allows adding and removing
	 * flags g and y while copying the regex.
	 *
	 * @param {RegExp} regex Regex to copy.
	 * @param {Object} [options] Options object with optional properties:
	 *   <li>`addG` {Boolean} Add flag g while copying the regex.
	 *   <li>`addY` {Boolean} Add flag y while copying the regex.
	 *   <li>`removeG` {Boolean} Remove flag g while copying the regex.
	 *   <li>`removeY` {Boolean} Remove flag y while copying the regex.
	 *   <li>`isInternalOnly` {Boolean} Whether the copied regex will be used only for internal
	 *     operations, and never exposed to users. For internal-only regexes, we can improve perf by
	 *     skipping some operations like attaching `XRegExp.prototype` properties.
	 * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
	 */
	function copyRegex(regex, options) {
	    if (!XRegExp.isRegExp(regex)) {
	        throw new TypeError('Type RegExp expected');
	    }

	    var xData = regex[REGEX_DATA] || {},
	        flags = getNativeFlags(regex),
	        flagsToAdd = '',
	        flagsToRemove = '',
	        xregexpSource = null,
	        xregexpFlags = null;

	    options = options || {};

	    if (options.removeG) {
	        flagsToRemove += 'g';
	    }
	    if (options.removeY) {
	        flagsToRemove += 'y';
	    }
	    if (flagsToRemove) {
	        flags = nativ.replace.call(flags, new RegExp('[' + flagsToRemove + ']+', 'g'), '');
	    }

	    if (options.addG) {
	        flagsToAdd += 'g';
	    }
	    if (options.addY) {
	        flagsToAdd += 'y';
	    }
	    if (flagsToAdd) {
	        flags = clipDuplicates(flags + flagsToAdd);
	    }

	    if (!options.isInternalOnly) {
	        if (xData.source !== undefined) {
	            xregexpSource = xData.source;
	        }
	        // null or undefined; don't want to add to `flags` if the previous value was null, since
	        // that indicates we're not tracking original precompilation flags
	        if (xData.flags != null) {
	            // Flags are only added for non-internal regexes by `XRegExp.globalize`. Flags are never
	            // removed for non-internal regexes, so don't need to handle it
	            xregexpFlags = flagsToAdd ? clipDuplicates(xData.flags + flagsToAdd) : xData.flags;
	        }
	    }

	    // Augment with `XRegExp.prototype` properties, but use the native `RegExp` constructor to avoid
	    // searching for special tokens. That would be wrong for regexes constructed by `RegExp`, and
	    // unnecessary for regexes constructed by `XRegExp` because the regex has already undergone the
	    // translation to native regex syntax
	    regex = augment(new RegExp(regex.source, flags), hasNamedCapture(regex) ? xData.captureNames.slice(0) : null, xregexpSource, xregexpFlags, options.isInternalOnly);

	    return regex;
	}

	/**
	 * Converts hexadecimal to decimal.
	 *
	 * @param {String} hex
	 * @returns {Number}
	 */
	function dec(hex) {
	    return parseInt(hex, 16);
	}

	/**
	 * Returns native `RegExp` flags used by a regex object.
	 *
	 * @param {RegExp} regex Regex to check.
	 * @returns {String} Native flags in use.
	 */
	function getNativeFlags(regex) {
	    return hasFlagsProp ? regex.flags :
	    // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
	    // with an empty string) allows this to continue working predictably when
	    // `XRegExp.proptotype.toString` is overriden
	    nativ.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(regex))[1];
	}

	/**
	 * Determines whether a regex has extended instance data used to track capture names.
	 *
	 * @param {RegExp} regex Regex to check.
	 * @returns {Boolean} Whether the regex uses named capture.
	 */
	function hasNamedCapture(regex) {
	    return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames);
	}

	/**
	 * Converts decimal to hexadecimal.
	 *
	 * @param {Number|String} dec
	 * @returns {String}
	 */
	function hex(dec) {
	    return parseInt(dec, 10).toString(16);
	}

	/**
	 * Returns the first index at which a given value can be found in an array.
	 *
	 * @param {Array} array Array to search.
	 * @param {*} value Value to locate in the array.
	 * @returns {Number} Zero-based index at which the item is found, or -1.
	 */
	function indexOf(array, value) {
	    var len = array.length,
	        i;

	    for (i = 0; i < len; ++i) {
	        if (array[i] === value) {
	            return i;
	        }
	    }

	    return -1;
	}

	/**
	 * Determines whether a value is of the specified type, by resolving its internal [[Class]].
	 *
	 * @param {*} value Object to check.
	 * @param {String} type Type to check for, in TitleCase.
	 * @returns {Boolean} Whether the object matches the type.
	 */
	function isType(value, type) {
	    return toString.call(value) === '[object ' + type + ']';
	}

	/**
	 * Checks whether the next nonignorable token after the specified position is a quantifier.
	 *
	 * @param {String} pattern Pattern to search within.
	 * @param {Number} pos Index in `pattern` to search at.
	 * @param {String} flags Flags used by the pattern.
	 * @returns {Boolean} Whether the next token is a quantifier.
	 */
	function isQuantifierNext(pattern, pos, flags) {
	    return nativ.test.call(flags.indexOf('x') > -1 ?
	    // Ignore any leading whitespace, line comments, and inline comments
	    /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ :
	    // Ignore any leading inline comments
	    /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/, pattern.slice(pos));
	}

	/**
	 * Adds leading zeros if shorter than four characters. Used for fixed-length hexadecimal values.
	 *
	 * @param {String} str
	 * @returns {String}
	 */
	function pad4(str) {
	    while (str.length < 4) {
	        str = '0' + str;
	    }
	    return str;
	}

	/**
	 * Checks for flag-related errors, and strips/applies flags in a leading mode modifier. Offloads
	 * the flag preparation logic from the `XRegExp` constructor.
	 *
	 * @param {String} pattern Regex pattern, possibly with a leading mode modifier.
	 * @param {String} flags Any combination of flags.
	 * @returns {Object} Object with properties `pattern` and `flags`.
	 */
	function prepareFlags(pattern, flags) {
	    var i;

	    // Recent browsers throw on duplicate flags, so copy this behavior for nonnative flags
	    if (clipDuplicates(flags) !== flags) {
	        throw new SyntaxError('Invalid duplicate regex flag ' + flags);
	    }

	    // Strip and apply a leading mode modifier with any combination of flags except g or y
	    pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function ($0, $1) {
	        if (nativ.test.call(/[gy]/, $1)) {
	            throw new SyntaxError('Cannot use flag g or y in mode modifier ' + $0);
	        }
	        // Allow duplicate flags within the mode modifier
	        flags = clipDuplicates(flags + $1);
	        return '';
	    });

	    // Throw on unknown native or nonnative flags
	    for (i = 0; i < flags.length; ++i) {
	        if (!registeredFlags[flags.charAt(i)]) {
	            throw new SyntaxError('Unknown regex flag ' + flags.charAt(i));
	        }
	    }

	    return {
	        pattern: pattern,
	        flags: flags
	    };
	}

	/**
	 * Prepares an options object from the given value.
	 *
	 * @param {String|Object} value Value to convert to an options object.
	 * @returns {Object} Options object.
	 */
	function prepareOptions(value) {
	    var options = {};

	    if (isType(value, 'String')) {
	        XRegExp.forEach(value, /[^\s,]+/, function (match) {
	            options[match] = true;
	        });

	        return options;
	    }

	    return value;
	}

	/**
	 * Registers a flag so it doesn't throw an 'unknown flag' error.
	 *
	 * @param {String} flag Single-character flag to register.
	 */
	function registerFlag(flag) {
	    if (!/^[\w$]$/.test(flag)) {
	        throw new Error('Flag must be a single character A-Za-z0-9_$');
	    }

	    registeredFlags[flag] = true;
	}

	/**
	 * Runs built-in and custom regex syntax tokens in reverse insertion order at the specified
	 * position, until a match is found.
	 *
	 * @param {String} pattern Original pattern from which an XRegExp object is being built.
	 * @param {String} flags Flags being used to construct the regex.
	 * @param {Number} pos Position to search for tokens within `pattern`.
	 * @param {Number} scope Regex scope to apply: 'default' or 'class'.
	 * @param {Object} context Context object to use for token handler functions.
	 * @returns {Object} Object with properties `matchLength`, `output`, and `reparse`; or `null`.
	 */
	function runTokens(pattern, flags, pos, scope, context) {
	    var i = tokens.length,
	        leadChar = pattern.charAt(pos),
	        result = null,
	        match,
	        t;

	    // Run in reverse insertion order
	    while (i--) {
	        t = tokens[i];
	        if (t.leadChar && t.leadChar !== leadChar || t.scope !== scope && t.scope !== 'all' || t.flag && flags.indexOf(t.flag) === -1) {
	            continue;
	        }

	        match = XRegExp.exec(pattern, t.regex, pos, 'sticky');
	        if (match) {
	            result = {
	                matchLength: match[0].length,
	                output: t.handler.call(context, match, scope, flags),
	                reparse: t.reparse
	            };
	            // Finished with token tests
	            break;
	        }
	    }

	    return result;
	}

	/**
	 * Enables or disables implicit astral mode opt-in. When enabled, flag A is automatically added to
	 * all new regexes created by XRegExp. This causes an error to be thrown when creating regexes if
	 * the Unicode Base addon is not available, since flag A is registered by that addon.
	 *
	 * @param {Boolean} on `true` to enable; `false` to disable.
	 */
	function setAstral(on) {
	    features.astral = on;
	}

	/**
	 * Enables or disables native method overrides.
	 *
	 * @param {Boolean} on `true` to enable; `false` to disable.
	 */
	function setNatives(on) {
	    RegExp.prototype.exec = (on ? fixed : nativ).exec;
	    RegExp.prototype.test = (on ? fixed : nativ).test;
	    String.prototype.match = (on ? fixed : nativ).match;
	    String.prototype.replace = (on ? fixed : nativ).replace;
	    String.prototype.split = (on ? fixed : nativ).split;

	    features.natives = on;
	}

	/**
	 * Returns the object, or throws an error if it is `null` or `undefined`. This is used to follow
	 * the ES5 abstract operation `ToObject`.
	 *
	 * @param {*} value Object to check and return.
	 * @returns {*} The provided object.
	 */
	function toObject(value) {
	    // null or undefined
	    if (value == null) {
	        throw new TypeError('Cannot convert null or undefined to object');
	    }

	    return value;
	}

	// ==--------------------------==
	// Constructor
	// ==--------------------------==

	/**
	 * Creates an extended regular expression object for matching text with a pattern. Differs from a
	 * native regular expression in that additional syntax and flags are supported. The returned object
	 * is in fact a native `RegExp` and works with all native methods.
	 *
	 * @class XRegExp
	 * @constructor
	 * @param {String|RegExp} pattern Regex pattern string, or an existing regex object to copy.
	 * @param {String} [flags] Any combination of flags.
	 *   Native flags:
	 *     <li>`g` - global
	 *     <li>`i` - ignore case
	 *     <li>`m` - multiline anchors
	 *     <li>`u` - unicode (ES6)
	 *     <li>`y` - sticky (Firefox 3+, ES6)
	 *   Additional XRegExp flags:
	 *     <li>`n` - explicit capture
	 *     <li>`s` - dot matches all (aka singleline)
	 *     <li>`x` - free-spacing and line comments (aka extended)
	 *     <li>`A` - astral (requires the Unicode Base addon)
	 *   Flags cannot be provided when constructing one `RegExp` from another.
	 * @returns {RegExp} Extended regular expression object.
	 * @example
	 *
	 * // With named capture and flag x
	 * XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n\
	 *          (?<month> [0-9]{2} ) -?  # month \n\
	 *          (?<day>   [0-9]{2} )     # day   ', 'x');
	 *
	 * // Providing a regex object copies it. Native regexes are recompiled using native (not XRegExp)
	 * // syntax. Copies maintain extended data, are augmented with `XRegExp.prototype` properties, and
	 * // have fresh `lastIndex` properties (set to zero).
	 * XRegExp(/regex/);
	 */
	function XRegExp(pattern, flags) {
	    if (XRegExp.isRegExp(pattern)) {
	        if (flags !== undefined) {
	            throw new TypeError('Cannot supply flags when copying a RegExp');
	        }
	        return copyRegex(pattern);
	    }

	    // Copy the argument behavior of `RegExp`
	    pattern = pattern === undefined ? '' : String(pattern);
	    flags = flags === undefined ? '' : String(flags);

	    if (XRegExp.isInstalled('astral') && flags.indexOf('A') === -1) {
	        // This causes an error to be thrown if the Unicode Base addon is not available
	        flags += 'A';
	    }

	    if (!patternCache[pattern]) {
	        patternCache[pattern] = {};
	    }

	    if (!patternCache[pattern][flags]) {
	        var context = {
	            hasNamedCapture: false,
	            captureNames: []
	        };
	        var scope = defaultScope;
	        var output = '';
	        var pos = 0;
	        var result;

	        // Check for flag-related errors, and strip/apply flags in a leading mode modifier
	        var applied = prepareFlags(pattern, flags);
	        var appliedPattern = applied.pattern;
	        var appliedFlags = applied.flags;

	        // Use XRegExp's tokens to translate the pattern to a native regex pattern.
	        // `appliedPattern.length` may change on each iteration if tokens use `reparse`
	        while (pos < appliedPattern.length) {
	            do {
	                // Check for custom tokens at the current position
	                result = runTokens(appliedPattern, appliedFlags, pos, scope, context);
	                // If the matched token used the `reparse` option, splice its output into the
	                // pattern before running tokens again at the same position
	                if (result && result.reparse) {
	                    appliedPattern = appliedPattern.slice(0, pos) + result.output + appliedPattern.slice(pos + result.matchLength);
	                }
	            } while (result && result.reparse);

	            if (result) {
	                output += result.output;
	                pos += result.matchLength || 1;
	            } else {
	                // Get the native token at the current position
	                var token = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, 'sticky')[0];
	                output += token;
	                pos += token.length;
	                if (token === '[' && scope === defaultScope) {
	                    scope = classScope;
	                } else if (token === ']' && scope === classScope) {
	                    scope = defaultScope;
	                }
	            }
	        }

	        patternCache[pattern][flags] = {
	            // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
	            // groups are sometimes inserted during regex transpilation in order to keep tokens
	            // separated. However, more than one empty group in a row is never needed.
	            pattern: nativ.replace.call(output, /(?:\(\?:\))+/g, '(?:)'),
	            // Strip all but native flags
	            flags: nativ.replace.call(appliedFlags, /[^gimuy]+/g, ''),
	            // `context.captureNames` has an item for each capturing group, even if unnamed
	            captures: context.hasNamedCapture ? context.captureNames : null
	        };
	    }

	    var generated = patternCache[pattern][flags];
	    return augment(new RegExp(generated.pattern, generated.flags), generated.captures, pattern, flags);
	}

	// Add `RegExp.prototype` to the prototype chain
	XRegExp.prototype = new RegExp();

	// ==--------------------------==
	// Public properties
	// ==--------------------------==

	/**
	 * The XRegExp version number as a string containing three dot-separated parts. For example,
	 * '2.0.0-beta-3'.
	 *
	 * @static
	 * @type String
	 */
	XRegExp.version = '3.1.1';

	// ==--------------------------==
	// Public methods
	// ==--------------------------==

	// Intentionally undocumented; used in tests and addons
	XRegExp._hasNativeFlag = hasNativeFlag;
	XRegExp._dec = dec;
	XRegExp._hex = hex;
	XRegExp._pad4 = pad4;

	/**
	 * Extends XRegExp syntax and allows custom flags. This is used internally and can be used to
	 * create XRegExp addons. If more than one token can match the same string, the last added wins.
	 *
	 * @param {RegExp} regex Regex object that matches the new token.
	 * @param {Function} handler Function that returns a new pattern string (using native regex syntax)
	 *   to replace the matched token within all future XRegExp regexes. Has access to persistent
	 *   properties of the regex being built, through `this`. Invoked with three arguments:
	 *   <li>The match array, with named backreference properties.
	 *   <li>The regex scope where the match was found: 'default' or 'class'.
	 *   <li>The flags used by the regex, including any flags in a leading mode modifier.
	 *   The handler function becomes part of the XRegExp construction process, so be careful not to
	 *   construct XRegExps within the function or you will trigger infinite recursion.
	 * @param {Object} [options] Options object with optional properties:
	 *   <li>`scope` {String} Scope where the token applies: 'default', 'class', or 'all'.
	 *   <li>`flag` {String} Single-character flag that triggers the token. This also registers the
	 *     flag, which prevents XRegExp from throwing an 'unknown flag' error when the flag is used.
	 *   <li>`optionalFlags` {String} Any custom flags checked for within the token `handler` that are
	 *     not required to trigger the token. This registers the flags, to prevent XRegExp from
	 *     throwing an 'unknown flag' error when any of the flags are used.
	 *   <li>`reparse` {Boolean} Whether the `handler` function's output should not be treated as
	 *     final, and instead be reparseable by other tokens (including the current token). Allows
	 *     token chaining or deferring.
	 *   <li>`leadChar` {String} Single character that occurs at the beginning of any successful match
	 *     of the token (not always applicable). This doesn't change the behavior of the token unless
	 *     you provide an erroneous value. However, providing it can increase the token's performance
	 *     since the token can be skipped at any positions where this character doesn't appear.
	 * @example
	 *
	 * // Basic usage: Add \a for the ALERT control code
	 * XRegExp.addToken(
	 *   /\\a/,
	 *   function() {return '\\x07';},
	 *   {scope: 'all'}
	 * );
	 * XRegExp('\\a[\\a-\\n]+').test('\x07\n\x07'); // -> true
	 *
	 * // Add the U (ungreedy) flag from PCRE and RE2, which reverses greedy and lazy quantifiers.
	 * // Since `scope` is not specified, it uses 'default' (i.e., transformations apply outside of
	 * // character classes only)
	 * XRegExp.addToken(
	 *   /([?*+]|{\d+(?:,\d*)?})(\??)/,
	 *   function(match) {return match[1] + (match[2] ? '' : '?');},
	 *   {flag: 'U'}
	 * );
	 * XRegExp('a+', 'U').exec('aaa')[0]; // -> 'a'
	 * XRegExp('a+?', 'U').exec('aaa')[0]; // -> 'aaa'
	 */
	XRegExp.addToken = function (regex, handler, options) {
	    options = options || {};
	    var optionalFlags = options.optionalFlags,
	        i;

	    if (options.flag) {
	        registerFlag(options.flag);
	    }

	    if (optionalFlags) {
	        optionalFlags = nativ.split.call(optionalFlags, '');
	        for (i = 0; i < optionalFlags.length; ++i) {
	            registerFlag(optionalFlags[i]);
	        }
	    }

	    // Add to the private list of syntax tokens
	    tokens.push({
	        regex: copyRegex(regex, {
	            addG: true,
	            addY: hasNativeY,
	            isInternalOnly: true
	        }),
	        handler: handler,
	        scope: options.scope || defaultScope,
	        flag: options.flag,
	        reparse: options.reparse,
	        leadChar: options.leadChar
	    });

	    // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and flags
	    // might now produce different results
	    XRegExp.cache.flush('patterns');
	};

	/**
	 * Caches and returns the result of calling `XRegExp(pattern, flags)`. On any subsequent call with
	 * the same pattern and flag combination, the cached copy of the regex is returned.
	 *
	 * @param {String} pattern Regex pattern string.
	 * @param {String} [flags] Any combination of XRegExp flags.
	 * @returns {RegExp} Cached XRegExp object.
	 * @example
	 *
	 * while (match = XRegExp.cache('.', 'gs').exec(str)) {
	 *   // The regex is compiled once only
	 * }
	 */
	XRegExp.cache = function (pattern, flags) {
	    if (!regexCache[pattern]) {
	        regexCache[pattern] = {};
	    }
	    return regexCache[pattern][flags] || (regexCache[pattern][flags] = XRegExp(pattern, flags));
	};

	// Intentionally undocumented; used in tests
	XRegExp.cache.flush = function (cacheName) {
	    if (cacheName === 'patterns') {
	        // Flush the pattern cache used by the `XRegExp` constructor
	        patternCache = {};
	    } else {
	        // Flush the regex cache populated by `XRegExp.cache`
	        regexCache = {};
	    }
	};

	/**
	 * Escapes any regular expression metacharacters, for use when matching literal strings. The result
	 * can safely be used at any point within a regex that uses any flags.
	 *
	 * @param {String} str String to escape.
	 * @returns {String} String with regex metacharacters escaped.
	 * @example
	 *
	 * XRegExp.escape('Escaped? <.>');
	 * // -> 'Escaped\?\ <\.>'
	 */
	XRegExp.escape = function (str) {
	    return nativ.replace.call(toObject(str), /[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	};

	/**
	 * Executes a regex search in a specified string. Returns a match array or `null`. If the provided
	 * regex uses named capture, named backreference properties are included on the match array.
	 * Optional `pos` and `sticky` arguments specify the search start position, and whether the match
	 * must start at the specified position only. The `lastIndex` property of the provided regex is not
	 * used, but is updated for compatibility. Also fixes browser bugs compared to the native
	 * `RegExp.prototype.exec` and can be used reliably cross-browser.
	 *
	 * @param {String} str String to search.
	 * @param {RegExp} regex Regex to search with.
	 * @param {Number} [pos=0] Zero-based index at which to start the search.
	 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
	 *   only. The string `'sticky'` is accepted as an alternative to `true`.
	 * @returns {Array} Match array with named backreference properties, or `null`.
	 * @example
	 *
	 * // Basic use, with named backreference
	 * var match = XRegExp.exec('U+2620', XRegExp('U\\+(?<hex>[0-9A-F]{4})'));
	 * match.hex; // -> '2620'
	 *
	 * // With pos and sticky, in a loop
	 * var pos = 2, result = [], match;
	 * while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d)>/, pos, 'sticky')) {
	 *   result.push(match[1]);
	 *   pos = match.index + match[0].length;
	 * }
	 * // result -> ['2', '3', '4']
	 */
	XRegExp.exec = function (str, regex, pos, sticky) {
	    var cacheKey = 'g',
	        addY = false,
	        match,
	        r2;

	    addY = hasNativeY && !!(sticky || regex.sticky && sticky !== false);
	    if (addY) {
	        cacheKey += 'y';
	    }

	    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

	    // Shares cached copies with `XRegExp.match`/`replace`
	    r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
	        addG: true,
	        addY: addY,
	        removeY: sticky === false,
	        isInternalOnly: true
	    }));

	    r2.lastIndex = pos = pos || 0;

	    // Fixed `exec` required for `lastIndex` fix, named backreferences, etc.
	    match = fixed.exec.call(r2, str);

	    if (sticky && match && match.index !== pos) {
	        match = null;
	    }

	    if (regex.global) {
	        regex.lastIndex = match ? r2.lastIndex : 0;
	    }

	    return match;
	};

	/**
	 * Executes a provided function once per regex match. Searches always start at the beginning of the
	 * string and continue until the end, regardless of the state of the regex's `global` property and
	 * initial `lastIndex`.
	 *
	 * @param {String} str String to search.
	 * @param {RegExp} regex Regex to search with.
	 * @param {Function} callback Function to execute for each match. Invoked with four arguments:
	 *   <li>The match array, with named backreference properties.
	 *   <li>The zero-based match index.
	 *   <li>The string being traversed.
	 *   <li>The regex object being used to traverse the string.
	 * @example
	 *
	 * // Extracts every other digit from a string
	 * var evens = [];
	 * XRegExp.forEach('1a2345', /\d/, function(match, i) {
	 *   if (i % 2) evens.push(+match[0]);
	 * });
	 * // evens -> [2, 4]
	 */
	XRegExp.forEach = function (str, regex, callback) {
	    var pos = 0,
	        i = -1,
	        match;

	    while (match = XRegExp.exec(str, regex, pos)) {
	        // Because `regex` is provided to `callback`, the function could use the deprecated/
	        // nonstandard `RegExp.prototype.compile` to mutate the regex. However, since `XRegExp.exec`
	        // doesn't use `lastIndex` to set the search position, this can't lead to an infinite loop,
	        // at least. Actually, because of the way `XRegExp.exec` caches globalized versions of
	        // regexes, mutating the regex will not have any effect on the iteration or matched strings,
	        // which is a nice side effect that brings extra safety.
	        callback(match, ++i, str, regex);

	        pos = match.index + (match[0].length || 1);
	    }
	};

	/**
	 * Copies a regex object and adds flag `g`. The copy maintains extended data, is augmented with
	 * `XRegExp.prototype` properties, and has a fresh `lastIndex` property (set to zero). Native
	 * regexes are not recompiled using XRegExp syntax.
	 *
	 * @param {RegExp} regex Regex to globalize.
	 * @returns {RegExp} Copy of the provided regex with flag `g` added.
	 * @example
	 *
	 * var globalCopy = XRegExp.globalize(/regex/);
	 * globalCopy.global; // -> true
	 */
	XRegExp.globalize = function (regex) {
	    return copyRegex(regex, { addG: true });
	};

	/**
	 * Installs optional features according to the specified options. Can be undone using
	 * `XRegExp.uninstall`.
	 *
	 * @param {Object|String} options Options object or string.
	 * @example
	 *
	 * // With an options object
	 * XRegExp.install({
	 *   // Enables support for astral code points in Unicode addons (implicitly sets flag A)
	 *   astral: true,
	 *
	 *   // DEPRECATED: Overrides native regex methods with fixed/extended versions
	 *   natives: true
	 * });
	 *
	 * // With an options string
	 * XRegExp.install('astral natives');
	 */
	XRegExp.install = function (options) {
	    options = prepareOptions(options);

	    if (!features.astral && options.astral) {
	        setAstral(true);
	    }

	    if (!features.natives && options.natives) {
	        setNatives(true);
	    }
	};

	/**
	 * Checks whether an individual optional feature is installed.
	 *
	 * @param {String} feature Name of the feature to check. One of:
	 *   <li>`astral`
	 *   <li>`natives`
	 * @returns {Boolean} Whether the feature is installed.
	 * @example
	 *
	 * XRegExp.isInstalled('astral');
	 */
	XRegExp.isInstalled = function (feature) {
	    return !!features[feature];
	};

	/**
	 * Returns `true` if an object is a regex; `false` if it isn't. This works correctly for regexes
	 * created in another frame, when `instanceof` and `constructor` checks would fail.
	 *
	 * @param {*} value Object to check.
	 * @returns {Boolean} Whether the object is a `RegExp` object.
	 * @example
	 *
	 * XRegExp.isRegExp('string'); // -> false
	 * XRegExp.isRegExp(/regex/i); // -> true
	 * XRegExp.isRegExp(RegExp('^', 'm')); // -> true
	 * XRegExp.isRegExp(XRegExp('(?s).')); // -> true
	 */
	XRegExp.isRegExp = function (value) {
	    return toString.call(value) === '[object RegExp]';
	    //return isType(value, 'RegExp');
	};

	/**
	 * Returns the first matched string, or in global mode, an array containing all matched strings.
	 * This is essentially a more convenient re-implementation of `String.prototype.match` that gives
	 * the result types you actually want (string instead of `exec`-style array in match-first mode,
	 * and an empty array instead of `null` when no matches are found in match-all mode). It also lets
	 * you override flag g and ignore `lastIndex`, and fixes browser bugs.
	 *
	 * @param {String} str String to search.
	 * @param {RegExp} regex Regex to search with.
	 * @param {String} [scope='one'] Use 'one' to return the first match as a string. Use 'all' to
	 *   return an array of all matched strings. If not explicitly specified and `regex` uses flag g,
	 *   `scope` is 'all'.
	 * @returns {String|Array} In match-first mode: First match as a string, or `null`. In match-all
	 *   mode: Array of all matched strings, or an empty array.
	 * @example
	 *
	 * // Match first
	 * XRegExp.match('abc', /\w/); // -> 'a'
	 * XRegExp.match('abc', /\w/g, 'one'); // -> 'a'
	 * XRegExp.match('abc', /x/g, 'one'); // -> null
	 *
	 * // Match all
	 * XRegExp.match('abc', /\w/g); // -> ['a', 'b', 'c']
	 * XRegExp.match('abc', /\w/, 'all'); // -> ['a', 'b', 'c']
	 * XRegExp.match('abc', /x/, 'all'); // -> []
	 */
	XRegExp.match = function (str, regex, scope) {
	    var global = regex.global && scope !== 'one' || scope === 'all',
	        cacheKey = (global ? 'g' : '') + (regex.sticky ? 'y' : '') || 'noGY',
	        result,
	        r2;

	    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

	    // Shares cached copies with `XRegExp.exec`/`replace`
	    r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
	        addG: !!global,
	        removeG: scope === 'one',
	        isInternalOnly: true
	    }));

	    result = nativ.match.call(toObject(str), r2);

	    if (regex.global) {
	        regex.lastIndex = scope === 'one' && result ?
	        // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
	        result.index + result[0].length : 0;
	    }

	    return global ? result || [] : result && result[0];
	};

	/**
	 * Retrieves the matches from searching a string using a chain of regexes that successively search
	 * within previous matches. The provided `chain` array can contain regexes and or objects with
	 * `regex` and `backref` properties. When a backreference is specified, the named or numbered
	 * backreference is passed forward to the next regex or returned.
	 *
	 * @param {String} str String to search.
	 * @param {Array} chain Regexes that each search for matches within preceding results.
	 * @returns {Array} Matches by the last regex in the chain, or an empty array.
	 * @example
	 *
	 * // Basic usage; matches numbers within <b> tags
	 * XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
	 *   XRegExp('(?is)<b>.*?</b>'),
	 *   /\d+/
	 * ]);
	 * // -> ['2', '4', '56']
	 *
	 * // Passing forward and returning specific backreferences
	 * html = '<a href="http://xregexp.com/api/">XRegExp</a>\
	 *         <a href="http://www.google.com/">Google</a>';
	 * XRegExp.matchChain(html, [
	 *   {regex: /<a href="([^"]+)">/i, backref: 1},
	 *   {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
	 * ]);
	 * // -> ['xregexp.com', 'www.google.com']
	 */
	XRegExp.matchChain = function (str, chain) {
	    return function recurseChain(values, level) {
	        var item = chain[level].regex ? chain[level] : { regex: chain[level] };
	        var matches = [];

	        function addMatch(match) {
	            if (item.backref) {
	                // Safari 4.0.5 (but not 5.0.5+) inappropriately uses sparse arrays to hold the
	                // `undefined`s for backreferences to nonparticipating capturing groups. In such
	                // cases, a `hasOwnProperty` or `in` check on its own would inappropriately throw
	                // the exception, so also check if the backreference is a number that is within the
	                // bounds of the array.
	                if (!(match.hasOwnProperty(item.backref) || +item.backref < match.length)) {
	                    throw new ReferenceError('Backreference to undefined group: ' + item.backref);
	                }

	                matches.push(match[item.backref] || '');
	            } else {
	                matches.push(match[0]);
	            }
	        }

	        for (var i = 0; i < values.length; ++i) {
	            XRegExp.forEach(values[i], item.regex, addMatch);
	        }

	        return level === chain.length - 1 || !matches.length ? matches : recurseChain(matches, level + 1);
	    }([str], 0);
	};

	/**
	 * Returns a new string with one or all matches of a pattern replaced. The pattern can be a string
	 * or regex, and the replacement can be a string or a function to be called for each match. To
	 * perform a global search and replace, use the optional `scope` argument or include flag g if using
	 * a regex. Replacement strings can use `${n}` for named and numbered backreferences. Replacement
	 * functions can use named backreferences via `arguments[0].name`. Also fixes browser bugs compared
	 * to the native `String.prototype.replace` and can be used reliably cross-browser.
	 *
	 * @param {String} str String to search.
	 * @param {RegExp|String} search Search pattern to be replaced.
	 * @param {String|Function} replacement Replacement string or a function invoked to create it.
	 *   Replacement strings can include special replacement syntax:
	 *     <li>$$ - Inserts a literal $ character.
	 *     <li>$&, $0 - Inserts the matched substring.
	 *     <li>$` - Inserts the string that precedes the matched substring (left context).
	 *     <li>$' - Inserts the string that follows the matched substring (right context).
	 *     <li>$n, $nn - Where n/nn are digits referencing an existent capturing group, inserts
	 *       backreference n/nn.
	 *     <li>${n} - Where n is a name or any number of digits that reference an existent capturing
	 *       group, inserts backreference n.
	 *   Replacement functions are invoked with three or more arguments:
	 *     <li>The matched substring (corresponds to $& above). Named backreferences are accessible as
	 *       properties of this first argument.
	 *     <li>0..n arguments, one for each backreference (corresponding to $1, $2, etc. above).
	 *     <li>The zero-based index of the match within the total search string.
	 *     <li>The total string being searched.
	 * @param {String} [scope='one'] Use 'one' to replace the first match only, or 'all'. If not
	 *   explicitly specified and using a regex with flag g, `scope` is 'all'.
	 * @returns {String} New string with one or all matches replaced.
	 * @example
	 *
	 * // Regex search, using named backreferences in replacement string
	 * var name = XRegExp('(?<first>\\w+) (?<last>\\w+)');
	 * XRegExp.replace('John Smith', name, '${last}, ${first}');
	 * // -> 'Smith, John'
	 *
	 * // Regex search, using named backreferences in replacement function
	 * XRegExp.replace('John Smith', name, function(match) {
	 *   return match.last + ', ' + match.first;
	 * });
	 * // -> 'Smith, John'
	 *
	 * // String search, with replace-all
	 * XRegExp.replace('RegExp builds RegExps', 'RegExp', 'XRegExp', 'all');
	 * // -> 'XRegExp builds XRegExps'
	 */
	XRegExp.replace = function (str, search, replacement, scope) {
	    var isRegex = XRegExp.isRegExp(search),
	        global = search.global && scope !== 'one' || scope === 'all',
	        cacheKey = (global ? 'g' : '') + (search.sticky ? 'y' : '') || 'noGY',
	        s2 = search,
	        result;

	    if (isRegex) {
	        search[REGEX_DATA] = search[REGEX_DATA] || {};

	        // Shares cached copies with `XRegExp.exec`/`match`. Since a copy is used, `search`'s
	        // `lastIndex` isn't updated *during* replacement iterations
	        s2 = search[REGEX_DATA][cacheKey] || (search[REGEX_DATA][cacheKey] = copyRegex(search, {
	            addG: !!global,
	            removeG: scope === 'one',
	            isInternalOnly: true
	        }));
	    } else if (global) {
	        s2 = new RegExp(XRegExp.escape(String(search)), 'g');
	    }

	    // Fixed `replace` required for named backreferences, etc.
	    result = fixed.replace.call(toObject(str), s2, replacement);

	    if (isRegex && search.global) {
	        // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
	        search.lastIndex = 0;
	    }

	    return result;
	};

	/**
	 * Performs batch processing of string replacements. Used like `XRegExp.replace`, but accepts an
	 * array of replacement details. Later replacements operate on the output of earlier replacements.
	 * Replacement details are accepted as an array with a regex or string to search for, the
	 * replacement string or function, and an optional scope of 'one' or 'all'. Uses the XRegExp
	 * replacement text syntax, which supports named backreference properties via `${name}`.
	 *
	 * @param {String} str String to search.
	 * @param {Array} replacements Array of replacement detail arrays.
	 * @returns {String} New string with all replacements.
	 * @example
	 *
	 * str = XRegExp.replaceEach(str, [
	 *   [XRegExp('(?<name>a)'), 'z${name}'],
	 *   [/b/gi, 'y'],
	 *   [/c/g, 'x', 'one'], // scope 'one' overrides /g
	 *   [/d/, 'w', 'all'],  // scope 'all' overrides lack of /g
	 *   ['e', 'v', 'all'],  // scope 'all' allows replace-all for strings
	 *   [/f/g, function($0) {
	 *     return $0.toUpperCase();
	 *   }]
	 * ]);
	 */
	XRegExp.replaceEach = function (str, replacements) {
	    var i, r;

	    for (i = 0; i < replacements.length; ++i) {
	        r = replacements[i];
	        str = XRegExp.replace(str, r[0], r[1], r[2]);
	    }

	    return str;
	};

	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 *
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * XRegExp.split('a b c', ' ');
	 * // -> ['a', 'b', 'c']
	 *
	 * // With limit
	 * XRegExp.split('a b c', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * XRegExp.split('..word1..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', '..']
	 */
	XRegExp.split = function (str, separator, limit) {
	    return fixed.split.call(toObject(str), separator, limit);
	};

	/**
	 * Executes a regex search in a specified string. Returns `true` or `false`. Optional `pos` and
	 * `sticky` arguments specify the search start position, and whether the match must start at the
	 * specified position only. The `lastIndex` property of the provided regex is not used, but is
	 * updated for compatibility. Also fixes browser bugs compared to the native
	 * `RegExp.prototype.test` and can be used reliably cross-browser.
	 *
	 * @param {String} str String to search.
	 * @param {RegExp} regex Regex to search with.
	 * @param {Number} [pos=0] Zero-based index at which to start the search.
	 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
	 *   only. The string `'sticky'` is accepted as an alternative to `true`.
	 * @returns {Boolean} Whether the regex matched the provided value.
	 * @example
	 *
	 * // Basic use
	 * XRegExp.test('abc', /c/); // -> true
	 *
	 * // With pos and sticky
	 * XRegExp.test('abc', /c/, 0, 'sticky'); // -> false
	 * XRegExp.test('abc', /c/, 2, 'sticky'); // -> true
	 */
	XRegExp.test = function (str, regex, pos, sticky) {
	    // Do this the easy way :-)
	    return !!XRegExp.exec(str, regex, pos, sticky);
	};

	/**
	 * Uninstalls optional features according to the specified options. All optional features start out
	 * uninstalled, so this is used to undo the actions of `XRegExp.install`.
	 *
	 * @param {Object|String} options Options object or string.
	 * @example
	 *
	 * // With an options object
	 * XRegExp.uninstall({
	 *   // Disables support for astral code points in Unicode addons
	 *   astral: true,
	 *
	 *   // DEPRECATED: Restores native regex methods
	 *   natives: true
	 * });
	 *
	 * // With an options string
	 * XRegExp.uninstall('astral natives');
	 */
	XRegExp.uninstall = function (options) {
	    options = prepareOptions(options);

	    if (features.astral && options.astral) {
	        setAstral(false);
	    }

	    if (features.natives && options.natives) {
	        setNatives(false);
	    }
	};

	/**
	 * Returns an XRegExp object that is the union of the given patterns. Patterns can be provided as
	 * regex objects or strings. Metacharacters are escaped in patterns provided as strings.
	 * Backreferences in provided regex objects are automatically renumbered to work correctly within
	 * the larger combined pattern. Native flags used by provided regexes are ignored in favor of the
	 * `flags` argument.
	 *
	 * @param {Array} patterns Regexes and strings to combine.
	 * @param {String} [flags] Any combination of XRegExp flags.
	 * @returns {RegExp} Union of the provided regexes and strings.
	 * @example
	 *
	 * XRegExp.union(['a+b*c', /(dogs)\1/, /(cats)\1/], 'i');
	 * // -> /a\+b\*c|(dogs)\1|(cats)\2/i
	 */
	XRegExp.union = function (patterns, flags) {
	    var numCaptures = 0;
	    var numPriorCaptures;
	    var captureNames;

	    function rewrite(match, paren, backref) {
	        var name = captureNames[numCaptures - numPriorCaptures];

	        // Capturing group
	        if (paren) {
	            ++numCaptures;
	            // If the current capture has a name, preserve the name
	            if (name) {
	                return '(?<' + name + '>';
	            }
	            // Backreference
	        } else if (backref) {
	            // Rewrite the backreference
	            return '\\' + (+backref + numPriorCaptures);
	        }

	        return match;
	    }

	    if (!(isType(patterns, 'Array') && patterns.length)) {
	        throw new TypeError('Must provide a nonempty array of patterns to merge');
	    }

	    var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g;
	    var output = [];
	    var pattern;
	    for (var i = 0; i < patterns.length; ++i) {
	        pattern = patterns[i];

	        if (XRegExp.isRegExp(pattern)) {
	            numPriorCaptures = numCaptures;
	            captureNames = pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames || [];

	            // Rewrite backreferences. Passing to XRegExp dies on octals and ensures patterns are
	            // independently valid; helps keep this simple. Named captures are put back
	            output.push(nativ.replace.call(XRegExp(pattern.source).source, parts, rewrite));
	        } else {
	            output.push(XRegExp.escape(pattern));
	        }
	    }

	    return XRegExp(output.join('|'), flags);
	};

	// ==--------------------------==
	// Fixed/extended native methods
	// ==--------------------------==

	/**
	 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
	 * bugs in the native `RegExp.prototype.exec`. Calling `XRegExp.install('natives')` uses this to
	 * override the native method. Use via `XRegExp.exec` without overriding natives.
	 *
	 * @param {String} str String to search.
	 * @returns {Array} Match array with named backreference properties, or `null`.
	 */
	fixed.exec = function (str) {
	    var origLastIndex = this.lastIndex,
	        match = nativ.exec.apply(this, arguments),
	        name,
	        r2,
	        i;

	    if (match) {
	        // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating capturing
	        // groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of older IEs. IE 9
	        // in standards mode follows the spec.
	        if (!correctExecNpcg && match.length > 1 && indexOf(match, '') > -1) {
	            r2 = copyRegex(this, {
	                removeG: true,
	                isInternalOnly: true
	            });
	            // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
	            // matching due to characters outside the match
	            nativ.replace.call(String(str).slice(match.index), r2, function () {
	                var len = arguments.length,
	                    i;
	                // Skip index 0 and the last 2
	                for (i = 1; i < len - 2; ++i) {
	                    if (arguments[i] === undefined) {
	                        match[i] = undefined;
	                    }
	                }
	            });
	        }

	        // Attach named capture properties
	        if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
	            // Skip index 0
	            for (i = 1; i < match.length; ++i) {
	                name = this[REGEX_DATA].captureNames[i - 1];
	                if (name) {
	                    match[name] = match[i];
	                }
	            }
	        }

	        // Fix browsers that increment `lastIndex` after zero-length matches
	        if (this.global && !match[0].length && this.lastIndex > match.index) {
	            this.lastIndex = match.index;
	        }
	    }

	    if (!this.global) {
	        // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
	        this.lastIndex = origLastIndex;
	    }

	    return match;
	};

	/**
	 * Fixes browser bugs in the native `RegExp.prototype.test`. Calling `XRegExp.install('natives')`
	 * uses this to override the native method.
	 *
	 * @param {String} str String to search.
	 * @returns {Boolean} Whether the regex matched the provided value.
	 */
	fixed.test = function (str) {
	    // Do this the easy way :-)
	    return !!fixed.exec.call(this, str);
	};

	/**
	 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
	 * bugs in the native `String.prototype.match`. Calling `XRegExp.install('natives')` uses this to
	 * override the native method.
	 *
	 * @param {RegExp|*} regex Regex to search with. If not a regex object, it is passed to `RegExp`.
	 * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
	 *   the result of calling `regex.exec(this)`.
	 */
	fixed.match = function (regex) {
	    var result;

	    if (!XRegExp.isRegExp(regex)) {
	        // Use the native `RegExp` rather than `XRegExp`
	        regex = new RegExp(regex);
	    } else if (regex.global) {
	        result = nativ.match.apply(this, arguments);
	        // Fixes IE bug
	        regex.lastIndex = 0;

	        return result;
	    }

	    return fixed.exec.call(regex, toObject(this));
	};

	/**
	 * Adds support for `${n}` tokens for named and numbered backreferences in replacement text, and
	 * provides named backreferences to replacement functions as `arguments[0].name`. Also fixes browser
	 * bugs in replacement text syntax when performing a replacement using a nonregex search value, and
	 * the value of a replacement regex's `lastIndex` property during replacement iterations and upon
	 * completion. Calling `XRegExp.install('natives')` uses this to override the native method. Note
	 * that this doesn't support SpiderMonkey's proprietary third (`flags`) argument. Use via
	 * `XRegExp.replace` without overriding natives.
	 *
	 * @param {RegExp|String} search Search pattern to be replaced.
	 * @param {String|Function} replacement Replacement string or a function invoked to create it.
	 * @returns {String} New string with one or all matches replaced.
	 */
	fixed.replace = function (search, replacement) {
	    var isRegex = XRegExp.isRegExp(search),
	        origLastIndex,
	        captureNames,
	        result;

	    if (isRegex) {
	        if (search[REGEX_DATA]) {
	            captureNames = search[REGEX_DATA].captureNames;
	        }
	        // Only needed if `search` is nonglobal
	        origLastIndex = search.lastIndex;
	    } else {
	        search += ''; // Type-convert
	    }

	    // Don't use `typeof`; some older browsers return 'function' for regex objects
	    if (isType(replacement, 'Function')) {
	        // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
	        // functions isn't type-converted to a string
	        result = nativ.replace.call(String(this), search, function () {
	            var args = arguments,
	                i;
	            if (captureNames) {
	                // Change the `arguments[0]` string primitive to a `String` object that can store
	                // properties. This really does need to use `String` as a constructor
	                args[0] = new String(args[0]);
	                // Store named backreferences on the first argument
	                for (i = 0; i < captureNames.length; ++i) {
	                    if (captureNames[i]) {
	                        args[0][captureNames[i]] = args[i + 1];
	                    }
	                }
	            }
	            // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox, Safari
	            // bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
	            if (isRegex && search.global) {
	                search.lastIndex = args[args.length - 2] + args[0].length;
	            }
	            // ES6 specs the context for replacement functions as `undefined`
	            return replacement.apply(undefined, args);
	        });
	    } else {
	        // Ensure that the last value of `args` will be a string when given nonstring `this`,
	        // while still throwing on null or undefined context
	        result = nativ.replace.call(this == null ? this : String(this), search, function () {
	            // Keep this function's `arguments` available through closure
	            var args = arguments;
	            return nativ.replace.call(String(replacement), replacementToken, function ($0, $1, $2) {
	                var n;
	                // Named or numbered backreference with curly braces
	                if ($1) {
	                    // XRegExp behavior for `${n}`:
	                    // 1. Backreference to numbered capture, if `n` is an integer. Use `0` for the
	                    //    entire match. Any number of leading zeros may be used.
	                    // 2. Backreference to named capture `n`, if it exists and is not an integer
	                    //    overridden by numbered capture. In practice, this does not overlap with
	                    //    numbered capture since XRegExp does not allow named capture to use a bare
	                    //    integer as the name.
	                    // 3. If the name or number does not refer to an existing capturing group, it's
	                    //    an error.
	                    n = +$1; // Type-convert; drop leading zeros
	                    if (n <= args.length - 3) {
	                        return args[n] || '';
	                    }
	                    // Groups with the same name is an error, else would need `lastIndexOf`
	                    n = captureNames ? indexOf(captureNames, $1) : -1;
	                    if (n < 0) {
	                        throw new SyntaxError('Backreference to undefined group ' + $0);
	                    }
	                    return args[n + 1] || '';
	                }
	                // Else, special variable or numbered backreference without curly braces
	                if ($2 === '$') {
	                    // $$
	                    return '$';
	                }
	                if ($2 === '&' || +$2 === 0) {
	                    // $&, $0 (not followed by 1-9), $00
	                    return args[0];
	                }
	                if ($2 === '`') {
	                    // $` (left context)
	                    return args[args.length - 1].slice(0, args[args.length - 2]);
	                }
	                if ($2 === "'") {
	                    // $' (right context)
	                    return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
	                }
	                // Else, numbered backreference without curly braces
	                $2 = +$2; // Type-convert; drop leading zero
	                // XRegExp behavior for `$n` and `$nn`:
	                // - Backrefs end after 1 or 2 digits. Use `${..}` for more digits.
	                // - `$1` is an error if no capturing groups.
	                // - `$10` is an error if less than 10 capturing groups. Use `${1}0` instead.
	                // - `$01` is `$1` if at least one capturing group, else it's an error.
	                // - `$0` (not followed by 1-9) and `$00` are the entire match.
	                // Native behavior, for comparison:
	                // - Backrefs end after 1 or 2 digits. Cannot reference capturing group 100+.
	                // - `$1` is a literal `$1` if no capturing groups.
	                // - `$10` is `$1` followed by a literal `0` if less than 10 capturing groups.
	                // - `$01` is `$1` if at least one capturing group, else it's a literal `$01`.
	                // - `$0` is a literal `$0`.
	                if (!isNaN($2)) {
	                    if ($2 > args.length - 3) {
	                        throw new SyntaxError('Backreference to undefined group ' + $0);
	                    }
	                    return args[$2] || '';
	                }
	                // `$` followed by an unsupported char is an error, unlike native JS
	                throw new SyntaxError('Invalid token ' + $0);
	            });
	        });
	    }

	    if (isRegex) {
	        if (search.global) {
	            // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
	            search.lastIndex = 0;
	        } else {
	            // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
	            search.lastIndex = origLastIndex;
	        }
	    }

	    return result;
	};

	/**
	 * Fixes browser bugs in the native `String.prototype.split`. Calling `XRegExp.install('natives')`
	 * uses this to override the native method. Use via `XRegExp.split` without overriding natives.
	 *
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 */
	fixed.split = function (separator, limit) {
	    if (!XRegExp.isRegExp(separator)) {
	        // Browsers handle nonregex split correctly, so use the faster native method
	        return nativ.split.apply(this, arguments);
	    }

	    var str = String(this),
	        output = [],
	        origLastIndex = separator.lastIndex,
	        lastLastIndex = 0,
	        lastLength;

	    // Values for `limit`, per the spec:
	    // If undefined: pow(2,32) - 1
	    // If 0, Infinity, or NaN: 0
	    // If positive number: limit = floor(limit); if (limit >= pow(2,32)) limit -= pow(2,32);
	    // If negative number: pow(2,32) - floor(abs(limit))
	    // If other: Type-convert, then use the above rules
	    // This line fails in very strange ways for some values of `limit` in Opera 10.5-10.63, unless
	    // Opera Dragonfly is open (go figure). It works in at least Opera 9.5-10.1 and 11+
	    limit = (limit === undefined ? -1 : limit) >>> 0;

	    XRegExp.forEach(str, separator, function (match) {
	        // This condition is not the same as `if (match[0].length)`
	        if (match.index + match[0].length > lastLastIndex) {
	            output.push(str.slice(lastLastIndex, match.index));
	            if (match.length > 1 && match.index < str.length) {
	                Array.prototype.push.apply(output, match.slice(1));
	            }
	            lastLength = match[0].length;
	            lastLastIndex = match.index + lastLength;
	        }
	    });

	    if (lastLastIndex === str.length) {
	        if (!nativ.test.call(separator, '') || lastLength) {
	            output.push('');
	        }
	    } else {
	        output.push(str.slice(lastLastIndex));
	    }

	    separator.lastIndex = origLastIndex;
	    return output.length > limit ? output.slice(0, limit) : output;
	};

	// ==--------------------------==
	// Built-in syntax/flag tokens
	// ==--------------------------==

	/*
	 * Letter escapes that natively match literal characters: `\a`, `\A`, etc. These should be
	 * SyntaxErrors but are allowed in web reality. XRegExp makes them errors for cross-browser
	 * consistency and to reserve their syntax, but lets them be superseded by addons.
	 */
	XRegExp.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function (match, scope) {
	    // \B is allowed in default scope only
	    if (match[1] === 'B' && scope === defaultScope) {
	        return match[0];
	    }
	    throw new SyntaxError('Invalid escape ' + match[0]);
	}, {
	    scope: 'all',
	    leadChar: '\\'
	});

	/*
	 * Unicode code point escape with curly braces: `\u{N..}`. `N..` is any one or more digit
	 * hexadecimal number from 0-10FFFF, and can include leading zeros. Requires the native ES6 `u` flag
	 * to support code points greater than U+FFFF. Avoids converting code points above U+FFFF to
	 * surrogate pairs (which could be done without flag `u`), since that could lead to broken behavior
	 * if you follow a `\u{N..}` token that references a code point above U+FFFF with a quantifier, or
	 * if you use the same in a character class.
	 */
	XRegExp.addToken(/\\u{([\dA-Fa-f]+)}/, function (match, scope, flags) {
	    var code = dec(match[1]);
	    if (code > 0x10FFFF) {
	        throw new SyntaxError('Invalid Unicode code point ' + match[0]);
	    }
	    if (code <= 0xFFFF) {
	        // Converting to \uNNNN avoids needing to escape the literal character and keep it
	        // separate from preceding tokens
	        return '\\u' + pad4(hex(code));
	    }
	    // If `code` is between 0xFFFF and 0x10FFFF, require and defer to native handling
	    if (hasNativeU && flags.indexOf('u') > -1) {
	        return match[0];
	    }
	    throw new SyntaxError('Cannot use Unicode code point above \\u{FFFF} without flag u');
	}, {
	    scope: 'all',
	    leadChar: '\\'
	});

	/*
	 * Empty character class: `[]` or `[^]`. This fixes a critical cross-browser syntax inconsistency.
	 * Unless this is standardized (per the ES spec), regex syntax can't be accurately parsed because
	 * character class endings can't be determined.
	 */
	XRegExp.addToken(/\[(\^?)]/, function (match) {
	    // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
	    // (?!) should work like \b\B, but is unreliable in some versions of Firefox
	    return match[1] ? '[\\s\\S]' : '\\b\\B';
	}, { leadChar: '[' });

	/*
	 * Comment pattern: `(?# )`. Inline comments are an alternative to the line comments allowed in
	 * free-spacing mode (flag x).
	 */
	XRegExp.addToken(/\(\?#[^)]*\)/, function (match, scope, flags) {
	    // Keep tokens separated unless the following token is a quantifier. This avoids e.g.
	    // inadvertedly changing `\1(?#)1` to `\11`.
	    return isQuantifierNext(match.input, match.index + match[0].length, flags) ? '' : '(?:)';
	}, { leadChar: '(' });

	/*
	 * Whitespace and line comments, in free-spacing mode (aka extended mode, flag x) only.
	 */
	XRegExp.addToken(/\s+|#[^\n]*\n?/, function (match, scope, flags) {
	    // Keep tokens separated unless the following token is a quantifier. This avoids e.g.
	    // inadvertedly changing `\1 1` to `\11`.
	    return isQuantifierNext(match.input, match.index + match[0].length, flags) ? '' : '(?:)';
	}, { flag: 'x' });

	/*
	 * Dot, in dotall mode (aka singleline mode, flag s) only.
	 */
	XRegExp.addToken(/\./, function () {
	    return '[\\s\\S]';
	}, {
	    flag: 's',
	    leadChar: '.'
	});

	/*
	 * Named backreference: `\k<name>`. Backreference names can use the characters A-Z, a-z, 0-9, _,
	 * and $ only. Also allows numbered backreferences as `\k<n>`.
	 */
	XRegExp.addToken(/\\k<([\w$]+)>/, function (match) {
	    // Groups with the same name is an error, else would need `lastIndexOf`
	    var index = isNaN(match[1]) ? indexOf(this.captureNames, match[1]) + 1 : +match[1],
	        endIndex = match.index + match[0].length;
	    if (!index || index > this.captureNames.length) {
	        throw new SyntaxError('Backreference to undefined group ' + match[0]);
	    }
	    // Keep backreferences separate from subsequent literal numbers. This avoids e.g.
	    // inadvertedly changing `(?<n>)\k<n>1` to `()\11`.
	    return '\\' + index + (endIndex === match.input.length || isNaN(match.input.charAt(endIndex)) ? '' : '(?:)');
	}, { leadChar: '\\' });

	/*
	 * Numbered backreference or octal, plus any following digits: `\0`, `\11`, etc. Octals except `\0`
	 * not followed by 0-9 and backreferences to unopened capture groups throw an error. Other matches
	 * are returned unaltered. IE < 9 doesn't support backreferences above `\99` in regex syntax.
	 */
	XRegExp.addToken(/\\(\d+)/, function (match, scope) {
	    if (!(scope === defaultScope && /^[1-9]/.test(match[1]) && +match[1] <= this.captureNames.length) && match[1] !== '0') {
	        throw new SyntaxError('Cannot use octal escape or backreference to undefined group ' + match[0]);
	    }
	    return match[0];
	}, {
	    scope: 'all',
	    leadChar: '\\'
	});

	/*
	 * Named capturing group; match the opening delimiter only: `(?<name>`. Capture names can use the
	 * characters A-Z, a-z, 0-9, _, and $ only. Names can't be integers. Supports Python-style
	 * `(?P<name>` as an alternate syntax to avoid issues in some older versions of Opera which natively
	 * supported the Python-style syntax. Otherwise, XRegExp might treat numbered backreferences to
	 * Python-style named capture as octals.
	 */
	XRegExp.addToken(/\(\?P?<([\w$]+)>/, function (match) {
	    // Disallow bare integers as names because named backreferences are added to match arrays
	    // and therefore numeric properties may lead to incorrect lookups
	    if (!isNaN(match[1])) {
	        throw new SyntaxError('Cannot use integer as capture name ' + match[0]);
	    }
	    if (match[1] === 'length' || match[1] === '__proto__') {
	        throw new SyntaxError('Cannot use reserved word as capture name ' + match[0]);
	    }
	    if (indexOf(this.captureNames, match[1]) > -1) {
	        throw new SyntaxError('Cannot use same name for multiple groups ' + match[0]);
	    }
	    this.captureNames.push(match[1]);
	    this.hasNamedCapture = true;
	    return '(';
	}, { leadChar: '(' });

	/*
	 * Capturing group; match the opening parenthesis only. Required for support of named capturing
	 * groups. Also adds explicit capture mode (flag n).
	 */
	XRegExp.addToken(/\((?!\?)/, function (match, scope, flags) {
	    if (flags.indexOf('n') > -1) {
	        return '(?:';
	    }
	    this.captureNames.push(null);
	    return '(';
	}, {
	    optionalFlags: 'n',
	    leadChar: '('
	});

	module.exports = XRegExp;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * XRegExp.build 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2012-2016 MIT License
	 * Inspired by Lea Verou's RegExp.create <lea.verou.me>
	 */

	module.exports = function (XRegExp) {
	    'use strict';

	    var REGEX_DATA = 'xregexp';
	    var subParts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g;
	    var parts = XRegExp.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, subParts], 'g');

	    /**
	     * Strips a leading `^` and trailing unescaped `$`, if both are present.
	     *
	     * @param {String} pattern Pattern to process.
	     * @returns {String} Pattern with edge anchors removed.
	     */
	    function deanchor(pattern) {
	        // Allow any number of empty noncapturing groups before/after anchors, because regexes
	        // built/generated by XRegExp sometimes include them
	        var leadingAnchor = /^(?:\(\?:\))*\^/,
	            trailingAnchor = /\$(?:\(\?:\))*$/;

	        if (leadingAnchor.test(pattern) && trailingAnchor.test(pattern) &&
	        // Ensure that the trailing `$` isn't escaped
	        trailingAnchor.test(pattern.replace(/\\[\s\S]/g, ''))) {
	            return pattern.replace(leadingAnchor, '').replace(trailingAnchor, '');
	        }

	        return pattern;
	    }

	    /**
	     * Converts the provided value to an XRegExp. Native RegExp flags are not preserved.
	     *
	     * @param {String|RegExp} value Value to convert.
	     * @returns {RegExp} XRegExp object with XRegExp syntax applied.
	     */
	    function asXRegExp(value) {
	        return XRegExp.isRegExp(value) ? value[REGEX_DATA] && value[REGEX_DATA].captureNames ?
	        // Don't recompile, to preserve capture names
	        value :
	        // Recompile as XRegExp
	        XRegExp(value.source) :
	        // Compile string as XRegExp
	        XRegExp(value);
	    }

	    /**
	     * Builds regexes using named subpatterns, for readability and pattern reuse. Backreferences in
	     * the outer pattern and provided subpatterns are automatically renumbered to work correctly.
	     * Native flags used by provided subpatterns are ignored in favor of the `flags` argument.
	     *
	     * @param {String} pattern XRegExp pattern using `{{name}}` for embedded subpatterns. Allows
	     *   `({{name}})` as shorthand for `(?<name>{{name}})`. Patterns cannot be embedded within
	     *   character classes.
	     * @param {Object} subs Lookup object for named subpatterns. Values can be strings or regexes. A
	     *   leading `^` and trailing unescaped `$` are stripped from subpatterns, if both are present.
	     * @param {String} [flags] Any combination of XRegExp flags.
	     * @returns {RegExp} Regex with interpolated subpatterns.
	     * @example
	     *
	     * var time = XRegExp.build('(?x)^ {{hours}} ({{minutes}}) $', {
	     *   hours: XRegExp.build('{{h12}} : | {{h24}}', {
	     *     h12: /1[0-2]|0?[1-9]/,
	     *     h24: /2[0-3]|[01][0-9]/
	     *   }, 'x'),
	     *   minutes: /^[0-5][0-9]$/
	     * });
	     * time.test('10:59'); // -> true
	     * XRegExp.exec('10:59', time).minutes; // -> '59'
	     */
	    XRegExp.build = function (pattern, subs, flags) {
	        var inlineFlags = /^\(\?([\w$]+)\)/.exec(pattern),
	            data = {},
	            numCaps = 0,
	            // 'Caps' is short for captures
	        numPriorCaps,
	            numOuterCaps = 0,
	            outerCapsMap = [0],
	            outerCapNames,
	            sub,
	            p;

	        // Add flags within a leading mode modifier to the overall pattern's flags
	        if (inlineFlags) {
	            flags = flags || '';
	            inlineFlags[1].replace(/./g, function (flag) {
	                // Don't add duplicates
	                flags += flags.indexOf(flag) > -1 ? '' : flag;
	            });
	        }

	        for (p in subs) {
	            if (subs.hasOwnProperty(p)) {
	                // Passing to XRegExp enables extended syntax and ensures independent validity,
	                // lest an unescaped `(`, `)`, `[`, or trailing `\` breaks the `(?:)` wrapper. For
	                // subpatterns provided as native regexes, it dies on octals and adds the property
	                // used to hold extended regex instance data, for simplicity
	                sub = asXRegExp(subs[p]);
	                data[p] = {
	                    // Deanchoring allows embedding independently useful anchored regexes. If you
	                    // really need to keep your anchors, double them (i.e., `^^...$$`)
	                    pattern: deanchor(sub.source),
	                    names: sub[REGEX_DATA].captureNames || []
	                };
	            }
	        }

	        // Passing to XRegExp dies on octals and ensures the outer pattern is independently valid;
	        // helps keep this simple. Named captures will be put back
	        pattern = asXRegExp(pattern);
	        outerCapNames = pattern[REGEX_DATA].captureNames || [];
	        pattern = pattern.source.replace(parts, function ($0, $1, $2, $3, $4) {
	            var subName = $1 || $2,
	                capName,
	                intro,
	                localCapIndex;
	            // Named subpattern
	            if (subName) {
	                if (!data.hasOwnProperty(subName)) {
	                    throw new ReferenceError('Undefined property ' + $0);
	                }
	                // Named subpattern was wrapped in a capturing group
	                if ($1) {
	                    capName = outerCapNames[numOuterCaps];
	                    outerCapsMap[++numOuterCaps] = ++numCaps;
	                    // If it's a named group, preserve the name. Otherwise, use the subpattern name
	                    // as the capture name
	                    intro = '(?<' + (capName || subName) + '>';
	                } else {
	                    intro = '(?:';
	                }
	                numPriorCaps = numCaps;
	                return intro + data[subName].pattern.replace(subParts, function (match, paren, backref) {
	                    // Capturing group
	                    if (paren) {
	                        capName = data[subName].names[numCaps - numPriorCaps];
	                        ++numCaps;
	                        // If the current capture has a name, preserve the name
	                        if (capName) {
	                            return '(?<' + capName + '>';
	                        }
	                        // Backreference
	                    } else if (backref) {
	                        localCapIndex = +backref - 1;
	                        // Rewrite the backreference
	                        return data[subName].names[localCapIndex] ?
	                        // Need to preserve the backreference name in case using flag `n`
	                        '\\k<' + data[subName].names[localCapIndex] + '>' : '\\' + (+backref + numPriorCaps);
	                    }
	                    return match;
	                }) + ')';
	            }
	            // Capturing group
	            if ($3) {
	                capName = outerCapNames[numOuterCaps];
	                outerCapsMap[++numOuterCaps] = ++numCaps;
	                // If the current capture has a name, preserve the name
	                if (capName) {
	                    return '(?<' + capName + '>';
	                }
	                // Backreference
	            } else if ($4) {
	                localCapIndex = +$4 - 1;
	                // Rewrite the backreference
	                return outerCapNames[localCapIndex] ?
	                // Need to preserve the backreference name in case using flag `n`
	                '\\k<' + outerCapNames[localCapIndex] + '>' : '\\' + outerCapsMap[+$4];
	            }
	            return $0;
	        });

	        return XRegExp(pattern, flags);
	    };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * XRegExp.matchRecursive 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2009-2016 MIT License
	 */

	module.exports = function (XRegExp) {
	    'use strict';

	    /**
	     * Returns a match detail object composed of the provided values.
	     */

	    function row(name, value, start, end) {
	        return {
	            name: name,
	            value: value,
	            start: start,
	            end: end
	        };
	    }

	    /**
	     * Returns an array of match strings between outermost left and right delimiters, or an array of
	     * objects with detailed match parts and position data. An error is thrown if delimiters are
	     * unbalanced within the data.
	     *
	     * @param {String} str String to search.
	     * @param {String} left Left delimiter as an XRegExp pattern.
	     * @param {String} right Right delimiter as an XRegExp pattern.
	     * @param {String} [flags] Any native or XRegExp flags, used for the left and right delimiters.
	     * @param {Object} [options] Lets you specify `valueNames` and `escapeChar` options.
	     * @returns {Array} Array of matches, or an empty array.
	     * @example
	     *
	     * // Basic usage
	     * var str = '(t((e))s)t()(ing)';
	     * XRegExp.matchRecursive(str, '\\(', '\\)', 'g');
	     * // -> ['t((e))s', '', 'ing']
	     *
	     * // Extended information mode with valueNames
	     * str = 'Here is <div> <div>an</div></div> example';
	     * XRegExp.matchRecursive(str, '<div\\s*>', '</div>', 'gi', {
	     *   valueNames: ['between', 'left', 'match', 'right']
	     * });
	     * // -> [
	     * // {name: 'between', value: 'Here is ',       start: 0,  end: 8},
	     * // {name: 'left',    value: '<div>',          start: 8,  end: 13},
	     * // {name: 'match',   value: ' <div>an</div>', start: 13, end: 27},
	     * // {name: 'right',   value: '</div>',         start: 27, end: 33},
	     * // {name: 'between', value: ' example',       start: 33, end: 41}
	     * // ]
	     *
	     * // Omitting unneeded parts with null valueNames, and using escapeChar
	     * str = '...{1}.\\{{function(x,y){return {y:x}}}';
	     * XRegExp.matchRecursive(str, '{', '}', 'g', {
	     *   valueNames: ['literal', null, 'value', null],
	     *   escapeChar: '\\'
	     * });
	     * // -> [
	     * // {name: 'literal', value: '...',  start: 0, end: 3},
	     * // {name: 'value',   value: '1',    start: 4, end: 5},
	     * // {name: 'literal', value: '.\\{', start: 6, end: 9},
	     * // {name: 'value',   value: 'function(x,y){return {y:x}}', start: 10, end: 37}
	     * // ]
	     *
	     * // Sticky mode via flag y
	     * str = '<1><<<2>>><3>4<5>';
	     * XRegExp.matchRecursive(str, '<', '>', 'gy');
	     * // -> ['1', '<<2>>', '3']
	     */
	    XRegExp.matchRecursive = function (str, left, right, flags, options) {
	        flags = flags || '';
	        options = options || {};
	        var global = flags.indexOf('g') > -1,
	            sticky = flags.indexOf('y') > -1,

	        // Flag `y` is controlled internally
	        basicFlags = flags.replace(/y/g, ''),
	            escapeChar = options.escapeChar,
	            vN = options.valueNames,
	            output = [],
	            openTokens = 0,
	            delimStart = 0,
	            delimEnd = 0,
	            lastOuterEnd = 0,
	            outerStart,
	            innerStart,
	            leftMatch,
	            rightMatch,
	            esc;
	        left = XRegExp(left, basicFlags);
	        right = XRegExp(right, basicFlags);

	        if (escapeChar) {
	            if (escapeChar.length > 1) {
	                throw new Error('Cannot use more than one escape character');
	            }
	            escapeChar = XRegExp.escape(escapeChar);
	            // Using `XRegExp.union` safely rewrites backreferences in `left` and `right`
	            esc = new RegExp('(?:' + escapeChar + '[\\S\\s]|(?:(?!' + XRegExp.union([left, right]).source + ')[^' + escapeChar + '])+)+',
	            // Flags `gy` not needed here
	            flags.replace(/[^imu]+/g, ''));
	        }

	        while (true) {
	            // If using an escape character, advance to the delimiter's next starting position,
	            // skipping any escaped characters in between
	            if (escapeChar) {
	                delimEnd += (XRegExp.exec(str, esc, delimEnd, 'sticky') || [''])[0].length;
	            }
	            leftMatch = XRegExp.exec(str, left, delimEnd);
	            rightMatch = XRegExp.exec(str, right, delimEnd);
	            // Keep the leftmost match only
	            if (leftMatch && rightMatch) {
	                if (leftMatch.index <= rightMatch.index) {
	                    rightMatch = null;
	                } else {
	                    leftMatch = null;
	                }
	            }
	            // Paths (LM: leftMatch, RM: rightMatch, OT: openTokens):
	            // LM | RM | OT | Result
	            // 1  | 0  | 1  | loop
	            // 1  | 0  | 0  | loop
	            // 0  | 1  | 1  | loop
	            // 0  | 1  | 0  | throw
	            // 0  | 0  | 1  | throw
	            // 0  | 0  | 0  | break
	            // The paths above don't include the sticky mode special case. The loop ends after the
	            // first completed match if not `global`.
	            if (leftMatch || rightMatch) {
	                delimStart = (leftMatch || rightMatch).index;
	                delimEnd = delimStart + (leftMatch || rightMatch)[0].length;
	            } else if (!openTokens) {
	                break;
	            }
	            if (sticky && !openTokens && delimStart > lastOuterEnd) {
	                break;
	            }
	            if (leftMatch) {
	                if (!openTokens) {
	                    outerStart = delimStart;
	                    innerStart = delimEnd;
	                }
	                ++openTokens;
	            } else if (rightMatch && openTokens) {
	                if (! --openTokens) {
	                    if (vN) {
	                        if (vN[0] && outerStart > lastOuterEnd) {
	                            output.push(row(vN[0], str.slice(lastOuterEnd, outerStart), lastOuterEnd, outerStart));
	                        }
	                        if (vN[1]) {
	                            output.push(row(vN[1], str.slice(outerStart, innerStart), outerStart, innerStart));
	                        }
	                        if (vN[2]) {
	                            output.push(row(vN[2], str.slice(innerStart, delimStart), innerStart, delimStart));
	                        }
	                        if (vN[3]) {
	                            output.push(row(vN[3], str.slice(delimStart, delimEnd), delimStart, delimEnd));
	                        }
	                    } else {
	                        output.push(str.slice(innerStart, delimStart));
	                    }
	                    lastOuterEnd = delimEnd;
	                    if (!global) {
	                        break;
	                    }
	                }
	            } else {
	                throw new Error('Unbalanced delimiter found in string');
	            }
	            // If the delimiter matched an empty string, avoid an infinite loop
	            if (delimStart === delimEnd) {
	                ++delimEnd;
	            }
	        }

	        if (global && !sticky && vN && vN[0] && str.length > lastOuterEnd) {
	            output.push(row(vN[0], str.slice(lastOuterEnd), lastOuterEnd, str.length));
	        }

	        return output;
	    };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * XRegExp Unicode Base 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2008-2016 MIT License
	 */

	module.exports = function (XRegExp) {
	    'use strict';

	    /**
	     * Adds base support for Unicode matching:
	     * - Adds syntax `\p{..}` for matching Unicode tokens. Tokens can be inverted using `\P{..}` or
	     *   `\p{^..}`. Token names ignore case, spaces, hyphens, and underscores. You can omit the
	     *   braces for token names that are a single letter (e.g. `\pL` or `PL`).
	     * - Adds flag A (astral), which enables 21-bit Unicode support.
	     * - Adds the `XRegExp.addUnicodeData` method used by other addons to provide character data.
	     *
	     * Unicode Base relies on externally provided Unicode character data. Official addons are
	     * available to provide data for Unicode categories, scripts, blocks, and properties.
	     *
	     * @requires XRegExp
	     */

	    // ==--------------------------==
	    // Private stuff
	    // ==--------------------------==

	    // Storage for Unicode data

	    var unicode = {};

	    // Reuse utils
	    var dec = XRegExp._dec;
	    var hex = XRegExp._hex;
	    var pad4 = XRegExp._pad4;

	    // Generates a token lookup name: lowercase, with hyphens, spaces, and underscores removed
	    function normalize(name) {
	        return name.replace(/[- _]+/g, '').toLowerCase();
	    }

	    // Gets the decimal code of a literal code unit, \xHH, \uHHHH, or a backslash-escaped literal
	    function charCode(chr) {
	        var esc = /^\\[xu](.+)/.exec(chr);
	        return esc ? dec(esc[1]) : chr.charCodeAt(chr.charAt(0) === '\\' ? 1 : 0);
	    }

	    // Inverts a list of ordered BMP characters and ranges
	    function invertBmp(range) {
	        var output = '';
	        var lastEnd = -1;
	        XRegExp.forEach(range, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function (m) {
	            var start = charCode(m[1]);
	            if (start > lastEnd + 1) {
	                output += '\\u' + pad4(hex(lastEnd + 1));
	                if (start > lastEnd + 2) {
	                    output += '-\\u' + pad4(hex(start - 1));
	                }
	            }
	            lastEnd = charCode(m[2] || m[1]);
	        });
	        if (lastEnd < 0xFFFF) {
	            output += '\\u' + pad4(hex(lastEnd + 1));
	            if (lastEnd < 0xFFFE) {
	                output += '-\\uFFFF';
	            }
	        }
	        return output;
	    }

	    // Generates an inverted BMP range on first use
	    function cacheInvertedBmp(slug) {
	        var prop = 'b!';
	        return unicode[slug][prop] || (unicode[slug][prop] = invertBmp(unicode[slug].bmp));
	    }

	    // Combines and optionally negates BMP and astral data
	    function buildAstral(slug, isNegated) {
	        var item = unicode[slug],
	            combined = '';
	        if (item.bmp && !item.isBmpLast) {
	            combined = '[' + item.bmp + ']' + (item.astral ? '|' : '');
	        }
	        if (item.astral) {
	            combined += item.astral;
	        }
	        if (item.isBmpLast && item.bmp) {
	            combined += (item.astral ? '|' : '') + '[' + item.bmp + ']';
	        }
	        // Astral Unicode tokens always match a code point, never a code unit
	        return isNegated ? '(?:(?!' + combined + ')(?:[�-�][�-�]|[\u0000-￿]))' : '(?:' + combined + ')';
	    }

	    // Builds a complete astral pattern on first use
	    function cacheAstral(slug, isNegated) {
	        var prop = isNegated ? 'a!' : 'a=';
	        return unicode[slug][prop] || (unicode[slug][prop] = buildAstral(slug, isNegated));
	    }

	    // ==--------------------------==
	    // Core functionality
	    // ==--------------------------==

	    /*
	     * Add Unicode token syntax: \p{..}, \P{..}, \p{^..}. Also add astral mode (flag A).
	     */
	    XRegExp.addToken(
	    // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
	    /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/, function (match, scope, flags) {
	        var ERR_DOUBLE_NEG = 'Invalid double negation ',
	            ERR_UNKNOWN_NAME = 'Unknown Unicode token ',
	            ERR_UNKNOWN_REF = 'Unicode token missing data ',
	            ERR_ASTRAL_ONLY = 'Astral mode required for Unicode token ',
	            ERR_ASTRAL_IN_CLASS = 'Astral mode does not support Unicode tokens within character classes',

	        // Negated via \P{..} or \p{^..}
	        isNegated = match[1] === 'P' || !!match[2],

	        // Switch from BMP (0-FFFF) to astral (0-10FFFF) mode via flag A
	        isAstralMode = flags.indexOf('A') > -1,

	        // Token lookup name. Check `[4]` first to avoid passing `undefined` via `\p{}`
	        slug = normalize(match[4] || match[3]),

	        // Token data object
	        item = unicode[slug];

	        if (match[1] === 'P' && match[2]) {
	            throw new SyntaxError(ERR_DOUBLE_NEG + match[0]);
	        }
	        if (!unicode.hasOwnProperty(slug)) {
	            throw new SyntaxError(ERR_UNKNOWN_NAME + match[0]);
	        }

	        // Switch to the negated form of the referenced Unicode token
	        if (item.inverseOf) {
	            slug = normalize(item.inverseOf);
	            if (!unicode.hasOwnProperty(slug)) {
	                throw new ReferenceError(ERR_UNKNOWN_REF + match[0] + ' -> ' + item.inverseOf);
	            }
	            item = unicode[slug];
	            isNegated = !isNegated;
	        }

	        if (!(item.bmp || isAstralMode)) {
	            throw new SyntaxError(ERR_ASTRAL_ONLY + match[0]);
	        }
	        if (isAstralMode) {
	            if (scope === 'class') {
	                throw new SyntaxError(ERR_ASTRAL_IN_CLASS);
	            }

	            return cacheAstral(slug, isNegated);
	        }

	        return scope === 'class' ? isNegated ? cacheInvertedBmp(slug) : item.bmp : (isNegated ? '[^' : '[') + item.bmp + ']';
	    }, {
	        scope: 'all',
	        optionalFlags: 'A',
	        leadChar: '\\'
	    });

	    /**
	     * Adds to the list of Unicode tokens that XRegExp regexes can match via `\p` or `\P`.
	     *
	     * @param {Array} data Objects with named character ranges. Each object may have properties
	     *   `name`, `alias`, `isBmpLast`, `inverseOf`, `bmp`, and `astral`. All but `name` are
	     *   optional, although one of `bmp` or `astral` is required (unless `inverseOf` is set). If
	     *   `astral` is absent, the `bmp` data is used for BMP and astral modes. If `bmp` is absent,
	     *   the name errors in BMP mode but works in astral mode. If both `bmp` and `astral` are
	     *   provided, the `bmp` data only is used in BMP mode, and the combination of `bmp` and
	     *   `astral` data is used in astral mode. `isBmpLast` is needed when a token matches orphan
	     *   high surrogates *and* uses surrogate pairs to match astral code points. The `bmp` and
	     *   `astral` data should be a combination of literal characters and `\xHH` or `\uHHHH` escape
	     *   sequences, with hyphens to create ranges. Any regex metacharacters in the data should be
	     *   escaped, apart from range-creating hyphens. The `astral` data can additionally use
	     *   character classes and alternation, and should use surrogate pairs to represent astral code
	     *   points. `inverseOf` can be used to avoid duplicating character data if a Unicode token is
	     *   defined as the exact inverse of another token.
	     * @example
	     *
	     * // Basic use
	     * XRegExp.addUnicodeData([{
	     *   name: 'XDigit',
	     *   alias: 'Hexadecimal',
	     *   bmp: '0-9A-Fa-f'
	     * }]);
	     * XRegExp('\\p{XDigit}:\\p{Hexadecimal}+').test('0:3D'); // -> true
	     */
	    XRegExp.addUnicodeData = function (data) {
	        var ERR_NO_NAME = 'Unicode token requires name',
	            ERR_NO_DATA = 'Unicode token has no character data ',
	            item,
	            i;

	        for (i = 0; i < data.length; ++i) {
	            item = data[i];
	            if (!item.name) {
	                throw new Error(ERR_NO_NAME);
	            }
	            if (!(item.inverseOf || item.bmp || item.astral)) {
	                throw new Error(ERR_NO_DATA + item.name);
	            }
	            unicode[normalize(item.name)] = item;
	            if (item.alias) {
	                unicode[normalize(item.alias)] = item;
	            }
	        }

	        // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and
	        // flags might now produce different results
	        XRegExp.cache.flush('patterns');
	    };
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * XRegExp Unicode Blocks 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2010-2016 MIT License
	 * Unicode data by Mathias Bynens <mathiasbynens.be>
	 */

	module.exports = function (XRegExp) {
	    'use strict';

	    /**
	     * Adds support for all Unicode blocks. Block names use the prefix 'In'. E.g.,
	     * `\p{InBasicLatin}`. Token names are case insensitive, and any spaces, hyphens, and
	     * underscores are ignored.
	     *
	     * Uses Unicode 8.0.0.
	     *
	     * @requires XRegExp, Unicode Base
	     */

	    if (!XRegExp.addUnicodeData) {
	        throw new ReferenceError('Unicode Base must be loaded before Unicode Blocks');
	    }

	    XRegExp.addUnicodeData([{
	        name: 'InAegean_Numbers',
	        astral: '�[�-�]'
	    }, {
	        name: 'InAhom',
	        astral: '�[�-�]'
	    }, {
	        name: 'InAlchemical_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InAlphabetic_Presentation_Forms',
	        bmp: 'ﬀ-ﭏ'
	    }, {
	        name: 'InAnatolian_Hieroglyphs',
	        astral: '�[�-�]'
	    }, {
	        name: 'InAncient_Greek_Musical_Notation',
	        astral: '�[�-�]'
	    }, {
	        name: 'InAncient_Greek_Numbers',
	        astral: '�[�-�]'
	    }, {
	        name: 'InAncient_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InArabic',
	        bmp: '؀-ۿ'
	    }, {
	        name: 'InArabic_Extended_A',
	        bmp: 'ࢠ-ࣿ'
	    }, {
	        name: 'InArabic_Mathematical_Alphabetic_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InArabic_Presentation_Forms_A',
	        bmp: 'ﭐ-﷿'
	    }, {
	        name: 'InArabic_Presentation_Forms_B',
	        bmp: 'ﹰ-﻿'
	    }, {
	        name: 'InArabic_Supplement',
	        bmp: 'ݐ-ݿ'
	    }, {
	        name: 'InArmenian',
	        bmp: '԰-֏'
	    }, {
	        name: 'InArrows',
	        bmp: '←-⇿'
	    }, {
	        name: 'InAvestan',
	        astral: '�[�-�]'
	    }, {
	        name: 'InBalinese',
	        bmp: 'ᬀ-᭿'
	    }, {
	        name: 'InBamum',
	        bmp: 'ꚠ-꛿'
	    }, {
	        name: 'InBamum_Supplement',
	        astral: '�[�-�]'
	    }, {
	        name: 'InBasic_Latin',
	        bmp: '\0-\x7F'
	    }, {
	        name: 'InBassa_Vah',
	        astral: '�[�-�]'
	    }, {
	        name: 'InBatak',
	        bmp: 'ᯀ-᯿'
	    }, {
	        name: 'InBengali',
	        bmp: 'ঀ-৿'
	    }, {
	        name: 'InBlock_Elements',
	        bmp: '▀-▟'
	    }, {
	        name: 'InBopomofo',
	        bmp: '㄀-ㄯ'
	    }, {
	        name: 'InBopomofo_Extended',
	        bmp: 'ㆠ-ㆿ'
	    }, {
	        name: 'InBox_Drawing',
	        bmp: '─-╿'
	    }, {
	        name: 'InBrahmi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InBraille_Patterns',
	        bmp: '⠀-⣿'
	    }, {
	        name: 'InBuginese',
	        bmp: 'ᨀ-᨟'
	    }, {
	        name: 'InBuhid',
	        bmp: 'ᝀ-᝟'
	    }, {
	        name: 'InByzantine_Musical_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCJK_Compatibility',
	        bmp: '㌀-㏿'
	    }, {
	        name: 'InCJK_Compatibility_Forms',
	        bmp: '︰-﹏'
	    }, {
	        name: 'InCJK_Compatibility_Ideographs',
	        bmp: '豈-﫿'
	    }, {
	        name: 'InCJK_Compatibility_Ideographs_Supplement',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCJK_Radicals_Supplement',
	        bmp: '⺀-⻿'
	    }, {
	        name: 'InCJK_Strokes',
	        bmp: '㇀-㇯'
	    }, {
	        name: 'InCJK_Symbols_and_Punctuation',
	        bmp: '　-〿'
	    }, {
	        name: 'InCJK_Unified_Ideographs',
	        bmp: '一-鿿'
	    }, {
	        name: 'InCJK_Unified_Ideographs_Extension_A',
	        bmp: '㐀-䶿'
	    }, {
	        name: 'InCJK_Unified_Ideographs_Extension_B',
	        astral: '[�-�][�-�]|�[�-�]'
	    }, {
	        name: 'InCJK_Unified_Ideographs_Extension_C',
	        astral: '�[�-�]|[�-�][�-�]|�[�-�]'
	    }, {
	        name: 'InCJK_Unified_Ideographs_Extension_D',
	        astral: '�[�-�]|�[�-�]'
	    }, {
	        name: 'InCJK_Unified_Ideographs_Extension_E',
	        astral: '[�-�][�-�]|�[�-�]|�[�-�]'
	    }, {
	        name: 'InCarian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCaucasian_Albanian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InChakma',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCham',
	        bmp: 'ꨀ-꩟'
	    }, {
	        name: 'InCherokee',
	        bmp: 'Ꭰ-᏿'
	    }, {
	        name: 'InCherokee_Supplement',
	        bmp: 'ꭰ-ꮿ'
	    }, {
	        name: 'InCombining_Diacritical_Marks',
	        bmp: '̀-ͯ'
	    }, {
	        name: 'InCombining_Diacritical_Marks_Extended',
	        bmp: '᪰-᫿'
	    }, {
	        name: 'InCombining_Diacritical_Marks_Supplement',
	        bmp: '᷀-᷿'
	    }, {
	        name: 'InCombining_Diacritical_Marks_for_Symbols',
	        bmp: '⃐-⃿'
	    }, {
	        name: 'InCombining_Half_Marks',
	        bmp: '︠-︯'
	    }, {
	        name: 'InCommon_Indic_Number_Forms',
	        bmp: '꠰-꠿'
	    }, {
	        name: 'InControl_Pictures',
	        bmp: '␀-␿'
	    }, {
	        name: 'InCoptic',
	        bmp: 'Ⲁ-⳿'
	    }, {
	        name: 'InCoptic_Epact_Numbers',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCounting_Rod_Numerals',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCuneiform',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCuneiform_Numbers_and_Punctuation',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCurrency_Symbols',
	        bmp: '₠-⃏'
	    }, {
	        name: 'InCypriot_Syllabary',
	        astral: '�[�-�]'
	    }, {
	        name: 'InCyrillic',
	        bmp: 'Ѐ-ӿ'
	    }, {
	        name: 'InCyrillic_Extended_A',
	        bmp: 'ⷠ-ⷿ'
	    }, {
	        name: 'InCyrillic_Extended_B',
	        bmp: 'Ꙁ-ꚟ'
	    }, {
	        name: 'InCyrillic_Supplement',
	        bmp: 'Ԁ-ԯ'
	    }, {
	        name: 'InDeseret',
	        astral: '�[�-�]'
	    }, {
	        name: 'InDevanagari',
	        bmp: 'ऀ-ॿ'
	    }, {
	        name: 'InDevanagari_Extended',
	        bmp: '꣠-ꣿ'
	    }, {
	        name: 'InDingbats',
	        bmp: '✀-➿'
	    }, {
	        name: 'InDomino_Tiles',
	        astral: '�[�-�]'
	    }, {
	        name: 'InDuployan',
	        astral: '�[�-�]'
	    }, {
	        name: 'InEarly_Dynastic_Cuneiform',
	        astral: '�[�-�]'
	    }, {
	        name: 'InEgyptian_Hieroglyphs',
	        astral: '�[�-�]|�[�-�]'
	    }, {
	        name: 'InElbasan',
	        astral: '�[�-�]'
	    }, {
	        name: 'InEmoticons',
	        astral: '�[�-�]'
	    }, {
	        name: 'InEnclosed_Alphanumeric_Supplement',
	        astral: '�[�-�]'
	    }, {
	        name: 'InEnclosed_Alphanumerics',
	        bmp: '①-⓿'
	    }, {
	        name: 'InEnclosed_CJK_Letters_and_Months',
	        bmp: '㈀-㋿'
	    }, {
	        name: 'InEnclosed_Ideographic_Supplement',
	        astral: '�[�-�]'
	    }, {
	        name: 'InEthiopic',
	        bmp: 'ሀ-፿'
	    }, {
	        name: 'InEthiopic_Extended',
	        bmp: 'ⶀ-⷟'
	    }, {
	        name: 'InEthiopic_Extended_A',
	        bmp: '꬀-꬯'
	    }, {
	        name: 'InEthiopic_Supplement',
	        bmp: 'ᎀ-᎟'
	    }, {
	        name: 'InGeneral_Punctuation',
	        bmp: ' -⁯'
	    }, {
	        name: 'InGeometric_Shapes',
	        bmp: '■-◿'
	    }, {
	        name: 'InGeometric_Shapes_Extended',
	        astral: '�[�-�]'
	    }, {
	        name: 'InGeorgian',
	        bmp: 'Ⴀ-ჿ'
	    }, {
	        name: 'InGeorgian_Supplement',
	        bmp: 'ⴀ-⴯'
	    }, {
	        name: 'InGlagolitic',
	        bmp: 'Ⰰ-ⱟ'
	    }, {
	        name: 'InGothic',
	        astral: '�[�-�]'
	    }, {
	        name: 'InGrantha',
	        astral: '�[�-�]'
	    }, {
	        name: 'InGreek_Extended',
	        bmp: 'ἀ-῿'
	    }, {
	        name: 'InGreek_and_Coptic',
	        bmp: 'Ͱ-Ͽ'
	    }, {
	        name: 'InGujarati',
	        bmp: '઀-૿'
	    }, {
	        name: 'InGurmukhi',
	        bmp: '਀-੿'
	    }, {
	        name: 'InHalfwidth_and_Fullwidth_Forms',
	        bmp: '＀-￯'
	    }, {
	        name: 'InHangul_Compatibility_Jamo',
	        bmp: '㄰-㆏'
	    }, {
	        name: 'InHangul_Jamo',
	        bmp: 'ᄀ-ᇿ'
	    }, {
	        name: 'InHangul_Jamo_Extended_A',
	        bmp: 'ꥠ-꥿'
	    }, {
	        name: 'InHangul_Jamo_Extended_B',
	        bmp: 'ힰ-퟿'
	    }, {
	        name: 'InHangul_Syllables',
	        bmp: '가-힯'
	    }, {
	        name: 'InHanunoo',
	        bmp: 'ᜠ-᜿'
	    }, {
	        name: 'InHatran',
	        astral: '�[�-�]'
	    }, {
	        name: 'InHebrew',
	        bmp: '֐-׿'
	    }, {
	        name: 'InHigh_Private_Use_Surrogates',
	        bmp: '�-�'
	    }, {
	        name: 'InHigh_Surrogates',
	        bmp: '�-�'
	    }, {
	        name: 'InHiragana',
	        bmp: '぀-ゟ'
	    }, {
	        name: 'InIPA_Extensions',
	        bmp: 'ɐ-ʯ'
	    }, {
	        name: 'InIdeographic_Description_Characters',
	        bmp: '⿰-⿿'
	    }, {
	        name: 'InImperial_Aramaic',
	        astral: '�[�-�]'
	    }, {
	        name: 'InInscriptional_Pahlavi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InInscriptional_Parthian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InJavanese',
	        bmp: 'ꦀ-꧟'
	    }, {
	        name: 'InKaithi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InKana_Supplement',
	        astral: '�[�-�]'
	    }, {
	        name: 'InKanbun',
	        bmp: '㆐-㆟'
	    }, {
	        name: 'InKangxi_Radicals',
	        bmp: '⼀-⿟'
	    }, {
	        name: 'InKannada',
	        bmp: 'ಀ-೿'
	    }, {
	        name: 'InKatakana',
	        bmp: '゠-ヿ'
	    }, {
	        name: 'InKatakana_Phonetic_Extensions',
	        bmp: 'ㇰ-ㇿ'
	    }, {
	        name: 'InKayah_Li',
	        bmp: '꤀-꤯'
	    }, {
	        name: 'InKharoshthi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InKhmer',
	        bmp: 'ក-៿'
	    }, {
	        name: 'InKhmer_Symbols',
	        bmp: '᧠-᧿'
	    }, {
	        name: 'InKhojki',
	        astral: '�[�-�]'
	    }, {
	        name: 'InKhudawadi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InLao',
	        bmp: '຀-໿'
	    }, {
	        name: 'InLatin_Extended_Additional',
	        bmp: 'Ḁ-ỿ'
	    }, {
	        name: 'InLatin_Extended_A',
	        bmp: 'Ā-ſ'
	    }, {
	        name: 'InLatin_Extended_B',
	        bmp: 'ƀ-ɏ'
	    }, {
	        name: 'InLatin_Extended_C',
	        bmp: 'Ⱡ-Ɀ'
	    }, {
	        name: 'InLatin_Extended_D',
	        bmp: '꜠-ꟿ'
	    }, {
	        name: 'InLatin_Extended_E',
	        bmp: 'ꬰ-꭯'
	    }, {
	        name: 'InLatin_1_Supplement',
	        bmp: '\x80-\xFF'
	    }, {
	        name: 'InLepcha',
	        bmp: 'ᰀ-ᱏ'
	    }, {
	        name: 'InLetterlike_Symbols',
	        bmp: '℀-⅏'
	    }, {
	        name: 'InLimbu',
	        bmp: 'ᤀ-᥏'
	    }, {
	        name: 'InLinear_A',
	        astral: '�[�-�]'
	    }, {
	        name: 'InLinear_B_Ideograms',
	        astral: '�[�-�]'
	    }, {
	        name: 'InLinear_B_Syllabary',
	        astral: '�[�-�]'
	    }, {
	        name: 'InLisu',
	        bmp: 'ꓐ-꓿'
	    }, {
	        name: 'InLow_Surrogates',
	        bmp: '�-�'
	    }, {
	        name: 'InLycian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InLydian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMahajani',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMahjong_Tiles',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMalayalam',
	        bmp: 'ഀ-ൿ'
	    }, {
	        name: 'InMandaic',
	        bmp: 'ࡀ-࡟'
	    }, {
	        name: 'InManichaean',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMathematical_Alphanumeric_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMathematical_Operators',
	        bmp: '∀-⋿'
	    }, {
	        name: 'InMeetei_Mayek',
	        bmp: 'ꯀ-꯿'
	    }, {
	        name: 'InMeetei_Mayek_Extensions',
	        bmp: 'ꫠ-꫿'
	    }, {
	        name: 'InMende_Kikakui',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMeroitic_Cursive',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMeroitic_Hieroglyphs',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMiao',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMiscellaneous_Mathematical_Symbols_A',
	        bmp: '⟀-⟯'
	    }, {
	        name: 'InMiscellaneous_Mathematical_Symbols_B',
	        bmp: '⦀-⧿'
	    }, {
	        name: 'InMiscellaneous_Symbols',
	        bmp: '☀-⛿'
	    }, {
	        name: 'InMiscellaneous_Symbols_and_Arrows',
	        bmp: '⬀-⯿'
	    }, {
	        name: 'InMiscellaneous_Symbols_and_Pictographs',
	        astral: '�[�-�]|�[�-�]'
	    }, {
	        name: 'InMiscellaneous_Technical',
	        bmp: '⌀-⏿'
	    }, {
	        name: 'InModi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InModifier_Tone_Letters',
	        bmp: '꜀-ꜟ'
	    }, {
	        name: 'InMongolian',
	        bmp: '᠀-᢯'
	    }, {
	        name: 'InMro',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMultani',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMusical_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InMyanmar',
	        bmp: 'က-႟'
	    }, {
	        name: 'InMyanmar_Extended_A',
	        bmp: 'ꩠ-ꩿ'
	    }, {
	        name: 'InMyanmar_Extended_B',
	        bmp: 'ꧠ-꧿'
	    }, {
	        name: 'InNKo',
	        bmp: '߀-߿'
	    }, {
	        name: 'InNabataean',
	        astral: '�[�-�]'
	    }, {
	        name: 'InNew_Tai_Lue',
	        bmp: 'ᦀ-᧟'
	    }, {
	        name: 'InNumber_Forms',
	        bmp: '⅐-↏'
	    }, {
	        name: 'InOgham',
	        bmp: ' -᚟'
	    }, {
	        name: 'InOl_Chiki',
	        bmp: '᱐-᱿'
	    }, {
	        name: 'InOld_Hungarian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOld_Italic',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOld_North_Arabian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOld_Permic',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOld_Persian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOld_South_Arabian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOld_Turkic',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOptical_Character_Recognition',
	        bmp: '⑀-⑟'
	    }, {
	        name: 'InOriya',
	        bmp: '଀-୿'
	    }, {
	        name: 'InOrnamental_Dingbats',
	        astral: '�[�-�]'
	    }, {
	        name: 'InOsmanya',
	        astral: '�[�-�]'
	    }, {
	        name: 'InPahawh_Hmong',
	        astral: '�[�-�]'
	    }, {
	        name: 'InPalmyrene',
	        astral: '�[�-�]'
	    }, {
	        name: 'InPau_Cin_Hau',
	        astral: '�[�-�]'
	    }, {
	        name: 'InPhags_pa',
	        bmp: 'ꡀ-꡿'
	    }, {
	        name: 'InPhaistos_Disc',
	        astral: '�[�-�]'
	    }, {
	        name: 'InPhoenician',
	        astral: '�[�-�]'
	    }, {
	        name: 'InPhonetic_Extensions',
	        bmp: 'ᴀ-ᵿ'
	    }, {
	        name: 'InPhonetic_Extensions_Supplement',
	        bmp: 'ᶀ-ᶿ'
	    }, {
	        name: 'InPlaying_Cards',
	        astral: '�[�-�]'
	    }, {
	        name: 'InPrivate_Use_Area',
	        bmp: '-'
	    }, {
	        name: 'InPsalter_Pahlavi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InRejang',
	        bmp: 'ꤰ-꥟'
	    }, {
	        name: 'InRumi_Numeral_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InRunic',
	        bmp: 'ᚠ-᛿'
	    }, {
	        name: 'InSamaritan',
	        bmp: 'ࠀ-࠿'
	    }, {
	        name: 'InSaurashtra',
	        bmp: 'ꢀ-꣟'
	    }, {
	        name: 'InSharada',
	        astral: '�[�-�]'
	    }, {
	        name: 'InShavian',
	        astral: '�[�-�]'
	    }, {
	        name: 'InShorthand_Format_Controls',
	        astral: '�[�-�]'
	    }, {
	        name: 'InSiddham',
	        astral: '�[�-�]'
	    }, {
	        name: 'InSinhala',
	        bmp: '඀-෿'
	    }, {
	        name: 'InSinhala_Archaic_Numbers',
	        astral: '�[�-�]'
	    }, {
	        name: 'InSmall_Form_Variants',
	        bmp: '﹐-﹯'
	    }, {
	        name: 'InSora_Sompeng',
	        astral: '�[�-�]'
	    }, {
	        name: 'InSpacing_Modifier_Letters',
	        bmp: 'ʰ-˿'
	    }, {
	        name: 'InSpecials',
	        bmp: '￰-￿'
	    }, {
	        name: 'InSundanese',
	        bmp: 'ᮀ-ᮿ'
	    }, {
	        name: 'InSundanese_Supplement',
	        bmp: '᳀-᳏'
	    }, {
	        name: 'InSuperscripts_and_Subscripts',
	        bmp: '⁰-₟'
	    }, {
	        name: 'InSupplemental_Arrows_A',
	        bmp: '⟰-⟿'
	    }, {
	        name: 'InSupplemental_Arrows_B',
	        bmp: '⤀-⥿'
	    }, {
	        name: 'InSupplemental_Arrows_C',
	        astral: '�[�-�]'
	    }, {
	        name: 'InSupplemental_Mathematical_Operators',
	        bmp: '⨀-⫿'
	    }, {
	        name: 'InSupplemental_Punctuation',
	        bmp: '⸀-⹿'
	    }, {
	        name: 'InSupplemental_Symbols_and_Pictographs',
	        astral: '�[�-�]'
	    }, {
	        name: 'InSupplementary_Private_Use_Area_A',
	        astral: '[�-�][�-�]'
	    }, {
	        name: 'InSupplementary_Private_Use_Area_B',
	        astral: '[�-�][�-�]'
	    }, {
	        name: 'InSutton_SignWriting',
	        astral: '�[�-�]'
	    }, {
	        name: 'InSyloti_Nagri',
	        bmp: 'ꠀ-꠯'
	    }, {
	        name: 'InSyriac',
	        bmp: '܀-ݏ'
	    }, {
	        name: 'InTagalog',
	        bmp: 'ᜀ-ᜟ'
	    }, {
	        name: 'InTagbanwa',
	        bmp: 'ᝠ-᝿'
	    }, {
	        name: 'InTags',
	        astral: '�[�-�]'
	    }, {
	        name: 'InTai_Le',
	        bmp: 'ᥐ-᥿'
	    }, {
	        name: 'InTai_Tham',
	        bmp: 'ᨠ-᪯'
	    }, {
	        name: 'InTai_Viet',
	        bmp: 'ꪀ-꫟'
	    }, {
	        name: 'InTai_Xuan_Jing_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InTakri',
	        astral: '�[�-�]'
	    }, {
	        name: 'InTamil',
	        bmp: '஀-௿'
	    }, {
	        name: 'InTelugu',
	        bmp: 'ఀ-౿'
	    }, {
	        name: 'InThaana',
	        bmp: 'ހ-޿'
	    }, {
	        name: 'InThai',
	        bmp: '฀-๿'
	    }, {
	        name: 'InTibetan',
	        bmp: 'ༀ-࿿'
	    }, {
	        name: 'InTifinagh',
	        bmp: 'ⴰ-⵿'
	    }, {
	        name: 'InTirhuta',
	        astral: '�[�-�]'
	    }, {
	        name: 'InTransport_and_Map_Symbols',
	        astral: '�[�-�]'
	    }, {
	        name: 'InUgaritic',
	        astral: '�[�-�]'
	    }, {
	        name: 'InUnified_Canadian_Aboriginal_Syllabics',
	        bmp: '᐀-ᙿ'
	    }, {
	        name: 'InUnified_Canadian_Aboriginal_Syllabics_Extended',
	        bmp: 'ᢰ-᣿'
	    }, {
	        name: 'InVai',
	        bmp: 'ꔀ-꘿'
	    }, {
	        name: 'InVariation_Selectors',
	        bmp: '︀-️'
	    }, {
	        name: 'InVariation_Selectors_Supplement',
	        astral: '�[�-�]'
	    }, {
	        name: 'InVedic_Extensions',
	        bmp: '᳐-᳿'
	    }, {
	        name: 'InVertical_Forms',
	        bmp: '︐-︟'
	    }, {
	        name: 'InWarang_Citi',
	        astral: '�[�-�]'
	    }, {
	        name: 'InYi_Radicals',
	        bmp: '꒐-꓏'
	    }, {
	        name: 'InYi_Syllables',
	        bmp: 'ꀀ-꒏'
	    }, {
	        name: 'InYijing_Hexagram_Symbols',
	        bmp: '䷀-䷿'
	    }]);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * XRegExp Unicode Categories 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2010-2016 MIT License
	 * Unicode data by Mathias Bynens <mathiasbynens.be>
	 */

	module.exports = function (XRegExp) {
	    'use strict';

	    /**
	     * Adds support for Unicode's general categories. E.g., `\p{Lu}` or `\p{Uppercase Letter}`. See
	     * category descriptions in UAX #44 <http://unicode.org/reports/tr44/#GC_Values_Table>. Token
	     * names are case insensitive, and any spaces, hyphens, and underscores are ignored.
	     *
	     * Uses Unicode 8.0.0.
	     *
	     * @requires XRegExp, Unicode Base
	     */

	    if (!XRegExp.addUnicodeData) {
	        throw new ReferenceError('Unicode Base must be loaded before Unicode Categories');
	    }

	    XRegExp.addUnicodeData([{
	        name: 'C',
	        alias: 'Other',
	        isBmpLast: true,
	        bmp: '\u0000-\u001f-­͸͹΀-΃΋΍΢԰՗՘ՠֈ֋֌֐׈-׏׫-ׯ׵-؅؜؝۝܎܏݋݌޲-޿߻-߿࠮࠯࠿࡜࡝࡟-࢟ࢵ-࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥ৼ-਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੶-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸ૺ-଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿ఄ఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷ಀ಄಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-ഀഄ഍഑഻഼൅൉൏-ൖ൘-൞൤൥൶-൸඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟ᡸ-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌ᲀ-Ჿ᳈-᳏᳷ᳺ-᳿᷶-᷻἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟₿-⃏⃱-⃿↌-↏⏻-⏿␧-␿⑋-⑟⭴⭵⮖⮗⮺-⮼⯉⯒-⯫⯰-⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹃-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄ㄮ-㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿖-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꞮꞯꞸ-ꟶ꠬-꠯꠺-꠿꡸-꡿ꣅ-꣍꣚-꣟ꣾꣿ꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿',
	        astral: '�[�-����-��-��-��-��-�]|�[�-���-�]|�[�-��-������-��-���-��-��-��-��-��-�]|�[�-���-��-����-��-����-��-�]|�[��-��-�]|�[�-��-��-��-�]|�[��]|�[���-��-��-��-��-�]|�[���-��-��-��-��-��-��-�]|�[�������-��-��-��-��-��-��-��-��-��-��-��-��-��-���-��-�]|�[�-�]|�[�-�����������-��-�����������������������-����-��-�]|�[�-�]|�[�-��-�]|�[�-��-���-��-��-���-��-�����-���-������-��-��-������������������-��-����-��-�]|�[���-�]|�[�-�]|�[�-�]|[����-��-��-����-��-���-��-��-�][�-�]|�[�-��-��-��-�]|�[�-��-��-��-��-�]|�[���������������������-������]|�[�-��-��-����-��-��-��-��-��-��-��-�]|�[�����-�����-��-���-��-��-��-��-�����-����-��-��-��-��-��-��-��-����-��-��-��-�]|�[�-�]|�[�-��-��-����-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-��-��-��-�]|�[�-�]'
	    }, {
	        name: 'Cc',
	        alias: 'Control',
	        bmp: '\0-\x1F\x7F-\x9F'
	    }, {
	        name: 'Cf',
	        alias: 'Format',
	        bmp: '­؀-؅؜۝܏᠎​-‏‪-‮⁠-⁤⁦-⁯﻿￹-￻',
	        astral: '�[��-�]|�[�-�]|�[�-�]|𑂽'
	    }, {
	        name: 'Cn',
	        alias: 'Unassigned',
	        bmp: '͸͹΀-΃΋΍΢԰՗՘ՠֈ֋֌֐׈-׏׫-ׯ׵-׿؝܎݋݌޲-޿߻-߿࠮࠯࠿࡜࡝࡟-࢟ࢵ-࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥ৼ-਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੶-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸ૺ-଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿ఄ఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷ಀ಄಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-ഀഄ഍഑഻഼൅൉൏-ൖ൘-൞൤൥൶-൸඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟ᡸ-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌ᲀ-Ჿ᳈-᳏᳷ᳺ-᳿᷶-᷻἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟₿-⃏⃱-⃿↌-↏⏻-⏿␧-␿⑋-⑟⭴⭵⮖⮗⮺-⮼⯉⯒-⯫⯰-⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹃-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄ㄮ-㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿖-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꞮꞯꞸ-ꟶ꠬-꠯꠺-꠿꡸-꡿ꣅ-꣍꣚-꣟ꣾꣿ꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿',
	        astral: '�[��-��-��-�]|�[�-����-��-��-��-�]|�[�-��-������-��-���-��-��-��-��-��-�]|�[�-���-��-����-��-����-��-�]|�[��-��-�]|�[�-��-��-��-�]|�[��]|�[���-��-��-��-��-�]|�[���-��-��-��-��-��-��-�]|�[�������-��-��-��-��-��-��-��-��-��-��-��-��-��-���-��-�]|�[�-�]|�[�-�����������-��-�����������������������-����-��-�]|[��][��]|�[�-�]|�[�-��-��-����-�]|�[���-�]|�[�-�]|�[�-�]|[����-��-��-����-��-���-��-��-�][�-�]|�[�-��-��-��-�]|�[�-��-��-��-��-�]|�[���������������������-������]|�[�-���-�]|�[�-��-��-����-��-��-��-��-��-��-��-�]|�[�����-�����-��-���-��-��-��-��-�����-����-��-��-��-��-��-��-��-����-��-��-��-�]|�[�-�]|�[�-��-��-��-��-���-��-�����-���-������-��-��-������������������-��-����-��-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-��-��-��-�]|�[�-�]'
	    }, {
	        name: 'Co',
	        alias: 'Private_Use',
	        bmp: '-',
	        astral: '[�-��-�][�-�]|[��][�-�]'
	    }, {
	        name: 'Cs',
	        alias: 'Surrogate',
	        bmp: '�-�'
	    }, {
	        name: 'L',
	        alias: 'Letter',
	        bmp: 'A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
	        astral: '�[�-��-�]|�[�-��-�]|�[�-��-�]|�[�-��-��-�]|�[�-�]|�[�-��-��-��-��-��-�]|�[�-��-��-����-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-�]|�[�-�]|�[�-���-�]|[��-��-��-�][�-�]|�[�-�����-��-��-���-��-�]|�[�-��-��-��-��-��-��-�]|�[�-�]|�[�-���-�����-��-��-��-����-��-��-�����-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-�������-��-���-��-��-��-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-��-��-��-���-��-����-��-��-���-��-��-��-��-����-��-����-����-�]|�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-�]|�[�-���-�]|�[�-�]|�[�-��-��-��-�]|�[��]|�[�-�]'
	    }, {
	        name: 'Ll',
	        alias: 'Lowercase_Letter',
	        bmp: 'a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ',
	        astral: '�[�-�]|�[�-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��]|�[�-�]|�[�-�]'
	    }, {
	        name: 'Lm',
	        alias: 'Modifier_Letter',
	        bmp: 'ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ',
	        astral: '�[�-�]|�[�-�]'
	    }, {
	        name: 'Lo',
	        alias: 'Other_Letter',
	        bmp: 'ªºƻǀ-ǃʔא-תװ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎა-ჺჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
	        astral: '�[�-��-�]|�[�-��-�]|�[�-��-�]|�[�-�]|�[�-�]|�[�-��-��-����-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-�]|�[�-�]|�[�-��]|[��-��-��-�][�-�]|�[�-�����-��-��-���-��-�]|�[��-�]|�[�-�]|�[�-���-�����-��-��-��-����-��-��-�����-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-��-��-��-���-��-����-��-��-���-��-��-��-��-����-��-����-����-�]|�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-�]|�[�-��-��-��-�]|�[��]|�[�-�]'
	    }, {
	        name: 'Lt',
	        alias: 'Titlecase_Letter',
	        bmp: 'ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ'
	    }, {
	        name: 'Lu',
	        alias: 'Uppercase_Letter',
	        bmp: 'A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞭꞰ-ꞴꞶＡ-Ｚ',
	        astral: '�[�-�]|�[�-�]|�[�-�]|�[�-��-��-��������-��-��-����-��-��-����-��-���-��-��-��-��-��-��-��-��-��-��-��-��]'
	    }, {
	        name: 'M',
	        alias: 'Mark',
	        bmp: '̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఃా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷼-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣠-꣱ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯',
	        astral: '�[�-��-��-����-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-��-��-��-���-��-��-��-��-��-���-����-�����-��-�]|�[�-��-�]|�[�-��-�]|�[��]|�[���-�]|�[�-��-����-��-�]|�[�-����-��-����]|�[�-�]|�[�-�]'
	    }, {
	        name: 'Mc',
	        alias: 'Spacing_Mark',
	        bmp: 'ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬',
	        astral: '�[���-�]|�[����-������-����-�����-������-����-����]|�[�-���-���-��-���-�����������]|�[�-�]'
	    }, {
	        name: 'Me',
	        alias: 'Enclosing_Mark',
	        bmp: '҈҉᪾⃝-⃠⃢-⃤꙰-꙲'
	    }, {
	        name: 'Mn',
	        alias: 'Nonspacing_Mark',
	        bmp: '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഁു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷵᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯',
	        astral: '�[�-�������-��������-�������-���-��-��-�]|�[�-��-��-��-��-�]|�[�-��-�]|�[�-�]|�[��]|�[���-�]|�[�-��-����-��-�]|�[�-����-��-����]|�[��-��-��-����-��-��-�����-��-��-������-������-��-�]|�[�-�]|�[�-�]'
	    }, {
	        name: 'N',
	        alias: 'Number',
	        bmp: '0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９',
	        astral: '�[�-��-����-��-����-�]|�[�-�]|�[�-��-�]|�[�-�]|�[�-�]|�[�-��-��-�]|�[�-�]|�[�-��-��-��-��-��-�]|�[�-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-����-��-��-����-��-��-��-��-�]|�[�-��-��-��-�]'
	    }, {
	        name: 'Nd',
	        alias: 'Decimal_Number',
	        bmp: '0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９',
	        astral: '�[�-�]|�[�-�]|�[�-��-��-��-�]|�[�-�]|�[�-��-��-��-��-�]|�[�-��-�]'
	    }, {
	        name: 'Nl',
	        alias: 'Letter_Number',
	        bmp: 'ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ',
	        astral: '�[�-�]|�[�-����-�]'
	    }, {
	        name: 'No',
	        alias: 'Other_Number',
	        bmp: '²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൰-൵༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵',
	        astral: '�[�-��-�]|�[�-��-�]|�[�-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-����-��-��-����-��-��-��-��-�]|�[��]|�[�-�]|�[�-�]|�[�-��-����-��-�]'
	    }, {
	        name: 'P',
	        alias: 'Punctuation',
	        bmp: '!-#%-\\x2A,-/:;\\x3F@\\x5B-\\x5D_\\x7B}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹂、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･',
	        astral: '�[����-���-��-��-�]|�[�-�]|�[��-��-��-�]|�[�-�]|𐕯|𛲟|�[�-����-��-����-����-��-��]|�[�-���]|�[����-��]'
	    }, {
	        name: 'Pc',
	        alias: 'Connector_Punctuation',
	        bmp: '_‿⁀⁔︳︴﹍-﹏＿'
	    }, {
	        name: 'Pd',
	        alias: 'Dash_Punctuation',
	        bmp: '\\x2D֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－'
	    }, {
	        name: 'Pe',
	        alias: 'Close_Punctuation',
	        bmp: '\\x29\\x5D}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣'
	    }, {
	        name: 'Pf',
	        alias: 'Final_Punctuation',
	        bmp: '»’”›⸃⸅⸊⸍⸝⸡'
	    }, {
	        name: 'Pi',
	        alias: 'Initial_Punctuation',
	        bmp: '«‘‛“‟‹⸂⸄⸉⸌⸜⸠'
	    }, {
	        name: 'Po',
	        alias: 'Other_Punctuation',
	        bmp: '!-#%-\'\\x2A,\\x2E/:;\\x3F@\\x5C¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･',
	        astral: '�[����-���-��-��-�]|�[�-�]|�[��-��-��-�]|�[�-�]|𐕯|𛲟|�[�-����-��-����-����-��-��]|�[�-���]|�[����-��]'
	    }, {
	        name: 'Ps',
	        alias: 'Open_Punctuation',
	        bmp: '\\x28\\x5B\\x7B༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢'
	    }, {
	        name: 'S',
	        alias: 'Symbol',
	        bmp: '\\x24\\x2B<->\\x5E`\\x7C~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶৲৳৺৻૱୰௳-௺౿൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₾℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-⏺␀-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�',
	        astral: '�[�-��-��-��-��-��-��-��]|�[�-��-��-��-��-��-��-��-��-��-��-��-����-�]|�[�-��-��-��-��-��-��-�]|�[����������]|�[�-��-���-���-�]|𛲜|𑜿|�[���]|�[�-��]|�[�-��-��-��-���]|�[�-��-��-��-����-��-��-���-�]|�[��]'
	    }, {
	        name: 'Sc',
	        alias: 'Currency_Symbol',
	        bmp: '\\x24¢-¥֏؋৲৳৻૱௹฿៛₠-₾꠸﷼﹩＄￠￡￥￦'
	    }, {
	        name: 'Sk',
	        alias: 'Modifier_Symbol',
	        bmp: '\\x5E`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣',
	        astral: '�[�-�]'
	    }, {
	        name: 'Sm',
	        alias: 'Math_Symbol',
	        bmp: '\\x2B<->\\x7C~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬',
	        astral: '�[��]|�[����������]'
	    }, {
	        name: 'So',
	        alias: 'Other_Symbol',
	        bmp: '¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-⏺␀-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�',
	        astral: '�[�-��-��-��-��-��-��-��]|�[�-��-��-��-��-��-��-�]|�[�-��-��-��-��-��-��-��-��-��-��-��-����-�]|�[�-��-���-���-�]|𛲜|𑜿|�[���]|�[�-��]|�[�-��-��-��-���]|�[�-��-��-��-����-��-��-���-�]'
	    }, {
	        name: 'Z',
	        alias: 'Separator',
	        bmp: '    - \u2028\u2029  　'
	    }, {
	        name: 'Zl',
	        alias: 'Line_Separator',
	        bmp: '\u2028'
	    }, {
	        name: 'Zp',
	        alias: 'Paragraph_Separator',
	        bmp: '\u2029'
	    }, {
	        name: 'Zs',
	        alias: 'Space_Separator',
	        bmp: '    -   　'
	    }]);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * XRegExp Unicode Properties 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2012-2016 MIT License
	 * Unicode data by Mathias Bynens <mathiasbynens.be>
	 */

	module.exports = function (XRegExp) {
	    'use strict';

	    /**
	     * Adds properties to meet the UTS #18 Level 1 RL1.2 requirements for Unicode regex support. See
	     * <http://unicode.org/reports/tr18/#RL1.2>. Following are definitions of these properties from
	     * UAX #44 <http://unicode.org/reports/tr44/>:
	     *
	     * - Alphabetic
	     *   Characters with the Alphabetic property. Generated from: Lowercase + Uppercase + Lt + Lm +
	     *   Lo + Nl + Other_Alphabetic.
	     *
	     * - Default_Ignorable_Code_Point
	     *   For programmatic determination of default ignorable code points. New characters that should
	     *   be ignored in rendering (unless explicitly supported) will be assigned in these ranges,
	     *   permitting programs to correctly handle the default rendering of such characters when not
	     *   otherwise supported.
	     *
	     * - Lowercase
	     *   Characters with the Lowercase property. Generated from: Ll + Other_Lowercase.
	     *
	     * - Noncharacter_Code_Point
	     *   Code points permanently reserved for internal use.
	     *
	     * - Uppercase
	     *   Characters with the Uppercase property. Generated from: Lu + Other_Uppercase.
	     *
	     * - White_Space
	     *   Spaces, separator characters and other control characters which should be treated by
	     *   programming languages as "white space" for the purpose of parsing elements.
	     *
	     * The properties ASCII, Any, and Assigned are also included but are not defined in UAX #44. UTS
	     * #18 RL1.2 additionally requires support for Unicode scripts and general categories. These are
	     * included in XRegExp's Unicode Categories and Unicode Scripts addons.
	     *
	     * Token names are case insensitive, and any spaces, hyphens, and underscores are ignored.
	     *
	     * Uses Unicode 8.0.0.
	     *
	     * @requires XRegExp, Unicode Base
	     */

	    if (!XRegExp.addUnicodeData) {
	        throw new ReferenceError('Unicode Base must be loaded before Unicode Properties');
	    }

	    var unicodeData = [{
	        name: 'ASCII',
	        bmp: '\0-\x7F'
	    }, {
	        name: 'Alphabetic',
	        bmp: 'A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևְ-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࢠ-ࢴࣣ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣲ-ꣷꣻꣽꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
	        astral: '�[�-��-�]|�[�-��-��-��-��-���-��-����-��-���-���-��-��-��-��-��-����-��-����-��-��������-�]|�[�-��-�]|�[�-��-�]|�[�-��-��-�]|�[�-�]|�[�-��-��-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-�]|�[�-�]|�[�-�]|[��-��-��-�][�-�]|�[�-��-�������-��-���-��-��-��-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-��-��-��]|�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-�]|�[�-�����-��-��-��-����-��-��-�]|�[�-��-�]|�[�-���-�]|�[�-��-��-����-��-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-���-�����-��-��-��-����-��-��-����-����-��-��-��-��-��-��-��-��-��-��-�]|�[�-�]|�[��]|�[�-��-��-�]|�[�-�]'
	    }, {
	        name: 'Any',
	        isBmpLast: true,
	        bmp: '\u0000-￿',
	        astral: '[�-�][�-�]'
	    }, {
	        name: 'Default_Ignorable_Code_Point',
	        bmp: '­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️﻿ﾠ￰-￸',
	        astral: '[�-�][�-�]|�[�-�]|�[�-�]'
	    }, {
	        name: 'Lowercase',
	        bmp: 'a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ',
	        astral: '�[�-�]|�[�-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��]|�[�-�]|�[�-�]'
	    }, {
	        name: 'Noncharacter_Code_Point',
	        bmp: '﷐-﷯￾￿',
	        astral: '[����������������][��]'
	    }, {
	        name: 'Uppercase',
	        bmp: 'A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞭꞰ-ꞴꞶＡ-Ｚ',
	        astral: '�[�-�]|�[�-�]|�[�-��-��-��������-��-��-����-��-��-����-��-���-��-��-��-��-��-��-��-��-��-��-��-��]|�[�-�]|�[�-��-��-�]'
	    }, {
	        name: 'White_Space',
	        bmp: '\t-\r    - \u2028\u2029  　'
	    }];

	    // Add non-generated data
	    unicodeData.push({
	        name: 'Assigned',
	        // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
	        // Categories addon is required to use this property
	        inverseOf: 'Cn'
	    });

	    XRegExp.addUnicodeData(unicodeData);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * XRegExp Unicode Scripts 3.1.1
	 * <xregexp.com>
	 * Steven Levithan (c) 2010-2016 MIT License
	 * Unicode data by Mathias Bynens <mathiasbynens.be>
	 */

	module.exports = function (XRegExp) {
	    'use strict';

	    /**
	     * Adds support for all Unicode scripts. E.g., `\p{Latin}`. Token names are case insensitive,
	     * and any spaces, hyphens, and underscores are ignored.
	     *
	     * Uses Unicode 8.0.0.
	     *
	     * @requires XRegExp, Unicode Base
	     */

	    if (!XRegExp.addUnicodeData) {
	        throw new ReferenceError('Unicode Base must be loaded before Unicode Scripts');
	    }

	    XRegExp.addUnicodeData([{
	        name: 'Ahom',
	        astral: '�[�-��-��-�]'
	    }, {
	        name: 'Anatolian_Hieroglyphs',
	        astral: '�[�-�]'
	    }, {
	        name: 'Arabic',
	        bmp: '؀-؄؆-؋؍-ؚ؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࣣ-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ',
	        astral: '�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-���]'
	    }, {
	        name: 'Armenian',
	        bmp: 'Ա-Ֆՙ-՟ա-և֊֍-֏ﬓ-ﬗ'
	    }, {
	        name: 'Avestan',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Balinese',
	        bmp: 'ᬀ-ᭋ᭐-᭼'
	    }, {
	        name: 'Bamum',
	        bmp: 'ꚠ-꛷',
	        astral: '�[�-�]'
	    }, {
	        name: 'Bassa_Vah',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Batak',
	        bmp: 'ᯀ-᯳᯼-᯿'
	    }, {
	        name: 'Bengali',
	        bmp: 'ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৻'
	    }, {
	        name: 'Bopomofo',
	        bmp: '˪˫ㄅ-ㄭㆠ-ㆺ'
	    }, {
	        name: 'Brahmi',
	        astral: '�[�-��-��]'
	    }, {
	        name: 'Braille',
	        bmp: '⠀-⣿'
	    }, {
	        name: 'Buginese',
	        bmp: 'ᨀ-ᨛ᨞᨟'
	    }, {
	        name: 'Buhid',
	        bmp: 'ᝀ-ᝓ'
	    }, {
	        name: 'Canadian_Aboriginal',
	        bmp: '᐀-ᙿᢰ-ᣵ'
	    }, {
	        name: 'Carian',
	        astral: '�[�-�]'
	    }, {
	        name: 'Caucasian_Albanian',
	        astral: '�[�-��]'
	    }, {
	        name: 'Chakma',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Cham',
	        bmp: 'ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟'
	    }, {
	        name: 'Cherokee',
	        bmp: 'Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ'
	    }, {
	        name: 'Common',
	        bmp: '\u0000-@\\x5B-`\\x7B-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؜؟ـ۝।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₾℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-⏺␀-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⸀-⹂⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫﻿！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�',
	        astral: '�[�-��-��-��-��-��-��-��]|�[�-�]|�[�-��-�������-��-���-��-��-��-��-��-��-��-���-��-��-��-�]|�[��-�]|�[�-��-��-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-��-����-��-��-��-�]|�[�-��-��-��-��-��-��-��-��-��-��-����-��-����-�]'
	    }, {
	        name: 'Coptic',
	        bmp: 'Ϣ-ϯⲀ-ⳳ⳹-⳿'
	    }, {
	        name: 'Cuneiform',
	        astral: '�[�-��-��-�]|�[�-�]'
	    }, {
	        name: 'Cypriot',
	        astral: '�[�-���-�����]'
	    }, {
	        name: 'Cyrillic',
	        bmp: 'Ѐ-҄҇-ԯᴫᵸⷠ-ⷿꙀ-ꚟ︮︯'
	    }, {
	        name: 'Deseret',
	        astral: '�[�-�]'
	    }, {
	        name: 'Devanagari',
	        bmp: 'ऀ-ॐ॓-ॣ०-ॿ꣠-ꣽ'
	    }, {
	        name: 'Duployan',
	        astral: '�[�-��-��-��-��-�]'
	    }, {
	        name: 'Egyptian_Hieroglyphs',
	        astral: '�[�-�]|�[�-�]'
	    }, {
	        name: 'Elbasan',
	        astral: '�[�-�]'
	    }, {
	        name: 'Ethiopic',
	        bmp: 'ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ'
	    }, {
	        name: 'Georgian',
	        bmp: 'Ⴀ-ჅჇჍა-ჺჼ-ჿⴀ-ⴥⴧⴭ'
	    }, {
	        name: 'Glagolitic',
	        bmp: 'Ⰰ-Ⱞⰰ-ⱞ'
	    }, {
	        name: 'Gothic',
	        astral: '�[�-�]'
	    }, {
	        name: 'Grantha',
	        astral: '�[�-��-����-��-����-��-����-����-��-��-�]'
	    }, {
	        name: 'Greek',
	        bmp: 'Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ',
	        astral: '�[�-��]|�[�-�]'
	    }, {
	        name: 'Gujarati',
	        bmp: 'ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ'
	    }, {
	        name: 'Gurmukhi',
	        bmp: 'ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵ'
	    }, {
	        name: 'Han',
	        bmp: '⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿕豈-舘並-龎',
	        astral: '�[�-��-�]|[�-��-��-�][�-�]|�[�-��-�]|�[�-�]|�[�-��-�]|�[�-�]'
	    }, {
	        name: 'Hangul',
	        bmp: 'ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ'
	    }, {
	        name: 'Hanunoo',
	        bmp: 'ᜠ-᜴'
	    }, {
	        name: 'Hatran',
	        astral: '�[�-����-�]'
	    }, {
	        name: 'Hebrew',
	        bmp: '֑-ׇא-תװ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ'
	    }, {
	        name: 'Hiragana',
	        bmp: 'ぁ-ゖゝ-ゟ',
	        astral: '𛀁|🈀'
	    }, {
	        name: 'Imperial_Aramaic',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Inherited',
	        bmp: '̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷵᷼-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭',
	        astral: '�[�-��-��-��-�]|�[��]|�[�-�]'
	    }, {
	        name: 'Inscriptional_Pahlavi',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Inscriptional_Parthian',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Javanese',
	        bmp: 'ꦀ-꧍꧐-꧙꧞꧟'
	    }, {
	        name: 'Kaithi',
	        astral: '�[�-�]'
	    }, {
	        name: 'Kannada',
	        bmp: 'ಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ'
	    }, {
	        name: 'Katakana',
	        bmp: 'ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ',
	        astral: '𛀀'
	    }, {
	        name: 'Kayah_Li',
	        bmp: '꤀-꤭꤯'
	    }, {
	        name: 'Kharoshthi',
	        astral: '�[�-����-��-��-��-��-��-�]'
	    }, {
	        name: 'Khmer',
	        bmp: 'ក-៝០-៩៰-៹᧠-᧿'
	    }, {
	        name: 'Khojki',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Khudawadi',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Lao',
	        bmp: 'ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ'
	    }, {
	        name: 'Latin',
	        bmp: 'A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ'
	    }, {
	        name: 'Lepcha',
	        bmp: 'ᰀ-᰷᰻-᱉ᱍ-ᱏ'
	    }, {
	        name: 'Limbu',
	        bmp: 'ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏'
	    }, {
	        name: 'Linear_A',
	        astral: '�[�-��-��-�]'
	    }, {
	        name: 'Linear_B',
	        astral: '�[�-��-��-����-��-��-�]'
	    }, {
	        name: 'Lisu',
	        bmp: 'ꓐ-꓿'
	    }, {
	        name: 'Lycian',
	        astral: '�[�-�]'
	    }, {
	        name: 'Lydian',
	        astral: '�[�-��]'
	    }, {
	        name: 'Mahajani',
	        astral: '�[�-�]'
	    }, {
	        name: 'Malayalam',
	        bmp: 'ഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൟ-ൣ൦-൵൹-ൿ'
	    }, {
	        name: 'Mandaic',
	        bmp: 'ࡀ-࡛࡞'
	    }, {
	        name: 'Manichaean',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Meetei_Mayek',
	        bmp: 'ꫠ-꫶ꯀ-꯭꯰-꯹'
	    }, {
	        name: 'Mende_Kikakui',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Meroitic_Cursive',
	        astral: '�[�-��-��-�]'
	    }, {
	        name: 'Meroitic_Hieroglyphs',
	        astral: '�[�-�]'
	    }, {
	        name: 'Miao',
	        astral: '�[�-��-��-�]'
	    }, {
	        name: 'Modi',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Mongolian',
	        bmp: '᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡷᢀ-ᢪ'
	    }, {
	        name: 'Mro',
	        astral: '�[�-��-���]'
	    }, {
	        name: 'Multani',
	        astral: '�[�-���-��-��-�]'
	    }, {
	        name: 'Myanmar',
	        bmp: 'က-႟ꧠ-ꧾꩠ-ꩿ'
	    }, {
	        name: 'Nabataean',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'New_Tai_Lue',
	        bmp: 'ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟'
	    }, {
	        name: 'Nko',
	        bmp: '߀-ߺ'
	    }, {
	        name: 'Ogham',
	        bmp: ' -᚜'
	    }, {
	        name: 'Ol_Chiki',
	        bmp: '᱐-᱿'
	    }, {
	        name: 'Old_Hungarian',
	        astral: '�[�-��-��-�]'
	    }, {
	        name: 'Old_Italic',
	        astral: '�[�-�]'
	    }, {
	        name: 'Old_North_Arabian',
	        astral: '�[�-�]'
	    }, {
	        name: 'Old_Permic',
	        astral: '�[�-�]'
	    }, {
	        name: 'Old_Persian',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Old_South_Arabian',
	        astral: '�[�-�]'
	    }, {
	        name: 'Old_Turkic',
	        astral: '�[�-�]'
	    }, {
	        name: 'Oriya',
	        bmp: 'ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷'
	    }, {
	        name: 'Osmanya',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Pahawh_Hmong',
	        astral: '�[�-��-��-��-��-�]'
	    }, {
	        name: 'Palmyrene',
	        astral: '�[�-�]'
	    }, {
	        name: 'Pau_Cin_Hau',
	        astral: '�[�-�]'
	    }, {
	        name: 'Phags_Pa',
	        bmp: 'ꡀ-꡷'
	    }, {
	        name: 'Phoenician',
	        astral: '�[�-��]'
	    }, {
	        name: 'Psalter_Pahlavi',
	        astral: '�[�-��-��-�]'
	    }, {
	        name: 'Rejang',
	        bmp: 'ꤰ-꥓꥟'
	    }, {
	        name: 'Runic',
	        bmp: 'ᚠ-ᛪᛮ-ᛸ'
	    }, {
	        name: 'Samaritan',
	        bmp: 'ࠀ-࠭࠰-࠾'
	    }, {
	        name: 'Saurashtra',
	        bmp: 'ꢀ-꣄꣎-꣙'
	    }, {
	        name: 'Sharada',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Shavian',
	        astral: '�[�-�]'
	    }, {
	        name: 'Siddham',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'SignWriting',
	        astral: '�[�-��-��-�]'
	    }, {
	        name: 'Sinhala',
	        bmp: 'ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴',
	        astral: '�[�-�]'
	    }, {
	        name: 'Sora_Sompeng',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Sundanese',
	        bmp: 'ᮀ-ᮿ᳀-᳇'
	    }, {
	        name: 'Syloti_Nagri',
	        bmp: 'ꠀ-꠫'
	    }, {
	        name: 'Syriac',
	        bmp: '܀-܍܏-݊ݍ-ݏ'
	    }, {
	        name: 'Tagalog',
	        bmp: 'ᜀ-ᜌᜎ-᜔'
	    }, {
	        name: 'Tagbanwa',
	        bmp: 'ᝠ-ᝬᝮ-ᝰᝲᝳ'
	    }, {
	        name: 'Tai_Le',
	        bmp: 'ᥐ-ᥭᥰ-ᥴ'
	    }, {
	        name: 'Tai_Tham',
	        bmp: 'ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭'
	    }, {
	        name: 'Tai_Viet',
	        bmp: 'ꪀ-ꫂꫛ-꫟'
	    }, {
	        name: 'Takri',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Tamil',
	        bmp: 'ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺'
	    }, {
	        name: 'Telugu',
	        bmp: 'ఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿'
	    }, {
	        name: 'Thaana',
	        bmp: 'ހ-ޱ'
	    }, {
	        name: 'Thai',
	        bmp: 'ก-ฺเ-๛'
	    }, {
	        name: 'Tibetan',
	        bmp: 'ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚'
	    }, {
	        name: 'Tifinagh',
	        bmp: 'ⴰ-ⵧⵯ⵰⵿'
	    }, {
	        name: 'Tirhuta',
	        astral: '�[�-��-�]'
	    }, {
	        name: 'Ugaritic',
	        astral: '�[�-��]'
	    }, {
	        name: 'Vai',
	        bmp: 'ꔀ-ꘫ'
	    }, {
	        name: 'Warang_Citi',
	        astral: '�[�-��]'
	    }, {
	        name: 'Yi',
	        bmp: 'ꀀ-ꒌ꒐-꓆'
	    }]);
	};

/***/ }
/******/ ])
});
;