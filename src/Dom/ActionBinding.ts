import _ from 'underscore';
import $ from 'jquery';
import Uuid from 'uuid-lib';
import { Dictionary } from '../../node_modules/@types/lodash';
import Morph from 'htmlbars/dist/cjs/htmlbars-runtime/morph';
import View from './View';
import Renderer from './Renderer';

/**
 * @module Dom
 */
export default class ActionBinding
{

    renderer : Renderer;
    morph : Morph;
    actionName : string;
    actionHandler : Function;
    parameters : string[];
    options : Dictionary<any>;
    view : View;

    eventName : string;

    isListening : boolean = false;
    $element? : JQuery;

    id : string;


	/**
	 * @class Dom.ActionBinding
	 * 
	 * @constructor
	 */
	constructor(renderer : Renderer, morph : Morph, actionName : string, actionHandler : Function, parameters : string[], options : Dictionary<any>, view : View) {

		this.renderer = renderer;
        this.morph = morph;
		this.actionName = actionName;
        this.actionHandler = actionHandler;

		this.options = _.defaults(options, {
			preventDefault: true
		});

		this.parameters = parameters;

		this.view = view;

		this.eventName = options.on ? options.on : ActionBinding.getDefaultEventName(morph.element);
		this.isListening = false;

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
    
    static registry : Map<string, ActionBinding> = new Map();
    static register(binding : ActionBinding) : string {
    
        // Generate id
        var id = Uuid.raw();
        ActionBinding.registry.set(id, binding);
        return id;
    
    };
    static get(id : string) : ActionBinding | undefined {
        return ActionBinding.registry.get(id);
    };
    
    
    static getDefaultEventName(element : HTMLElement) : string {
    
        // Specific one for this tag?
        var eventName = ActionBinding.DefaultEventNames[element.tagName.toLowerCase()];
    
        // Or the old click.
        if (!eventName) eventName = 'click';
        return eventName;
    
    
    };
    static DefaultEventNames : Dictionary<string> = {
    
        input: 'change keyup paste',
        select: 'change',
        form: 'submit'	
    };


}    
