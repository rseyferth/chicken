import Action from "./Action";
import Application from "../Application";

export interface ControllerConstructor {
    new <T extends Controller>(action: Action, application? : Application): T;
}

export default class Controller
{

    static registry : Map<string, ControllerConstructor> = new Map();
    

    action : Action;
    application : Application;

	/**
	 * @class Routing.Controller
	 * 
	 * @constructor
	 * @param {Routing.Action} action  The routing action that leads to the creation of this controller
	 */
	constructor(action : Action, application? : Application) {

		this.action = action;
        this.application = application || Application.getInstance();

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