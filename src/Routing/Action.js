import XRegExp from 'xregexp';
import Obj from '~/Core/Obj';

/**
 * @module Routing
 */
class Action extends Obj
{

	/**
	 * @class Routing.Action
	 * @extends Core.Obj
	 */
	constructor(targetViewContainer, controllerActionOrCallback, request) {

		super();

		////////////////
		// Attributes //
		////////////////

		/**
		 * The name of the ViewContainer that this action is targeting.
		 * 
		 * @property targetViewContainer
		 * @type {string}
		 */
		this.targetViewContainer = targetViewContainer;


		/**
		 * The Request instance that was used to create this action
		 * 
		 * @property request
		 * @type {Routing.Request}
		 */
		this.request = request;


		/**
		 * The Route that defined this action
		 *
		 * @property route
		 * @type {Routing.Route}
		 */
		this.route = null;


		/**
		 * The Route that matched the Request
		 *
		 * @property matchedRoute
		 * @type {Routing.Route}
		 */
		this.matchedRoute = null;


		/**
		 * The RouteMatch that this Action is a part
		 *
		 * @property routeMatch
		 * @type {Routing.RouteMatch}
		 */
		this.routeMatch = null;


		/**
		 * The instance of the Controller that has been created by 
		 * this action.
		 * 
		 * @property controller
		 * @type {Routing.Controller}
		 */
		this.controller = null;


		/**
		 * The name of the Controller class used by this action
		 * 
		 * @property controllerClass
		 * @type {string}
		 */
		this.controllerClass = null;

		/**
		 * The name of the Controller method used by this action
		 * 
		 * @property controllerMethod
		 * @type {string}
		 */
		this.controllerMethod = null;


		/**
		 * A callback function, when the route did not configure
		 * a Controller to be used, but an inline callback instead.
		 * 
		 * @property callback
		 * @type {function}
		 */
		this.callback = false;


		/**
		 * A map of request parameters that are supplied to this action.
		 * 
		 * @property parameters
		 * @type {Map}
		 */
		this.parameters = new Map();


		/**
		 * An array of request parameters, in the order of the route's
		 * pattern definition
		 *
		 * @property parameterArray
		 * @type {Array}
		 */
		this.parameterArray = [];


		/**
		 * An array of other Actions that this Action depends on, 
		 * meaning it will wait for them to finish, before executing.
		 *
		 * This is useful when you have a route where the second action
		 * renders into a ViewContainer that is created by the first action.
		 * Child routes will automatically wait for the parent route to finish
		 * before running it's own actions.
		 * 
		 * @property dependsOn
		 * @type {Array}
		 */
		this.dependsOn = [];




		///////////////////////////
		// Check passed argument //
		///////////////////////////

		if (typeof controllerActionOrCallback === 'string') {

			// Parse controller name
			var match = XRegExp.exec(controllerActionOrCallback, Action.controllerActionRegExp);
			if (!match) throw new TypeError('Invalid action string: ' + controllerActionOrCallback + '. Use controller@method format.');
			
			// Store this
			this.controllerClass = match.class;
			this.controllerAction = match.action;



		} else if (controllerActionOrCallback === 'function') {

			// Store it
			this.callback = controllerActionOrCallback;

		} else {

			throw new TypeError('Unknown controllerActionOrCallback value');

		}



	}

}

Action.controllerActionRegExp = XRegExp('^(?<class>[A-Z][a-zA-Z0-9\-\.]+)@(?<action>[a-z][a-zA-Z0-9\_]+)$');


module.exports = Action;
