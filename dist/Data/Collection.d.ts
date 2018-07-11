import { Dictionary } from 'underscore';
import Model, { ModelSaveOptions, ModelConstructor } from './Model';
import ObservableArray from '../Core/ObservableArray';
export interface PageInfo {
    currentPage: number;
    pageCount: number;
    size: number;
    recordCount: number;
    from?: number;
    through?: number;
}
export default class Collection extends ObservableArray {
    modelClass?: ModelConstructor;
    itemsById: Dictionary<Model>;
    originalIds: string[];
    meta: Dictionary<any>;
    page: Dictionary<any>;
    constructor(modelClass?: ModelConstructor);
    knows(idOrModel: string | Model): boolean;
    setMetaData(data: Dictionary<any>): this;
    setPageInfo(currentPage: number, pageCount: number, recordsPerPage?: number, totalRecordCount?: number): void;
    get(key: any): any;
    addFromApi(item: any): this;
    _add(value: Model): Collection;
    _delete(value: any): Collection;
    empty(): Collection;
    isDirty(): boolean;
    hasDirtyChildren(): boolean;
    /**
     * Create copy of collection and its items
     *
     * @method clone
     * @return {Collection}
     */
    clone(cacheMap?: Map<any, any>): Collection;
    search(query: any, limit?: number | false, fields?: string[]): Collection;
    filter(...args: any[]): any;
    saveAll(saveOptions?: ModelSaveOptions, breakOnError?: boolean, saveOnlyDirtyModels?: boolean): Promise<any>;
    static fromArray(arr: Model[]): Collection;
    static merge(...collections: Collection[]): Collection;
    static combine: (...collections: Collection[]) => Collection;
}
