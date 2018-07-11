import _, { Dictionary } from 'underscore';
import QueryString from 'query-string';
import Route from './Route';
import Action from './Action';
import Request from './Request';
import { uidFor } from '../Helpers/Utils';

/**
 * @module Routing
 */
export default class RouteMatch
{

    route : Route;
    regExpMatch : Dictionary<string>;
    request : Request;
    actions : Map<string, Action>;
    parameters : Map<string, string>;
    query : Dictionary<string>;

	constructor(route : Route, regExpMatch : Dictionary<string>, request : Request) {

		this.route = route;
		this.regExpMatch = regExpMatch;
		this.request = request;

		this.actions = new Map();
		this.parameters = new Map();

		this.query = QueryString.parse(window.location.search);

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


	/**
	 * Handle leaving this RouteMatch
	 *
	 * @method leave
	 * @param  {Routing.RouteMatch} toRoute The RouteMatch we're going to after leaving this
	 * @return {Promise}
	 */
	leave(toRoute : RouteMatch) {

		return new Promise((resolve, reject) => {

			// Loop through action results
			let leavePromises : Promise<any>[] = [];
			this.actions.forEach((action, name) => {
				
				// Get replacing action
				let replacingAction = toRoute.actions.get(name);
				if (replacingAction) {

					// Was it triggered by the same route?
					if (action.viewContainer && action.viewContainer.currentAction && uidFor(action.viewContainer.currentAction.route) === uidFor(replacingAction.route)) {

						// Are the arguments the same as well?
						let currentParams = JSON.stringify(action.parameterArray);
						let replacingParams = JSON.stringify(replacingAction.parameterArray);

						if (currentParams === replacingParams) {

							// That means, we've just navigated within nested routes of that page, and this action will stay the same
							return;

						}

					}

				}
				
				// Leave this action				
				leavePromises.push(action.leave());
				
			});

			// Anything?
			if (leavePromises.length === 0) {
				resolve();
				return;
			}

			// When all is done
			Promise.all(leavePromises).then(() =>{
				resolve();
			}, (error) => {
				reject(error);
			});

		});

	}




	_readActionsFromRoute(route : Route) {
		
		// Collect parameters from route
		var params = new Map();
		var paramArray : string[] = [];
		_.each(route.parameters, (paramName) => {
			paramArray.push(this.parameters.get(paramName)!);
			params.set(paramName, this.parameters.get(paramName));			
		});

		// Get actions
		var myActions : Dictionary<any> = {};
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
		let actionsToMakeDependentOn : Action[] = [];
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
