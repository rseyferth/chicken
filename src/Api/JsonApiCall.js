import ApiCall from '~/Api/ApiCall';

/**
 * @module Api
 */
class JsonApiCall extends ApiCall {

	/**
	 * @class Api.JsonApiCall
	 * @extends Api.ApiCall
	 * 
	 * @constructor
	 */

	 /**
	  * Include the given relationships in the request
	  * 
	  * @method include
	  * @chainable
	  * 
	  * @param  {string} relations  JSONAPI include options for request
	  */
	include(relations) {
		return this.query('include', relations);
	}


}
module.exports = JsonApiCall;