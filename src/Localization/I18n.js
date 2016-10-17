import $ from 'jquery';
import _ from 'underscore';

import Obj from '~/Core/Obj';
/**
 * @module Localization
 */
class I18n extends Obj {

	constructor(language) {

		super();

		/**
		 * @property data
		 * @type {Object}
		 */
		this.data = {};

		/**
		 * @property bundlesToLoad
		 * @type {Array}
		 */
		this.bundlesToLoad = [];

		/**
		 * @property language
		 * @type {string}
		 */
		this.language = language;

	}

	/**
	 * Add a bundle that will be loaded when the application starts
	 *
	 * @method addBundle
	 * @param  {string} url 
	 * @param  {string} [key=null]  Optional key to add loaded data under.
	 * @chainable
	 */
	addBundle(url, key = null) {

		this.bundlesToLoad.push({
			url: url,
			key: key
		});

		return this;

	}

	/**
	 * Manually load a bundle into I18n
	 *
	 * @method loadBundle
	 * @param  {string} url 
	 * @param  {string} [key=null]  Optional key to add loaded data under.
	 * @return {Promise}     
	 */
	loadBundle(url, key = null) {

		// Convert language placeholders
		url = url.replace(/:language/, this.language);

		return new Promise((resolve, reject) => {

			// Do we have it in cache?
			if (I18n.Cache[url]) {

				resolve(I18n.Cache[url]);
				return;
			}

			// Load it.
			$.ajax(url).then((result) => {
				resolve(result);
			}).fail((error) => {
				reject(error);
			});

		}).then((result) => {

			// Parse result
			result = this.parseResult(result, url);

			// Is there a key?
			if (key) {
				let r = {};
				r[key] = result;
				result = r;
			}

			// Extend
			$.extend(this.data, result);

		});

	}


	parseResult(result, url) {

		// Check extension
		let extension = _.last(url.split(/\./));
		if (extension === 'yaml') {

			// Parse yaml

		}

		return result;

	}

	/**
	 * Load all added bundles
	 *
	 * @method load
	 * @return {Promise}
	 */
	load() {

		// Main prmomise for loading
		return this.promise('loaded', (resolve) => {

			// Nothing to load?
			if (this.bundlesToLoad.length === 0) {
				resolve();
				return;
			}

			// Collect promises
			let promises = [];
			_.each(this.bundlesToLoad, (bundle) => {

				promises.push(this.loadBundle(bundle.url, bundle.key));

			});

			// When all is done.
			Promise.all(promises).then(() => {
				resolve();
			});

		});

	}

	/**
	 * Get the translation for given key
	 * 
	 * @method translate
	 * @param  {string} key        			Dot-notation key to get value of
	 * @param  {Object} [attributes={}] 	Optional object containing attributes to pass to the template in the translated value
	 * @param  {mixed} [fallback=null]		Optional fallback value when the key is nout found
	 * @return {mixed}
	 */
	translate(key, attributes = {}, fallback = null) {

		// Dot notation
		let obj = this.data;
		let parts = key.split(/\./);
		while (parts.length > 0) {
			
			// Get firs tpart
			let part = parts.shift();

			// Not existing?
			if (!obj[part]) return fallback ? fallback : '[' + key + ']';
			
			// Dive in.
			obj = obj[part];
		}

		// String?
		if (typeof obj === 'string') {

			/////////////////
			// Templating? //
			/////////////////
			
			if (obj.match(/<%/)) {

				// Convert attributes into real values
				let attr = _.mapObject(attributes, (value) => {
				
					// Get value?
					if (typeof value.getValue === 'function') {
						value = value.getValue();
					}
					return value;

				});
				
				// Make a template and run it
				let template = _.template(obj);
				obj = template(attr);

			}

		}

		return obj;
		

	}

	/**
	 * Alias of translate
	 * 
	 * @method get
	 * @param  {string} key        
	 * @param  {Object} [attributes={}] 
	 * @param  {mixed} [fallback=null]
	 * @return {mixed}
	 */
	get(key, attributes = {}, fallback = null) {
		return this.translate(key, attributes, fallback);
	}


}

I18n.Cache = {};


module.exports = I18n;