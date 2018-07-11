import ApiCall from "./ApiCall";
import Api from "./Api";

export default class ApiError {

	apiCall : ApiCall;
	xhrError : JQueryXHR;

	constructor(apiCall : ApiCall, xhrError : JQueryXHR) {
		
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


	getStatusCode() {

		return this.xhrError.status;

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

	getFormErrors() {

		// JSON body with message?
		if (this.xhrError.responseJSON && this.xhrError.responseJSON.errors) {

			// Get errors
			return this.xhrError.responseJSON.errors;

		}
		return {};

	}

	getStatus() {

		return this.xhrError.status;

	}

}