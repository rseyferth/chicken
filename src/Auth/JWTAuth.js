import $ from 'jquery';

import Auth from '~/Auth/Auth';

/**
 * @module Auth
 */
class JWTAuth extends Auth
{

	/**
	 * @class Auth.JWTAuth
	 * @extends Auth.Auth
	 *
	 * @param 	{Object} options 
	 * @constructor
	 */
	constructor(options = {}) {

		// Default options
		options = $.extend({

			baseUrl: '',
			authenticateUri: '/authenticate',

			authenticateMethod: 'post',

			middlewareName: 'auth.jwt',

			identifierKey: 'email',
			passwordKey: 'password',

			tokenValidForMinutes: 30,

			localStorageKey: 'ChickenJWTAuthToken'

		}, options);
		super(options);


		/**
		 * The current token
		 * 
		 * @property token
		 * @type {string}
		 */
		this.token = localStorage.getItem(this.settings.localStorageKey);


		this.set('isAuthenticated', !!this.token);




	}

	/**
	 * Try to authenticate using given credentials
	 * 
	 * @method authenticate
	 * @param  {string} identifier 	Usually the email address
	 * @param  {string} password   
	 * @return {Promise} 
	 */
	authenticate(identifier, password) {

		// Make a call.
		return new Promise((resolve, reject) => {

			// Prepare data
			let data = {};
			data[this.settings.identifierKey] = identifier;
			data[this.settings.passwordKey] = password;

			// Make the call.
			$.ajax({
				url: this.settings.baseUrl + this.settings.authenticateUri,
				data: data,
				method: this.settings.authenticateMethod
			}).then((result) => {

				// Check token.
				if (!result.token) reject('Could not find token in result');
				
				// Store it.
				this.setToken(result.token);
				resolve(this.token);

			}).fail((error) => {

				reject(error);

			});

		});


	}

	invalidate() {

		return new Promise((resolve/*, reject*/) => {

			// Remove token
			this.token = false;
			localStorage.removeItem(this.settings.localStorageKey);
			this.set('isAuthenticated', false);
			resolve();

		});

	}

	setToken(token) {

		// Store it
		this.token = token;

		// Remember it.
		localStorage.setItem(this.settings.localStorageKey, this.token);

		// We are logged in
		this.set('isAuthenticated', true);

	}




	authorizeApiCall(apiCall) {

		// Add token.
		if (this.isAuthenticated()) {

			// Add the bearer token


		}


		return apiCall;
	}






}


module.exports = JWTAuth;