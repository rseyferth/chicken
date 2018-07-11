import { Dictionary } from 'underscore';
import Observable from '../Core/Observable';
import ModelStore from './ModelStore';
import ModelDefinition from './ModelDefinition';
import Relationship from './Relationship';
import Api from '../Api/Api';
export interface ModelConstructor {
    new <T extends Model>(initValues: Dictionary<any>, convertToObservables: boolean): T;
    definition: any;
}
export interface ModelSaveOptions {
    uri?: string;
    includeRelated?: boolean;
    includeRelatedData?: boolean | string[];
}
export interface ModelDeleteOptions {
    uri?: string;
    modelIsDynamic?: boolean;
    ajax?: any;
}
/**
 * @module Data
 */
export default class Model extends Observable {
    originalValues: Dictionary<any>;
    related: Dictionary<any>;
    state: Observable;
    metaAttributes: Observable;
    private relationshipStudies;
    private _scheduleUpdateDirtyTimeout;
    /**
     * The Model class is an extension of Observable, and is used
     * to hold data that is received from an Api, and save that data, etc.
     *
     * @class Data.Model
     *
     * @constructor
     * @param  {Object}  initValues
     * @param  {Boolean} convertToObservables
     */
    constructor(initValues?: Dictionary<any>, convertToObservables?: boolean);
    initialize(): void;
    /**
     * Get the model state. This method is used to make the state
     * available in views.
     *
     * @method getIs
     * @return {Observable}
     */
    getIs(): Observable;
    getMeta(): Observable;
    /**
     * @method isBusy
     * @return {Boolean}
     */
    isBusy(): boolean;
    /**
     * Checks whether this model is new or has already been saved. This
     * is determined by checking whether the 'id' is set.
     *
     * @method isNew
     * @return {Boolean}
     */
    isNew(): boolean;
    _get(key: string): any;
    _set(key: string, value: any): Model;
    /**
     * Override Observable.observe
     *
     * Check if model has HasMany, HasManyTrough or BelongToMany relations it can study
     */
    observe(keyOrKeys: string | string[], callback: any): any;
    /**
     * Get a value for use in the API, meaning it is in
     * database format. For example, dates will be converted back
     * from Moment instances into strings.
     *
     * @method getForApi
     * @param  {string} key
     * @return {mixed}
     */
    getForApi(key: any): any;
    /**
     * Cast given value according to the AttributeDefinition for given
     * key. For example, if you pass a string containing a date as value,
     * for a Date key, you will receive a Moment instance.
     *
     * @method castValue
     * @param  {string} key
     * @param  {Mixed} value
     * @return {Mixed}
     */
    castValue(key: any, value: any): any;
    /**
     * Uncast given value according to the AttributeDefinition for given key.
     *
     * @method uncastValue
     * @param  {string} key
     * @param  {Mixed} value
     * @return {Mixed}
     */
    uncastValue(key: any, value: any): any;
    /**
     * Get the value of a translation
     *
     * @method translation
     * @param  {string} key
     * @param  {string} language     (Default = null) When null, the application language will be used
     * @return {string|null}
     */
    translation(key: any, language?: string): any;
    /**
     * Set attribute values that were retrieved from the API, meaning
     * they will not be seen as dirty, and will overwrite the original values
     * of the model.
     *
     * @method setAttributesFromApi
     * @param {Object} attributes
     * @chainable
     */
    setAttributesFromApi(attributes: any): this;
    /**
     * Get attribute values for use in the API.
     *
     * @method getAttributesForApi
     * @param  {Boolean} [onlyDirty=true]  When true, only attributes that have been changed will be retrieved
     * @param  {Boolean} [modelIsDynamic=false]	 When true, attributes that are not in the model definition are also passed along. This overrides the model definition's 'dynamic' value
     * @return {Object}      A hash containing attribute key/values
     */
    getAttributesForApi(onlyDirty?: boolean): any;
    setMetaAttributes(attributes: any): this;
    /**
     * Get the Api instance that is used by this model
     *
     * @method getApi
     * @return {Api.Api}
     */
    getApi(): Api;
    /**
     * Get the uri for this model, that can be used in an API call
     *
     * @method getApiUri
     * @return {string}
     */
    getApiUri(): string;
    /**
     * Save the model to the Api.
     *
     * Possible options are:
     *
     * **uri** (string)
     * A custom uri to use instead of the model's default uri
     *
     * **includeRelated** (boolean)
     * _(Default: true)_
     * Whether to included modifications in the relationships
     *
     * **includeRelatedData** (boolean)
     * _(Default: false)_
     * Whether to embed relationship data into the request. Note: this is not following JSONAPI specifications.
     *
     * @method save
     * @param  {Object} [options={}]	Optional options hash
     * @return {Promise} The promise returned by the ApiCall.execute method
     */
    save(options?: ModelSaveOptions): Promise<any>;
    /**
     * Delete the model from the Api.
     *
     * Possible options are:
     *
     * **uri** (string)
     * A custom uri to use instead of the model's default uri
     *
     * @method delete
     * @param  {Object} [options={}]	Optional options hash
     * @return {Promise} The promise returned by the ApiCall.execute method
     */
    delete(options?: ModelDeleteOptions): Promise<any>;
    toObject(includedUids?: string[]): Dictionary<any>;
    /**
     * Restore all attributes to their original values
     *
     * @method reset
     * @chainable
     */
    reset(): this;
    getValidationRules(formKey?: string): any;
    /**
     * @method getDirty
     * @return {Object} Key/value hash containing dirty attributes
     */
    getDirty(): {};
    /**
     * Determine whether the model, or a specific attribute is dirty
     * (meaning it has been changed since initialization or Api update)
     *
     * @method isDirty
     * @param  {string}  [key]    Optional attribute name
     * @return {Boolean}
     */
    isDirty(key?: any): boolean;
    /**
     * Reset dirtyness of model, for given key of for whole model
     *
     * @method resetDirty
     * @param  {string|array} [keys]  	Optional attribute name(s)
     * @chainable
     */
    resetDirty(keys?: any): this;
    /**
     * Check the current dirty state of the model and update
     * its status value.
     *
     * @method updateDirty
     * @chainable
     */
    updateDirty(): this;
    _scheduleUpdateDirty(): void;
    /**
     * Set the given model as the value of a relationship
     *
     * @method setRelatedModel
     * @param {string} relationshipName
     * @param {Data.Model} relatedModel
     * @chainable
     */
    setRelatedModel(relationshipName: any, relatedModel: any): this;
    /**
     * Add the given model to a relationship collection
     *
     * @method addRelatedModel
     * @param {string} relationshipName
     * @param {Data.Model} relatedModel
     * @param {boolean} fromApi
     * @chainable
     */
    addRelatedModel(relationshipName: string, relatedModel: Model, fromApi?: boolean, pivotAttributes?: Dictionary<any>): this;
    deleteRelatedModel(relationshipName: any, model: any): this;
    /**
     * Get the model class name for the current instance. When no definition was
     * made for this model, 'DefaultModel' will be returned.
     *
     * @method getModelName
     * @return {string}
     */
    getModelName(): string;
    /**
     * Get this model's ModelDefinition.
     * Can be undefined for non-defined Models.
     *
     * @method getDefinition
     * @return {Data.ModelDefinition}
     */
    getDefinition(): ModelDefinition | undefined;
    getPrimaryKey(): any;
    /**
     * Get the definition for given attribute key.
     * Can be undefined for non-defined Models, or if the
     * attribute is not defined in the ModelDefinition.
     *
     * @method getAttributeDefinition
     * @param  {string} key
     * @return {Data.ModelAttribute}
     */
    getAttributeDefinition(key: any): import("../../../../../../../Users/ruben/Projects/Javascript Projects/ts-chicken/src/Data/ModelAttribute").default | undefined;
    getRelationship(key: any): Relationship | null;
    hasRelationship(key: any): boolean;
    getRelationshipByLocalKey(key: any): Relationship | null;
    isPivot(): boolean;
    /**
     * Check whether this instance is the same instance as given parameter.
     *
     * @method is
     * @param  {Chicken.Data.Model}  obj
     * @return {Boolean}
     */
    is(obj: any): boolean;
    createCopy(): any;
    /**
     * Create copy of model and its attributes and relations
     *
     * @method clone
     * @param  {cacheMap}  obj
     * @return {Copy}
     */
    clone(cacheMap: any): any;
    /**
     * Create a shallow clone of the current model, meaning only
     * the attributes will be copied and the relationships will not be cloned,
     * but just linked.
     *
     * @method shallowClone
     * @return {Model}
     */
    shallowClone(): any;
    /**
     * A map of registered model classes
     *
     * @static
     * @property registry
     * @type {Map}
     */
    static registry: Map<string, ModelConstructor>;
    /**
     * A map of Model stores, containing loaded records
     *
     * @static
     * @property stores
     * @type {Map}
     */
    static stores: Map<string, ModelStore>;
    /**
     * @static
     * @method getStore
     * @param  {string} modelName
     * @return {Map}
     */
    static getStore(modelName: string): ModelStore;
    /**
     * @static
     * @method getFromStaore
     * @param  {string} modelName
     * @param  {number} id
     * @return {Data.Model}
     */
    static getFromStore(modelName: string, id: any): Model | undefined;
    static deleteFromStore(modelName: string, id: string): void;
    /**
     * Create a new model instance
     *
     * @static
     * @method create
     * @param  {string} modelName
     * @param  {Object} [initValues={}]
     * @return {Data.Model}
     */
    static create(modelName: string, initValues?: Dictionary<any>): Model;
    /**
     * The number of milliseconds to delay checking whether the
     * model has dirty attributes, after it an attribute has been changed.
     *
     * @property UpdateDirtyDelay
     * @static
     * @type {Number}
     */
    static UpdateDirtyDelay: number;
}
