import ApiCall from '~/Data/Api/ApiCall';

/**
 * @module Data.Api
 */
class JsonApiCall extends ApiCall {

	include(relations) {
		return this.query('include', relations);
	}


}
module.exports = JsonApiCall;