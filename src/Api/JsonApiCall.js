import inflection from 'inflection';
import moment from 'moment';
import ApiCall from '../Api/ApiCall';

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
		if (relations instanceof Array) {
			relations = relations.join(',');
		}
		relations = inflection.underscore(relations);
		return this.query('include', relations);
	}


	filter(key, value) {

		// Value a moment?
		if (moment.isMoment(value)) value = value.format('YYYY-MM-DD');

		return this.query('filter[' + inflection.underscore(key) + ']', value);
	}

	enrich(keys) {
		return this.query('enrich', keys);
	}

	sort(key, direction = 'ascending') {

		// Format key
		key = inflection.underscore(key);

		// Check direction
		if (/^desc/.test(direction)) key = '-' + key;
		
		// Apply
		return this.query('sort', key);

	}


}
export default JsonApiCall;