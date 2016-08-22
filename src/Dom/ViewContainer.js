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
	 * is always called 'app'.
	 * 
	 * @class Dom.ViewContainer 
	 * @extends Core.Object
	 */
	constructor(name, $element) {

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
		this.name = name;


		/**
		 * The jQuery element that is the ViewContainer
		 * 
		 * @property $element
		 * @type {jQuery}
		 */
		this.$element = $element;

	}


}

module.exports = ViewContainer;