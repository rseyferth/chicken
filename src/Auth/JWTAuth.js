import $ from 'jquery';
import moment from 'moment';

import Auth from '~/Auth/Auth';
import AuthError from '~/Auth/AuthError';

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
			refreshUri: '/authenticate/refresh',
			currentUserUri: '/me',

			authenticateMethod: 'post',
			refreshMethod: 'post',

			middlewareName: 'auth.jwt',

			identifierKey: 'email',
			passwordKey: 'password',

			tokenValidForMinutes: 60,

			autoRefreshToken: true,
			autoRefreshInterval: 600,	// 10 minutes

			localStorageKey: 'ChickenJWTAuthToken'

		}, options);
		super(options);


		/**
		 * The current token
		 * 
		 * @property token
		 * @type {string}
		 */
		try {
			this.token = JSON.parse(localStorage.getItem(this.settings.localStorageKey));
		} catch (err) {
			this.token = null;
		}


		// Check the token
		this.validateToken();
		

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

				// Authenticated
				this.trigger(Auth.Events.Authenticated);			

			}).fail((error) => {

				reject(new AuthError(this, error));

			});

		});


	}

	invalidate() {

		return new Promise((resolve/*, reject*/) => {

			// Waiting to time out?
			if (this.sessionTimeoutTimeout) {
				clearTimeout(this.sessionTimeoutTimeout);
				this.sessionTimeoutTimeout = false;
			}

			// Remove token
			this.token = false;
			localStorage.removeItem(this.settings.localStorageKey);
			this.set('isAuthenticated', false);
			this.trigger(Auth.Events.Invalidated);
			resolve();

		});

	}

	refreshToken() {

		// Waiting to time out?
		if (this.autoRefreshTimeout) {
			clearTimeout(this.autoRefreshTimeout);
			this.autoRefreshTimeout = false;
		}

		// Make a call.
		return new Promise((resolve, reject) => {

			// Already timed out?
			if (!this.isAuthenticated()) {
				reject('Cannot refresh token when not authenticated');
				return;
			}

			// Make the call.
			$.ajax({
				url: this.settings.baseUrl + this.settings.refreshUri,
				method: this.settings.refreshMethod,
				beforeSend: (xhr) => {
					xhr.setRequestHeader('Authorization', 'Bearer ' + this.token.token);
				}
			}).then((result) => {

				// Check token.
				if (!result.token) reject('Could not find token in result');
				
				// Store it.
				this.setToken(result.token);
				resolve(this.token);

				// Authenticated
				this.trigger(JWTAuth.Events.TokenRefreshed);


			}).fail((error) => {

				this.invalidate();
				reject(new AuthError(this, error));

			});

		});

	}

	setToken(tokenString) {

		// Store it
		this.token = {
			token: tokenString,
			receivedAt: moment().unix()
		};
		
		// Waiting to time out?
		if (this.sessionTimeoutTimeout) {
			clearTimeout(this.sessionTimeoutTimeout);
			this.sessionTimeoutTimeout = false;
		}

		// Remember it.
		localStorage.setItem(this.settings.localStorageKey, JSON.stringify(this.token));

		// We are logged in
		this.validateToken();

	}


	validateToken() {

		// Any token?
		if (this.token) {

			// Is it an object?
			if (this.token instanceof Object) {

				// Still valid?
				let now = moment().unix();
				let timesOutAt = this.token.receivedAt + this.settings.tokenValidForMinutes * 60;
				if (timesOutAt < now) {

					// No longer valid.
					this.set('isAuthenticated', false);
					this.token = null;
					return; 

				}

				// Auto refresh?
				if (this.settings.autoRefreshToken) {

					// Wait a bit and then refresh
					if (this.autoRefreshTimeout) clearTimeout(this.autoRefreshTimeout);
					let refreshAt = this.token.receivedAt + this.settings.autoRefreshInterval;	
					let timeoutMs = Math.max((refreshAt - now) * 1000, 1);
					this.autoRefreshTimeout = setTimeout(() => {

						this.autoRefreshTimeout = false;
						this.refreshToken();							

					}, timeoutMs);

				}

				// Wait for it to timeout
				if (this.sessionTimeoutTimeout) clearTimeout(this.sessionTimeoutTimeout);
				this.sessionTimeoutTimeout = setTimeout(() => {

					////////////////////////////////
					// Make the session time out! //
					////////////////////////////////

					this.sessionTimeoutTimeout = false;
					this.trigger(Auth.Events.SessionTimedOut);
					this.set('isAuthenticated', false);
					this.token = null;

					if (this.autoRefreshTimeout) clearTimeout(this.autoRefreshTimeout);
					

				}, (timesOutAt - now) * 1000);

				// It is valid!
				this.set('isAuthenticated', true);

			} else {

				// Not valid
				this.set('isAuthenticated', false);
				this.token = null;

			}

		} else {

			// Not authenticated
			this.set('isAuthenticated', false);

		}
		
	}



	authorizeApiCall(apiCall) {

		// Add token.
		if (this.isAuthenticated()) {

			// Add the bearer token
			apiCall.ajaxOptions.beforeSend = (xhr) => {
				xhr.setRequestHeader('Authorization', 'Bearer ' + this.token.token);
			};

		}


		return apiCall;
	}






}

JWTAuth.Events = {

	/**
	 * This event is triggered when a successful token refresh
	 * action is completed
	 * 
	 * @event tokenRefreshed
	 * @type {String}
	 */
	TokenRefreshed: 'tokenRefreshed'

};


module.exports = JWTAuth;