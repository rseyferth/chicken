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
	 * @param {Routing.Action} 		action 				The Action instance that rendered the content
	 * @param {string} 				content 			The (HTML) content to render
	 * @param {boolean}				setLoadingFalse		Whether to set the loading-state to false
	 * @chainable
	 */
	setActionContent(action, content, setLoadingFalse = true) {

		// Store action.
		this.currentAction = action;

		// Set HTML
		this.setContent(content);

		// No longer loading
		if (setLoadingFalse) this.setLoading(false);

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


}

ViewContainer.Classes = {
	Initialized: 'initialized',
	Loading: 'loading'
};
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