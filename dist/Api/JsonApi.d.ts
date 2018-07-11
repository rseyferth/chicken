/// <reference types="jquery" />
import _, { Dictionary } from 'underscore';
import Api from './Api';
import JsonApiCall from './JsonApiCall';
import Model, { ModelDeleteOptions } from '../Data/Model';
import ApiCall from './ApiCall';
import Collection from '../Data/Collection';
export interface PaginationData {
    current_page: number;
    total_pages: number;
    per_page: number;
    total: number;
}
export interface MetaData {
    pagination?: PaginationData;
}
/**
 * @module Api
 */
export default class JsonApi extends Api {
    call(method: string, uri: string, data?: any, ajaxOptions?: JQueryAjaxSettings): any;
    saveModel(model: any, options: any): any;
    deleteModel(model: Model, options: ModelDeleteOptions): JsonApiCall;
    serialize(model: any, includeRelated?: boolean, includeRelatedData?: any, includedModelGuids?: string[]): _.Dictionary<any>;
    deserialize(result: any, apiCall?: ApiCall): any;
    deserializeModel(data: any, apiCall: any, deserializeRelationships?: boolean): any;
    deserializeCollection(data: Dictionary<any>, apiCall: ApiCall, meta?: MetaData): Collection;
    _deserializeRelationships(data: Dictionary<any>, apiCall: ApiCall, model?: Model): void;
    _getRelatedModel(relationshipData: any, apiCall: any): any;
    _getModelName(resourceType: string): string;
}
