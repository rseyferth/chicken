import _ from 'underscore';

/**
 * @module Core
 */
class ComputedProperty
{

	/**
	 * @class Core.ComputedProperty
	 * 
	 * @constructor
	 * @param  {Array}   			dependencies 
	 * @param  {Function} 			callback     	 
	 */
	constructor(dependencies, callback) {

		/**
		 * The Observable instance that this computed attribute is
		 * a part of.
		 * 
		 * @property observable
		 * @type {Core.Observable}
		 */
		this.observable = null;

		/**
		 * The attribute name within the Observable that this ComputedProperty
		 * represents.
		 * 
		 * @property name
		 * @type {string}
		 */
		this.name = null;

		/**
		 * The names of the attributes that this compution depends on. These
		 * attributes will also be injected into the callback.
		 *
		 * @property dependencies
		 * @type {array}
		 */
		this.dependencies = dependencies;

		/**
		 * The compution function that is called when the value is requested.
		 *
		 * @property callback
		 * @type {Function}
		 */
		this.callback = callback;

	}

	/**
	 * Get the current computed value 
	 *
	 * @method getValue
	 * @return {mixed}
	 */
	getValue() {

		// Get dependency values
		var args = [];
		_.each(this.dependencies, (dep) => {
			args.push(this.observable.get(dep));
		});	

		// Do the callback
		return this.callback.apply(this.observable, args);

	}

	/**
	 * Alias of `getValue`
	 * 
	 * @method toString
	 * @return {mixed}
	 */
	toString() {
		return this.getValue();
	}


	/**
	 * Make this property part of an Observable object, and 
	 * start watching for changes.
	 * 
	 * @method initialize
	 * @param {string} name 					The name op the property
	 * @param {Core.Observable} observable 		The observable instance this property is a part of
	 * @chainable
	 */
	initialize(name, observable) {

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

export default ComputedProperty;
