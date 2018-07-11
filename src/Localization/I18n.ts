import $ from 'jquery';
import _, { Dictionary } from 'underscore';
import Obj from '../Core/Obj';

interface Bundle {
    url : string;
    key? : string;
}

/**
 * @module Localization
 */
export default class I18n extends Obj {


    data : Dictionary<any> = {};
    bundlesToLoad : Bundle[] = [];
    language? : string;


	constructor(language : string) {

		super();

		this.setLanguage(language);

	}

	/**
	 * Add a bundle that will be loaded when the application starts
	 *
	 * @method addBundle
	 * @param  {string} url 
	 * @param  {string} [key=null]  Optional key to add loaded data under.
	 * @chainable
	 */
	addBundle(url : string, key? : string) : I18n {

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
	loadBundle(url : string, key? : string, language? : string) : Promise<any> {

		// Convert language placeholders
		if (!language) language = this.language;
		url = url.replace(/:language/, this.language!);
		return new Promise((resolve, reject) => {

			// Do we have it in cache?
			if (I18n.Cache[url]) {

				resolve(I18n.Cache[url]);
				return;
			}

			// Load it.
			$.ajax(url, {
				
			}).then((result) => {
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
			$.extend(this.data[language!], result);

		});

	}

	setLanguage(language : string) : I18n {
		this.language = language;
		if (!this.data[language]) {
			this.data[language] = {};
		}
		return this;
	}


	parseResult(result, url) : any {

		// Check extension
		let extension = _.last(url.split(/\./));
		if (extension === 'yaml') {

			// Parse yaml
			//result = yamljs.parse(result);

		} else if (extension === 'json') {

			// Parse json
			if (typeof result === 'string') result = JSON.parse(result);

		}

		return result;

	}

	getData(language? : string) {
		if (!language) language = this.language;
		return this.data[language!];
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
			let promises : Promise<any>[] = [];
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
	translate(key, attributes = {}, fallback? : any, language? : string) {

		// Dot notation
		let obj = this.getData(language);
		let parts = key.split(/\./);
		while (parts.length > 0) {
			
			// Get firs tpart
			let part = parts.shift();

			// Not existing?
			if (!obj[part]) return fallback !== null ? fallback : '[' + key + ']';
			
			// Dive in.
			obj = obj[part];
		}

		return this.processValue(obj, attributes);
		

	}

	processValue(obj, attributes) {

		// What type?
		if (typeof obj === 'string') {

			// Process string
			obj = this.processString(obj, attributes);

		} else if ($.isArray(obj)) {

			// Mapped processing
			obj = _.map(obj, (v) => {
				return this.processValue(v, attributes);
			});
			

		} else if (typeof obj === 'object') {

			let result = {};
			_.each(obj, (value, key) => {
				result[key] = this.processValue(value, attributes);
			});
			obj = result;

		}
		return obj;

	}

	processString(obj, attributes) {

		// Double escaping
		obj = obj.split(/\\n/).join("\n").split(/\\t/).join("\t");

		/////////////////
		// Templating? //
		/////////////////
		
		if (obj.match(/<%/)) {

			// Convert attributes into real values
			let attr = _.mapObject(attributes, (value) => {
			
				// Get value?
				if (value !== null && value !== undefined && typeof value === 'object' && typeof value.getValue === 'function') {
					value = value.getValue();
				}
				return value;

			});
			
			// Make a template and run it
			let template = _.template(obj);
			try {
				obj = template(attr);
			} catch (error) {

				console.warn(error);
				
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
	get(key, attributes = {}, fallback? : any, language? : string) {
		return this.translate(key, attributes, fallback, language);
	}




    static Cache : Dictionary<any> = {};

}
