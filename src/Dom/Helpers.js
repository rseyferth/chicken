/* eslint no-console: ["error", { allow: ["log"] }] */

import _ from 'underscore';
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

	action(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
		
		// There should be an ActionBinding for this element
		let element = blocks.element;
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
	each(params, attributeHash, blocks, morph /*, renderer, scope, visitor*/) {

		// Check uid for this each-block
		var eachUid = Utils.uidFor(morph);
		
		// Get the value
		let list = this._getValue(params[0]);
		Utils.each(list, (item, i) => {

			// Get a unique id for the item.
			let uid = Utils.uidFor(item);
			let itemKey = 'each:' + eachUid + ':' + i + ':' + uid;
			
			// Render item
			blocks.template.yieldItem(itemKey, [item, i]);

		});
		
	}

	/**
	 * @method if	 
	 */
	if(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, blocks, Utils.isTruthlike(value));		

	}

	/**
	 * @method unless
	 */
	unless(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, blocks, !Utils.isTruthlike(value));

	}

	_ifUnless(params, blocks, show) {

		// Is the param truth-like?
		if (show) {

			// Is it a yielding-if?
			if (blocks.template.yield) {
				blocks.template.yield();

			// Or parameter-if?
			} else {
				return this._getValue(params[0]);
			}

		} else {

			// Render the inverse yield
			if (blocks.inverse.yield) {
				blocks.inverse.yield();
			
			// Or the inverse param
			} else {
				return params[2];
			}
		}

	}


	////////////
	// Values //
	////////////

	concat(params/*, attributeHash, blocks, morph, renderer, scope, visitor*/) {

		return this._getValues(params).join();

	}



	///////////
	// Debug //
	///////////

	log(params/*, attributeHash, blocks, morph, renderer, scope, visitor*/) {
		console.log.apply(console, this._getValues(params));
	}

	'query-params'(params, attributeHash /*, blocks, morph, renderer, scope, visitor*/) {
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