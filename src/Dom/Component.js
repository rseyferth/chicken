import $ from 'jquery';
import _ from 'underscore';
import HTMLBars from 'htmlbars-standalone';


import Obj from '~/Core/Obj';
import View from '~/Dom/View';

/**
 * @module Dom
 */
class Component extends View
{

	/**
	 * @class Dom.Component
	 * @extends Dom.View
	 */
	constructor(name, source, morph, scope, parameters, attributeHash, visitor, subTemplates, initCallback = null, renderer = null) {

		super(source, null, renderer);

		this.name = name;

		this.morph = morph;

		this.scope = scope;

		this.parameters = parameters;
		this.attributes = attributeHash;
		this.visitor = visitor;

		this.subTemplates = subTemplates;

		this.tagName = 'div';
		this.cssClass = false;

		this.element = null;


		// Make attributes available
		this.with(this.attributes);


		// Dom event listeners
		this.dom = new Obj();


		// Definition callback?
		if (initCallback) {
			initCallback.apply(this);
		}


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
		callback.apply(actionScope instanceof View ? actionScope : this, params);


	}

	
	renderSync() {

		// Create the template
		try {

			// Render it
			this.renderResult = this.getTemplate().render(this, this.renderer, {
				scope: this.scope,
				template: this.subTemplates.default
			});
			this.documentFragment = this.renderResult.fragment;

		} catch (error) {
			this.rejectPromise('render', error);
			return;
		}


		// Study the object
		this.study(() => {
			this.scheduleRevalidate();
		});

		// Create the element
		this.element = document.createElement(this.tagName);
		_.each(this.attributes, (value, attr) => {
			this.element.setAttribute(attr, value);
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
		this.resolvePromise('render', this.documentFragment);

		// Enable DOM events
		this.enableDomEvents();

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

		let block = HTMLBars.Util.Template.blockFor(
			HTMLBars.Runtime.render,
			this.subTemplates[key],
			{
				scope: this.scope
			}
		);

		return block;

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


module.exports = Component;