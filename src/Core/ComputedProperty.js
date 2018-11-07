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
	 * @param  {Array} dependencies Array of property names to watch and pass as arguments to the callback
	 * @param  {Function} callback Callback function that returns the value of the computed property
	 * @param  {number}	debounce (default = 0) Number of milliseconds to debounce calls
	 */
	constructor(dependencies, callback, debounce = 0) {

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

		/**
		 * @property debounce
		 * @type {number}
		 */
		this.debounce = debounce;


		this.dependenciesChanged = false;
		this.cachedValue = undefined;

	}


	/**
	 * Get the current computed value 
	 *
	 * @method getValue
	 * @return {mixed}
	 */
	getValue() {

		// Dependency changed?
		if (this.dependenciesChanged || this.cachedValue === undefined) {

			// Get dependency values
			var args = [];
			_.each(this.dependencies, (dep) => {
				args.push(this.observable.get(dep));
			});	

			// Cache the value
			this.dependenciesChanged = false;
			this.cachedValue = this.callback.apply(this.observable, args);

		}
		return this.cachedValue;

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
			this.debounce > 0 ? this.lazyTriggerChange() : this.triggerChange();
		});
		return this;

	}

	lazyTriggerChange() {
		if (!this._lazyTriggerChange) this._lazyTriggerChange = _.debounce(() => {
			this.triggerChange();
		}, this.debounce);
		this._lazyTriggerChange();		
	}

	triggerChange() {
		
		this.dependenciesChanged = true;
		this.observable._scheduleAttributeChanged(this.name);
	}






}

export default ComputedProperty;
