import _ from 'underscore';
import $ from 'jquery';
import HTMLBars from 'htmlbars-standalone';

import App from '~/Helpers/App';
import Obj from '~/Core/Obj';
import Observable from '~/Core/Observable';

/**
 * @module Dom
 */
class View extends Obj
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
	 * @extends Core.Obj
	 *
	 * @constructor
	 * @param {string} source   			The source for the view
	 * @param {Dom.Renderer} renderer 		The Renderer instance that will be used by HTMLBars
	 */
	constructor(source, renderer) {
		
		super();

		/**
		 * @property data
		 * @type {Core.Observable}
		 */
		this.data = new Observable();


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
		 * @property renderer
		 * @type {Dom.Renderer}
		 */
		this.renderer = renderer ? renderer : App().config('renderer');




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
				this._loadTemplate(url);

			}

		}
		
		// Url.
		else { 

			// Load it
			this._loadTemplate(url);

		}




	}


	_loadTemplate(url) {

		// Promise.
		var promise = this.promise('template', (resolve, reject) => {

			// Load it.
			$.ajax(url).then((result) => {

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

			} else {

				// Set it now
				this.data.set(key, value, true);

			}

		}

		return this;

	} 


	render() {

		// We make the 'render' promise.
		return this.promise('render', (resolve, reject) => {

			/////////////////////////////////////////
			// Wait for all loadPromises to finish //
			/////////////////////////////////////////

			Promise.all(this.loadPromises).then(() => {

				/////////////////////
				// Create template //
				/////////////////////

				this.template = HTMLBars.Compiler.compile(this.templateString);
				var result = this.template.render(this.data, this.renderer);
				result.revalidate();

				// Resolve the promise
				resolve(result.fragment);

				// Localize and be done!
				this.documentFragment = result.fragment;

				
			});


		});

	}


	addToDOM($target) {

		// Add to dom
		$target.html(this.documentFragment);

		// Get the element
		this.$element = $target.find('>*');
		
		// Done!
		this.resolvePromise('added', this);

	}


	addToContainer(viewContainer) {

		viewContainer.setView(this);

		this.addToDOM(viewContainer.$element);


	}


}


View.TemplateCache = new Map();


module.exports = View;