import App from '~/Helpers/App';

/**
 * @module Dom
 */
class ComponentDefinition
{

	constructor(name, source, initCallback, renderer = null) {

		/**
		 * The name of the component. This is also the name you use
		 * in your templates, to insert the component.
		 * 
		 * @property name
		 * @type {string}
		 */
		this.name = name;

		/**
		 * The template source
		 *
		 * @property source
		 * @type {string}
		 */
		this.source = source;


		/**
		 * The method that is called when the Dom.Component instance is created.
		 * 
		 * @property initCallback
		 * @type {[type]}
		 */
		this.initCallback = initCallback;

		/**
		 * The Dom.Renderer instance that is used to render the component. This is also the
		 * renderer in which this component will be automatically registered as a helper.
		 *
		 * @property renderer
		 * @type {Dom.Renderer}
		 */
		this.renderer = renderer ? renderer : (App() ? App().config('renderer') : null);

		/**
		 * Indicates whether this component is already registere in a Dom.Renderer as a helper.
		 * 
		 * @property isRegistered
		 * @type {Boolean}
		 */
		this.isRegistered = false;

		// Register helper (only when there is already a renderer)
		// When there is no helper yet, we assume it is because the application is
		// not created yet. In that case, the Application will register all components
		// when it is started.
		if (this.renderer) this.registerHelper();

	}


	registerHelper(renderer = null) {

		// Renderer given?
		if (renderer) this.renderer = renderer;

		// Register the helper
		renderer.helpers[this.name] = (params, attributeHash, options, morph, renderer, scope, visitor) => {

			// Call the component hook
			renderer.hooks.component(morph, renderer, scope, this.name, params, attributeHash, options, visitor);

		}; 

	}

}

module.exports = ComponentDefinition;



