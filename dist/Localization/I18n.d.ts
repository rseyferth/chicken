import { Dictionary } from 'underscore';
import Obj from '../Core/Obj';
interface Bundle {
    url: string;
    key?: string;
}
/**
 * @module Localization
 */
export default class I18n extends Obj {
    data: Dictionary<any>;
    bundlesToLoad: Bundle[];
    language?: string;
    constructor(language: string);
    /**
     * Add a bundle that will be loaded when the application starts
     *
     * @method addBundle
     * @param  {string} url
     * @param  {string} [key=null]  Optional key to add loaded data under.
     * @chainable
     */
    addBundle(url: string, key?: string): I18n;
    /**
     * Manually load a bundle into I18n
     *
     * @method loadBundle
     * @param  {string} url
     * @param  {string} [key=null]  Optional key to add loaded data under.
     * @return {Promise}
     */
    loadBundle(url: string, key?: string, language?: string): Promise<any>;
    setLanguage(language: string): I18n;
    parseResult(result: any, url: any): any;
    getData(language?: string): any;
    /**
     * Load all added bundles
     *
     * @method load
     * @return {Promise}
     */
    load(): Promise<any>;
    /**
     * Get the translation for given key
     *
     * @method translate
     * @param  {string} key        			Dot-notation key to get value of
     * @param  {Object} [attributes={}] 	Optional object containing attributes to pass to the template in the translated value
     * @param  {mixed} [fallback=null]		Optional fallback value when the key is nout found
     * @return {mixed}
     */
    translate(key: any, attributes?: {}, fallback?: any, language?: string): any;
    processValue(obj: any, attributes: any): any;
    processString(obj: any, attributes: any): any;
    /**
     * Alias of translate
     *
     * @method get
     * @param  {string} key
     * @param  {Object} [attributes={}]
     * @param  {mixed} [fallback=null]
     * @return {mixed}
     */
    get(key: any, attributes?: {}, fallback?: any, language?: string): any;
    static Cache: Dictionary<any>;
}
export {};
