import Obj from '../Core/Obj';
import Model from './Model';
import { Dictionary } from '../../node_modules/@types/lodash';
export default class ModelStore extends Obj {
    modelName: string;
    records: Dictionary<Model>;
    constructor(modelName: string);
    has(id: any): boolean;
    set(id: any, model: any): this;
    get(id: any): Model | undefined;
    forget(id: any): this;
}
