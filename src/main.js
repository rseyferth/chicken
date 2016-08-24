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
import Obj from '~/Core/Obj';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';
import SettingsObject from '~/Core/SettingsObject';

// Dom
import Element from '~/Dom/Element';
import View from '~/Dom/View';
import ViewContainer from '~/Dom/ViewContainer';

// Helpers
import Chainable from '~/Helpers/Chainable';
import ClassMap from '~/Helpers/ClassMap';

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

module.exports = {
	
	////////////////
	// Class tree //
	////////////////

	Application: Application,

	Core: {
		Obj: Obj,
		Observable: Observable,
		ObservableArray: ObservableArray,
		SettingsObject: SettingsObject
	},

	Dom: {
		Element: Element,
		View: View,
		ViewContainer: ViewContainer
	},

	Helpers: {
		Chainable: Chainable,
		ClassMap: ClassMap		
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
			return new Application(...args);			
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

	},

	view: (...args) => {

		return new View(...args);

	}




};