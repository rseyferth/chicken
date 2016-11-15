/**
 * @module Api
 */
class ApiError {

	constructor(apiCall, xhrError) {
		
		/**
		 * @property api
		 * @type {Api.ApiCall}
		 */
		this.apiCall = apiCall;

		
		/**
		 * @property xhrError
		 * @type {jqXHR}
		 */
		this.xhrError = xhrError;

	}


	getMessage() {

		// JSON body with message?
		if (this.xhrError.responseJSON && this.xhrError.responseJSON.message) {

			return this.xhrError.responseJSON.message;

		}

		// Text?
		if (this.xhrError.responseText) return this.xhrError.responseText;

		// Don't know
		return 'Unknown error';

	}

	getStatus() {

		return this.xhrError.status;

	}

}
module.exports = ApiError;