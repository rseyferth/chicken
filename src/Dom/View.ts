import _, { Dictionary } from 'underscore';
import $ from 'jquery';
import Observable from '../Core/Observable';
import Application from '../Application';
import Component from './Component';
import Binding from './Binding';
import Renderer from './Renderer';
import ApiCall from '../Api/ApiCall';
import Obj from '../Core/Obj';
import { getValue } from '../Helpers/Utils';
import Model from '../Data/Model';
import Collection from '../Data/Collection';
import { compile } from 'htmlbars/dist/cjs/htmlbars-compiler/compiler';


/**
 * @module Dom
 */
export default class View extends Observable
{

    dataPromises : Dictionary<Promise<any>> = {};
    dataExpectations : Dictionary<any> = {};
	loadPromises : Promise<any>[] = [];
	templateString? : string;
	source : string | false;
	template? : HandlebarsTemplates;
	templateUrl? : string;

	translationKeyPrefix? : string;
	tkp? : string;

	actions : Dictionary<Function> = {};
	helpers : Dictionary<Function> = {};
	components : Dictionary<Component> = {};

	renderer : Renderer;

	renderResult? : any;
	documentFragment? : DocumentFragment;
	$element? : JQuery;

	apiCalls : ApiCall[] = [];

	hooks : Dictionary<Function[]>;

	isActive : boolean = true;
	
	bindings : Set<Binding> = new Set<Binding>();

	revalidateTimeout? : any;

	constructor(source : string | false, initCallback? : Function, renderer? : Renderer) {
		
		super();

		this.source = source;

		this.renderer = renderer ? renderer : Application.getInstance().config('renderer');


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
				var url = Application.getInstance().uri(
					Application.getInstance().config('viewPath'), 
					source.split(/\./).join('/'), 
					'.' + Application.getInstance().config('viewExtension')
				);
				this.templateUrl = url;

			}

		}
		
		// Url.
		else { 

			// Load it
			this.templateUrl = source;

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
		if (this.promises.has('template')) {
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
			$.ajax(this.templateUrl!).then((result) => {

				// Set template code
				this.templateString = result;

				// We're done.
				resolve(result);

			}).fail((error : JQueryXHR) => {

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
	with(...args : any[]) {

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
						this.set(key, result, true);
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
						this.set(key, result, true);
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
	expect(key : string, minimumCount : number = 1, maximumCount : boolean = false) : View {

		// Set it
		this.dataExpectations[key] = {
			min: minimumCount,
			max: maximumCount
		};
		return this;

	}

	action(key : string, callback : Function) : View {

		this.actions[key] = callback;
		return this;

	}

	helper(key : string, callback : Function) : View {

		this.helpers[key] = callback;
		return this;

	}

	getHelper(key) : Function {
		
		return this.helpers[key] || false;

	}


	translationPrefix(key? : string) : View {

		// Store prefix
		if (!key && this.source) key = this.source;
		this.translationKeyPrefix = key;
		this.tkp = key; // Shorthand

		// Register the 'l' helper
		if (this.helpers.l === undefined) {

			this.helper('l', (params, attributeHash) => {
				
				// Get key
				let key = getValue(params[0]);
				key = `${this.translationKeyPrefix}.${key}`;

				// Translate
				return Application.getInstance().i18n.translate(key, attributeHash, getValue(params[1]));

			});

		}

		return this;
	}


	sendAction(name : string, ...args : any[]) : void {

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
	render() : Promise<any> {

		// Make sure the template is loaded
		this.loadTemplate();

		// We make the 'render' promise.
		return this.promise('render', (resolve : Function, reject : Function) => {

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

	renderSync() : View {

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
			let path : string[] = [];
			let stringPath : string;
			if (this.renderer.currentMorph && this.renderer.currentMorph.element) {
				let $el = $(this.renderer.currentMorph.element);
				$el.parents().addBack().not('html').each(function() {
					let entry = this.tagName.toLowerCase();
						if (this.className) {
							entry += '.' + this.className.replace(/ /g, '.');
						}
						path.push(entry);
				});
				stringPath = path.join( ' > ');
			} else {
				stringPath = 'unknown';
			}

			// Get template source
			let source = this.source;
			let msg = `Error in template "${source}" at "${stringPath}":\n\t${error}\n`;

			this.rejectPromise('ready', msg);
			return this;
			
		}



		return this;

	}


	getTemplate() : any {

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
		$view.html(this.documentFragment!.toString());

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

	
	/**
	 * The TemplateCache is used to cache templates by their name. When you are
	 * building your application for production, you can also use this to bundle
	 * the templates.
	 * 
	 * @property TemplateCache
	 * @static
	 * @type {Map}
	 */
	static TemplateCache : Map<string, string> = new Map();
	
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
	static RevalidationDelay : number = 3;
	
	
	/**
	 * When this is true, a translation-prefix will automatically be set
	 * upon creation of this View, with the same value as the given source.
	 * 
	 * @property AutoTranslationPrefix
	 * @static
	 * @type {Boolean}
	 */
	static AutoTranslationPrefix : boolean = false;
	
	
	static any : Obj = new Obj();
	
	
}