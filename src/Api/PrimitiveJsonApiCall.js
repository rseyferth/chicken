import inflection from 'inflection';

import ApiCall from '../Api/ApiCall';

/**
 * @module Api
 */
class PrimitiveJsonApiCall extends ApiCall {

	/**
	 * @class Api.PrimitiveJsonApiCall
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
		if (relations instanceof Array) {
			relations = relations.join(',');
		}
		return this.query('include', relations);
	}


	filter(key, value) {
		return this.query('filter[' + inflection.underscore(key) + ']', value);
	}


}
export default PrimitiveJsonApiCall;