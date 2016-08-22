//////////////////////
// Vendor libraries //
//////////////////////

import _ from 'underscore';


/////////////////////
// Chicken classes //
/////////////////////

import Observable from '~/Core/Observable';
import Router from '~/Routing/Router';

//////////////////////
// Class definitino //
//////////////////////

class Chicken_Application extends Observable {

	/**
	 * [constructor description]
	 *
	 * @class Application
	 */
	constructor($app, settings) {

		// Basics
		super();


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




		this.router = new Router();



		this.settings = new Observable(_.defaults(settings, {
			
		}));

	}


	routes(callback) {

		// Run callback with router
		callback.apply(this.router, []);
		return this;

	}

}

module.exports = Chicken_Application;