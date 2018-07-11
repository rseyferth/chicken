import $ from 'jquery';
import _ from 'underscore';
import inflection from 'inflection';

import { blockFor } from 'htmlbars/dist/cjs/htmlbars-util/template-utils';
import { render } from 'htmlbars/dist/cjs/htmlbars-runtime/render';
import Morph from 'htmlbars/dist/cjs/htmlbars-runtime/morph';

import { Dictionary } from '../../node_modules/@types/lodash';
import View from './View';
import { Scope } from './Renderer';
import Obj from '../Core/Obj';
import ComponentDefinition from './ComponentDefinition';
import Renderer from './Renderer';

/**
 * @module Dom
 */
export default class Component extends View
{

    name : string;
    morph : Morph;
    scope : Scope;
    parameters : any[];
    attributes : Dictionary<any>;
    visitor : any;
    subTemplates : any;

    tagName : string = 'div';
    cssClass? : string;
    element? : HTMLElement;

    parentComponent? : Component;
    view? : View;

	dom : Obj;
	
	_id? : string;

    isDestroyed : boolean = false;



	/**
	 * @class Dom.Component
	 * @extends Dom.View
	 */
	constructor(name : string, source : string, morph : Morph, scope : Scope, parameters : any[], attributeHash : Dictionary<any>, visitor : any, subTemplates : any, initCallback? : Function, methods : Dictionary<Function> = {}, renderer? : Renderer) {

		super(source, undefined, renderer);

        this.name = name;
        this.morph = morph;
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

		this.visitor = visitor;
		this.subTemplates = subTemplates;



		/**
		 * The component instance that wrap this component, if any.
		 * 
		 * @property parentComponent
		 * @type {Dom.Component}
		 */
        if (this.scope.component) {
            this.parentComponent = this.scope.component;
            this.setSilently('parent', this.parentComponent);
        }

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


	getId() : string {

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
		return this._id!;

	}


	sendAction(name? : string, ...args : any[]) {

		// No name given?
		if (!name) {
			name = this.attributes.action;
		}

		// Get the callback.
		let actionScope : Scope = this.renderer.hooks.getActionScope(this.scope, name);
		if (!actionScope) throw new Error(`[Component ${this.name}] Could not find action "${name}" within the scope`);
		let callback : Function = actionScope.actions![name!];

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

	
	renderSync() : Component {

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
			let path : string[] = [];
			let $el = $(this.renderer.currentMorph.element);
			$el.parents().addBack().not('html').each(function() {
				let entry = this.tagName.toLowerCase();
				if (this.className) {
					entry += '.' + this.className.replace(/ /g, '.');
				}
				path.push(entry);
			});
			let stringPath : string = path.join(' > ');

			// Get template source
			let source = this.source;
			if (this.view) source = `${this.name} in ${this.view.source}`;
			let msg = `Error in template "${source}" at "${stringPath}":\n\t${error}\n`;

			this.rejectPromise('ready', msg);
			return this;
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

			if (!(value instanceof Object) && $.isNumeric(value) && !/^0/.test(value.toString())) value = parseFloat(value.toString());
			if (value !== this.attributes[key]) {
				this.attributes[key] = value;
			}

			// Is it a useful value?
			if (key !== 'title' && (typeof value === 'string' || typeof value === 'number') && value.toString().length < 64) {
				let attrKey = inflection.underscore(key).split('_').join('-');
				this.element!.setAttribute(attrKey, value.toString());
			}

		});

		this.$element = $(this.element);
		this.$element.append(this.documentFragment!);

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

		return this;

	}

	enableDomEvents() {

		// Loop through callbacks
		this.dom.listeners.forEach((callbacks, name) => {
			
			// Proper event?
			if (!_.contains(Component.DomEventNames, name)) {
				throw new Error('The "' + name + '" event is not a valid DOM event.');
			}

			// Listen and connect.
			this.$element!.on(name, (...args) => {
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

	getAttributes(prefix? : string) {

		// Get all keys with uiX
		let result = {};
		let regex : RegExp | false = prefix ? new RegExp('^' + prefix + '[A-Z]') : false;
		_.each(this.attributes, (value, key) => {

			// Prefixed?
			if (regex) {

				// Match?
				if (!(<RegExp>regex).test(key)) return;

				// Remove it
				if (prefix) key = key.substr(prefix.length).toLowerCase();

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



    
    static DomEventNames : string[] = [
        
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
    
    static registry : Map<string, ComponentDefinition> = new Map();
    
    static instanceCounts : Dictionary<number> = {};
    
}
