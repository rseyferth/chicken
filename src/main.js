//////////////////////
// Vendor libraries //
//////////////////////

import $ from 'jquery';
import _ from 'underscore';
import XRegExp from 'xregexp';



///////////////////////////////////////
// Make sure dependencies are loaded //
///////////////////////////////////////

if ($ === undefined || typeof $ !== 'function') throw new Error('Error while initializing Chicken: could not find global jQuery ($). Was jQuery not loaded?');
if (_ === undefined || typeof _ !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore (_). Was Underscore not loaded?');
if (XRegExp === undefined || typeof XRegExp !== 'function') throw new Error('Error while initializing Chicken: could not find global XRegExp. Was XRegExp not loaded?');


/////////////////////
// Chicken Classes //
/////////////////////

import Application from '~/Application';

// Core
import ComputedProperty from '~/Core/ComputedProperty';
import Obj from '~/Core/Obj';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';
import SettingsObject from '~/Core/SettingsObject';

// Dom
import ActionBinding from '~/Dom/ActionBinding';
import Binding from '~/Dom/Binding';
import Component from '~/Dom/Component';
import ComponentDefinition from '~/Dom/ComponentDefinition';
import Element from '~/Dom/Element';
import Helpers from '~/Dom/Helpers';
import Renderer from '~/Dom/Renderer';
import View from '~/Dom/View';
import ViewContainer from '~/Dom/ViewContainer';

// Helpers
import App from '~/Helpers/App';
import Chainable from '~/Helpers/Chainable';
import ClassMap from '~/Helpers/ClassMap';
import Utils from '~/Helpers/Utils';

// Routing
import Action from '~/Routing/Action';
import Controller from '~/Routing/Controller';
import Request from '~/Routing/Request';
import Route from '~/Routing/Route';
import RouteMatch from '~/Routing/RouteMatch';
import Router from '~/Routing/Router';




/////////////////////////////
// Chicken Package exports //
/////////////////////////////

var Chicken = {
	
	////////////////
	// Class tree //
	////////////////

	Application: Application,

	Core: {
		ComputedProperty: ComputedProperty,
		Obj: Obj,
		Observable: Observable,
		ObservableArray: ObservableArray,
		SettingsObject: SettingsObject
	},

	Dom: {
		ActionBinding: ActionBinding,
		Binding: Binding,
		Component: Component,
		ComponentDefinition: ComponentDefinition,
		Element: Element,
		Helpers: Helpers,
		Renderer: Renderer,
		View: View,
		ViewContainer: ViewContainer
	},

	Helpers: {
		App: App,
		Chainable: Chainable,
		ClassMap: ClassMap,
		Utils: Utils
	},

	Routing: {
		Action: Action,
		Controller: Controller,
		Request: Request,
		Route: Route,
		RouteMatch: RouteMatch,
		Router: Router
	},


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

	component: (name, source, initCallback, renderer, overwrite = false) => {

		// Create definition
		var def = new ComponentDefinition(name, source, initCallback, renderer);

		// Register it.
		if (Component.registry.has(name) && !overwrite) throw new Error('A component with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
		Component.registry.set(name, def);

		return def;

	},


	computed: (dependencies, callback) => {

		return new ComputedProperty(dependencies, callback);

	},


	view: (...args) => {

		return new View(...args);

	}




};

module.exports = Chicken;
