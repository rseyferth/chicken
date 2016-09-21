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
	 * @param  {Api.JsonApi} api 	The Api instance this call originates from
	 * @param  {string} method      The HTTP method to use (get, post, put, etc.)
	 * @param  {string} uri			The uri to call
	 * @param  {Object} data        
	 * @param  {Object} ajaxOptions 	 
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