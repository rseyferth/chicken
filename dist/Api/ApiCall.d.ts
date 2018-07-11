import { Dictionary } from 'underscore';
import Obj from '../Core/Obj';
import Api from './Api';
/**
 * An ApiCall is a once-executing call to the configured API
 *
 * @param  {Api.Api} api 	The Api instance this call originates from
 * @param  {string} method      The HTTP method to use (get, post, put, etc.)
 * @param  {string} uri			The uri to call
 * @param  {Object} data
 * @param  {Object} ajaxOptions
 */
export default class ApiCall extends Obj {
    static hooks: Dictionary<Function[]>;
    static hook(type: string, callback: Function): void;
    api: Api;
    method: string;
    data: Dictionary<any>;
    ajaxOptions: Dictionary<any>;
    queryParams: Dictionary<any>;
    uri: string;
    modelClass?: any;
    useGlobalStore: boolean;
    store: Dictionary<any>;
    expectModel: boolean;
    expectCollection: boolean;
    deserializeResult: boolean;
    resolvesOnError: boolean;
    doNotExecuteInView: boolean;
    constructor(api: Api, method: string, uri: string, data?: Dictionary<any>, ajaxOptions?: Dictionary<any>);
    serialize(): string;
    reset(): void;
    executeHook(type: string, args?: any[]): void;
    /**
     * Execute the Api Call
     *
     * @method execute
     * @return {Promise}
     */
    execute(): Promise<any>;
    useLocalStore(value?: boolean): this;
    allowFailure(value?: boolean): this;
    getResponseModel(modelName: string, id: string): any;
    storeResponseModel(model: any): this;
    /**
     * Add given key/value(s) to the queryParams
     *
     * @method query
     * @param  {string|Object} keyOrHash  Either a key or a key/value hash
     * @param  {Mixed} value     When given a single key/value pair, enter the value as the second argument
     * @chainable
     */
    query(keyOrHash: string | object, value?: any): this;
    select(value: any): this;
    page(pageNumber: number | false, pageSize?: number): this;
    /**
     * Add given pagesize to the queryParams
     *
     * @method query
     * @param  pageSize
     * @chainable
     */
    pageSize(pageSize: number): ApiCall;
    /**
     * Set the request data
     *
     * @method setData
     * @param {mixed} data
     * @chainable
     */
    setData(data: any): ApiCall;
    /**
     * Do not execute this ApiCall when resolving the View,
     * but instead pass on the ApiCall itself.
     *
     * @param  {Boolean} doNotExecuteInView
     * @chainable
     */
    doNotExecute(doNotExecuteInView?: boolean): ApiCall;
    /**
     * Do not deserialize the response but return the literal
     * response instead.
     *
     * @param  {Boolean} doNotDeserialize
     * @chainable
     */
    doNotDeserialize(doNotDeserialize?: boolean): ApiCall;
}
