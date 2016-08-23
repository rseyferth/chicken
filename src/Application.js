//////////////////////
// Vendor libraries //
//////////////////////

import { createHistory } from 'history';
import $ from 'jquery';

/////////////////////
// Chicken classes //
/////////////////////

import Observable from '~/Core/Observable';
import SettingsObject from '~/Core/SettingsObject';
import ViewContainer from '~/Dom/ViewContainer';
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
	 * @extend Core.Observable
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
		this.$app = $app;
		
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
			baseUrl: '/'
		}, [ 'baseUrl' ]).apply(settings);



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
			var vc = new ViewContainer($(el));

			// Already known?
			if (this.viewContainers.has(vc.name)) {
				throw new Error('There is already a view named "' + vc.name + '". It is not possible to have two views with the same name at the same time.');
			}

			// Store it.
			this.viewContainers.set(vc.name, vc);

			// Initialize
			vc.initialize();

		});
		
		

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


	}


}


Application.getInstance = () => {
	return __instance;
};
ClassMap.register('Application', Application);


module.exports = Application;