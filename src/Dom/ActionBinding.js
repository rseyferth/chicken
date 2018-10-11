import _ from 'underscore';
import $ from 'jquery';
import Uuid from 'uuid-lib';

/**
 * @module Dom
 */
class ActionBinding
{

	/**
	 * @class Dom.ActionBinding
	 * 
	 * @constructor
	 */
	constructor(renderer, morph, actionName, actionHandler, parameters, options, view) {

		/**
		 * @property renderer
		 * @type {Dom.Renderer}
		 */
		this.renderer = renderer;

		/**
		 * @property morph
		 * @type {HTMLBarsMorph}
		 */
		this.morph = morph;

		/**
		 * The name of the action on the view
		 * 
		 * @property actionName
		 * @type {string}
		 */
		this.actionName = actionName;

		/**
		 * The function to call when the action is executed
		 * 
		 * @property actionHandler
		 * @type {function}
		 */
		this.actionHandler = actionHandler;

		/**
		 * @property options
		 * @type {object}
		 */
		this.options = _.defaults(options, {
			preventDefault: true
		});

		/**
		 * The parameters that will be passed along to the action handler.
		 * 
		 * @property parameters
		 * @type {array}
		 */
		this.parameters = parameters;

		/**
		 * @property view
		 * @type {Dom.View}
		 */
		this.view = view;


		/**
		 * The name of the event that is listened to on the element.
		 * When not specifically configured in the binding itself, a default
		 * event will be decided on, based on the element tag name. 
		 * 
		 * @property eventName
		 * @type {string}
		 */
		this.eventName = options.on ? options.on : ActionBinding.getDefaultEventName(morph.element);
		
		/**
		 * Indicator whether the binding is applied
		 * to the element
		 * 
		 * @property isListening
		 * @type {Boolean}
		 */
		this.isListening = false;


		/**
		 * @property $element
		 * @type {jQuery}
		 */
		this.$element = null;

		/**
		 * The unique identifier for this ActionBinding. This is used
		 * by the Helper to retrieve this instance and automatically
		 * generated in the constructor.
		 * 
		 * @property id
		 * @type {string}
		 */
		this.id = ActionBinding.register(this);

		// Store this binding on the element
		morph.element.setAttribute('data-chicken-action', this.id);



	}

	apply() {

		// Already applied?
		if (this.isListening === true) return this;
		this.isListening = true;


		// Get element
		this.$element = $(this.morph.element);
		this.$element.on(this.eventName, (e) => {

			// Prevent default?
			if (this.options.preventDefault) e.preventDefault();

			// Call the handler
			var params = _.flatten([
				_.map(this.parameters, (value) => {
					return this.renderer.hooks.getValue(value);
				}), 
				this, 
				this.view,
				e
			]);
			this.actionHandler.apply(this.view, params);

		});

		return this;

	}

}

ActionBinding.registry = new Map();
ActionBinding.register = (binding) => {

	// Generate id
	var id = Uuid.raw();
	ActionBinding.registry.set(id, binding);
	return id;

};
ActionBinding.get = (id) => {
	return ActionBinding.registry.get(id);
};


ActionBinding.getDefaultEventName = (element) => {

	// Specific one for this tag?
	var eventName = ActionBinding.DefaultEventNames[element.tagName.toLowerCase()];

	// Or the old click.
	if (!eventName) eventName = 'click';
	return eventName;


};
ActionBinding.DefaultEventNames = {

	input: 'change keyup paste',
	select: 'change',
	form: 'submit'	
};



export default ActionBinding;