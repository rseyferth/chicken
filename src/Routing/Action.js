import XRegExp from 'xregexp';

import App from '~/Helpers/App';
import Obj from '~/Core/Obj';
import Redirect from '~/Routing/Redirect';
import Controller from '~/Routing/Controller';
import View from '~/Dom/View';

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
			var match = XRegExp.exec(controllerActionOrCallback, Action.getControllerActionRegExp());
			if (!match) throw new TypeError('Invalid action string: ' + controllerActionOrCallback + '. Use controller@method format.');
			
			// Store this
			this.controllerClass = match.class;
			this.controllerAction = match.action;



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

			// The VC is busy now.
			this.viewContainer.setLoading(true);

			////////////////
			// Controller //
			////////////////

			if (this.controllerClass) {

				// Make controller
				var ChickenController = Controller.registry.get(this.controllerClass);
				if (ChickenController === undefined) {
					reject('No controller defined with name "' + this.controllerClass + '"');
					return;
				}
				this.controller = new ChickenController(this);

				// Call action
				var controllerAction = this.controller[this.controllerAction];
				if (controllerAction === 'undefined' || typeof controllerAction !== 'function') {
					reject('There is no action on the "' + this.controllerClass + '" controller with the name "' + this.controllerAction + '"');
					return;
				}

				// Make the call
				this._processResult(controllerAction.apply(this.controller, this.parameterArray), resolve, reject);

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

		}).then((/* result */) => {

			// Update VCs
			application.updateViewContainers(this.viewContainer.$element);

		}, (/* error */) => {

			// No longer loading
			if (this.viewContainer) this.viewContainer.setLoading(false);

		});

	}

	_processResult(result, resolve, reject) {

		// A redirect?
		if (result instanceof Redirect) {

			//@TODO Cancel the running request?
			
			App().goto(result.uri);

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
				resolve();

			}, (error) => {
				reject(error);
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
				reject(error);
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
				resolve();

			} else {

				// Don't know how to render this...
				reject('I don\'t know how to render the result for "' + this.targetViewContainer + '"');
				return;

			}

		}		

	}


}


var _controllerActionRegExp;
Action.getControllerActionRegExp = () => {
	if (_controllerActionRegExp === undefined) {
		_controllerActionRegExp = XRegExp('^(?<class>[A-Z][a-zA-Z0-9\-\.]+)@(?<action>[a-z][a-zA-Z0-9\_]+)$');
	}
	return _controllerActionRegExp;
};


module.exports = Action;
