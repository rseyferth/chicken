import XRegExp from 'xregexp';
import _ from 'underscore';

import App from '../Helpers/App';
import Obj from '../Core/Obj';
import Redirect from '../Routing/Redirect';
import Controller from '../Routing/Controller';
import RoutingError from '../Routing/RoutingError';
import View from '../Dom/View';
import Utils from '../Helpers/Utils';

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
		 * The name of the transition animation to use to get from 
		 * previous View to new View
		 * 
		 * @property transition
		 * @type {string}
		 */
		this.transition = null;


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


		/**
		 * The result of the Action once it has been executed
		 *
		 * @property result
		 * @type {mixed}
		 */
		this.result = false;




		///////////////////////////
		// Check passed argument //
		///////////////////////////
		
		if (typeof controllerActionOrCallback === 'string') {

			// A view uri?
			if (controllerActionOrCallback.match(/^[a-z\-\d\.]+$/)) {

				// Create a simple view callback
				this.callback = () => {
					return new View(controllerActionOrCallback);
				};

			} else {

				// Parse controller name
				var match = XRegExp.exec(controllerActionOrCallback, Action.getControllerActionRegExp());
				if (!match) throw new TypeError('Invalid action string: ' + controllerActionOrCallback + '. Use controller@method format.');
				
				// Store this
				this.controllerClass = match.class;
				this.controllerAction = match.action;

			}

		} else if (typeof controllerActionOrCallback === 'function') {

			// Store it
			this.callback = controllerActionOrCallback;

		} else {

			throw new TypeError('[Routing.Action] Did not understand action: ' + controllerActionOrCallback);

		}

	}

	
	execute(application) {

		// Make the promise
		return this.promise('complete', (resolve, reject) => {

			// Get the view container
			this.viewContainer = application.getViewContainer(this.targetViewContainer);
			if (this.viewContainer === undefined) {
				reject('There is no ViewContainer available with the name "' + this.targetViewContainer + '"');
				return;
			}
			
			// Is there currently an action in this vc?
			if (this.viewContainer.currentAction) {

				// Was it triggered by the same route?
				if (Utils.uidFor(this.viewContainer.currentAction.route) === Utils.uidFor(this.route)) {

					// Are the arguments the same as well?
					let currentParams = JSON.stringify(this.viewContainer.currentAction.parameterArray);
					let newParams = JSON.stringify(this.parameterArray);
					if (currentParams === newParams) {

						// Does the route depend on queryString, and did that change?
						if (this.viewContainer.currentAction.route.acceptsQuery) {

							// Then we assume this action has changed.

						// Is there a flash message in the request?
						} else if (_.size(this.request.flash) > 0 && this.viewContainer.currentAction.route.acceptsFlash) {

							// Then we assume this action has changed.

						} else {

							// That means, we've just navigated within nested routes of that page, and this action can be skipped.
							resolve();
							return;

						}

					}

				}
				
			}


			// The VC is busy now.
			this.viewContainer.setLoading(true);

			////////////////
			// Controller //
			////////////////

			if (this.controllerClass) {

				// Make controller
				var ChickenController = Controller.registry.get(this.controllerClass);
				if (ChickenController === undefined) {
					this._handleError('No controller defined with name "' + this.controllerClass + '"');
					return;
				}
				this.controller = new ChickenController(this);

				// Call action
				var controllerAction = this.controller[this.controllerAction];
				if (controllerAction === 'undefined' || typeof controllerAction !== 'function') {
					this._handleError('There is no action on the "' + this.controllerClass + '" controller with the name "' + this.controllerAction + '"');
					return;
				}

				// Make the call
				let actionResult;
				try {
					actionResult = controllerAction.apply(this.controller, this.parameterArray);
				} catch (error) {
					this._handleError(error, resolve, reject);
					return;
				}

				this._processResult(actionResult, resolve, reject);

			} 

			//////////////
			// Callback //
			//////////////
			else if (this.callback) {
				
				// Do the callback
				this._processResult(this.callback.apply(this.controller, this.parameterArray), resolve, reject);

			} else {
				reject('There is no controller or callback defined... This shouldn\'t happen.');
				return;
			}

		}).then((result) => {

			// Store result
			this.result = result;

		}, (/* error */) => {

			// No longer loading
			if (this.viewContainer) this.viewContainer.setLoading(false);

		});

	}


	leave() {

		// View?
		if (this.result instanceof View) {
			return this.result.leave();
		}

		// Leaving is fine.
		return new Promise((resolve) => {
			resolve();
		});
		
	}


	_processResult(result, resolve, reject) {

		/////////////////////////////////////
		// A 404 in the controller action? //
		/////////////////////////////////////

		if (result === false) {

			result = new RoutingError(404, 'Not found');

		}

		/////////////////
		// A redirect? //
		/////////////////

		if (result instanceof Redirect) {

			//@TODO Cancel the running request?
			
			App().goto(result.uri, null, result.flash);

		}

		//////////////////////
		// A routing error? //
		//////////////////////

		else if (result instanceof RoutingError) {

			// Handle it
			this._handleError(result, resolve, reject);

		}

		///////////////////////////
		// Is the result a view? //
		///////////////////////////

		else if (result instanceof View) {

			// Render the view
			let view = result;
			view.render().then(() => {

				// Add it
				this.viewContainer.setAction(this);
				view.addToContainer(this.viewContainer);				
				resolve(view);

			}, (error) => {

				this._handleError(error, resolve, reject);
				
			});

		}

		//////////////////////////////
		// Is the result a promise? //
		//////////////////////////////
		
		else if (result instanceof Promise) {

			// Wait for it to finish
			result.then((promiseResult) => {

				// Process result again!
				this._processResult(promiseResult, resolve, reject);

			}, (error) => {
				this._handleError(error, resolve, reject);
			});

		}

		/////////////////////////////////
		// Is it rendarable by itself? //
		/////////////////////////////////

		else {

			// A string
			if (typeof result === 'string' || result instanceof DocumentFragment) {

				// Set content
				this.viewContainer.setAction(this);
				this.viewContainer.setContent(result);
				resolve(result);

			} else {

				// Don't know how to render this...
				reject('I don\'t know how to render the result for "' + this.targetViewContainer + '"');
				return;

			}

		}		

	}


	_handleError(error, resolve, reject) {

		// Error object?
		if (typeof error === 'string') {
			error = new Error(error);
		}

		// Check router error handling, given priority to action, then route
		let route = this.routeMatch.route;
		let errorHandlers = route.router.getErrorHandlers(error, route);
		
		// Try to get one
		let handlerResult = false;
		while (errorHandlers.length > 0) {

			// Get next
			let callback = errorHandlers.shift();

			// Is the callback actually a string (controller action)?
			if (typeof callback === 'string') {
				
				// Get the controller action callback
				let [controllerName, action] = callback.split(/@/);
				if (controllerName && action) {

					// Same as me?
					let ctrl;
					if (this.controllerClass === controllerName) {
						ctrl = this.controller;
					} else {
						let ChickenController = Controller.registry.get(controllerName);
						if (!ChickenController) throw new Error('No controller defined with name "' + controllerName + '"');
						ctrl = new ChickenController(this);
					}

					// Get action
					callback = ctrl[action];
					if (callback === 'undefined' || typeof callback !== 'function') {
						throw new Error('There is no action on the "' + controllerName + '" controller with the name "' + action + '"');
					}

				}	

				// Is it a route then
				if (typeof callback === 'string') {

					let viewUri = callback;
					callback = () => {
						return new View(viewUri);
					};

				}


			}

			// Call it.
			handlerResult = callback.apply(this, [this, error]);

			// Something?
			if (handlerResult) break;

		}

		// No result?
		if (!handlerResult) {
			throw error;
		}

		// Treat the result as my action-result!
		this._processResult(handlerResult, resolve, reject);

	}


}


var _controllerActionRegExp;
Action.getControllerActionRegExp = () => {
	if (_controllerActionRegExp === undefined) {
		_controllerActionRegExp = XRegExp('^(?<class>[A-Z][a-zA-Z0-9\-\.]+)@(?<action>[a-z][a-zA-Z0-9\_]+)$');
	}
	return _controllerActionRegExp;
};


export default Action;
