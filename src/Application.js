//////////////////////
// Vendor libraries //
//////////////////////

import moment from 'moment';
import QueryString from 'query-string';
import { createBrowserHistory, createMemoryHistory, createHashHistory } from 'history';		// https://www.npmjs.com/package/history
import $ from 'jquery';
import _ from 'underscore';

/////////////////////
// Chicken classes //
/////////////////////

import Observable from './Core/Observable';
import SettingsObject from './Core/SettingsObject';
import ViewContainer from './Dom/ViewContainer';
import Renderer from './Dom/Renderer';
import ClassMap from './Helpers/ClassMap';
import Router from './Routing/Router';
import Element from './Dom/Element';
import I18n from './Localization/I18n';

//////////////////////
// Class definitino //
//////////////////////

var _instance = undefined;

/**
 * The main Application class, used to create a Chicken application.
 *
 * @param {JQuery} $app - The target jQuery element to create application in
 * @param {Object} settings - Application settings object
 * @param {string} [settings.baseUrl=/] - The root uri of the application
 * @param {History} [history] Optional browser history instance. Will be created for you if you leave it null.
 * 
 */
class Application extends Observable {

	constructor($app, settings, history = null) {

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
		 * @type {Object}
		 */
		this.viewContainers = {};



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
		 * Array of promises to fulfill before the application
		 * can start.
		 * 
		 * @property loadPromises
		 * @type {Array}
		 */
		this.loadPromises = [];



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

			renderer: settings.renderer === undefined ? new Renderer() : null,

			isCordovaApp: false		// For use with Cordova

		}, [ 'baseUrl', 'viewPath', 'viewExtension', 'renderer', 'elementLinkAttribute', 'isCordovaApp' ]).apply(settings);



		/**
		 * @property i18n
		 * @type {Localization.I18n}
		 */
		this.i18n = new I18n(this.settings.get('language'));


	
		

		/**
		 * @property history
		 * @type {History}
		 */
		this.history = history;
		if (!this.history) {

			// Cordova app?
			if (this.settings.get('isCordovaApp')) {

				// Running actual app or previewing in browser?
				if (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1) {
					
					// Create a history in memory
					this.history = createMemoryHistory();
					
				} else {

					// Create a history using #
					this.history = createHashHistory();

				}



			} else {

				// Create a browser history
				this.history = createBrowserHistory();
			}

		}	

		/**
		 * Used to tweak history without navigating away from the page
		 * 
		 * @property navigationDisabledOnce
		 * @type {Boolean}
		 */
		this.navigationDisabledOnce = false;


	}

	findViewContainers($element = null) {

		// No element to look in?
		if (!$element) $element = this.$app;

		// Find view containers
		$element.find(ViewContainer.ElementSelector).each((index, el) => {

			// Create view container
			var vc = new ViewContainer($(el), this);

			// Already known?
			if (this.viewContainers[vc.name]) {
				throw new Error('There is already a view named "' + vc.name + '". It is not possible to have two views with the same name at the same time.');
			}

			// Store it.
			this.viewContainers[vc.name] = vc;

			// Initialize
			vc.initialize();

		});
		
		return this;

	}

	updateViewContainers($lookForNewOnesIn = null) {

		// Check if all old ones are still there
		_.each(this.viewContainers, (vc, key) => {

			// Removed?
			if (!vc.isInDom()) {
				delete this.viewContainers[key];
			}
			
		});

		// Look for new ones
		if ($lookForNewOnesIn) this.findViewContainers($lookForNewOnesIn);

		return this;

	}

	getViewContainer(key) {
		return this.viewContainers[key];
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

	
	translations(callback) {

		callback.apply(this.i18n, [this.i18n]);
		return this;

	}



	start() {

		// Enable momentJS
		if (this.settings.get('language')) moment.locale(this.settings.get('language'));
		
		// Add i18n to promises
		this.loadPromises.unshift(this.i18n.load());

		// Do auth initialization
		_.each(this.auths, (auth) => {
			this.loadPromises.unshift(auth.initialize());
		});

		// When all is done.
		Promise.all(this.loadPromises).then(() => {

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
			
			// Done!
			this.resolvePromise('ready');

			// Listen to browser's address bar
			this.history.listen((location) => {
				this.router.handle(location);
			});
			
			// Start with current location
			this.router.handle(this.history.location);
			
		}, (error) => {
			
			throw error;

		});

		return this;

	}

	gotoNamed(name, attributes = {}, query = null, flash = {}, transition = null) {

		// Find route
		let route = this.router.namedRoutes.get(name);
		if (!route) throw new Error('There is no route defined with the name "' + name + '"');

		// Make uri
		let uri = route.makeUrl(attributes);
		return this.goto(uri, query, flash, false, transition);

	}

	openNamed(name, attributes = {}) {

		// Find route
		let route = this.router.namedRoutes.get(name);
		if (!route) throw new Error('There is no route defined with the name "' + name + '"');

		// Make uri
		let uri = route.makeUrl(attributes);
		window.open(uri);

	}

	transitionToNamed(name, attributes = {}, transition) {
		return this.gotoNamed(name, attributes, null, {}, transition);
	}
	transitionTo(uri, transition) {
		return this.goto(uri, null, {}, false, transition);
	}


	goto(uri, query = null, flash = {}, doNotNavigate = false, transition = null) {

		// Query in the uri?
		let search = QueryString.extract(uri);
		let params = {};
		if (search.length > 0) {
			
			// Parse objects
			params = QueryString.parse(search);
			
			// Remove from uri
			uri = uri.substr(0, uri.length - search.length - 1);

		}

		// Check the query
		if (query) {

			// Combine into params
			if (typeof query === 'string') {
				params = $.extend(params, QueryString.parse(query));
			} else {
				params = $.extend(params, query);
			}

		}

		// Stringify query
		query = QueryString.stringify(params);
		if (query) query = '?' + query;
		
		// External?		
		if (uri.match(/^(http(s)?\:)?\/\//)) {
			window.location = uri + (query || '');
			return this;
		}

		// No navigating? Just add the state to history?
		if (doNotNavigate) {
			
			// Disable navigation
			this.navigationDisabledOnce = true;			

		}
		
		// Change the history state
		const url = `${this.settings.get('baseUrl')}${uri}`.replace(/\/{2,}/, '/');
		this.history.push({
			pathname: url,
			search: query,
			state: {
				flash: flash,
				transition: transition
			},
		});

		
		return this;

	}

	refresh(viewContainerKeys = null) {

		viewContainerKeys = viewContainerKeys || _.keys(this.viewContainers);
			
		//clear the currentAction of all viewContainer
		_.each(viewContainerKeys, (viewContainerKey) => {
			this.viewContainers[viewContainerKey].currentAction = null;
		});

		// Start with current location
		this.router.handle(this.history.location);

	}

	getCurrentUri() {

		return this.history.location.pathname;

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

		// Add baseUrl (except for cordova app)
		if (!this.settings.get('isCordovaApp')) {
			args.unshift(this.settings.get('baseUrl') === '/' ? '' : this.settings.get('baseUrl'));
		}
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





export default Application;