import Collection from './Collection';
import Relationship from './Relationship';
import { ModelConstructor } from './Model';
/**
 * @module Data
 */
export default class PivotCollection extends Collection {
    relationship: Relationship;
    constructor(modelClass: ModelConstructor, relationship: Relationship);
    add(model: any, pivotAttributes?: {}): this;
}
