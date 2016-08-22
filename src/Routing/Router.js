import Obj from '~/Core/Obj';

/**
 * @module Routing
 */
class Router extends Obj
{
	
	/**
	 * 
	 * 
	 * @class Routing.Router
	 * @extends Core.Object
	 */
	constructor() {
		super();
		
		this.routes = new Set();

	}	


}


module.exports = Router;