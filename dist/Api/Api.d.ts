/// <reference types="jquery" />
import ApiCall from './ApiCall';
import Collection from '../Data/Collection';
import Model, { ModelSaveOptions, ModelDeleteOptions } from '../Data/Model';
import Auth from '../Auth/Auth';
export interface ApiSettings {
    baseUrl?: string;
    queueAjaxCalls?: boolean;
    auth?: string;
    beforeSend?: Function;
    useGlobalStore?: boolean;
}
/**
 * An Api instance can be used to make contact with one specific
 * API.
 *
 * @param {Object} options - Configuration for the Api
 * @param {string} [options.baseUrl=/api] Base url to prepend to all API calls
 * @param {boolean} [options.queueAjaxCalls=false] Whether to execute the API calls one by one (true), or simultaneously (false)
 *
 */
export default abstract class Api {
    settings: ApiSettings;
    auth?: Auth;
    /**
     * @class Api.Api
     *
     * @constructor
     * @param  {Object} options
     */
    constructor(options: ApiSettings);
    /**
     * @method deserialize
     * @return {Data.Model|Data.Collection}
     */
    abstract deserialize(data: any, apiCall?: ApiCall): Model | Collection;
    getAuth(): Auth | false;
    /**
     * @method call
     * @param  {string} method
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    call(method: any, uri: any, data?: {}, ajaxOptions?: {}): ApiCall;
    /**
     * @method get
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    get(uri: any, data?: {}, ajaxOptions?: {}): ApiCall;
    /**
     * @method post
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    post(uri: any, data?: {}, ajaxOptions?: {}): ApiCall;
    /**
     * @method put
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    put(uri: any, data?: {}, ajaxOptions?: {}): ApiCall;
    /**
     * @method path
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    patch(uri: any, data?: {}, ajaxOptions?: {}): ApiCall;
    /**
     * @method delete
     * @param  {string} uri
     * @param  {Object} [data={}]
     * @param  {Object} [ajaxOptions={}]
     * @return {Api.ApiCall}
     */
    delete(uri: any, data?: {}, ajaxOptions?: {}): ApiCall;
    /**
     * @method makeUrl
     * @param  {string} uri 	Relative url within the API
     * @return {string} Fully formed url
     */
    makeUrl(uri: any): any;
    /**
     * Make an ajax call using jQuery
     *
     * @method ajax
     * @param  {Object} options
     * @return {jQuery Ajax call}
     */
    ajax(options: any): any;
    /**
     * Get jQuery ajax call options for this api
     *
     * @method getAjaxOptions
     * @param {Object = {}} options   Optional options to merge
     * @return {Function}
     */
    getAjaxOptions(options?: JQueryAjaxSettings): {
        dataType: string;
    } & JQueryAjaxSettings;
    /**
     * Get a single Model record from the Api
     *
     * @method one
     * @param  {string} modelName
     * @param  {string} idOrUri
     * @return {Api.ApiCall}
     */
    one(modelName: string, idOrUri?: any): ApiCall;
    /**
     * Get all Model records from the Api
     *
     * @method all
     * @param  {string} modelName
     * @return {Api.ApiCall}
     */
    all(modelName: string, uri?: string): ApiCall;
    store(modelName: string): ApiCall;
    abstract saveModel(model: Model, settings?: ModelSaveOptions): ApiCall;
    abstract deleteModel(model: Model, settings?: ModelDeleteOptions): ApiCall;
}
