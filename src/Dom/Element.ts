import _, { Dictionary } from 'underscore';
import Obj from '../Core/Obj';


/**
 * @module Dom
 */
export default class Element extends Obj
{

    static Hooks : Dictionary<Function[]> = {
        beforeRender: [],
	    afterRender: []
    };

    static registerHook(callback : Function, type : string = 'afterRender') : boolean {
        Element.Hooks[type].push(callback);
        return true;	
    };


    $element : JQuery;

	/**
	 * @class Dom.Element
	 * @extends Core.Obj
	 *
	 * @constructor
	 * @param {jQuery} $element
	 * @param {Application} [application]
	 */
	constructor($element : JQuery) {

		super();

		this.$element = $element;

	}


	setContent(content : string) : void {

		// Fire the before hooks.
		this._fireHooks('beforeRender');

		// Set it
		this.$element.html(content);
		this.trigger('content', content);

		// Fire the after hooks
		this._fireHooks('afterRender');

	}


	_fireHooks(type : string) : void {

		_.each(Element.Hooks[type], (callback) => {

			// Fire it.
			callback.apply(this, [this.$element, this]);

		});

	}

}
