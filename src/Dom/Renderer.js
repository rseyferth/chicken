import _ from 'underscore';
import HTMLBars from 'htmlbars-standalone';

import Utils from '~/Helpers/Utils';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';
import Binding from '~/Dom/Binding';

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
					};

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
			 * @param  {string} type   				This is originally called 'params'. Values can be `@range`, `@attribute`
			 * @param  {array} values     			Array of values that have been linked to the morph. The should be Binding instances
			 * @return {[type]}          [description]
			 */
			linkRenderNode: (morph, renderer, scope, type, values) => {
			
				// Add this morph to all involved bindings
				_.each(values, (binding) => {
					if (binding instanceof Binding)	binding.addMorph(morph);
				});
							
			},


			/**
			 * This hook applies a value to an attribute
			 *
			 * @method hooks.attribute
			 * @param  {HTMLBarsMorph} 	morph        
			 * @param  {Dom.Renderer} 	renderer  
			 * @param  {Scope} 			scope
			 * @param  {string} 		attributeName 
			 * @param  {mixed} 			value 			This should be a Binding instance
			 */
			attribute: (morph, renderer, scope, attributeName, value) => {
				this.applyValue(morph, value);
			},


			/**
			 * This hook applies a value to a 'range', which is a piece of text within
			 * an element.
			 *
			 * @method hooks.range
			 * @param  {HTMLBarsMorph} 	morph        
			 * @param  {Dom.Renderer} 	renderer  
			 * @param  {Scope} 			scope
			 * @param  {string} 		path 
			 * @param  {mixed} 			value 			This should be a Binding instance
			 * @param  {??} 			visitor  
			 */
			range: (morph, renderer, scope, path, value, visitor) => {

				// What does this do exactly? Prevent recursion?
				if (HTMLBars.Runtime.Hooks.Helpers.handleRedirect(morph, renderer, scope, path, [], {}, null, null, visitor)) {
					return;
				}

				// Apply
				this.applyValue(morph, value);

			}




		}, HTMLBars.Runtime.Hooks.Default);

		/**
		 * @property helpers
		 * @type {Object}
		 */
		this.helpers = {

			each: (params, hash, blocks) => {
				
				// Get the value
				let list = params[0] instanceof Binding ? params[0].getValue() : params[0];
				let keyPath = hash.key;
				Utils.each(list, (item, i) => {
					blocks.template.yieldItem('item' + i, [item, i]);
				});
				
			},

			if: (params, hash, blocks) => {

				// Is the param truth-like?
				if (Utils.isTruthlike(params[0])) {
					if (blocks.template.yield) {
						blocks.template.yield();
					} else {
						return params[1];
					}
				} else {
					if (options.inverse.yield) {
						options.inverse.yield();
					} else {
						return params[2];
					}
				}

			}

		},

		/**
		 * @property partials
		 * @type {Object}
		 */
		this.partials = {

		}


		/**
		 * @property useFragmentCache
		 * @default true
		 * @type {Boolean}
		 */
		this.useFragmentCache = true		

	}

	applyValue(morph, value)  {

		// Is it a Binding
		if (value instanceof Binding) {

			// Apply it
			value.applyValue(morph);

		} else {

			// Just set the value
			var value = this.hooks.getValue(value);			
			if (morph.lastValue !== value) morph.setContent(value);
			morph.lastValue = value;

		}

	}



}


module.exports = Renderer;