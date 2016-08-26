import _ from 'underscore';

import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';


/**
 * @module Helpers
 */
module.exports = {

	/**
	 * @class Helpers.Utils
	 * @static
	 */


	each: (obj, callback, context) => {
		if (obj instanceof Observable) {
			obj = obj.attributes;
		} else if (obj instanceof ObservableArray) {
			obj = obj.items;
		}
		return _.each(obj, callback, context);

	},


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

	}


};