/* eslint no-console: ["error", { allow: ["log"] }] */

import _ from 'underscore';
import $ from 'jquery';
import QueryString from 'query-string';
import inflection from 'inflection';
import moment from 'moment';
import filesize from 'filesize.js';

import ActionBinding from '~/Dom/ActionBinding';
import Utils from '~/Helpers/Utils';
import App from '~/Helpers/App';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';

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
			throw new Error('The "action" keyword was not correctly configured in your Renderer... Or you are trying to add an action to a Component.');
		}

	}


	/////////////
	// Routing //
	/////////////

	link(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
	
		// Add listener
		if (blocks.element) {

			// Add click listener
			let $el = $(blocks.element);
			$el.each((index, el) => {

				// Set href for easy debuggin' and statusbar info
				$(el).attr('href', this._getValue(params[0]));

			}).on('click', (e) => {
				e.preventDefault();

				// Get uri value
				let uri = this._getValue(params[0]);

				// Go there.
				App().goto(uri);

			});
			
			
		}
	}


	linkTo(params, attributeHash, block) {

		// Find named route
		let name = this._getValue(params[0]);
		let route = App().router.namedRoutes.get(name);
		if (!route) throw new Error('There is no route with the name "' + name + '"');

		// Make uri
		let attributes = _.mapObject(attributeHash, (value, key) => {
			return this._getValue(value);
		});
		let uri = route.makeUrl(attributes);

		
		// Make the link
		return this.link([uri], attributeHash, block);
		

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

	repeat(params, attributeHash, blocks, morph) {

		let repeatUid = Utils.uidFor(morph);
		let times = this._getValue(params[0]);
		for (let q = 0; q < times; q++) {

			let itemKey = 'repeat:' + repeatUid + ':' + q;
			blocks.template.yieldItem(itemKey, [null, q]);

		}


	}

	/**
	 * @method if	 
	 */
	if(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, blocks, Utils.isTruthlike(value));		

	}

	ifOne(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
		
		let trueConditions = _.filter(this._getValue(params), (value) => {
			return !!this._getValue(value);
		});

		return this._ifUnless(params, blocks, Utils.isTruthlike(trueConditions.length > 0));
	}

	ifAll(params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
		
		let trueConditions = _.filter(this._getValue(params), (value) => {
			return !!this._getValue(value);
		});

		return this._ifUnless(params, blocks, Utils.isTruthlike(trueConditions.length === params.length));
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
			if (blocks.template && blocks.template.yield) {
				blocks.template.yield();

			// Or parameter-if?
			} else {

				return this._getValue(params[1]);
				
			}

		} else {

			// Render the inverse yield
			if (blocks.inverse && blocks.inverse.yield) {
				blocks.inverse.yield();
			
			// Or the inverse param
			} else {
				return this._getValue(params[2]);
			}
		}

	}


	////////////
	// Values //
	////////////

	concat(params, attributeHash/*, blocks, morph, renderer, scope, visitor*/) {

		attributeHash = _.defaults(attributeHash, {
			separator: ''
		});
		return this._getValues(params).join(attributeHash.separator);

	}

	get(params) {

		// Get params
		let obj = this._getValue(params[0]);
		let key = this._getValue(params[1]);

		// Is it an observable?
		if (obj instanceof Observable || obj instanceof ObservableArray) {
			return obj.get(key);
		} else {
			return obj[key];
		}

	}


	firstIn(params) {

		let arr = this._getValue(params[0]);
		if (arr instanceof ObservableArray) {
			return arr.first();
		} else {
			return _.first(arr);
		}

	}

	equal(params) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);

		return value1 == value2;

	}
	notEqual(params) {
		return !this.equal(params);
	}

	isNull(params) {
		return this._getValue(params[0]) === null;
	}

	gt(params) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 > value2;

	}
	gte(params) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 >= value2;

	}
	lt(params) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 < value2;

	}
	lte(params) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 <= value2;

	}

	isObject(params) {
		// Get param
		let value = this._getValue(params[0]);
		return value instanceof Object;

	}

	valueOr(params) {
		let value = this._getValue(params[0]);
		let defaultValue = this._getValue(params[1]);

		return (value) ? value : defaultValue;
	}


	/////////////
	// Methods //
	/////////////

	method(params) {

		// Get params
		params = this._getValues(params);
		let obj = params.shift(params);
		let key = params.shift(params);

		// Do it.
		return obj[key].apply(obj, params);


	}


	//////////////////
	// HTML Helpers //
	//////////////////

	attributesFrom(params, attributeHash, blocks, morph) {

		console.log(params, attributeHash, blocks, morph);

	}


	/////////////
	// Strings //
	/////////////

	camelize(params) {

		let string = this._getValue(params[0]);
		let capitalFirstLetter = !!this._getValue(params[1]);

		return inflection.camelize(string, !capitalFirstLetter);

	}

	string(params) {

		// First is method, second is str
		let args = this._getValues(params);
		let method = args.shift();
		let str = args.shift();
		if (!str) return null;

		return str[method].apply(str, args);

	}

	underscore(params) {

		// First is method, second is str
		let args = this._getValues(params);
		let method = args.shift();		
		return _[method].apply(this, args);

	}

	////////////
	// Arrays //
	////////////
	
	count(params) {

		let value = this._getValue(params[0]);
		if (value instanceof Observable) {
			return _.size(value.attributes);
		}
		return value.length;

	}

	/////////////////////
	// Dates and times //
	/////////////////////

	momentFormat(params) {
		let value = this._getValue(params[0]);
		let format = this._getValue(params[1]);
		if (moment.isMoment(value)){ 
			return value.format(format);
		} else {
			return value;
		}
	}


	fileSize(params) {
		let value = this._getValue(params[0]);
		return filesize(value);
	}


	/////////////
	// Numbers //
	/////////////

	add(params) {
		let values = this._getValues(params);
		return values.reduce((total, item) => { 
			return item + total;
		}, 0);
	}
	subtract(params) {
		let values = this._getValues(params);
		let startValue = values.shift();
		return values.reduce((total, item) => { 
			return total - item;
		}, startValue);	
	}

	numberFormat(params) {
		let value = this._getValue(params[0]);
		if (value === undefined) return '';
		return value.toLocaleString(window.Chicken.app.i18n.language);
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



	//////////////////
	// Localization //
	//////////////////

	t(params, attributeHash) {

		// Get the key
		let key = this._getValue(params[0]);

		// Get from app
		return App().i18n.translate(key, attributeHash);

	}

	tText(params, attributeHash) {

		// Get value
		let v = this.t(params, attributeHash);

		// Plainify
		return $('<span>' + v + '</span>').text();

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


Helpers.User = {};


module.exports = Helpers;