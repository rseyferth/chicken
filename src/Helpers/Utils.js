import _ from 'underscore';

import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';
import Binding from '~/Dom/Binding';
import ComputedProperty from '~/Core/ComputedProperty';
import Reference from '~/Core/Reference';
import ClassMap from '~/Helpers/ClassMap';

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


	getValue: (obj) => {
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
		if (obj instanceof Observable) {
			obj = obj.attributes;
		} else if (obj instanceof ObservableArray) {
			obj = obj.items;
		}
		return _.each(obj, callback, context);

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


	areEqual: function(value1, value2) {

		// Identical?
		if (value1 === value2) return true;

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

ClassMap.register('Utils', Utils);

module.exports = Utils;