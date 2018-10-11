/**
 * @module Routing
 */
class Controller
{

	/**
	 * @class Routing.Controller
	 * 
	 * @constructor
	 * @param {Routing.Action} action  The routing action that leads to the creation of this controller
	 */
	constructor(action, application) {

		/**
		 * @property action
		 * @type {Routing.Action}
		 */
		this.action = action;

		/**
		 * @property application
		 * @type {Application}
		 */
		this.application = application;

	}



	////////////////
	// Properties //
	////////////////


	/**
	 * Request parameters
	 * 
	 * @property parameters
	 * @type {Map}
	 */
	get parameters() {
		return this.action.parameters;
	}

	/**
	 * The ViewContainer into which this controller action will render
	 * 
	 * @property viewContainer
	 * @type {Dom.ViewContainer}
	 */
	get viewContainer() {
		return this.action.viewContainer;
	}

	/**
	 * @property request
	 * @type {Routing.Request}
	 */
	get request() {
		return this.action.request;
	}

	/**
	 * @property route
	 * @type {Routing.Route} 
	 */
	get route() {
		return this.action.route;
	}


}

Controller.registry = new Map();



export default Controller;