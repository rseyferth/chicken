import _ from 'underscore';
import DOMHelper from 'htmlbars/dist/cjs/dom-helper';
import Hooks from 'htmlbars/dist/cjs/htmlbars-runtime/hooks';
import render from 'htmlbars/dist/cjs/htmlbars-runtime/render';

import Observable from '../Core/Observable';
import ObservableArray from '../Core/ObservableArray';
import Binding from '../Dom/Binding';
import ActionBinding from '../Dom/ActionBinding';
import Component from '../Dom/Component';
import ComponentDefinition from '../Dom/ComponentDefinition';
import HelperProxy from '../Dom/HelperProxy';
import Helpers from '../Dom/Helpers';
import View from '../Dom/View';
import Utils from '../Helpers/Utils';

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
		this.dom = new DOMHelper();

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
				// Is data an observable?
				if ((appliedScope instanceof Observable && path.length > 0) || appliedScope instanceof ObservableArray) {

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

				} else if (path === '') {

					// Return the scope itself
					return appliedScope;

				} else {

					// Do native thing (deep-get)
					var value = appliedScope;
					for (let q = 0; q < keys.length; q++) {
						if (value === undefined || value === null) return value;
						value = value[keys[q]];
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

				// Is it a binding?
				if (reference instanceof Binding) return reference.getValue();

				// A helper?
				if (reference instanceof HelperProxy) return reference.invoke();

				// Just a value
				return reference;

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
			 * @return 
			 */
			linkRenderNode: (morph, renderer, scope, type, values) => {
				
				// Add this morph to all involved bindings
				_.each(values, (binding) => {

					// Is it a binding?
					if (binding instanceof Binding) {
						binding.addMorph(morph, scope);
					}

				});
					
			},


			willRenderNode: (morph/*, renderer, scope*/) => {

				// Store morph so we can bind it when we get subexpressions, etc
				this.currentMorph = morph;

			},

			subexpr: (renderer, scope, helperName, params, hash) => {

				// Loop through parameters to find Bindings
				_.each(params, (param) => {
					if (param instanceof Binding) {
						
						// Add morph
						if (renderer.currentMorph) param.addMorph(renderer.currentMorph, scope);

					}
				});
									
				// Original behavior
				return Hooks.subexpr(renderer, scope, helperName, params, hash);

			},


			createFreshScope: () => {
				return { self: null, blocks: {}, locals: {}, localPresent: {}, actions: {}, view: null };
			},

			createChildScope: (parentScope) => {

				// Create a new scope extending the parent
				var scope = Object.create(parentScope);
				scope.locals = Object.create(parentScope.locals);
				scope.localPresent = Object.create(parentScope.localPresent);
				scope.blocks = Object.create(parentScope.blocks);
				scope.actions = Object.create(parentScope.actions);

				// Check is parent is a view
				if (parentScope.self instanceof View) {
					
					// Bubble the actions
					scope.actions = _.extend(scope.actions, parentScope.self.actions);


					// No a component?
					if (!(parentScope.self instanceof Component)) {
						scope.view = parentScope.self;
					} else {
						scope.component = parentScope.self;
						scope.view = scope.component.view;
					}

				}

				return scope;


			},

			findHelper(renderer, scope, helperName) {

				// Scope helper?
				if (scope.self && typeof scope.self.getHelper === 'function') {
					let helper = scope.self.getHelper(helperName);
					if (helper) return helper;
				}

				// Use helper?
				if (Helpers.User[helperName]) {
					return Helpers.User[helperName];
				}

				// Chicken helper?
				if (renderer.helpers[helperName]) {
					return renderer.helpers[helperName];
				}

			},


			lookupHelper: (renderer, scope, helperName) => {
				
				// Find a helper
				let helper = this.hooks.findHelper(renderer, scope, helperName);
				if (!helper) throw new Error('There is no helper registered with the name "' + helperName + '"');

				// Create the wrapper
				let proxy = new HelperProxy(helperName, helper, this.helpers);
				return proxy;

			},

			invokeHelper: (morph, renderer, scope, visitor, params, attributeHash, helper, options) => {

				// Is it a component?
				if (helper instanceof ComponentDefinition) {

					// Call component hook
					return {
						value: this.hooks.component(morph, renderer, scope, helper, params, attributeHash, options, visitor)
					};

				} 

				// Do we have a morph?
				if (morph) {

					// Loop through params to hook up bindings
					_.each(params, (value) => {
						if (value instanceof Binding) {
							value.addMorph(morph, scope);
						}
					});

					// And the attribute
					_.each(attributeHash, (value) => {
						if (value instanceof Binding) {
							value.addMorph(morph, scope);
						}
					});

				}

				// Set arguments 
				helper.setArguments(params, attributeHash, options, morph, renderer, scope, visitor);

				// Invoke it once to see if the helper returns a value, or is a block-type helper
				let helperResult = helper.invoke();
				let helperValue;
				if (helperResult === undefined) {

					// No result, then we don't want to return a value
					helperValue = undefined;

				} else {

					// A value was returned, meaning this helper is used as a value getter, and might need
					// to be invoked again when bound values change: thus, return the proxy
					helperValue = helper;

				}	

				// Invoke the helper and give back the value
				return { 
					value: helperValue,
					link: !!helperValue
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
				
				// No known component?
				if (!definition) {

					// Do the component fallback.
					let element = renderer.dom.createElement(tagName);
					_.each(attributeHash, (value, key) => {
						element.setAttribute(key, renderer.hooks.getValue(value));
					});
					
					var fragment = render(options.default, renderer, scope, {}).fragment;
					element.appendChild(fragment);
					morph.setNode(element);
					return;

				}

				// Create a new scope and use the component as self
				var newScope = renderer.hooks.createScope(renderer, scope);
				
				// Are there attributes defined as an attribute?
				if (attributeHash && attributeHash.attributes) {
					
					// A binding?
					let attrs = attributeHash.attributes;
					if (attrs instanceof Binding) attrs = attrs.getValue();

					// A hash?
					if (attrs instanceof Object) {

						// Replace
						delete attributeHash.attributes;
						Utils.each(attrs, (value, key) => {
							attributeHash[key] = value;
						});

					}
				}
				
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
					definition.methods,
					this);
				newScope.self = component;

				// Now render it.
				component.render();
								
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
	
				// Is this a known component?
				if (Component.registry.has(path)) return 'component';

				// Nothing known.
				return false;

			},



			getBlock: (scope, key) => {

				// Is the block known?
				let block = scope.blocks[key];
				if (block) return block;

				// Are we inside a component?
				if (scope.self instanceof Component) {
					return scope.self.getSubTemplate(key);
				}
				
				// Nothing there
				return null;

			},

			getActionScope: (scope, key) => {

				// Check the scope
				if (scope.actions && scope.actions[key]) {

					return scope;

				} else if (scope.locals.actions && scope.locals.actions[key]) {

					// Use local action
					return scope.locals;

				} else if (scope.self.actions && scope.self.actions[key]) {

					// Use that
					return scope.self;

				} else if (scope.view && scope.view.actions && scope.view.actions[key]) {

					// Use the veiw
					return scope.view;

				} else {

					return false;

				}


			},

			getAction: (scope, key) => {

				let appliedScope = this.hooks.getActionScope(scope, key);
				if (appliedScope) {
					
					// Get the action
					return appliedScope.actions[key];

				}
				return false;

			},



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
					let actionCallback = renderer.hooks.getAction(scope, params[0]);
					if (!actionCallback) {

						// Lazy action?
						if (attributeHash.lazy === true) {

							// Use current scope so send action lazily
							actionCallback = (...args) => {
								scope.self.sendAction(params[0], args);
							};

						} else {

							// Undefined action.
							throw new Error(`Could not find action "${params[0]}" within the scope`);

						}

					}

					// Get action
					let parameters = params.slice(1);

					// Create action binding
					let binding = new ActionBinding(renderer, morph, params[0], actionCallback, parameters, attributeHash, scope.self);
					morph.actionBindings = binding;					

				},


				





			}, Hooks.keywords)

		}, Hooks);


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


export default Renderer;