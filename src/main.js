/* eslint no-console: "off" */
				
//////////////////////
// Vendor libraries //
//////////////////////

import $ from 'jquery';
import _ from 'underscore';
import s from 'underscore.string';
import XRegExp from 'xregexp';
import inflection from 'inflection';
import QueryString from 'query-string';

///////////////////////////////////////
// Make sure dependencies are loaded //
///////////////////////////////////////

if ($ === undefined || typeof $ !== 'function') throw new Error('Error while initializing Chicken: could not find global jQuery ($). Was jQuery not loaded?');
if (_ === undefined || typeof _ !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore (_). Was Underscore not loaded?');
if (XRegExp === undefined || typeof XRegExp !== 'function') throw new Error('Error while initializing Chicken: could not find global XRegExp. Was XRegExp not loaded?');
if (s === undefined || typeof s !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore.string (s). Was Underscore.string not loaded?');

_.mixin(s.exports());

/////////////////////
// Chicken Classes //
/////////////////////

import Application from './Application';

// Api
import Api from './Api/Api';
import ApiCall from './Api/ApiCall';
import ApiError from './Api/ApiError';
import JsonApi from './Api/JsonApi';
import JsonApiCall from './Api/JsonApiCall';
import PrimitiveJsonApi from './Api/PrimitiveJsonApi';
import PrimitiveJsonApiCall from './Api/PrimitiveJsonApiCall';

// Auth
import Auth from './Auth/Auth';
import JWTAuth from './Auth/JWTAuth';

// Core
import ComputedProperty from './Core/ComputedProperty';
import Obj from './Core/Obj';
import Observable from './Core/Observable';
import ObservableArray from './Core/ObservableArray';
import Reference from './Core/Reference';
import SettingsObject from './Core/SettingsObject';


// Data
import Collection from './Data/Collection';
import Model from './Data/Model';
import ModelAttribute from './Data/ModelAttribute';
import ModelDefinition from './Data/ModelDefinition';
import ModelStore from './Data/ModelStore';
import Pivot from './Data/Pivot';
import Relationship from './Data/Relationship';
import Service from './Data/Service';

// Dom
import ActionBinding from './Dom/ActionBinding';
import Binding from './Dom/Binding';
import Component from './Dom/Component';
import ComponentDefinition from './Dom/ComponentDefinition';
import Element from './Dom/Element';
import Helpers from './Dom/Helpers';
import Renderer from './Dom/Renderer';
import Transition from './Dom/Transition';
import View from './Dom/View';
import ViewContainer from './Dom/ViewContainer';

// Helpers
import App from './Helpers/App';
import Chainable from './Helpers/Chainable';
import ClassMap from './Helpers/ClassMap';
import Utils from './Helpers/Utils';

// Localization
import I18n from './Localization/I18n';

// Routing
import Action from './Routing/Action';
import Controller from './Routing/Controller';
import FakeHistory from './Routing/FakeHistory';
import Middleware from './Routing/Middleware';
import Redirect from './Routing/Redirect';
import Request from './Routing/Request';
import Route from './Routing/Route';
import RouteMatch from './Routing/RouteMatch';
import Router from './Routing/Router';
import RoutingError from './Routing/RoutingError';




/////////////////////////////
// Chicken Package exports //
/////////////////////////////

var Chicken = {
	
	////////////////
	// Class tree //
	////////////////

	Api: {
		Api: Api,
		ApiCall: ApiCall,
		ApiError: ApiError,
		JsonApi: JsonApi,
		JsonApiCall: JsonApiCall,
		PrimitiveJsonApi: PrimitiveJsonApi,
		PrimitiveJsonApiCall: PrimitiveJsonApiCall
	},

	Application: Application,

	Auth: {
		Auth: Auth,
		JWTAuth: JWTAuth
	},

	Core: {
		ComputedProperty: ComputedProperty,
		Obj: Obj,
		Observable: Observable,
		ObservableArray: ObservableArray,
		Reference: Reference,
		SettingsObject: SettingsObject
	},

	Data: {
	
		Collection: Collection,
		Model: Model,
		ModelAttribute: ModelAttribute,
		ModelDefinition: ModelDefinition,
		ModelStore: ModelStore,
		Pivot: Pivot,
		Relationship: Relationship,
		Service: Service
	},

	Dom: {
		ActionBinding: ActionBinding,
		Binding: Binding,
		Component: Component,
		ComponentDefinition: ComponentDefinition,
		Element: Element,
		Helpers: Helpers,
		Renderer: Renderer,
		Transition: Transition,
		View: View,
		ViewContainer: ViewContainer
	},

	Helpers: {
		App: App,
		Chainable: Chainable,
		ClassMap: ClassMap,
		Utils: Utils
	},

	Localization: {
		I18n: I18n
	},

	Routing: {
		Action: Action,
		Controller: Controller,
		FakeHistory: FakeHistory,
		Middleware: Middleware,
		Redirect: Redirect,
		Request: Request,
		Route: Route,
		RouteMatch: RouteMatch,
		Router: Router,
		RoutingError: RoutingError
	}, 

	inflection: inflection,



	/////////////////
	// Application //
	/////////////////

	application: (...args) => {

		// Arguments given?
		if (args.length > 0) {

			// Create app
			var app = new Application(...args);
			
			// Store globally
			Chicken.app = app;

			// Return
			return app;

		} else {
			return Application.getInstance();
		}

	},

	api(key = 'default') {
		return Application.getInstance().apis[key];
	},

	////////////////////////
	// Easy instantiators //
	////////////////////////

	controller: (name, actions) => {

		// Create class
		var ChickenController = class extends Controller {
			
			constructor(action) {
				super(action);
			}

		};
		$.extend(ChickenController.prototype, actions);

		// Store it
		Controller.registry.set(name, ChickenController);

		return ChickenController;

	},

	component: function(name, source, initCallback, methods = {}, renderer = null, overwrite = true) {

		// Create definition
		var def = new ComponentDefinition(name, source, initCallback, methods, renderer);

		// Register it.
		if (Component.registry.has(name) && !overwrite) throw new Error('A component with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
		Component.registry.set(name, def);

		return def;

	},

	helper: (name, callback, renderer = null, overwrite = false) => {

		// Already there?
		if (Chicken.Dom.Helpers.User[name] !== undefined && overwrite !== true) {
			throw new Error('A helper with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
		}

		// Register
		Chicken.Dom.Helpers.User[name] = callback;
		return Chicken.Dom.Helpers.User;

	},

	model: (name, configCallback = null, methods = null) => {

		// Getter?
		if (configCallback === null) {

			// Get from registry
			return Model.registry.get(name);

		}

		// Create class
		var ChickenModel = class extends Model {
			constructor(initValues = null, convertToObservables = false) {
				super(initValues, convertToObservables);
			}
		};

		// Add given methods to prototype
		if (methods) {
			$.extend(ChickenModel.prototype, methods);
		}

		// Configure it.
		ChickenModel.definition = new ModelDefinition(name, configCallback);
		ChickenModel.modelName = name;

		ChickenModel.create = (initValues = {}, convertToObservables = false) => {

			return new ChickenModel(initValues, convertToObservables);

		};

		// Store it.
		Model.registry.set(name, ChickenModel);
		return ChickenModel;

	},


	extendModel: (name, configCallback, methods = null) => {

		// Get the class
		let ChickenModel = Model.registry.get(name);
		if (!ChickenModel) throw new Error('Cannot extend unknown model ' + name);

		// Add given methods to prototype
		if (methods) {
			$.extend(ChickenModel.prototype, methods);
		}

		// Apply config callback
		configCallback.apply(ChickenModel.definition, [ChickenModel.definition]);

		return ChickenModel;

	},

	service: (name, methods = null) => {

		// Getter?
		if (methods === null) {
			return Service.get(name);
		}

		// Create class
		var ChickenService = class extends Service {
			constructor() {
				super(name);
			}
		};

		// Add given methods to prototype
		$.extend(ChickenService.prototype, methods);

		// Configure it.
		ChickenService.serviceName = name;

		// Store it.
		Service.registry.set(name, ChickenService);
		return ChickenService;

	},	

	middleware: (name, callback = null) => {

		// Getter?
		if (callback === null) {
			return Middleware.registry.get(name);
		}

		// Make it a middleware instance
		let middleware = new Middleware(name, callback);
		
		// Store it
		Middleware.registry.set(name, middleware);
		return middleware;

	},

	redirect: (uri) => {
		return new Redirect(uri);
	},
	redirectNamed: (name, attributes = {}) => {

		// Relative route?
		let app = Application.getInstance();
		if (/^\./.test(name)) {

			// Current name?
			let curName = app && app.currentRoute ? app.currentRoute.route.name : false;
			if (!curName) throw new Error('The current route does not have a name, so relative links are not possible from here');

			// ..? (Level up)
			if (/^\.\./.test(name)) {

				// Remove last part
				let parts = curName.split(/\./);
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
		let route = app.router.namedRoutes.get(name);
		if (!route) throw new Error('There is no route with the name "' + name + '"');

		// Make uri
		let uri = route.makeUrl(attributes);

		return new Redirect(uri);

	},

	
	computed: (dependencies, callback, debounce) => {
		
		return new ComputedProperty(dependencies, callback, debounce);

	},

	observable: (data = null) => {

		return new Observable(data);

	},


	view: (...args) => {

		return new View(...args);

	},


	/////////////
	// Helpers //
	/////////////

	each: (...args) => {
		return Utils.each.apply(this, args);
	},

	map: (...args) => {
		return Utils.map.apply(this, args);
	},

	debug: (message, key = null) => {

		switch (Chicken.debugging) {

			case 'console':
				console.log((key ? '[' + key + '] ' : '') + message);
				break;

		}

	},

	getValue: (obj) => {
		return Utils.getValue(obj);
	},

	translate: (key, attributes = {}) => {
		return Application.getInstance().i18n.translate(key, attributes);
	},

	queryString: QueryString,

	debugging: 'console',


	/////////////
	// Filters //
	/////////////

	isNullFilter: '@Q' + JSON.stringify({ 'operator': 'IS NULL' }),
	isNotNullFilter: '@Q' + JSON.stringify({ 'operator': 'IS NOT NULL' }),
	makeFilter: (operator, value, addWildcards = null) => {
		if (addWildcards === null) addWildcards = operator === 'LIKE';
		if (addWildcards) value = '%' + value + '%';
			return '@Q' + JSON.stringify({
				value: value,
				operator: operator
		});
	},
	multiFilter: (...filters) => {
		
		// Collect strings
		let objects = _.map(filters, (f) => {
			return JSON.parse(f.replace(/^@Q/, ''));
		});

		// Put 'em together
		return '@Q' + JSON.stringify(objects);

	}




};
window.Chicken = Chicken;

export default Chicken;