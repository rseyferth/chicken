import Observable from './Observable';

export default class Reference {

    observable: Observable;
    path: string;

	constructor(observable : Observable, path : string) {

		this.observable = observable;
		this.path = path;

	}

	getValue() {
		return this.observable.get(this.path);
	}
	setValue(value : any) {
		this.observable.set(this.path, value);
		return this;
	}

	watch(callback : Function) {
		this.observable.observe(this.path, callback);		
	}


}