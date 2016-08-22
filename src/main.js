//////////////////////
// Vendor libraries //
//////////////////////

//import $ from 'jquery';
//import _ from 'underscore';


/////////////////////
// Chicken Classes //
/////////////////////

import Application from '~/Application';

import Obj from '~/Core/Obj';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';

import Router from '~/Routing/Router';
import Route from '~/Routing/Route';


/////////////////////////////
// Chicken Package exports //
/////////////////////////////

module.exports = {

	Application: Application,

	Core: {
		Object: Obj,
		Observable: Observable,
		ObservableArray: ObservableArray,
	},

	Routing: {
		Route: Route,
		Router: Router
	},


	createApplication: ($element, options) => {

		return new Application($element, options);

	}

};