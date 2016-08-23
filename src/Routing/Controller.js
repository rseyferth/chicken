/**
 * @module Routing
 */
class Controller
{

	/**
	 * @class Routing.Controller
	 * 
	 * 
	 */
	constructor() {

	}

}

var controllers = new Map();

Controller.register = (name, controllerClass) => {

	// Does it extend?
	if (!(controllerClass instanceof Controller)) {
		throw 'Your controller needs to extend the Chicken.Routing.Controller class';
	}

	// Register
	controllers.set(name, controllerClass);

	return controllerClass;

};





module.exports = Controller;