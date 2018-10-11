import $ from 'jquery';
import _ from 'underscore';
import inflection from 'inflection';

import render from 'htmlbars/dist/cjs/htmlbars-runtime/render';
import { blockFor } from 'htmlbars/dist/cjs/htmlbars-util/template-utils';


import Obj from '../Core/Obj';
import View from '../Dom/View';

/**
 * @module Dom
 */
class Component extends View
{

	/**
	 * @class Dom.Component
	 * @extends Dom.View
	 */
	constructor(name, source, morph, scope, parameters, attributeHash, visitor, subTemplates, initCallback = null, methods = {}, renderer = null) {

		super(source, null, renderer);


		/**
		 * The tag-name that was used to initialize this component
		 * 
		 * @property name
		 * @type {string}
		 */
		this.name = name;

		/**
		 * The HTMLBars morph that contains this component
		 * 
		 * @property morph
		 * @type {HTMLBarsMorph}
		 */
		this.morph = morph;

		/**
		 * The HTMLBars scope for this component
		 * 
		 * @property scope
		 * @type {Object}
		 */
		this.scope = scope;

		/**
		 * The list of non-keyed parameters used in this component
		 * 
		 * @property parameters
		 * @type {array}
		 */
		this.parameters = parameters;

		/**
		 * The attribute hash
		 *
		 * @property attributes
		 * @type {object}
		 */
		this.attributes = {};
		_.each(attributeHash, (value, key) => {
			
			// Autocast
			if (value === 'true') {
				value = true;
			} else if (value === 'false') {
				value = false;
			}

			// Set it.
			this.attributes[inflection.camelize(key.split('-').join('_'), true)] = value;
			
		});

		/**
		 * The HTMLBars visitor that was used to initialize this component
		 *
		 * @property visitor
		 * @type {object}
		 */
		this.visitor = visitor;

		/**
		 * Sub-templates used to yield within the component
		 *
		 * @property subTemplates
		 * @type {object}
		 */
		this.subTemplates = subTemplates;


		/**
		 * The tagName that will be used when creating this component. The default
		 * value is 'div', but this can be overruled in your handlebar template, or
		 * in the initCallback of the component.
		 * 
		 * @property tagName
		 * @type {String}
		 */
		this.tagName = 'div';

		/**
		 * The CSS class(es) that will be added to the component upon creation. You can set
		 * this value in the initCallback of the component.
		 *
		 * @property cssClass
		 * @type {string}
		 */
		this.cssClass = false;


		/**
		 * @property element
		 * @type {DOMElement}
		 */
		this.element = null;


		/**
		 * The component instance that wrap this component, if any.
		 * 
		 * @property parentComponent
		 * @type {Dom.Component}
		 */
		this.parentComponent = this.scope.component;
		this.setSilently('parent', this.parentComponent);

		// Do I have a parent?
		if (this.parentComponent) {
			this.parentComponent.components[this.getId()] = this;
			this.attributes._ = this.parentComponent;
		}



		/**
		 * @property view
		 * @type {Dom.View}
		 */ 
		this.view = this.scope.view;
		if (this.view) {
			this.view.components[this.getId()] = this;
			if (!this.parentComponent) this.set('_', this.view);
			this.attributes.$ = this.view;
		}
		
		/**
		 * The dom-object can be used to listen to dom events on the event
		 * 
		 * @property dom
		 * @type {Core.Obj}
		 */
		this.dom = new Obj();


		/**
		 * @property isDestroyed
		 * @type {Boolean}
		 */
		this.isDestroyed = false;


		// Make attributes available
		this.with(this.attributes);


		// Add methods
		$.extend(this, methods);
		

		// Before destroy
		this.hooks.beforeDestroy = [];

		// Definition callback?
		if (initCallback) {
			initCallback.apply(this);
		}


	}



	getHelper(key) {
		
		// Me?
		if (this.helpers[key]) return this.helpers[key];

		// Parent component?
		if (this.parentComponent) return this.parentComponent.getHelper(key);

		// View
		if (this.view) return this.view.getHelper(key);

		return false;
		
	}


	findParentComponent(key) {

		// My parent?
		if (this.parentComponent) {

			// Am I the one you're looking for?
			if (this.parentComponent.name === key) return this.parentComponent;

			// Look higher up
			return this.parentComponent.findParentComponent(key);

		} else {

			// No dice.
			return false;

		}
	}


	getId() {

		// Already set?
		if (!this._id) {

			// Set as attribute
			let id = this.attributes.id;
			if (id) {
				this._id = id;
			} else {

				// Do it by name
				let name = inflection.camelize(this.name.split('-').join('_'), true);
				if (Component.instanceCounts[name] === undefined) Component.instanceCounts[name] = 0;
				Component.instanceCounts[name]++;

				this._id = name + Component.instanceCounts[name];

			}

		}
		return this._id;

	}


	sendAction(name = null, ...args) {

		// No name given?
		if (name === null) {
			name = this.attributes.action;
		}

		// Get the callback.
		let actionScope = this.renderer.hooks.getActionScope(this.scope, name);
		if (!actionScope) throw new Error('[Component ' + this.name + '] Could not find action "' + name + '" within the scope');
		let callback = actionScope.actions[name];

		// Now call it.
		var params = _.flatten([
			_.map(args, (value) => {
				return this.renderer.hooks.getValue(value);
			}), 
			this,	
			actionScope
		]);
		return callback.apply(actionScope instanceof View ? actionScope : this, params);

	}

	
	renderSync() {

		// Before render hook
		_.each(this.hooks.beforeRender, (cb) => {
			cb.apply(this);
		});

		// Create the template
		try {

			// Render it
			this.renderResult = this.getTemplate().render(this, this.renderer, {
				scope: this.scope,
				template: this.subTemplates.default
			});
			this.documentFragment = this.renderResult.fragment;

		} catch (error) {

			// Enrich error with element-path
			let path = [];
			let $el = $(this.renderer.currentMorph.element);
			$el.parents().addBack().not('html').each(function() {
				let entry = this.tagName.toLowerCase();
				if (this.className) {
					entry += '.' + this.className.replace(/ /g, '.');
				}
				path.push(entry);
			});
			path = path . join( ' > ');

			// Get template source
			let source = this.source;
			if (this.view) source = `${this.name} in ${this.view.source}`;
			let msg = `Error in template "${source}" at "${path}":\n\t${error}\n`;

			// Add error stack			
			/* eslint-disable no-console */
			try {
				console.warn(error.stack);
			} catch (e) { /* Nothing */}
			/* eslint-enable no-console */
			
			this.rejectPromise('ready', msg);
			return;
		}


		// Study the object
		this.study(() => {
			this.scheduleRevalidate();
		});

		// Create the element
		this.element = document.createElement(this.tagName);
		_.each(this.attributes, (value, key) => {

			// Check value type
			if (value === 'true') value = true;
			if (value === 'false') value = false;

			if (!(value instanceof Object) && $.isNumeric(value) && !/^0/.test(value)) value = parseFloat(value);
			if (value !== this.attributes[key]) {
				this.attributes[key] = value;
			}

			// Is it a useful value?
			if (key !== 'title' && (typeof value === 'string' || typeof value === 'number') && value.length < 64) {
				let attrKey = inflection.underscore(key).split('_').join('-');
				this.element.setAttribute(attrKey, value);
			}

		});

		this.$element = $(this.element);
		this.$element.append(this.documentFragment);

		// CSS class
		if (this.cssClass) this.$element.addClass(this.cssClass);

		// Trigger beforeAdded
		this.trigger('beforeAdd', this.$element);

		// Put element in result
		this.morph.setNode(this.$element[0]);

		// Done.
		this.trigger('added', this.$element);

		// Enable DOM events
		this.enableDomEvents();

		// Find child components
		if (_.size(this.components) > 0) {

			// Wait for the children to complete first
			let promises = _.map(this.components, (child) => {
				return child.getPromise('ready');
			});
			Promise.all(promises).then(() => {
				this.resolvePromise('ready');
				View.any.trigger('render', this.$element);
			});

		} else {

			// We are ready now.
			this.resolvePromise('ready');
			View.any.trigger('render', this.$element);

		}

	}

	enableDomEvents() {

		// Loop through callbacks
		this.dom._listeners.forEach((callbacks, name) => {
			
			// Proper event?
			if (!_.contains(Component.DomEventNames, name)) {
				throw new Error('The "' + name + '" event is not a valid DOM event.');
			}

			// Listen and connect.
			this.$element.on(name, (...args) => {
				args.unshift(name);
				this.dom.trigger.apply(this.dom, args);				
			});

		});

	}



	getSubTemplate(key) {

		let block = blockFor(
			render,
			this.subTemplates[key],
			{
				scope: this.scope
			}
		);

		return block;

	}


	getAttribute(key, defaultValue = null) {

		let value = this.attributes[key];
		if (value === undefined) value = defaultValue;
		return value;

	}

	getAttributes(prefix = false) {

		// Get all keys with uiX
		let result = {};
		let regex = prefix ? new RegExp('^' + prefix + '[A-Z]') : false;
		_.each(this.attributes, (value, key) => {

			// Prefixed?
			if (regex) {

				// Match?
				if (!regex.test(key)) return;

				// Remove it
				key = _.decapitalize(key.substr(prefix.length));

			}

			// Value
			if (value !== null && typeof value === 'object' && typeof value.getValue === 'function') {
				value = value.getValue();
			}

			// Set it
			result[key] = value;

		});

		return result;

	}

	get(key) {

		// Do basics first
		let value = super.get(key);

		// Nothing?
		if (value === undefined) {

			// Bubble up.
			if (this.parentComponent) {
				
				return this.parentComponent.get(key);

			} else if (this.view) {

				return this.view.get(key);
				
			}

		}

		return value;

	}


	/**
	 * Set default values for component attributes. Use this in the initCallback.
	 *
	 * @method defaults
	 * @param  {Object} hash   Key/value pairs
	 * @chainable
	 */
	defaults(hash) {

		this.withoutNotifications(() => {
			_.each(hash, (value, key) => {

				// Set?
				if (this.attributes[key] === undefined) {
					this.set(key, value);
				}

			});
		});


	}



	beforeDestroy(callback) {
		this.hooks.beforeDestroy.push(callback);
		return this;
	}


	destroy() {

		// I am destroyed
		if (this.isDestroyed) return this;
		this.isDestroyed = true;

		// Call the hooks
		_.each(this.hooks.beforeDestroy, (cb) => {
			cb.apply(this);
		});
		return this;
		
	}




}


Component.DomEventNames = [
	
	// Touch events
	'touchStart', 'touchMove', 'touchEnd', 'touchCancel',

	// Keyboard
	'keyDown', 'keyUp', 'keyPress',

	// Mouse
	'mouseDown', 'mouseUp', 'contextMenu', 'click', 'doubleClick', 'mouseMove', 'focusIn', 'focusOut', 'mouseEnter', 'mouseLeave',

	// Form
	'submit', 'change', 'focusIn', 'focusOut', 'input',

	// HTML5
	'dragStart', 'drag', 'dragEnter', 'dragLeave', 'dragOver', 'dragEnd', 'drop'

];


Component.registry = new Map();

Component.instanceCounts = {};

export default Component;