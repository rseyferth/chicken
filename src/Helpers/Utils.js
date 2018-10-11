import _ from 'underscore';
import moment from 'moment';
import Querystring from 'query-string';

import Observable from '../Core/Observable';
import ObservableArray from '../Core/ObservableArray';
import Binding from '../Dom/Binding';
import HelperProxy from '../Dom/HelperProxy';
import ComputedProperty from '../Core/ComputedProperty';
import Reference from '../Core/Reference';
import ClassMap from '../Helpers/ClassMap';

let uid = 0;





/**
 * @module Helpers
 */
let Utils = {

	/**
	 * @class Helpers.Utils
	 * @static
	 */


	getValue: (obj) => {
		if (obj instanceof HelperProxy) return obj.invoke();
		if (obj instanceof Binding || obj instanceof ComputedProperty || obj instanceof Reference) {
			return obj.getValue();
		}
		return obj;
	},


	/**
	 * @method each
	 * @static
	 * 
	 * @param  {Object}   obj      
	 * @param  {Function} callback 
	 * @param  {Object}   context  
	 */
	each: (obj, callback, context) => {
		
		// Map?
		if (obj instanceof Map) {
			obj.forEach((value, key) => {
				callback.apply(context, [value, key]);
			});
			return;

		} else if (obj instanceof Observable) {
			obj = obj.attributes;
		} else if (obj instanceof ObservableArray) {
			obj = obj.items;
		}
		return _.each(obj, callback, context);

	},
	/**
	 * @method reverseEach
	 * @static
	 * 
	 * @param  {Object}   obj      
	 * @param  {Function} callback 
	 * @param  {Object}   context  
	 */
	reverseEach: (obj, callback, context) => {
		
		// Map?
		if (obj instanceof Map) {
			obj.forEach((value, key) => {
				callback.apply(context, [value, key]);
			});
			return;

		} else if (obj instanceof Observable) {
			obj = obj.attributes;
		} else if (obj instanceof ObservableArray) {
			obj = obj.items;
		}
		for (let i = obj.length - 1; i >= 0; i--) {
			callback.apply(context, [obj[i]]);
		}

	},



	/**
	 * @method map
	 * @static
	 * 
	 * @param  {Object}   obj      
	 * @param  {Function} callback 
	 * @param  {Object}   context  
	 */
	map: (obj, callback, context) => {
		if (obj instanceof Observable) {
			obj = obj.attributes;
		} else if (obj instanceof ObservableArray) {
			obj = obj.items;
		}
		return _.map(obj, callback, context);
	},

	/**
	 * Determine whether given value is truthlike
	 * 
	 * @method isTruthlike
	 * @static
	 *	 
	 * @param  {mixed} value 
	 * @return {boolean}
	 */
	isTruthlike: (value) => {

		// Null/undef
		if (value === null || value === undefined) return false;

		// Bool?
		if (value === true || value === 'true') return true;
		if (value === false || value === 'false') return false;

		// 0 and 1?
		if (value === 1 || value === '1') return true;
		if (value === 0 || value === '0') return false;

		// Array?
		if (Array.isArray(value) || value instanceof ObservableArray) {
			return value.length > 0;
		}

		// Object
		if (typeof value === 'object' && value.contructor === Object) {
			return _.key(value).length > 0;
		}

		// Do it natively
		return !!value;

	},


	areEqual: function(value1, value2) {

		// Identical?
		if (value1 === value2) return true;

		// Is one or both a moment?
		if (moment.isMoment(value1) && value2 !== undefined) return value1.isSame(value2);
		if (moment.isMoment(value2) && value1 !== undefined) return value2.isSame(value1);

		// One of them null or undefined?
		if (value1 === undefined || value2 === undefined || value1 === null || value2 === null) return false;
		if (typeof value1 !== 'object' || typeof value2 !== 'object') return false;
		if (value1 instanceof Array || value2 instanceof Array) return false;

		// Same id?
		if (this.uidFor(value1) === this.uidFor(value2)) return true;

		return false;

	},


	/**
	 * Get a unique string identifier for given object or variable. For objects
	 * this identifier will remain the same, making it useful for comparing objects.
	 *
	 * @method uidFor
	 * @param  {mixed} obj 
	 * @return {string}
	 */
	uidFor: (obj) => {

		// Chicken model?
		if (obj.__getUid && typeof obj.__getUid === 'function') {
			return obj.__getUid();
		}
		
		// Already set for this object?
		if (obj && obj.__chickenUID !== undefined) return obj.__chickenUID;

		// Non-existing things?
		if (obj === undefined) return '(undefined)';
		if (obj === null) return '(null)';

		// Check what type the value is
		let type = typeof obj;
		switch(type) {

			case 'number':
			case 'string':
				return type + ':' + obj;

			case 'boolean': 
				return obj ? '(true)' : '(false)';				

		}

		// Is it a standard object?
		if (obj === Object) return '(Object)';
		if (obj === Array) return '(Array)';

		// Store the id on the obj
		let uid = Utils.uid();
		obj.__chickenUID = uid;
		return uid;



	},

	uid() {
		return '*' + (++uid) + '*';
	},


	/**
	 * encode an object to a query string
	 * @param  {Object}  obj  	the object to convert
	 * @param  {Boolean} deep 	use deep-converion, this adds subkeys and array values
	 * @return {String}       	the query string
	 */
	encodeQueryString(obj, deep = false) {

		if (deep) {

			//init str
			let propStrings = [], str = '';

			//convert to simple object
			if (obj instanceof Observable) obj = obj.toObject();			

			//base url
			if (obj.baseUrl) str += obj.baseUrl + '?';

			//add props
			_.each(_.keys(obj), (key) => {

				//skip baseUrl
				if (key == 'baseUrl') return;

				propStrings = this._addPropString(propStrings, key, obj[key]);

			});
			

			//add to querystring
			str += propStrings.join('&');

			return str;

		} else {

			return Querystring.stringify(obj);
		}


	},


	/**
	 * Add an url property from key and value. 
	 * Arrays are joined with commas,
	 * Objects properties will be processed again, and the key will be sub-keyed,
	 * String values will remain unchanged
	 * 
	 * @param {Array} propStrings 	The list of strings to add the value to
	 * @param {String} key         	The variable key
	 * @param {mixed} value       	The variable value
	 */
	_addPropString(propStrings, key, value) {

		if (value instanceof Array) {
			
			//array
			propStrings.push(key + '=' + value.join(','));

		} else if (value instanceof Object) {
			
			//object
			_.each(_.keys(value), (subKey) => {
				propStrings = this._addPropString(propStrings, key + '[' + subKey + ']', value[subKey]);
			});

		} else {

			propStrings.push(key + '=' + value);
		}


		return propStrings;
	},


	/**
	 * decode a query string to an object
	 * @param  {string}  str  	the query string
	 * @param  {Boolean} deep 	use deep-conversion, sub-keys and array values will be converted to objects and arrays
	 * @return {Object}       	the decoded values
	 */
	decodeQueryString(str, deep = false) {

		if (deep) {

			//init object
			let props, resultObject = {};

			//get all properties
			if (str.indexOf('?') !== -1) {
				resultObject['baseUrl'] = str.split('?')[0];
				props = str.split('?')[1].split('&');	
			} else {
				props = str.split('&');
			}
			

			//convert each property to object
			_.each(props, (prop) => {

				//split value and key
				prop = prop.split('=');
				let key = prop[0];
				let value = prop[1];

				//value				
				value = value.split(',');
				value = value.length == 1 ? value[0] : value;


				//key array
				if (key.indexOf('[') !== -1 && key.indexOf(']') !== -1) {
					key = key.split('[');
					let baseKey = key[0];
					let subKey = key[1].substring(0, key[1].length - 1);

					if (!(resultObject[baseKey] instanceof Object)) {
						resultObject[baseKey] = {};
					}
					

					resultObject[baseKey][subKey] = value;
					
				} else {
					resultObject[key] = value;
				}

			});


			return resultObject;
			

		} else {
			return Querystring.parse(str);
		}
	}







};

ClassMap.register('Utils', Utils);

export default Utils;