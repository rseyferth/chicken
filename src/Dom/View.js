import _ from 'underscore';
import $ from 'jquery';
import HTMLBars from 'htmlbars-standalone';

import App from '~/Helpers/App';
import Observable from '~/Core/Observable';
import Binding from '~/Dom/Binding';

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
		 * @property actions
		 * @type {Object}
		 */
		this.actions = {

		};


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





		//////////////////////////
		// Check out the source //
		//////////////////////////

		// Is it HTML?
		if (/^\<[a-z\!]/.test(source)) {

			// Use code now
			this.templateString = source;

		} 
		
		// Name?
		else if (/[a-z0-9\-]+\./.test) {

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

			// Is the data a promise?
			if (value instanceof Promise) {

				// Add to promises
				this.dataPromises[key] = value;
				this.loadPromises.push(value);
				value.then((result) => {
					this.set(key, result, true, true);
				});

			} else {

				// Is it a Binding?
				if (value instanceof Binding) {
					value = value.getValue();
				}

				// Set it now (convert to observables, and do not trigger updates)
				this.set(key, value, true, true);

			}

		}

		return this;

	} 

	action(key, callback) {

		this.actions[key] = callback;
		return this;

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
		return this.promise('render', () => {

			/////////////////////////////////////////
			// Wait for all loadPromises to finish //
			/////////////////////////////////////////

			Promise.all(this.loadPromises).then(() => {

				this.renderSync();

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

		try {
			this.renderResult = this.getTemplate().render(this, this.renderer);
		} catch (error) {
			this.rejectPromise('render', error);
			return;
		}
		
		// Localize and be done!
		this.documentFragment = this.renderResult.fragment;
		this.resolvePromise('render', this.documentFragment);

		//////////////////
		// Revalidating //
		//////////////////

		// Have a look at the data, and revalidate the result whenever a change
		// occurs. The 'dirtying' of elements (morphs) is handled by the Renderer
		// and Binding classes.				
		
		// Study the object
		this.study(() => {
			this.scheduleRevalidate();
		});


		return this;

	}


	getTemplate() {

		// Create
		if (!this.template) {
			this.template = HTMLBars.Compiler.compile(this.templateString);
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

		// Not already pending?
		if (!this.revalidateTimeout)  {

			// Wait a bit.
			this.revalidateTimeout = setTimeout(() => {

				// Revalidate!
				this.revalidate();				

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
		if (this.renderResult) this.renderResult.revalidate();
		this.revalidateTimeout = false;
		return this;
	}


	/**
	 * Set the contents of this view in given $target element
	 * 
	 * @method addToDom
	 * @param {jQuery} $target    The $target for the view to render in. The contents will be completely replaced
	 *                            by this view.
	 */
	addToDOM($target) {

		// Add to dom
		var $view = $('<view/>');
		$view.html(this.documentFragment);
		$target.html($view);

		// Get the element
		this.$element = $view;
		
		// Done!
		this.resolvePromise('added', this);

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

		// Add to DOM
		this.addToDOM(viewContainer.$element);


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

module.exports = View;