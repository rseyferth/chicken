//////////////////////
// Vendor libraries //
//////////////////////

//import $ from 'jquery';
//import _ from 'underscore';


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
	
	Application: Application,

	Core: {
		Obj: Obj,
		Observable: Observable,
		ObservableArray: ObservableArray,
		SettingsObject: SettingsObject
	},

	Dom: {
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


	createApplication: ($element, options) => {

		return new Application($element, options);

	},

	getApplicationInstance() {
		return Application.getInstance();
	}

};