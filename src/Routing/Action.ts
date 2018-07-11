import XRegExp from 'xregexp';
import _ from 'underscore';
import Obj from '../Core/Obj';
import ViewContainer from '../Dom/ViewContainer';
import Request from './Request';
import Route from './Route';
import RouteMatch from './RouteMatch';
import Controller, { ControllerConstructor } from './Controller';
import View from '../Dom/View';
import Application from '../Application';
import { uidFor } from '../Helpers/Utils';
import RoutingError from './RoutingError';
import Redirect from './Redirect';

/**
 * @module Routing
 */
export default class Action extends Obj
{
	static controllerActionRegexp = XRegExp('^(?<class>[A-Z][a-zA-Z0-9\-\.]+)@(?<action>[a-z][a-zA-Z0-9\_]+)$');
	
	
	targetViewContainer : string;
	viewContainer? : ViewContainer;

	request : Request;
	route? : Route;
	matchedRoute? : Route;
	routeMatch? : RouteMatch;
	
	controller? : Controller;
	controllerClass? : string;
	controllerAction? : string;

	callback? : Function;

	parameters : Map<string, string> = new Map();
	parameterArray : string[] = [];

	transition? : string;

	dependsOn : Action[] = [];

	result? : any;


	/**
	 * @class Routing.Action
	 * @extends Core.Obj
	 */
	constructor(targetViewContainer : string, controllerActionOrCallback : any, request : Request) {

		super();

		////////////////
		// Attributes //
		////////////////

		this.targetViewContainer = targetViewContainer;
		this.request = request;



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
				var match = XRegExp.exec(controllerActionOrCallback, Action.controllerActionRegexp);
				if (!match) throw new TypeError(`Invalid action string: ${controllerActionOrCallback}. Use controller@method format.`);
				
				// Store this
				this.controllerClass = match['class'];
				this.controllerAction = match['action'];

			}

		} else if (typeof controllerActionOrCallback === 'function') {

			// Store it
			this.callback = controllerActionOrCallback;

		} else {

			throw new TypeError(`[Routing.Action] Did not understand action: ${controllerActionOrCallback}`);

		}

	}

	
	execute(application : Application) {

		// Make the promise
		return this.promise('complete', (resolve : Function, reject : Function) => {

			// Get the view container
			this.viewContainer = application.getViewContainer(this.targetViewContainer);
			if (this.viewContainer === undefined) {
				reject('There is no ViewContainer available with the name "' + this.targetViewContainer + '"');
				return;
			}
			
			// Is there currently an action in this vc?
			if (this.viewContainer.currentAction) {

				// Was it triggered by the same route?
				if (uidFor(this.viewContainer.currentAction.route) === uidFor(this.route)) {

					// Are the arguments the same as well?
					let currentParams = JSON.stringify(this.viewContainer.currentAction.parameterArray);
					let newParams = JSON.stringify(this.parameterArray);
					if (currentParams === newParams) {

						// Does the route depend on queryString, and did that change?
						if (this.viewContainer.currentAction!.route!.acceptsQuery) {

							// Then we assume this action has changed.

						// Is there a flash message in the request?
						} else if (this.request.flash && _.size(this.request.flash) > 0 && this.viewContainer.currentAction!.route!.acceptsFlash) {

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
				let ChickenController : ControllerConstructor | undefined = Controller.registry.get(this.controllerClass);
				if (ChickenController === undefined) {
					this.handleError(`No controller defined with name "${this.controllerClass}"`);
					return;
				}
				this.controller = new ChickenController(this);

				// Call action
				var controllerAction = this.controller[this.controllerAction!];
				if (controllerAction === 'undefined' || typeof controllerAction !== 'function') {
					this.handleError('There is no action on the "' + this.controllerClass + '" controller with the name "' + this.controllerAction + '"');
					return;
				}

				// Make the call
				let actionResult;
				try {
					actionResult = controllerAction.apply(this.controller, this.parameterArray);
				} catch (error) {
					this.handleError(error, resolve, reject);
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
			
			Application.getInstance().goto(result.uri, undefined, result.flash);

		}

		//////////////////////
		// A routing error? //
		//////////////////////

		else if (result instanceof RoutingError) {

			// Handle it
			this.handleError(result, resolve, reject);

		}

		///////////////////////////
		// Is the result a view? //
		///////////////////////////

		else if (result instanceof View) {

			// Render the view
			let view = result;
			view.render().then(() => {

				// Add it
				this.viewContainer!.setAction(this);
				view.addToContainer(this.viewContainer);				
				resolve(view);

			}, (error) => {

				this.handleError(error, resolve, reject);
				
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
				this.handleError(error, resolve, reject);
			});

		}

		/////////////////////////////////
		// Is it rendarable by itself? //
		/////////////////////////////////

		else {

			// A string
			if (typeof result === 'string' || result instanceof DocumentFragment) {

				// Set content
				this.viewContainer!.setAction(this);
				this.viewContainer!.setContent(result);
				resolve(result);

			} else {

				// Don't know how to render this...
				reject('I don\'t know how to render the result for "' + this.targetViewContainer + '"');
				return;

			}

		}		

	}


	private handleError(error : any, resolve? : Function, reject? : Function) {

		// Error object?
		if (typeof error === 'string') {
			error = new Error(error);
		}

		// Check router error handling, given priority to action, then route
		let route = this.routeMatch!.route;
		let errorHandlers = route.router.getErrorHandlers(error, route);
		
		// Try to get one
		let handlerResult = false;
		while (errorHandlers.length > 0) {

			// Get next
			let callback = errorHandlers.shift();

			// Is the callback actually a string (controller action)?
			if (typeof callback === 'string') {
				
				// Get the controller action callback
				let [controllerName, action] = (<string>callback).split(/@/);
				if (controllerName && action) {

					// Same as me?
					let ctrl;
					if (this.controllerClass === controllerName) {
						ctrl = this.controller;
					} else {
						let ChickenController : any = Controller.registry.get(controllerName);
						if (!ChickenController) throw new Error('No controller defined with name "' + controllerName + '"');
						ctrl = new ChickenController(this);
					}

					// Get action
					callback = ctrl[action];
					if (callback === undefined || typeof callback !== 'function') {
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
			handlerResult = callback!.apply(this, [this, error]);

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
