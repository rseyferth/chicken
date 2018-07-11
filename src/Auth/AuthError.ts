import Auth from "./Auth";

/**
 * @module AuthError
 */
export default class AuthError {

    auth : Auth;
    xhrError : JQueryXHR;

	constructor(auth : Auth, xhrError : JQueryXHR) {
		
		this.auth = auth;
		this.xhrError = xhrError;

	}

	getMessage() : string {

		// JSON body with message?
		if (this.xhrError.responseJSON && this.xhrError.responseJSON.message) {

			return this.xhrError.responseJSON.message;

		}

		// Text?
		if (this.xhrError.responseText) return this.xhrError.responseText;

		// Don't know
		return 'Unknown error';

	}

}