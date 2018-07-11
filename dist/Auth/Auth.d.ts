/// <reference types="jquery" />
import Observable from '../Core/Observable';
import Middleware from '../Routing/Middleware';
import Request from '../Routing/Request';
import RouteMatch from '../Routing/RouteMatch';
import ApiCall from '../Api/ApiCall';
export interface AuthSettings {
    getUserUri?: string;
    onAuthenticated?: Function | null;
    onUnauthenticated?: Function | null;
    onSessionTimedOut?: Function | null;
    onInvalidated?: Function | null;
    middlewareName?: string;
    baseUrl?: string;
    authenticateUri?: string;
    refreshUri?: string;
    currentUserUri?: string;
    authenticateMethod?: string;
    refreshMethod?: string;
    beforeSend?: Function;
    identifierKey?: string;
    passwordKey?: string;
    tokenValidForMinutes?: number;
    autoRefreshToken?: boolean;
    autoRefreshInterval?: number;
    localStorageKey?: string;
    storeCredentialsLocally?: boolean;
}
/**
 * @module Auth
 */
export default abstract class Auth extends Observable {
    settings: AuthSettings;
    middleware: Middleware;
    /**
     * @class Auth.Auth
     *
     * @param 	{Object} options
     * @constructor
     */
    constructor(options?: AuthSettings);
    abstract initialize(): Promise<any>;
    /**
     * Act as middleware for given request
     *
     * @method middleWareAction
     * @param  {Callback} 			next		The callback to call when everything is okay
     * @param  {Routing.Request} 	request
     * @param  {Routing.RouteMatch} 		routeMatch
     */
    middlewareAction(next: Function, request: Request, routeMatch: RouteMatch): void;
    doCallback(key: string, params: any[]): Promise<{}>;
    abstract authenticate(...args: any[]): Promise<any>;
    abstract invalidate(): any;
    /**
     * Check whether the session is authenticated
     *
     * @method isAuthenticated
     * @return {Boolean}
     */
    isAuthenticated(): any;
    /**
     * Authorize given ApiCall instance, adding necessary
     * authorization headers, etc.
     *
     * @method authorizeApiCall
     * @param  {Api.ApiCall} apiCall
     * @return {Api.ApiCall}
     */
    authorizeApiCall(apiCall: ApiCall): JQueryAjaxSettings;
    getAjaxOptions(): JQueryAjaxSettings;
    /**
     * Read given Api Error and update session accordingly, if
     * appropriate.
     *
     * @method processApiError
     * @param  {object} error
     * @return {object}
     */
    processApiError(error: any): any;
}
