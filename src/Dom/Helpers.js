/* eslint no-console: ["error", { allow: ["log"] }] */

import _ from 'underscore';
import Uuid from 'uuid-lib';
import QueryString from 'query-string';

import Utils from '~/Helpers/Utils';

/**
 * @module Dom
 */
class Helpers
{

	/**
	 * @class Dom.Helpers
	 *
	 * @constructor 
	 * @param  {Dom.Renderer} renderer
	 */
	constructor(renderer) {
		this.renderer = renderer;
	}


	////////////////////////
	// Control statements //
	////////////////////////


	/**
	 * @method each
	 */
	each(params, hash, options) {

		// Get the value
		let list = this._getValue(params[0]);
		Utils.each(list, (item, i) => {
			options.template.yieldItem('each-item-' + Uuid.raw(), [item, i]);
		});
		
	}

	/**
	 * @method if	 
	 */
	if(params, hash, options) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, hash, options, Utils.isTruthlike(value));		

	}

	/**
	 * @method unless
	 */
	unless(params, hash, options) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, hash, options, !Utils.isTruthlike(value));		

	}

	_ifUnless(params, hash, options, show) {

		// Is the param truth-like?
		if (show) {

			// Is it a yielding-if?
			if (options.template.yield) {
				options.template.yield();

			// Or parameter-if?
			} else {
				return this._getValue(params[1]);
			}

		} else {

			// Render the inverse yield
			if (options.inverse.yield) {
				options.inverse.yield();
			
			// Or the inverse param
			} else {
				return params[2];
			}
		}

	}


	////////////
	// Values //
	////////////

	concat(params) {

		return this._getValues(params).join('');

	}


	///////////
	// Debug //
	///////////

	log(params) {
		console.log.apply(console, this._getValues(params));
	}

	'query-params'(params, hash) {
		return QueryString.stringify(this._getHashValues(hash));		
	}



	//////////////
	// Internal //
	//////////////

	_getValue(param) {
		return this.renderer.hooks.getValue(param);
	}

	_getValues(params) {
		return params.map((value) => {
			return this._getValue(value);
		});
	}
	_getHashValues(hash) {
		var result = {};
		_.each(hash, (value, key) => {
			result[key] = this._getValue(value);
		});
		return result;
	}
	

}

module.exports = Helpers;