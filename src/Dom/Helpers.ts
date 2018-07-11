/* eslint no-console: ["error", { allow: ["log"] }] */

import _, { Dictionary } from 'underscore';
import $ from 'jquery';
import QueryString from 'query-string';
import inflection from 'inflection';
import moment from 'moment';
import filesize from 'filesize.js';

import { isTruthlike, uidFor, reverseEach, each } from '../Helpers/Utils';
import Application from '../Application';
import Observable from '../Core/Observable';
import ObservableArray from '../Core/ObservableArray';
import ActionBinding from './ActionBinding';
import Renderer from './Renderer';

/**
 * @module Dom
 */
export default class Helpers {

    renderer : Renderer;

    constructor(renderer : Renderer) {
		this.renderer = renderer;
	}


	/////////////
	// Actions //
	/////////////

	action(params : any[], attributeHash : Dictionary<any>, blocks : any /*, morph, renderer, scope, visitor*/) {
		
		// There should be an ActionBinding for this element
		let element = blocks.element;
		if (element && element.getAttribute('data-chicken-action')) {
			
			// Get the action
			var binding = ActionBinding.get(element.getAttribute('data-chicken-action'));
			binding!.apply();

		} else {
			throw new Error('The "action" keyword was not correctly configured in your Renderer... Or you are trying to add an action to a Component.');
		}

	}


	/////////////
	// Routing //
	/////////////


	link(params : any[], attributeHash : Dictionary<any>, blocks : any /*, morph, renderer, scope, visitor*/) {

		// Check the event
		let eventName = attributeHash.event ? this._getValue(attributeHash.event) : 'click';
		
		// Add listener
		if (blocks.element) {

			// Get element(s)
			let $el = $(blocks.element);

			// Add href and event
			$el.each((index, el) => {

				// Set href for easy debuggin' and statusbar info
				$(el).attr('href', this._getValue(params[0]));

			}).on(eventName, (e) => {
				e.preventDefault();

				// Get uri value
				let uri = this._getValue(params[0]);

				// Transition
				let transition = attributeHash.transition ? this._getValue(attributeHash.transition) : null;

				// Go there.
				Application.getInstance().goto(uri, undefined, {}, false, transition);

			});
			
			
		}
	}

	linkTo(params : any[], attributeHash : Dictionary<any>, block : any) {

		// Find named route
		let name = this._getValue(params[0]);

		// Relative route?
		if (/^\./.test(name)) {

			// Current name?
			let curName : string | undefined = Application.getInstance().currentRoute!.route.name;
			if (!curName) throw new Error('The current route does not have a name, so relative links are not possible from here');

			// ..? (Level up)
			while (/^\.\./.test(name)) {

				// Remove last part
				let parts = curName!.split(/\./);
				parts.pop();
				curName = parts.join('.');
				name = name.replace(/^\./, '');

			}

			// Add it.
			name = curName + name;

			// Remove any trailing dots
			name = name.replace(/\.+$/, '');

		}

		// Find route
		let route = Application.getInstance().router.namedRoutes.get(name);
		if (!route) throw new Error('There is no route with the name "' + name + '"');

		// Make uri
		let attributes = _.mapObject(attributeHash, (value) => {
			return this._getValue(value);
		});
		let uri = route.makeUrl(attributes);

		// Query?
		if (attributeHash.query) {

			// Try to decode as JSON
			let query = attributeHash.query;
			if (typeof query === 'string') {
				try {
					
					// Parse JSON
					query = JSON.parse(query);

				} catch (e) {
					// Ok, then we use it as it is
				}
			}

			// Convert to querystring
			if (typeof query === 'object') {
				query = QueryString.stringify(query);
			}

			// Add to URL
			uri = `${uri}?${query}`;

		}
		
		// Make the link
		return this.link([uri], attributeHash, block);
		

	}


	touchLink(params : any[], attributeHash : Dictionary<any>, block : any/* , morph : any, renderer : Renderer, scope : Scope, visitor : any */) {

		// Add hammertime
		attributeHash.hammerTime = true;
		if (!attributeHash.event) attributeHash.event = 'tap';
		return this.link(params, attributeHash, block/* , morph, renderer, scope, visitor */);

	}


	touchLinkTo(params : any[], attributeHash : Dictionary<any>, block : any/* , morph : any, renderer : Renderer, scope : Scope, visitor : any */) {

		// Add hammertime
		attributeHash.hammerTime = true;
		if (!attributeHash.event) attributeHash.event = 'tap';
		return this.linkTo(params, attributeHash, block/* , morph, renderer, scope, visitor */);

	}



	////////////////////////
	// Control statements //
	////////////////////////


	/**
	 * @method each
	 */
	each(params : any[], attributeHash : Dictionary<any>, blocks : any, morph : any /*, renderer, scope, visitor*/) {

		// Check uid for this each-block
		var eachUid = uidFor(morph);
		
		// Get the value
		let list = this._getValue(params[0]);
		each(list, (item : any, i : any) => {

			// Get a unique id for the item.
			let uid = uidFor(item);
			let itemKey = 'each:' + eachUid + ':' + i + ':' + uid;
			
			// Render item
			blocks.template.yieldItem(itemKey, [item, i]);

		});
		
	}

	/**
	 * @method reverseEach
	 */
	reverseEach(params : any[], attributeHash : Dictionary<any>, blocks : any, morph : any /*, renderer, scope, visitor*/) {

		// Check uid for this each-block
		var eachUid = uidFor(morph);
		
		// Get the value
		let list = this._getValue(params[0]);
		reverseEach(list, (item : any, i : any) => {

			// Get a unique id for the item.
			let uid = uidFor(item);
			let itemKey = 'each:' + eachUid + ':' + i + ':' + uid;
			
			// Render item
			blocks.template.yieldItem(itemKey, [item, i]);

		});
		
	}

	repeat(params : any[], attributeHash : Dictionary<any>, blocks : any, morph : any) {

		let repeatUid = uidFor(morph);
		let times = this._getValue(params[0]);
		for (let q = 0; q < times; q++) {

			let itemKey = 'repeat:' + repeatUid + ':' + q;
			blocks.template.yieldItem(itemKey, [q, q]);

		}


	}

	/**
	 * @method if	 
	 */
	if(params : any[], attributeHash : Dictionary<any>, blocks : any /*, morph, renderer, scope, visitor*/) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, blocks, isTruthlike(value));		

	}

	ifOne(params : any[], attributeHash : Dictionary<any>, blocks : any /*, morph, renderer, scope, visitor*/) {
		
		let trueConditions = _.filter(this._getValue(params), (value) => {
			return !!this._getValue(value);
		});

		return this._ifUnless(params, blocks, isTruthlike(trueConditions.length > 0));
	}

	ifAll(params : any[], attributeHash : Dictionary<any>, blocks : any /*, morph, renderer, scope, visitor*/) {
		
		let trueConditions = _.filter(this._getValue(params), (value) => {
			return !!this._getValue(value);
		});

		return this._ifUnless(params, blocks, isTruthlike(trueConditions.length === params.length));
	}

	/**
	 * @method unless
	 */
	unless(params : any[], attributeHash : Dictionary<any>, blocks : any /*, morph, renderer, scope, visitor*/) {

		// Get the value
		let value = this._getValue(params[0]);
		return this._ifUnless(params, blocks, !isTruthlike(value));

	}

	_ifUnless(params : any[], blocks : any, show : boolean) {

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



	//////////////////////
	// Boolean switches //
	//////////////////////

	either(params : any[]) {

		// Look for a truthlike param
		let values = this._getValues(params);
		for (let q = 0; q < values.length; q++) {
			if (isTruthlike(values[q])) return true;
		}
		return false;

	}
	neither(params : any[]) {

		return !this.either(params);

	}
	both(params : any[]) {

		// Look for a non-truthlike param
		let values = this._getValues(params);
		for (let q = 0; q < values.length; q++) {
			if (!isTruthlike(values[q])) return false;
		}
		return true;

	}

	


	////////////
	// Values //
	////////////

	concat(params : any[], attributeHash : Dictionary<any> /*, blocks, morph, renderer, scope, visitor*/) {

		attributeHash = _.defaults(attributeHash, {
			separator: ''
		});
		return this._getValues(params).join(attributeHash.separator);

	}

	object(params : any[], attributeHash : Dictionary<any>) {

		// Convert attributes to object
		let obj : Dictionary<any> = {};
		_.each(attributeHash, (value, key) => {
			obj[key] = this._getValue(value);
		});
		
		return obj;

	}

	get(params : any[]) {

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


	firstIn(params : any[]) {

		let arr = this._getValue(params[0]);
		if (arr instanceof ObservableArray) {
			return arr.first();
		} else {
			return _.first(arr);
		}

	}

	equal(params : any[]) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);

		return value1 == value2;

	}
	notEqual(params : any[]) {
		return !this.equal(params);
	}

	not(params : any[]) {
		let v = this._getValue(params[0]);
		if (v instanceof ObservableArray) v = v.length;
		return !v;
	}

	isNull(params : any[]) {
		return this._getValue(params[0]) === null;
	}
	isSet(params : any[]) {
		let value = this._getValue(params[0]);
		return value !== null && value !== undefined;
	}

	gt(params : any[]) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 > value2;

	}
	gte(params : any[]) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 >= value2;

	}
	lt(params : any[]) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 < value2;

	}
	lte(params : any[]) {

		// Get params
		let value1 = this._getValue(params[0]);
		let value2 = this._getValue(params[1]);
		return value1 <= value2;

	}

	isObject(params : any[]) {
		// Get param
		let value = this._getValue(params[0]);
		return value instanceof Object;

	}

	valueOr(params : any[]) {
		let value = this._getValue(params[0]);
		let defaultValue = this._getValue(params[1]);

		return (value) ? value : defaultValue;
	}

	fallback(params : any[]) {

		// Loop to find first non-null value
		for (let i in params) {
			let v = this._getValue(params[i]);
			if (v) return v;
		}

	}


	/////////////
	// Methods //
	/////////////

	method(params : any[]) {

		// Get params
		params = this._getValues(params);
		let obj = params.shift();
		let key = params.shift();

		// No method
		if (!obj[key]) throw new Error(`Problem in 'method'-helper: there is no method '${key}' on the object`);

		// Do it.
		return obj[key].apply(obj, params);


	}


	////////////
	// Models //
	////////////

	isDirty(params : any[]) {

		// Get params
		let model = this._getValue(params[0]);
		let attributes : any[] = [];
		for (let q = 1; q < params.length; q++) {
			attributes.push(this._getValue(params[q]));
		}
	
		// Any of those dirty?
		return !!_.find(attributes, (attr) => {
			return model.isDirty(attr);
		});

	}


	//////////////////
	// HTML Helpers //
	//////////////////

	attributesFrom(params : any[], attributeHash : Dictionary<any>, blocks : any, morph : any) {

		console.log(params, attributeHash, blocks, morph);

	}


	/////////////
	// Strings //
	/////////////

	isNumeric(params : any[]) {
		
		let string = this._getValue(params[0]);
		return /^-?\d*(\.\d+)?$/.test(string);

	}

	camelize(params : any[]) {

		let string = this._getValue(params[0]);
		let capitalFirstLetter = !!this._getValue(params[1]);
		
		return inflection.camelize(string, !capitalFirstLetter);

	}

	string(params : any[]) {

		// First is method, second is str
		let args = this._getValues(params);
		let method = args.shift();
		let str = args.shift();
		if (!str) return null;

		return str[method].apply(str, args);

	}

	underscore(params : any[]) {

		// First is method, second is str
		let args = this._getValues(params);
		let method = args.shift();		
		return _[method].apply(this, args);

	}
	

	////////////
	// Arrays //
	////////////
	
	count(params : any[]) {

		let value = this._getValue(params[0]);
		if (value instanceof Observable) {
			return _.size(value.attributes);
		}
		return value.length;

	}

	contains(params : any[]) {
		let list = this._getValue(params[0]);
		let value = this._getValue(params[1]);
		return _.contains(list, value);
	}

	/////////////////////
	// Dates and times //
	/////////////////////

	moment(params : any[]) {
		let value = this._getValue(params[0]);
		if (!moment.isMoment(value)) {
			value = moment(value);
		}
		return value;

	}

	momentFormat(params : any[]) {
		let value = this._getValue(params[0]);
		let format = this._getValue(params[1]);
		if (moment.isMoment(value)){ 
			return value.format(format);
		} else {
			return value;
		}
	}

	momentIsAfter(params : any[]) {
		let moment1 = this._getValue(params[0]);
		let moment2 = this._getValue(params[1]);

		if (moment.isMoment(moment1) && moment.isMoment(moment2)) {
			return moment1.isAfter(moment2);
		} 
		
		return false;
		
	}


	fileSize(params : any[]) {
		let value = this._getValue(params[0]);
		return filesize(value);
	}


	/////////////
	// Numbers //
	/////////////

	add(params : any[]) {
		let values = this._getValues(params);
		return values.reduce((total, item) => { 
			return item + total;
		}, 0);
	}
	subtract(params : any[]) {
		let values = this._getValues(params);
		let startValue = values.shift();
		return values.reduce((total, item) => { 
			return total - item;
		}, startValue);	
	}

	numberFormat(params : any[]) {
		let value = this._getValue(params[0]);
		if (value === undefined) return '';
		return value.toLocaleString(Application.getInstance().i18n.language);
	}

	round(params : any[]) {
		let value = this._getValue(params[0]);
		let digits = params.length > 1 ? this._getValue(params[1]) : 0;
		if (digits > 0) {
			let pow = Math.pow(10, digits);
			return Math.round(value * pow) / pow;
		} else {
			return Math.round(value);
		}
	}
	
	max(params : any[]) {
		let values = this._getValues(params);
		return _.max(values);
	}
	
	min(params : any[]) {
		let values = this._getValues(params);
		return _.min(values);
	}

	multiply(params : any[]) {
		let values = this._getValues(params);
		let result = 1;
		_.each(values, (v) => {
			result *= parseFloat(v);
		});
		return result;
	}


	///////////
	// Debug //
	///////////

	log(params/*, attributeHash : Dictionary<any>, blocks, morph, renderer, scope, visitor*/) {
		console.log.apply(console, this._getValues(params));
	}

	'query-params'(params : any[], attributeHash : Dictionary<any> /*, blocks, morph, renderer, scope, visitor*/) {
		return QueryString.stringify(this._getHashValues(attributeHash));
	}



	//////////////////
	// Localization //
	//////////////////

	t(params : any[], attributeHash : Dictionary<any>) {

		// Get the key
		let key = this._getValue(params[0]);

		// Get from app
		return Application.getInstance().i18n.translate(key, attributeHash, this._getValue(params[1]));

	}

	tText(params : any[], attributeHash : Dictionary<any>) {

		// Get value
		let v = this.t(params, attributeHash);

		// Plainify
		return $('<span>' + v + '</span>').text();

	}

	//////////////
	// Internal //
	//////////////

	_getValue(param : any) : any {
		return this.renderer.hooks.getValue(param);
	}

	_getValues(params : any[]) {
		return params.map((value) => {
			return this._getValue(value);
		});
	}
	_getHashValues(attributeHash : Dictionary<any>) {
		var result : Dictionary<any> = {};
		_.each(attributeHash, (value, key) => {
			result[key] = this._getValue(value);
		});
		return result;
	}

	
	static User : Dictionary<Function> = {};

}


