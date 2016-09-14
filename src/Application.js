//////////////////////
// Vendor libraries //
//////////////////////

import QueryString from 'query-string';
import { createHistory } from 'history';		// https://www.npmjs.com/package/history
import $ from 'jquery';
import _ from 'underscore';

/////////////////////
// Chicken classes //
/////////////////////

import Observable from '~/Core/Observable';
import SettingsObject from '~/Core/SettingsObject';
import ViewContainer from '~/Dom/ViewContainer';
import Renderer from '~/Dom/Renderer';
import ClassMap from '~/Helpers/ClassMap';
import Router from '~/Routing/Router';

//////////////////////
// Class definitino //
//////////////////////

var __instance = undefined;

class Application extends Observable {

	/**
	 * The Application class is 
	 *
	 * @class Application
	 * @extends Core.Observable
	 */
	constructor($app, settings, history) {

		// Basics
		super();
		__instance = this;

		////////////////
		// Properties //
		////////////////

		/**
		 * The jQuery element that is the Application
		 * 
		 * @property $app
		 * @type {jQuery}
		 */
		this.$app = $app ? $app : $('#application');


		/**
		 * All ViewContainers in the application. This is automatically
		 * kept up to date to contain all and only still existing containers.
		 *
		 * @property viewContainers
		 * @type {Map}
		 */
		this.viewContainers = new Map();



		/**
		 * @property router
		 * @type {Routing.Router}
		 */
		this.router = new Router(this);



		/**
		 * @property settings
		 * @type {Core.SettingsObject}
		 */
		this.settings = SettingsObject.create({
			baseUrl: '/',
			
			viewPath: 'views',
			viewExtension: 'hbs',

			renderer: settings.renderer === undefined ? new Renderer() : null

		}, [ 'baseUrl', 'viewPath', 'viewExtension', 'renderer' ]).apply(settings);

		

		/**
		 * @property history
		 * @type {History}
		 */
		this.history = history ? history : createHistory();




	}

	findViewContainers($element = null) {

		// No element to look in?
		if (!$element) $element = this.$app;

		// Find view containers
		$element.find(ViewContainer.ElementSelector).each((index, el) => {

			// Create view container
			var vc = new ViewContainer($(el), this);

			// Already known?
			if (this.viewContainers.has(vc.name)) {
				throw new Error('There is already a view named "' + vc.name + '". It is not possible to have two views with the same name at the same time.');
			}

			// Store it.
			this.viewContainers.set(vc.name, vc);

			// Initialize
			vc.initialize();

		});
		
		return this;

	}

	updateViewContainers($lookForNewOnesIn = null) {

		// Check if all old ones are still there
		

		// Look for new ones
		if ($lookForNewOnesIn) this.findViewContainers($lookForNewOnesIn);

		return this;

	}

	getViewContainer(key) {
		return this.viewContainers.get(key);
	}





	routes(callback) {

		// Run callback with router
		callback.apply(this.router, []);
		return this;

	}


	start() {

		// Find initial view containers
		this.findViewContainers();

		// Listen to browser's address bar
		this.history.listen((location) => {
			this.router.handle(location);
		});

		// Start with current location
		this.router.handle(this.history.getCurrentLocation());


		return this;

	}

	goto(uri, query = null) {

		// Check the query
		if (query) {

			// Is it a hash?
			if (typeof query !== 'string') {
				query = QueryString.stringify(query);
			}

		}

		// Change the history state
		history.push({
			pathname: uri,
			search: query
		});

		return this;


	}




	config(...args) {

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

	}


	uri(...args) {

		// Add baseUrl
		args.unshift(this.settings.get('baseUrl') === '/' ? '' : this.settings.get('baseUrl'));
		var url = args.join('/');

		// Was the last one an extension?
		if (/^\.[a-z]+$/.test(_.last(args))) {

			// Replace last slash
			url = url.replace(/\/\.[a-z]+$/, _.last(args));

		}
		return url;

	}




}


Application.getInstance = () => {
	return __instance;
};



ClassMap.register('Application', Application);





module.exports = Application;