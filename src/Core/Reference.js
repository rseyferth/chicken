class Reference {

	constructor(observable, path) {

		this.observable = observable;
		this.path = path;

	}

	getValue() {
		return this.observable.get(this.path);
	}
	setValue(value) {
		this.observable.set(this.path, value);
		return this;
	}

	watch(callback) {
		this.observable.observe(this.path, callback);		
	}


}

export default Reference;