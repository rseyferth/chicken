import Obj from '../Core/Obj';

class ModelStore extends Obj
{

	constructor(modelName) {
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

	get(id) {
		return this.records[id] ? this.records[id] : null;
	}

	forget(id) {
		delete this.records[id];
		return this;
	}



}
export default ModelStore;