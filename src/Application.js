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
import Element from '~/Dom/Element';

//////////////////////
// Class definitino //
//////////////////////

var _instance = undefined;

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
		_instance = this;

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
		 * One or more Api.Api instances
		 * 
		 * @property apis
		 * @type {Object}
		 */
		this.apis = {};


		/**
		 * One or more Auth.Auth instances
		 *
		 * @property auths
		 * @type {Object}
		 */
		this.auths = {};



		/**
		 * @property settings
		 * @type {Core.SettingsObject}
		 */
		this.settings = SettingsObject.create({
			baseUrl: '/',
			
			language: $('html').attr('lang'),

			viewPath: 'views',
			viewExtension: 'hbs',

			elementLinkAttribute: 'link-to',

			renderer: settings.renderer === undefined ? new Renderer() : null

		}, [ 'baseUrl', 'viewPath', 'viewExtension', 'renderer', 'elementLinkAttribute' ]).apply(settings);

		

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


	api(key = null, apiInstance = null) {
		
		// Get?
		if (apiInstance === null) {
			if (key === null) key = _.first(_.keys(this.apis));
			return this.apis[key];
		}

		// Set
		this.apis[key] = apiInstance;

		return this;
	}


	auth(key = null, authInstance = null) {

		// Get?
		if (authInstance === null) {
			if (key === null) key = _.first(_.keys(this.auths));
			return this.auths[key];
		}

		// Set
		this.auths[key] = authInstance;

		return this;
	}



	start() {

		// Enable momentJS
		moment.locale(this.settings.get('language'));
		
		// Find initial view containers
		this.findViewContainers();

		// Update view containers whenever element contents are set.
		Element.registerHook(($element) => {

			// Update view containers
			this.updateViewContainers($element);

			// Find links
			$element.find('[' + this.settings.get('elementLinkAttribute') + ']').on('click', (e) => {

				// Open the uri!
				e.preventDefault();
				let uri = $(e.target).attr('href');
				this.goto(uri);

			}).each((index, el) => {

				// Get uri
				let $el = $(el);
				let uri = $el.attr(this.settings.get('elementLinkAttribute'));
				if (uri) {

					// Store in href for easy visilbility, and remove link-to, so it won't be found again by this script
					$el.removeAttr(this.settings.get('elementLinkAttribute'));
					$el.attr('href', uri);
					
				}

			});

		});

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
		this.history.push({
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
	return _instance;
};



ClassMap.register('Application', Application);





module.exports = Application;