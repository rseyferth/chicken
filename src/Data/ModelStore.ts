import Obj from '../Core/Obj';
import Model from './Model';
import { Dictionary } from '../../node_modules/@types/lodash';

export default class ModelStore extends Obj
{

    modelName : string;
    records : Dictionary<Model>;


	constructor(modelName : string) {
		super();

		this.modelName = modelName;
		this.records = {};

	}

	has(id) {
		return this.records[id] !== undefined;
	}

	set(id, model) {
		this.records[id] = model;
		return this;
	}

	get(id) : Model | undefined {
		return this.records[id] ? this.records[id] : undefined;
	}

	forget(id) {
		delete this.records[id];
		return this;
	}



}