import $ from 'jquery';
import moment from 'moment';

import Auth from '../Auth/Auth';
import AuthError from '../Auth/AuthError';

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

			beforeSend: false,

			identifierKey: 'email',
			passwordKey: 'password',

			tokenValidForMinutes: 360,

			autoRefreshToken: true,
			autoRefreshInterval: 7200,	// 2 hours

			localStorageKey: 'ChickenJWTAuthToken',
			storeCredentialsLocally: false

		}, options);
		super(options);


		/**
		 * The current token
		 * 
		 * @property token
		 * @type {string}
		 */
		this.token = null;


		

	}

	initialize() {

		// Get token from localstorage
		try {
			this.token = JSON.parse(localStorage.getItem(`${this.settings.localStorageKey}.token`));
		} catch (err) {
			this.token = null;
		}

		// Do we have a non-expired token?
		let hasToken = false;
		if (this.token && this.token.receivedAt) {

			// More than 30 minutes old?
			let minTime = moment().unix() - this.settings.tokenValidForMinutes * 60;
			hasToken = this.token.receivedAt > minTime;

		}

		// No token?
		if (!hasToken) {
			
			// Credentials stored locally?
			if (this.settings.storeCredentialsLocally) {
				try {
					
					// Retrieve credentials
					let credentials = JSON.parse(localStorage.getItem(`${this.settings.localStorageKey}.credentials`));
					if (credentials) {
						return new Promise((resolve) => {

							// Try to authenticate using stored creds
							this.authenticate(credentials.identifier, credentials.password).then(() => {
								
								// Auth Successful!
								resolve(true);
								
							}, () => {

								// Auth failed
								resolve(false);

							});
							
						});
					}

				} catch (err) {
					
					// Continue...

				}
			}
		
		}

		// Validate the token
		return new Promise((resolve) => {
			
			// No token?
			if (!hasToken) {
				resolve(false);
				return;
			}
			
			// Wheter we are or are not authenticated, we resolve, because initializion is complete
			this.validateToken().then(() => {
				
				// Authenticated
				this.doCallback('onAuthenticated', []).then(() => {
					this.set('isAuthenticated', true);					
					resolve(true);
				});
					

			}, () => {
				resolve(false);
			});

		});		

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
				method: this.settings.authenticateMethod,
				beforeSend: this.settings.beforeSend
			}).then((result) => {

				// Check token.
				if (!result.token) reject('Could not find token in result');
				
				// Store it.
				this.setToken(result.token);

				// Store credentials
				if (this.settings.storeCredentialsLocally) {
					localStorage.setItem(`${this.settings.localStorageKey}.credentials`, JSON.stringify({
						identifier: identifier,
						password: password
					}));
				}

				// Handle user events
				this.doCallback('onAuthenticated', []).then(() => {
					this.set('isAuthenticated', true);
					resolve(this.token);
				});

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
			if (this.autoRefreshTimeout) {
				clearTimeout(this.autoRefreshTimeout);
				this.autoRefreshTimeout = false;
			}

			// Remove token
			this.token = false;
			localStorage.removeItem(`${this.settings.localStorageKey}.token`);
			this.set('isAuthenticated', false);
			
			this.doCallback('onInvalidated', []);
			this.trigger('invalidated');
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
				this.trigger('tokenRefreshed');


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
		if (this.autoRefreshTimeout) {
			clearTimeout(this.autoRefreshTimeout);			
			this.autoRefreshTimeout = false;
		}

		// Remember it.
		localStorage.setItem(`${this.settings.localStorageKey}.token`, JSON.stringify(this.token));

		// We are logged in
		this.validateToken();

	}

	clearToken() {
		this.token = null;
		localStorage.removeItem(`${this.settings.localStorageKey}.token`);		
	}
	
	forgetCredentials() {
		localStorage.removeItem(`${this.settings.localStorageKey}.credentials`);		
	}


	validateToken() {
		
		return new Promise((resolve, reject) => {

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
						this.clearToken();
						reject();
						return; 

					}

					// Auto refresh?
					if (this.settings.autoRefreshToken) {

						// Wait a bit and then refresh
						if (this.autoRefreshTimeout) clearTimeout(this.autoRefreshTimeout);
						let refreshAt = this.token.receivedAt + this.settings.autoRefreshInterval;	
						let timeoutMs = Math.max((refreshAt - now) * 1000, 5000);
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
						this.trigger('sessionTimedOut');
						this.set('isAuthenticated', false);
						this.token = null;

						if (this.autoRefreshTimeout) clearTimeout(this.autoRefreshTimeout);
						

					}, (timesOutAt - now) * 1000);

					
					// Done!
					resolve();

				} else {

					// Not valid
					this.set('isAuthenticated', false);
					reject();
					this.token = null;

				}

			} else {

				// Not authenticated
				this.set('isAuthenticated', false);
				reject();

			}

		});
		
	}


	processApiError(error) {

		// Unauthorized?
		if (error.xhrError.status === 401) {
			if (error.getMessage() === 'Unable to authenticate with invalid token.') {
				this.invalidate();
			}
		}

		return error;

	}


	getAjaxOptions() {

		// Add token.
		let options = {};
		if (this.token) {

			// Add the bearer token
			options.beforeSend = (xhr) => {
				xhr.setRequestHeader('Authorization', 'Bearer ' + this.token.token);
			};

		}

		return options;
		
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


export default JWTAuth;