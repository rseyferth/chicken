import $ from 'jquery';

import Auth from '~/Auth/Auth';
import Middleware from '~/Routing/Middleware';

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

			localStorageKey: 'ChickenJWTAuthToken'

		}, options);
		super(options);


		this.token = localStorage.getItem(this.settings.localStorageKey);



		this.set('isAuthenticated', !!this.token);




	}

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


	setToken(token) {

		// Store it
		this.token = token;

		// Remember it.
		localStorage.setItem(this.settings.localStorageKey, this.token);

		// We are logged in
		this.set('isAuthenticated', true);

	}



	invalidate() {

		// Remove token
		this.token = false;
		localStorage.removeItem(this.settings.localStorageKey);
		this.set('isAuthenticated', false);


	}



	authorizeApiCall(apiCall) {

		// Add token.
		if (this.isAuthenticated) {



		}

		return apiCall;
	}






}


module.exports = JWTAuth;