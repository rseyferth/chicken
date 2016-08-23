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
	constructor(action) {

		/**
		 * @property action
		 * @type {Routing.Action}
		 */
		this.action = action;


		// Copy some of the action props for local use.

	}

}

Controller.registry = new Map();



module.exports = Controller;