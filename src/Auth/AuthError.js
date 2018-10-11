/**
 * @module AuthError
 */
class AuthError {

	constructor(auth, xhrError) {
		
		/**
		 * @property auth
		 * @type {Auth.Auth}
		 */
		this.auth = auth;

		
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

}
export default AuthError;