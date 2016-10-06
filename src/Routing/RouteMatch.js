import _ from 'underscore';

import Action from '~/Routing/Action';

/**
 * @module Routing
 */
class RouteMatch
{

	/**
	 * When a Request is matched by a Route, a RouteMatch is created,
	 * containing all the information necessary to process the request. 
	 * The Router will use the RouteMatch to execute all the actions defined
	 * in the route(s).
	 * 
	 * @class Routing.RouteMatch
	 *
	 * @constructor
	 * @param {Routing.Route} 		route 			The route that matched
	 * @param {array}  				regExpMatch 	The result from the XRegExp.exec call
	 * @param {Routing.Request}		request 		The request that made this RouteMatch possible
	 */
	constructor(route, regExpMatch, request) {

		/**
		 * The Route that matched
		 *
		 * @property route
		 * @type {Routing.Route}
		 */
		this.route = route;

		/**
		 * The result from the XRegExp.exec call when the Route was matched
		 * 
		 * @property regExpMatch
		 * @type {array}
		 */
		this.regExpMatch = regExpMatch;

		/**
		 * The request that made this RouteMatch possible
		 *
		 * @property request
		 * @type {Routing.Request}
		 */
		this.request = request;

		/**
		 * The actions that are part of this match,
		 * keyed by the target ViewContainer
		 * 
		 * @property actions
		 * @type {Map}	
		 */
		this.actions = new Map();


		/**
		 * The parameters from the Request and matched route
		 *
		 * @property parameters
		 * @type {Map}
		 */
		this.parameters = new Map();



		////////////////////
		// Create actions //
		////////////////////

		// Read parameters from match
		_.each(route.parameters, (paramName) => {
			this.parameters.set(paramName, regExpMatch[paramName]);
		});
		

		// Start with the matched route
		this._readActionsFromRoute(route);

	}

	_readActionsFromRoute(route) {

		// Collect parameters from route
		var params = new Map();
		var paramArray = [];
		_.each(route.parameters, (paramName) => {
			paramArray.push(this.parameters.get(paramName));
			params.set(paramName, this.parameters.get(paramName));
		});

		// Get actions
		var myActions = {};
		_.each(route.getActions(), (routeAction, targetViewContainer) => {

			// Is there already an action defined for this target
			if (this.actions.has(targetViewContainer)) return;

			// Make it.
			var action = new Action(targetViewContainer, routeAction, this.request);
			
			// Set routes
			action.route = route;
			action.matchedRoute = this.route;
			action.routeMatch = this;

			// Set parameters
			action.parameters = params;
			action.parameterArray = paramArray;

			// Add it.
			myActions[targetViewContainer] = action;

		});

		// Make any actions that are already there dependent on the new ones, 
		// because these actions are the parent(s) of the existing actions.
		this.actions.forEach((previousAction) => {
			_.each(myActions, (myAction) => {
				previousAction.dependsOn.push(myAction);
			});
		});	

		// Add these actions
		let actionsToMakeDependentOn = [];
		_.each(myActions, (myAction, targetViewContainer) => {
			
			// My this action dependent on previous actions defined in this route
			_.each(actionsToMakeDependentOn, (depAction) => {
				myAction.dependsOn.push(depAction);
			});

			// Add the action to my actions
			this.actions.set(targetViewContainer, myAction);
			actionsToMakeDependentOn.push(myAction);

		});

		// Now look into the parent
		if (route.parentRoute) {
			this._readActionsFromRoute(route.parentRoute);
		}

		// We're done!
		return this.actions;



	}


}


module.exports = RouteMatch;
