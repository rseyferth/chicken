import _ from 'underscore';

/**
 * @module Core
 */
class ComputedAttribute
{

	/**
	 * @constructor
	 * @param  {Core.Observable}   	observable   
	 * @param  {Array}   			dependencies 
	 * @param  {Function} 			callback     	 
	 */
	constructor(observable, dependencies, callback) {

		
		this.observable = observable;
		this.name = null;
		this.dependencies = dependencies;

		this.callback = callback;


		// Watch
		this.observable.observe(this.dependencies, () => {
			this.update();
		});

	}

	update() {

		// Trigger it.
		this.observable._scheduleAttributeChanged(this.name);

	}

	getValue() {

		// Get dependency values
		var args = [];
		_.each(this.dependencies, (dep) => {
			args.push(this.observable.get(dep));
		});	

		// Do the callback
		return this.callback.apply(this.observable, args);

	}


	toString() {
		return this.getValue();
	}




}

module.exports = ComputedAttribute;
