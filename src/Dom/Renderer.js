import _ from 'underscore';
import HTMLBars from 'htmlbars-standalone';

import Observable from '~/Core/Observable';
import Binding from '~/Dom/Binding';
import Helpers from '~/Dom/Helpers';

/**
 * @module Dom
 */
class Renderer
{

	/**
	 * @class Dom.Renderer
	 * 
	 * @constructor
	 */
	constructor() {

		/**
		 * @property dom
		 * @type {HTMLBars.DOMHelper}
		 */
		this.dom = new HTMLBars.DOMHelper();

		/**
		 * Hooks are the way to configure the way HTMLBars renders your
		 * templates. Renderer comes pre-configured with hooks that allow you
		 * to bind to Observables (models) and ObservableArrays (collections).
		 * 
		 * @property hooks
		 * @type {object}
		 */
		this.hooks = _.defaults({

			/**
			 * The `get` hook is responsible for retrieving Bindings from the data store.
			 * 
			 * @method hooks.get
			 * @param  {Renderer} 	renderer   	The Renderer instance (this)
			 * @param  {Scope} 		scope 		The Scope in which the `get` was called, 
			 *                           		containing the data that is available in this Scope
			 * @param  {string} 	path 		The path (key) of the variable to retrieve 		
			 * @return {mixed}     	The retrieved value
			 */
			get: (renderer, scope, path) => {
				
				// Get first part
				var keys = path.split(/\./);

				// Look into local data
				var appliedScope = scope.self;
				if (scope.localPresent[keys[0]]) {
					appliedScope = scope.locals[keys[0]];
					keys.shift();
					path = keys.join('.');
				}

				// No path? Return the whole data
				if (path === '') return appliedScope;

				// Is data an observable?
				if (appliedScope instanceof Observable) {

					// Create a binding
					var binding = new Binding(this, appliedScope, path);

					// Get the value
					return binding;

				} else {

					// Do native thing (deep-get)
					var value = this.hooks.getRoot(scope, keys[0])[0];
					for (var i = 1; i < keys.length; i++) {
						if (value) {
							value = this.hooks.getChild(value, keys[i]);
						} else {
							break;
						}
					}

				}
				
				return value;

			},

			/**
			 * Get value from reference (Binding)
			 *
			 * @method hooks.getValue
			 * @param  {Binding} reference 
			 * @return {mixed}           
			 */
			getValue: (reference) => {
				return reference instanceof Binding ? reference.getValue() : reference;
			},

			/**
			 * Link a morph to one or more values (in our case Bindings)
			 *
			 * @method hooks.linksRenderNode
			 * @param  {HTMLBarsMorph} morph    
			 * @param  {Dom.Renderer} renderer 
			 * @param  {Scope} scope    
			 * @param  {string} type   				Values can be `@range`, `@attribute`, or helper names
			 * @param  {array} values     			Array of values that have been linked to the morph. The should be Binding instances
			 * @return {[type]}          [description]
			 */
			linkRenderNode: (morph, renderer, scope, type, values) => {
			
				
				// Add this morph to all involved bindings
				_.each(values, (binding) => {

					// Is it a binding?
					if (binding instanceof Binding) {	

						binding.addMorph(morph);

					}

				});
							
			},

			lookupHelper: (renderer, scope, helperName) => {
				if (!renderer.helpers[helperName]) {
					throw new Error('There is no helper registered with the name "' + helperName + '"');
				}
				return renderer.helpers[helperName];
			},

			invokeHelper: (morph, env, scope, visitor, params, hash, helper, templates) => {
				
				// Call it with its own context
				return { 
					value: helper.call(this.helpers, params, hash, templates)
				};

			}

		}, HTMLBars.Runtime.Hooks.Default);

		/**
		 * @property helpers
		 * @type {Dom.Helpers}
		 */
		this.helpers = new Helpers(this);


		/**
		 * @property partials
		 * @type {Object}
		 */
		this.partials = {

		};


		/**
		 * @property useFragmentCache
		 * @default true
		 * @type {Boolean}
		 */
		this.useFragmentCache = true;

	}

	applyValue(morph, value)  {

		// Is it a Binding
		if (value instanceof Binding) {

			// Apply it
			value.applyValue(morph);

		} else {

			// Just set the value
			value = this.hooks.getValue(value);
			if (morph.lastValue !== value) morph.setContent(value);
			morph.lastValue = value;

		}

	}


}


module.exports = Renderer;