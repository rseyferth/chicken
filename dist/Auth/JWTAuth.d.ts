/// <reference types="jquery" />
import { Dictionary } from '../../node_modules/@types/lodash';
import Auth, { AuthSettings } from './Auth';
export interface JWTToken {
    receivedAt: number;
    token: string;
}
/**
 * @module Auth
 */
export default class JWTAuth extends Auth {
    token?: JWTToken;
    autoRefreshTimeout?: any;
    sessionTimeoutTimeout?: any;
    /**
     * @class Auth.JWTAuth
     * @extends Auth.Auth
     *
     * @param 	{Object} options
     * @constructor
     */
    constructor(options?: AuthSettings);
    initialize(): Promise<any>;
    /**
     * Try to authenticate using given credentials
     *
     * @method authenticate
     * @param  {string} identifier 	Usually the email address
     * @param  {string} password
     * @return {Promise}
     */
    authenticate(identifier: string, password: string): Promise<any>;
    invalidate(): Promise<any>;
    refreshToken(): Promise<{}>;
    setToken(tokenString: any): void;
    clearToken(): void;
    forgetCredentials(): void;
    validateToken(): Promise<{}>;
    processApiError(error: any): any;
    getAjaxOptions(): JQueryAjaxSettings;
    static Events: Dictionary<string>;
}
