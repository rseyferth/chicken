/* eslint no-console: ["error", { allow: ["log"] }] */

import _ from 'underscore';
import Uuid from 'uuid-lib';
import QueryString from 'query-string';

import ActionBinding from '~/Dom/ActionBinding';
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


	/////////////
	// Actions //
	/////////////

	action(params, attributeHash, options /*, morph, renderer, scope, visitor*/) {
		
		// There should be an ActionBinding for this element
		let element = options.element;
		if (element && element.getAttribute('data-chicken-action')) {
			
			// Get the action
			var binding = ActionBinding.get(element.getAttribute('data-chicken-action'));
			binding.apply();


		} else {
			throw new Error('The "action" keyword was not correctly configured in your Renderer...');
		}

	}


	////////////////////////
	// Control statements //
	////////////////////////


	/**
	 * @method each
	 */
	each(params, attributeHash, options/* , morph, renderer, scope, visitor */) {


		// Get the value
		let list = this._getValue(params[0]);
		Utils.each(list, (item, i) => {
			options.template.yieldItem('each-item-' + Uuid.raw(), [item, i]);
		});
		
	}

	/**
	 * @method if	 
	 */
	if(params, attributeHash, options /*, morph, renderer, scope, visitor*/) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, options, Utils.isTruthlike(value));		

	}

	/**
	 * @method unless
	 */
	unless(params, attributeHash, options /*, morph, renderer, scope, visitor*/) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, options, !Utils.isTruthlike(value));

	}

	_ifUnless(params, options, show) {

		// Is the param truth-like?
		if (show) {

			// Is it a yielding-if?
			if (options.template.yield) {
				options.template.yield();

			// Or parameter-if?
			} else {
				return this._getValue(params[0]);
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

	concat(params/*, attributeHash, options, morph, renderer, scope, visitor*/) {

		return this._getValues(params).join();

	}



	///////////
	// Debug //
	///////////

	log(params/*, attributeHash, options, morph, renderer, scope, visitor*/) {
		console.log.apply(console, this._getValues(params));
	}

	'query-params'(params, attributeHash /*, options, morph, renderer, scope, visitor*/) {
		return QueryString.stringify(this._getHashValues(attributeHash));		
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
	_getHashValues(attributeHash) {
		var result = {};
		_.each(attributeHash, (value, key) => {
			result[key] = this._getValue(value);
		});
		return result;
	}





	

}

module.exports = Helpers;