import _ from 'underscore';
import Observable from './Observable';

/**
 * @module Core
 */
export default class ComputedProperty
{

    dependencies: string[];
    
    callback: Function;
    observable!: Observable;
    name!: string;


	/**
	 * @class Core.ComputedProperty
	 * 
	 * @constructor
	 * @param  {Array}   			dependencies 
	 * @param  {Function} 			callback     	 
	 */
	constructor(dependencies : string[], callback : Function) {

		this.dependencies = dependencies;
		this.callback = callback;

	}

	getValue() {

		// Get dependency values
		let args : any[] = _.map(this.dependencies, (dep) => {
			return this.observable.get(dep);
		});	

		// Do the callback
		return this.callback.apply(this.observable, args);

	}

	toString() {
		return this.getValue();
	}


	initialize(name : string, observable : Observable) {

		// Localize
		this.name = name;
		this.observable = observable;

		// Watch the properties
		this.observable.observe(this.dependencies, () => {
			this.observable._scheduleAttributeChanged(this.name);
		});

		return this;

	}






}
