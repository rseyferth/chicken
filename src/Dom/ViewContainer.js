import Obj from '~/Core/Obj';

/**
 * @module Dom
 */
class ViewContainer extends Obj
{

	/**
	 * A ViewContainer is en DomElement in your application that
	 * can contain a rendered View. Each ViewContainer needs a 
	 * unique name, and the main ViewContainer for the application
	 * is always called 'main'.
	 * 
	 * @class Dom.ViewContainer 
	 * @extends Core.Object
	 *
	 * @constructor
	 * @param {jQuery} $element
	 */
	constructor($element) {

		super();

		////////////////
		// Properties //
		////////////////

		/**
		 * The unique name you can use in your routes to target this
		 * ViewContainer.
		 * 
		 * @property name
		 * @type {string}
		 */
		this.name = ViewContainer.getViewName($element);


		/**
		 * The jQuery element that is the ViewContainer
		 * 
		 * @property $element
		 * @type {jQuery}
		 */
		this.$element = $element;


	}

	/**
	 * Initialize the ViewContainer. 
	 *
	 * @method initialize
	 * @chainable
	 */
	initialize() {
		this.$element.addClass('initialized');
		return this;
	}


}

ViewContainer.ElementSelector = 'view:not(.initialized),[view]:not(.initialized)';
ViewContainer.DefaultName = 'main';

ViewContainer.getViewName = ($element) => {

	// Get it either from the name-attr or view-attr
	var name = $element.is('view') ? $element.attr('name') : $element.attr('view');

	// No?
	if (!name) name = ViewContainer.DefaultName;

	return name;

};



module.exports = ViewContainer;