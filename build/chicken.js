(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"), require("_"), require("XRegExp"), require("moment"), require("HTMLBars"));
	else if(typeof define === 'function' && define.amd)
		define(["$", "_", "XRegExp", "moment", "HTMLBars"], factory);
	else if(typeof exports === 'object')
		exports["Chicken"] = factory(require("$"), require("_"), require("XRegExp"), require("moment"), require("HTMLBars"));
	else
		root["Chicken"] = factory(root["$"], root["_"], root["XRegExp"], root["moment"], root["HTMLBars"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_45__) {
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

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _Application = __webpack_require__(5);

	var _Application2 = _interopRequireDefault(_Application);

	var _Api = __webpack_require__(67);

	var _Api2 = _interopRequireDefault(_Api);

	var _ApiCall = __webpack_require__(53);

	var _ApiCall2 = _interopRequireDefault(_ApiCall);

	var _JsonApi = __webpack_require__(71);

	var _JsonApi2 = _interopRequireDefault(_JsonApi);

	var _JsonApiCall = __webpack_require__(72);

	var _JsonApiCall2 = _interopRequireDefault(_JsonApiCall);

	var _Auth = __webpack_require__(73);

	var _Auth2 = _interopRequireDefault(_Auth);

	var _JWTAuth = __webpack_require__(74);

	var _JWTAuth2 = _interopRequireDefault(_JWTAuth);

	var _ComputedProperty = __webpack_require__(39);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

	var _Obj = __webpack_require__(36);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _Observable = __webpack_require__(35);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(46);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Reference = __webpack_require__(37);

	var _Reference2 = _interopRequireDefault(_Reference);

	var _SettingsObject = __webpack_require__(40);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _Collection = __webpack_require__(70);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _Model2 = __webpack_require__(68);

	var _Model3 = _interopRequireDefault(_Model2);

	var _ModelAttribute = __webpack_require__(76);

	var _ModelAttribute2 = _interopRequireDefault(_ModelAttribute);

	var _ModelDefinition = __webpack_require__(77);

	var _ModelDefinition2 = _interopRequireDefault(_ModelDefinition);

	var _ModelStore = __webpack_require__(69);

	var _ModelStore2 = _interopRequireDefault(_ModelStore);

	var _Relationship = __webpack_require__(78);

	var _Relationship2 = _interopRequireDefault(_Relationship);

	var _Service2 = __webpack_require__(79);

	var _Service3 = _interopRequireDefault(_Service2);

	var _ActionBinding = __webpack_require__(48);

	var _ActionBinding2 = _interopRequireDefault(_ActionBinding);

	var _Binding = __webpack_require__(47);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _Component = __webpack_require__(50);

	var _Component2 = _interopRequireDefault(_Component);

	var _ComponentDefinition = __webpack_require__(55);

	var _ComponentDefinition2 = _interopRequireDefault(_ComponentDefinition);

	var _Element = __webpack_require__(43);

	var _Element2 = _interopRequireDefault(_Element);

	var _Helpers = __webpack_require__(56);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	var _Renderer = __webpack_require__(44);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _View = __webpack_require__(51);

	var _View2 = _interopRequireDefault(_View);

	var _ViewContainer = __webpack_require__(42);

	var _ViewContainer2 = _interopRequireDefault(_ViewContainer);

	var _App = __webpack_require__(52);

	var _App2 = _interopRequireDefault(_App);

	var _Chainable = __webpack_require__(41);

	var _Chainable2 = _interopRequireDefault(_Chainable);

	var _ClassMap = __webpack_require__(38);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Utils = __webpack_require__(57);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _I18n = __webpack_require__(66);

	var _I18n2 = _interopRequireDefault(_I18n);

	var _Action = __webpack_require__(61);

	var _Action2 = _interopRequireDefault(_Action);

	var _Controller2 = __webpack_require__(63);

	var _Controller3 = _interopRequireDefault(_Controller2);

	var _Middleware = __webpack_require__(65);

	var _Middleware2 = _interopRequireDefault(_Middleware);

	var _Redirect = __webpack_require__(62);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _Request = __webpack_require__(64);

	var _Request2 = _interopRequireDefault(_Request);

	var _Route = __webpack_require__(59);

	var _Route2 = _interopRequireDefault(_Route);

	var _RouteMatch = __webpack_require__(60);

	var _RouteMatch2 = _interopRequireDefault(_RouteMatch);

	var _Router = __webpack_require__(58);

	var _Router2 = _interopRequireDefault(_Router);

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
			JsonApiCall: _JsonApiCall2.default
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
			Middleware: _Middleware2.default,
			Redirect: _Redirect2.default,
			Request: _Request2.default,
			Route: _Route2.default,
			RouteMatch: _RouteMatch2.default,
			Router: _Router2.default
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
			var key = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];

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

		component: function component(name, source, initCallback, renderer) {
			var overwrite = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];


			// Create definition
			var def = new _ComponentDefinition2.default(name, source, initCallback, renderer);

			// Register it.
			if (_Component2.default.registry.has(name) && !overwrite) throw new Error('A component with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
			_Component2.default.registry.set(name, def);

			return def;
		},

		helper: function helper(name, callback) {
			var renderer = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
			var overwrite = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];


			// Already there?
			if (Chicken.Dom.Helpers.User[name] !== undefined && overwrite !== true) {
				throw new Error('A helper with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
			}

			// Register
			Chicken.Dom.Helpers.User[name] = callback;
			return Chicken.Dom.Helpers.User;
		},

		model: function model(name) {
			var configCallback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
			var methods = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];


			// Getter?
			if (configCallback === null) {

				// Get from registry
				return _Model3.default.registry.get(name);
			}

			// Create class
			var ChickenModel = function (_Model) {
				_inherits(ChickenModel, _Model);

				function ChickenModel() {
					var initValues = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

					_classCallCheck(this, ChickenModel);

					return _possibleConstructorReturn(this, (ChickenModel.__proto__ || Object.getPrototypeOf(ChickenModel)).call(this, initValues));
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
				var initValues = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


				return new ChickenModel(initValues);
			};

			// Store it.
			_Model3.default.registry.set(name, ChickenModel);
			return ChickenModel;
		},

		service: function service(name) {
			var methods = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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
			var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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

		computed: function computed(dependencies, callback) {

			return new _ComputedProperty2.default(dependencies, callback);
		},

		observable: function observable() {
			var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


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
			var key = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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
			return _Application2.default.getInstance().i18n.translate(key);
		},

		debugging: 'console'

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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _queryString = __webpack_require__(7);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _history = __webpack_require__(10);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable2 = __webpack_require__(35);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _SettingsObject = __webpack_require__(40);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _ViewContainer = __webpack_require__(42);

	var _ViewContainer2 = _interopRequireDefault(_ViewContainer);

	var _Renderer = __webpack_require__(44);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _ClassMap = __webpack_require__(38);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Router = __webpack_require__(58);

	var _Router2 = _interopRequireDefault(_Router);

	var _Element = __webpack_require__(43);

	var _Element2 = _interopRequireDefault(_Element);

	var _I18n = __webpack_require__(66);

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

				var $element = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


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

				var $lookForNewOnesIn = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


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
				var key = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var apiInstance = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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
				var key = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var authInstance = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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
			key: 'goto',
			value: function goto(uri) {
				var query = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


				// Check the query
				if (query) {

					// Is it a hash?
					if (typeof query !== 'string') {
						query = _queryString2.default.stringify(query);
					}
				}

				// Change the history state
				this.history.push({
					pathname: uri,
					search: query
				});

				return this;
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
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(8);
	var objectAssign = __webpack_require__(9);

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
/* 8 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locationsAreEqual = exports.Actions = exports.useQueries = exports.useBeforeUnload = exports.useBasename = exports.createMemoryHistory = exports.createHashHistory = exports.createHistory = undefined;

	var _LocationUtils = __webpack_require__(11);

	Object.defineProperty(exports, 'locationsAreEqual', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.locationsAreEqual;
	  }
	});

	var _createBrowserHistory = __webpack_require__(17);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createHashHistory2 = __webpack_require__(26);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	var _createMemoryHistory2 = __webpack_require__(28);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	var _useBasename2 = __webpack_require__(29);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	var _useBeforeUnload2 = __webpack_require__(30);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	var _useQueries2 = __webpack_require__(31);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	var _Actions2 = __webpack_require__(16);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(13);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(14);

	var _Actions = __webpack_require__(16);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
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
/* 13 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = exports.isAbsolutePath = undefined;

	var _warning = __webpack_require__(15);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 15 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(13);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _BrowserProtocol = __webpack_require__(19);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(22);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(20);

	var _createHistory = __webpack_require__(23);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(11);

	var _DOMUtils = __webpack_require__(20);

	var _DOMStateStorage = __webpack_require__(21);

	var _PathUtils = __webpack_require__(14);

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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(15);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(19);

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

	var _LocationUtils = __webpack_require__(11);

	var _PathUtils = __webpack_require__(14);

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AsyncUtils = __webpack_require__(24);

	var _PathUtils = __webpack_require__(14);

	var _runTransitionHook = __webpack_require__(25);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(16);

	var _LocationUtils = __webpack_require__(11);

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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _warning = __webpack_require__(15);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(13);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _DOMUtils = __webpack_require__(20);

	var _HashProtocol = __webpack_require__(27);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(23);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(19);

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

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(11);

	var _DOMUtils = __webpack_require__(20);

	var _DOMStateStorage = __webpack_require__(21);

	var _PathUtils = __webpack_require__(14);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(13);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(11);

	var _PathUtils = __webpack_require__(14);

	var _createHistory = __webpack_require__(23);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(16);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(25);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(14);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(13);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _DOMUtils = __webpack_require__(20);

	var _ExecutionEnvironment = __webpack_require__(18);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(32);

	var _runTransitionHook = __webpack_require__(25);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(11);

	var _PathUtils = __webpack_require__(14);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(33);
	var objectAssign = __webpack_require__(34);

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
/* 33 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(36);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Reference = __webpack_require__(37);

	var _Reference2 = _interopRequireDefault(_Reference);

	var _ClassMap = __webpack_require__(38);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _ComputedProperty = __webpack_require__(39);

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

					throw new Error('The found value for ' + currentPart + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
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
				var convertToObservables = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


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

				var convertToObservables = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

				return this.withoutNotifications(function () {
					_this3.set(key, value, convertToObservables);
				});
			}
		}, {
			key: 'import',
			value: function _import(obj) {
				var _this4 = this;

				var convertToObservables = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];


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
					var objKey = parts.pop();
					var obj = this.get(parts.join('.'));

					// Is it an observable?
					if (Observable.isObservable(obj) && obj.observe) {
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
		},
		isA: function isA(obj, className) {
			var c = ClassMap.get(className);
			if (c === undefined) throw new Error('The ' + className + ' class is not registered in the ClassMap');
			return obj instanceof c;
		}
	};

	module.exports = ClassMap;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable2 = __webpack_require__(35);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Chainable = __webpack_require__(41);

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
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Element2 = __webpack_require__(43);

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
				var setLoadingFalse = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];


				// Set HTML
				_get(ViewContainer.prototype.__proto__ || Object.getPrototypeOf(ViewContainer.prototype), 'setContent', this).call(this, content);

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

	module.exports = ViewContainer;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(36);

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
		var type = arguments.length <= 1 || arguments[1] === undefined ? 'afterRender' : arguments[1];

		Element.Hooks[type].push(callback);
		return true;
	};

	Element.Hooks = {
		beforeRender: [],
		afterRender: []
	};

	module.exports = Element;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _htmlbarsStandalone = __webpack_require__(45);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _Observable = __webpack_require__(35);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(46);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Binding = __webpack_require__(47);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _ActionBinding = __webpack_require__(48);

	var _ActionBinding2 = _interopRequireDefault(_ActionBinding);

	var _Component = __webpack_require__(50);

	var _Component2 = _interopRequireDefault(_Component);

	var _ComponentDefinition = __webpack_require__(55);

	var _ComponentDefinition2 = _interopRequireDefault(_ComponentDefinition);

	var _Helpers = __webpack_require__(56);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	var _View = __webpack_require__(51);

	var _View2 = _interopRequireDefault(_View);

	var _Utils = __webpack_require__(57);

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
					var binding = new _Binding2.default(_this, appliedScope, path, scope.view ? scope.view : scope.self);

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
						binding.addMorph(morph);
					}
				});
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
					value: helper.apply(_this.helpers, [params, attributeHash, options, morph, renderer, scope, visitor])
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
				var component = new _Component2.default(definition.name, definition.source, morph, newScope, params, attributeHash, visitor, options, definition.initCallback, _this);
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
/* 45 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(36);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _ClassMap = __webpack_require__(38);

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
			var _this = _possibleConstructorReturn(this, (ObservableArray.__proto__ || Object.getPrototypeOf(ObservableArray)).call(this));

			_this.items = [];

			// Import start values
			_this.import(initValues, convertToObservables, true);

			/**
	   * Whenever this property is true, no notifications will be triggered
	   * 
	   * @attribute notificationsDisabled
	   * @type {Boolean}
	   */
			_this.notificationsDisabled = false;

			return _this;
		}

		_createClass(ObservableArray, [{
			key: 'import',
			value: function _import(arr) {
				var _this2 = this;

				var convertToObservables = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];


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

			/**
	   * Get a keyed array containing ObservableArray's with values that have the same
	   * value for given key.
	   *
	   * @method groupBy
	   * @param  {string} key  The attribute key. You can also use dot-notation in this key.
	   * @param  {string} [defaultGroup=default] The key under which to put items that have no value for given key
	   * @return {Object}
	   */

		}, {
			key: 'groupBy',
			value: function groupBy(key) {
				var defaultGroup = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];


				// Loop it
				var result = {};
				_underscore2.default.each(this.items, function (item) {

					// Get value
					var keyValue = item.get(key);

					// Nothing?
					if (!keyValue) keyValue = defaultGroup;

					// Group known?
					if (!result[keyValue]) result[keyValue] = new ObservableArray();
					result[keyValue].add(item);
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
				var keyAttribute = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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
			key: 'map',
			value: function map(callback) {

				return _underscore2.default.map(this.items, callback);
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Reference = __webpack_require__(37);

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
	  * @param  {Dom.View}								view
	  */
		function Binding(renderer, observable, path, view) {
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

			this.view = view;

			////////////////
			// Now watch! //
			////////////////

			// What to do when value changes
			var callback = function callback() {

				// Trigger updates for all morphs
				_this.morphs.forEach(function (morph) {
					morph.isDirty = true;
					_this.view.scheduleRevalidate();
				});
			};

			// Now listen to the object
			if (this.path) {
				this.observable.observe(path, callback);
			} else {
				this.observable.study(callback);
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
				var morph = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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

				// Is this an already bound morph?
				if (this.morphs.has(morph)) return;

				//////////////////////////////////////////
				// Add the morph, for data->dom binding //
				//////////////////////////////////////////

				this.morphs.add(morph);

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
				return morph.element && /^INPUT$/.test(morph.element.tagName) && morph.attrName === 'value' && /^text|password|number|email$/.test(morph.element.type);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _uuidLib = __webpack_require__(49);

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
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _htmlbarsStandalone = __webpack_require__(45);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _Obj = __webpack_require__(36);

	var _Obj2 = _interopRequireDefault(_Obj);

	var _View2 = __webpack_require__(51);

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
			var initCallback = arguments.length <= 8 || arguments[8] === undefined ? null : arguments[8];
			var renderer = arguments.length <= 9 || arguments[9] === undefined ? null : arguments[9];

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

			// Make attributes available
			_this.with(_this.attributes);

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

				var name = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


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
					if (_jquery2.default.isNumeric(value)) value = parseFloat(value);
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
					var promises = _underscore2.default.map(this.childComponents, function (child) {
						return child.getPromise('ready');
					});
					Promise.all(promises).then(function () {
						_this3.resolvePromise('ready');
					});
				} else {

					// We are ready now.
					this.resolvePromise('ready');
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
				var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


				var value = this.attributes[key];
				if (value === undefined) value = defaultValue;
				return value;
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _htmlbarsStandalone = __webpack_require__(45);

	var _htmlbarsStandalone2 = _interopRequireDefault(_htmlbarsStandalone);

	var _App = __webpack_require__(52);

	var _App2 = _interopRequireDefault(_App);

	var _Observable2 = __webpack_require__(35);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Binding = __webpack_require__(47);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _ApiCall = __webpack_require__(53);

	var _ApiCall2 = _interopRequireDefault(_ApiCall);

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
			var initCallback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
			var renderer = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

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
				beforeRender: []
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
					var key = args[0];
					var value = args[1];

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
		}, {
			key: 'action',
			value: function action(key, callback) {

				this.actions[key] = callback;
				return this;
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
				var _this4 = this;

				// Make sure the template is loaded
				this.loadTemplate();

				// We make the 'render' promise.
				return this.promise('render', function () {

					// Start api calls.
					_underscore2.default.invoke(_this4.apiCalls, 'execute');

					/////////////////////////////////////////
					// Wait for all loadPromises to finish //
					/////////////////////////////////////////

					Promise.all(_this4.loadPromises).then(function () {

						_this4.renderSync();
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
				var _this5 = this;

				/////////////////////
				// Create template //
				/////////////////////

				// Before render hook
				_underscore2.default.each(this.hooks.beforeRender, function (cb) {
					cb.apply(_this5);
				});

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

				//////////////////
				// Revalidating //
				//////////////////

				// Have a look at the data, and revalidate the result whenever a change
				// occurs. The 'dirtying' of elements (morphs) is handled by the Renderer
				// and Binding classes.				

				/*		// Study the object
	   		this.study(() => {
	   			this.scheduleRevalidate();
	   		});
	   */

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
				var _this6 = this;

				// Not already pending?
				if (!this.revalidateTimeout) {

					// Wait a bit.
					this.revalidateTimeout = setTimeout(function () {

						// Revalidate!
						_this6.revalidate();
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

				// Done.
				this.resolvePromise('ready', [this]);
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

	module.exports = View;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ClassMap = __webpack_require__(38);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
		return _ClassMap2.default.get('Application').getInstance();
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _queryString = __webpack_require__(7);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _ApiError = __webpack_require__(54);

	var _ApiError2 = _interopRequireDefault(_ApiError);

	var _Obj2 = __webpack_require__(36);

	var _Obj3 = _interopRequireDefault(_Obj2);

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
			var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
			var ajaxOptions = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

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

					// Make the call
					_this2.api.ajax(options).then(function (result) {

						resolve(_this2.api.deserialize(result, _this2));
					}).fail(function (error) {

						// Make error
						var errorObj = new _ApiError2.default(_this2, error);
						if (auth) {
							errorObj = auth.processApiError(errorObj);
						}
						reject(errorObj);
					});
				});
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
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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
				var pageSize = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (pageSize !== null) this.pageSize(pageSize);
				return this.query('page[number]', pageNumber);
			}

			/**
	   * Add given pagesize to the queryParams
	   *``
	   * @method query
	   * @param  pageSize
	   * @chainable
	   */

		}, {
			key: 'pageSize',
			value: function pageSize(_pageSize) {
				return this.query('page[size]', _pageSize);
			}
		}]);

		return ApiCall;
	}(_Obj3.default);

	module.exports = ApiCall;

/***/ },
/* 54 */
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

		return ApiError;
	}();

	module.exports = ApiError;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(52);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Dom
	 */
	var ComponentDefinition = function ComponentDefinition(name, source, initCallback) {
		var renderer = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

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
	};

	module.exports = ComponentDefinition;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-console: ["error", { allow: ["log"] }] */

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _queryString = __webpack_require__(7);

	var _queryString2 = _interopRequireDefault(_queryString);

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _ActionBinding = __webpack_require__(48);

	var _ActionBinding2 = _interopRequireDefault(_ActionBinding);

	var _Utils = __webpack_require__(57);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _App = __webpack_require__(52);

	var _App2 = _interopRequireDefault(_App);

	var _Observable = __webpack_require__(35);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(46);

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
				var _this2 = this;

				return params.map(function (value) {
					return _this2._getValue(value);
				});
			}
		}, {
			key: '_getHashValues',
			value: function _getHashValues(attributeHash) {
				var _this3 = this;

				var result = {};
				_underscore2.default.each(attributeHash, function (value, key) {
					result[key] = _this3._getValue(value);
				});
				return result;
			}
		}]);

		return Helpers;
	}();

	Helpers.User = {};

	module.exports = Helpers;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Observable = __webpack_require__(35);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _ObservableArray = __webpack_require__(46);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _Binding = __webpack_require__(47);

	var _Binding2 = _interopRequireDefault(_Binding);

	var _ComputedProperty = __webpack_require__(39);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

	var _Reference = __webpack_require__(37);

	var _Reference2 = _interopRequireDefault(_Reference);

	var _ClassMap = __webpack_require__(38);

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
			if (obj instanceof _Observable2.default) {
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
		},

		areEqual: function areEqual(value1, value2) {

			// Identical?
			if (value1 === value2) return true;

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
		}
	};

	_ClassMap2.default.register('Utils', Utils);

	module.exports = Utils;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(36);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _SettingsObject = __webpack_require__(40);

	var _SettingsObject2 = _interopRequireDefault(_SettingsObject);

	var _Route = __webpack_require__(59);

	var _Route2 = _interopRequireDefault(_Route);

	var _Request = __webpack_require__(64);

	var _Request2 = _interopRequireDefault(_Request);

	var _Middleware = __webpack_require__(65);

	var _Middleware2 = _interopRequireDefault(_Middleware);

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

			///////////////////////////////////////////
			// Grouped configuration state variables //
			///////////////////////////////////////////

			_this._currentConfig = _SettingsObject2.default.create({

				parentRoute: null,
				viewContainer: 'main',
				middleware: []

			}, ['parentRoute', 'viewContainer', 'middleware']);

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
	   * @return {Routing.RouteMatch}
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
					Promise.all(actionPromises).then(function () /*...results*/{

						//@TODO What to do?

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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _xregexp = __webpack_require__(3);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _Obj2 = __webpack_require__(36);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _RouteMatch = __webpack_require__(60);

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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Action = __webpack_require__(61);

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
				var actionsToMakeDependentOn = [];
				_underscore2.default.each(myActions, function (myAction, targetViewContainer) {

					// My this action dependent on previous actions defined in this route
					_underscore2.default.each(actionsToMakeDependentOn, function (depAction) {
						myAction.dependsOn.push(depAction);
					});

					// Add the action to my actions
					_this2.actions.set(targetViewContainer, myAction);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _xregexp = __webpack_require__(3);

	var _xregexp2 = _interopRequireDefault(_xregexp);

	var _App = __webpack_require__(52);

	var _App2 = _interopRequireDefault(_App);

	var _Obj2 = __webpack_require__(36);

	var _Obj3 = _interopRequireDefault(_Obj2);

	var _Redirect = __webpack_require__(62);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _Controller = __webpack_require__(63);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _View = __webpack_require__(51);

	var _View2 = _interopRequireDefault(_View);

	var _Utils = __webpack_require__(57);

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

							// That means, we've just navigated within nested routes of that page, and this action can be skipped.
							resolve();
							return;
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
				}).then(function () /* result */{}, function () /* error */{

					// No longer loading
					if (_this2.viewContainer) _this2.viewContainer.setLoading(false);
				});
			}
		}, {
			key: '_processResult',
			value: function _processResult(result, resolve, reject) {
				var _this3 = this;

				// A redirect?
				if (result instanceof _Redirect2.default) {

					//@TODO Cancel the running request?

					(0, _App2.default)().goto(result.uri);
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
								resolve();
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
/* 62 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Redirect = function Redirect(uri) {
		_classCallCheck(this, Redirect);

		this.uri = uri;
	};

	module.exports = Redirect;

/***/ },
/* 63 */
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ClassMap = __webpack_require__(38);

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

/***/ },
/* 65 */
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
		var name = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Obj2 = __webpack_require__(36);

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

		function I18n() {
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
				var key = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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

				var key = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


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

					// Is there a key?
					if (key) {
						var r = {};
						r[key] = result;
						result = r;
					}

					// Extend
					_jquery2.default.extend(_this2.data, result);
				});
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
				var attributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var fallback = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];


				// Dot notation
				var obj = this.data;
				var parts = key.split(/\./);
				while (parts.length > 0) {

					// Get firs tpart
					var part = parts.shift();

					// Not existing?
					if (!obj[part]) return fallback ? fallback : '[' + key + ']';

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
				var attributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var fallback = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

				return this.translate(key, attributes, fallback);
			}
		}]);

		return I18n;
	}(_Obj3.default);

	I18n.Cache = {};

	module.exports = I18n;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Model = __webpack_require__(68);

	var _Model2 = _interopRequireDefault(_Model);

	var _ApiCall = __webpack_require__(53);

	var _ApiCall2 = _interopRequireDefault(_ApiCall);

	var _App = __webpack_require__(52);

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

				auth: false

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
				var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
				var ajaxOptions = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];


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
				var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var ajaxOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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
				var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var ajaxOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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
				var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var ajaxOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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
				var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var ajaxOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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
				var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var ajaxOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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
				options.dataType = 'json';
				return _jquery2.default.ajax(options);
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get2 = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _App = __webpack_require__(52);

	var _App2 = _interopRequireDefault(_App);

	var _Observable2 = __webpack_require__(35);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _ObservableArray = __webpack_require__(46);

	var _ObservableArray2 = _interopRequireDefault(_ObservableArray);

	var _ModelStore = __webpack_require__(69);

	var _ModelStore2 = _interopRequireDefault(_ModelStore);

	var _Collection = __webpack_require__(70);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _ClassMap = __webpack_require__(38);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	var _Utils = __webpack_require__(57);

	var _Utils2 = _interopRequireDefault(_Utils);

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
			var initValues = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			var convertToObservables = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
			_this.related = {};

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
				dirty: false
			});
			_this.state.study(function () {
				_this._scheduleAttributeChanged('is');
			});

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
				var _this2 = this;

				// Loop through them and set values that are not dirty
				_underscore2.default.each(attributes, function (value, key) {

					// Dirty?
					if (_this2.isDirty(key)) return;

					// Set it, and see this as a non-dirty value
					_this2.setAttribute(key, value);
					_this2.originalValues[key] = _this2.uncastValue(key, _this2.attributes[key]);
				});
				return this;
			}

			/**
	   * Get attribute values for use in the API.
	   *
	   * @method getAttributesForApi
	   * @param  {Boolean} onlyDirty  When true, only attributes that have been changed will be retrieved
	   * @return {Object}      A hash containing attribute key/values
	   */

		}, {
			key: 'getAttributesForApi',
			value: function getAttributesForApi() {
				var _this3 = this;

				var onlyDirty = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];


				// Which attributes to use?
				var attr = onlyDirty ? this.getDirty() : _underscore2.default.defaults({}, this.attributes);

				// Check model definition
				var modelDefinition = this.getDefinition();
				if (modelDefinition) {

					// Use only attributes in the model definition
					var modelAttr = _underscore2.default.pick(attr, function (value, key) {

						// Has property?
						return modelDefinition.hasAttribute(key) || modelDefinition.getRelationshipByLocalKey(key) !== undefined;
					});

					// Now uncast the values
					attr = _underscore2.default.mapObject(modelAttr, function (value, key) {

						// Get the actual value
						value = _Utils2.default.getValue(value);

						// Uncast it for DB usage
						return _this3.getAttributeDefinition(key).uncast(value);
					});

					return attr;
				} else {

					// Loop attributes
					attr = _underscore2.default.mapObject(attr, function (value, key) {

						// Get the actual value
						value = _Utils2.default.getValue(value);

						// Do we need to cast it?
						var attributeDefinition = _this3.getAttributeDefinition(key);
						if (attributeDefinition) {
							value = attributeDefinition.uncast(value);
						} else {

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
						}

						return value;
					});
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
				var _this4 = this;

				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


				// Make settings
				var settings = _jquery2.default.extend({
					uri: null,
					includeRelated: true,
					includeRelatedData: false
				}, options);

				// Busy?
				if (this.isBusy()) throw new Error('Model has not completed its last action');
				this.state.set('busy', true);
				this.state.set('saving', true);

				// Create the call
				if (!settings.uri) settings.uri = this.getApiUri();
				var apiCall = this.getApi().saveModel(this, settings);

				// Handle it.
				apiCall.getPromise('complete').then(function () {

					// No longer dirty!
					_this4.state.set('dirty', false);

					// No longer busy
					_this4.state.set('busy', false);
					_this4.state.set('saving', false);

					// Trigger.
					_this4.trigger('save', apiCall);
				}, function () {

					// No longer busy
					_this4.state.set('busy', false);
					_this4.state.set('saving', false);

					_this4.trigger('error', apiCall);
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

				// Get basics
				var obj = _get2(Model.prototype.__proto__ || Object.getPrototypeOf(Model.prototype), 'toObject', this).call(this);

				// Add relationships
				_underscore2.default.each(this.related, function (item, key) {

					// Observable?
					if (_Observable3.default.isObservable(item)) {

						// Array?
						if (item instanceof _Observable3.default) {
							item = item.toObject();
						} else {
							item = item.toArray();
						}
					}

					obj[key] = item;
				});
				return obj;
			}

			//////////////////////////
			// Forms and validation //
			//////////////////////////

		}, {
			key: 'getValidationRules',
			value: function getValidationRules() {
				var formKey = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];


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
				var _this5 = this;

				// Get dirty values
				var dirty = {};
				_underscore2.default.each(this.attributes, function (value, key) {

					// Not in original or changed?
					if (_this5.isDirty(key)) {

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
				var key = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


				// Specific key?
				if (key) {

					// None at all?
					if (this.attributes[key] === undefined) return false;

					// Is it new?
					if (this.attributes[key] && this.originalValues[key] === undefined) return true;

					// Has it changed
					var oldValue = this.originalValues[key];
					var newValue = this.uncastValue(key, this.attributes[key]);
					return oldValue != newValue;
				} else {

					// Loop to see if anything is dirty
					for (var _key in this.attributes) {
						if (this.isDirty(_key)) return true;
					}
					return false;
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
				var _this6 = this;

				var keys = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


				// Null?
				if (keys === null) keys = _underscore2.default.keys(this.attributes);
				if (typeof keys === 'string') keys = [keys];

				// Specific key?
				_underscore2.default.each(keys, function (key) {

					_this6.originalValues[key] = _this6.uncastValue(key, _this6.attributes[key]);
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
				var _this7 = this;

				// Already going?
				if (this._scheduleUpdateDirtyTimeout) return;

				// Wait a bit
				this._scheduleUpdateDirtyTimeout = setTimeout(function () {
					_this7.updateDirty();
					_this7._scheduleUpdateDirtyTimeout = null;
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
				if (!relationship) throw new Error('There is no relationship defined on "' + this.getModelName() + '" by the name "' + relationshipName + '"');
				if (relationship.isStoredOnLocalModel()) {

					// Get the remote key's value and set it on the local key
					this.set(relationship.localKey, relatedModel.get(relationship.remoteKey));
				} else if (relationship.isStoredOnRemoteModel()) {

					// Get the local key's value and set it on the remote key
					relatedModel.set(relationship.remoteKey, this.get(relationship.localKey));
				}

				// Set it
				this.related[relationshipName] = relatedModel;

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
				var fromApi = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];


				// Check if collection exists
				if (this.related[relationshipName] === undefined) {

					// Make collection
					this.related[relationshipName] = new _Collection2.default(relatedModel.constructor);
				}

				// Is it a valid collection?
				else if (!this.related instanceof _Collection2.default) {
						throw new TypeError('Tried to add a related model to an existing object that is not a Collection');
					}

				// Add model
				var coll = this.related[relationshipName];
				if (fromApi) {
					coll.addFromApi(relatedModel);
				} else {
					coll.add(relatedModel);
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
			key: 'getRelationshipByLocalKey',
			value: function getRelationshipByLocalKey(key) {

				// Check if the model has a definition at all
				var def = this.getDefinition();
				if (!def) return null;

				// Is it the local key?
				return def.getRelationshipByLocalKey(key);
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
		var initValues = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Obj2 = __webpack_require__(36);

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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _ObservableArray2 = __webpack_require__(46);

	var _ObservableArray3 = _interopRequireDefault(_ObservableArray2);

	var _ClassMap = __webpack_require__(38);

	var _ClassMap2 = _interopRequireDefault(_ClassMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Collection = function (_ObservableArray) {
		_inherits(Collection, _ObservableArray);

		function Collection() {
			var modelClass = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			_classCallCheck(this, Collection);

			var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this));

			_this.modelClass = modelClass;

			_this.itemsById = {};
			_this.originalIds = [];

			return _this;
		}

		_createClass(Collection, [{
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
		}]);

		return Collection;
	}(_ObservableArray3.default);

	module.exports = Collection;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Api2 = __webpack_require__(67);

	var _Api3 = _interopRequireDefault(_Api2);

	var _JsonApiCall = __webpack_require__(72);

	var _JsonApiCall2 = _interopRequireDefault(_JsonApiCall);

	var _Model = __webpack_require__(68);

	var _Model2 = _interopRequireDefault(_Model);

	var _Collection = __webpack_require__(70);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _Utils = __webpack_require__(57);

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
				var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
				var ajaxOptions = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];


				// Create api call
				return new _JsonApiCall2.default(this, method, uri, data, ajaxOptions);
			}
		}, {
			key: 'saveModel',
			value: function saveModel(model, options) {

				// Make settings
				var settings = _jquery2.default.extend({
					includeRelated: true,
					includeRelatedData: false
				}, options);
				if (!settings.uri) settings.uri = model.getApiUri();

				// Make the data
				var data = {
					data: this.serialize(model, settings.includeRelated, settings.includeRelatedData)
				};

				// Check method
				var method = model.isNew() ? 'post' : 'patch';

				// Do the call
				var apiCall = this.call(method, settings.uri, JSON.stringify(data), settings.ajax);

				// Return it
				return apiCall;
			}
		}, {
			key: 'serialize',
			value: function serialize(model) {
				var includeRelated = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

				var _this2 = this;

				var includeRelatedData = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
				var includedModelGuids = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];


				// Basics: type and id
				var data = {
					type: _inflection2.default.pluralize(_inflection2.default.underscore(model.getDefinition().name))
				};
				var id = model.get('id');
				if (id) data.id = id;

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

								// Is it a collection?
								if (relatedData instanceof _Collection2.default) {

									// Is dirty?
									if (relatedData.isDirty()) {

										// Add them all
										relationships[key] = { data: _underscore2.default.map(relatedData.items, function (item) {

												// Store original model to prevent recursive loop
												if (!includeRelatedData) includedModelGuids.push(_Utils2.default.uidFor(item));

												// Add that model, but only add relationships when this model has not been added to the resource before, to prevent nesting recursive loop
												return _this2.serialize(item, true, includeRelatedData, includedModelGuids);
											}) };
									}
								} else if (relatedData instanceof _Model2.default) {

									// Store original model to prevent recursive loop
									if (!includeRelatedData) includedModelGuids.push(_Utils2.default.uidFor(model));

									// We always insert the related model
									// @TODO Implement check wheter this relationship's local key has changed
									relationships[key] = { data: _this2.serialize(relatedData, true, includeRelatedData, includedModelGuids) };
								} else {
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

				var apiCall = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


				// Check included data
				if (result.included) {

					// Loop and store them in the model stores
					_underscore2.default.each(result.included, function (recordData) {
						_this3.deserializeModel(recordData);
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
			value: function deserializeModel(data /* , apiCall */) {
				var _this4 = this;

				// Look for the type of model
				var resourceType = data.type;
				var modelClass = _Model2.default;
				if (!resourceType) {
					throw new TypeError('Api result did not specity the record type');
				}
				var modelName = _inflection2.default.singularize(_inflection2.default.camelize(resourceType));
				if (_Model2.default.registry.has(modelName)) {
					modelClass = _Model2.default.registry.get(modelName);
				}

				// Collect attributes
				var attributes = {};
				_underscore2.default.each(data.attributes, function (value, key) {
					attributes[_inflection2.default.camelize(key, true)] = value;
				});

				// Check if the model is already in the store
				var store = _Model2.default.getStore(modelName);
				var model = void 0;
				if (!store.has(data.id)) {

					// Create a new model.
					attributes.id = data.id;
					model = new modelClass(attributes);
					store.set(data.id, model);
				} else {

					// Get and use the model
					model = store.get(data.id);

					// Set the attributes (not overwriting dirty ones)
					model.setAttributesFromApi(attributes);
				}

				// Check relationships records.
				if (data.relationships) {

					_underscore2.default.each(data.relationships, function (rel, relationshipName) {

						// Is there data?
						if (rel.data) {

							// Is it one record?
							if (rel.data instanceof Array) {

								// Loop and add
								_underscore2.default.each(rel.data, function (relData) {
									var relatedModel = _this4._getRelatedModel(relData);
									if (relatedModel) {

										// Add to model
										model.addRelatedModel(relationshipName, relatedModel, true);
									}
								});
							} else if (rel.data instanceof Object) {

								// Get the one
								var relatedModel = _this4._getRelatedModel(rel.data);
								if (relatedModel) {

									// Set it
									model.setRelatedModel(relationshipName, relatedModel);
								}
							} else {

								throw new TypeError('Unrecognized relationship data received from Api');
							}
						}
					});
				}

				return model;
			}
		}, {
			key: 'deserializeCollection',
			value: function deserializeCollection(data) {
				var _this5 = this;

				var apiCall = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


				// Make a collection
				var collection = new _Collection2.default(apiCall ? apiCall.modelClass : null);

				// Add records
				_underscore2.default.each(data, function (recordData) {
					collection.addFromApi(_this5.deserializeModel(recordData), true);
				});

				return collection;
			}
		}, {
			key: '_getRelatedModel',
			value: function _getRelatedModel(relationshipData) {

				// Check data integrity
				var relType = relationshipData.type;
				var relId = relationshipData.id;
				if (!relType) throw new TypeError('Api result did not specify the relationship type');
				if (!relId) throw new TypeError('Api result did not specify the relationship record id');

				// Find model in store
				relType = _inflection2.default.singularize(_inflection2.default.camelize(relType));
				var relModel = _Model2.default.getFromStore(relType, relId);

				return relModel;
			}
		}]);

		return JsonApi;
	}(_Api3.default);

	module.exports = JsonApi;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _ApiCall2 = __webpack_require__(53);

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Observable2 = __webpack_require__(35);

	var _Observable3 = _interopRequireDefault(_Observable2);

	var _Middleware = __webpack_require__(65);

	var _Middleware2 = _interopRequireDefault(_Middleware);

	var _App = __webpack_require__(52);

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
			var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _Auth2 = __webpack_require__(73);

	var _Auth3 = _interopRequireDefault(_Auth2);

	var _AuthError = __webpack_require__(75);

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
			var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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
						method: _this3.settings.authenticateMethod
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
/* 75 */
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModelAttribute = function () {
		function ModelAttribute(name, type) {
			_classCallCheck(this, ModelAttribute);

			this.name = name;
			this.type = type;

			this.isPrimaryKey = false;
			this.isNullable = false;

			this.defaultValue = undefined;

			this.size = null;
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
				var isPrimaryKey = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

				this.isPrimaryKey = isPrimaryKey;
				return this;
			}
		}, {
			key: 'nullable',
			value: function nullable() {
				var isNullable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

				this.isNullable = isNullable;
				return this;
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

					///////////
					// Dates //
					///////////

					// Date or date time
					case ModelAttribute.Date:
						return _moment2.default.isMoment(value) ? value.format('YYYY-MM-DD') : value;

					case ModelAttribute.DateTime:
						return _moment2.default.isMoment(value) ? value.format('YYYY-MM-DD HH:mm:ss') : value;

					default:
						return value;

				}
			}
		}]);

		return ModelAttribute;
	}();

	ModelAttribute.Number = 'Number';
	ModelAttribute.Integer = 'Integer';
	ModelAttribute.String = 'String';
	ModelAttribute.Enum = 'Enum';

	ModelAttribute.Date = 'Date';
	ModelAttribute.DateTime = 'DateTime';
	ModelAttribute.Time = 'Time';

	ModelAttribute.Array = 'Array';
	ModelAttribute.Object = 'Object';

	module.exports = ModelAttribute;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _ModelAttribute = __webpack_require__(76);

	var _ModelAttribute2 = _interopRequireDefault(_ModelAttribute);

	var _Relationship = __webpack_require__(78);

	var _Relationship2 = _interopRequireDefault(_Relationship);

	var _ComputedProperty = __webpack_require__(39);

	var _ComputedProperty2 = _interopRequireDefault(_ComputedProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module Data
	 */
	var ModelDefinition = function () {
		function ModelDefinition(name, callback) {
			_classCallCheck(this, ModelDefinition);

			this.name = name;

			this.apiUri = '/' + _inflection2.default.underscore(_inflection2.default.pluralize(name));
			this.api = 'default';

			this.attributes = {};
			this.attributeNames = [];
			this.relationships = {};
			this.relationshipsByLocalKey = null;

			this.computedAttributes = {};

			this.validationRules = {};

			callback.apply(this, [this]);
		}

		_createClass(ModelDefinition, [{
			key: 'getRelationshipsByLocalKey',
			value: function getRelationshipsByLocalKey() {
				var _this = this;

				// Initialized?
				if (!this.relationshipsByLocalKey) {

					// Loop through relationships
					this.relationshipsByLocalKey = {};
					_underscore2.default.each(this.relationships, function (relationship) {

						// Stored on local model?
						if (relationship.isStoredOnLocalModel()) {
							_this.relationshipsByLocalKey[relationship.localKey] = relationship;
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
			key: 'hasAttribute',
			value: function hasAttribute(key) {
				return this.attributes[key] !== undefined;
			}
		}, {
			key: 'initializeModel',
			value: function initializeModel(model) {
				var _this2 = this;

				// Don't notify
				model.withoutNotifications(function () {

					// Default values
					_underscore2.default.each(_this2.attributes, function (attr) {
						if (attr.defaultValue && model.attributes[attr.name] === undefined) {
							model.set(attr.name, attr.defaultValue);
						}
					});

					// Add computed
					_underscore2.default.each(_this2.computedAttributes, function (attr, key) {
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

			//////////////////////
			// Column shortcuts //
			//////////////////////

		}, {
			key: 'timestamps',
			value: function timestamps() {
				this.attribute('createdAt', _ModelAttribute2.default.DateTime);
				this.attribute('updatedAt', _ModelAttribute2.default.DateTime);
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
				var formKey = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];


				this.validationRules[formKey] = rules;
				return this;
			}

			/////////
			// Api //
			/////////

		}, {
			key: 'getApiUri',
			value: function getApiUri() {
				var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				var uri = this.apiUri;
				if (id) uri += '/' + id;
				return uri;
			}
		}]);

		return ModelDefinition;
	}();

	module.exports = ModelDefinition;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inflection = __webpack_require__(4);

	var _inflection2 = _interopRequireDefault(_inflection);

	var _Model = __webpack_require__(68);

	var _Model2 = _interopRequireDefault(_Model);

	var _Collection = __webpack_require__(70);

	var _Collection2 = _interopRequireDefault(_Collection);

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
		}

		////////////////////////
		// Relationship types //
		////////////////////////

		_createClass(Relationship, [{
			key: 'hasMany',
			value: function hasMany(remoteModel) {
				var localKey = arguments.length <= 1 || arguments[1] === undefined ? 'id' : arguments[1];
				var remoteKey = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];


				// Basics
				this.type = Relationship.HasMany;
				this.remoteModel = remoteModel;

				// Guess/store the keys
				if (!this.localKey) this.localKey = localKey;
				if (remoteKey || !this.remoteKey) {
					this.remoteKey = remoteKey || _inflection2.default.camelize(_inflection2.default.singularize(this.localModel), true) + 'Id';
				}

				return this;
			}
		}, {
			key: 'belongsTo',
			value: function belongsTo(remoteModel) {
				var localKey = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
				var remoteKey = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];


				// Basics
				this.type = Relationship.BelongsTo;
				this.remoteModel = remoteModel;

				// Guess/store the keys
				if (localKey || !this.localKey) {
					this.localKey = localKey || _inflection2.default.camelize(_inflection2.default.singularize(this.remoteModel), true) + 'Id';
				}
				if (!this.remoteKey) this.remoteKey = remoteKey;

				return this;
			}
		}, {
			key: 'hasOne',
			value: function hasOne(remoteModel) {
				var localKey = arguments.length <= 1 || arguments[1] === undefined ? 'id' : arguments[1];
				var remoteKey = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];


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

			/////////////////////////
			// Morph relationships //
			/////////////////////////

		}, {
			key: 'belongsToMorph',
			value: function belongsToMorph(morphModelKey, localKey) {
				var remoteKey = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];


				// Basics
				this.type = Relationship.BelongsToMorph;
				this.remoteModel = null;

				// Guess/store the keys
				this.localKey = localKey;
				this.remoteKey = remoteKey;
				this.morphModelKey = morphModelKey;

				return this;
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
					case Relationship.BelongsToMany:
						return new _Collection2.default(_Model2.default.registry.get(this.remoteModel));

					default:
						return null;

				}
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(35);

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

/***/ }
/******/ ])
});
;