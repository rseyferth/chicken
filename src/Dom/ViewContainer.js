import Obj from '~/Core/Obj';
import Element from '~/Dom/Element';

/**
 * @module Dom
 */
class ViewContainer extends Element
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
	 * @param {Application} application
	 */
	constructor($element, application) {

		super($element, application);

		// Private props
		this._isLoading = false;
		

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
		 * The Routing.Action that rendered the content that is currently
		 * in this ViewContainer
		 * 
		 * @property currentAction
		 * @type {Routing.Action}
		 */
		this.currentAction = null;


		this.currentView = null;


	}

	/**
	 * Initialize the ViewContainer. 
	 *
	 * @method initialize
	 * @chainable
	 */
	initialize() {
		this.$element.addClass(ViewContainer.Classes.Initialized);
		return this;
	}


	/**
	 * @method setActionContent
	 * @param {string} 				content 			The (HTML) content to render
	 * @param {boolean}				setLoadingFalse		Whether to set the loading-state to false
	 * @chainable
	 */
	setContent(content, setLoadingFalse = true) {

		// Set HTML
		super.setContent(content);

		// Apply hooks
		ViewContainer.any.trigger('render', this);

		// No longer loading
		if (setLoadingFalse) this.setLoading(false);

		return this;

	}

	setView(view) {

		this.currentView = view;
		return this;

	}

	setAction(action) {
		this.currentAction = action;
		return this;
	}



	setLoading(loading = true) {
		this._isLoading = loading;
		this.$element.toggleClass(ViewContainer.Classes.Loading, loading);
		return this;
	}


	isLoading() {
		return this._isLoading;
	}

	isInDom() {

		return this.$element.closest(document.documentElement).length > 0;

	}


}

ViewContainer.Classes = {
	Initialized: 'initialized',
	Loading: 'loading'
};
ViewContainer.ElementSelector = 'view-container:not(.initialized),[view-container]:not(.initialized)';
ViewContainer.DefaultName = 'main';

ViewContainer.getViewName = ($element) => {

	// Get it either from the name-attr or view-attr
	var name = $element.is('view-container') ? $element.attr('name') : $element.attr('view-container');

	// No?
	if (!name) name = ViewContainer.DefaultName;

	return name;

};

ViewContainer.any = new Obj();


module.exports = ViewContainer;