import _ from 'underscore';
import $ from 'jquery';
import { template, compile } from 'htmlbars/dist/cjs/htmlbars-compiler';

import App from '../Helpers/App';
import Observable from '../Core/Observable';
import Binding from '../Dom/Binding';
import ApiCall from '../Api/ApiCall';
import Obj from '../Core/Obj';
import Model from '../Data/Model';
import Collection from '../Data/Collection';
import Utils from '../Helpers/Utils';

/**
 * @module Dom
 */
class View extends Observable
{

	/**
	 * ## Creating a View
	 * 
	 * A View is the part where your HTML and data come together. A View
	 * can be created directly:
	 *
	 * 	var view = new Chicken.Dom.View(source);
	 *
	 * Or shortly:
	 *
	 * 	var view = Chicken.view(source);
	 *
	 * A View can be created with three different `source` types:
	 * - HTML string
	 * - Name of a view template
	 * - And URL to a view template
	 *
	 * ## HTML
	 *
	 * The following example should be self-explanatory:
	 *
	 * 	Chicken.application($('#application'))
	 * 		.routes(function() {
	 *
	 *			this.route('/', () => {
	 *
	 *				return Chicken.view('<h1>{{ title }}</h1>')
	 *					.with('title', 'Page title');
	 * 
	 *			});
	 * 
	 * 		});
	 *
	 * Note: The `source` parameter is recognized as HTML when it starts with an HTML tag.
	 *
	 * ## By name
	 *
	 * If you want to put your templates in separate files, you can use 'names' to
	 * link to them. Use `.` in the name in place of a path seperator. Some examples:
	 *
	 * 	Chicken.view('home');               // Will open /views/home.hbs
	 * 	Chicken.view('product.index');      // Will open /views/product/index.hbs
	 * 	Chicken.view('a.b.c.d');            // Will open /views/a/b/c/d.hbs
	 *
	 * You can configure the default path and extension in your Application configuration.
	 *
	 * Note: Only use lowercase, numbers, and dashes in your names (`/[a-z0-9\-]/`)
	 *
	 *
	 * ## By URL
	 *
	 * This is pretty self-explanatory; the principle is the same as 'by name', only 
	 * here you pass a relative or absolute url instead:
	 *
	 * 	Chicken.view('/weird-location/template.xxx');
	 * 	Chicken.view('//my-domain.com/chicken-templates/welcome.hbs');
	 * 
	 * @class Dom.View
	 * @extends Core.Observable
	 *
	 * @constructor
	 * @param {string} source   			The source for the view
	 * @param {Dom.Renderer} renderer 		The Renderer instance that will be used by HTMLBars
	 */
	constructor(source, initCallback = null, renderer = null) {
		
		super();

		/**
		 * Promises for data to load, keyed by the key
		 * as provided in the `with` method
		 * 
		 * @property dataPromises
		 * @type {Object}
		 */
		this.dataPromises = {};

		/**
		 * @property dataExpectations
		 * @type {Object}
		 */
		this.dataExpectations = {};

		/**
		 * All promises that need to resolve for the 
		 * page to load.
		 *
		 * @property loadPromises
		 * @type {Array}
		 */
		this.loadPromises = [];


		/**
		 * @property templateString
		 * @type {string}
		 */
		this.templateString = null;


		/**
		 * @property source
		 * @type {string}
		 */
		this.source = source;

		/**
		 * @property template
		 * @type {HTMLBars template}
		 */
		this.template = null;


		/**
		 * @property templateUrl
		 * @type {string}
		 */
		this.templateUrl = null;


		/**
		 * The prefix to add before translations when in the view
		 * a translate key starts with a dot (e.g. {{t ".title"}} )
		 * 
		 * @property translationKeyPrefix
		 * @type {string}
		 */
		this.translationKeyPrefix = null;
		this.tkp = null;


		/**
		 * @property actions
		 * @type {Object}
		 */
		this.actions = {

		};


		/**
		 * Local DOM helpers that only apply to this view
		 * 
		 * @property helpers
		 * @type {Object}
		 */
		this.helpers = {};

		/**
		 * @property components
		 * @type {Object}
		 */
		this.components = {

		};


		/**
		 * When active this view will render and update when
		 * the data changes.
		 * 
		 * @property isActive
		 * @type {Boolean}
		 */
		this.isActive = true;


		/**
		 * @property bindings
		 * @type {Set}
		 */
		this.bindings = new Set();


		/**
		 * @property renderer
		 * @type {Dom.Renderer}
		 */
		this.renderer = renderer ? renderer : App().config('renderer');




		/**
		 * The RenderResult gotten back from the Template rendering.
		 * 
		 * @property renderResult
		 * @type {HTMLBars.RenderResult}
		 */
		this.renderResult = null;

		/**
		 * The DocumentFragment that is the rendered view.
		 * 
		 * @property documentFragment
		 * @type {DocumentFragment}
		 */
		this.documentFragment = null;




		/**
		 * The jQuery version of the DocumentFragment, that can be 
		 * used to manipulate the view's contents.
		 * 
		 * @property $element
		 * @type {jQuery}
		 */
		this.$element = null;


		/**
		 * @property apiCalls
		 * @type {Array}
		 */
		this.apiCalls = [];



		this.hooks = {
			beforeRender: [],
			beforeLeave: []
		};


		//////////////////////////
		// Check out the source //
		//////////////////////////

		// No template (just yield)?
		if (source === false) {
			this.templateString = '{{yield}}';
		}

		// Is it HTML?		
		else if (/^\<[a-z\!]/.test(source) || /^{{/.test(source)) {

			// Use code now
			this.templateString = source;

		} 
		
		// Name?
		else if (/[a-z0-9\-]+\./.test(source) || /^[a-zA-Z]+$/.test(source)) {

			// Set translation prefix?
			if (this.constructor === View && View.AutoTranslationPrefix) {
				this.translationPrefix(source);
			}

			// Is it cached?
			if (View.TemplateCache.has(source)) {

				// Use it.
				this.templateString = View.TemplateCache.get(source);

			} else {

				// Load template
				var url = App().uri(
					App().config('viewPath'), 
					source.split(/\./).join('/'), 
					'.' + App().config('viewExtension')
				);
				this.templateUrl = url;

			}

		}
		
		// Url.
		else { 

			// Load it
			this.templateUrl = url;

		}




		// Definition callback?
		if (initCallback) {
			initCallback.apply(this);
		}



		


	}


	beforeRender(callback) {
		this.hooks.beforeRender.push(callback);
		return this;
	}


	beforeLeave(callback) {
		this.hooks.beforeLeave.push(callback);
		return this;
	}


	loadTemplate() {

		// Already loading or loaded?
		if (this._promises.has('template')) {
			return this.getPromise('template');
		}

		// Promise.
		var promise = this.promise('template', (resolve, reject) => {

			// Do we have the template already?
			if (this.templateString) {
				resolve(this.templateString);
				return;
			}

			// Load it.
			$.ajax(this.templateUrl).then((result) => {

				// Set template code
				this.templateString = result;

				// We're done.
				resolve(result);

			}).fail((error) => {

				reject(error.responseText);

			});

			
		});


		// Add and return
		this.loadPromises.push(promise);
		return promise;

	}


	/**
	 * To add data to the view, you can use the **with** method. The simplest way is to
	 * call it using a **key** and a **value**:
	 *
	 * 	Chicken.view('page').with('title', 'Page title')
	 *
	 * You can also add a promise-returning method, such as:
	 *
	 * 	Chicken.view('product.index')
	 * 		.with('products', Chicken.api('/products'));
	 *
	 * The view will then wait for the Api call to finish, before showing, so that you
	 * can use the `products` collection your view.
	 *
	 * The same goes for a single model:
	 *
	 * 	Chicken.view('product.show')
	 * 		.with('product', Chicken.api('/product/' + this.parameters.get('id')));
	 * 
	 * When you have multiple data variables you want to pass to the view, you
	 * can also use object notation:
	 *
	 * 	Chicken.view('product.index')
	 * 		.with({
	 * 			products: Chicken.api('/products'),
	 * 			categories: Chicken.api('/categories')
	 * 		});
	 *
	 * 
	 * 
	 * @method with
	 * @param  {...mixed} args   This method can be called in two ways. See documentation
	 * @chainable
	 */
	with(...args) {

		// Is it a single object hash?
		if (args.length === 1 && typeof args[0] === 'object') {

			// Do an each
			_.each(args[0], (value, key) => {
				this.with(key, value);
			});

		} else {

			// Use key/value
			var [key, value] = args;
			
			// Is the key a string?
			if (typeof key !== 'string') throw new TypeError('[Dom.View] The "with" method accepts either a key, value or hash-object as arguments.');

			// Is it an Api call?
			if (value instanceof ApiCall && !value.doNotExecuteInView) {

				// Get the promise and add to api calls list
				this.apiCalls.push(value);
				let promise = this.dataPromises[key] = value.getPromise('complete');
				this.loadPromises.push(promise);
				promise.then((result) => {
					this.withoutNotifications(() => {							
						this.set(key, result, true, true);
					});
				});

			}

			// Is the data a promise?
			else if (value instanceof Promise) {

				// Add to promises
				this.dataPromises[key] = value;
				this.loadPromises.push(value);
				value.then((result) => {
					this.withoutNotifications(() => {		
						this.set(key, result, true, true);
					});
				});

			} else {

				// Is it a Binding?
				if (value instanceof Binding) {
				
					// Use value
					value = value.getReference();
				}

				// Set it now (convert to observables, and do not trigger updates)
				this.withoutNotifications(() => {			
					this.set(key, value, true);
				});

			}

		}

		return this;

	} 

	/**
	 * Tell the View to expect given data to present in order to render properly. When this data
	 * is not present, the View will throw an error.
	 * 
	 * @method expect
	 * @param  {string}  key          The data key that is expected in order for the View to render properly
	 * @param  {Number}  minimumCount (Default = 1) The minimum number of records we expect
	 * @param  {Number}  maximumCount (Default = false) The maximum number of recorders we expected
	 * @chainable
	 */
	expect(key, minimumCount = 1, maximumCount = false) {

		// Set it
		this.dataExpectations[key] = {
			min: minimumCount,
			max: maximumCount
		};
		return this;

	}

	action(key, callback) {

		this.actions[key] = callback;
		return this;

	}

	helper(key, callback) {

		this.helpers[key] = callback;
		return this;

	}

	getHelper(key) {
		
		return this.helpers[key] || false;

	}


	translationPrefix(key = false) {

		// Store prefix
		if (key === false) key = this.source;
		this.translationKeyPrefix = key;
		this.tkp = key; // Shorthand

		// Register the 'l' helper
		if (this.helpers.l === undefined) {

			this.helper('l', (params, attributeHash) => {
				
				// Get key
				let key = Utils.getValue(params[0]);
				key = `${this.translationKeyPrefix}.${key}`;

				// Translate
				return App().i18n.translate(key, attributeHash, Utils.getValue(params[1]));

			});

		}

		return this;
	}


	sendAction(name = null, ...args) {

		// Get the callback.
		let actionScope = this;		
		let callback = actionScope.actions[name];

		// Now call it.
		var params = _.flatten([
			_.map(args, (value) => {
				return this.renderer.hooks.getValue(value);
			}), 
			this,	
			actionScope
		]);
		callback.apply(actionScope, params);

	}



	/**
	 * Render the view!
	 *
	 * @method render
	 * @return {Promise}  The 'render' promise is returned. The 'added' promise will be called
	 *                    when the view is added to the DOM.
	 **/
	render() {

		// Make sure the template is loaded
		this.loadTemplate();

		// We make the 'render' promise.
		return this.promise('render', (resolve, reject) => {

			// Start api calls.
			_.invoke(this.apiCalls, 'execute');

			/////////////////////////////////////////
			// Wait for all loadPromises to finish //
			/////////////////////////////////////////

			Promise.all(this.loadPromises).then(() => {

				// Check present of data
				_.each(this.dataExpectations, (options, key) => {

					// Get it
					let data = this.get(key);
					if (data === undefined) return reject('The View expected ' + key + ' to be present, but it was not.');
					
					// Model or Collection?
					if (!(data instanceof Model || data instanceof Collection)) return reject('The View expected ' + key + ' to be a Model or Collection, but it was a ' + (typeof data)); 

					// Check count
					if (data instanceof Model && options.min && options.min > 1) return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, only one was present');
					if (data instanceof Collection) {
						if (options.min && data.length < options.min) return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, ' + data.length + ' were present');
						if (options.max && data.length > options.max) return reject('The View expected ' + key + ' to have no more than ' + options.max + ' records, ' + data.length + ' were present');
					}

				});

				this.renderSync();
				resolve();

			}, (error) => {

				reject(error);
				

			});


		});

	}


	/**
	 * Render the view synchronously. Only use this when you know all
	 * the data is already loaded!
	 *
	 * @method renderSync
	 * @chainable
	 */

	renderSync() {

		/////////////////////
		// Create template //
		/////////////////////

		// Before render hook
		let continueRendering = true;
		_.each(this.hooks.beforeRender, (cb) => {
			if (!continueRendering) return;
			let result = cb.apply(this);
			if (result === false) continueRendering = false;
		});

		// Before render returned false?
		if (!continueRendering) return this;

		// Render it
		try {
		
			this.renderResult = this.getTemplate().render(this, this.renderer);
		
			// Localize and be done!
			this.documentFragment = this.renderResult.fragment;
			this.resolvePromise('render', this.documentFragment);
		
		} catch (error) {

			// Enrich error with element-path
			let path = [];
			if (this.renderer.currentMorph && this.renderer.currentMorph.element) {
				let $el = $(this.renderer.currentMorph.element);
				$el.parents().addBack().not('html').each(function() {
					let entry = this.tagName.toLowerCase();
						if (this.className) {
							entry += '.' + this.className.replace(/ /g, '.');
						}
						path.push(entry);
				});
				path = path . join( ' > ');
			} else {
				path = 'unknown';
			}

			// Add error stack			
			/* eslint-disable no-console */
			try {
				console.warn(error.stack);
			} catch (e) { /* Nothing */}
			/* eslint-enable no-console */
			
			
			// Get template source
			let source = this.source;
			let msg = `Error in template "${source}" at "${path}":\n\t${error}\n`;
			this.rejectPromise('ready', msg);
			return this;
			
		}



		return this;

	}


	getTemplate() {

		// Create
		if (!this.template) {
			this.template = compile(this.templateString);
		}
		return this.template;

	}



	/**
	 * Have the rendered view be revalidated when it's convenient.
	 * 
	 * @method scheduleRevalidate
	 * @chainable
	 */
	scheduleRevalidate() {

		// Still active?
		if (!this.isActive) {
			return this;
		}

		// Not already pending?
		if (!this.revalidateTimeout)  {

			// Wait a bit.
			this.revalidateTimeout = setTimeout(() => {

				// Revalidate!
				this.revalidate();

				// Check if components are still there
				_.each(this.components, (component, key) => {

					// Element rendered?
					if (component.$element && component.$element.length > 0) {
						
						// No longer in DOM
						if (!$.contains(document.documentElement, component.$element[0])) {
							
							component.destroy();
							delete this.components[key];
							
						}


					}

				});


			}, View.RevalidationDelay);

		}
		
		return this;
	

	}

	/**
	 * Revalidate the rendered view. Revalidation means the updating of 
	 * 'dirty' elements (morphs). The dirtying is done by the Bindings, set up
	 * by the Renderer.
	 *
	 * If your binding is valid, and components work as the should, you shouldn't 
	 * need to call this method. If you do though, it is better to call
	 * `scheduleRevalidate` instead, to prevent undue calls.
	 * 
	 * @method revalidate
	 * @chainable
	 */
	revalidate() {
		this.trigger('beforeRevalidate');
		if (this.renderResult) this.renderResult.revalidate();
		this.trigger('revalidate');
		View.any.trigger('revalidate', this);
		this.revalidateTimeout = false;
		return this;
	}


	/**
	 * Add the view to the ViewContainer, replacing previous contents
	 * and making sure the ViewContainer knows it's gotten the view.
	 * 
	 * @method addToContainer
	 * @param {Dom.ViewContainer} viewContainer 
	 */
	addToContainer(viewContainer) {

		// Set view
		viewContainer.setView(this);

		// Create wrapper
		let $view = $('<view/>');
		$view.html(this.documentFragment);

		// Add to DOM
		viewContainer.setContent($view);

		// Set element
		this.$element = $view;

		// Done.
		View.any.trigger('render', $view);
		this.resolvePromise('ready', [this]);

	}


	/**
	 * Handle the leaving of the page this View is on, e.g. destroying
	 * components.
	 *
	 * @method leave
	 * @return {Promise}
	 */
	leave() {

		return new Promise((resolve, reject) => {

			// Before ,leave hook
			let allowLeave = true;
			_.each(this.hooks.beforeLeave, (cb) => {
				if (allowLeave) {
					let result = cb.apply(this);
					if (result === false) allowLeave = false;
				}
			});

			// Can't leave?
			if (!allowLeave) return reject();

			// I am destroyed
			this.isActive = false;

			// Destroy components
			_.each(this.components, (component) => {
				component.destroy();
				component.isActive = false;
			});

			// Kill bindings
			this.bindings.forEach((binding) => {
				binding.destroy();
			});

			// Done.
			resolve();

		});

	}

	addBinding(binding) {
		this.bindings.add(binding);
		return this;
	}


}

/**
 * The TemplateCache is used to cache templates by their name. When you are
 * building your application for production, you can also use this to bundle
 * the templates.
 * 
 * @property TemplateCache
 * @static
 * @type {Map}
 */
View.TemplateCache = new Map();

/**
 * The number of milliseconds to wait before revalidating your views after
 * a change in the data has occured.
 *
 * This value can be very low, as it is mostly used to bundle changes together
 * that occur semi-simultaneously.
 * 
 * @property RevalidationDelay
 * @static
 * @type {Number}
 */
View.RevalidationDelay = 3;


/**
 * When this is true, a translation-prefix will automatically be set
 * upon creation of this View, with the same value as the given source.
 * 
 * @property AutoTranslationPrefix
 * @static
 * @type {Boolean}
 */
View.AutoTranslationPrefix = false;


View.any = new Obj();


export default View;