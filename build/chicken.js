(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"), require("_"), require("s"), require("XRegExp"), require("moment"), require("HTMLBars"));
	else if(typeof define === 'function' && define.amd)
		define(["$", "_", "s", "XRegExp", "moment", "HTMLBars"], factory);
	else if(typeof exports === 'object')
		exports["Chicken"] = factory(require("$"), require("_"), require("s"), require("XRegExp"), require("moment"), require("HTMLBars"));
	else
		root["Chicken"] = factory(root["$"], root["_"], root["s"], root["XRegExp"], root["moment"], root["HTMLBars"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_298__, __WEBPACK_EXTERNAL_MODULE_299__, __WEBPACK_EXTERNAL_MODULE_300__, __WEBPACK_EXTERNAL_MODULE_301__, __WEBPACK_EXTERNAL_MODULE_304__, __WEBPACK_EXTERNAL_MODULE_339__) {
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

	__webpack_require__(1);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _underscore3 = __webpack_require__(300);

	var _underscore4 = _interopRequireDefault(_underscore3);

	var _xregexp = __webpack_require__(301);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _Application = __webpack_require__(303);

	var _Application2 = _interopRequireDefault(_Application);

	var _Api = __webpack_require__(367);

	var _Api2 = _interopRequireDefault(_Api);

	var _ApiCall = __webpack_require__(347);

	var _ApiCall2 = _interopRequireDefault(_ApiCall);

	var _JsonApi = __webpack_require__(368);

	var _JsonApi2 = _interopRequireDefault(_JsonApi);

	var _JsonApiCall = __webpack_require__(369);

	var _JsonApiCall2 = _interopRequireDefault(_JsonApiCall);

	var _PrimitiveJsonApi = __webpack_require__(370);

	var _PrimitiveJsonApi2 = _interopRequireDefault(_PrimitiveJsonApi);

	var _PrimitiveJsonApiCall = __webpack_require__(371);

	var _PrimitiveJsonApiCall2 = _interopRequireDefault(_PrimitiveJsonApiCall);

	var _Auth = __webpack_require__(372);

	var _Auth2 = _interopRequireDefault(_Auth);

	var _JWTAuth = __webpack_require__(373);

	var _JWTAuth2 = _interopRequireDefault(_JWTAuth);

	var _ComputedProperty = __webpack_require__(333);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

	var _Obj = __webpack_require__(330);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _Observable = __webpack_require__(329);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(340);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Reference = __webpack_require__(331);

	var _Reference2 = _interopRequireDefault(_Reference);

	var _SettingsObject = __webpack_require__(334);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _Collection = __webpack_require__(351);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _Model2 = __webpack_require__(349);

	var _Model3 = _interopRequireDefault(_Model2);

	var _ModelAttribute = __webpack_require__(375);

	var _ModelAttribute2 = _interopRequireDefault(_ModelAttribute);

	var _ModelDefinition = __webpack_require__(376);

	var _ModelDefinition2 = _interopRequireDefault(_ModelDefinition);

	var _ModelStore = __webpack_require__(350);

	var _ModelStore2 = _interopRequireDefault(_ModelStore);

	var _Pivot = __webpack_require__(379);

	var _Pivot2 = _interopRequireDefault(_Pivot);

	var _Relationship = __webpack_require__(377);

	var _Relationship2 = _interopRequireDefault(_Relationship);

	var _Service2 = __webpack_require__(365);

	var _Service3 = _interopRequireDefault(_Service2);

	var _ActionBinding = __webpack_require__(342);

	var _ActionBinding2 = _interopRequireDefault(_ActionBinding);

	var _Binding = __webpack_require__(341);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _Component = __webpack_require__(344);

	var _Component2 = _interopRequireDefault(_Component);

	var _ComponentDefinition = __webpack_require__(353);

	var _ComponentDefinition2 = _interopRequireDefault(_ComponentDefinition);

	var _Element = __webpack_require__(337);

	var _Element2 = _interopRequireDefault(_Element);

	var _Helpers = __webpack_require__(354);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	var _Renderer = __webpack_require__(338);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _View = __webpack_require__(345);

	var _View2 = _interopRequireDefault(_View);

	var _ViewContainer = __webpack_require__(336);

	var _ViewContainer2 = _interopRequireDefault(_ViewContainer);

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	var _Chainable = __webpack_require__(335);

	var _Chainable2 = _interopRequireDefault(_Chainable);

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Utils = __webpack_require__(352);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _I18n = __webpack_require__(366);

	var _I18n2 = _interopRequireDefault(_I18n);

	var _Action = __webpack_require__(359);

	var _Action2 = _interopRequireDefault(_Action);

	var _Controller2 = __webpack_require__(361);

	var _Controller3 = _interopRequireDefault(_Controller2);

	var _FakeHistory = __webpack_require__(380);

	var _FakeHistory2 = _interopRequireDefault(_FakeHistory);

	var _Middleware = __webpack_require__(364);

	var _Middleware2 = _interopRequireDefault(_Middleware);

	var _Redirect = __webpack_require__(360);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _Request = __webpack_require__(363);

	var _Request2 = _interopRequireDefault(_Request);

	var _Route = __webpack_require__(357);

	var _Route2 = _interopRequireDefault(_Route);

	var _RouteMatch = __webpack_require__(358);

	var _RouteMatch2 = _interopRequireDefault(_RouteMatch);

	var _Router = __webpack_require__(356);

	var _Router2 = _interopRequireDefault(_Router);

	var _RoutingError = __webpack_require__(362);

	var _RoutingError2 = _interopRequireDefault(_RoutingError);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: "off" */

	//////////////////////
	// Vendor libraries //
	//////////////////////

	///////////////////////////////////////
	// Make sure dependencies are loaded //
	///////////////////////////////////////
	if (_jquery2.default === undefined || typeof _jquery2.default !== 'function') throw new Error('Error while initializing Chicken: could not find global jQuery ($). Was jQuery not loaded?');
	if (_underscore2.default === undefined || typeof _underscore2.default !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore (_). Was Underscore not loaded?');
	if (_xregexp2.default === undefined || typeof _xregexp2.default !== 'function') throw new Error('Error while initializing Chicken: could not find global XRegExp. Was XRegExp not loaded?');
	if (_underscore4.default === undefined || typeof _underscore4.default !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore.string (s). Was Underscore.string not loaded?');

	// Mixin underscore string
	_underscore2.default.mixin(_underscore4.default.exports());

	/////////////////////
	// Chicken Classes //
	/////////////////////

	// Api


	// Auth


	// Core


	// Data


	// Dom


	// Helpers


	// Localization


	// Routing


	/////////////////////////////
	// Chicken Package exports //
	/////////////////////////////

	var Chicken = {

		////////////////
		// Class tree //
		////////////////

		Api: {
			Api: _Api2.default,
			ApiCall: _ApiCall2.default,
			JsonApi: _JsonApi2.default,
			JsonApiCall: _JsonApiCall2.default,
			PrimitiveJsonApi: _PrimitiveJsonApi2.default,
			PrimitiveJsonApiCall: _PrimitiveJsonApiCall2.default
		},

		Application: _Application2.default,

		Auth: {
			Auth: _Auth2.default,
			JWTAuth: _JWTAuth2.default
		},

		Core: {
			ComputedProperty: _ComputedProperty2.default,
			Obj: _Obj2.default,
			Observable: _Observable2.default,
			ObservableArray: _ObservableArray2.default,
			Reference: _Reference2.default,
			SettingsObject: _SettingsObject2.default
		},

		Data: {

			Collection: _Collection2.default,
			Model: _Model3.default,
			ModelAttribute: _ModelAttribute2.default,
			ModelDefinition: _ModelDefinition2.default,
			ModelStore: _ModelStore2.default,
			Pivot: _Pivot2.default,
			Relationship: _Relationship2.default,
			Service: _Service3.default
		},

		Dom: {
			ActionBinding: _ActionBinding2.default,
			Binding: _Binding2.default,
			Component: _Component2.default,
			ComponentDefinition: _ComponentDefinition2.default,
			Element: _Element2.default,
			Helpers: _Helpers2.default,
			Renderer: _Renderer2.default,
			View: _View2.default,
			ViewContainer: _ViewContainer2.default
		},

		Helpers: {
			App: _App2.default,
			Chainable: _Chainable2.default,
			ClassMap: _ClassMap2.default,
			Utils: _Utils2.default
		},

		Localization: {
			I18n: _I18n2.default
		},

		Routing: {
			Action: _Action2.default,
			Controller: _Controller3.default,
			FakeHistory: _FakeHistory2.default,
			Middleware: _Middleware2.default,
			Redirect: _Redirect2.default,
			Request: _Request2.default,
			Route: _Route2.default,
			RouteMatch: _RouteMatch2.default,
			Router: _Router2.default,
			RoutingError: _RoutingError2.default
		},

		inflection: _inflection2.default,

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

		api: function api() {
			var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

			return _Application2.default.getInstance().apis[key];
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

					return _possibleConstructorReturn(this, (ChickenController.__proto__ || Object.getPrototypeOf(ChickenController)).call(this, action));
				}

				return ChickenController;
			}(_Controller3.default);
			_jquery2.default.extend(ChickenController.prototype, actions);

			// Store it
			_Controller3.default.registry.set(name, ChickenController);

			return ChickenController;
		},

		component: function component(name, source, initCallback) {
			var methods = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
			var renderer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
			var overwrite = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;


			// Create definition
			var def = new _ComponentDefinition2.default(name, source, initCallback, methods, renderer);

			// Register it.
			if (_Component2.default.registry.has(name) && !overwrite) throw new Error('A component with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
			_Component2.default.registry.set(name, def);

			return def;
		},

		helper: function helper(name, callback) {
			var renderer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


			// Already there?
			if (Chicken.Dom.Helpers.User[name] !== undefined && overwrite !== true) {
				throw new Error('A helper with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
			}

			// Register
			Chicken.Dom.Helpers.User[name] = callback;
			return Chicken.Dom.Helpers.User;
		},

		model: function model(name) {
			var configCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var methods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


			// Getter?
			if (configCallback === null) {

				// Get from registry
				return _Model3.default.registry.get(name);
			}

			// Create class
			var ChickenModel = function (_Model) {
				_inherits(ChickenModel, _Model);

				function ChickenModel() {
					var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
					var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

					_classCallCheck(this, ChickenModel);

					return _possibleConstructorReturn(this, (ChickenModel.__proto__ || Object.getPrototypeOf(ChickenModel)).call(this, initValues, convertToObservables));
				}

				return ChickenModel;
			}(_Model3.default);

			// Add given methods to prototype
			if (methods) {
				_jquery2.default.extend(ChickenModel.prototype, methods);
			}

			// Configure it.
			ChickenModel.definition = new _ModelDefinition2.default(name, configCallback);
			ChickenModel.modelName = name;

			ChickenModel.create = function () {
				var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


				return new ChickenModel(initValues, convertToObservables);
			};

			// Store it.
			_Model3.default.registry.set(name, ChickenModel);
			return ChickenModel;
		},

		extendModel: function extendModel(name, configCallback) {
			var methods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


			// Get the class
			var ChickenModel = _Model3.default.registry.get(name);
			if (!ChickenModel) throw new Error('Cannot extend unknown model ' + name);

			// Add given methods to prototype
			if (methods) {
				_jquery2.default.extend(ChickenModel.prototype, methods);
			}

			// Apply config callback
			configCallback.apply(ChickenModel.definition, [ChickenModel.definition]);

			return ChickenModel;
		},

		service: function service(name) {
			var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


			// Getter?
			if (methods === null) {
				return _Service3.default.get(name);
			}

			// Create class
			var ChickenService = function (_Service) {
				_inherits(ChickenService, _Service);

				function ChickenService() {
					_classCallCheck(this, ChickenService);

					return _possibleConstructorReturn(this, (ChickenService.__proto__ || Object.getPrototypeOf(ChickenService)).call(this, name));
				}

				return ChickenService;
			}(_Service3.default);

			// Add given methods to prototype
			_jquery2.default.extend(ChickenService.prototype, methods);

			// Configure it.
			ChickenService.serviceName = name;

			// Store it.
			_Service3.default.registry.set(name, ChickenService);
			return ChickenService;
		},

		middleware: function middleware(name) {
			var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


			// Getter?
			if (callback === null) {
				return _Middleware2.default.registry.get(name);
			}

			// Make it a middleware instance
			var middleware = new _Middleware2.default(name, callback);

			// Store it
			_Middleware2.default.registry.set(name, middleware);
			return middleware;
		},

		redirect: function redirect(uri) {
			return new _Redirect2.default(uri);
		},
		redirectNamed: function redirectNamed(name) {
			var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


			// Relative route?
			var app = _Application2.default.getInstance();
			if (/^\./.test(name)) {

				// Current name?
				var curName = app && app.currentRoute ? app.currentRoute.route.name : false;
				if (!curName) throw new Error('The current route does not have a name, so relative links are not possible from here');

				// ..? (Level up)
				if (/^\.\./.test(name)) {

					// Remove last part
					var parts = curName.split(/\./);
					parts.pop();
					curName = parts.join('.');
					name = name.replace(/^\./, '');
				}

				// Add it.
				name = curName + name;

				// Remove any trailing dots
				name = name.replace(/\.+$/, '');
			}

			// Find route
			var route = app.router.namedRoutes.get(name);
			if (!route) throw new Error('There is no route with the name "' + name + '"');

			// Make uri
			var uri = route.makeUrl(attributes);

			return new _Redirect2.default(uri);
		},

		computed: function computed(dependencies, callback) {

			return new _ComputedProperty2.default(dependencies, callback);
		},

		observable: function observable() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


			return new _Observable2.default(data);
		},

		view: function view() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return new (Function.prototype.bind.apply(_View2.default, [null].concat(args)))();
		},

		/////////////
		// Helpers //
		/////////////

		each: function each() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			return _Utils2.default.each.apply(undefined, args);
		},

		map: function map() {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			return _Utils2.default.map.apply(undefined, args);
		},

		debug: function debug(message) {
			var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


			switch (Chicken.debugging) {

				case 'console':
					console.log((key ? '[' + key + '] ' : '') + message);
					break;

			}
		},

		getValue: function getValue(obj) {
			return _Utils2.default.getValue(obj);
		},

		translate: function translate(key) {
			var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return _Application2.default.getInstance().i18n.translate(key, attributes);
		},

		debugging: 'console'

	};

	module.exports = Chicken;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(293);

	__webpack_require__(295);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);

	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);

	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);

	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);

	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);

	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);

	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});

	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {fill: __webpack_require__(188)});

	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);

	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
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
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
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
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_298__;

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_299__;

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_300__;

/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_301__;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * inflection
	 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
	 * MIT Licensed
	 *
	 * @fileoverview
	 * A port of inflection-js to node.js module.
	 */

	( function ( root, factory ){
	  if( true ){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }else if( typeof exports === 'object' ){
	    module.exports = factory();
	  }else{
	    root.inflection = factory();
	  }
	}( this, function (){

	  /**
	   * @description This is a list of nouns that use the same form for both singular and plural.
	   *              This list should remain entirely in lower case to correctly match Strings.
	   * @private
	   */
	  var uncountable_words = [
	    // 'access',
	    'accommodation',
	    'adulthood',
	    'advertising',
	    'advice',
	    'aggression',
	    'aid',
	    'air',
	    'aircraft',
	    'alcohol',
	    'anger',
	    'applause',
	    'arithmetic',
	    // 'art',
	    'assistance',
	    'athletics',
	    // 'attention',

	    'bacon',
	    'baggage',
	    // 'ballet',
	    // 'beauty',
	    'beef',
	    // 'beer',
	    // 'behavior',
	    'biology',
	    // 'billiards',
	    'blood',
	    'botany',
	    // 'bowels',
	    'bread',
	    // 'business',
	    'butter',

	    'carbon',
	    'cardboard',
	    'cash',
	    'chalk',
	    'chaos',
	    'chess',
	    'crossroads',
	    'countryside',

	    // 'damage',
	    'dancing',
	    // 'danger',
	    'deer',
	    // 'delight',
	    // 'dessert',
	    'dignity',
	    'dirt',
	    // 'distribution',
	    'dust',

	    'economics',
	    'education',
	    'electricity',
	    // 'employment',
	    // 'energy',
	    'engineering',
	    'enjoyment',
	    // 'entertainment',
	    'envy',
	    'equipment',
	    'ethics',
	    'evidence',
	    'evolution',

	    // 'failure',
	    // 'faith',
	    'fame',
	    'fiction',
	    // 'fish',
	    'flour',
	    'flu',
	    'food',
	    // 'freedom',
	    // 'fruit',
	    'fuel',
	    'fun',
	    // 'funeral',
	    'furniture',

	    'gallows',
	    'garbage',
	    'garlic',
	    // 'gas',
	    'genetics',
	    // 'glass',
	    'gold',
	    'golf',
	    'gossip',
	    'grammar',
	    // 'grass',
	    'gratitude',
	    'grief',
	    // 'ground',
	    'guilt',
	    'gymnastics',

	    // 'hair',
	    'happiness',
	    'hardware',
	    'harm',
	    'hate',
	    'hatred',
	    'health',
	    'heat',
	    // 'height',
	    'help',
	    'homework',
	    'honesty',
	    'honey',
	    'hospitality',
	    'housework',
	    'humour',
	    'hunger',
	    'hydrogen',

	    'ice',
	    'importance',
	    'inflation',
	    'information',
	    // 'injustice',
	    'innocence',
	    // 'intelligence',
	    'iron',
	    'irony',

	    'jam',
	    // 'jealousy',
	    // 'jelly',
	    'jewelry',
	    // 'joy',
	    'judo',
	    // 'juice',
	    // 'justice',

	    'karate',
	    // 'kindness',
	    'knowledge',

	    // 'labour',
	    'lack',
	    // 'land',
	    'laughter',
	    'lava',
	    'leather',
	    'leisure',
	    'lightning',
	    'linguine',
	    'linguini',
	    'linguistics',
	    'literature',
	    'litter',
	    'livestock',
	    'logic',
	    'loneliness',
	    // 'love',
	    'luck',
	    'luggage',

	    'macaroni',
	    'machinery',
	    'magic',
	    // 'mail',
	    'management',
	    'mankind',
	    'marble',
	    'mathematics',
	    'mayonnaise',
	    'measles',
	    // 'meat',
	    // 'metal',
	    'methane',
	    'milk',
	    'money',
	    // 'moose',
	    'mud',
	    'music',
	    'mumps',

	    'nature',
	    'news',
	    'nitrogen',
	    'nonsense',
	    'nurture',
	    'nutrition',

	    'obedience',
	    'obesity',
	    // 'oil',
	    'oxygen',

	    // 'paper',
	    // 'passion',
	    'pasta',
	    'patience',
	    // 'permission',
	    'physics',
	    'poetry',
	    'pollution',
	    'poverty',
	    // 'power',
	    'pride',
	    // 'production',
	    // 'progress',
	    // 'pronunciation',
	    'psychology',
	    'publicity',
	    'punctuation',

	    // 'quality',
	    // 'quantity',
	    'quartz',

	    'racism',
	    // 'rain',
	    // 'recreation',
	    'relaxation',
	    'reliability',
	    'research',
	    'respect',
	    'revenge',
	    'rice',
	    'rubbish',
	    'rum',

	    'safety',
	    // 'salad',
	    // 'salt',
	    // 'sand',
	    // 'satire',
	    'scenery',
	    'seafood',
	    'seaside',
	    'series',
	    'shame',
	    'sheep',
	    'shopping',
	    // 'silence',
	    'sleep',
	    // 'slang'
	    'smoke',
	    'smoking',
	    'snow',
	    'soap',
	    'software',
	    'soil',
	    // 'sorrow',
	    // 'soup',
	    'spaghetti',
	    // 'speed',
	    'species',
	    // 'spelling',
	    // 'sport',
	    'steam',
	    // 'strength',
	    'stuff',
	    'stupidity',
	    // 'success',
	    // 'sugar',
	    'sunshine',
	    'symmetry',

	    // 'tea',
	    'tennis',
	    'thirst',
	    'thunder',
	    'timber',
	    // 'time',
	    // 'toast',
	    // 'tolerance',
	    // 'trade',
	    'traffic',
	    'transportation',
	    // 'travel',
	    'trust',

	    // 'understanding',
	    'underwear',
	    'unemployment',
	    'unity',
	    // 'usage',

	    'validity',
	    'veal',
	    'vegetation',
	    'vegetarianism',
	    'vengeance',
	    'violence',
	    // 'vision',
	    'vitality',

	    'warmth',
	    // 'water',
	    'wealth',
	    'weather',
	    // 'weight',
	    'welfare',
	    'wheat',
	    // 'whiskey',
	    // 'width',
	    'wildlife',
	    // 'wine',
	    'wisdom',
	    // 'wood',
	    // 'wool',
	    // 'work',

	    // 'yeast',
	    'yoga',

	    'zinc',
	    'zoology'
	  ];

	  /**
	   * @description These rules translate from the singular form of a noun to its plural form.
	   * @private
	   */

	  var regex = {
	    plural : {
	      men       : new RegExp( '^(m|wom)en$'                    , 'gi' ),
	      people    : new RegExp( '(pe)ople$'                      , 'gi' ),
	      children  : new RegExp( '(child)ren$'                    , 'gi' ),
	      tia       : new RegExp( '([ti])a$'                       , 'gi' ),
	      analyses  : new RegExp( '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi' ),
	      hives     : new RegExp( '(hi|ti)ves$'                    , 'gi' ),
	      curves    : new RegExp( '(curve)s$'                      , 'gi' ),
	      lrves     : new RegExp( '([lr])ves$'                     , 'gi' ),
	      foves     : new RegExp( '([^fo])ves$'                    , 'gi' ),
	      movies    : new RegExp( '(m)ovies$'                      , 'gi' ),
	      aeiouyies : new RegExp( '([^aeiouy]|qu)ies$'             , 'gi' ),
	      series    : new RegExp( '(s)eries$'                      , 'gi' ),
	      xes       : new RegExp( '(x|ch|ss|sh)es$'                , 'gi' ),
	      mice      : new RegExp( '([m|l])ice$'                    , 'gi' ),
	      buses     : new RegExp( '(bus)es$'                       , 'gi' ),
	      oes       : new RegExp( '(o)es$'                         , 'gi' ),
	      shoes     : new RegExp( '(shoe)s$'                       , 'gi' ),
	      crises    : new RegExp( '(cris|ax|test)es$'              , 'gi' ),
	      octopi    : new RegExp( '(octop|vir)i$'                  , 'gi' ),
	      aliases   : new RegExp( '(alias|canvas|status|campus)es$', 'gi' ),
	      summonses : new RegExp( '^(summons)es$'                  , 'gi' ),
	      oxen      : new RegExp( '^(ox)en'                        , 'gi' ),
	      matrices  : new RegExp( '(matr)ices$'                    , 'gi' ),
	      vertices  : new RegExp( '(vert|ind)ices$'                , 'gi' ),
	      feet      : new RegExp( '^feet$'                         , 'gi' ),
	      teeth     : new RegExp( '^teeth$'                        , 'gi' ),
	      geese     : new RegExp( '^geese$'                        , 'gi' ),
	      quizzes   : new RegExp( '(quiz)zes$'                     , 'gi' ),
	      whereases : new RegExp( '^(whereas)es$'                  , 'gi' ),
	      criteria  : new RegExp( '^(criteri)a$'                   , 'gi' ),
	      genera    : new RegExp( '^genera$'                       , 'gi' ),
	      ss        : new RegExp( 'ss$'                            , 'gi' ),
	      s         : new RegExp( 's$'                             , 'gi' )
	    },

	    singular : {
	      man       : new RegExp( '^(m|wom)an$'                  , 'gi' ),
	      person    : new RegExp( '(pe)rson$'                    , 'gi' ),
	      child     : new RegExp( '(child)$'                     , 'gi' ),
	      ox        : new RegExp( '^(ox)$'                       , 'gi' ),
	      axis      : new RegExp( '(ax|test)is$'                 , 'gi' ),
	      octopus   : new RegExp( '(octop|vir)us$'               , 'gi' ),
	      alias     : new RegExp( '(alias|status|canvas|campus)$', 'gi' ),
	      summons   : new RegExp( '^(summons)$'                  , 'gi' ),
	      bus       : new RegExp( '(bu)s$'                       , 'gi' ),
	      buffalo   : new RegExp( '(buffal|tomat|potat)o$'       , 'gi' ),
	      tium      : new RegExp( '([ti])um$'                    , 'gi' ),
	      sis       : new RegExp( 'sis$'                         , 'gi' ),
	      ffe       : new RegExp( '(?:([^f])fe|([lr])f)$'        , 'gi' ),
	      hive      : new RegExp( '(hi|ti)ve$'                   , 'gi' ),
	      aeiouyy   : new RegExp( '([^aeiouy]|qu)y$'             , 'gi' ),
	      x         : new RegExp( '(x|ch|ss|sh)$'                , 'gi' ),
	      matrix    : new RegExp( '(matr)ix$'                    , 'gi' ),
	      vertex    : new RegExp( '(vert|ind)ex$'                , 'gi' ),
	      mouse     : new RegExp( '([m|l])ouse$'                 , 'gi' ),
	      foot      : new RegExp( '^foot$'                       , 'gi' ),
	      tooth     : new RegExp( '^tooth$'                      , 'gi' ),
	      goose     : new RegExp( '^goose$'                      , 'gi' ),
	      quiz      : new RegExp( '(quiz)$'                      , 'gi' ),
	      whereas   : new RegExp( '^(whereas)$'                  , 'gi' ),
	      criterion : new RegExp( '^(criteri)on$'                , 'gi' ),
	      genus     : new RegExp( '^genus$'                      , 'gi' ),
	      s         : new RegExp( 's$'                           , 'gi' ),
	      common    : new RegExp( '$'                            , 'gi' )
	    }
	  };

	  var plural_rules = [

	    // do not replace if its already a plural word
	    [ regex.plural.men       ],
	    [ regex.plural.people    ],
	    [ regex.plural.children  ],
	    [ regex.plural.tia       ],
	    [ regex.plural.analyses  ],
	    [ regex.plural.hives     ],
	    [ regex.plural.curves    ],
	    [ regex.plural.lrves     ],
	    [ regex.plural.foves     ],
	    [ regex.plural.aeiouyies ],
	    [ regex.plural.series    ],
	    [ regex.plural.movies    ],
	    [ regex.plural.xes       ],
	    [ regex.plural.mice      ],
	    [ regex.plural.buses     ],
	    [ regex.plural.oes       ],
	    [ regex.plural.shoes     ],
	    [ regex.plural.crises    ],
	    [ regex.plural.octopi    ],
	    [ regex.plural.aliases   ],
	    [ regex.plural.summonses ],
	    [ regex.plural.oxen      ],
	    [ regex.plural.matrices  ],
	    [ regex.plural.feet      ],
	    [ regex.plural.teeth     ],
	    [ regex.plural.geese     ],
	    [ regex.plural.quizzes   ],
	    [ regex.plural.whereases ],
	    [ regex.plural.criteria  ],
	    [ regex.plural.genera    ],

	    // original rule
	    [ regex.singular.man      , '$1en' ],
	    [ regex.singular.person   , '$1ople' ],
	    [ regex.singular.child    , '$1ren' ],
	    [ regex.singular.ox       , '$1en' ],
	    [ regex.singular.axis     , '$1es' ],
	    [ regex.singular.octopus  , '$1i' ],
	    [ regex.singular.alias    , '$1es' ],
	    [ regex.singular.summons  , '$1es' ],
	    [ regex.singular.bus      , '$1ses' ],
	    [ regex.singular.buffalo  , '$1oes' ],
	    [ regex.singular.tium     , '$1a' ],
	    [ regex.singular.sis      , 'ses' ],
	    [ regex.singular.ffe      , '$1$2ves' ],
	    [ regex.singular.hive     , '$1ves' ],
	    [ regex.singular.aeiouyy  , '$1ies' ],
	    [ regex.singular.matrix   , '$1ices' ],
	    [ regex.singular.vertex   , '$1ices' ],
	    [ regex.singular.x        , '$1es' ],
	    [ regex.singular.mouse    , '$1ice' ],
	    [ regex.singular.foot     , 'feet' ],
	    [ regex.singular.tooth    , 'teeth' ],
	    [ regex.singular.goose    , 'geese' ],
	    [ regex.singular.quiz     , '$1zes' ],
	    [ regex.singular.whereas  , '$1es' ],
	    [ regex.singular.criterion, '$1a' ],
	    [ regex.singular.genus    , 'genera' ],

	    [ regex.singular.s     , 's' ],
	    [ regex.singular.common, 's' ]
	  ];

	  /**
	   * @description These rules translate from the plural form of a noun to its singular form.
	   * @private
	   */
	  var singular_rules = [

	    // do not replace if its already a singular word
	    [ regex.singular.man     ],
	    [ regex.singular.person  ],
	    [ regex.singular.child   ],
	    [ regex.singular.ox      ],
	    [ regex.singular.axis    ],
	    [ regex.singular.octopus ],
	    [ regex.singular.alias   ],
	    [ regex.singular.summons ],
	    [ regex.singular.bus     ],
	    [ regex.singular.buffalo ],
	    [ regex.singular.tium    ],
	    [ regex.singular.sis     ],
	    [ regex.singular.ffe     ],
	    [ regex.singular.hive    ],
	    [ regex.singular.aeiouyy ],
	    [ regex.singular.x       ],
	    [ regex.singular.matrix  ],
	    [ regex.singular.mouse   ],
	    [ regex.singular.foot    ],
	    [ regex.singular.tooth   ],
	    [ regex.singular.goose   ],
	    [ regex.singular.quiz    ],
	    [ regex.singular.whereas ],
	    [ regex.singular.criterion ],
	    [ regex.singular.genus ],

	    // original rule
	    [ regex.plural.men      , '$1an' ],
	    [ regex.plural.people   , '$1rson' ],
	    [ regex.plural.children , '$1' ],
	    [ regex.plural.genera   , 'genus'],
	    [ regex.plural.criteria , '$1on'],
	    [ regex.plural.tia      , '$1um' ],
	    [ regex.plural.analyses , '$1$2sis' ],
	    [ regex.plural.hives    , '$1ve' ],
	    [ regex.plural.curves   , '$1' ],
	    [ regex.plural.lrves    , '$1f' ],
	    [ regex.plural.foves    , '$1fe' ],
	    [ regex.plural.movies   , '$1ovie' ],
	    [ regex.plural.aeiouyies, '$1y' ],
	    [ regex.plural.series   , '$1eries' ],
	    [ regex.plural.xes      , '$1' ],
	    [ regex.plural.mice     , '$1ouse' ],
	    [ regex.plural.buses    , '$1' ],
	    [ regex.plural.oes      , '$1' ],
	    [ regex.plural.shoes    , '$1' ],
	    [ regex.plural.crises   , '$1is' ],
	    [ regex.plural.octopi   , '$1us' ],
	    [ regex.plural.aliases  , '$1' ],
	    [ regex.plural.summonses, '$1' ],
	    [ regex.plural.oxen     , '$1' ],
	    [ regex.plural.matrices , '$1ix' ],
	    [ regex.plural.vertices , '$1ex' ],
	    [ regex.plural.feet     , 'foot' ],
	    [ regex.plural.teeth    , 'tooth' ],
	    [ regex.plural.geese    , 'goose' ],
	    [ regex.plural.quizzes  , '$1' ],
	    [ regex.plural.whereases, '$1' ],

	    [ regex.plural.ss, 'ss' ],
	    [ regex.plural.s , '' ]
	  ];

	  /**
	   * @description This is a list of words that should not be capitalized for title case.
	   * @private
	   */
	  var non_titlecased_words = [
	    'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at','by',
	    'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over', 'with', 'for'
	  ];

	  /**
	   * @description These are regular expressions used for converting between String formats.
	   * @private
	   */
	  var id_suffix         = new RegExp( '(_ids|_id)$', 'g' );
	  var underbar          = new RegExp( '_', 'g' );
	  var space_or_underbar = new RegExp( '[\ _]', 'g' );
	  var uppercase         = new RegExp( '([A-Z])', 'g' );
	  var underbar_prefix   = new RegExp( '^_' );

	  var inflector = {

	  /**
	   * A helper method that applies rules based replacement to a String.
	   * @private
	   * @function
	   * @param {String} str String to modify and return based on the passed rules.
	   * @param {Array: [RegExp, String]} rules Regexp to match paired with String to use for replacement
	   * @param {Array: [String]} skip Strings to skip if they match
	   * @param {String} override String to return as though this method succeeded (used to conform to APIs)
	   * @returns {String} Return passed String modified by passed rules.
	   * @example
	   *
	   *     this._apply_rules( 'cows', singular_rules ); // === 'cow'
	   */
	    _apply_rules : function ( str, rules, skip, override ){
	      if( override ){
	        str = override;
	      }else{
	        var ignore = ( inflector.indexOf( skip, str.toLowerCase()) > -1 );

	        if( !ignore ){
	          var i = 0;
	          var j = rules.length;

	          for( ; i < j; i++ ){
	            if( str.match( rules[ i ][ 0 ])){
	              if( rules[ i ][ 1 ] !== undefined ){
	                str = str.replace( rules[ i ][ 0 ], rules[ i ][ 1 ]);
	              }
	              break;
	            }
	          }
	        }
	      }

	      return str;
	    },



	  /**
	   * This lets us detect if an Array contains a given element.
	   * @public
	   * @function
	   * @param {Array} arr The subject array.
	   * @param {Object} item Object to locate in the Array.
	   * @param {Number} from_index Starts checking from this position in the Array.(optional)
	   * @param {Function} compare_func Function used to compare Array item vs passed item.(optional)
	   * @returns {Number} Return index position in the Array of the passed item.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.indexOf([ 'hi','there' ], 'guys' ); // === -1
	   *     inflection.indexOf([ 'hi','there' ], 'hi' ); // === 0
	   */
	    indexOf : function ( arr, item, from_index, compare_func ){
	      if( !from_index ){
	        from_index = -1;
	      }

	      var index = -1;
	      var i     = from_index;
	      var j     = arr.length;

	      for( ; i < j; i++ ){
	        if( arr[ i ]  === item || compare_func && compare_func( arr[ i ], item )){
	          index = i;
	          break;
	        }
	      }

	      return index;
	    },



	  /**
	   * This function adds pluralization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {String} plural Overrides normal output with said String.(optional)
	   * @returns {String} Singular English language nouns are returned in plural form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.pluralize( 'person' ); // === 'people'
	   *     inflection.pluralize( 'octopus' ); // === 'octopi'
	   *     inflection.pluralize( 'Hat' ); // === 'Hats'
	   *     inflection.pluralize( 'person', 'guys' ); // === 'guys'
	   */
	    pluralize : function ( str, plural ){
	      return inflector._apply_rules( str, plural_rules, uncountable_words, plural );
	    },



	  /**
	   * This function adds singularization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {String} singular Overrides normal output with said String.(optional)
	   * @returns {String} Plural English language nouns are returned in singular form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.singularize( 'people' ); // === 'person'
	   *     inflection.singularize( 'octopi' ); // === 'octopus'
	   *     inflection.singularize( 'Hats' ); // === 'Hat'
	   *     inflection.singularize( 'guys', 'person' ); // === 'person'
	   */
	    singularize : function ( str, singular ){
	      return inflector._apply_rules( str, singular_rules, uncountable_words, singular );
	    },


	  /**
	   * This function will pluralize or singularlize a String appropriately based on an integer value
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Number} count The number to base pluralization off of.
	   * @param {String} singular Overrides normal output with said String.(optional)
	   * @param {String} plural Overrides normal output with said String.(optional)
	   * @returns {String} English language nouns are returned in the plural or singular form based on the count.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.inflect( 'people' 1 ); // === 'person'
	   *     inflection.inflect( 'octopi' 1 ); // === 'octopus'
	   *     inflection.inflect( 'Hats' 1 ); // === 'Hat'
	   *     inflection.inflect( 'guys', 1 , 'person' ); // === 'person'
	   *     inflection.inflect( 'person', 2 ); // === 'people'
	   *     inflection.inflect( 'octopus', 2 ); // === 'octopi'
	   *     inflection.inflect( 'Hat', 2 ); // === 'Hats'
	   *     inflection.inflect( 'person', 2, null, 'guys' ); // === 'guys'
	   */
	    inflect : function ( str, count, singular, plural ){
	      count = parseInt( count, 10 );

	      if( isNaN( count )) return str;

	      if( count === 0 || count > 1 ){
	        return inflector._apply_rules( str, plural_rules, uncountable_words, plural );
	      }else{
	        return inflector._apply_rules( str, singular_rules, uncountable_words, singular );
	      }
	    },



	  /**
	   * This function adds camelization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
	   *                                 Passing true will lowercase it.
	   * @returns {String} Lower case underscored words will be returned in camel case.
	   *                  additionally '/' is translated to '::'
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
	   *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
	   */
	    camelize : function ( str, low_first_letter ){
	      var str_path = str.split( '/' );
	      var i        = 0;
	      var j        = str_path.length;
	      var str_arr, init_x, k, l, first;

	      for( ; i < j; i++ ){
	        str_arr = str_path[ i ].split( '_' );
	        k       = 0;
	        l       = str_arr.length;

	        for( ; k < l; k++ ){
	          if( k !== 0 ){
	            str_arr[ k ] = str_arr[ k ].toLowerCase();
	          }

	          first = str_arr[ k ].charAt( 0 );
	          first = low_first_letter && i === 0 && k === 0
	            ? first.toLowerCase() : first.toUpperCase();
	          str_arr[ k ] = first + str_arr[ k ].substring( 1 );
	        }

	        str_path[ i ] = str_arr.join( '' );
	      }

	      return str_path.join( '::' );
	    },



	  /**
	   * This function adds underscore support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} all_upper_case Default is to lowercase and add underscore prefix.(optional)
	   *                  Passing true will return as entered.
	   * @returns {String} Camel cased words are returned as lower cased and underscored.
	   *                  additionally '::' is translated to '/'.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
	   *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
	   *     inflection.underscore( 'MP', true ); // === 'MP'
	   */
	    underscore : function ( str, all_upper_case ){
	      if( all_upper_case && str === str.toUpperCase()) return str;

	      var str_path = str.split( '::' );
	      var i        = 0;
	      var j        = str_path.length;

	      for( ; i < j; i++ ){
	        str_path[ i ] = str_path[ i ].replace( uppercase, '_$1' );
	        str_path[ i ] = str_path[ i ].replace( underbar_prefix, '' );
	      }

	      return str_path.join( '/' ).toLowerCase();
	    },



	  /**
	   * This function adds humanize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
	   *                                 Passing true will lowercase it.
	   * @returns {String} Lower case underscored words will be returned in humanized form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.humanize( 'message_properties' ); // === 'Message properties'
	   *     inflection.humanize( 'message_properties', true ); // === 'message properties'
	   */
	    humanize : function ( str, low_first_letter ){
	      str = str.toLowerCase();
	      str = str.replace( id_suffix, '' );
	      str = str.replace( underbar, ' ' );

	      if( !low_first_letter ){
	        str = inflector.capitalize( str );
	      }

	      return str;
	    },



	  /**
	   * This function adds capitalization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} All characters will be lower case and the first will be upper.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.capitalize( 'message_properties' ); // === 'Message_properties'
	   *     inflection.capitalize( 'message properties', true ); // === 'Message properties'
	   */
	    capitalize : function ( str ){
	      str = str.toLowerCase();

	      return str.substring( 0, 1 ).toUpperCase() + str.substring( 1 );
	    },



	  /**
	   * This function replaces underscores with dashes in the string.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Replaces all spaces or underscores with dashes.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.dasherize( 'message_properties' ); // === 'message-properties'
	   *     inflection.dasherize( 'Message Properties' ); // === 'Message-Properties'
	   */
	    dasherize : function ( str ){
	      return str.replace( space_or_underbar, '-' );
	    },



	  /**
	   * This function adds titleize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Capitalizes words as you would for a book title.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
	   *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
	   */
	    titleize : function ( str ){
	      str         = str.toLowerCase().replace( underbar, ' ' );
	      var str_arr = str.split( ' ' );
	      var i       = 0;
	      var j       = str_arr.length;
	      var d, k, l;

	      for( ; i < j; i++ ){
	        d = str_arr[ i ].split( '-' );
	        k = 0;
	        l = d.length;

	        for( ; k < l; k++){
	          if( inflector.indexOf( non_titlecased_words, d[ k ].toLowerCase()) < 0 ){
	            d[ k ] = inflector.capitalize( d[ k ]);
	          }
	        }

	        str_arr[ i ] = d.join( '-' );
	      }

	      str = str_arr.join( ' ' );
	      str = str.substring( 0, 1 ).toUpperCase() + str.substring( 1 );

	      return str;
	    },



	  /**
	   * This function adds demodulize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Removes module names leaving only class names.(Ruby style)
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
	   */
	    demodulize : function ( str ){
	      var str_arr = str.split( '::' );

	      return str_arr[ str_arr.length - 1 ];
	    },



	  /**
	   * This function adds tableize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Return camel cased words into their underscored plural form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
	   */
	    tableize : function ( str ){
	      str = inflector.underscore( str );
	      str = inflector.pluralize( str );

	      return str;
	    },



	  /**
	   * This function adds classification support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Underscored plural nouns become the camel cased singular form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
	   */
	    classify : function ( str ){
	      str = inflector.camelize( str );
	      str = inflector.singularize( str );

	      return str;
	    },



	  /**
	   * This function adds foreign key support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} drop_id_ubar Default is to seperate id with an underbar at the end of the class name,
	                                 you can pass true to skip it.(optional)
	   * @returns {String} Underscored plural nouns become the camel cased singular form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.foreign_key( 'MessageBusProperty' ); // === 'message_bus_property_id'
	   *     inflection.foreign_key( 'MessageBusProperty', true ); // === 'message_bus_propertyid'
	   */
	    foreign_key : function ( str, drop_id_ubar ){
	      str = inflector.demodulize( str );
	      str = inflector.underscore( str ) + (( drop_id_ubar ) ? ( '' ) : ( '_' )) + 'id';

	      return str;
	    },



	  /**
	   * This function adds ordinalize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Return all found numbers their sequence like '22nd'.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
	   */
	    ordinalize : function ( str ){
	      var str_arr = str.split( ' ' );
	      var i       = 0;
	      var j       = str_arr.length;

	      for( ; i < j; i++ ){
	        var k = parseInt( str_arr[ i ], 10 );

	        if( !isNaN( k )){
	          var ltd = str_arr[ i ].substring( str_arr[ i ].length - 2 );
	          var ld  = str_arr[ i ].substring( str_arr[ i ].length - 1 );
	          var suf = 'th';

	          if( ltd != '11' && ltd != '12' && ltd != '13' ){
	            if( ld === '1' ){
	              suf = 'st';
	            }else if( ld === '2' ){
	              suf = 'nd';
	            }else if( ld === '3' ){
	              suf = 'rd';
	            }
	          }

	          str_arr[ i ] += suf;
	        }
	      }

	      return str_arr.join( ' ' );
	    },

	  /**
	   * This function performs multiple inflection methods on a string
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Array} arr An array of inflection methods.
	   * @returns {String}
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
	   */
	    transform : function ( str, arr ){
	      var i = 0;
	      var j = arr.length;

	      for( ;i < j; i++ ){
	        var method = arr[ i ];

	        if( this.hasOwnProperty( method )){
	          str = this[ method ]( str );
	        }
	      }

	      return str;
	    }
	  };

	/**
	 * @public
	 */
	  inflector.version = '1.10.0';

	  return inflector;
	}));


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _moment = __webpack_require__(304);

	var _moment2 = _interopRequireDefault(_moment);

	var _queryString = __webpack_require__(305);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _history = __webpack_require__(308);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable2 = __webpack_require__(329);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _SettingsObject = __webpack_require__(334);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _ViewContainer = __webpack_require__(336);

	var _ViewContainer2 = _interopRequireDefault(_ViewContainer);

	var _Renderer = __webpack_require__(338);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Router = __webpack_require__(356);

	var _Router2 = _interopRequireDefault(_Router);

	var _Element = __webpack_require__(337);

	var _Element2 = _interopRequireDefault(_Element);

	var _I18n = __webpack_require__(366);

	var _I18n2 = _interopRequireDefault(_I18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //////////////////////
	// Vendor libraries //
	//////////////////////

	// https://www.npmjs.com/package/history


	/////////////////////
	// Chicken classes //
	/////////////////////

	//////////////////////
	// Class definitino //
	//////////////////////

	var _instance = undefined;

	var Application = function (_Observable) {
		_inherits(Application, _Observable);

		/**
	  * The Application class is 
	  *
	  * @class Application
	  * @extends Core.Observable
	  */
		function Application($app, settings, history) {
			_classCallCheck(this, Application);

			var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));

			// Basics


			_instance = _this;

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
	   * @type {Object}
	   */
			_this.viewContainers = {};

			/**
	   * @property router
	   * @type {Routing.Router}
	   */
			_this.router = new _Router2.default(_this);

			/**
	   * One or more Api.Api instances
	   * 
	   * @property apis
	   * @type {Object}
	   */
			_this.apis = {};

			/**
	   * One or more Auth.Auth instances
	   *
	   * @property auths
	   * @type {Object}
	   */
			_this.auths = {};

			/**
	   * Array of promises to fulfill before the application
	   * can start.
	   * 
	   * @property loadPromises
	   * @type {Array}
	   */
			_this.loadPromises = [];

			/**
	   * @property settings
	   * @type {Core.SettingsObject}
	   */
			_this.settings = _SettingsObject2.default.create({
				baseUrl: '/',

				language: (0, _jquery2.default)('html').attr('lang'),

				viewPath: 'views',
				viewExtension: 'hbs',

				elementLinkAttribute: 'link-to',

				renderer: settings.renderer === undefined ? new _Renderer2.default() : null

			}, ['baseUrl', 'viewPath', 'viewExtension', 'renderer', 'elementLinkAttribute']).apply(settings);

			/**
	   * @property i18n
	   * @type {Localization.I18n}
	   */
			_this.i18n = new _I18n2.default(_this.settings.get('language'));

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

				var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


				// No element to look in?
				if (!$element) $element = this.$app;

				// Find view containers
				$element.find(_ViewContainer2.default.ElementSelector).each(function (index, el) {

					// Create view container
					var vc = new _ViewContainer2.default((0, _jquery2.default)(el), _this2);

					// Already known?
					if (_this2.viewContainers[vc.name]) {
						throw new Error('There is already a view named "' + vc.name + '". It is not possible to have two views with the same name at the same time.');
					}

					// Store it.
					_this2.viewContainers[vc.name] = vc;

					// Initialize
					vc.initialize();
				});

				return this;
			}
		}, {
			key: 'updateViewContainers',
			value: function updateViewContainers() {
				var _this3 = this;

				var $lookForNewOnesIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


				// Check if all old ones are still there
				_underscore2.default.each(this.viewContainers, function (vc, key) {

					// Removed?
					if (!vc.isInDom()) {
						delete _this3.viewContainers[key];
					}
				});

				// Look for new ones
				if ($lookForNewOnesIn) this.findViewContainers($lookForNewOnesIn);

				return this;
			}
		}, {
			key: 'getViewContainer',
			value: function getViewContainer(key) {
				return this.viewContainers[key];
			}
		}, {
			key: 'routes',
			value: function routes(callback) {

				// Run callback with router
				callback.apply(this.router, []);
				return this;
			}
		}, {
			key: 'api',
			value: function api() {
				var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var apiInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				// Get?
				if (apiInstance === null) {
					if (key === null) key = _underscore2.default.first(_underscore2.default.keys(this.apis));
					return this.apis[key];
				}

				// Set
				this.apis[key] = apiInstance;

				return this;
			}
		}, {
			key: 'auth',
			value: function auth() {
				var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var authInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				// Get?
				if (authInstance === null) {
					if (key === null) key = _underscore2.default.first(_underscore2.default.keys(this.auths));
					return this.auths[key];
				}

				// Set
				this.auths[key] = authInstance;

				return this;
			}
		}, {
			key: 'translations',
			value: function translations(callback) {

				callback.apply(this.i18n, [this.i18n]);
				return this;
			}
		}, {
			key: 'start',
			value: function start() {
				var _this4 = this;

				// Enable momentJS
				_moment2.default.locale(this.settings.get('language'));

				// Add i18n to promises
				this.loadPromises.unshift(this.i18n.load());

				// Do auth initialization
				_underscore2.default.each(this.auths, function (auth) {
					_this4.loadPromises.unshift(auth.initialize());
				});

				// When all is done.
				Promise.all(this.loadPromises).then(function () {

					// Find initial view containers
					_this4.findViewContainers();

					// Update view containers whenever element contents are set.
					_Element2.default.registerHook(function ($element) {

						// Update view containers
						_this4.updateViewContainers($element);

						// Find links
						$element.find('[' + _this4.settings.get('elementLinkAttribute') + ']').on('click', function (e) {

							// Open the uri!
							e.preventDefault();
							var uri = (0, _jquery2.default)(e.target).attr('href');
							_this4.goto(uri);
						}).each(function (index, el) {

							// Get uri
							var $el = (0, _jquery2.default)(el);
							var uri = $el.attr(_this4.settings.get('elementLinkAttribute'));
							if (uri) {

								// Store in href for easy visilbility, and remove link-to, so it won't be found again by this script
								$el.removeAttr(_this4.settings.get('elementLinkAttribute'));
								$el.attr('href', uri);
							}
						});
					});

					// Done!
					_this4.resolvePromise('ready');

					// Listen to browser's address bar
					_this4.history.listen(function (location) {
						_this4.router.handle(location);
					});

					// Start with current location
					_this4.router.handle(_this4.history.getCurrentLocation());
				});

				return this;
			}
		}, {
			key: 'gotoNamed',
			value: function gotoNamed(name) {
				var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var flash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


				// Find route
				var route = this.router.namedRoutes.get(name);
				if (!route) throw new Error('There is no route defined with the name "' + name + '"');

				// Make uri
				var uri = route.makeUrl(attributes);
				return this.goto(uri, query, flash);
			}
		}, {
			key: 'goto',
			value: function goto(uri) {
				var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var flash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


				// Query in the uri?
				var search = _queryString2.default.extract(uri);
				var params = {};
				if (search.length > 0) {

					// Parse objects
					params = _queryString2.default.parse(search);

					// Remove from uri
					uri = uri.substr(0, uri.length - search.length - 1);
				}

				// Check the query
				if (query) {

					// Combine into params
					if (typeof query === 'string') {
						params = _jquery2.default.extend(params, _queryString2.default.parse(query));
					} else {
						params = _jquery2.default.extend(params, query);
					}
				}

				// Stringify query
				query = _queryString2.default.stringify(params);
				if (query) query = '?' + query;

				// External?		
				if (uri.match(/^(http(s)?\:)?\/\//)) {
					window.location = uri + (query || '');
					return this;
				}

				// Change the history state
				this.history.push({
					pathname: uri,
					search: query,
					state: {
						flash: flash
					}
				});

				return this;
			}
		}, {
			key: 'refresh',
			value: function refresh() {
				var _this5 = this;

				var viewContainerKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


				viewContainerKeys = viewContainerKeys || _underscore2.default.keys(this.viewContainers);

				//clear the currentAction of all viewContainer
				_underscore2.default.each(viewContainerKeys, function (viewContainerKey) {
					_this5.viewContainers[viewContainerKey].currentAction = null;
				});

				// Start with current location
				this.router.handle(this.history.getCurrentLocation());
			}
		}, {
			key: 'getCurrentUri',
			value: function getCurrentUri() {

				return this.history.getCurrentLocation().pathname;
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
		return _instance;
	};

	_ClassMap2.default.register('Application', Application);

	module.exports = Application;

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_304__;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(306);
	var objectAssign = __webpack_require__(307);

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
/* 306 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 307 */
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
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.Actions = exports.useQueries = exports.useBeforeUnload = exports.useBasename = exports.createMemoryHistory = exports.createHashHistory = exports.createHistory = undefined;

	var _LocationUtils = __webpack_require__(309);

	Object.defineProperty(exports, 'locationsAreEqual', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.locationsAreEqual;
	  }
	});

	var _createBrowserHistory = __webpack_require__(314);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createHashHistory2 = __webpack_require__(323);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	var _createMemoryHistory2 = __webpack_require__(325);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	var _useBasename2 = __webpack_require__(326);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	var _useBeforeUnload2 = __webpack_require__(327);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	var _useQueries2 = __webpack_require__(328);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	var _Actions2 = __webpack_require__(313);

	var _Actions = _interopRequireWildcard(_Actions2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createHistory = _createBrowserHistory2.default;
	exports.createHashHistory = _createHashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;
	exports.useBasename = _useBasename3.default;
	exports.useBeforeUnload = _useBeforeUnload3.default;
	exports.useQueries = _useQueries3.default;
	exports.Actions = _Actions;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(310);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(311);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(312);

	var _Actions = __webpack_require__(313);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

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

	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 310 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 311 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

	var _warning = __webpack_require__(311);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 313 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
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
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(310);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(315);

	var _BrowserProtocol = __webpack_require__(316);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(319);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(317);

	var _createHistory = __webpack_require__(320);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 315 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(309);

	var _DOMUtils = __webpack_require__(317);

	var _DOMStateStorage = __webpack_require__(318);

	var _PathUtils = __webpack_require__(312);

	var _ExecutionEnvironment = __webpack_require__(315);

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

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
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };

	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }

	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
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
/* 317 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
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

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(311);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};

	var SecurityErrors = {
	  SecurityError: true
	};

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
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
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
	    if (SecurityErrors[error.name]) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(316);

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

	var _LocationUtils = __webpack_require__(309);

	var _PathUtils = __webpack_require__(312);

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
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(321);

	var _PathUtils = __webpack_require__(312);

	var _runTransitionHook = __webpack_require__(322);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(313);

	var _LocationUtils = __webpack_require__(309);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    var currentIndex = getCurrentIndex();

	    currentLocation = nextLocation;

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
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
/* 321 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
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
	      callback.apply(undefined, doneArgs);
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
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(311);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(311);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(310);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(315);

	var _DOMUtils = __webpack_require__(317);

	var _HashProtocol = __webpack_require__(324);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(320);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey;
	  var hashType = options.hashType;


	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  if (hashType == null) hashType = 'slash';

	  if (!(hashType in HashPathCoders)) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

	    hashType = 'slash';
	  }

	  var pathCoder = HashPathCoders[hashType];

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
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
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

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
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(316);

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

	var _warning = __webpack_require__(311);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(309);

	var _DOMUtils = __webpack_require__(317);

	var _DOMStateStorage = __webpack_require__(318);

	var _PathUtils = __webpack_require__(312);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
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

	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);

	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);

	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	      prevLocation = currentLocation;

	      listener(currentLocation);
	    }
	  };

	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;


	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(311);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(310);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(309);

	var _PathUtils = __webpack_require__(312);

	var _createHistory = __webpack_require__(320);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(313);

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

	  return _extends({}, history, {
	    canGo: canGo
	  });
	};

	exports.default = createMemoryHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(322);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(312);

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

	      return _extends({}, object, {
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
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(310);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _DOMUtils = __webpack_require__(317);

	var _ExecutionEnvironment = __webpack_require__(315);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(305);

	var _runTransitionHook = __webpack_require__(322);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(309);

	var _PathUtils = __webpack_require__(312);

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
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Reference = __webpack_require__(331);

	var _Reference2 = _interopRequireDefault(_Reference);

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _ComputedProperty = __webpack_require__(333);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

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
			var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			_classCallCheck(this, Observable);

			////////////////
			// Properties //
			////////////////

			/**
	   * @property observers
	   * @type {Map}
	   */
			var _this = _possibleConstructorReturn(this, (Observable.__proto__ || Object.getPrototypeOf(Observable)).call(this));

			// Basics


			_this.observers = new Map();

			/**
	   * @attribute attributes
	   * @type {object}
	   */
			_this.attributes = {};

			/**
	   * Whenever this property is true, no notifications will be triggered
	   * 
	   * @attribute notificationsDisabled
	   * @type {Boolean}
	   */
			_this.notificationsDisabled = false;

			// Scheduling
			_this._scheduleAttributesChangedTimeout = false;
			_this._scheduleAttributesChangedAttributes = null;

			////////////////////
			// Initialization //
			////////////////////

			// Initialize values
			_this.withoutNotifications(function () {
				_this.import(initValues, convertToObservables);
			});

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
				if (parts.length === 0) return this._has(currentPart) !== undefined;

				// Look deeper
				var value = this._get(currentPart);

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
		}, {
			key: '_has',
			value: function _has(key) {
				return this.attributes[key] !== undefined;
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
				if (key === undefined) throw new TypeError('There was no key provided');
				var parts = Number.isInteger(key) ? [key] : key.split(/\./);
				var currentPart = parts.shift();

				// Get value
				var value = this._get(currentPart);

				// Nothing?
				if (value === undefined) return;

				// Is it a reference?
				if (value instanceof _Reference2.default) {
					value = value.getValue();
				}

				// Value found?
				if (parts.length === 0) {

					// Is it computed?
					if (value instanceof _ComputedProperty2.default) {
						return value.getValue();
					}

					// Return the value as is.
					return value;
				}

				// Check if the value is also an observable
				if (Observable.isObservable(value)) {

					// Pass the rest along to go a level deeper
					return value.get(parts.join('.'));
				} else {

					// Nothing to be retrieved
					return;
					//throw new Error('The found value for ' + currentPart + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value));
				}
			}
		}, {
			key: '_get',
			value: function _get(key) {
				return this.attributes[key];
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
	   * @chainable
	   */

		}, {
			key: 'set',
			value: function set(key, value) {
				var convertToObservables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


				// Convert?
				if (convertToObservables === true && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
					if (value.constructor === Object) {
						value = new Observable(value);
					} else if (Array.isArray(value)) {
						value = _ClassMap2.default.create('ObservableArray', [value]);
					}
				}

				// Is it a computed attribute
				if (value instanceof _ComputedProperty2.default) {
					value.initialize(key, this);
				}

				// Is there a dot in there?
				if (typeof key === 'string' && key.match(/\.[\w]/)) {

					////////////////////////
					// Split and deep set //
					////////////////////////

					var parts = key.split(/\./);
					var currentPart = parts.shift();

					// Does the first key not exist?
					if (this.attributes[currentPart] === undefined) {

						// Should it be an array?
						var newValue = void 0;
						if (Number.isInteger(parts[0]) || typeof parts[0] === 'string' && parts[0].match(/^\d+$/)) {

							// Create list (using classmap to prevent circular dependencies)
							newValue = _ClassMap2.default.create('ObservableArray');
						} else {

							// Create it
							newValue = new Observable();
						}

						// Store it
						this.attributes[currentPart] = newValue;
					}

					// Do deep setting
					this.get(currentPart).set(parts.join('.'), value);

					return this;
				}

				// Now set the attribute
				this.setAttribute(key, value, convertToObservables);

				return this;
			}
		}, {
			key: 'setAttribute',
			value: function setAttribute(key, value) {
				var _this2 = this;

				// Is the value identical?
				if (_ClassMap2.default.get('Utils').areEqual(value, this.get(key))) {
					return this;
				}

				// Set it
				this._set(key, value);

				// Is the value observable?
				if (Observable.isObservable(value)) {

					// Study the object
					value.study(function () {
						_this2._scheduleAttributeChanged(key);
					});
				}

				// Is the value a reference?
				if (value instanceof _Reference2.default) {

					// Study the object
					value.watch(function () {
						_this2._scheduleAttributeChanged(key);
					});
				}

				// Update attribute
				this._scheduleAttributeChanged(key);

				return this;
			}
		}, {
			key: '_set',
			value: function _set(key, value) {

				// Is there a current value that is a reference?
				if (this.attributes[key] instanceof _Reference2.default && !(value instanceof _Reference2.default)) {

					// Write the referenced value
					this.attributes[key].setValue(value);
				} else {

					// Store the value
					this.attributes[key] = value;
				}
				return this;
			}
		}, {
			key: 'setSilently',
			value: function setSilently(key, value) {
				var _this3 = this;

				var convertToObservables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

				return this.withoutNotifications(function () {
					_this3.set(key, value, convertToObservables);
				});
			}
		}, {
			key: 'import',
			value: function _import(obj) {
				var _this4 = this;

				var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


				// Import all items in hash
				this.withoutNotifications(function () {
					_underscore2.default.each(obj, function (value, key) {
						_this4.set(key, value, convertToObservables);
					});
				});

				// Notify!
				if (!this.notificationsDisabled) this.trigger(Observable.Events.Import);

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
	   * @param  {string|array}   key      The name of the attribute to observe
	   * @param  {Function} callback 
	   * @chainable
	   */

		}, {
			key: 'observe',
			value: function observe(keyOrKeys, callback) {
				var _this5 = this;

				////////////////////
				// More than one? //
				////////////////////

				if (Array.isArray(keyOrKeys)) {
					_underscore2.default.each(keyOrKeys, function (key) {
						_this5.observe(key, callback);
					});
					return this;
				}
				var key = keyOrKeys;

				//////////////////////////////
				// Does the key have a dot? //
				//////////////////////////////

				var parts = key.split(/\./);
				if (parts.length > 1) {

					// Get the object concerned
					var attrKey = parts.shift();
					var obj = this.get(attrKey);
					var objKey = parts.join('.');

					// Is it an observable?
					if (Observable.isObservable(obj) && obj.observe) {

						// Observe this observable itself
						this.observe(attrKey, callback);

						// Go deeper
						return obj.observe(objKey, callback);
					}
					throw new Error('Cannot observe property of non-existing object: ' + key);
				}

				//////////////////
				// Add observer //
				//////////////////

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

			/**
	   * Get the Observable including all its children
	   * as a native object.
	   *
	   * @method toObject
	   * @return {object}
	   */

		}, {
			key: 'toObject',
			value: function toObject() {
				var includedUids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


				var obj = {};
				_underscore2.default.each(this.attributes, function (item, key) {

					// Observable?
					if (Observable.isObservable(item)) {

						// Already included?
						var guid = _ClassMap2.default.get('Utils').uidFor(item);
						if (_underscore2.default.indexOf(includedUids, guid) !== -1) {
							obj[key] = '...recursive(' + guid + ')...';
							return;
						}
						includedUids.push(guid);

						// Array?
						if (item instanceof Observable) {
							item = item.toObject(includedUids);
						} else {
							item = item.toArray(includedUids);
						}
					}

					obj[key] = item;
				});

				return obj;
			}

			/**
	   * Apply given callback for each attribute defined in this observable
	   *
	   * @method each
	   * @param  {Function} callback
	   * @chainable
	   */

		}, {
			key: 'each',
			value: function each(callback) {
				var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				_underscore2.default.each(this.attributes, callback, context);
				return this;
			}

			/**
	   * Execute given callback without triggering change notifications.
	   * 
	   * @method withoutNotifications
	   * @param  {Function} callback 
	   * @chainable
	   */

		}, {
			key: 'withoutNotifications',
			value: function withoutNotifications(callback) {

				var wasDisabled = this.notificationsDisabled;
				this.notificationsDisabled = true;

				callback();

				this.notificationsDisabled = wasDisabled;

				return this;
			}
		}, {
			key: 'clone',
			value: function clone() {
				var convertToObservables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


				// Make copy!
				var c = this.constructor;
				var copy = new c(this.toObject(), convertToObservables);
				return copy;
			}

			/////////////////////
			// Private methods //
			/////////////////////

		}, {
			key: '_scheduleAttributeChanged',
			value: function _scheduleAttributeChanged(key) {
				var _this6 = this;

				// Notifications disabled?
				if (this.notificationsDisabled) return;

				// Already something scheduled?
				if (!this._scheduleAttributesChangedTimeout) {

					// Schedule it
					this._scheduleAttributesChangedAttributes = [];
					this._scheduleAttributesChangedTimeout = setTimeout(function () {

						// Trigger it now!
						_this6._scheduleAttributesChangedTimeout = false;
						_this6._triggerAttributesChanged();
					}, Observable.AttributeChangedDelay);
				}

				// Add attribute to the set
				this._scheduleAttributesChangedAttributes.push(key);
			}
		}, {
			key: '_triggerAttributesChanged',
			value: function _triggerAttributesChanged() {
				var _this7 = this;

				// Notifications disabled?
				if (this.notificationsDisabled) return;

				// Clear for next time.
				if (this._scheduleAttributesChangedTimeout) clearTimeout(this._scheduleAttributesChangedTimeout);
				this._scheduleAttributesChangedTimeout = false;

				// Check my attributes
				var attrs = _underscore2.default.unique(this._scheduleAttributesChangedAttributes);
				if (attrs) {

					// Collect the observers, using a Set to make sure the same observer can't be called twice
					var combinedObservers = new Set();
					_underscore2.default.each(attrs, function (attr) {

						// Get observers
						var attrObservers = _this7.observers.get(attr);
						if (attrObservers) {
							attrObservers.forEach(function (observer) {

								// Add it.
								combinedObservers.add(observer);
							});
						}
					});

					// Did we have any observers?
					combinedObservers.forEach(function (observer) {

						// Now call it.
						observer.apply(_this7);
					});

					// Students as well.
					this.trigger(Observable.Events.Change, attrs);
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

	Observable.AttributeChangedDelay = 1;

	_ClassMap2.default.register('Observable', Observable);

	module.exports = Observable;

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

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
			key: 'rejectPromise',
			value: function rejectPromise(key) {
				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}

				this._getPromiseInfo(key).reject.apply(this, args);
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

				for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
					args[_key3] = arguments[_key3];
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

				for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
					args[_key4 - 1] = arguments[_key4];
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
/* 331 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Reference = function () {
		function Reference(observable, path) {
			_classCallCheck(this, Reference);

			this.observable = observable;
			this.path = path;
		}

		_createClass(Reference, [{
			key: "getValue",
			value: function getValue() {
				return this.observable.get(this.path);
			}
		}, {
			key: "setValue",
			value: function setValue(value) {
				this.observable.set(this.path, value);
				return this;
			}
		}, {
			key: "watch",
			value: function watch(callback) {
				this.observable.observe(this.path, callback);
			}
		}]);

		return Reference;
	}();

	module.exports = Reference;

/***/ },
/* 332 */
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
			var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var c = ClassMap.get(className);
			if (c === undefined) throw new Error('The ' + className + ' class is not registered in the ClassMap');
			return new (Function.prototype.bind.apply(c, [null].concat(_toConsumableArray(args))))();
		},
		isA: function isA(obj, className) {
			var c = ClassMap.get(className);
			if (c === undefined) throw new Error('The ' + className + ' class is not registered in the ClassMap');
			return obj instanceof c;
		}
	};

	module.exports = ClassMap;

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Core
	 */
	var ComputedProperty = function () {

		/**
	  * @class Core.ComputedProperty
	  * 
	  * @constructor
	  * @param  {Array}   			dependencies 
	  * @param  {Function} 			callback     	 
	  */
		function ComputedProperty(dependencies, callback) {
			_classCallCheck(this, ComputedProperty);

			/**
	   * The Observable instance that this computed attribute is
	   * a part of.
	   * 
	   * @property observable
	   * @type {Core.Observable}
	   */
			this.observable = null;

			/**
	   * The attribute name within the Observable that this ComputedProperty
	   * represents.
	   * 
	   * @property name
	   * @type {string}
	   */
			this.name = null;

			/**
	   * The names of the attributes that this compution depends on. These
	   * attributes will also be injected into the callback.
	   *
	   * @property dependencies
	   * @type {array}
	   */
			this.dependencies = dependencies;

			/**
	   * The compution function that is called when the value is requested.
	   *
	   * @property callback
	   * @type {Function}
	   */
			this.callback = callback;
		}

		/**
	  * Get the current computed value 
	  *
	  * @method getValue
	  * @return {mixed}
	  */


		_createClass(ComputedProperty, [{
			key: 'getValue',
			value: function getValue() {
				var _this = this;

				// Get dependency values
				var args = [];
				_underscore2.default.each(this.dependencies, function (dep) {
					args.push(_this.observable.get(dep));
				});

				// Do the callback
				return this.callback.apply(this.observable, args);
			}

			/**
	   * Alias of `getValue`
	   * 
	   * @method toString
	   * @return {mixed}
	   */

		}, {
			key: 'toString',
			value: function toString() {
				return this.getValue();
			}

			/**
	   * Make this property part of an Observable object, and 
	   * start watching for changes.
	   * 
	   * @method initialize
	   * @param {string} name 					The name op the property
	   * @param {Core.Observable} observable 		The observable instance this property is a part of
	   * @chainable
	   */

		}, {
			key: 'initialize',
			value: function initialize(name, observable) {
				var _this2 = this;

				// Localize
				this.name = name;
				this.observable = observable;

				// Watch the properties
				this.observable.observe(this.dependencies, function () {
					_this2.observable._scheduleAttributeChanged(_this2.name);
				});

				return this;
			}
		}]);

		return ComputedProperty;
	}();

	module.exports = ComputedProperty;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable2 = __webpack_require__(329);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Chainable = __webpack_require__(335);

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
			var defaultSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var allowedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			_classCallCheck(this, SettingsObject);

			/**
	   * @property allowedKeys
	   * @type Array
	   */
			var _this = _possibleConstructorReturn(this, (SettingsObject.__proto__ || Object.getPrototypeOf(SettingsObject)).call(this, defaultSettings));

			// Instantiate with default settings


			_this.allowedKeys = allowedKeys;

			_this.notificationsDisabled = true;

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
				if (this.allowedKeys && this.allowedKeys.length > 0 && !_underscore2.default.contains(this.allowedKeys, key)) {
					throw new Error('This SettingsObject does not have a setting for "' + key + '". The allowed settings are: ' + this.allowedKeys.join(', '));
				}

				// Do it.
				return _get(SettingsObject.prototype.__proto__ || Object.getPrototypeOf(SettingsObject.prototype), 'set', this).call(this, key, value);
			}
		}]);

		return SettingsObject;
	}(_Observable3.default);

	module.exports = (0, _Chainable2.default)(SettingsObject);

/***/ },
/* 335 */
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
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Obj = __webpack_require__(330);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _Element2 = __webpack_require__(337);

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
			var _this = _possibleConstructorReturn(this, (ViewContainer.__proto__ || Object.getPrototypeOf(ViewContainer)).call(this, $element, application));

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
				var setLoadingFalse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


				// Set HTML
				_get(ViewContainer.prototype.__proto__ || Object.getPrototypeOf(ViewContainer.prototype), 'setContent', this).call(this, content);

				// Apply hooks
				ViewContainer.any.trigger('render', this);

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
				var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this._isLoading = loading;
				this.$element.toggleClass(ViewContainer.Classes.Loading, loading);
				return this;
			}
		}, {
			key: 'isLoading',
			value: function isLoading() {
				return this._isLoading;
			}
		}, {
			key: 'isInDom',
			value: function isInDom() {

				return this.$element.closest(document.documentElement).length > 0;
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

	ViewContainer.any = new _Obj2.default();

	module.exports = ViewContainer;

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

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
			_classCallCheck(this, Element);

			/**
	   * The jQuery element that is the ViewContainer
	   * 
	   * @property $element
	   * @type {jQuery}
	   */
			var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this));

			_this.$element = $element;

			return _this;
		}

		_createClass(Element, [{
			key: 'setContent',
			value: function setContent(content) {

				// Fire the before hooks.
				this._fireHooks('beforeRender');

				// Set it
				this.$element.html(content);
				this.trigger('content', content);

				// Fire the after hooks
				this._fireHooks('afterRender');
			}
		}, {
			key: '_fireHooks',
			value: function _fireHooks(type) {
				var _this2 = this;

				_underscore2.default.each(Element.Hooks[type], function (callback) {

					// Fire it.
					callback.apply(_this2, [_this2.$element, _this2]);
				});
			}
		}]);

		return Element;
	}(_Obj3.default);

	Element.registerHook = function (callback) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'afterRender';

		Element.Hooks[type].push(callback);
		return true;
	};

	Element.Hooks = {
		beforeRender: [],
		afterRender: []
	};

	module.exports = Element;

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _htmlbarsStandalone = __webpack_require__(339);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _Observable = __webpack_require__(329);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(340);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Binding = __webpack_require__(341);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _ActionBinding = __webpack_require__(342);

	var _ActionBinding2 = _interopRequireDefault(_ActionBinding);

	var _Component = __webpack_require__(344);

	var _Component2 = _interopRequireDefault(_Component);

	var _ComponentDefinition = __webpack_require__(353);

	var _ComponentDefinition2 = _interopRequireDefault(_ComponentDefinition);

	var _Helpers = __webpack_require__(354);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	var _View = __webpack_require__(345);

	var _View2 = _interopRequireDefault(_View);

	var _Utils = __webpack_require__(352);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Dom
	 */
	var Renderer =

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
				// Is data an observable?
				if (appliedScope instanceof _Observable2.default && path.length > 0 || appliedScope instanceof _ObservableArray2.default) {

					// Already a binding?
					if (appliedScope._bindings === undefined) appliedScope._bindings = {};
					if (appliedScope._bindings[path]) {

						// Return existing binding
						return appliedScope._bindings[path];
					}

					// Create a binding
					var binding = new _Binding2.default(_this, appliedScope, path);

					// Store it
					appliedScope._bindings[path] = binding;

					// Get the value
					return binding;
				} else if (path === '') {

					// Return the scope itself
					return appliedScope;
				} else {

					// Do native thing (deep-get)
					var value = appliedScope;
					for (var q = 0; q < keys.length; q++) {
						if (value === undefined || value === null) return value;
						value = value[keys[q]];
					}
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
	   * @param  {string} type   				Values can be `@range`, `@attribute`, or helper names
	   * @param  {array} values     			Array of values that have been linked to the morph. The should be Binding instances
	   * @return {[type]}          [description]
	   */
			linkRenderNode: function linkRenderNode(morph, renderer, scope, type, values) {

				// Add this morph to all involved bindings
				_underscore2.default.each(values, function (binding) {

					// Is it a binding?
					if (binding instanceof _Binding2.default) {
						binding.addMorph(morph, scope);
					}
				});
			},

			willRenderNode: function willRenderNode(morph /*, renderer, scope*/) {

				// Store morph so we can bind it when we get subexpressions, etc
				_this.currentMorph = morph;
			},

			subexpr: function subexpr(renderer, scope, helperName, params, hash) {

				// Loop through parameters to find Bindings
				_underscore2.default.each(params, function (param) {
					if (param instanceof _Binding2.default) {

						// Add morph
						if (renderer.currentMorph) param.addMorph(renderer.currentMorph, scope);
					}
				});

				// Original behavior
				return _htmlbarsStandalone2.default.Runtime.Hooks.Default.subexpr(renderer, scope, helperName, params, hash);
			},

			createFreshScope: function createFreshScope() {
				return { self: null, blocks: {}, locals: {}, localPresent: {}, actions: {}, view: null };
			},

			createChildScope: function createChildScope(parentScope) {

				// Create a new scope extending the parent
				var scope = Object.create(parentScope);
				scope.locals = Object.create(parentScope.locals);
				scope.localPresent = Object.create(parentScope.localPresent);
				scope.blocks = Object.create(parentScope.blocks);
				scope.actions = Object.create(parentScope.actions);

				// Check is parent is a view
				if (parentScope.self instanceof _View2.default) {

					// Bubble the actions
					scope.actions = _underscore2.default.extend(scope.actions, parentScope.self.actions);

					// No a component?
					if (!(parentScope.self instanceof _Component2.default)) {
						scope.view = parentScope.self;
					} else {
						scope.component = parentScope.self;
						scope.view = scope.component.view;
					}
				}

				return scope;
			},

			lookupHelper: function lookupHelper(renderer, scope, helperName) {

				// Use helper?
				if (_Helpers2.default.User[helperName]) {
					return _Helpers2.default.User[helperName];
				}

				// Chicken helper?
				if (renderer.helpers[helperName]) {
					return renderer.helpers[helperName];
				}

				throw new Error('There is no helper registered with the name "' + helperName + '"');
			},

			invokeHelper: function invokeHelper(morph, renderer, scope, visitor, params, attributeHash, helper, options) {

				// Is it a component?
				if (helper instanceof _ComponentDefinition2.default) {

					// Call component hook
					return {
						value: _this.hooks.component(morph, renderer, scope, helper, params, attributeHash, options, visitor)
					};
				}

				// Call the helper with its own context
				return {
					value: helper.apply(_this.helpers, [params, attributeHash, options, morph, renderer, scope, visitor]),
					link: true
				};
			},

			component: function component(morph, renderer, scope, tagName, params, attributeHash, options, visitor) {

				////////////////////////////////////////////////////////////////
				// Is the component already created, and is this a re-render? //
				////////////////////////////////////////////////////////////////

				var state = morph.getState();
				if (state.component) {

					state.component.scheduleRevalidate();
					return;
				}

				///////////////////////////////////
				// Create the component instance //
				///////////////////////////////////

				// Get definition
				var definition = _Component2.default.registry.get(tagName);

				// No known component?
				if (!definition) {
					var fragment;

					var _ret = function () {

						// Do the component fallback.
						var element = renderer.dom.createElement(tagName);
						_underscore2.default.each(attributeHash, function (value, key) {
							element.setAttribute(key, renderer.hooks.getValue(value));
						});
						fragment = _htmlbarsStandalone2.default.Runtime.render(options.default, renderer, scope, {}).fragment;

						element.appendChild(fragment);
						morph.setNode(element);
						return {
							v: void 0
						};
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}

				// Create a new scope and use the component as self
				var newScope = renderer.hooks.createScope(renderer, scope);

				// Are there attributes defined as an attribute?
				if (attributeHash && attributeHash.attributes) {

					// A binding?
					var attrs = attributeHash.attributes;
					if (attrs instanceof _Binding2.default) attrs = attrs.getValue();

					// A hash?
					if (attrs instanceof Object) {

						// Replace
						delete attributeHash.attributes;
						_Utils2.default.each(attrs, function (value, key) {
							attributeHash[key] = value;
						});
					}
				}

				// Create it
				var component = new _Component2.default(definition.name, definition.source, morph, newScope, params, attributeHash, visitor, options, definition.initCallback, definition.methods, _this);
				newScope.self = component;

				// Now render it.
				component.render();

				// Store it.
				state.component = component;
			},

			/**
	   * Check if the given path is a known class (component, or block, inline)
	   *
	   * @method hooks.classify
	   * @param  {Dom.Renderer} renderer 
	   * @param  {Object} scope    
	   * @param  {string} path     
	   * @return {string}          
	   */
			classify: function classify(renderer, scope, path) {

				// Is this a known component?
				if (_Component2.default.registry.has(path)) return 'component';

				// Nothing known.
				return false;
			},

			getBlock: function getBlock(scope, key) {

				// Is the block known?
				var block = scope.blocks[key];
				if (block) return block;

				// Are we inside a component?
				if (scope.self instanceof _Component2.default) {
					return scope.self.getSubTemplate(key);
				}

				// Nothing there
				return null;
			},

			getActionScope: function getActionScope(scope, key) {

				// Check the scope
				if (scope.actions && scope.actions[key]) {

					return scope;
				} else if (scope.locals.actions && scope.locals.actions[key]) {

					// Use local action
					return scope.locals;
				} else if (scope.self.actions && scope.self.actions[key]) {

					// Use that
					return scope.self;
				} else if (scope.view && scope.view.actions && scope.view.actions[key]) {

					// Use the veiw
					return scope.view;
				} else {

					return false;
				}
			},

			getAction: function getAction(scope, key) {

				var appliedScope = _this.hooks.getActionScope(scope, key);
				if (appliedScope) {

					// Get the action
					return appliedScope.actions[key];
				}
				return false;
			},

			keywords: _underscore2.default.defaults({

				/**
	    * The action keyword creates an ActionBinding instance and 
	    * stores it on the element. The `action` helper can then use 
	    * this ActionBinding to apply it on the DOM.
	    *
	    * @method keywords.action
	    */
				action: function action(morph, renderer, scope, params, attributeHash) {

					// Check binding
					if (morph.actionBindings) return;

					// Get action scope
					var actionCallback = renderer.hooks.getAction(scope, params[0]);
					if (!actionCallback) {

						// Undefined action.
						throw new Error('Could not find action "' + params[0] + '" within the scope');
					}

					// Get action
					var parameters = params.slice(1);

					// Create action binding
					var binding = new _ActionBinding2.default(renderer, morph, params[0], actionCallback, parameters, attributeHash, scope.self);
					morph.actionBindings = binding;
				}

			}, _htmlbarsStandalone2.default.Runtime.Hooks.Default.keywords)

		}, _htmlbarsStandalone2.default.Runtime.Hooks.Default);

		/**
	  * @property helpers
	  * @type {Dom.Helpers}
	  */
		this.helpers = new _Helpers2.default(this);

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
	};

	module.exports = Renderer;

/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_339__;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _ClassMap = __webpack_require__(332);

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
			var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			_classCallCheck(this, ObservableArray);

			// Properties
			var _this = _possibleConstructorReturn(this, (ObservableArray.__proto__ || Object.getPrototypeOf(ObservableArray)).call(this));

			_this.items = [];

			// Single initvalue given
			if (!(initValues instanceof Array)) initValues = [initValues];

			// Import start values
			_this.import(initValues, convertToObservables, true);

			/**
	   * Whenever this property is true, no notifications will be triggered
	   * 
	   * @attribute notificationsDisabled
	   * @type {Boolean}
	   */
			_this.notificationsDisabled = false;

			_this.isStudyingChildren = false;
			_this.childStudyCallback = function () {

				// Trigger on.
				_this._scheduleChanged();
			};

			return _this;
		}

		_createClass(ObservableArray, [{
			key: 'import',
			value: function _import(arr) {
				var _this2 = this;

				var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


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

				// Trigger changes
				if (!this.notificationsDisabled) {
					this.trigger(ObservableArray.Events.Import);
					this.trigger(ObservableArray.Events.Change);
					this.trigger(ObservableArray.Events.Add, arr);
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

					throw new TypeError('Invalid key: ' + key);
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

				var convertToObservables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


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
						if (this.isStudyingChildren) {

							newValue.study(function () {
								_this3.trigger(ObservableArray.Events.Change);
							});
						}

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

				// Is the last value a boolean?
				var doNotNotify = false;

				for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
					values[_key] = arguments[_key];
				}

				if (values.length > 1 && typeof values[values.length - 1] === 'boolean') {
					doNotNotify = values.pop();
				}

				// Add items
				_underscore2.default.each(values, function (value) {
					_this4._add(value);
				});

				// Trigger events
				if (!doNotNotify) {
					this.trigger(ObservableArray.Events.Change);
					this.trigger(ObservableArray.Events.Add, values);
				}

				return this;
			}
		}, {
			key: '_add',
			value: function _add(value) {
				var _this5 = this;

				// Add it.
				this.items.push(value);

				// Studying?
				if (this.isStudyingChildren) {
					if (ObservableArray.isObservable(value)) value.study(this.childStudyCallback);
				}

				// Is it observable?
				if (ObservableArray.isObservable(value)) {
					value.on('change', function () {
						_this5.trigger('change');
					});
				}

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
				var _this6 = this;

				for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					values[_key2] = arguments[_key2];
				}

				this.items = _underscore2.default.difference(this.items, values);

				// Studying?
				if (this.isStudyingChildren) {
					_underscore2.default.each(values, function (item) {

						if (ObservableArray.isObservable(item)) item.neglect(_this6.childStudyCallback);
					});
				}

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
				var _this7 = this;

				// Values that are deleted
				var deleted = _underscore2.default.difference(this.items, []);

				// Remove all listeners
				if (this.isStudyingChildren) {
					_underscore2.default.each(this.items, function (item) {
						item.neglect(_this7.childStudyCallback);
					});
				}

				// Now clear
				this.items = [];

				// Trigger events
				this.trigger(ObservableArray.Events.Change);
				this.trigger(ObservableArray.Events.Delete, deleted);
				this.trigger(ObservableArray.Events.Empty);

				return this;
			}

			/**
	   * Get the first item in the collection
	   * 
	   * @method first
	   * @return {mixed} 
	   */

		}, {
			key: 'first',
			value: function first() {
				return _underscore2.default.first(this.items);
			}

			/**
	   * Get the last item in the collection
	   *
	   * @method last
	   * @return {mixed} 
	   */

		}, {
			key: 'last',
			value: function last() {
				return _underscore2.default.last(this.items);
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
				var _this8 = this;

				// Already studying?
				if (!this.isStudyingChildren) {

					// Set
					this.isStudyingChildren = true;

					// Watch all current children
					_underscore2.default.each(this.items, function (item) {

						if (ObservableArray.isObservable(item)) item.study(_this8.childStudyCallback);
					});
				}

				// Connect to change-event
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
				var includedUids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


				return this.items.map(function (item) {

					// Observable?
					if (ObservableArray.isObservable(item)) {

						// Already included?
						var guid = _ClassMap2.default.get('Utils').uidFor(item);
						if (_underscore2.default.indexOf(includedUids, guid) !== -1) {
							return '...recursive(' + guid + ')...';
						}
						includedUids.push(guid);

						// Array?
						if (item instanceof ObservableArray) {
							return item.toArray(includedUids);
						} else {
							return item.toObject(includedUids);
						}
					}

					return item;
				});
			}

			/**
	   * Get a keyed array containing all items in this ObservableArray
	   * by the value of given key.
	   *
	   * @method keyBy
	   * @param  {string} key 	The attribute key. You can also use dot-notation in this key.
	   * @return {Object}     
	   */

		}, {
			key: 'keyBy',
			value: function keyBy(key) {

				// Loop it.
				var result = {};
				_underscore2.default.each(this.items, function (item) {
					var keyValue = item.get(key);
					if (keyValue) result[keyValue] = item;
				});

				return result;
			}
		}, {
			key: 'sortBy',
			value: function sortBy(keyOrCallback) {

				// Is it a key?
				var callback = keyOrCallback;
				if (typeof keyOrCallback === 'string') {
					callback = function callback(item) {
						return item.get(keyOrCallback);
					};
				}

				// Now sort!
				this.items = _underscore2.default.sortBy(this.items, callback);
				return this;
			}
		}, {
			key: 'reverse',
			value: function reverse() {
				this.items.reverse();
				return this;
			}

			/**
	   * Get a keyed array containing ObservableArray's with values that have the same
	   * value for given key.
	   *
	   * @method groupBy
	   * @param  {string} key  The attribute key. You can also use dot-notation in this key.
	   * @param  {string} [defaultGroup=default] The key under which to put items that have no value for given key
	   * @param  {boolean} [makeObservable=false] 
	   * @return {Object}
	   */

		}, {
			key: 'groupBy',
			value: function groupBy(key) {
				var defaultGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
				var makeObservable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


				// Loop it
				var result = makeObservable ? _ClassMap2.default.create('Observable', []) : {};
				_underscore2.default.each(this.items, function (item) {

					// Get value
					var keyValue = item.get(key);

					// Nothing?
					if (!keyValue) keyValue = defaultGroup;

					// Map?
					if (makeObservable) {

						// Group known?
						if (!result.get(keyValue)) result.set(keyValue, new ObservableArray());

						// Add it
						result.get(keyValue).add(item);
					} else {

						// Group known?
						if (!result[keyValue]) result[keyValue] = new ObservableArray();

						// Add it
						result[keyValue].add(item);
					}
				});

				return result;
			}

			/**
	   * Get value for given valueAttribute key from all items
	   * 
	   *
	   * @method list 
	   * @param  {string} valueAttribute 
	   * @param  {string} keyAttribute   
	   * @return {[type]}                [description]
	   */

		}, {
			key: 'list',
			value: function list(valueAttribute) {
				var keyAttribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				var result = keyAttribute ? {} : [];
				_underscore2.default.each(this.items, function (item) {
					if (keyAttribute) {
						result[item.get(keyAttribute)] = item.get(valueAttribute);
					} else {
						result.push(item.get(valueAttribute));
					}
				});

				return result;
			}

			/**
	   * Get the lowest value for objects in this array
	   *
	   * @method getLowestValue
	   * @param  {string}  key          
	   * @return {mixed}
	   */

		}, {
			key: 'getLowestValue',
			value: function getLowestValue(key) {

				// Get a list.
				var list = this.list(key);
				return _underscore2.default.min(list);
			}
		}, {
			key: 'each',
			value: function each(callback) {

				_underscore2.default.each(this.items, callback);
				return this;
			}
		}, {
			key: 'find',
			value: function find(idOrAttributeOrCallback) {
				var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;


				// Callback?
				if (typeof idOrAttributeOrCallback === 'function') {
					return _underscore2.default.find(this.items, idOrAttributeOrCallback);
				}

				var attribute = 'id';
				if (value === undefined) {
					value = idOrAttributeOrCallback;
				} else {
					attribute = idOrAttributeOrCallback;
				}

				return _underscore2.default.find(this.items, function (item) {

					if (_ClassMap2.default.isA(item, 'Observable') || item instanceof ObservableArray) {
						return item.get(attribute) == value;
					} else if (item instanceof Object) {
						return item[attribute] == value;
					} else {
						return item == value;
					}
				});
			}

			/**
	   * find object with empty attribute 
	   *
	   * @method findEmpty
	   * @param  {string}	attribute 	the attribute checked for definition
	   * @return {mixed}				the object containing the empty property or `undefined`
	   */

		}, {
			key: 'findEmpty',
			value: function findEmpty(attribute) {

				return _underscore2.default.find(this.items, function (item) {

					if (_ClassMap2.default.isA(item, 'Observable') || item instanceof ObservableArray) {
						return !item.get(attribute);
					} else if (item instanceof Object) {
						return !item[attribute];
					} else {
						return false;
					}
				});
			}
		}, {
			key: 'map',
			value: function map(callback) {

				return _underscore2.default.map(this.items, callback);
			}
		}, {
			key: 'extend',
			value: function extend(observableArray) {

				return _underscore2.default.extend(this.items, observableArray.items);
			}
		}, {
			key: 'filter',
			value: function filter(callback) {
				var returnObservableArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

				var result = _underscore2.default.filter(this.items, callback);
				return returnObservableArray ? new ObservableArray(result, false) : result;
			}
		}, {
			key: 'chunk',
			value: function chunk() {
				var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;


				// Loop and add
				var cls = this.constructor;
				var chunks = new ObservableArray();
				var chunk = new cls();
				for (var i = 0; i < this.items.length; i++) {

					// New chunk?
					if (i > 0 && i % size === 0) {

						// New chunk
						chunks.add(chunk);
						chunk = new cls();
					}

					// Add it
					chunk.add(this.items[i]);
				}
				chunks.add(chunk);

				return chunks;
			}

			/**
	   * The number of items in the array
	   * 
	   * @property length
	   * @type {Number}
	   */

		}, {
			key: 'count',
			value: function count() {
				return this.length;
			}
		}, {
			key: 'size',
			value: function size() {
				return this.length;
			}
		}, {
			key: 'isObservable',
			value: function isObservable() {
				return true;
			}
		}, {
			key: '_scheduleChanged',
			value: function _scheduleChanged() {
				var _this9 = this;

				// Notifications disabled?
				if (this.notificationsDisabled) return;

				// Already something scheduled?
				if (!this._scheduleChangedTimeout) {

					// Schedule it
					this._scheduleChangedTimeout = setTimeout(function () {

						// Trigger it now!
						_this9._scheduleChangedTimeout = false;
						_this9._triggerChanged();
					}, ObservableArray.ChangedDelay);
				}
			}
		}, {
			key: '_triggerChanged',
			value: function _triggerChanged() {
				this.trigger(ObservableArray.Events.Change);
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
	ObservableArray.ChangedDelay = 100;

	_ClassMap2.default.register('ObservableArray', ObservableArray);

	module.exports = ObservableArray;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Reference = __webpack_require__(331);

	var _Reference2 = _interopRequireDefault(_Reference);

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
	   *
	   * @property path
	   * @type {string}
	   */
			this.path = typeof path === 'string' && path.length > 0 ? path : false;

			/**
	   * The list of 'morph' objects that are bound by this Binding. A
	   * morph refers to a specific part of the DocumentFragment that can be
	   * updated. These morphs are provides by the HTMLBars package.
	   * 
	   * @property morphs
	   * @type {Set} 
	   */
			this.morphs = new Set();

			////////////////
			// Now watch! //
			////////////////

			// What to do when value changes
			this.changeCallback = function () {

				// Trigger updates for all morphs
				_this.morphs.forEach(function (morph) {
					morph.isDirty = true;
					if (morph.view) morph.view.scheduleRevalidate();
					if (morph.component) morph.component.scheduleRevalidate();
				});
			};

			// Now listen to the object
			if (this.path) {
				this.observable.observe(path, this.changeCallback);
			} else {
				this.observable.study(this.changeCallback);
			}
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

				// Get a path value
				if (this.path) {
					return this.observable.get(this.path);
				}

				// Then return the whole thing
				return this.observable;
			}
		}, {
			key: 'setValue',
			value: function setValue(value) {
				var morph = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				if (morph) {

					// Make sure the morph is not updated itself by this value setting
					morph.lastValue = value;
				}

				return this.observable.set(this.path, value);
			}
		}, {
			key: 'getReference',
			value: function getReference() {
				if (!this.reference) {
					this.reference = new _Reference2.default(this.observable, this.path);
				}
				return this.reference;
			}
		}, {
			key: 'destroy',
			value: function destroy() {

				// Unlisten the object
				if (this.path) {
					this.observable.disregard(this.path, this.changeCallback);
				} else {
					this.observable.neglect(this.changeCallback);
				}
			}

			/**
	   * Add a morph object to the list of morphs, so that it will
	   * be updated when the data changes. And in cases when applicable,
	   * vice-versa.
	   *
	   * @method addMorph
	   * @param {HTMLBarsMorph} morph 
	   * @param {object} scope
	   */

		}, {
			key: 'addMorph',
			value: function addMorph(morph, scope) {

				// Is this an already bound morph?
				if (this.morphs.has(morph)) return;

				//////////////////////////////////////////
				// Add the morph, for data->dom binding //
				//////////////////////////////////////////

				this.morphs.add(morph);

				// Save the component and view
				morph.view = scope.view || scope.self;
				if (scope.component) morph.component = scope.component;

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
		}]);

		return Binding;
	}();

	Binding.TwoWay = {

		InputValue: {
			match: function match(morph) {
				return morph.element && /^INPUT$/.test(morph.element.tagName) && morph.attrName === 'value' && /^text|date|time|password|number|email$/.test(morph.element.type);
			},
			bind: function bind(binding, morph) {

				// Listen to key up, etc
				var $element = (0, _jquery2.default)(morph.element);
				var lastValue = $element.val();
				$element.on('keyup change paste', function () {
					var v = $element.val();
					if (v !== lastValue) {
						binding.setValue(v, morph);
						lastValue = v;
					}
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
					binding.setValue($element.val(), morph);
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
					binding.setValue($element.val(), morph);
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
					binding.setValue($element.prop('checked'), morph);
				});
			}
		}

	};

	module.exports = Binding;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _uuidLib = __webpack_require__(343);

	var _uuidLib2 = _interopRequireDefault(_uuidLib);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Dom
	 */
	var ActionBinding = function () {

		/**
	  * @class Dom.ActionBinding
	  * 
	  * @constructor
	  */
		function ActionBinding(renderer, morph, actionName, actionHandler, parameters, options, view) {
			_classCallCheck(this, ActionBinding);

			/**
	   * @property renderer
	   * @type {Dom.Renderer}
	   */
			this.renderer = renderer;

			/**
	   * @property morph
	   * @type {HTMLBarsMorph}
	   */
			this.morph = morph;

			/**
	   * The name of the action on the view
	   * 
	   * @property actionName
	   * @type {string}
	   */
			this.actionName = actionName;

			/**
	   * The function to call when the action is executed
	   * 
	   * @property actionHandler
	   * @type {function}
	   */
			this.actionHandler = actionHandler;

			/**
	   * @property options
	   * @type {object}
	   */
			this.options = _underscore2.default.defaults(options, {
				preventDefault: true
			});

			/**
	   * The parameters that will be passed along to the action handler.
	   * 
	   * @property parameters
	   * @type {array}
	   */
			this.parameters = parameters;

			/**
	   * @property view
	   * @type {Dom.View}
	   */
			this.view = view;

			/**
	   * The name of the event that is listened to on the element.
	   * When not specifically configured in the binding itself, a default
	   * event will be decided on, based on the element tag name. 
	   * 
	   * @property eventName
	   * @type {string}
	   */
			this.eventName = options.on ? options.on : ActionBinding.getDefaultEventName(morph.element);

			/**
	   * Indicator whether the binding is applied
	   * to the element
	   * 
	   * @property isListening
	   * @type {Boolean}
	   */
			this.isListening = false;

			/**
	   * @property $element
	   * @type {jQuery}
	   */
			this.$element = null;

			/**
	   * The unique identifier for this ActionBinding. This is used
	   * by the Helper to retrieve this instance and automatically
	   * generated in the constructor.
	   * 
	   * @property id
	   * @type {string}
	   */
			this.id = ActionBinding.register(this);

			// Store this binding on the element
			morph.element.setAttribute('data-chicken-action', this.id);
		}

		_createClass(ActionBinding, [{
			key: 'apply',
			value: function apply() {
				var _this = this;

				// Already applied?
				if (this.isListening === true) return this;
				this.isListening = true;

				// Get element
				this.$element = (0, _jquery2.default)(this.morph.element);
				this.$element.on(this.eventName, function (e) {

					// Prevent default?
					if (_this.options.preventDefault) e.preventDefault();

					// Call the handler
					var params = _underscore2.default.flatten([_underscore2.default.map(_this.parameters, function (value) {
						return _this.renderer.hooks.getValue(value);
					}), _this, _this.view]);
					_this.actionHandler.apply(_this.view, params);
				});

				return this;
			}
		}]);

		return ActionBinding;
	}();

	ActionBinding.registry = new Map();
	ActionBinding.register = function (binding) {

		// Generate id
		var id = _uuidLib2.default.raw();
		ActionBinding.registry.set(id, binding);
		return id;
	};
	ActionBinding.get = function (id) {
		return ActionBinding.registry.get(id);
	};

	ActionBinding.getDefaultEventName = function (element) {

		// Specific one for this tag?
		var eventName = ActionBinding.DefaultEventNames[element.tagName.toLowerCase()];

		// Or the old click.
		if (!eventName) eventName = 'click';
		return eventName;
	};
	ActionBinding.DefaultEventNames = {

		input: 'change keyup paste',
		select: 'change',
		form: 'submit'
	};

	module.exports = ActionBinding;

/***/ },
/* 343 */
/***/ function(module, exports) {

	var validator = new RegExp("^[a-z0-9]{32}$", "i");

	function gen(count) {
	  var out = "";
	  for (var i=0; i<count; i++) {
	    out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	  }
	  return out;
	}

	function Uuid(uuid) {
	  if (!uuid) throw new TypeError("Invalid argument; `value` has no value.");
	    
	  var value = Uuid.EMPTY;
	  
	  if (uuid && uuid instanceof Uuid) {
	    value = Uuid.toString();

	  } else if (uuid && Object.prototype.toString.call(uuid) === "[object String]" && Uuid.isUuid(uuid)) {
	    value = uuid;
	  }
	  
	  this.equals = function(other) {
	    // Comparing string `value` against provided `uuid` will auto-call
	    // toString on `uuid` for comparison
	    return Uuid.isUuid(other) && value == other;
	  };

	  this.isEmpty = function() {
	    return value === Uuid.EMPTY;
	  };
	  
	  this.toString = function() {
	    return value;
	  };
	  
	  this.toJSON = function() {
	    return value;
	  };
	  
	  Object.defineProperty(this, "value", {
	    get: function() { return value; },
	    enumerable: true
	  });
	};

	Object.defineProperty(Uuid, "EMPTY", {
	  value: "00000000000000000000000000000000"
	});

	Uuid.isUuid = function(value) {
	  return value && (value instanceof Uuid || validator.test(value.toString()));
	};

	Uuid.create = function() {
	  return new Uuid(gen(8));
	};

	Uuid.raw = function() {
	  return gen(8);
	};

	module.exports = Uuid;


/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _htmlbarsStandalone = __webpack_require__(339);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _Obj = __webpack_require__(330);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _View2 = __webpack_require__(345);

	var _View3 = _interopRequireDefault(_View2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Dom
	 */
	var Component = function (_View) {
		_inherits(Component, _View);

		/**
	  * @class Dom.Component
	  * @extends Dom.View
	  */
		function Component(name, source, morph, scope, parameters, attributeHash, visitor, subTemplates) {
			var initCallback = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
			var methods = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : {};
			var renderer = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;

			_classCallCheck(this, Component);

			/**
	   * The tag-name that was used to initialize this component
	   * 
	   * @property name
	   * @type {string}
	   */
			var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, source, null, renderer));

			_this.name = name;

			/**
	   * The HTMLBars morph that contains this component
	   * 
	   * @property morph
	   * @type {HTMLBarsMorph}
	   */
			_this.morph = morph;

			/**
	   * The HTMLBars scope for this component
	   * 
	   * @property scope
	   * @type {Object}
	   */
			_this.scope = scope;

			/**
	   * The list of non-keyed parameters used in this component
	   * 
	   * @property parameters
	   * @type {array}
	   */
			_this.parameters = parameters;

			/**
	   * The attribute hash
	   *
	   * @property attributes
	   * @type {object}
	   */
			_this.attributes = {};
			_underscore2.default.each(attributeHash, function (value, key) {
				_this.attributes[_inflection2.default.camelize(key.split('-').join('_'), true)] = value;
			});

			/**
	   * The HTMLBars visitor that was used to initialize this component
	   *
	   * @property visitor
	   * @type {object}
	   */
			_this.visitor = visitor;

			/**
	   * Sub-templates used to yield within the component
	   *
	   * @property subTemplates
	   * @type {object}
	   */
			_this.subTemplates = subTemplates;

			/**
	   * The tagName that will be used when creating this component. The default
	   * value is 'div', but this can be overruled in your handlebar template, or
	   * in the initCallback of the component.
	   * 
	   * @property tagName
	   * @type {String}
	   */
			_this.tagName = 'div';

			/**
	   * The CSS class(es) that will be added to the component upon creation. You can set
	   * this value in the initCallback of the component.
	   *
	   * @property cssClass
	   * @type {string}
	   */
			_this.cssClass = false;

			/**
	   * @property element
	   * @type {DOMElement}
	   */
			_this.element = null;

			/**
	  * The component instance that wrap this component, if any.
	  * 
	  * @property parentComponent
	  * @type {Dom.Component}
	  */
			_this.parentComponent = _this.scope.component;
			_this.setSilently('parent', _this.parentComponent);

			// Do I have a parent?
			if (_this.parentComponent) {
				_this.parentComponent.components[_this.getId()] = _this;
			}

			/**
	   * @property view
	   * @type {Dom.View}
	   */
			_this.view = _this.scope.view;
			if (_this.view) {
				_this.view.components[_this.getId()] = _this;
			}

			/**
	   * The dom-object can be used to listen to dom events on the event
	   * 
	   * @property dom
	   * @type {Core.Obj}
	   */
			_this.dom = new _Obj2.default();

			/**
	   * @property isDestroyed
	   * @type {Boolean}
	   */
			_this.isDestroyed = false;

			// Make attributes available
			_this.with(_this.attributes);

			// Add methods
			_jquery2.default.extend(_this, methods);

			// Before destroy
			_this.hooks.beforeDestroy = [];

			// Definition callback?
			if (initCallback) {
				initCallback.apply(_this);
			}

			return _this;
		}

		_createClass(Component, [{
			key: 'getId',
			value: function getId() {

				// Already set?
				if (!this._id) {

					// Set as attribute
					var id = this.get('id');
					if (id) {
						this._id = id;
					} else {

						// Do it by name
						var name = _inflection2.default.camelize(this.name.split('-').join('_'), true);
						if (Component.instanceCounts[name] === undefined) Component.instanceCounts[name] = 0;
						Component.instanceCounts[name]++;

						this._id = name + Component.instanceCounts[name];
					}
				}
				return this._id;
			}
		}, {
			key: 'sendAction',
			value: function sendAction() {
				var _this2 = this;

				var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


				// No name given?
				if (name === null) {
					name = this.attributes.action;
				}

				// Get the callback.
				var actionScope = this.renderer.hooks.getActionScope(this.scope, name);
				if (!actionScope) throw new Error('[Component ' + this.name + '] Could not find action "' + name + '" within the scope');
				var callback = actionScope.actions[name];

				// Now call it.

				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				var params = _underscore2.default.flatten([_underscore2.default.map(args, function (value) {
					return _this2.renderer.hooks.getValue(value);
				}), this, actionScope]);
				callback.apply(actionScope instanceof _View3.default ? actionScope : this, params);
			}
		}, {
			key: 'renderSync',
			value: function renderSync() {
				var _this3 = this;

				// Before render hook
				_underscore2.default.each(this.hooks.beforeRender, function (cb) {
					cb.apply(_this3);
				});

				// Create the template
				try {

					// Render it
					this.renderResult = this.getTemplate().render(this, this.renderer, {
						scope: this.scope,
						template: this.subTemplates.default
					});
					this.documentFragment = this.renderResult.fragment;
				} catch (error) {
					this.rejectPromise('ready', error);
					return;
				}

				// Study the object
				this.study(function () {
					_this3.scheduleRevalidate();
				});

				// Create the element
				this.element = document.createElement(this.tagName);
				_underscore2.default.each(this.attributes, function (value, key) {

					// Check value type
					if (value === 'true') value = true;
					if (value === 'false') value = false;
					if (_jquery2.default.isNumeric(value) && !/^0/.test(value)) value = parseFloat(value);
					if (value !== _this3.attributes[key]) {
						_this3.attributes[key] = value;
					}

					// Is it a useful value?
					if (typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') {
						var attrKey = _inflection2.default.underscore(key).split('_').join('-');
						_this3.element.setAttribute(attrKey, value);
					}
				});

				this.$element = (0, _jquery2.default)(this.element);
				this.$element.append(this.documentFragment);

				// CSS class
				if (this.cssClass) this.$element.addClass(this.cssClass);

				// Trigger beforeAdded
				this.trigger('beforeAdd', this.$element);

				// Put element in result
				this.morph.setNode(this.$element[0]);

				// Done.
				this.trigger('added', this.$element);

				// Enable DOM events
				this.enableDomEvents();

				// Find child components
				if (_underscore2.default.size(this.components) > 0) {

					// Wait for the children to complete first
					var promises = _underscore2.default.map(this.components, function (child) {
						return child.getPromise('ready');
					});
					Promise.all(promises).then(function () {
						_this3.resolvePromise('ready');
						_View3.default.any.trigger('render', _this3.$element);
					});
				} else {

					// We are ready now.
					this.resolvePromise('ready');
					_View3.default.any.trigger('render', this.$element);
				}
			}
		}, {
			key: 'enableDomEvents',
			value: function enableDomEvents() {
				var _this4 = this;

				// Loop through callbacks
				this.dom._listeners.forEach(function (callbacks, name) {

					// Proper event?
					if (!_underscore2.default.contains(Component.DomEventNames, name)) {
						throw new Error('The "' + name + '" event is not a valid DOM event.');
					}

					// Listen and connect.
					_this4.$element.on(name, function () {
						for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
							args[_key2] = arguments[_key2];
						}

						args.unshift(name);
						_this4.dom.trigger.apply(_this4.dom, args);
					});
				});
			}
		}, {
			key: 'getSubTemplate',
			value: function getSubTemplate(key) {

				var block = _htmlbarsStandalone2.default.Util.Template.blockFor(_htmlbarsStandalone2.default.Runtime.render, this.subTemplates[key], {
					scope: this.scope
				});

				return block;
			}
		}, {
			key: 'getAttribute',
			value: function getAttribute(key) {
				var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				var value = this.attributes[key];
				if (value === undefined) value = defaultValue;
				return value;
			}
		}, {
			key: 'get',
			value: function get(key) {

				// Do basics first
				var value = _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'get', this).call(this, key);

				// Nothing?
				if (value === undefined) {

					// Bubble up.
					if (this.parentComponent) {

						return this.parentComponent.get(key);
					} else if (this.view) {

						return this.view.get(key);
					}
				}

				return value;
			}

			/**
	   * Set default values for component attributes. Use this in the initCallback.
	   *
	   * @method defaults
	   * @param  {Object} hash   Key/value pairs
	   * @chainable
	   */

		}, {
			key: 'defaults',
			value: function defaults(hash) {
				var _this5 = this;

				this.withoutNotifications(function () {
					_underscore2.default.each(hash, function (value, key) {

						// Set?
						if (_this5.get(key) === undefined) {
							_this5.set(key, value);
						}
					});
				});
			}
		}, {
			key: 'beforeDestroy',
			value: function beforeDestroy(callback) {
				this.hooks.beforeDestroy.push(callback);
				return this;
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				var _this6 = this;

				// I am destroyed
				this.isDestroyed = true;

				// Call the hooks
				_underscore2.default.each(this.hooks.beforeDestroy, function (cb) {
					cb.apply(_this6);
				});
			}
		}]);

		return Component;
	}(_View3.default);

	Component.DomEventNames = [

	// Touch events
	'touchStart', 'touchMove', 'touchEnd', 'touchCancel',

	// Keyboard
	'keyDown', 'keyUp', 'keyPress',

	// Mouse
	'mouseDown', 'mouseUp', 'contextMenu', 'click', 'doubleClick', 'mouseMove', 'focusIn', 'focusOut', 'mouseEnter', 'mouseLeave',

	// Form
	'submit', 'change', 'focusIn', 'focusOut', 'input',

	// HTML5
	'dragStart', 'drag', 'dragEnter', 'dragLeave', 'dragOver', 'dragEnd', 'drop'];

	Component.registry = new Map();

	Component.instanceCounts = {};

	module.exports = Component;

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _htmlbarsStandalone = __webpack_require__(339);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	var _Observable2 = __webpack_require__(329);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Binding = __webpack_require__(341);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _ApiCall = __webpack_require__(347);

	var _ApiCall2 = _interopRequireDefault(_ApiCall);

	var _Obj = __webpack_require__(330);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _Model = __webpack_require__(349);

	var _Model2 = _interopRequireDefault(_Model);

	var _Collection = __webpack_require__(351);

	var _Collection2 = _interopRequireDefault(_Collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Dom
	 */
	var View = function (_Observable) {
		_inherits(View, _Observable);

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
	  * @extends Core.Observable
	  *
	  * @constructor
	  * @param {string} source   			The source for the view
	  * @param {Dom.Renderer} renderer 		The Renderer instance that will be used by HTMLBars
	  */
		function View(source) {
			var initCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var renderer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			_classCallCheck(this, View);

			/**
	   * Promises for data to load, keyed by the key
	   * as provided in the `with` method
	   * 
	   * @property dataPromises
	   * @type {Object}
	   */
			var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

			_this.dataPromises = {};

			/**
	   * @property dataExpectations
	   * @type {Object}
	   */
			_this.dataExpectations = {};

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
	   * @property templateUrl
	   * @type {string}
	   */
			_this.templateUrl = null;

			/**
	   * @property actions
	   * @type {Object}
	   */
			_this.actions = {};

			/**
	   * @property components
	   * @type {Object}
	   */
			_this.components = {};

			/**
	   * When active this view will render and update when
	   * the data changes.
	   * 
	   * @property isActive
	   * @type {Boolean}
	   */
			_this.isActive = true;

			/**
	   * @property bindings
	   * @type {Set}
	   */
			_this.bindings = new Set();

			/**
	   * @property renderer
	   * @type {Dom.Renderer}
	   */
			_this.renderer = renderer ? renderer : (0, _App2.default)().config('renderer');

			/**
	   * The RenderResult gotten back from the Template rendering.
	   * 
	   * @property renderResult
	   * @type {HTMLBars.RenderResult}
	   */
			_this.renderResult = null;

			/**
	   * The DocumentFragment that is the rendered view.
	   * 
	   * @property documentFragment
	   * @type {DocumentFragment}
	   */
			_this.documentFragment = null;

			/**
	   * The jQuery version of the DocumentFragment, that can be 
	   * used to manipulate the view's contents.
	   * 
	   * @property $element
	   * @type {jQuery}
	   */
			_this.$element = null;

			/**
	   * @property apiCalls
	   * @type {Array}
	   */
			_this.apiCalls = [];

			_this.hooks = {
				beforeRender: [],
				beforeLeave: []
			};

			//////////////////////////
			// Check out the source //
			//////////////////////////

			// No template (just yield)?
			if (source === false) {
				_this.templateString = '{{yield}}';
			}

			// Is it HTML?		
			else if (/^\<[a-z\!]/.test(source) || /^{{/.test(source)) {

					// Use code now
					_this.templateString = source;
				}

				// Name?
				else if (/[a-z0-9\-]+\./.test(source) || /^[a-zA-Z]+$/.test(source)) {

						// Is it cached?
						if (View.TemplateCache.has(source)) {

							// Use it.
							_this.templateString = View.TemplateCache.get(source);
						} else {

							// Load template
							var url = (0, _App2.default)().uri((0, _App2.default)().config('viewPath'), source.split(/\./).join('/'), '.' + (0, _App2.default)().config('viewExtension'));
							_this.templateUrl = url;
						}
					}

					// Url.
					else {

							// Load it
							_this.templateUrl = url;
						}

			// Definition callback?
			if (initCallback) {
				initCallback.apply(_this);
			}

			return _this;
		}

		_createClass(View, [{
			key: 'beforeRender',
			value: function beforeRender(callback) {
				this.hooks.beforeRender.push(callback);
				return this;
			}
		}, {
			key: 'beforeLeave',
			value: function beforeLeave(callback) {
				this.hooks.beforeLeave.push(callback);
				return this;
			}
		}, {
			key: 'loadTemplate',
			value: function loadTemplate() {
				var _this2 = this;

				// Already loading or loaded?
				if (this._promises.has('template')) {
					return this.getPromise('template');
				}

				// Promise.
				var promise = this.promise('template', function (resolve, reject) {

					// Do we have the template already?
					if (_this2.templateString) {
						resolve(_this2.templateString);
						return;
					}

					// Load it.
					_jquery2.default.ajax(_this2.templateUrl).then(function (result) {

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
					var key = args[0],
					    value = args[1];

					// Is the key a string?

					if (typeof key !== 'string') throw new TypeError('[Dom.View] The "with" method accepts either a key, value or hash-object as arguments.');

					// Is it an Api call?
					if (value instanceof _ApiCall2.default) {

						// Get the promise and add to api calls list
						this.apiCalls.push(value);
						var promise = this.dataPromises[key] = value.getPromise('complete');
						this.loadPromises.push(promise);
						promise.then(function (result) {
							_this3.withoutNotifications(function () {
								_this3.set(key, result, true, true);
							});
						});
					}

					// Is the data a promise?
					else if (value instanceof Promise) {

							// Add to promises
							this.dataPromises[key] = value;
							this.loadPromises.push(value);
							value.then(function (result) {
								_this3.withoutNotifications(function () {
									_this3.set(key, result, true, true);
								});
							});
						} else {

							// Is it a Binding?
							if (value instanceof _Binding2.default) {

								// Use value
								value = value.getReference();
							}

							// Set it now (convert to observables, and do not trigger updates)
							this.withoutNotifications(function () {
								_this3.set(key, value, true);
							});
						}
				}

				return this;
			}

			/**
	   * Tell the View to expect given data to present in order to render properly. When this data
	   * is not present, the View will throw an error.
	   * 
	   * @method expect
	   * @param  {string}  key          The data key that is expected in order for the View to render properly
	   * @param  {Number}  minimumCount (Default = 1) The minimum number of records we expect
	   * @param  {Number}  maximumCount (Default = false) The maximum number of recorders we expected
	   * @chainable
	   */

		}, {
			key: 'expect',
			value: function expect(key) {
				var minimumCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
				var maximumCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


				// Set it
				this.dataExpectations[key] = {
					min: minimumCount,
					max: maximumCount
				};
				return this;
			}
		}, {
			key: 'action',
			value: function action(key, callback) {

				this.actions[key] = callback;
				return this;
			}
		}, {
			key: 'sendAction',
			value: function sendAction() {
				var _this4 = this;

				var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


				// Get the callback.
				var actionScope = this;
				var callback = actionScope.actions[name];

				// Now call it.

				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}

				var params = _underscore2.default.flatten([_underscore2.default.map(args, function (value) {
					return _this4.renderer.hooks.getValue(value);
				}), this, actionScope]);
				callback.apply(actionScope, params);
			}

			/**
	   * Render the view!
	   *
	   * @method render
	   * @return {Promise}  The 'render' promise is returned. The 'added' promise will be called
	   *                    when the view is added to the DOM.
	   **/

		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				// Make sure the template is loaded
				this.loadTemplate();

				// We make the 'render' promise.
				return this.promise('render', function (resolve, reject) {

					// Start api calls.
					_underscore2.default.invoke(_this5.apiCalls, 'execute');

					/////////////////////////////////////////
					// Wait for all loadPromises to finish //
					/////////////////////////////////////////

					Promise.all(_this5.loadPromises).then(function () {

						// Check present of data
						_underscore2.default.each(_this5.dataExpectations, function (options, key) {

							// Get it
							var data = _this5.get(key);
							if (data === undefined) return reject('The View expected ' + key + ' to be present, but it was not.');

							// Model or Collection?
							if (!(data instanceof _Model2.default || data instanceof _Collection2.default)) return reject('The View expected ' + key + ' to be a Model or Collection, but it was a ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)));

							// Check count
							if (data instanceof _Model2.default && options.min && options.min > 1) return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, only one was present');
							if (data instanceof _Collection2.default) {
								if (options.min && data.length < options.min) return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, ' + data.length + ' were present');
								if (options.max && data.length > options.max) return reject('The View expected ' + key + ' to have no more than ' + options.max + ' records, ' + data.length + ' were present');
							}
						});

						_this5.renderSync();
						resolve();
					}, function (error) {

						reject(error);
					});
				});
			}

			/**
	   * Render the view synchronously. Only use this when you know all
	   * the data is already loaded!
	   *
	   * @method renderSync
	   * @chainable
	   */

		}, {
			key: 'renderSync',
			value: function renderSync() {
				var _this6 = this;

				/////////////////////
				// Create template //
				/////////////////////

				// Before render hook
				var continueRendering = true;
				_underscore2.default.each(this.hooks.beforeRender, function (cb) {
					if (!continueRendering) return;
					var result = cb.apply(_this6);
					if (result === false) continueRendering = false;
				});

				// Before render returned false?
				if (!continueRendering) return this;

				// Render it
				try {
					this.renderResult = this.getTemplate().render(this, this.renderer);
				} catch (error) {
					this.rejectPromise('render', error);
					return;
				}

				// Localize and be done!
				this.documentFragment = this.renderResult.fragment;
				this.resolvePromise('render', this.documentFragment);

				return this;
			}
		}, {
			key: 'getTemplate',
			value: function getTemplate() {

				// Create
				if (!this.template) {
					this.template = _htmlbarsStandalone2.default.Compiler.compile(this.templateString);
				}
				return this.template;
			}

			/**
	   * Have the rendered view be revalidated when it's convenient.
	   * 
	   * @method scheduleRevalidate
	   * @chainable
	   */

		}, {
			key: 'scheduleRevalidate',
			value: function scheduleRevalidate() {
				var _this7 = this;

				// Still active?
				if (!this.isActive) {
					return this;
				}

				// Not already pending?
				if (!this.revalidateTimeout) {

					// Wait a bit.
					this.revalidateTimeout = setTimeout(function () {

						// Revalidate!
						_this7.revalidate();
					}, View.RevalidationDelay);
				}

				return this;
			}

			/**
	   * Revalidate the rendered view. Revalidation means the updating of 
	   * 'dirty' elements (morphs). The dirtying is done by the Bindings, set up
	   * by the Renderer.
	   *
	   * If your binding is valid, and components work as the should, you shouldn't 
	   * need to call this method. If you do though, it is better to call
	   * `scheduleRevalidate` instead, to prevent undue calls.
	   * 
	   * @method revalidate
	   * @chainable
	   */

		}, {
			key: 'revalidate',
			value: function revalidate() {
				if (this.renderResult) this.renderResult.revalidate();
				this.trigger('revalidate');
				this.revalidateTimeout = false;
				return this;
			}

			/**
	   * Add the view to the ViewContainer, replacing previous contents
	   * and making sure the ViewContainer knows it's gotten the view.
	   * 
	   * @method addToContainer
	   * @param {Dom.ViewContainer} viewContainer 
	   */

		}, {
			key: 'addToContainer',
			value: function addToContainer(viewContainer) {

				// Set view
				viewContainer.setView(this);

				// Create wrapper
				var $view = (0, _jquery2.default)('<view/>');
				$view.html(this.documentFragment);

				// Add to DOM
				viewContainer.setContent($view);

				// Set element
				this.$element = $view;

				// Done.
				View.any.trigger('render', $view);
				this.resolvePromise('ready', [this]);
			}

			/**
	   * Handle the leaving of the page this View is on, e.g. destroying
	   * components.
	   *
	   * @method leave
	   * @return {Promise}
	   */

		}, {
			key: 'leave',
			value: function leave() {
				var _this8 = this;

				return new Promise(function (resolve, reject) {

					// Before ,leave hook
					var allowLeave = true;
					_underscore2.default.each(_this8.hooks.beforeLeave, function (cb) {
						if (allowLeave) {
							var result = cb.apply(_this8);
							if (result === false) allowLeave = false;
						}
					});

					// Can't leave?
					if (!allowLeave) return reject();

					// I am destroyed
					_this8.isActive = false;

					// Destroy components
					_underscore2.default.each(_this8.components, function (component) {
						component.destroy();
						component.isActive = false;
					});

					// Kill bindings
					_this8.bindings.forEach(function (binding) {
						binding.destroy();
					});

					// Done.
					resolve();
				});
			}
		}, {
			key: 'addBinding',
			value: function addBinding(binding) {
				this.bindings.add(binding);
				return this;
			}
		}]);

		return View;
	}(_Observable3.default);

	/**
	 * The TemplateCache is used to cache templates by their name. When you are
	 * building your application for production, you can also use this to bundle
	 * the templates.
	 * 
	 * @property TemplateCache
	 * @static
	 * @type {Map}
	 */


	View.TemplateCache = new Map();

	/**
	 * The number of milliseconds to wait before revalidating your views after
	 * a change in the data has occured.
	 *
	 * This value can be very low, as it is mostly used to bundle changes together
	 * that occur semi-simultaneously.
	 * 
	 * @property RevalidationDelay
	 * @static
	 * @type {Number}
	 */
	View.RevalidationDelay = 3;

	View.any = new _Obj2.default();

	module.exports = View;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
		return _ClassMap2.default.get('Application').getInstance();
	};

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _queryString = __webpack_require__(305);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _ApiError = __webpack_require__(348);

	var _ApiError2 = _interopRequireDefault(_ApiError);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Model = __webpack_require__(349);

	var _Model2 = _interopRequireDefault(_Model);

	var _Collection = __webpack_require__(351);

	var _Collection2 = _interopRequireDefault(_Collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Api
	 */
	var ApiCall = function (_Obj) {
		_inherits(ApiCall, _Obj);

		/**
	  * @class Api.ApiCall 
	  * 
	  * @constructor 
	  * @param  {Api.Api} api 	The Api instance this call originates from
	  * @param  {string} method      The HTTP method to use (get, post, put, etc.)
	  * @param  {string} uri			The uri to call
	  * @param  {Object} data        
	  * @param  {Object} ajaxOptions 	 
	  */
		function ApiCall(api, method, uri) {
			var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
			var ajaxOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

			_classCallCheck(this, ApiCall);

			/**
	   * @property api
	   * @type {Api.Api}
	   */
			var _this = _possibleConstructorReturn(this, (ApiCall.__proto__ || Object.getPrototypeOf(ApiCall)).call(this));

			_this.api = api;

			/**
	   * The HTTP method (get, post, put, patch, or delete)
	   * 
	   * @property method
	   * @type {string}
	   */
			_this.method = method;

			/**
	   * Data to send along with the request
	   * 
	   * @property data
	   * @type {Mixed}
	   */
			_this.data = data;

			/**
	   * Configuration options for the Ajax call
	   *
	   * @property ajaxOptions
	   * @type {Object}
	   */
			_this.ajaxOptions = ajaxOptions;

			/**
	   * Query parameters to add onto the url
	   *
	   * @property queryParams
	   * @type {Object}
	   */
			_this.queryParams = _queryString2.default.parse(_queryString2.default.extract(uri));

			/**
	   * @property uri
	   * @type {string}
	   */
			_this.uri = uri.split('?')[0];

			/**
	   * The model class used when it cannot be deduced from the
	   * Api result
	   * 
	   * @property modelClass
	   * @type {Class}
	   */
			_this.modelClass = null;

			/**
	   * When true, the models will be linked to the global Model stores. When false,
	   * a local store, specific to this ApiCall, will be used. (Default = true)
	   * 
	   * @property useGlobalStore
	   * @type {Boolean}
	   */
			_this.useGlobalStore = true;

			/**
	   * Local model store, used when useGlobalStore is false.
	   * 
	   * @property store
	   * @type {Object}
	   */
			_this.store = {};

			/**
	   * @property expectModel
	   * @type {Boolean}
	   */
			_this.expectModel = false;

			/**
	   * @property expectCollection
	   * @type {Boolean}
	   */
			_this.expectCollection = false;

			/**
	   * when true, the call will resolve with a null value on error. This can be set
	   * by using the allowFailure method
	   * 
	   * @property allowFailure
	   * @type {Boolean}
	   */
			_this.resolvesOnError = false;

			return _this;
		}

		/**
	  * Execute the Api Call
	  *
	  * @method execute
	  * @return {Promise}
	  */


		_createClass(ApiCall, [{
			key: 'execute',
			value: function execute() {
				var _this2 = this;

				// Authorize it
				var auth = this.api.getAuth();
				if (auth) auth.authorizeApiCall(this);

				// Make a promise
				return this.promise('complete', function (resolve, reject) {

					// Combine options
					var queryString = _queryString2.default.stringify(_this2.queryParams);
					if (queryString.length > 0) queryString = '?' + queryString;
					var options = _jquery2.default.extend({

						url: _this2.api.makeUrl(_this2.uri) + queryString,
						method: _this2.method,
						data: _this2.data

					}, _this2.ajaxOptions);

					// Before send
					var beforeSends = [];
					if (_this2.api.settings.beforeSend) beforeSends.push(_this2.api.settings.beforeSend);
					if (options.beforeSend) beforeSends.push(options.beforeSend);
					options.beforeSend = function (jqXhr, settings) {

						// Loop and exexcute
						_underscore2.default.each(beforeSends, function (cb) {
							cb(jqXhr, settings);
						});
					};

					// Make the call
					_this2.api.ajax(options).then(function (result, statusText, jqXhr) {

						// 204 (No-Content)?
						if (jqXhr.status === 204 && result === undefined) {
							resolve(null);
							return;
						}

						//non Resource response type
						if (result && result.responseType == 'nonResource') {
							resolve(result);
							return;
						}

						// Deserialize it
						var response = _this2.api.deserialize(result, _this2);

						// Do we expect a single model?
						if (_this2.expectModel && response instanceof _Collection2.default) {
							response = response.first();

							// Or a collection
						} else if (_this2.expectCollection && response instanceof _Model2.default) {

							// Make a collection of it
							var coll = new _Collection2.default();
							coll.add(response);
							response = coll;
						}

						// Done!
						resolve(response);
					}).fail(function (error) {

						if (_this2.resolvesOnError) {

							//resolve with null
							resolve(null);
						} else {

							// Make error
							var errorObj = new _ApiError2.default(_this2, error);
							if (auth) {
								errorObj = auth.processApiError(errorObj);
							}
							reject(errorObj);
						}
					});
				});
			}

			////////////
			// Stores //
			////////////

		}, {
			key: 'useLocalStore',
			value: function useLocalStore() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.useGlobalStore = !value;
				return this;
			}
		}, {
			key: 'allowFailure',
			value: function allowFailure() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.resolvesOnError = value;
				return this;
			}
		}, {
			key: 'getResponseModel',
			value: function getResponseModel(modelName, id) {

				// Global?
				if (this.useGlobalStore) {

					// Get from Model store
					return _Model2.default.getFromStore(modelName, id);
				} else {

					// Known?
					if (this.store[modelName] === undefined) return null;
					return this.store[modelName][id];
				}
			}
		}, {
			key: 'storeReponseModel',
			value: function storeReponseModel(model) {

				// Global?
				if (this.useGlobalStore) {

					// Store it
					var store = _Model2.default.getStore(model.getModelName());
					store.set(model.get('id'), model);
				} else {

					// Set it locally
					var modelName = model.getModelName();
					if (this.store[modelName] === undefined) this.store[modelName] = {};
					this.store[modelName][model.get('id')] = model;
				}
				return this;
			}

			/**
	   * Add given key/value(s) to the queryParams
	   *
	   * @method query
	   * @param  {string|Object} keyOrHash  Either a key or a key/value hash
	   * @param  {Mixed} value     When given a single key/value pair, enter the value as the second argument
	   * @chainable
	   */

		}, {
			key: 'query',
			value: function query(keyOrHash) {
				var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				// Is it a key / value?
				if (typeof keyOrHash === 'string') {
					this.queryParams[keyOrHash] = value;
				} else {
					_jquery2.default.extend(this.queryParams, keyOrHash);
				}
				return this;
			}

			/**
	   * Add given pagination page to the queryParams
	   *
	   * @method query
	   * @param  pageNumber
	   * @chainable
	   */

		}, {
			key: 'page',
			value: function page(pageNumber) {
				var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				if (pageSize !== null) this.pageSize(pageSize);
				return this.query('page[number]', pageNumber);
			}

			/**
	   * Add given pagesize to the queryParams
	   *
	   * @method query
	   * @param  pageSize
	   * @chainable
	   */

		}, {
			key: 'pageSize',
			value: function pageSize(_pageSize) {
				return this.query('page[size]', _pageSize);
			}

			/**
	   * Set the request data
	   * 
	   * @method setData
	   * @param {mixed} data
	   * @chainable
	   */

		}, {
			key: 'setData',
			value: function setData(data) {
				this.data = data;
				return this;
			}
		}]);

		return ApiCall;
	}(_Obj3.default);

	module.exports = ApiCall;

/***/ },
/* 348 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Api
	 */
	var ApiError = function () {
		function ApiError(apiCall, xhrError) {
			_classCallCheck(this, ApiError);

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

		_createClass(ApiError, [{
			key: 'getStatusCode',
			value: function getStatusCode() {

				return this.xhrError.status;
			}
		}, {
			key: 'getMessage',
			value: function getMessage() {

				// JSON body with message?
				if (this.xhrError.responseJSON && this.xhrError.responseJSON.message) {

					return this.xhrError.responseJSON.message;
				}

				// Text?
				if (this.xhrError.responseText) return this.xhrError.responseText;

				// Don't know
				return 'Unknown error';
			}
		}, {
			key: 'getFormErrors',
			value: function getFormErrors() {

				// JSON body with message?
				if (this.xhrError.responseJSON && this.xhrError.responseJSON.errors) {

					// Get errors
					return this.xhrError.responseJSON.errors;
				}
				return {};
			}
		}, {
			key: 'getStatus',
			value: function getStatus() {

				return this.xhrError.status;
			}
		}]);

		return ApiError;
	}();

	module.exports = ApiError;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get2 = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment = __webpack_require__(304);

	var _moment2 = _interopRequireDefault(_moment);

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	var _Observable2 = __webpack_require__(329);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _ObservableArray = __webpack_require__(340);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _ModelStore = __webpack_require__(350);

	var _ModelStore2 = _interopRequireDefault(_ModelStore);

	var _Collection = __webpack_require__(351);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Utils = __webpack_require__(352);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _ComputedProperty = __webpack_require__(333);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Data
	 */
	var Model = function (_Observable) {
		_inherits(Model, _Observable);

		/**
	  * The Model class is an extension of Observable, and is used
	  * to hold data that is received from an Api, and save that data, etc.
	  * 
	  * @class Data.Model
	  *
	  * @constructor
	  * @param  {Object}  initValues           
	  * @param  {Boolean} convertToObservables 
	  */
		function Model() {
			var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			_classCallCheck(this, Model);

			/**
	   * The original values as received from the Api
	   * 
	   * @property originalValues
	   * @type {object}
	   */
			var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, initValues, convertToObservables));

			_this.originalValues = {};
			_underscore2.default.each(initValues, function (value, key) {
				_this.originalValues[key] = _this.uncastValue(key, value);
			});

			/**
	   * Values of relationships, keyed by the relationshipname
	   * 
	   * @property related
	   * @type {Object}
	   */
			_this.related = _this.related || {};

			/**
	   * The watchable current state of this model. This
	   * contains attributes for 'busy', 'saving', and 'dirty'.
	   *
	   * You can use this in a view to update the view according
	   * to the model state, using the 'is' property e.g.:
	   *
	   * 	{{#if author.is.busy}}
	   * 		Please wait a moment...
	   * 	{{/if}}
	   * 
	   * @property state
	   * @type {Observable}
	   */
			_this.state = new _Observable3.default({
				busy: false,
				saving: false,
				dirty: false,
				deleting: false,
				deleted: false,
				new: !_this.get('id')
			});

			_this.state.study(function () {
				_this._scheduleAttributeChanged('is');
			});

			/**
	   * list of studied relationships
	   * @type {Object}
	   */
			_this._relationshipStudies = {};

			// Check computed!
			if (_this.constructor.definition) {

				// Apply to model
				_this.constructor.definition.initializeModel(_this);
			}

			// A initialize method on the model?
			if (typeof _this.initialize === 'function') {
				_this.initialize();
			}

			return _this;
		}

		///////////
		// State //
		///////////

		/**
	  * Get the model state. This method is used to make the state
	  * available in views.
	  * 
	  * @method getIs
	  * @return {Observable}
	  */


		_createClass(Model, [{
			key: 'getIs',
			value: function getIs() {
				return this.state;
			}

			/**
	   * @method isBusy
	   * @return {Boolean} 
	   */

		}, {
			key: 'isBusy',
			value: function isBusy() {
				return this.state.get('busy');
			}

			/////////////////////////
			// Information methods //
			/////////////////////////

			/**
	   * Checks whether this model is new or has already been saved. This
	   * is determined by checking whether the 'id' is set.
	   * 
	   * @method isNew
	   * @return {Boolean} 
	   */

		}, {
			key: 'isNew',
			value: function isNew() {
				return !this.get('id');
			}

			/////////////////
			// Get and set //
			/////////////////

		}, {
			key: '_get',
			value: function _get(key) {

				// Is there a getter?
				var methodName = 'get' + _inflection2.default.camelize(key);
				if (this[methodName] && typeof this[methodName] === 'function') {
					return this[methodName].apply(this, [this.attributes[key]]);
				}

				// Is it a relationship that was not yet loaded
				var relationship = this.getRelationship(key);
				if (!this.related) this.related = {};
				if (relationship && !this.related[key]) {
					this.related[key] = relationship.getInitValue();
				}

				// Is it a relationship?
				if (this.related && this.related[key]) return this.related[key];

				// Nothing special. Do basics
				return _get2(Model.prototype.__proto__ || Object.getPrototypeOf(Model.prototype), '_get', this).call(this, key);
			}
		}, {
			key: '_set',
			value: function _set(key, value) {

				// Is there a setter?
				var methodName = 'set' + _inflection2.default.camelize(key);
				if (this[methodName] && typeof this[methodName] === 'function') {
					return this[methodName].apply(this, [value]);
				}

				// Is it a relationship that was not yet loaded
				if (!this.related) this.related = {};
				if (this.getRelationship(key)) {

					// Set the model
					this.setRelatedModel(key, value);
				} else {

					// Cast if necessary
					value = this.castValue(key, value);

					// Continue with it
					_get2(Model.prototype.__proto__ || Object.getPrototypeOf(Model.prototype), '_set', this).call(this, key, value);
				}

				// Is dirty?
				if (this.state) {
					this._scheduleUpdateDirty();
				}

				return this;
			}

			/**
	   * Override Observable.observe
	   *
	   * Check if model has HasMany, HasManyTrough or BelongToMany relations it can study
	   */

		}, {
			key: 'observe',
			value: function observe(keyOrKeys, callback) {
				var _this2 = this;

				//can have multiple keys, call function for each key
				if (Array.isArray(keyOrKeys)) {
					_underscore2.default.each(keyOrKeys, function (key) {
						_this2.observe(key, callback);
					});
					return this;
				}
				var key = keyOrKeys;

				//Study relation?
				var rel = this.getRelationship(key);
				if (rel && rel.usesCollection()) {

					if (this._relationshipStudies[key] === undefined) {
						this._relationshipStudies[key] = function () {
							_this2._scheduleAttributeChanged(key);
						};
						this.get(key).study(this._relationshipStudies[key]);
					}
				}

				//super
				return _get2(Model.prototype.__proto__ || Object.getPrototypeOf(Model.prototype), 'observe', this).call(this, keyOrKeys, callback);
			}

			/**
	   * Get a value for use in the API, meaning it is in
	   * database format. For example, dates will be converted back
	   * from Moment instances into strings.
	   *
	   * @method getForApi
	   * @param  {string} key 
	   * @return {mixed} 
	   */

		}, {
			key: 'getForApi',
			value: function getForApi(key) {

				// Get value
				var value = this.uncastValue(key, this.attributes[key]);
				return value;
			}

			/**
	   * Cast given value according to the AttributeDefinition for given
	   * key. For example, if you pass a string containing a date as value,
	   * for a Date key, you will receive a Moment instance.
	   * 
	   * @method castValue
	   * @param  {string} key   
	   * @param  {Mixed} value 
	   * @return {Mixed}       
	   */

		}, {
			key: 'castValue',
			value: function castValue(key, value) {

				// Do we need to cast it?
				var attributeDefinition = this.getAttributeDefinition(key);
				if (attributeDefinition) {
					value = attributeDefinition.cast(value);
				}

				return value;
			}

			/**
	   * Uncast given value according to the AttributeDefinition for given key.
	   *
	   * @method uncastValue
	   * @param  {string} key   
	   * @param  {Mixed} value 
	   * @return {Mixed}       
	   */

		}, {
			key: 'uncastValue',
			value: function uncastValue(key, value) {

				// Do we need to uncast it?
				var attributeDefinition = this.getAttributeDefinition(key);
				if (attributeDefinition) {
					value = attributeDefinition.uncast(value);
				}

				return value;
			}

			/////////////////////////
			// Api related methods //
			/////////////////////////

			/**
	   * Set attribute values that were retrieved from the API, meaning
	   * they will not be seen as dirty, and will overwrite the original values
	   * of the model. 
	   *
	   * @method setAttributesFromApi
	   * @param {Object} attributes
	   * @chainable
	   */

		}, {
			key: 'setAttributesFromApi',
			value: function setAttributesFromApi(attributes) {
				var _this3 = this;

				// Loop through them and set values that are not dirty
				_underscore2.default.each(attributes, function (value, key) {

					// Dirty?
					if (_this3.isDirty(key)) return;

					// Set it, and see this as a non-dirty value
					_this3.setAttribute(key, value);
					_this3.originalValues[key] = _this3.uncastValue(key, _this3.attributes[key]);
				});
				return this;
			}

			/**
	   * Get attribute values for use in the API.
	   *
	   * @method getAttributesForApi
	   * @param  {Boolean} [onlyDirty=true]  When true, only attributes that have been changed will be retrieved
	   * @param  {Boolean} [modelIsDynamic=false]	 When true, attributes that are not in the model definition are also passed along. This overrides the model definition's 'dynamic' value
	   * @return {Object}      A hash containing attribute key/values
	   */

		}, {
			key: 'getAttributesForApi',
			value: function getAttributesForApi() {
				var _this4 = this;

				var onlyDirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


				// Which attributes to use?
				var attr = onlyDirty ? this.getDirty() : _underscore2.default.defaults({}, this.attributes);

				// Check model definition
				var modelDefinition = this.getDefinition();

				if (modelDefinition) {

					// Use only attributes in the model definition
					var modelAttr = _underscore2.default.pick(attr, function (value, key) {

						// Dynamic?
						if (!modelDefinition.isDynamic) {

							// Has property?
							if (!(modelDefinition.hasAttribute(key) || modelDefinition.getRelationshipByLocalKey(key) !== undefined)) return false;
						}

						// Is the value computed?
						if (value instanceof _ComputedProperty2.default) return false;

						// OK.
						return true;
					});

					// Now uncast the values
					attr = _underscore2.default.mapObject(modelAttr, function (value, key) {

						// Get the actual value
						value = _Utils2.default.getValue(value);

						// Uncast it for DB usage
						var definition = _this4.getAttributeDefinition(key);
						if (definition) value = definition.uncast(value);
						return value;
					});

					// Not only dirty?
					if (!onlyDirty && !modelDefinition.isDynamic) {

						// Also add defined attributes that were not set in the model (by default value)
						var missingKeys = _underscore2.default.difference(modelDefinition.getApiAttributeNames(), _underscore2.default.keys(attr));
						_underscore2.default.each(missingKeys, function (key) {
							attr[key] = _this4.getAttributeDefinition(key).getDefaultValue();
						});
					}

					// Remove hidden attributes
					attr = _underscore2.default.omit(attr, modelDefinition.getHiddenAttributeNames());

					return attr;
				} else {
					(function () {

						// Loop attributes
						var convertedAttr = {};
						_underscore2.default.each(attr, function (value, key) {

							// Is the value computed?
							if (value instanceof _ComputedProperty2.default) return;

							// Get the actual value
							value = _Utils2.default.getValue(value);

							// Is it a moment?
							if (_moment2.default.isMoment(value)) {

								// Make it ISO 8601
								value = value.format('YYYY-MM-DD HH:mm:ss');
							}

							// Is it an array or model?
							else if (value instanceof _ObservableArray2.default) {
									value = JSON.stringify(value.toArray());
								} else if (value instanceof Model) {
									value = JSON.stringify(value.getAttributesForApi(onlyDirty));
								}

							// Set it
							convertedAttr[key] = value;
						});

						// Switch
						attr = convertedAttr;
					})();
				}

				delete attr.id;
				return attr;
			}

			/**
	   * Get the Api instance that is used by this model
	   *
	   * @method getApi
	   * @return {Api.Api}
	   */

		}, {
			key: 'getApi',
			value: function getApi() {

				// Check model definition
				var apiName = this.getDefinition() ? this.getDefinition().api : null;
				return (0, _App2.default)().apis[apiName];
			}

			/**
	   * Get the uri for this model, that can be used in an API call
	   *
	   * @method getApiUri
	   * @return {string}
	   */

		}, {
			key: 'getApiUri',
			value: function getApiUri() {

				// Check definition
				var def = this.getDefinition();
				if (!def) throw new Error('Cannot guess the ApiUri for a model that has no ModelDefinition');

				// Get api uri
				return def.getApiUri(this.get('id'));
			}

			/**
	   * Save the model to the Api. 
	   *
	   * Possible options are:
	   * 
	   * **uri** (string)
	   * A custom uri to use instead of the model's default uri
	   * 
	   * **includeRelated** (boolean)
	   * _(Default: true)_ 
	   * Whether to included modifications in the relationships 
	   *
	   * **includeRelatedData** (boolean)	
	   * _(Default: false)_ 
	   * Whether to embed relationship data into the request. Note: this is not following JSONAPI specifications.
	   *
	   * @method save
	   * @param  {Object} [options={}]	Optional options hash
	   * @return {Promise} The promise returned by the ApiCall.execute method
	   */

		}, {
			key: 'save',
			value: function save() {
				var _this5 = this;

				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


				// Make settings
				var settings = _jquery2.default.extend({
					uri: null,
					includeRelated: true,
					includeRelatedData: false // False, true or an array of relationship-names to save
				}, options);

				// Busy?
				if (this.isBusy()) throw new Error('Model has not completed its last action');
				this.state.set('busy', true);
				this.state.set('saving', true);

				// Create the call
				if (!settings.uri) settings.uri = this.getApiUri();
				var apiCall = this.getApi().saveModel(this, settings);

				// Handle it.
				apiCall.getPromise('complete').then(function (result) {

					// Check result
					if (result instanceof Model) {

						// Use id for me.
						if (!_this5.get('id')) {
							_this5.set('id', result.get('id'));
							_this5.state.set('new', false);
						}
					}

					// No longer dirty!
					_this5.state.set('dirty', false);

					// No longer busy
					_this5.state.set('busy', false);
					_this5.state.set('saving', false);

					// Trigger.
					_this5.trigger('save', apiCall);
				}, function () {

					// No longer busy
					_this5.state.set('busy', false);
					_this5.state.set('saving', false);

					_this5.trigger('error', apiCall);
				});

				// Done.
				return apiCall.execute();
			}

			/**
	   * Delete the model from the Api. 
	   *
	   * Possible options are:
	   * 
	   * **uri** (string)
	   * A custom uri to use instead of the model's default uri
	   *
	   * @method delete
	   * @param  {Object} [options={}]	Optional options hash
	   * @return {Promise} The promise returned by the ApiCall.execute method
	   */

		}, {
			key: 'delete',
			value: function _delete() {
				var _this6 = this;

				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


				// Make settings
				var settings = _jquery2.default.extend({
					uri: null,
					modelIsDynamic: false
				}, options);

				// Busy?
				if (this.isBusy()) throw new Error('Model has not completed its last action');
				this.state.set('busy', true);
				this.state.set('deleting', true);

				// Create the call
				if (!settings.uri) settings.uri = this.getApiUri();
				var apiCall = this.getApi().deleteModel(this, settings);

				// Handle it.
				apiCall.getPromise('complete').then(function () {

					// No longer busy
					_this6.state.set('busy', false);
					_this6.state.set('saving', false);
					_this6.state.set('deleted', true);

					//remove model from the store
					Model.deleteFromStore(_this6.getModelName(), _this6.get('id'));
				}, function () {

					// No longer busy
					_this6.state.set('busy', false);
					_this6.state.set('saving', false);

					_this6.trigger('error', apiCall);
				});

				// Done.
				return apiCall.execute();
			}

			///////////////////
			// Handy methods //
			///////////////////

		}, {
			key: 'toObject',
			value: function toObject() {
				var includedUids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


				// Get basics
				var obj = _get2(Model.prototype.__proto__ || Object.getPrototypeOf(Model.prototype), 'toObject', this).call(this, includedUids);

				// Add relationships
				_underscore2.default.each(this.related, function (item, key) {

					// Observable?
					if (_Observable3.default.isObservable(item)) {

						// Array?
						if (item instanceof _Observable3.default) {
							item = item.toObject(includedUids);
						} else {
							item = item.toArray(includedUids);
						}
					}

					obj[key] = item;
				});
				return obj;
			}

			/**
	   * Restore all attributes to their original values
	   * 
	   * @method reset
	   * @chainable
	   */

		}, {
			key: 'reset',
			value: function reset() {
				var _this7 = this;

				_underscore2.default.each(this.originalValues, function (value, key) {
					_this7.set(key, value);
				});
				return this;
			}

			//////////////////////////
			// Forms and validation //
			//////////////////////////

		}, {
			key: 'getValidationRules',
			value: function getValidationRules() {
				var formKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';


				// Check definition
				var def = this.getDefinition();
				if (def) {
					var rules = def.validationRules[formKey];
					return rules ? rules : null;
				} else {
					return null;
				}
			}

			///////////////////////
			// Dirtying of model //
			///////////////////////


			/**
	   * @method getDirty
	   * @return {Object} Key/value hash containing dirty attributes
	   */

		}, {
			key: 'getDirty',
			value: function getDirty() {
				var _this8 = this;

				// Get dirty values
				var dirty = {};
				_underscore2.default.each(this.attributes, function (value, key) {

					// Not in original or changed?
					if (_this8.isDirty(key)) {

						// Then it's dirty
						dirty[key] = value;
					}
				});

				return dirty;
			}

			/**
	   * Determine whether the model, or a specific attribute is dirty
	   * (meaning it has been changed since initialization or Api update)
	   * 
	   * @method isDirty
	   * @param  {string}  [key]    Optional attribute name
	   * @return {Boolean}     
	   */

		}, {
			key: 'isDirty',
			value: function isDirty() {
				var _this9 = this;

				var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


				// Specific key?
				if (key) {

					// Get value
					var newValue = this.attributes[key];
					var oldValue = this.originalValues[key];

					// None at all?
					if (newValue === undefined) return false;

					// Is the value computed?
					if (newValue instanceof _ComputedProperty2.default) return false;

					// Is it new?
					if (newValue !== undefined && oldValue === undefined) return true;

					//uncast newValue for comparison with original value
					newValue = this.uncastValue(key, newValue);

					// Has it changed
					return !_Utils2.default.areEqual(oldValue, newValue);
				} else {

					// Loop to see if anything is dirty
					for (var _key in this.attributes) {
						if (this.isDirty(_key)) return true;
					}

					//check relationships with touchLocalOnUpdate
					var dirtyRelation = _underscore2.default.find(this.related, function (rel, key) {
						if (_this9.getRelationship(key) && _this9.getRelationship(key).touchLocalOnUpdate) {
							return rel.isDirty();
						}
						return false;
					});

					return !!dirtyRelation;
				}
			}

			/**
	   * Reset dirtyness of model, for given key of for whole model
	   *
	   * @method resetDirty
	   * @param  {string|array} [keys]  	Optional attribute name(s)
	   * @chainable
	   */

		}, {
			key: 'resetDirty',
			value: function resetDirty() {
				var _this10 = this;

				var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


				// Null?
				if (keys === null) keys = _underscore2.default.keys(this.attributes);
				if (typeof keys === 'string') keys = [keys];

				// Specific key?
				_underscore2.default.each(keys, function (key) {

					_this10.originalValues[key] = _this10.uncastValue(key, _this10.attributes[key]);
				});
				return this;
			}

			/**
	   * Check the current dirty state of the model and update
	   * its status value.
	   *
	   * @method updateDirty
	   * @chainable
	   */

		}, {
			key: 'updateDirty',
			value: function updateDirty() {

				var isDirty = this.isDirty();
				if (isDirty !== this.get('isDirty')) {
					this.state.set('dirty', this.isDirty());
				}
				return this;
			}
		}, {
			key: '_scheduleUpdateDirty',
			value: function _scheduleUpdateDirty() {
				var _this11 = this;

				// Already going?
				if (this._scheduleUpdateDirtyTimeout) return;

				// Wait a bit
				this._scheduleUpdateDirtyTimeout = setTimeout(function () {
					_this11.updateDirty();
					_this11._scheduleUpdateDirtyTimeout = null;
				}, Model.UpdateDirtyDelay);
			}

			///////////////////
			// Relationships //
			///////////////////

			/**
	   * Set the given model as the value of a relationship
	   * 
	   * @method setRelatedModel
	   * @param {string} relationshipName 
	   * @param {Data.Model} relatedModel    
	   * @chainable
	   */

		}, {
			key: 'setRelatedModel',
			value: function setRelatedModel(relationshipName, relatedModel) {

				// Get the relationship itself
				var relationship = this.getRelationship(relationshipName);
				if (!relationship) throw new Error('Error trying to set related model; there is no relationship defined on "' + this.getModelName() + '" by the name "' + relationshipName + '"');
				if (relationship.isStoredOnLocalModel()) {

					// Get the remote key's value and set it on the local key
					this.set(relationship.localKey, relatedModel.get(relationship.remoteKey));
				} else if (relationship.isStoredOnRemoteModel()) {

					// Get the local key's value and set it on the remote key
					relatedModel.set(relationship.remoteKey, this.get(relationship.localKey));
				}

				this.related[relationshipName] = relatedModel;

				// Trigger
				this._scheduleAttributeChanged(relationshipName);

				return this;
			}

			/**
	   * Add the given model to a relationship collection
	   *
	   * @method addRelatedModel
	   * @param {string} relationshipName 
	   * @param {Data.Model} relatedModel     
	   * @param {boolean} fromApi		
	   * @chainable
	   */

		}, {
			key: 'addRelatedModel',
			value: function addRelatedModel(relationshipName, relatedModel) {
				var _this12 = this;

				var fromApi = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
				var pivotAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


				// Check if collection exists
				var relationship = this.getRelationship(relationshipName);
				if (this.related[relationshipName] === undefined) {

					// Make collection
					if (relationship) {
						this.related[relationshipName] = relationship.getInitValue();
					} else {
						this.related[relationshipName] = new _Collection2.default(relatedModel.constructor);
					}
				}

				// Is it a valid collection?
				else if (!(this.related[relationshipName] instanceof _Collection2.default)) {
						throw new TypeError('Tried to add a related model to an existing object that is not a Collection');
					}

				// Check relationship
				if (relationship && relationship.isPivot() && relatedModel.isPivot) {

					// Create pivot wrapper
					var Pivot = _ClassMap2.default.get('Pivot');
					relatedModel = Pivot.createFor(relatedModel, pivotAttributes);
				}

				// Add model
				var coll = this.related[relationshipName];
				if (fromApi) {
					coll.addFromApi(relatedModel);
				} else {
					coll.add(relatedModel);
				}

				// Set the inverse?
				if (relationship && relationship.inverseRelationshipName && relatedModel.hasRelationship(relationship.inverseRelationshipName)) {

					// Set it
					relatedModel.withoutNotifications(function () {
						relatedModel.setRelatedModel(relationship.inverseRelationshipName, _this12);
					});
				}

				// Trigger
				this._scheduleAttributeChanged(relationshipName);

				return this;
			}
		}, {
			key: 'deleteRelatedModel',
			value: function deleteRelatedModel(relationshipName, model) {

				// Check if collection exists
				var relationship = this.getRelationship(relationshipName);
				if (!(this.related[relationshipName] instanceof _Collection2.default)) {
					throw new TypeError('Tried to delete a related model from a non-existing relationship');
				}

				// Remove it
				this.related[relationshipName].delete(model);

				// Trigger
				this._scheduleAttributeChanged(relationshipName);

				// Set the inverse?
				if (relationship && relationship.inverseRelationshipName && model.hasRelationship(relationship.inverseRelationshipName)) {

					// Set it
					model.withoutNotifications(function () {
						model.setRelatedModel(relationship.inverseRelationshipName, null);
					});
				}

				return this;
			}

			//////////////////////
			// Model definition //
			//////////////////////

			/**
	   * Get the model class name for the current instance. When no definition was
	   * made for this model, 'DefaultModel' will be returned.
	   *
	   * @method getModelName
	   * @return {string} 
	   */

		}, {
			key: 'getModelName',
			value: function getModelName() {
				var definition = this.getDefinition();
				if (!definition) return 'DefaultModel';
				return definition.name;
			}

			/**
	   * Get this model's ModelDefinition. 
	   * Can be undefined for non-defined Models.
	   *
	   * @method getDefinition
	   * @return {Data.ModelDefinition}
	   */

		}, {
			key: 'getDefinition',
			value: function getDefinition() {
				return this.constructor.definition;
			}

			/**
	   * Get the definition for given attribute key. 
	   * Can be undefined for non-defined Models, or if the
	   * attribute is not defined in the ModelDefinition.
	   *
	   * @method getAttributeDefinition
	   * @param  {string} key
	   * @return {Data.ModelAttribute}  
	   */

		}, {
			key: 'getAttributeDefinition',
			value: function getAttributeDefinition(key) {

				// Check if the model has a definition at all
				var def = this.getDefinition();
				if (!def) return;

				// Get the attribute
				return def.attributes[key];
			}
		}, {
			key: 'getRelationship',
			value: function getRelationship(key) {

				// Check if the model has a definition at all
				var def = this.getDefinition();
				if (!def) return null;

				// Get the relationship
				var relationship = def.relationships[key];
				return relationship;
			}
		}, {
			key: 'hasRelationship',
			value: function hasRelationship(key) {

				return !!this.getRelationship(key);
			}
		}, {
			key: 'getRelationshipByLocalKey',
			value: function getRelationshipByLocalKey(key) {

				// Check if the model has a definition at all
				var def = this.getDefinition();
				if (!def) return null;

				// Is it the local key?
				return def.getRelationshipByLocalKey(key);
			}
		}, {
			key: 'isPivot',
			value: function isPivot() {
				return false;
			}

			/**
	   * Check whether this instance is the same instance as given parameter.
	   *
	   * @method is
	   * @param  {Chicken.Data.Model}  obj
	   * @return {Boolean}     
	   */

		}, {
			key: 'is',
			value: function is(obj) {

				return _Utils2.default.uidFor(this) === _Utils2.default.uidFor(obj);
			}

			/**
	   * Create copy of model and its attributes and relations
	   *
	   * @method clone
	   * @param  {Chicken.Data.Model}  obj
	   * @return {Boolean}     
	   */

		}, {
			key: 'clone',
			value: function clone(cacheMap) {
				var _this13 = this;

				//create cacheMap?
				if (!cacheMap) cacheMap = new Map();

				//known in cache map? return it
				if (cacheMap.has(this)) return cacheMap.get(this);

				//create copy
				var c = this.constructor;
				var copy = new c();

				//store in cacheMap
				cacheMap.set(this, copy);

				//get all attributes
				var attr = {};
				_underscore2.default.each(this.attributes, function (value, key) {
					attr[key] = _this13.get(key);
					if (attr[key] instanceof Object && typeof attr[key].clone === 'function') {
						attr[key] = attr[key].clone(cacheMap);
					}
				});

				//store attributes
				copy.attributes = attr;

				//copy relationships
				_underscore2.default.each(this.related, function (value, key) {
					if (value) copy.related[key] = value.clone(cacheMap);
				});

				return copy;
			}
		}]);

		return Model;
	}(_Observable3.default);

	/**
	 * A map of registered model classes
	 * 
	 * @static
	 * @property registry
	 * @type {Map}
	 */


	Model.registry = new Map();

	/**
	 * A map of Model stores, containing loaded records
	 *
	 * @static
	 * @property stores
	 * @type {Map}
	 */
	Model.stores = new Map();

	/**
	 * @static
	 * @method getStore
	 * @param  {string} modelName 
	 * @return {Map}           
	 */
	Model.getStore = function (modelName) {
		if (!Model.stores.has(modelName)) {
			Model.stores.set(modelName, new _ModelStore2.default(modelName));
		}
		return Model.stores.get(modelName);
	};

	/**
	 * @static 
	 * @method getFromStaore
	 * @param  {string} modelName 
	 * @param  {number} id        
	 * @return {Data.Model}           
	 */
	Model.getFromStore = function (modelName, id) {

		// Is there a store?
		if (!Model.stores.has(modelName)) return null;
		var store = Model.getStore(modelName);
		return store.get(id);
	};

	Model.deleteFromStore = function (modelName, id) {

		//Is there a store
		if (!Model.stores.has(modelName)) return store;
		//throw new Error('Cannot delete `' + modelName + '` with id `' + id + '` from store. The store cannot be found.');
		var store = Model.getStore(modelName);
		return store.forget(id);
	};

	/**
	 * Create a new model instance
	 *
	 * @static
	 * @method create
	 * @param  {string} modelName  
	 * @param  {Object} [initValues={}]
	 * @return {Data.Model}            
	 */
	Model.create = function (modelName) {
		var initValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


		var ModelClass = Model.registry.get(modelName);
		if (!ModelClass) return new Model(initValues);
		return new ModelClass(initValues);
	};

	/**
	 * The number of milliseconds to delay checking whether the 
	 * model has dirty attributes, after it an attribute has been changed.
	 * 
	 * @property UpdateDirtyDelay
	 * @static
	 * @type {Number}
	 */
	Model.UpdateDirtyDelay = 100;

	_ClassMap2.default.register('Model', Model);

	module.exports = Model;

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModelStore = function (_Obj) {
		_inherits(ModelStore, _Obj);

		function ModelStore(modelName) {
			_classCallCheck(this, ModelStore);

			var _this = _possibleConstructorReturn(this, (ModelStore.__proto__ || Object.getPrototypeOf(ModelStore)).call(this));

			_this.modelName = modelName;

			_this.records = {};

			return _this;
		}

		_createClass(ModelStore, [{
			key: 'has',
			value: function has(id) {
				return this.records[id] !== undefined;
			}
		}, {
			key: 'set',
			value: function set(id, model) {
				this.records[id] = model;
				return this;
			}
		}, {
			key: 'get',
			value: function get(id) {
				return this.records[id] ? this.records[id] : null;
			}
		}, {
			key: 'forget',
			value: function forget(id) {
				delete this.records[id];
				return this;
			}
		}]);

		return ModelStore;
	}(_Obj3.default);

	module.exports = ModelStore;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _ObservableArray2 = __webpack_require__(340);

	var _ObservableArray3 = _interopRequireDefault(_ObservableArray2);

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Collection = function (_ObservableArray) {
		_inherits(Collection, _ObservableArray);

		function Collection() {
			var modelClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			_classCallCheck(this, Collection);

			var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this));

			_this.modelClass = modelClass;

			_this.itemsById = {};
			_this.originalIds = [];

			return _this;
		}

		_createClass(Collection, [{
			key: 'knows',
			value: function knows(id) {
				if (_ClassMap2.default.isA(id, 'Model')) id = id.get('id');
				return this.itemsById[id] !== undefined;
			}
		}, {
			key: 'addFromApi',
			value: function addFromApi(item) {

				// Add it
				this.add(item);

				// Store id as original id
				var id = item.get('id');
				if (id && !_underscore2.default.contains(this.originalIds, id)) {
					this.originalIds.push(id);
				}

				return this;
			}
		}, {
			key: '_add',
			value: function _add(value) {

				// Is value a model?
				if (!_ClassMap2.default.isA(value, 'Model')) {
					throw new TypeError('You cannot add non-Model values to a Collection');
				}

				// Studying?
				if (this.isStudyingModels) {
					value.study(this.modelStudyCallback);
				}

				// Not already in there?
				var modelId = value.get('id');
				if (!modelId || !this.itemsById[modelId]) {

					// Store it and add it
					this.items.push(value);
					if (modelId) {
						this.itemsById[modelId] = value;
					}
				}

				return this;
			}
		}, {
			key: 'isDirty',
			value: function isDirty() {

				// Compare item id's
				var currentIds = _underscore2.default.map(this.items, function (item) {
					return item.get('id');
				});
				var newIds = _underscore2.default.difference(currentIds, this.originalIds);
				var removedIds = _underscore2.default.difference(this.originalIds, currentIds);

				// Are any of the id's different?
				return newIds.length > 0 || removedIds.length > 0;
			}
		}, {
			key: 'hasDirtyChildren',
			value: function hasDirtyChildren() {
				//check children for dirty
				var dirtyChildren = _underscore2.default.filter(this.items, function (item) {
					return item.isDirty();
				});

				return dirtyChildren.length > 0;
			}

			/**
	   * Create copy of collection and its items
	   *
	   * @method clone
	   * @return {Collection}
	   */

		}, {
			key: 'clone',
			value: function clone(cacheMap) {

				//create cacheMap?
				if (!cacheMap) cacheMap = new Map();

				//known in cache map? return it
				if (cacheMap.has(this)) return this;

				//create copy
				var c = this.constructor;
				var copy = new c(this.modelClass);

				//store in cacheMap1
				cacheMap.set(this, copy);

				//copy items
				_underscore2.default.each(this.items, function (item) {
					copy.items.push(item.clone(cacheMap));
				});

				return copy;
			}
		}, {
			key: 'search',
			value: function search(query) {
				var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
				var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


				// No models in me?
				if (this.items.length === 0) return new Collection(this.modelClass);

				// No fields defined?
				if (!fields) {

					// Try to get fields from definition
					var def = this.modelClass.definition;
					if (def) {

						// Get fields
						fields = def.getSearchFields();
					}

					// Still no field?
					if (!fields) {

						// Use all but id
						fields = _underscore2.default.without(_underscore2.default.keys(_underscore2.default.first(this.items).attributes), 'id');
					}
				}

				// Get words
				var words = query.split(/\s+/);
				var result = [];
				_underscore2.default.each(this.items, function (model) {

					// How many words are matched by the fields
					var wordsMatched = 0;
					var entireMatch = false;
					_underscore2.default.each(words, function (word) {

						// Not empty?
						if (!word) return;

						// Loop through fields
						_underscore2.default.each(fields, function (field) {

							// Entire match?
							var value = model.get(field);
							if (value && value === word) {
								entireMatch = true;
								wordsMatched++;
							} else {

								// Check if it contains me
								value = ('' + value).toLowerCase();
								var w = word.toLowerCase();
								var index = value.indexOf(w);
								if (index > -1) wordsMatched++;
							}
						});
					});

					// Match?
					if (wordsMatched > 0) {
						result.push({
							wordsMatched: wordsMatched,
							entireMatch: entireMatch,
							model: model
						});
					}
				});

				// Now sort it
				result.sort(function (a, b) {

					// Entire match same?
					if (a.entireMatch !== b.entireMatch) {

						// Entire match is better.
						return a.entireMatch ? -1 : 1;
					}

					// # words matched
					if (a.wordsMatched === b.wordsMatched) return 0;
					return a.wordsMatched > b.wordsMatched ? -1 : 1;
				});

				// Check limit
				limit = limit ? Math.min(result.length, limit) : result.length;

				// Make collection
				var collectionResult = new Collection(this.modelClass);
				for (var q = 0; q < limit; q++) {
					collectionResult.items.push(result[q].model);
				}
				return collectionResult;
			}
		}]);

		return Collection;
	}(_ObservableArray3.default);

	Collection.combine = function () {
		for (var _len = arguments.length, collections = Array(_len), _key = 0; _key < _len; _key++) {
			collections[_key] = arguments[_key];
		}

		// Combine items by id
		collections = _underscore2.default.flatten(collections);
		var itemArrays = _underscore2.default.map(_underscore2.default.pluck(collections, 'items'), function (arr) {
			var items = {};
			_underscore2.default.each(arr, function (item) {
				items[item.get('id')] = item;
			});
			return items;
		});
		itemArrays.unshift({});
		var resultArray = _underscore2.default.extend.apply(undefined, itemArrays);

		// Create new collection
		var result = new Collection();
		result.import(resultArray, false);
		return result;
	};

	module.exports = Collection;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _moment = __webpack_require__(304);

	var _moment2 = _interopRequireDefault(_moment);

	var _queryString = __webpack_require__(305);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _Observable = __webpack_require__(329);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(340);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Binding = __webpack_require__(341);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _ComputedProperty = __webpack_require__(333);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

	var _Reference = __webpack_require__(331);

	var _Reference2 = _interopRequireDefault(_Reference);

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _uid = 0;
	var UniqueIdKey = '___chicken_' + +new Date();

	/**
	 * @module Helpers
	 */
	var Utils = {

		/**
	  * @class Helpers.Utils
	  * @static
	  */

		getValue: function getValue(obj) {
			if (obj instanceof _Binding2.default || obj instanceof _ComputedProperty2.default || obj instanceof _Reference2.default) {
				return obj.getValue();
			}
			return obj;
		},

		/**
	  * @method each
	  * @static
	  * 
	  * @param  {Object}   obj      
	  * @param  {Function} callback 
	  * @param  {Object}   context  
	  */
		each: function each(obj, callback, context) {

			// Map?
			if (obj instanceof Map) {
				obj.forEach(function (value, key) {
					callback.apply(context, [value, key]);
				});
				return;
			} else if (obj instanceof _Observable2.default) {
				obj = obj.attributes;
			} else if (obj instanceof _ObservableArray2.default) {
				obj = obj.items;
			}
			return _underscore2.default.each(obj, callback, context);
		},

		/**
	  * @method map
	  * @static
	  * 
	  * @param  {Object}   obj      
	  * @param  {Function} callback 
	  * @param  {Object}   context  
	  */
		map: function map(obj, callback, context) {
			if (obj instanceof _Observable2.default) {
				obj = obj.attributes;
			} else if (obj instanceof _ObservableArray2.default) {
				obj = obj.items;
			}
			return _underscore2.default.map(obj, callback, context);
		},

		/**
	  * Determine whether given value is truthlike
	  * 
	  * @method isTruthlike
	  * @static
	  *	 
	  * @param  {mixed} value 
	  * @return {boolean}
	  */
		isTruthlike: function isTruthlike(value) {

			// Null/undef
			if (value === null || value === undefined) return false;

			// Bool?
			if (value === true || value === 'true') return true;
			if (value === false || value === 'false') return false;

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
		},

		areEqual: function areEqual(value1, value2) {

			// Identical?
			if (value1 === value2) return true;

			// Is one or both a moment?
			if (_moment2.default.isMoment(value1)) return value1.isSame(value2);
			if (_moment2.default.isMoment(value2)) return value2.isSame(value1);

			// One of them null or undefined?
			if (value1 === undefined || value2 === undefined || value1 === null || value2 === null) return false;
			if ((typeof value1 === 'undefined' ? 'undefined' : _typeof(value1)) !== 'object' || (typeof value2 === 'undefined' ? 'undefined' : _typeof(value2)) !== 'object') return false;
			if (value1 instanceof Array || value2 instanceof Array) return false;

			// Same id?
			if (this.uidFor(value1) === this.uidFor(value2)) return true;

			return false;
		},

		/**
	  * Get a unique string identifier for given object or variable. For objects
	  * this identifier will remain the same, making it useful for comparing objects.
	  *
	  * @method uidFor
	  * @param  {mixed} obj 
	  * @return {string}
	  */
		uidFor: function uidFor(obj) {

			// Already set for this object?
			if (obj && obj[UniqueIdKey] !== undefined) return obj[UniqueIdKey];

			// Non-existing things?
			if (obj === undefined) return '(undefined)';
			if (obj === null) return '(null)';

			// Check what type the value is
			var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
			switch (type) {

				case 'number':
				case 'string':
					return type + ':' + obj;

				case 'boolean':
					return obj ? '(true)' : '(false)';

			}

			// Is it a standard object?
			if (obj === Object) return '(Object)';
			if (obj === Array) return '(Array)';

			// Store the id on the obj
			var uid = Utils.uid();
			obj[UniqueIdKey] = uid;
			return uid;
		},

		uid: function uid() {
			return '*' + ++_uid + '*';
		},


		/**
	  * encode an object to a query string
	  * @param  {Object}  obj  	the object to convert
	  * @param  {Boolean} deep 	use deep-converion, this adds subkeys and array values
	  * @return {String}       	the query string
	  */
		encodeQueryString: function encodeQueryString(obj) {
			var _this = this;

			var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


			if (deep) {
				var _ret = function () {

					//init str
					var propStrings = [],
					    str = '';

					//convert to simple object
					if (obj instanceof _Observable2.default) obj = obj.toObject();

					//base url
					if (obj.baseUrl) str += obj.baseUrl + '?';

					//add props
					_underscore2.default.each(_underscore2.default.keys(obj), function (key) {

						//skip baseUrl
						if (key == 'baseUrl') return;

						propStrings = _this._addPropString(propStrings, key, obj[key]);
					});

					//add to querystring
					str += propStrings.join('&');

					return {
						v: str
					};
				}();

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			} else {

				return _queryString2.default.stringify(obj);
			}
		},


		/**
	  * Add an url property from key and value. 
	  * Arrays are joined with commas,
	  * Objects properties will be processed again, and the key will be sub-keyed,
	  * String values will remain unchanged
	  * 
	  * @param {Array} propStrings 	The list of strings to add the value to
	  * @param {String} key         	The variable key
	  * @param {mixed} value       	The variable value
	  */
		_addPropString: function _addPropString(propStrings, key, value) {
			var _this2 = this;

			if (value instanceof Array) {

				//array
				propStrings.push(key + '=' + value.join(','));
			} else if (value instanceof Object) {

				//object
				_underscore2.default.each(_underscore2.default.keys(value), function (subKey) {
					propStrings = _this2._addPropString(propStrings, key + '[' + subKey + ']', value[subKey]);
				});
			} else {

				propStrings.push(key + '=' + value);
			}

			return propStrings;
		},


		/**
	  * decode a query string to an object
	  * @param  {string}  str  	the query string
	  * @param  {Boolean} deep 	use deep-conversion, sub-keys and array values will be converted to objects and arrays
	  * @return {Object}       	the decoded values
	  */
		decodeQueryString: function decodeQueryString(str) {
			var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


			if (deep) {
				var _ret2 = function () {

					//init object
					var props = void 0,
					    resultObject = {};

					//get all properties
					if (str.indexOf('?') !== -1) {
						resultObject['baseUrl'] = str.split('?')[0];
						props = str.split('?')[1].split('&');
					} else {
						props = str.split('&');
					}

					//convert each property to object
					_underscore2.default.each(props, function (prop) {

						//split value and key
						prop = prop.split('=');
						var key = prop[0];
						var value = prop[1];

						//value				
						value = value.split(',');
						value = value.length == 1 ? value[0] : value;

						//key array
						if (key.indexOf('[') !== -1 && key.indexOf(']') !== -1) {
							key = key.split('[');
							var baseKey = key[0];
							var subKey = key[1].substring(0, key[1].length - 1);

							if (!(resultObject[baseKey] instanceof Object)) {
								resultObject[baseKey] = {};
							}

							resultObject[baseKey][subKey] = value;
						} else {
							resultObject[key] = value;
						}
					});

					return {
						v: resultObject
					};
				}();

				if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
			} else {
				return _queryString2.default.parse(str);
			}
		}
	};

	_ClassMap2.default.register('Utils', Utils);

	module.exports = Utils;

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Dom
	 */
	var ComponentDefinition = function ComponentDefinition(name, source, initCallback) {
		var methods = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		var renderer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

		_classCallCheck(this, ComponentDefinition);

		/**
	  * The name of the component. This is also the name you use
	  * in your templates, to insert the component.
	  * 
	  * @property name
	  * @type {string}
	  */
		this.name = name;

		/**
	  * The template source
	  *
	  * @property source
	  * @type {string}
	  */
		this.source = source;

		/**
	  * The method that is called when the Dom.Component instance is created.
	  * 
	  * @property initCallback
	  * @type {[type]}
	  */
		this.initCallback = initCallback;

		/**
	  * The Dom.Renderer instance that is used to render the component. This is also the
	  * renderer in which this component will be automatically registered as a helper.
	  *
	  * @property renderer
	  * @type {Dom.Renderer}
	  */
		this.renderer = renderer ? renderer : (0, _App2.default)() ? (0, _App2.default)().config('renderer') : null;

		/**
	  * Methods to add to the component prototype.
	  * 
	  * @property methods
	  * @type {object}
	  */
		this.methods = methods;
	};

	module.exports = ComponentDefinition;

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-console: ["error", { allow: ["log"] }] */

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _queryString = __webpack_require__(305);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _moment = __webpack_require__(304);

	var _moment2 = _interopRequireDefault(_moment);

	var _filesize = __webpack_require__(355);

	var _filesize2 = _interopRequireDefault(_filesize);

	var _ActionBinding = __webpack_require__(342);

	var _ActionBinding2 = _interopRequireDefault(_ActionBinding);

	var _Utils = __webpack_require__(352);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	var _Observable = __webpack_require__(329);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(340);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Dom
	 */
	var Helpers = function () {

		/**
	  * @class Dom.Helpers
	  *
	  * @constructor 
	  * @param  {Dom.Renderer} renderer
	  */
		function Helpers(renderer) {
			_classCallCheck(this, Helpers);

			this.renderer = renderer;
		}

		/////////////
		// Actions //
		/////////////

		_createClass(Helpers, [{
			key: 'action',
			value: function action(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {

				// There should be an ActionBinding for this element
				var element = blocks.element;
				if (element && element.getAttribute('data-chicken-action')) {

					// Get the action
					var binding = _ActionBinding2.default.get(element.getAttribute('data-chicken-action'));
					binding.apply();
				} else {
					throw new Error('The "action" keyword was not correctly configured in your Renderer... Or you are trying to add an action to a Component.');
				}
			}

			/////////////
			// Routing //
			/////////////

		}, {
			key: 'link',
			value: function link(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
				var _this = this;

				// Add listener
				if (blocks.element) {

					// Add click listener
					var $el = (0, _jquery2.default)(blocks.element);
					$el.each(function (index, el) {

						// Set href for easy debuggin' and statusbar info
						(0, _jquery2.default)(el).attr('href', _this._getValue(params[0]));
					}).on('click', function (e) {
						e.preventDefault();

						// Get uri value
						var uri = _this._getValue(params[0]);

						// Go there.
						(0, _App2.default)().goto(uri);
					});
				}
			}
		}, {
			key: 'linkTo',
			value: function linkTo(params, attributeHash, block) {
				var _this2 = this;

				// Find named route
				var name = this._getValue(params[0]);

				// Relative route?
				if (/^\./.test(name)) {

					// Current name?
					var curName = (0, _App2.default)().currentRoute.route.name;
					if (!curName) throw new Error('The current route does not have a name, so relative links are not possible from here');

					// ..? (Level up)
					if (/^\.\./.test(name)) {

						// Remove last part
						var parts = curName.split(/\./);
						parts.pop();
						curName = parts.join('.');
						name = name.replace(/^\./, '');
					}

					// Add it.
					name = curName + name;

					// Remove any trailing dots
					name = name.replace(/\.+$/, '');
				}

				// Find route
				var route = (0, _App2.default)().router.namedRoutes.get(name);
				if (!route) throw new Error('There is no route with the name "' + name + '"');

				// Make uri
				var attributes = _underscore2.default.mapObject(attributeHash, function (value) {
					return _this2._getValue(value);
				});
				var uri = route.makeUrl(attributes);

				// Make the link
				return this.link([uri], attributeHash, block);
			}

			////////////////////////
			// Control statements //
			////////////////////////


			/**
	   * @method each
	   */

		}, {
			key: 'each',
			value: function each(params, attributeHash, blocks, morph /*, renderer, scope, visitor*/) {

				// Check uid for this each-block
				var eachUid = _Utils2.default.uidFor(morph);

				// Get the value
				var list = this._getValue(params[0]);
				_Utils2.default.each(list, function (item, i) {

					// Get a unique id for the item.
					var uid = _Utils2.default.uidFor(item);
					var itemKey = 'each:' + eachUid + ':' + i + ':' + uid;

					// Render item
					blocks.template.yieldItem(itemKey, [item, i]);
				});
			}
		}, {
			key: 'repeat',
			value: function repeat(params, attributeHash, blocks, morph) {

				var repeatUid = _Utils2.default.uidFor(morph);
				var times = this._getValue(params[0]);
				for (var q = 0; q < times; q++) {

					var itemKey = 'repeat:' + repeatUid + ':' + q;
					blocks.template.yieldItem(itemKey, [null, q]);
				}
			}

			/**
	   * @method if	 
	   */

		}, {
			key: 'if',
			value: function _if(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {

				// Get the value
				var value = this._getValue(params[0]);
				return this._ifUnless(params, blocks, _Utils2.default.isTruthlike(value));
			}
		}, {
			key: 'ifOne',
			value: function ifOne(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
				var _this3 = this;

				var trueConditions = _underscore2.default.filter(this._getValue(params), function (value) {
					return !!_this3._getValue(value);
				});

				return this._ifUnless(params, blocks, _Utils2.default.isTruthlike(trueConditions.length > 0));
			}
		}, {
			key: 'ifAll',
			value: function ifAll(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
				var _this4 = this;

				var trueConditions = _underscore2.default.filter(this._getValue(params), function (value) {
					return !!_this4._getValue(value);
				});

				return this._ifUnless(params, blocks, _Utils2.default.isTruthlike(trueConditions.length === params.length));
			}

			/**
	   * @method unless
	   */

		}, {
			key: 'unless',
			value: function unless(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {

				// Get the value
				var value = this._getValue(params[0]);
				return this._ifUnless(params, blocks, !_Utils2.default.isTruthlike(value));
			}
		}, {
			key: '_ifUnless',
			value: function _ifUnless(params, blocks, show) {

				// Is the param truth-like?
				if (show) {

					// Is it a yielding-if?
					if (blocks.template && blocks.template.yield) {
						blocks.template.yield();

						// Or parameter-if?
					} else {

						return this._getValue(params[1]);
					}
				} else {

					// Render the inverse yield
					if (blocks.inverse && blocks.inverse.yield) {
						blocks.inverse.yield();

						// Or the inverse param
					} else {
						return this._getValue(params[2]);
					}
				}
			}

			////////////
			// Values //
			////////////

		}, {
			key: 'concat',
			value: function concat(params, attributeHash /*, blocks, morph, renderer, scope, visitor*/) {

				attributeHash = _underscore2.default.defaults(attributeHash, {
					separator: ''
				});
				return this._getValues(params).join(attributeHash.separator);
			}
		}, {
			key: 'get',
			value: function get(params) {

				// Get params
				var obj = this._getValue(params[0]);
				var key = this._getValue(params[1]);

				// Is it an observable?
				if (obj instanceof _Observable2.default || obj instanceof _ObservableArray2.default) {
					return obj.get(key);
				} else {
					return obj[key];
				}
			}
		}, {
			key: 'firstIn',
			value: function firstIn(params) {

				var arr = this._getValue(params[0]);
				if (arr instanceof _ObservableArray2.default) {
					return arr.first();
				} else {
					return _underscore2.default.first(arr);
				}
			}
		}, {
			key: 'equal',
			value: function equal(params) {

				// Get params
				var value1 = this._getValue(params[0]);
				var value2 = this._getValue(params[1]);

				return value1 == value2;
			}
		}, {
			key: 'notEqual',
			value: function notEqual(params) {
				return !this.equal(params);
			}
		}, {
			key: 'isNull',
			value: function isNull(params) {
				return this._getValue(params[0]) === null;
			}
		}, {
			key: 'gt',
			value: function gt(params) {

				// Get params
				var value1 = this._getValue(params[0]);
				var value2 = this._getValue(params[1]);
				return value1 > value2;
			}
		}, {
			key: 'gte',
			value: function gte(params) {

				// Get params
				var value1 = this._getValue(params[0]);
				var value2 = this._getValue(params[1]);
				return value1 >= value2;
			}
		}, {
			key: 'lt',
			value: function lt(params) {

				// Get params
				var value1 = this._getValue(params[0]);
				var value2 = this._getValue(params[1]);
				return value1 < value2;
			}
		}, {
			key: 'lte',
			value: function lte(params) {

				// Get params
				var value1 = this._getValue(params[0]);
				var value2 = this._getValue(params[1]);
				return value1 <= value2;
			}
		}, {
			key: 'isObject',
			value: function isObject(params) {
				// Get param
				var value = this._getValue(params[0]);
				return value instanceof Object;
			}
		}, {
			key: 'valueOr',
			value: function valueOr(params) {
				var value = this._getValue(params[0]);
				var defaultValue = this._getValue(params[1]);

				return value ? value : defaultValue;
			}

			/////////////
			// Methods //
			/////////////

		}, {
			key: 'method',
			value: function method(params) {

				// Get params
				params = this._getValues(params);
				var obj = params.shift(params);
				var key = params.shift(params);

				// Do it.
				return obj[key].apply(obj, params);
			}

			//////////////////
			// HTML Helpers //
			//////////////////

		}, {
			key: 'attributesFrom',
			value: function attributesFrom(params, attributeHash, blocks, morph) {

				console.log(params, attributeHash, blocks, morph);
			}

			/////////////
			// Strings //
			/////////////

		}, {
			key: 'camelize',
			value: function camelize(params) {

				var string = this._getValue(params[0]);
				var capitalFirstLetter = !!this._getValue(params[1]);

				return _inflection2.default.camelize(string, !capitalFirstLetter);
			}
		}, {
			key: 'string',
			value: function string(params) {

				// First is method, second is str
				var args = this._getValues(params);
				var method = args.shift();
				var str = args.shift();
				if (!str) return null;

				return str[method].apply(str, args);
			}
		}, {
			key: 'underscore',
			value: function underscore(params) {

				// First is method, second is str
				var args = this._getValues(params);
				var method = args.shift();
				return _underscore2.default[method].apply(this, args);
			}

			////////////
			// Arrays //
			////////////

		}, {
			key: 'count',
			value: function count(params) {

				var value = this._getValue(params[0]);
				if (value instanceof _Observable2.default) {
					return _underscore2.default.size(value.attributes);
				}
				return value.length;
			}

			/////////////////////
			// Dates and times //
			/////////////////////

		}, {
			key: 'momentFormat',
			value: function momentFormat(params) {
				var value = this._getValue(params[0]);
				var format = this._getValue(params[1]);
				if (_moment2.default.isMoment(value)) {
					return value.format(format);
				} else {
					return value;
				}
			}
		}, {
			key: 'fileSize',
			value: function fileSize(params) {
				var value = this._getValue(params[0]);
				return (0, _filesize2.default)(value);
			}

			/////////////
			// Numbers //
			/////////////

		}, {
			key: 'add',
			value: function add(params) {
				var values = this._getValues(params);
				return values.reduce(function (total, item) {
					return item + total;
				}, 0);
			}
		}, {
			key: 'subtract',
			value: function subtract(params) {
				var values = this._getValues(params);
				var startValue = values.shift();
				return values.reduce(function (total, item) {
					return total - item;
				}, startValue);
			}
		}, {
			key: 'numberFormat',
			value: function numberFormat(params) {
				var value = this._getValue(params[0]);
				if (value === undefined) return '';
				return value.toLocaleString(window.Chicken.app.i18n.language);
			}

			///////////
			// Debug //
			///////////

		}, {
			key: 'log',
			value: function log(params /*, attributeHash, blocks, morph, renderer, scope, visitor*/) {
				console.log.apply(console, this._getValues(params));
			}
		}, {
			key: 'query-params',
			value: function queryParams(params, attributeHash /*, blocks, morph, renderer, scope, visitor*/) {
				return _queryString2.default.stringify(this._getHashValues(attributeHash));
			}

			//////////////////
			// Localization //
			//////////////////

		}, {
			key: 't',
			value: function t(params, attributeHash) {

				// Get the key
				var key = this._getValue(params[0]);

				// Get from app
				return (0, _App2.default)().i18n.translate(key, attributeHash);
			}
		}, {
			key: 'tText',
			value: function tText(params, attributeHash) {

				// Get value
				var v = this.t(params, attributeHash);

				// Plainify
				return (0, _jquery2.default)('<span>' + v + '</span>').text();
			}

			//////////////
			// Internal //
			//////////////

		}, {
			key: '_getValue',
			value: function _getValue(param) {
				return this.renderer.hooks.getValue(param);
			}
		}, {
			key: '_getValues',
			value: function _getValues(params) {
				var _this5 = this;

				return params.map(function (value) {
					return _this5._getValue(value);
				});
			}
		}, {
			key: '_getHashValues',
			value: function _getHashValues(attributeHash) {
				var _this6 = this;

				var result = {};
				_underscore2.default.each(attributeHash, function (value, key) {
					result[key] = _this6._getValue(value);
				});
				return result;
			}
		}]);

		return Helpers;
	}();

	Helpers.User = {};

	module.exports = Helpers;

/***/ },
/* 355 */
/***/ function(module, exports) {

	!function(i,e){"object"==typeof module&&module.exports?module.exports=e():i.filesize=e()}("undefined"!=typeof window?window:this,function(){var i={iec:"_Ki_Mi_Gi_Ti_Pi_Ei_Zi_Yi",si:"_K_M_G_T_P_E_Z_Y"};return function(e,_,o){e=Math.abs(e),_||0===_||(_=1);var t="si"==o?1e3:1024,n=0;for(i[o]||(o="si");e>=t;)e/=t,++n;return e.toFixed(_)+" "+i[o].split("_")[n]+"b"}});

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _ApiError = __webpack_require__(348);

	var _ApiError2 = _interopRequireDefault(_ApiError);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _SettingsObject = __webpack_require__(334);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _Route = __webpack_require__(357);

	var _Route2 = _interopRequireDefault(_Route);

	var _Request = __webpack_require__(363);

	var _Request2 = _interopRequireDefault(_Request);

	var _Middleware = __webpack_require__(364);

	var _Middleware2 = _interopRequireDefault(_Middleware);

	var _Service = __webpack_require__(365);

	var _Service2 = _interopRequireDefault(_Service);

	var _RoutingError = __webpack_require__(362);

	var _RoutingError2 = _interopRequireDefault(_RoutingError);

	var _Redirect = __webpack_require__(360);

	var _Redirect2 = _interopRequireDefault(_Redirect);

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
		function Router(application /*, parentRouter = null*/) {
			_classCallCheck(this, Router);

			////////////////
			// Properties //
			////////////////

			/**
	   * @property routes
	   * @type {Array}
	   */
			var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));

			_this.routes = [];

			/**
	   * @property application
	   * @type {Application}
	   */
			_this.application = application;

			/**
	   * @property namedRoutes
	   * @type {Map}
	   */
			_this.namedRoutes = new Map();

			_this.errorHandlers = {
				'all': [],
				'js': [],
				'api': [],
				'api.400': [],
				'api.404': [],
				'api.500': [],
				'router': [],
				'router.404': []
			};

			///////////////////////////////////////////
			// Grouped configuration state variables //
			///////////////////////////////////////////

			_this._currentConfig = _SettingsObject2.default.create({

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


		_createClass(Router, [{
			key: 'route',
			value: function route(pattern, actions) {
				var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


				// Merge options
				options = _underscore2.default.defaults({}, options, _underscore2.default.omit(this._currentConfig.toObject(), 'parentRoute'));

				// Create the route
				var route = new _Route2.default(this, this._currentConfig.get('parentRoute'), pattern, actions, options);

				// Add route
				this.routes.push(route);

				// Return route
				return route;
			}
		}, {
			key: 'catchAll',
			value: function catchAll(actions) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


				return this.route('/:url', actions, options).constrain('url', /.*/);
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
	   * @return {Routing.RouteMatch}
	   */

		}, {
			key: 'handle',
			value: function handle(request) {
				var _this2 = this;

				this.trigger('navigate', request);

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

					// Create error
					var error = new _RoutingError2.default(404, 'Page not found', request);
					return this.getErrorRouteMatch(error);
				}

				// First leave current route
				if (this.application.currentRoute) {

					// Leave
					this.application.currentRoute.leave(routeMatch).then(function () {

						_this2.application.currentRoute = false;
						_this2.handle(request);
					});
					return;
				}

				// Store it on app
				this.application.currentRoute = routeMatch;

				// Make the execution callback
				var executeActions = function executeActions() {

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

						// And any services that should be loaded
						_underscore2.default.each(routeMatch.route.options.services, function (service) {

							// Find service
							var serviceInstance = _Service2.default.get(service);
							if (!serviceInstance) throw new Error('[Routing.Router] There is no service "' + service + '" registered');

							// Load it
							var promise = serviceInstance.load();
							if (!promise || !(promise instanceof Promise)) throw new Error('[Routing.Router] The "' + service + '" service\'s load() method should return a Promise');
							dependsOnPromises.push(promise);
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
					if (numberOfActionsStarted === 0 && routeMatch.route.options.services.length === 0) {

						throw new Error('[Routing.Router] No actions for started for route ' + routeMatch.route.getFullPattern() + '. Check your configuration.');
					}

					// Listen to the result
					Promise.all(actionPromises).then(function () /*...results*/{

						//@TODO What to do?
						_this2.trigger('complete', [routeMatch]);
					});
				};

				//////////////////////
				// Setup middleware //
				//////////////////////

				// Loop and add middleware
				var callbacksToExecute = [];
				_underscore2.default.each(routeMatch.route.getMiddlewareNames(), function (mwName) {

					// Get the middleware
					var middleware = _Middleware2.default.registry.get(mwName);
					if (!middleware) throw new Error('There is no middleware registered with the name "' + mwName + '"');

					// Add the callback
					callbacksToExecute.push(middleware.callback);
				});

				// Lastly we will execute the actions
				callbacksToExecute.push(executeActions);

				////////////////////////////////////////////////////////////////
				// Now call the first callback, to start the middleware chain //
				////////////////////////////////////////////////////////////////

				var nextCallback = function nextCallback() {

					// Get the callback to call
					var cb = callbacksToExecute.shift();

					// Get the next in line
					var result = cb.apply(_this2, [nextCallback, request, routeMatch]);

					// Is there a result?
					if (result !== undefined) {
						// 'WE GOT TO DO SOMETHING WITH THIS MIDDLEWARE RESULT'				
					}
				};
				nextCallback();

				return routeMatch;
			}
		}, {
			key: 'handleErrors',
			value: function handleErrors(errorType, callback) {

				// Known code?
				if (this.errorHandlers[errorType] === undefined) {
					throw new Error('It is not possible to catch "' + errorType + '" errors; available error statuses are: ' + _underscore2.default.keys(this.errorHandlers).join(', '));
				}

				// Add it
				this.errorHandlers[errorType].push(callback);
			}
		}, {
			key: 'getErrorHandlers',
			value: function getErrorHandlers(error) {
				var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				// Error object?
				if (typeof error === 'string') {
					error = new Error(error);
				}

				// No obj? Use me.
				if (!obj) obj = this;

				// Routing error?
				var handlers = [];
				if (error instanceof _RoutingError2.default) {

					// Add handlers for the status code
					if (obj.errorHandlers['router.' + error.code]) {
						handlers = _underscore2.default.union(handlers, obj.errorHandlers['router.' + error.code]);
					}

					// Add router-handlers
					if (obj.errorHandlers.router) handlers = _underscore2.default.union(handlers, obj.errorHandlers.router);

					// Api error?
				} else if (error instanceof _ApiError2.default) {

					// Add handlers for the status code
					var statusCode = error.getStatusCode();
					if (obj.errorHandlers['api.' + statusCode]) {
						handlers = _underscore2.default.union(handlers, obj.errorHandlers['api.' + statusCode]);
					}

					// Add api-handlers
					if (obj.errorHandlers.api) handlers = _underscore2.default.union(handlers, obj.errorHandlers.api);
				} else {

					// Javascript error
					if (obj.errorHandlers.js) handlers = _underscore2.default.union(handlers, obj.errorHandlers.js);
				}

				// Always add the 'all' handlers
				if (obj.errorHandlers.all) handlers = _underscore2.default.union(handlers, obj.errorHandlers.all);

				// Were we called for a specific object?
				if (obj !== this) {

					// Then append default router callbacks
					handlers = _underscore2.default.union(handlers, this.getErrorHandlers(error));
				}

				return handlers;
			}
		}, {
			key: 'getErrorRouteMatch',
			value: function getErrorRouteMatch(error) {

				// Get the handlers
				var handlers = this.getErrorHandlers(error);
				var handlerResult = false;
				while (handlers.length > 0) {

					// Get handler and call it
					var handler = handlers.shift();
					var result = handler(error, error.request, this);

					// Anything?
					if (result) {
						handlerResult = result;
						break;
					}
				}

				// No result?
				if (!handlerResult) throw error;

				// A generic redirect?
				if (handlerResult instanceof _Redirect2.default) {
					return this.application.goto(handlerResult.uri);
				}
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
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _xregexp = __webpack_require__(301);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _RouteMatch = __webpack_require__(358);

	var _RouteMatch2 = _interopRequireDefault(_RouteMatch);

	var _Model = __webpack_require__(349);

	var _Model2 = _interopRequireDefault(_Model);

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
			var actions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
			var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

			_classCallCheck(this, Route);

			// Private vars
			var _this = _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).call(this));

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
	   * Route-specific error handlers
	   *
	   * @property errorHandlers
	   * @type {Object}
	   */
			_this.errorHandlers = {};

			/**
	   * The parameter names used in this route
	   * 
	   * @property parameters
	   * @type {array}
	   */
			_this.parameters = [];

			/**
	   * @property nested
	   * @type {Array}
	   */
			_this.nested = {};

			/**
	   * The options used when defining this Route
	   * 
	   * @property options
	   * @type {object}
	   */
			_this.options = _underscore2.default.defaults(options, {
				abstract: actions === null,
				as: null,
				viewContainer: 'main',
				middleware: []
			});

			/**
	   * The name of the route you can use to link to. This is only 
	   * set if you used the 'as' option.
	   * 
	   * @property name
	   * @type {string}
	   */
			_this.name = null;

			/**
	   * When true, the route's action(s) will refresh when the query string changes
	   * 
	   * @property acceptsQuery
	   * @type {Boolean}
	   */
			_this.acceptsQuery = false;

			/**
	   * When true, the route's action(s) will refresh when the Request flash-data changes
	   * @type {Boolean}
	   */
			_this.acceptsFlash = false;

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
		}, {
			key: 'abstract',
			value: function abstract() {
				this.options.abstract = true;
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

				// Do I have a nested / route?
				if (this.nested['/']) {

					// Use that route instead of me...
					request.uri = request.uri + '/';
					return this.nested['/'].match(request);
				}

				// We matched! Let's create a match object.
				return new _RouteMatch2.default(this, match, request);
			}
		}, {
			key: 'error',
			value: function error(key, callback) {

				if (this.errorHandlers[key] === undefined) this.errorHandlers[key] = [];
				this.errorHandlers[key].push(callback);
				return this;
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
		}, {
			key: 'makeUrl',
			value: function makeUrl() {
				var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


				// Get full pattern
				var pattern = this.getFullPattern();
				_underscore2.default.each(attributes, function (value, key) {

					// Is the value a model?
					if (value instanceof _Model2.default) value = value.get('id');

					pattern = pattern.split(':' + key).join(value);
				});

				return pattern;
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
		}, {
			key: 'getMiddlewareNames',
			value: function getMiddlewareNames() {

				return this.options.middleware;
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
		}, {
			key: 'acceptQuery',
			value: function acceptQuery() {
				var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


				this.acceptsQuery = accept;
				return this;
			}
		}, {
			key: 'acceptFlash',
			value: function acceptFlash() {
				var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


				this.acceptsFlash = accept;
				return this;
			}

			/**
	   * Set the name of this Route
	   *
	   * @method as
	   * @param  {string} name 
	   * @chainable
	   */

		}, {
			key: 'as',
			value: function as(name) {

				// Store name
				this.name = name;

				// Store in router
				this.router.namedRoutes.set(name, this);

				return this;
			}
		}, {
			key: 'middleware',
			value: function middleware() {
				for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					keys[_key2] = arguments[_key2];
				}

				this.options.middleware = _underscore2.default.unique(_underscore2.default.flatten([this.options.middleware, keys]));
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
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Action = __webpack_require__(359);

	var _Action2 = _interopRequireDefault(_Action);

	var _Utils = __webpack_require__(352);

	var _Utils2 = _interopRequireDefault(_Utils);

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

		/**
	  * Handle leaving this RouteMatch
	  *
	  * @method leave
	  * @param  {Routing.RouteMatch} toRoute The RouteMatch we're going to after leaving this
	  * @return {Promise}
	  */


		_createClass(RouteMatch, [{
			key: 'leave',
			value: function leave(toRoute) {
				var _this2 = this;

				return new Promise(function (resolve, reject) {

					// Loop through action results
					var leavePromises = [];
					_this2.actions.forEach(function (action, name) {

						// Get replacing action
						var replacingAction = toRoute.actions.get(name);
						if (replacingAction) {

							// Was it triggered by the same route?
							if (action.viewContainer && action.viewContainer.currentAction && _Utils2.default.uidFor(action.viewContainer.currentAction.route) === _Utils2.default.uidFor(replacingAction.route)) {

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
			}
		}, {
			key: '_readActionsFromRoute',
			value: function _readActionsFromRoute(route) {
				var _this3 = this;

				// Collect parameters from route
				var params = new Map();
				var paramArray = [];
				_underscore2.default.each(route.parameters, function (paramName) {
					paramArray.push(_this3.parameters.get(paramName));
					params.set(paramName, _this3.parameters.get(paramName));
				});

				// Get actions
				var myActions = {};
				_underscore2.default.each(route.getActions(), function (routeAction, targetViewContainer) {

					// Is there already an action defined for this target
					if (_this3.actions.has(targetViewContainer)) return;

					// Make it.
					var action = new _Action2.default(targetViewContainer, routeAction, _this3.request);

					// Set routes
					action.route = route;
					action.matchedRoute = _this3.route;
					action.routeMatch = _this3;

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
				var actionsToMakeDependentOn = [];
				_underscore2.default.each(myActions, function (myAction, targetViewContainer) {

					// My this action dependent on previous actions defined in this route
					_underscore2.default.each(actionsToMakeDependentOn, function (depAction) {
						myAction.dependsOn.push(depAction);
					});

					// Add the action to my actions
					_this3.actions.set(targetViewContainer, myAction);
					actionsToMakeDependentOn.push(myAction);
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
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _xregexp = __webpack_require__(301);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Redirect = __webpack_require__(360);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _Controller = __webpack_require__(361);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _RoutingError = __webpack_require__(362);

	var _RoutingError2 = _interopRequireDefault(_RoutingError);

	var _View = __webpack_require__(345);

	var _View2 = _interopRequireDefault(_View);

	var _Utils = __webpack_require__(352);

	var _Utils2 = _interopRequireDefault(_Utils);

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
			var _this = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this));

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

			/**
	   * The result of the Action once it has been executed
	   *
	   * @property result
	   * @type {mixed}
	   */
			_this.result = false;

			///////////////////////////
			// Check passed argument //
			///////////////////////////

			if (typeof controllerActionOrCallback === 'string') {

				// A view uri?
				if (controllerActionOrCallback.match(/^[a-z\-\d\.]+$/)) {

					// Create a simple view callback
					_this.callback = function () {
						return new _View2.default(controllerActionOrCallback);
					};
				} else {

					// Parse controller name
					var match = _xregexp2.default.exec(controllerActionOrCallback, Action.getControllerActionRegExp());
					if (!match) throw new TypeError('Invalid action string: ' + controllerActionOrCallback + '. Use controller@method format.');

					// Store this
					_this.controllerClass = match.class;
					_this.controllerAction = match.action;
				}
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

					// Is there currently an action in this vc?
					if (_this2.viewContainer.currentAction) {

						// Was it triggered by the same route?
						if (_Utils2.default.uidFor(_this2.viewContainer.currentAction.route) === _Utils2.default.uidFor(_this2.route)) {

							// Are the arguments the same as well?
							var currentParams = JSON.stringify(_this2.viewContainer.currentAction.parameterArray);
							var newParams = JSON.stringify(_this2.parameterArray);
							if (currentParams === newParams) {

								// Does the route depend on queryString, and did that change?
								if (_this2.viewContainer.currentAction.route.acceptsQuery) {

									// Then we assume this action has changed.

									// Is there a flash message in the request?
								} else if (_underscore2.default.size(_this2.request.flash) > 0 && _this2.viewContainer.currentAction.route.acceptsFlash) {

									// Then we assume this action has changed.

								} else {

									// That means, we've just navigated within nested routes of that page, and this action can be skipped.
									resolve();
									return;
								}
							}
						}
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
							_this2._handleError('No controller defined with name "' + _this2.controllerClass + '"');
							return;
						}
						_this2.controller = new ChickenController(_this2);

						// Call action
						var controllerAction = _this2.controller[_this2.controllerAction];
						if (controllerAction === 'undefined' || typeof controllerAction !== 'function') {
							_this2._handleError('There is no action on the "' + _this2.controllerClass + '" controller with the name "' + _this2.controllerAction + '"');
							return;
						}

						// Make the call
						var actionResult = void 0;
						try {
							actionResult = controllerAction.apply(_this2.controller, _this2.parameterArray);
						} catch (error) {
							_this2._handleError(error, resolve, reject);
							return;
						}

						_this2._processResult(actionResult, resolve, reject);
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
				}).then(function (result) {

					// Store result
					_this2.result = result;
				}, function () /* error */{

					// No longer loading
					if (_this2.viewContainer) _this2.viewContainer.setLoading(false);
				});
			}
		}, {
			key: 'leave',
			value: function leave() {

				// View?
				if (this.result instanceof _View2.default) {
					return this.result.leave();
				}

				// Leaving is fine.
				return new Promise(function (resolve) {
					resolve();
				});
			}
		}, {
			key: '_processResult',
			value: function _processResult(result, resolve, reject) {
				var _this3 = this;

				/////////////////////////////////////
				// A 404 in the controller action? //
				/////////////////////////////////////

				if (result === false) {

					result = new _RoutingError2.default(404, 'Not found');
				}

				/////////////////
				// A redirect? //
				/////////////////

				if (result instanceof _Redirect2.default) {

					//@TODO Cancel the running request?

					(0, _App2.default)().goto(result.uri, null, result.flash);
				}

				//////////////////////
				// A routing error? //
				//////////////////////

				else if (result instanceof _RoutingError2.default) {

						// Handle it
						this._handleError(result, resolve, reject);
					}

					///////////////////////////
					// Is the result a view? //
					///////////////////////////

					else if (result instanceof _View2.default) {
							(function () {

								// Render the view
								var view = result;
								view.render().then(function () {

									// Add it
									_this3.viewContainer.setAction(_this3);
									view.addToContainer(_this3.viewContainer);
									resolve(view);
								}, function (error) {

									_this3._handleError(error, resolve, reject);
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
									_this3._handleError(error, resolve, reject);
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
									} else {

										// Don't know how to render this...
										reject('I don\'t know how to render the result for "' + this.targetViewContainer + '"');
										return;
									}
								}
			}
		}, {
			key: '_handleError',
			value: function _handleError(error, resolve, reject) {

				// Error object?
				if (typeof error === 'string') {
					error = new Error(error);
				}

				// Check router error handling, given priority to action, then route
				var route = this.routeMatch.route;
				var errorHandlers = route.router.getErrorHandlers(error, route);

				// Try to get one
				var handlerResult = false;
				while (errorHandlers.length > 0) {

					// Get next
					var callback = errorHandlers.shift();

					// Is the callback actually a string (controller action)?
					if (typeof callback === 'string') {

						// Get the controller action callback
						var _callback$split = callback.split(/@/),
						    _callback$split2 = _slicedToArray(_callback$split, 2),
						    controllerName = _callback$split2[0],
						    action = _callback$split2[1];

						if (controllerName && action) {

							// Same as me?
							var ctrl = void 0;
							if (this.controllerClass === controllerName) {
								ctrl = this.controller;
							} else {
								var ChickenController = _Controller2.default.registry.get(controllerName);
								if (!ChickenController) throw new Error('No controller defined with name "' + controllerName + '"');
								ctrl = new ChickenController(this);
							}

							// Get action
							callback = ctrl[action];
							if (callback === 'undefined' || typeof callback !== 'function') {
								throw new Error('There is no action on the "' + controllerName + '" controller with the name "' + action + '"');
							}
						}

						// Is it a route then
						if (typeof callback === 'string') {
							(function () {

								var viewUri = callback;
								callback = function callback() {
									return new _View2.default(viewUri);
								};
							})();
						}
					}

					// Call it.
					handlerResult = callback.apply(this, [this, error]);

					// Something?
					if (handlerResult) break;
				}

				// No result?
				if (!handlerResult) {
					throw error;
				}

				// Treat the result as my action-result!
				this._processResult(handlerResult, resolve, reject);
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
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Redirect = function () {
		function Redirect(uri) {
			_classCallCheck(this, Redirect);

			this.uri = uri;
			this.flash = {};
		}

		_createClass(Redirect, [{
			key: 'with',
			value: function _with(dataOrKey) {
				var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				// Value?
				var data = dataOrKey;
				if (value) {
					data = {};
					data[dataOrKey] = value;
				}

				_jquery2.default.extend(this.flash, data);

				return this;
			}
		}, {
			key: 'withError',
			value: function withError(message) {
				return this.with('error', message);
			}
		}]);

		return Redirect;
	}();

	module.exports = Redirect;

/***/ },
/* 361 */
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
/* 362 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Routing
	 */
	var RoutingError = function RoutingError(code) {
		var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var request = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		_classCallCheck(this, RoutingError);

		this.code = code;
		this.message = message;
		this.request = request;
	};

	module.exports = RoutingError;

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _queryString = __webpack_require__(305);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Routing
	 */
	var Request = function () {

		/**
	  * @class Routing.Request
	  *
	  * @constructor
	  * @param {object} 			location 		The location received from the History library
	  * @param {Application} 	[application] 	The Application instance that this Request is a part of
	  */
		function Request(location) {
			var application = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

			/**
	   * @property query
	   * @type {object}
	   */
			this.query = _queryString2.default.parse(location.search);

			/**
	   * @property flash
	   * @type {object|false}
	   */
			this.flash = location.state ? location.state.flash : {};
		}

		_createClass(Request, [{
			key: 'getFlash',
			value: function getFlash(key) {

				if (this.flash && this.flash[key]) return this.flash[key];
				return null;
			}
		}]);

		return Request;
	}();

	Request.cleanUri = function (uri) {

		if (/^\//.test(uri)) uri = uri.substr(1);
		if (/\/$/.test(uri)) uri = uri.substr(0, uri.length - 1);
		return uri;
	};

	module.exports = Request;

/***/ },
/* 364 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Middleware = function Middleware(name, callback) {
		_classCallCheck(this, Middleware);

		this.name = name;

		this.callback = callback;
	};

	Middleware.registry = new Map();
	Middleware.register = function (middleware) {
		var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		// Check arguments
		if (!(middleware instanceof Middleware)) {
			middleware = new Middleware(name, middleware);
		} else if (name === null) {
			name = middleware.name;
		}

		// Store it.
		Middleware.registry.set(name, middleware);
	};

	module.exports = Middleware;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(329);

	var _Observable3 = _interopRequireDefault(_Observable2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Service = function (_Observable) {
		_inherits(Service, _Observable);

		function Service(name) {
			_classCallCheck(this, Service);

			var _this = _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this));

			_this.name = name;
			_this.initialize.apply(_this);

			return _this;
		}

		_createClass(Service, [{
			key: 'initialize',
			value: function initialize() {
				throw new Error('The ' + this.name + ' service has not implemented the "initialize" method');
			}
		}, {
			key: 'load',
			value: function load() {
				throw new Error('The ' + this.name + ' service has not implemented the "load" method');
			}
		}]);

		return Service;
	}(_Observable3.default);

	Service.registry = new Map();
	Service.services = new Map();

	Service.get = function (name) {

		// Created?
		if (!Service.services.has(name)) {

			// Do we know it?
			if (!Service.registry.has(name)) {
				throw new Error('There is no service registed with the name "' + name + '"');
			}

			// Instantiate
			var ServiceClass = Service.registry.get(name);
			var service = new ServiceClass(name);

			// Store
			Service.services.set(name, service);
		}

		return Service.services.get(name);
	};

	module.exports = Service;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(330);

	var _Obj3 = _interopRequireDefault(_Obj2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Localization
	 */
	var I18n = function (_Obj) {
		_inherits(I18n, _Obj);

		function I18n(language) {
			_classCallCheck(this, I18n);

			/**
	   * @property data
	   * @type {Object}
	   */
			var _this = _possibleConstructorReturn(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).call(this));

			_this.data = {};

			/**
	   * @property bundlesToLoad
	   * @type {Array}
	   */
			_this.bundlesToLoad = [];

			/**
	   * @property language
	   * @type {string}
	   */
			_this.language = null;
			_this.setLanguage(language);

			return _this;
		}

		/**
	  * Add a bundle that will be loaded when the application starts
	  *
	  * @method addBundle
	  * @param  {string} url 
	  * @param  {string} [key=null]  Optional key to add loaded data under.
	  * @chainable
	  */


		_createClass(I18n, [{
			key: 'addBundle',
			value: function addBundle(url) {
				var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				this.bundlesToLoad.push({
					url: url,
					key: key
				});

				return this;
			}

			/**
	   * Manually load a bundle into I18n
	   *
	   * @method loadBundle
	   * @param  {string} url 
	   * @param  {string} [key=null]  Optional key to add loaded data under.
	   * @return {Promise}     
	   */

		}, {
			key: 'loadBundle',
			value: function loadBundle(url) {
				var _this2 = this;

				var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


				// Convert language placeholders
				if (!language) language = this.language;
				url = url.replace(/:language/, this.language);

				return new Promise(function (resolve, reject) {

					// Do we have it in cache?
					if (I18n.Cache[url]) {

						resolve(I18n.Cache[url]);
						return;
					}

					// Load it.
					_jquery2.default.ajax(url).then(function (result) {
						resolve(result);
					}).fail(function (error) {
						reject(error);
					});
				}).then(function (result) {

					// Parse result
					result = _this2.parseResult(result, url);

					// Is there a key?
					if (key) {
						var r = {};
						r[key] = result;
						result = r;
					}

					// Extend
					_jquery2.default.extend(_this2.data[language], result);
				});
			}
		}, {
			key: 'setLanguage',
			value: function setLanguage(language) {
				this.language = language;
				if (!this.data[language]) {
					this.data[language] = {};
				}
				return this;
			}
		}, {
			key: 'parseResult',
			value: function parseResult(result, url) {

				// Check extension
				var extension = _underscore2.default.last(url.split(/\./));
				if (extension === 'yaml') {

					// Parse yaml
					if (window.YAML === undefined) throw new Error('The YAML library was not loaded, so the language file cannot be read. Add the bower component yamljs to your application.');
					result = window.YAML.parse(result);
				}

				return result;
			}
		}, {
			key: 'getData',
			value: function getData() {
				var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				if (!language) language = this.language;
				return this.data[language];
			}

			/**
	   * Load all added bundles
	   *
	   * @method load
	   * @return {Promise}
	   */

		}, {
			key: 'load',
			value: function load() {
				var _this3 = this;

				// Main prmomise for loading
				return this.promise('loaded', function (resolve) {

					// Nothing to load?
					if (_this3.bundlesToLoad.length === 0) {
						resolve();
						return;
					}

					// Collect promises
					var promises = [];
					_underscore2.default.each(_this3.bundlesToLoad, function (bundle) {

						promises.push(_this3.loadBundle(bundle.url, bundle.key));
					});

					// When all is done.
					Promise.all(promises).then(function () {
						resolve();
					});
				});
			}

			/**
	   * Get the translation for given key
	   * 
	   * @method translate
	   * @param  {string} key        			Dot-notation key to get value of
	   * @param  {Object} [attributes={}] 	Optional object containing attributes to pass to the template in the translated value
	   * @param  {mixed} [fallback=null]		Optional fallback value when the key is nout found
	   * @return {mixed}
	   */

		}, {
			key: 'translate',
			value: function translate(key) {
				var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


				// Dot notation
				var obj = this.getData(language);
				var parts = key.split(/\./);
				while (parts.length > 0) {

					// Get firs tpart
					var part = parts.shift();

					// Not existing?
					if (!obj[part]) return fallback !== null ? fallback : '[' + key + ']';

					// Dive in.
					obj = obj[part];
				}

				// String?
				if (typeof obj === 'string') {

					/////////////////
					// Templating? //
					/////////////////

					if (obj.match(/<%/)) {

						// Convert attributes into real values
						var attr = _underscore2.default.mapObject(attributes, function (value) {

							// Get value?
							if (typeof value.getValue === 'function') {
								value = value.getValue();
							}
							return value;
						});

						// Make a template and run it
						var template = _underscore2.default.template(obj);
						obj = template(attr);
					}
				}

				return obj;
			}

			/**
	   * Alias of translate
	   * 
	   * @method get
	   * @param  {string} key        
	   * @param  {Object} [attributes={}] 
	   * @param  {mixed} [fallback=null]
	   * @return {mixed}
	   */

		}, {
			key: 'get',
			value: function get(key) {
				var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				return this.translate(key, attributes, fallback, language);
			}
		}]);

		return I18n;
	}(_Obj3.default);

	I18n.Cache = {};

	module.exports = I18n;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Model = __webpack_require__(349);

	var _Model2 = _interopRequireDefault(_Model);

	var _ApiCall = __webpack_require__(347);

	var _ApiCall2 = _interopRequireDefault(_ApiCall);

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Api
	 */
	var Api = function () {

		/**
	  * @class Api.Api
	  *
	  * @constructor
	  * @param  {Object} options 	 
	  */
		function Api(options) {
			_classCallCheck(this, Api);

			this.settings = _jquery2.default.extend({
				baseUrl: '/api',

				queueAjaxCalls: false,

				auth: false,

				beforeSend: false

			}, options);
		}

		/**
	  * @method deserialize
	  * @return {Data.Model|Data.Collection}
	  */


		_createClass(Api, [{
			key: 'deserialize',
			value: function deserialize() /* data, apiCall = null */{
				throw new Error('The Api implementation should have a deserialize method.');
			}

			/**
	   * @method getAuth
	   * @return {Auth.Auth} 
	   */

		}, {
			key: 'getAuth',
			value: function getAuth() {

				// Set already?
				if (this.auth) return this.auth;
				if (this.settings.auth === false) return false;

				// Look it up.
				this.auth = (0, _App2.default)().auth(this.settings.auth);
				return this.auth;
			}

			//////////////////
			// HTTP methods //
			//////////////////

			/**
	   * @method call
	   * @param  {string} method      
	   * @param  {string} uri         
	   * @param  {Object} [data={}]
	   * @param  {Object} [ajaxOptions={}]
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'call',
			value: function call(method, uri) {
				var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
				var ajaxOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


				// Create api call
				return new _ApiCall2.default(this, method, uri, data, ajaxOptions);
			}

			/**
	   * @method get
	   * @param  {string} uri         
	   * @param  {Object} [data={}]
	   * @param  {Object} [ajaxOptions={}]
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'get',
			value: function get(uri) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				return this.call('get', uri, data, ajaxOptions);
			}

			/**
	   * @method post
	   * @param  {string} uri         
	   * @param  {Object} [data={}]
	   * @param  {Object} [ajaxOptions={}]
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'post',
			value: function post(uri) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				return this.call('post', uri, data, ajaxOptions);
			}

			/**
	   * @method put
	   * @param  {string} uri         
	   * @param  {Object} [data={}]
	   * @param  {Object} [ajaxOptions={}]
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'put',
			value: function put(uri) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				return this.call('put', uri, data, ajaxOptions);
			}

			/**
	   * @method path
	   * @param  {string} uri         
	   * @param  {Object} [data={}]
	   * @param  {Object} [ajaxOptions={}]
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'patch',
			value: function patch(uri) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				return this.call('patch', uri, data, ajaxOptions);
			}

			/**
	   * @method delete
	   * @param  {string} uri         
	   * @param  {Object} [data={}]
	   * @param  {Object} [ajaxOptions={}]
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'delete',
			value: function _delete(uri) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				return this.call('delete', uri, data, ajaxOptions);
			}

			////////////////////
			// Helper methods //
			////////////////////

			/**
	   * @method makeUrl
	   * @param  {string} uri 	Relative url within the API
	   * @return {string} Fully formed url
	   */

		}, {
			key: 'makeUrl',
			value: function makeUrl(uri) {
				return this.settings.baseUrl + uri;
			}

			/**
	   * Make an ajax call using jQuery
	   * 
	   * @method ajax
	   * @param  {Object} options 
	   * @return {jQuery Ajax call}         
	   */

		}, {
			key: 'ajax',
			value: function ajax(options) {
				var method = this.settings.queueAjaxCalls ? _jquery2.default.ajaxq : _jquery2.default.ajax;
				if (method === undefined) throw new Error('Could not find Ajax or AjaxQ library. Did you include jquery.ajaxq into your project?');
				return method.apply(null, [this.getAjaxOptions(options)]);
			}

			/**
	   * Get jQuery ajax call options for this api
	   *
	   * @method getAjaxOptions
	   * @param {Object = {}} options   Optional options to merge
	   * @return {Function}
	   */

		}, {
			key: 'getAjaxOptions',
			value: function getAjaxOptions() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


				// Start with given options
				var beforeSends = [];
				if (options.beforeSend) {
					beforeSends.push(options.beforeSend);
					delete options.beforeSend;
				}
				var ajaxOptions = _jquery2.default.extend({
					dataType: 'json'
				}, options);

				// Get auth options
				var auth = this.getAuth();
				if (auth) {
					var authOptions = auth.getAjaxOptions();
					if (authOptions.beforeSend) {
						beforeSends.push(authOptions.beforeSend);
						delete authOptions.beforeSend;
					}
					_jquery2.default.extend(ajaxOptions, authOptions);
				}

				// Make callback
				ajaxOptions.beforeSend = function (jqXhr, jqOptions) {

					// Loop through before sends
					_underscore2.default.each(beforeSends, function (cb) {
						cb(jqXhr, jqOptions);
					});
				};

				return ajaxOptions;
			}

			///////////////////
			// Model methods //
			///////////////////

			/**
	   * Get a single Model record from the Api
	   * 
	   * @method one
	   * @param  {string} modelName 
	   * @param  {string} id        
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'one',
			value: function one(modelName, id) {

				// Get uri from model
				var ModelClass = _Model2.default.registry.get(modelName);
				if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
				var uri = ModelClass.definition.getApiUri(id);

				// Make the call
				var call = this.get(uri);
				call.modelClass = ModelClass;
				call.expectModel = true;
				return call;
			}

			/**
	   * Get all Model records from the Api
	   * 
	   * @method all
	   * @param  {string} modelName
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'all',
			value: function all(modelName) {

				// Get uri from model
				var ModelClass = _Model2.default.registry.get(modelName);
				if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
				var uri = ModelClass.definition.getApiUri();

				// Make the call
				var call = this.get(uri);
				call.modelClass = ModelClass;
				call.expectCollection = true;
				return call;
			}
		}, {
			key: 'store',
			value: function store(modelName) {

				// Get uri from model
				var ModelClass = _Model2.default.registry.get(modelName);
				if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
				var uri = ModelClass.definition.getApiUri();

				// Make the call
				var call = this.post(uri);
				call.modelClass = ModelClass;
				call.expectModel = true;
				return call;
			}

			/**
	   * Save given model to the Api
	   *
	   * @method saveModel
	   * @param 	{string}	uri
	   * @param 	{Data.Model} model
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'saveModel',
			value: function saveModel() /* uri, model */{
				throw new Error('The Api implementation should have a saveModel method.');
			}
		}]);

		return Api;
	}();

	module.exports = Api;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Api2 = __webpack_require__(367);

	var _Api3 = _interopRequireDefault(_Api2);

	var _JsonApiCall = __webpack_require__(369);

	var _JsonApiCall2 = _interopRequireDefault(_JsonApiCall);

	var _Model = __webpack_require__(349);

	var _Model2 = _interopRequireDefault(_Model);

	var _Collection = __webpack_require__(351);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _Utils = __webpack_require__(352);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Api
	 */
	var JsonApi = function (_Api) {
		_inherits(JsonApi, _Api);

		/**
	  * @class Api.JsonApi
	  * @extends Api.Api
	  *
	  * @constructor
	  * @param  {Object} options
	  */
		function JsonApi(options) {
			_classCallCheck(this, JsonApi);

			return _possibleConstructorReturn(this, (JsonApi.__proto__ || Object.getPrototypeOf(JsonApi)).call(this, options));
		}

		_createClass(JsonApi, [{
			key: 'call',
			value: function call(method, uri) {
				var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
				var ajaxOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


				// Create api call
				return new _JsonApiCall2.default(this, method, uri, data, ajaxOptions);
			}
		}, {
			key: 'saveModel',
			value: function saveModel(model, options) {

				// Make settings
				var settings = _jquery2.default.extend({
					includeRelated: true,
					includeRelatedData: false // False, true, or array of relationship names
				}, options);
				if (!settings.uri) settings.uri = model.getApiUri();

				// Make the data
				var data = {
					data: this.serialize(model, settings.includeRelated, settings.includeRelatedData)
				};

				// Check method
				var method = model.isNew() ? 'post' : 'patch';

				// Do the call
				var cache = [];
				var apiCall = this.call(method, settings.uri, JSON.stringify(data, function (key, value) {
					if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
						if (cache.indexOf(value) !== -1) {
							// Circular reference found, discard key
							return;
						}
						// Store value in our collection
						cache.push(value);
					}
					return value;
				}), settings.ajax);
				cache = null; // Enable garbage collection


				// Return it
				return apiCall;
			}
		}, {
			key: 'deleteModel',
			value: function deleteModel(model, options) {

				// Make settings
				var settings = _jquery2.default.extend({}, options);
				if (!settings.uri) settings.uri = model.getApiUri();

				// Make the data
				var data = {
					data: this.serialize(model)
				};

				// Do the call
				var cache = [];
				var apiCall = this.call('delete', settings.uri, JSON.stringify(data, function (key, value) {
					if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
						if (cache.indexOf(value) !== -1) {
							// Circular reference found, discard key
							return;
						}
						// Store value in our collection
						cache.push(value);
					}
					return value;
				}), settings.ajax);
				cache = null; // Enable garbage collection

				// Return it
				return apiCall;
			}
		}, {
			key: 'serialize',
			value: function serialize(model) {
				var includeRelated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

				var _this2 = this;

				var includeRelatedData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
				var includedModelGuids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];


				// Check related data
				if (typeof includeRelatedData === 'string') includeRelatedData = [includeRelatedData];

				// Basics: type and id
				var data = {
					type: _inflection2.default.pluralize(_inflection2.default.underscore(model.getDefinition().name))
				};
				var id = model.get('id');
				if (id) data.id = id;

				// Add pivot data?		
				if (model.isPivot()) {

					// Get attributes (non-dirty as well.)
					var pivotAttributes = model.getPivot().getAttributesForApi(false);
					if (_underscore2.default.size(pivotAttributes) > 0) {
						(function () {

							// Convert for API
							var meta = {};
							_underscore2.default.each(pivotAttributes, function (value, key) {
								meta[_inflection2.default.underscore(key)] = value;
							});

							// Set as meta data
							data.meta = meta;
						})();
					}
				}

				// Was this model already added before? Then we skip attributes and relationships
				if (!_underscore2.default.contains(includedModelGuids, _Utils2.default.uidFor(model))) {

					// Attributes?
					var attr = model.getAttributesForApi(!model.isNew());
					if (_underscore2.default.size(attr) > 0) {
						data.attributes = {};
						_underscore2.default.each(attr, function (value, key) {
							data.attributes[_inflection2.default.underscore(key)] = value;
						});
					}

					// Add model guid now, if it hasn't been added before
					includedModelGuids.push(_Utils2.default.uidFor(model));

					// @TODO Check wheter the reverse of a relationship was already included
					// e.g. In case of author > books > author, the last 'author' should be skipped, even
					// when the 'book' model has it defined.


					// Include related?
					if (includeRelated) {
						(function () {

							// Loop through relationships
							var relationships = {};
							_underscore2.default.each(model.related, function (relatedData, key) {

								//includeRelatedData defined? limit to these relations
								if (includeRelatedData && _underscore2.default.indexOf(includeRelatedData, key) === -1) {
									return;
								}

								// Is it a collection?
								if (relatedData instanceof _Collection2.default) {

									// Is dirty? or had dirty children
									if (relatedData.isDirty() || relatedData.hasDirtyChildren()) {

										// Add them all
										relationships[key] = { data: _underscore2.default.map(relatedData.items, function (item) {

												// Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
												if (includeRelatedData === false || _underscore2.default.indexOf(includeRelatedData, key) === -1) {
													includedModelGuids.push(_Utils2.default.uidFor(item));
												}

												// Add that model, but only add relationships when this model has not been added to the resource before, to prevent nesting recursive loop
												return _this2.serialize(item, true, includeRelatedData, includedModelGuids);
											}) };
									}
								} else if (relatedData instanceof _Model2.default) {

									// Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
									if (includeRelatedData === false || _underscore2.default.indexOf(includeRelatedData, key) === -1) {
										includedModelGuids.push(_Utils2.default.uidFor(relatedData));
									}

									// Is it dirty?
									if (relatedData.isDirty()) {

										// We always add the related model data
										relationships[key] = { data: _this2.serialize(relatedData, true, includeRelatedData, includedModelGuids) };
									}
								} else if (relatedData) {

									// What is this
									throw new TypeError('Unrecognized data found in model\'s relationship ' + key);
								}
							});
							if (_underscore2.default.size(relationships) > 0) {
								data.relationships = relationships;
							}
						})();
					}
				}

				return data;
			}
		}, {
			key: 'deserialize',
			value: function deserialize(result) {
				var _this3 = this;

				var apiCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				// Call given?
				if (!apiCall) {
					apiCall = new _JsonApiCall2.default(this, 'get', '/foo/bar');
				}

				// Check included data
				if (result.included) {

					// Loop and store them in the model stores
					_underscore2.default.each(result.included, function (recordData) {
						_this3.deserializeModel(recordData, apiCall, false);
					});
					_underscore2.default.each(result.included, function (recordData) {
						_this3._deserializeRelationships(recordData, apiCall);
					});
				}

				// Is the result an object or an array
				var data = result.data;
				if (data === undefined || data === null) throw new Error('No data received from Api');
				if (data instanceof Array) {

					return this.deserializeCollection(data, apiCall);
				} else if (data instanceof Object) {

					return this.deserializeModel(data, apiCall);
				}

				// Don't know...
				throw new TypeError('Unrecognized data received from Api');
			}
		}, {
			key: 'deserializeModel',
			value: function deserializeModel(data, apiCall) {
				var _this4 = this;

				var deserializeRelationships = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


				// Look for the type of model
				var resourceType = data.type;
				var modelClass = _Model2.default;
				if (!resourceType) {
					throw new TypeError('Api result did not specity the record type');
				}
				var modelName = this._getModelName(resourceType);

				if (_Model2.default.registry.has(modelName)) {
					modelClass = _Model2.default.registry.get(modelName);
				}

				// Collect attributes
				var attributes = {};
				_underscore2.default.each(data.attributes, function (value, key) {
					attributes[_inflection2.default.camelize(key, true)] = value;
				});

				// Check if the model is already in the store
				var model = apiCall.getResponseModel(modelName, data.id);
				if (!model) {

					// Create a new model.
					attributes.id = /^\d+$/.test(data.id) ? parseInt(data.id) : data.id;
					model = new modelClass(attributes);
					apiCall.storeReponseModel(model);
				} else {

					// Set the attributes (not overwriting dirty ones)
					model.setAttributesFromApi(attributes);
				}

				// Also deserialize relationships?
				if (deserializeRelationships) {

					model.withoutNotifications(function () {
						_this4._deserializeRelationships(data, apiCall, model);
					});
				}

				return model;
			}
		}, {
			key: 'deserializeCollection',
			value: function deserializeCollection(data, apiCall) {
				var _this5 = this;

				// Make a collection
				var collection = new _Collection2.default(apiCall.modelClass);

				// Add records
				_underscore2.default.each(data, function (recordData) {
					collection.addFromApi(_this5.deserializeModel(recordData, apiCall), true);
				});

				return collection;
			}
		}, {
			key: '_deserializeRelationships',
			value: function _deserializeRelationships(data, apiCall) {
				var _this6 = this;

				var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


				// Model given?
				if (model === null) {

					// Look it up in the store			
					model = apiCall.getResponseModel(this._getModelName(data.type), data.id);

					// Not known?
					if (!model) throw new Error('Could not deserialize relationships for unknown model: ' + this._getModelName(data.type) + ' with id ' + data.id);
				}

				// Check relationships records.
				if (data.relationships) {

					_underscore2.default.each(data.relationships, function (rel, relationshipName) {

						// Is there data?
						if (rel.data) {
							(function () {

								// Camelize
								var modelRelName = _inflection2.default.camelize(relationshipName, true);

								// Is it one record?
								if (rel.data instanceof Array) {
									(function () {

										// Find relationship
										var relationship = model.getRelationship(modelRelName);

										// Loop and add
										_underscore2.default.each(rel.data, function (relData) {

											// Get the model
											var relatedModel = _this6._getRelatedModel(relData, apiCall);
											if (relatedModel) {
												(function () {

													// Pivot data defined?
													var pivotAttributes = null;
													if (relData.meta && relationship.isPivot() && relationship.pivotModel) {

														// Collect pivot attributes
														pivotAttributes = {};
														_underscore2.default.each(relData.meta, function (value, key) {
															pivotAttributes[_inflection2.default.camelize(key, true)] = value;
														});
													}

													// Add to collection
													model.addRelatedModel(modelRelName, relatedModel, true, pivotAttributes);
												})();
											}
										});
									})();
								} else if (rel.data instanceof Object) {

									// Get the one
									var relatedModel = _this6._getRelatedModel(rel.data, apiCall);
									if (relatedModel) {

										// Set it
										model.setRelatedModel(modelRelName, relatedModel);
									}
								} else {

									throw new TypeError('Unrecognized relationship data received from Api');
								}
							})();
						}
					});
				}

				// Trigger the event
				model.trigger('deserialized', [this]);
			}
		}, {
			key: '_getRelatedModel',
			value: function _getRelatedModel(relationshipData, apiCall) {

				// Check data integrity
				var relType = relationshipData.type;
				var relId = relationshipData.id;
				if (!relType) throw new TypeError('Api result did not specify the relationship type');
				if (!relId) throw new TypeError('Api result did not specify the relationship record id');

				// Find model in store
				relType = this._getModelName(relType);
				var relModel = apiCall.getResponseModel(relType, relId);
				return relModel;
			}
		}, {
			key: '_getModelName',
			value: function _getModelName(resourceType) {

				// directions.locations => Directions.Location
				// times => Time

				var parts = resourceType.split('.');
				var modelType = _underscore2.default.map(parts, function (part, index) {
					part = _inflection2.default.camelize(part);
					return index === parts.length - 1 ? _inflection2.default.singularize(part) : part;
				}).join('.');

				return modelType;
			}
		}]);

		return JsonApi;
	}(_Api3.default);

	module.exports = JsonApi;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _ApiCall2 = __webpack_require__(347);

	var _ApiCall3 = _interopRequireDefault(_ApiCall2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Api
	 */
	var JsonApiCall = function (_ApiCall) {
		_inherits(JsonApiCall, _ApiCall);

		function JsonApiCall() {
			_classCallCheck(this, JsonApiCall);

			return _possibleConstructorReturn(this, (JsonApiCall.__proto__ || Object.getPrototypeOf(JsonApiCall)).apply(this, arguments));
		}

		_createClass(JsonApiCall, [{
			key: 'include',


			/**
	   * @class Api.JsonApiCall
	   * @extends Api.ApiCall
	   * 
	   * @constructor
	   * @param  {Api.JsonApi} api 	The Api instance this call originates from
	   * @param  {string} method      The HTTP method to use (get, post, put, etc.)
	   * @param  {string} uri			The uri to call
	   * @param  {Object} data        
	   * @param  {Object} ajaxOptions 	 
	   */

			/**
	    * Include the given relationships in the request
	    * 
	    * @method include
	    * @chainable
	    * 
	    * @param  {string} relations  JSONAPI include options for request
	    */
			value: function include(relations) {
				if (relations instanceof Array) {
					relations = relations.join(',');
				}
				return this.query('include', relations);
			}
		}, {
			key: 'filter',
			value: function filter(key, value) {
				return this.query('filter[' + _inflection2.default.underscore(key) + ']', value);
			}
		}]);

		return JsonApiCall;
	}(_ApiCall3.default);

	module.exports = JsonApiCall;

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Api2 = __webpack_require__(367);

	var _Api3 = _interopRequireDefault(_Api2);

	var _PrimitiveJsonApiCall = __webpack_require__(371);

	var _PrimitiveJsonApiCall2 = _interopRequireDefault(_PrimitiveJsonApiCall);

	var _Model = __webpack_require__(349);

	var _Model2 = _interopRequireDefault(_Model);

	var _Collection = __webpack_require__(351);

	var _Collection2 = _interopRequireDefault(_Collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Api
	 */
	var PrimitiveJsonApi = function (_Api) {
		_inherits(PrimitiveJsonApi, _Api);

		/**
	  * @class Api.PrimitiveJsonApi
	  * @extends Api.Api
	  *
	  * @constructor
	  * @param  {Object} options
	  */
		function PrimitiveJsonApi(options) {
			_classCallCheck(this, PrimitiveJsonApi);

			return _possibleConstructorReturn(this, (PrimitiveJsonApi.__proto__ || Object.getPrototypeOf(PrimitiveJsonApi)).call(this, options));
		}

		_createClass(PrimitiveJsonApi, [{
			key: 'call',
			value: function call(method, uri) {
				var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
				var ajaxOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


				// Create api call
				return new _PrimitiveJsonApiCall2.default(this, method, uri, data, ajaxOptions);
			}
		}, {
			key: 'saveModel',
			value: function saveModel() /*model, options*/{
				throw new Error('saveModel is not implemented');
			}
		}, {
			key: 'deleteModel',
			value: function deleteModel() /*model, options*/{
				throw new Error('deleteModel is not implemented');
			}
		}, {
			key: 'serialize',
			value: function serialize() /*model, includeRelated = true, includeRelatedData = false, includedModelGuids = []*/{
				throw new Error('serialize is not implemented');
			}
		}, {
			key: 'deserialize',
			value: function deserialize(result) {
				var _this2 = this;

				var apiCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				// Call given?
				if (!apiCall) {
					apiCall = new _PrimitiveJsonApiCall2.default(this, 'get', '/foo/bar');
				}

				// Check relationship map
				if (result.links) {
					(function () {

						var map = {};
						_underscore2.default.each(result.links, function (info, key) {

							// Check key (e.g. journeys.line)
							var parts = key.split(/\./);
							var localModel = parts[0];
							var attribute = parts[1];

							// Store in map
							map[localModel] = map[localModel] || {};
							map[localModel][attribute] = info.type;
						});
						apiCall.relationshipMap = map;
					})();
				}

				// Deduce root element
				var rootElement = _underscore2.default.camelize(_inflection2.default.pluralize(apiCall.modelClass.modelName), true);

				// Check included data	
				if (result.linked) {

					// Loop and store them in the model stores
					_underscore2.default.each(result.linked, function (records, key) {

						// Guess model
						var modelClass = _Model2.default.registry.get(_inflection2.default.camelize(_inflection2.default.singularize(key)));
						if (!modelClass) throw new Error('Api result contains resource for which there is no Model defined: ' + _inflection2.default.camelize(_inflection2.default.singularize(key)));
						_underscore2.default.each(records, function (recordData) {
							_this2.deserializeModel(recordData, apiCall, false, modelClass);
						});
					});

					// Now loop again, and connect related models to each other
					_underscore2.default.each(result.linked, function (records, key) {

						// Guess model
						var modelClass = _Model2.default.registry.get(_inflection2.default.camelize(_inflection2.default.singularize(key)));
						_underscore2.default.each(records, function (recordData) {
							_this2._deserializeRelationships(recordData, apiCall, key, null, modelClass);
						});
					});
				}

				// Is the result an object or an array
				var data = result[rootElement];
				if (data === undefined || data === null) throw new Error('No data received from Api');
				if (data instanceof Array) {

					return this.deserializeCollection(data, apiCall);
				} else if (data instanceof Object) {

					return this.deserializeModel(data, apiCall);
				}

				// Don't know...
				throw new TypeError('Unrecognized data received from Api');
			}
		}, {
			key: 'deserializeModel',
			value: function deserializeModel(data, apiCall) {
				var _this3 = this;

				var deserializeRelationships = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
				var modelClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


				// Look for the type of model
				modelClass = modelClass || apiCall.modelClass;
				var modelName = modelClass.modelName;

				// Collect attributes
				var attributes = {};
				_underscore2.default.each(data, function (value, key) {
					attributes[_inflection2.default.camelize(key, true)] = value;
				});

				// Check if the model is already in the store
				var model = apiCall.getResponseModel(modelName, data.id);
				if (!model) {

					// Create a new model.
					attributes.id = /^\d+$/.test(data.id) ? parseInt(data.id) : data.id;
					model = new modelClass(attributes);
					apiCall.storeReponseModel(model);
				} else {

					// Set the attributes (not overwriting dirty ones)
					model.setAttributesFromApi(attributes);
				}

				// Also deserialize relationships?
				if (deserializeRelationships) {
					(function () {

						var localKey = _underscore2.default.underscored(_inflection2.default.pluralize(modelName));
						model.withoutNotifications(function () {
							_this3._deserializeRelationships(data, apiCall, localKey, model);
						});
					})();
				}

				return model;
			}
		}, {
			key: 'deserializeCollection',
			value: function deserializeCollection(data, apiCall) {
				var _this4 = this;

				// Make a collection
				var collection = new _Collection2.default(apiCall.modelClass);

				// Add records
				_underscore2.default.each(data, function (recordData) {
					collection.addFromApi(_this4.deserializeModel(recordData, apiCall), true);
				});

				return collection;
			}
		}, {
			key: '_deserializeRelationships',
			value: function _deserializeRelationships(data, apiCall, localModelKey) {
				var _this5 = this;

				var model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
				var modelClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;


				// Model given?
				if (model === null) {

					// Look it up in the store			
					model = apiCall.getResponseModel(this._getModelName(modelClass.modelName), data.id);

					// Not known?
					if (!model) throw new Error('Could not deserialize relationships for unknown model: ' + this._getModelName(data.type) + ' with id ' + data.id);
				}

				// Check relationships records.
				if (data.links) {

					_underscore2.default.each(data.links, function (rel, relationshipName) {

						// Is there data?
						if (rel) {
							var _ret3 = function () {

								// __chicken variable?
								if (relationshipName.match(/^__/)) return {
										v: void 0
									};

								// Camelize
								var modelRelName = _inflection2.default.camelize(relationshipName, true);
								var resourceType = apiCall.relationshipMap[localModelKey][relationshipName];

								// Is it one record?
								if (rel instanceof Array) {
									(function () {

										// Find relationship
										var relationship = model.getRelationship(modelRelName);

										// Loop and add
										_underscore2.default.each(rel, function (relData) {

											// Get the model
											var relatedModel = _this5._getRelatedModel(relData, resourceType, apiCall);
											if (relatedModel) {
												(function () {

													// Pivot data defined?
													var pivotAttributes = null;
													if (relData.meta && relationship.isPivot() && relationship.pivotModel) {

														// Collect pivot attributes
														pivotAttributes = {};
														_underscore2.default.each(relData.meta, function (value, key) {
															pivotAttributes[_inflection2.default.camelize(key, true)] = value;
														});
													}

													// Add to collection
													model.addRelatedModel(modelRelName, relatedModel, true, pivotAttributes);
												})();
											}
										});
									})();
								} else {

									// Get the one
									var relatedModel = _this5._getRelatedModel(rel, resourceType, apiCall);
									if (relatedModel) {

										// Set it
										model.setRelatedModel(modelRelName, relatedModel);
									}
								}
							}();

							if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
						}
					});
				}

				// Trigger the event
				model.trigger('deserialized', [this]);
			}
		}, {
			key: '_getRelatedModel',
			value: function _getRelatedModel(relId, relType, apiCall) {

				// Check data integrity
				if (!relType) throw new TypeError('Api result did not specify the relationship type');
				if (!relId) throw new TypeError('Api result did not specify the relationship record id');

				// Find model in store
				relType = this._getModelName(relType);
				var relModel = apiCall.getResponseModel(relType, relId);
				return relModel;
			}
		}, {
			key: '_getModelName',
			value: function _getModelName(resourceType) {

				// directions.locations => Directions.Location
				// times => Time

				var parts = resourceType.split('.');
				var modelType = _underscore2.default.map(parts, function (part, index) {
					part = _inflection2.default.camelize(part);
					return index === parts.length - 1 ? _inflection2.default.singularize(part) : part;
				}).join('.');

				return modelType;
			}
		}]);

		return PrimitiveJsonApi;
	}(_Api3.default);

	module.exports = PrimitiveJsonApi;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _ApiCall2 = __webpack_require__(347);

	var _ApiCall3 = _interopRequireDefault(_ApiCall2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Api
	 */
	var PrimitiveJsonApiCall = function (_ApiCall) {
		_inherits(PrimitiveJsonApiCall, _ApiCall);

		function PrimitiveJsonApiCall() {
			_classCallCheck(this, PrimitiveJsonApiCall);

			return _possibleConstructorReturn(this, (PrimitiveJsonApiCall.__proto__ || Object.getPrototypeOf(PrimitiveJsonApiCall)).apply(this, arguments));
		}

		_createClass(PrimitiveJsonApiCall, [{
			key: 'include',


			/**
	   * @class Api.PrimitiveJsonApiCall
	   * @extends Api.ApiCall
	   * 
	   * @constructor
	   * @param  {Api.JsonApi} api 	The Api instance this call originates from
	   * @param  {string} method      The HTTP method to use (get, post, put, etc.)
	   * @param  {string} uri			The uri to call
	   * @param  {Object} data        
	   * @param  {Object} ajaxOptions 	 
	   */

			/**
	    * Include the given relationships in the request
	    * 
	    * @method include
	    * @chainable
	    * 
	    * @param  {string} relations  JSONAPI include options for request
	    */
			value: function include(relations) {
				if (relations instanceof Array) {
					relations = relations.join(',');
				}
				return this.query('include', relations);
			}
		}, {
			key: 'filter',
			value: function filter(key, value) {
				return this.query('filter[' + _inflection2.default.underscore(key) + ']', value);
			}
		}]);

		return PrimitiveJsonApiCall;
	}(_ApiCall3.default);

	module.exports = PrimitiveJsonApiCall;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Observable2 = __webpack_require__(329);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Middleware = __webpack_require__(364);

	var _Middleware2 = _interopRequireDefault(_Middleware);

	var _App = __webpack_require__(346);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Auth
	 */
	var Auth = function (_Observable) {
		_inherits(Auth, _Observable);

		/**
	  * @class Auth.Auth
	  *
	  * @param 	{Object} options 
	  * @constructor
	  */
		function Auth() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			_classCallCheck(this, Auth);

			// Default options
			var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this));

			_this.settings = _underscore2.default.defaults(options, {

				getUserUri: '/me',

				onAuthenticated: null,
				onUnauthenticated: null,
				onSessionTimedOut: null,
				onInvalidated: null,

				middlewareName: 'auth'

			});

			_this.set('isAuthenticated', false);

			// Register the middleware
			_this.middleware = new _Middleware2.default(_this.settings.middlewareName, function (next, request, routeMatch) {

				return _this.middlewareAction(next, request, routeMatch);
			});
			_Middleware2.default.register(_this.middleware);

			return _this;
		}

		/**
	  * Act as middleware for given request
	  *
	  * @method middleWareAction
	  * @param  {Callback} 			next		The callback to call when everything is okay
	  * @param  {Routing.Request} 	request 
	  * @param  {Routing.RouteMatch} 		routeMatch   	 	 
	  */


		_createClass(Auth, [{
			key: 'middlewareAction',
			value: function middlewareAction(next, request, routeMatch) {

				// Are we not authenticated?
				if (!this.isAuthenticated()) {

					// Trigger the unauthenticated event
					if (!this.settings.onUnauthenticated) {
						throw new Error('Protected route called without authentication.');
					}

					// Do the callback
					this.doCallback('onUnauthenticated', [request, routeMatch]);
					return;
				}

				// Ok.
				next();
			}
		}, {
			key: 'doCallback',
			value: function doCallback(key, params) {
				var _this2 = this;

				// Promise
				return new Promise(function (resolve, reject) {

					// Do we have one?
					var callback = _this2.settings[key];
					if (!callback) {
						reject('There is no callback defined for ' + key);
					}

					// Is it a string with a uri?
					if (typeof callback === 'string') {
						(0, _App2.default)().goto(callback);
						resolve();
					}

					// Get the result from the callback
					var result = callback.apply(_this2, params);

					// Is there something resolvable in there?
					if (result && result instanceof Promise) {

						// Link it.
						result.then(function (result) {
							resolve(result);
						}, function (error) {
							reject(error);
						});
					} else {

						// Just resolve now
						resolve(result);
					}
				});
			}

			/**
	   * Try to authenticate using given credentials
	   * 
	   * @method authenticate
	   * @param  {object} credentials 
	   * @return {Promise}
	   */

		}, {
			key: 'authenticate',
			value: function authenticate() /* credentials */{
				throw new Error('The ' + this.constructor.name + ' class has not implemented the "authenticate" method');
			}

			/**
	   * Try to invalidate the current authenticated session
	   *
	   * @method invalidate
	   * @return {Promise}
	   */

		}, {
			key: 'invalidate',
			value: function invalidate() {
				throw new Error('The ' + this.constructor.name + ' class has not implemented the "invalidate" method');
			}

			/**
	   * Check whether the session is authenticated
	   * 
	   * @method isAuthenticated
	   * @return {Boolean}
	   */

		}, {
			key: 'isAuthenticated',
			value: function isAuthenticated() {
				return this.get('isAuthenticated');
			}

			/**
	   * Authorize given ApiCall instance, adding necessary
	   * authorization headers, etc.
	   * 
	   * @method authorizeApiCall
	   * @param  {Api.ApiCall} apiCall 
	   * @return {Api.ApiCall}
	   */

		}, {
			key: 'authorizeApiCall',
			value: function authorizeApiCall(apiCall) {

				// Extend with my options
				var ajaxOptions = this.getAjaxOptions();
				_jquery2.default.extend(apiCall.ajaxOptions, ajaxOptions);
				return apiCall;
			}
		}, {
			key: 'getAjaxOptions',
			value: function getAjaxOptions() {
				return {};
			}

			/**
	   * Read given Api Error and update session accordingly, if
	   * appropriate.
	   *
	   * @method processApiError
	   * @param  {object} error 
	   * @return {object}       
	   */

		}, {
			key: 'processApiError',
			value: function processApiError(error) {
				return error;
			}
		}]);

		return Auth;
	}(_Observable3.default);

	module.exports = Auth;

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(298);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment = __webpack_require__(304);

	var _moment2 = _interopRequireDefault(_moment);

	var _Auth2 = __webpack_require__(372);

	var _Auth3 = _interopRequireDefault(_Auth2);

	var _AuthError = __webpack_require__(374);

	var _AuthError2 = _interopRequireDefault(_AuthError);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Auth
	 */
	var JWTAuth = function (_Auth) {
		_inherits(JWTAuth, _Auth);

		/**
	  * @class Auth.JWTAuth
	  * @extends Auth.Auth
	  *
	  * @param 	{Object} options 
	  * @constructor
	  */
		function JWTAuth() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			_classCallCheck(this, JWTAuth);

			// Default options
			options = _jquery2.default.extend({

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
				autoRefreshInterval: 7200, // 2 hours

				localStorageKey: 'ChickenJWTAuthToken'

			}, options);

			/**
	   * The current token
	   * 
	   * @property token
	   * @type {string}
	   */
			var _this = _possibleConstructorReturn(this, (JWTAuth.__proto__ || Object.getPrototypeOf(JWTAuth)).call(this, options));

			_this.token = null;

			return _this;
		}

		_createClass(JWTAuth, [{
			key: 'initialize',
			value: function initialize() {
				var _this2 = this;

				// Get token from localstorage
				try {
					this.token = JSON.parse(localStorage.getItem(this.settings.localStorageKey));
				} catch (err) {
					this.token = null;
				}

				// Validate the tkoen
				return new Promise(function (resolve) {

					// No token?
					if (!_this2.token) {
						resolve(false);
						return;
					}

					// Wheter we are or are not authenticated, we resolve, because initializion is complete
					_this2.validateToken().then(function () {
						resolve(true);
					}, function () {
						resolve(false);
					});
				});
			}

			/**
	   * Try to authenticate using given credentials
	   * 
	   * @method authenticate
	   * @param  {string} identifier 	Usually the email address
	   * @param  {string} password   
	   * @return {Promise} 
	   */

		}, {
			key: 'authenticate',
			value: function authenticate(identifier, password) {
				var _this3 = this;

				// Make a call.
				return new Promise(function (resolve, reject) {

					// Prepare data
					var data = {};
					data[_this3.settings.identifierKey] = identifier;
					data[_this3.settings.passwordKey] = password;

					// Make the call.
					_jquery2.default.ajax({
						url: _this3.settings.baseUrl + _this3.settings.authenticateUri,
						data: data,
						method: _this3.settings.authenticateMethod,
						beforeSend: _this3.settings.beforeSend
					}).then(function (result) {

						// Check token.
						if (!result.token) reject('Could not find token in result');

						// Store it.
						_this3.setToken(result.token);

						// Handle user events
						_this3.doCallback('onAuthenticated', []).then(function () {
							_this3.set('isAuthenticated', true);
							resolve(_this3.token);
						});
					}).fail(function (error) {

						reject(new _AuthError2.default(_this3, error));
					});
				});
			}
		}, {
			key: 'invalidate',
			value: function invalidate() {
				var _this4 = this;

				return new Promise(function (resolve /*, reject*/) {

					// Waiting to time out?
					if (_this4.sessionTimeoutTimeout) {
						clearTimeout(_this4.sessionTimeoutTimeout);
						_this4.sessionTimeoutTimeout = false;
					}
					if (_this4.autoRefreshTimeout) {
						clearTimeout(_this4.autoRefreshTimeout);
						_this4.autoRefreshTimeout = false;
					}

					// Remove token
					_this4.token = false;
					localStorage.removeItem(_this4.settings.localStorageKey);
					_this4.set('isAuthenticated', false);

					_this4.doCallback('onInvalidated', []);
					_this4.trigger('invalidated');
					resolve();
				});
			}
		}, {
			key: 'refreshToken',
			value: function refreshToken() {
				var _this5 = this;

				// Waiting to time out?
				if (this.autoRefreshTimeout) {
					clearTimeout(this.autoRefreshTimeout);
					this.autoRefreshTimeout = false;
				}

				// Make a call.
				return new Promise(function (resolve, reject) {

					// Already timed out?
					if (!_this5.isAuthenticated()) {
						reject('Cannot refresh token when not authenticated');
						return;
					}

					// Make the call.
					_jquery2.default.ajax({
						url: _this5.settings.baseUrl + _this5.settings.refreshUri,
						method: _this5.settings.refreshMethod,
						beforeSend: function beforeSend(xhr) {
							xhr.setRequestHeader('Authorization', 'Bearer ' + _this5.token.token);
						}
					}).then(function (result) {

						// Check token.
						if (!result.token) reject('Could not find token in result');

						// Store it.
						_this5.setToken(result.token);
						resolve(_this5.token);

						// Authenticated
						_this5.trigger('tokenRefreshed');
					}).fail(function (error) {

						_this5.invalidate();
						reject(new _AuthError2.default(_this5, error));
					});
				});
			}
		}, {
			key: 'setToken',
			value: function setToken(tokenString) {

				// Store it
				this.token = {
					token: tokenString,
					receivedAt: (0, _moment2.default)().unix()
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
				localStorage.setItem(this.settings.localStorageKey, JSON.stringify(this.token));

				// We are logged in
				this.validateToken();
			}
		}, {
			key: 'clearToken',
			value: function clearToken() {
				this.token = null;
				localStorage.removeItem(this.settings.localStorageKey);
			}
		}, {
			key: 'validateToken',
			value: function validateToken() {
				var _this6 = this;

				return new Promise(function (resolve, reject) {

					// Any token?
					if (_this6.token) {

						// Is it an object?
						if (_this6.token instanceof Object) {

							// Still valid?
							var now = (0, _moment2.default)().unix();
							var timesOutAt = _this6.token.receivedAt + _this6.settings.tokenValidForMinutes * 60;
							if (timesOutAt < now) {

								// No longer valid.
								_this6.set('isAuthenticated', false);
								_this6.clearToken();
								reject();
								return;
							}

							// Auto refresh?
							if (_this6.settings.autoRefreshToken) {

								// Wait a bit and then refresh
								if (_this6.autoRefreshTimeout) clearTimeout(_this6.autoRefreshTimeout);
								var refreshAt = _this6.token.receivedAt + _this6.settings.autoRefreshInterval;
								var timeoutMs = Math.max((refreshAt - now) * 1000, 5000);
								_this6.autoRefreshTimeout = setTimeout(function () {

									_this6.autoRefreshTimeout = false;
									_this6.refreshToken();
								}, timeoutMs);
							}

							// Wait for it to timeout
							if (_this6.sessionTimeoutTimeout) clearTimeout(_this6.sessionTimeoutTimeout);
							_this6.sessionTimeoutTimeout = setTimeout(function () {

								////////////////////////////////
								// Make the session time out! //
								////////////////////////////////

								_this6.sessionTimeoutTimeout = false;
								_this6.trigger('sessionTimedOut');
								_this6.set('isAuthenticated', false);
								_this6.token = null;

								if (_this6.autoRefreshTimeout) clearTimeout(_this6.autoRefreshTimeout);
							}, (timesOutAt - now) * 1000);

							// It is valid!
							_this6.doCallback('onAuthenticated', []).then(function () {
								_this6.set('isAuthenticated', true);
								resolve();
							});
						} else {

							// Not valid
							_this6.set('isAuthenticated', false);
							reject();
							_this6.token = null;
						}
					} else {

						// Not authenticated
						_this6.set('isAuthenticated', false);
						reject();
					}
				});
			}
		}, {
			key: 'processApiError',
			value: function processApiError(error) {

				// Unauthorized?
				if (error.xhrError.status === 401) {
					if (error.getMessage() === 'Unable to authenticate with invalid token.') {
						this.invalidate();
					}
				}

				return error;
			}
		}, {
			key: 'getAjaxOptions',
			value: function getAjaxOptions() {
				var _this7 = this;

				// Add token.
				var options = {};
				if (this.token) {

					// Add the bearer token
					options.beforeSend = function (xhr) {
						xhr.setRequestHeader('Authorization', 'Bearer ' + _this7.token.token);
					};
				}

				return options;
			}
		}]);

		return JWTAuth;
	}(_Auth3.default);

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

	module.exports = JWTAuth;

/***/ },
/* 374 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module AuthError
	 */
	var AuthError = function () {
		function AuthError(auth, xhrError) {
			_classCallCheck(this, AuthError);

			/**
	   * @property auth
	   * @type {Auth.Auth}
	   */
			this.auth = auth;

			/**
	   * @property xhrError
	   * @type {jqXHR}
	   */
			this.xhrError = xhrError;
		}

		_createClass(AuthError, [{
			key: 'getMessage',
			value: function getMessage() {

				// JSON body with message?
				if (this.xhrError.responseJSON && this.xhrError.responseJSON.message) {

					return this.xhrError.responseJSON.message;
				}

				// Text?
				if (this.xhrError.responseText) return this.xhrError.responseText;

				// Don't know
				return 'Unknown error';
			}
		}]);

		return AuthError;
	}();

	module.exports = AuthError;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _moment = __webpack_require__(304);

	var _moment2 = _interopRequireDefault(_moment);

	var _Observable = __webpack_require__(329);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(340);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModelAttribute = function () {
		function ModelAttribute(name, type) {
			_classCallCheck(this, ModelAttribute);

			this.name = name;
			this.type = type;

			this.isPrimaryKey = false;
			this.isNullable = false;
			this.isUnique = false;

			this.defaultValue = undefined;
			this.includeInRequests = true;

			this.size = null;

			this.enumOptions = null;
		}

		_createClass(ModelAttribute, [{
			key: 'default',
			value: function _default(value) {
				this.defaultValue = value;
				return this;
			}
		}, {
			key: 'primary',
			value: function primary() {
				var isPrimaryKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.isPrimaryKey = isPrimaryKey;
				return this;
			}
		}, {
			key: 'unique',
			value: function unique() {
				var isUnique = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.isUnique = isUnique;
				return this;
			}
		}, {
			key: 'nullable',
			value: function nullable() {
				var isNullable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.isNullable = isNullable;
				return this;
			}
		}, {
			key: 'hidden',
			value: function hidden() {
				var isHiddenFromRequests = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.includeInRequests = !isHiddenFromRequests;
			}

			/**
	   * Cast given (database) value for use in the application,
	   * according to the type of this attribute
	   * 
	   * @method cast
	   * @param  {mixed} value 
	   * @return {mixed}       
	   */

		}, {
			key: 'cast',
			value: function cast(value) {

				// Undefined and null will remain so
				if (value === undefined || value === null) return value;

				switch (this.type) {

					////////////////
					// Primitives //
					////////////////

					// Number
					case ModelAttribute.Number:
						return value instanceof Number ? value : Number.parseFloat(value);

					// Integer
					case ModelAttribute.Integer:
						return Number.isInteger(value) ? value : Number.parseInt(value);

					// String
					case ModelAttribute.String:
						return value instanceof String ? value : '' + value;

					//Array
					case ModelAttribute.Array:
						return value instanceof String ? JSON.parse(value) : value;

					///////////
					// Dates //
					///////////

					// Date or date time
					case ModelAttribute.Date:
					case ModelAttribute.DateTime:
						return value && !_moment2.default.isMoment(value) ? (0, _moment2.default)(value) : value;

					default:
						return value;

				}
			}

			/**
	   * Cast given application value back for use in the database/api.
	   *
	   * @method uncast
	   * @param  {mixed} value 
	   * @return {mixed}       
	   */

		}, {
			key: 'uncast',
			value: function uncast(value) {

				// Undefined and null will remain so
				if (value === undefined || value === null) return value;

				switch (this.type) {

					////////////////
					// Primitives //
					////////////////

					// Number
					case ModelAttribute.Number:
						return value instanceof Number ? value : Number.parseFloat(value);

					// Integer
					case ModelAttribute.Integer:
						return Number.isInteger(value) ? value : Number.parseInt(value);

					// String
					case ModelAttribute.String:
						return value instanceof String ? value : '' + value;

					//Array
					case ModelAttribute.Array:
						if (value instanceof _ObservableArray2.default) value = value.toArray();
						return value;

					///////////
					// Dates //
					///////////

					// Date or date time
					case ModelAttribute.Date:
						return _moment2.default.isMoment(value) ? value.format('YYYY-MM-DD') : value;

					case ModelAttribute.DateTime:
						return _moment2.default.isMoment(value) ? value.format('YYYY-MM-DD HH:mm:ss') : value;

					/////////////
					// Objects //
					/////////////

					case ModelAttribute.Object:
						return value instanceof _Observable2.default ? value.attributes : value;

					default:
						return value;

				}
			}
		}, {
			key: 'getDefaultValue',
			value: function getDefaultValue() {

				// Is there a value?
				if (this.defaultValue) return this.defaultValue;

				// Nullable?
				if (this.isNullable) return null;

				// Default for type
				switch (this.type) {

					////////////////
					// Primitives //
					////////////////

					// Number
					case ModelAttribute.Number:
					case ModelAttribute.Integer:
						return 0;

					// String
					case ModelAttribute.String:
						return '';

					// Boolean
					case ModelAttribute.Boolean:
						return false;

					///////////
					// Dates //
					///////////

					// Date or date time
					case ModelAttribute.DateTime:
					case ModelAttribute.Time:
					case ModelAttribute.Date:
						return (0, _moment2.default)();

					///////////
					// Model //
					///////////

					case ModelAttribute.Model:
					case ModelAttribute.Translations:
						return {};

					default:
						return null;

				}
			}
		}]);

		return ModelAttribute;
	}();

	ModelAttribute.Number = 'Number';
	ModelAttribute.Boolean = 'Boolean';
	ModelAttribute.Integer = 'Integer';
	ModelAttribute.String = 'String';
	ModelAttribute.Enum = 'Enum';

	ModelAttribute.Date = 'Date';
	ModelAttribute.DateTime = 'DateTime';
	ModelAttribute.Time = 'Time';

	ModelAttribute.Array = 'Array';
	ModelAttribute.Object = 'Object';
	ModelAttribute.Translations = 'Translations';
	ModelAttribute.Model = 'Model';

	module.exports = ModelAttribute;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _ModelAttribute = __webpack_require__(375);

	var _ModelAttribute2 = _interopRequireDefault(_ModelAttribute);

	var _Relationship = __webpack_require__(377);

	var _Relationship2 = _interopRequireDefault(_Relationship);

	var _ComputedProperty = __webpack_require__(333);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Data
	 */
	var ModelDefinition = function () {
		function ModelDefinition(name, callback) {
			var _this = this;

			_classCallCheck(this, ModelDefinition);

			this.name = name;

			// Guess api uri from model name
			var parts = name.split('.');
			this.apiUri = '/' + _underscore2.default.map(parts, function (part, index) {
				return _inflection2.default.underscore(index === parts.length - 1 ? _inflection2.default.pluralize(part) : part);
			}).join('/');

			this.api = 'default';

			this.attributes = {};
			this.attributeNames = [];
			this.relationships = {};
			this.relationshipsByLocalKey = null;
			this.apiAttributeNames = null;
			this.hiddenAttributeNames = null;

			this.computedAttributes = {};

			this.validationRules = {};

			this.isDynamic = false;

			this.searchFields = null;

			callback.apply(this, [this]);

			_underscore2.default.each(this.relationships, function (rel) {
				rel.addLocalKeyToModelDefinitionAttributes(_this);
			});
		}

		/**
	  * Making a model dynamic means that not all attributes are defined,
	  * and when submitting the model to an API, all set attributes will
	  * be sent.
	  * 
	  * @method dynamic
	  * @param  {Boolean} [isDynamic=true] 	
	  * @chainable
	  */


		_createClass(ModelDefinition, [{
			key: 'dynamic',
			value: function dynamic() {
				var isDynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.isDynamic = isDynamic;
				return this;
			}
		}, {
			key: 'getRelationshipsByLocalKey',
			value: function getRelationshipsByLocalKey() {
				var _this2 = this;

				// Initialized?
				if (!this.relationshipsByLocalKey) {

					// Loop through relationships
					this.relationshipsByLocalKey = {};
					_underscore2.default.each(this.relationships, function (relationship) {

						// Stored on local model?
						if (relationship.isStoredOnLocalModel()) {
							_this2.relationshipsByLocalKey[relationship.localKey] = relationship;
						}
					});
				}
				return this.relationshipsByLocalKey;
			}
		}, {
			key: 'getRelationshipByLocalKey',
			value: function getRelationshipByLocalKey(localKey) {

				return this.getRelationshipsByLocalKey()[localKey];
			}
		}, {
			key: 'getApiAttributeNames',
			value: function getApiAttributeNames() {
				var _this3 = this;

				// Initialized?
				if (!this.apiAttributeNames) {
					this.apiAttributeNames = _underscore2.default.filter(this.attributeNames, function (name) {
						return _this3.attributes[name].includeInRequests;
					});
				}
				return this.apiAttributeNames;
			}
		}, {
			key: 'getHiddenAttributeNames',
			value: function getHiddenAttributeNames() {
				var _this4 = this;

				// Initialized?
				if (!this.hiddenAttributeNames) {
					this.hiddenAttributeNames = _underscore2.default.filter(this.attributeNames, function (name) {
						return !_this4.attributes[name].includeInRequests;
					});
				}
				return this.hiddenAttributeNames;
			}
		}, {
			key: 'hasAttribute',
			value: function hasAttribute(key) {
				return this.attributes[key] !== undefined;
			}
		}, {
			key: 'initializeModel',
			value: function initializeModel(model) {
				var _this5 = this;

				// Don't notify
				model.withoutNotifications(function () {

					// Default values
					_underscore2.default.each(_this5.attributes, function (attr) {
						if (attr.defaultValue && model.attributes[attr.name] === undefined) {
							model.set(attr.name, attr.defaultValue);
						}
					});

					// Add computed
					_underscore2.default.each(_this5.computedAttributes, function (attr, key) {
						model.set(key, new _ComputedProperty2.default(attr.dependencies, attr.callback));
					});
				});

				return model;
			}
		}, {
			key: 'attribute',
			value: function attribute(name, type) {
				var attr = new _ModelAttribute2.default(name, type);
				this.attributeNames.push(name);
				this.attributes[name] = attr;
				return attr;
			}
		}, {
			key: 'computed',
			value: function computed(name, dependencies, callback) {

				this.computedAttributes[name] = {
					dependencies: dependencies,
					callback: callback
				};
				return true;
			}

			//////////////////////
			// Column defitions //
			//////////////////////

		}, {
			key: 'integer',
			value: function integer(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Integer);
				return attr;
			}
		}, {
			key: 'number',
			value: function number(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Number);
				return attr;
			}
		}, {
			key: 'string',
			value: function string(name, size) {
				var attr = this.attribute(name, _ModelAttribute2.default.String);
				attr.size = size;
				return attr;
			}
		}, {
			key: 'date',
			value: function date(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Date);
				return attr;
			}
		}, {
			key: 'dateTime',
			value: function dateTime(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.DateTime);
				return attr;
			}
		}, {
			key: 'time',
			value: function time(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Time);
				return attr;
			}
		}, {
			key: 'text',
			value: function text(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Text);
				return attr;
			}
		}, {
			key: 'boolean',
			value: function boolean(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Boolean);
				return attr;
			}
		}, {
			key: 'enum',
			value: function _enum(name, options) {
				var attr = this.attribute(name, _ModelAttribute2.default.Enum);
				attr.enumOptions = options;
				return attr;
			}

			///////////
			// Model //
			///////////

		}, {
			key: 'model',
			value: function model(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Model);
				return attr;
			}

			//////////
			// JSON //
			//////////

		}, {
			key: 'array',
			value: function array(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Array);
				return attr;
			}
		}, {
			key: 'object',
			value: function object(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Object);
				return attr;
			}
		}, {
			key: 'translations',
			value: function translations(name) {
				var attr = this.attribute(name, _ModelAttribute2.default.Object);
				return attr;
			}

			//////////////////////
			// Column shortcuts //
			//////////////////////

		}, {
			key: 'timestamps',
			value: function timestamps() {
				this.dateTime('createdAt').hidden();
				this.dateTime('updatedAt').hidden();
				return this;
			}

			///////////////////
			// Relationships //
			///////////////////

		}, {
			key: 'relationship',
			value: function relationship(name) {
				var rel = new _Relationship2.default(name, this.name);
				this.relationships[name] = rel;
				return rel;
			}

			/////////////////////
			// Form validation //
			/////////////////////

		}, {
			key: 'validation',
			value: function validation(rules) {
				var formKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';


				this.validationRules[formKey] = rules;
				return this;
			}

			///////////////
			// Searching //
			///////////////

		}, {
			key: 'searchable',
			value: function searchable() {
				for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
					fields[_key] = arguments[_key];
				}

				// Stroe
				this.searchFields = fields;
			}
		}, {
			key: 'getSearchFields',
			value: function getSearchFields() {
				return this.searchFields;
			}

			/////////
			// Api //
			/////////

		}, {
			key: 'getApiUri',
			value: function getApiUri() {
				var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				var uri = this.apiUri;
				if (id) uri += '/' + id;
				return uri;
			}
		}]);

		return ModelDefinition;
	}();

	module.exports = ModelDefinition;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(299);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _inflection = __webpack_require__(302);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _Model = __webpack_require__(349);

	var _Model2 = _interopRequireDefault(_Model);

	var _Collection = __webpack_require__(351);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _PivotCollection = __webpack_require__(378);

	var _PivotCollection2 = _interopRequireDefault(_PivotCollection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Relationship = function () {
		function Relationship(name, localModel) {
			_classCallCheck(this, Relationship);

			this.name = name;

			this.type = null;

			this.localModel = localModel;

			this.localKey = null;

			this.remoteModel = null;
			this.remoteKey = null;

			this.morphModelKey = null;

			this.pivotModel = null;

			this.pivotAttributes = [];

			this.inverseRelationshipName = null;

			this.touchLocalOnUpdate = false;
		}

		////////////////////////
		// Relationship types //
		////////////////////////

		_createClass(Relationship, [{
			key: 'hasMany',
			value: function hasMany(remoteModel) {
				var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
				var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


				// Basics
				this.type = Relationship.HasMany;
				this.remoteModel = remoteModel;
				var cleanModel = _underscore2.default.last(this.localModel.split('.'));

				// Guess/store the keys
				if (!this.localKey) this.localKey = localKey;
				if (remoteKey || !this.remoteKey) {
					this.remoteKey = remoteKey || _inflection2.default.camelize(_inflection2.default.singularize(cleanModel), true) + 'Id';
				}

				// Guess the inverse relationship name
				this.inverseRelationshipName = _inflection2.default.camelize(_inflection2.default.singularize(cleanModel), true);

				return this;
			}
		}, {
			key: 'belongsTo',
			value: function belongsTo(remoteModel) {
				var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';


				// Basics
				this.type = Relationship.BelongsTo;
				this.remoteModel = remoteModel;

				// Guess/store the keys
				if (localKey || !this.localKey) {
					this.localKey = localKey || _inflection2.default.camelize(_inflection2.default.singularize(this.name), true) + 'Id';
				}
				if (!this.remoteKey) this.remoteKey = remoteKey;

				return this;
			}
		}, {
			key: 'hasOne',
			value: function hasOne(remoteModel) {
				var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
				var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


				// Basics
				this.type = Relationship.HasOne;
				this.remoteModel = remoteModel;

				// Guess/store the keys
				if (!this.localKey) this.localKey = localKey;
				if (remoteKey || !this.remoteKey) {
					this.remoteKey = remoteKey || _inflection2.default.camelize(_inflection2.default.singularize(this.localModel), true) + 'Id';
				}

				return this;
			}

			///////////
			// Pivot //
			///////////

		}, {
			key: 'belongsToMany',
			value: function belongsToMany(remoteModel) {
				var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
				var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
				var pivotModel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


				// Basics 
				this.type = Relationship.BelongsToMany;
				this.remoteModel = remoteModel;
				this.localKey = localKey;
				this.remoteKey = remoteKey;

				// Pivot model given?
				if (!pivotModel) {
					var models = [this.localModel, this.remoteModel];
					models.sort();
					pivotModel = models.join('');
				}
				this.pivotModel = pivotModel;

				return this;
			}

			/////////////////////////
			// Morph relationships //
			/////////////////////////

		}, {
			key: 'belongsToMorph',
			value: function belongsToMorph(morphModelKey, localKey) {
				var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';


				// Basics
				this.type = Relationship.BelongsToMorph;
				this.remoteModel = null;

				// Guess/store the keys
				this.localKey = localKey;
				this.remoteKey = remoteKey;
				this.morphModelKey = morphModelKey;

				return this;
			}
		}, {
			key: 'usesCollection',
			value: function usesCollection() {
				return this.type == Relationship.BelongsToMany || this.type == Relationship.HasMany || this.type == Relationship.HasManyThrough;
			}

			/////////////
			// Setters //
			/////////////

		}, {
			key: 'setLocalKey',
			value: function setLocalKey(value) {
				this.localKey = value;
				return this;
			}
		}, {
			key: 'setRemoteKey',
			value: function setRemoteKey(value) {
				this.remoteKey = value;
				return this;
			}

			/////////////
			// Methods //
			/////////////

			/**
	   * set a flag to update the dirty attribute of local model
	   * @return {Relationship} Chainable
	   */

		}, {
			key: 'touchLocal',
			value: function touchLocal() {
				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

				this.touchLocalOnUpdate = value;
			}

			/**
	   * Add local key as attribute to the modelDefinition to ensure 
	   * that it is being serialized in the apiCall.
	   * Attributes with `Id` will be cast as an integer,
	   * Attributes with 'Key' will be cast as a string.
	   * For other keys manually define them in the model.
	   * 
	   * @param {ModelDefinition} modelDefinition the definition to at the attribute to
	   * @return {Relationsship} chainable
	   */

		}, {
			key: 'addLocalKeyToModelDefinitionAttributes',
			value: function addLocalKeyToModelDefinitionAttributes(modelDefinition) {

				//skip if `id` or already exists
				if (this.localKey == 'id' || modelDefinition.hasAttribute(this.localKey)) return this;

				//add key as integer 		
				if (this.localKey.indexOf('Id') !== -1) modelDefinition.integer(this.localKey);
				if (this.localKey.indexOf('Key') !== -1) modelDefinition.string(this.localKey);
				return this;
			}
		}, {
			key: 'inverse',
			value: function inverse(relationshipName) {

				this.inverseRelationshipName = relationshipName;
				return this;
			}
		}, {
			key: 'isStoredOnLocalModel',
			value: function isStoredOnLocalModel() {

				return this.type === Relationship.BelongsTo;
			}
		}, {
			key: 'isStoredOnRemoteModel',
			value: function isStoredOnRemoteModel() {

				return this.type === Relationship.HasOne || this.type === Relationship.HasMany;
			}
		}, {
			key: 'getInitValue',
			value: function getInitValue() {

				// Depends on the type
				switch (this.type) {

					case Relationship.HasMany:
					case Relationship.HasManyThrough:
						return new _Collection2.default(_Model2.default.registry.get(this.remoteModel));

					case Relationship.BelongsToMany:
						return new _PivotCollection2.default(_Model2.default.registry.get(this.remoteModel), this);

					default:
						return null;

				}
			}

			/**
	   * Add one or more attributes as pivot attributes
	   * 
	   * @method withPivot
	   * @param  {...string} attributes  One or more attribute names
	   * @chainable
	   */

		}, {
			key: 'withPivot',
			value: function withPivot() {
				for (var _len = arguments.length, attributes = Array(_len), _key = 0; _key < _len; _key++) {
					attributes[_key] = arguments[_key];
				}

				this.pivotAttributes = _underscore2.default.union(this.pivotAttributes, attributes);
				return this;
			}
		}, {
			key: 'isPivot',
			value: function isPivot() {

				return this.type === Relationship.BelongsToMany;
			}
		}]);

		return Relationship;
	}();

	Relationship.HasMany = 'HasMany';
	Relationship.HasOne = 'HasOne';
	Relationship.BelongsTo = 'BelongsTo';

	Relationship.HasManyThrough = 'HasManyThrough';
	Relationship.BelongsToMany = 'BelongsToMany';

	Relationship.BelongsToMorph = 'BelongsToMorph';

	module.exports = Relationship;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Collection2 = __webpack_require__(351);

	var _Collection3 = _interopRequireDefault(_Collection2);

	var _Pivot = __webpack_require__(379);

	var _Pivot2 = _interopRequireDefault(_Pivot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Data
	 */
	var PivotCollection = function (_Collection) {
		_inherits(PivotCollection, _Collection);

		function PivotCollection(modelClass, relationship) {
			_classCallCheck(this, PivotCollection);

			// Localize
			var _this = _possibleConstructorReturn(this, (PivotCollection.__proto__ || Object.getPrototypeOf(PivotCollection)).call(this, modelClass));

			_this.relationship = relationship;

			return _this;
		}

		_createClass(PivotCollection, [{
			key: 'add',
			value: function add(model) {
				var pivotAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


				// Already a pivot?
				if (!model.isPivot()) {

					// Proxy it
					model = _Pivot2.default.createFor(model, pivotAttributes);
				}

				// Add it.
				_get(PivotCollection.prototype.__proto__ || Object.getPrototypeOf(PivotCollection.prototype), 'add', this).call(this, model);

				return this;
			}
		}]);

		return PivotCollection;
	}(_Collection3.default);

	module.exports = PivotCollection;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ClassMap = __webpack_require__(332);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Model2 = __webpack_require__(349);

	var _Model3 = _interopRequireDefault(_Model2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @module Data
	 */
	var Pivot = function (_Model) {
		_inherits(Pivot, _Model);

		function Pivot() {
			_classCallCheck(this, Pivot);

			return _possibleConstructorReturn(this, (Pivot.__proto__ || Object.getPrototypeOf(Pivot)).apply(this, arguments));
		}

		return Pivot;
	}(_Model3.default);

	_ClassMap2.default.register('Pivot', Pivot);

	Pivot.createFor = function (model, pivotAttributes) {

		// The pivot itself is a model too
		var pivot = new Pivot(pivotAttributes);

		// Make it
		var proxy = new Proxy(model, {

			get: function get(target, property /*, receiver*/) {

				// Get pivot?
				if (property === 'getPivot') {
					return function () {
						return pivot;
					};
				}
				if (property === 'pivot') {
					return pivot;
				}

				// Is pivot.
				if (property === 'isPivot') {
					return function () {
						return true;
					};
				}

				// Is it a method?
				var value = target[property];
				if (typeof value === 'function') {

					// Wrap it
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						// Is the first argument a key, starting with 'pivot.'?
						if (args.length > 0 && typeof args[0] === 'string' && args[0].match(/^pivot\./)) {

							// Pass on to the pivot model
							args[0] = args[0].replace(/^pivot\./, '');
							return pivot[property].apply(pivot, args);
						} else {

							// Pass on to the regular model
							return target[property].apply(target, args);
						}
					};
				} else {

					// Normal behaviour
					return value;
				}
			}

		});

		return proxy;
	};

	module.exports = Pivot;

/***/ },
/* 380 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FakeHistory = function () {
		function FakeHistory() {
			var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			_classCallCheck(this, FakeHistory);

			this.location = location || {
				action: 'POP',
				hash: '',
				key: 'abc',
				pathname: '/',
				search: ''
			};
		}

		_createClass(FakeHistory, [{
			key: 'listen',
			value: function listen() /*callback*/{}
		}, {
			key: 'getCurrentLocation',
			value: function getCurrentLocation() {
				return this.location;
			}
		}]);

		return FakeHistory;
	}();

	module.exports = FakeHistory;

/***/ }
/******/ ])
});
;