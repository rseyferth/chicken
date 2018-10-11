import _ from 'underscore';
import Obj from '../Core/Obj';

/**
 * @module Dom
 */
class Element extends Obj
{
	/**
	 * @class Dom.Element
	 * @extends Core.Obj
	 *
	 * @constructor
	 * @param {jQuery} $element
	 * @param {Application} [application]
	 */
	constructor($element) {

		super();

		/**
		 * The jQuery element that is the ViewContainer
		 * 
		 * @property $element
		 * @type {jQuery}
		 */
		this.$element = $element;


	}



	setContent(content) {

		// Fire the before hooks.
		this._fireHooks('beforeRender');

		// Set it
		this.$element.html(content);
		this.trigger('content', content);

		// Fire the after hooks
		this._fireHooks('afterRender');

	}


	_fireHooks(type) {

		_.each(Element.Hooks[type], (callback) => {

			// Fire it.
			callback.apply(this, [this.$element, this]);

		});

	}

}


Element.registerHook = (callback, type = 'afterRender') => {
	Element.Hooks[type].push(callback);
	return true;	
};

Element.Hooks = {
	beforeRender: [],
	afterRender: []
};


export default Element;