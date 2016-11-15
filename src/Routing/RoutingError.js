/**
 * @module Routing
 */
class RoutingError
{

	constructor(code, message = null, request = null) {
		this.code = code;
		this.message = message;
		this.request = request;
	}


}

module.exports = RoutingError;