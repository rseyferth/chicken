import Obj from '~/Core/Obj';
import Application from '~/Application';

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
	constructor($element, application = null) {

		super();

		/**
		 * @property application
		 * @type {Application}
		 */
		this.application = application ? application : Application.getInstance();

		/**
		 * The jQuery element that is the ViewContainer
		 * 
		 * @property $element
		 * @type {jQuery}
		 */
		this.$element = $element;


	}



	setContent(content) {

		// Set it
		this.$element.html(content);
		this.trigger('content', content);

		// Update view containers
		this.application.updateViewContainers(this.$element);

	}


}

module.exports = Element;