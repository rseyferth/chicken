import App from '../Helpers/App';

/**
 * @module Dom
 */
class ComponentDefinition
{

	constructor(name, source, initCallback, methods = {}, renderer = null) {

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
		 * Methods to add to the component prototype.
		 * 
		 * @property methods
		 * @type {object}
		 */
		this.methods = methods;

	}





}

export default ComponentDefinition;



