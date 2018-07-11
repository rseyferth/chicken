import { Dictionary } from 'underscore';
import ModelAttribute from './ModelAttribute';
import Relationship from './Relationship';
import Model from './Model';
export interface ComputedAttributeSettings {
    dependencies: string[];
    callback: Function;
}
/**
 * @module Data
 */
export default class ModelDefinition {
    name: string;
    apiUri: string;
    api: string;
    attributes: Dictionary<ModelAttribute>;
    attributeNames: string[];
    relationships: Dictionary<Relationship>;
    relationshipsByLocalKey?: Dictionary<Relationship>;
    apiAttributeNames?: string[];
    hiddenAttributeNames?: string[];
    computedAttributes: Dictionary<ComputedAttributeSettings>;
    validationRules: Dictionary<any>;
    isDynamic: boolean;
    primaryKey: string;
    tableName: string;
    searchFields?: string[];
    constructor(name: string, callback: Function);
    /**
     * Making a model dynamic means that not all attributes are defined,
     * and when submitting the model to an API, all set attributes will
     * be sent.
     *
     * @method dynamic
     * @param  {Boolean} [isDynamic=true]
     * @chainable
     */
    dynamic(isDynamic?: boolean): ModelDefinition;
    setPrimaryKey(key?: string): ModelDefinition;
    getRelationshipsByLocalKey(): Dictionary<Relationship>;
    getRelationshipByLocalKey(localKey: string): Relationship;
    getApiAttributeNames(): string[];
    getHiddenAttributeNames(): string[];
    hasAttribute(key: string): boolean;
    initializeModel(model: Model): Model;
    attribute(name: string, type: string): ModelAttribute;
    computed(name: string, dependencies: string[], callback: Function): true;
    integer(name: string): ModelAttribute;
    number(name: string): ModelAttribute;
    string(name: string, size?: number): ModelAttribute;
    date(name: string): ModelAttribute;
    dateTime(name: string): ModelAttribute;
    time(name: string): ModelAttribute;
    text(name: string): ModelAttribute;
    boolean(name: string): ModelAttribute;
    enum(name: string, options: string[]): ModelAttribute;
    model(name: string): ModelAttribute;
    array(name: string): ModelAttribute;
    object(name: string): ModelAttribute;
    translations(name: string): ModelAttribute;
    timestamps(): ModelDefinition;
    relationship(name: string): Relationship;
    validation(rules: any, formKey?: string): ModelDefinition;
    searchable(...fields: string[]): ModelDefinition;
    getSearchFields(): string[] | undefined;
    getApiUri(id?: string): string;
}
