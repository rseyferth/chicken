import _ from 'underscore';
import HTMLBars from 'htmlbars-standalone';

import Observable from '~/Core/Observable';
import Binding from '~/Dom/Binding';
import ActionBinding from '~/Dom/ActionBinding';
import Component from '~/Dom/Component';
import ComponentDefinition from '~/Dom/ComponentDefinition';
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

					// Already a binding?
					if (appliedScope._bindings === undefined) appliedScope._bindings = {};
					if (appliedScope._bindings[path]) {
						
						// Return existing binding
						return appliedScope._bindings[path];
					}

					// Create a binding
					var binding = new Binding(this, appliedScope, path);

					// Store it
					appliedScope._bindings[path] = binding;

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
				
				// Is there a component?
				if (Component.registry.has(helperName)) {
					return Component.registry.get(helperName);
				}

				if (!renderer.helpers[helperName]) {
					throw new Error('There is no helper registered with the name "' + helperName + '"');
				}
				return renderer.helpers[helperName];
			},

			invokeHelper: (morph, renderer, scope, visitor, params, attributeHash, helper, options) => {
				
				// Is it a component?
				if (helper instanceof ComponentDefinition) {

					// Call component hook
					return {
						value: this.hooks.component(morph, renderer, scope, helper, params, attributeHash, options, visitor)
					};

				} 

				// Call the helper with its own context
				return { 
					value: helper.apply(this.helpers, [params, attributeHash, options, morph, renderer, scope, visitor])
				};

			},

			component: (morph, renderer, scope, tagName, params, attributeHash, options, visitor) => {

				////////////////////////////////////////////////////////////////
				// Is the component already created, and is this a re-render? //
				////////////////////////////////////////////////////////////////

				let state = morph.getState();
				if (state.component) {

					state.component.scheduleRevalidate();
					return;

				} 			


				///////////////////////////////////
				// Create the component instance //
				///////////////////////////////////

				// Get definition
				let definition = Component.registry.get(tagName);
				
				// Create a new scope and use the component as self
				var newScope = renderer.hooks.createScope(renderer, scope);
				newScope.self = component;
				
				// Create it
				let component = new Component(
					definition.name, 
					definition.source, 
					morph,
					newScope,
					params,
					attributeHash,
					visitor,
					options,
					definition.initCallback, 
					this);
				
				// Set the data
				component.with(attributeHash);

				// Now render it.
				component.renderSync();
								
				// Store it.
				state.component = component;

			},


			/**
			 * Check if the given path is a known class (component, or block, inline)
			 *
			 * @method hooks.classify
			 * @param  {Dom.Renderer} renderer 
			 * @param  {Object} scope    
			 * @param  {string} path     
			 * @return {string}          
			 */
			classify: (renderer, scope, path) => {
	
				console.log(scope);

				// Is this a known component?
				if (Component.registry.has(path)) return 'component';

				// Nothing known.
				return false;

			},



			getBlock: (scope, key) => {

				return scope.blocks[key];

			},


			/**
			 * Keywords are a sort of commands in your .hbs templates
			 */
			keywords: _.defaults({

				/**
				 * The action keyword creates an ActionBinding instance and 
				 * stores it on the element. The `action` helper can then use 
				 * this ActionBinding to apply it on the DOM.
				 *
				 * @method keywords.action
				 */
				action: (morph, renderer, scope, params, attributeHash) => {
					
					// Check binding
					if (morph.actionBindings) return;

					// Get action scope
					let appliedScope;
					if (scope.localPresent['actions'] && scope.locals.actions[params[0]]) {

						// Use local action
						appliedScope = scope.locals;

					} else if (scope.self.actions && scope.self.actions[params[0]]) {

						// Use that
						appliedScope = scope.self;

					} else {

						// Undefined action.
						throw new Error('Could not find action "' + params[0] + '" within the scope');

					}

					// Get action
					let actionCallback = appliedScope.actions[params[0]];
					let parameters = params.slice(1);

					// Create action binding
					morph.actionBindings = new ActionBinding(renderer, morph, params[0], actionCallback, parameters, attributeHash, appliedScope);

				}


			}, HTMLBars.Runtime.Hooks.Default.keywords)

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


}


module.exports = Renderer;