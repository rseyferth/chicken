import _ from 'underscore';

import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';


let uid = 0;
let UniqueIdKey = '___chicken_' + (+ new Date());




/**
 * @module Helpers
 */
let Utils = {

	/**
	 * @class Helpers.Utils
	 * @static
	 */


	/**
	 * @method each
	 * @static
	 * 
	 * @param  {Object}   obj      
	 * @param  {Function} callback 
	 * @param  {Object}   context  
	 */
	each: (obj, callback, context) => {
		if (obj instanceof Observable) {
			obj = obj.attributes;
		} else if (obj instanceof ObservableArray) {
			obj = obj.items;
		}
		return _.each(obj, callback, context);

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
		if (value === true) return true;
		if (value === false) return false;

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



	/**
	 * Get a unique string identifier for given object or variable. 
	 *  
	 * @param  {mixed} obj 
	 * @return {string}
	 */
	uidFor: (obj) => {

		// Already set for this object?
		if (obj && obj[UniqueIdKey] !== undefined) return obj[UniqueIdKey];

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
		obj[UniqueIdKey] = uid;
		return uid;



	},

	uid() {
		return '*' + (++uid) + '*';
	}


};

module.exports = Utils;