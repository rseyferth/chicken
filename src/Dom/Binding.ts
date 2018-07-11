import $ from 'jquery';
import IObservable from '../Core/IObservable';
import Renderer from './Renderer';

import Morph from 'htmlbars/dist/cjs/htmlbars-runtime/morph';
import Observable from '../Core/Observable';
import Reference from '../Core/Reference';
import { Dictionary } from '../../node_modules/@types/lodash';

export default class Binding
{

	renderer : Renderer;
	observable : IObservable;
	path? : string;

	reference? : Reference;

	morphs : Set<Morph>;

	changeCallback : Function;

	/**
	 * @class Dom.Binding
	 * 
	 * @constructor
	 * @param  {Dom.Renderer} 							renderer   
	 * @param  {Core.Observable|Core.ObservableArray} 	observable 
	 * @param  {string} 								path       	
	 */
	constructor(renderer : Renderer, observable : IObservable, path? : string) {

		this.renderer = renderer;
		this.observable = observable;
		this.path = path;

		/**
		 * The list of 'morph' objects that are bound by this Binding. A
		 * morph refers to a specific part of the DocumentFragment that can be
		 * updated. These morphs are provides by the HTMLBars package.
		 * 
		 * @property morphs
		 * @type {Set} 
		 */
		this.morphs = new Set();


		////////////////
		// Now watch! //
		////////////////

		// What to do when value changes
		this.changeCallback = () => {
			
			// Trigger updates for all morphs
			this.morphs.forEach((morph) => {

				morph.isDirty = true;
				if (morph.view) morph.view.scheduleRevalidate();
				if (morph.component) morph.component.scheduleRevalidate();

			});

		};

		// Now listen to the object
		if (this.path) {
			try {
				(<Observable>this.observable).observe(path, this.changeCallback);				
			} catch (ex) {
				
			}
		} else {
			this.observable.study(this.changeCallback);
		}

	}

	/**
	 * Get the current value of the data object
	 *
	 * @method getValue
	 * @return {mixed}
	 */
	getValue() : any {
		
		// Get a path value
		if (this.path) {
			return this.observable.get(this.path);
		}

		// Then return the whole thing
		return this.observable;

	}


	setValue(value, morph? : Morph) : any {

		if (morph) {

			// Make sure the morph is not updated itself by this value setting
			morph.lastValue = value;

		}

		return (<Observable>this.observable).set(this.path, value);

	}


	getReference() {
		if (!this.reference) {
			this.reference = new Reference(<Observable>this.observable, this.path!);
		}
		return this.reference;
	}


	destroy() {

		// Unlisten the object
		if (this.path) {
			(<Observable>this.observable).disregard(this.path, this.changeCallback);
		} else {
			this.observable.neglect(this.changeCallback);
		}


	}


	/**
	 * Add a morph object to the list of morphs, so that it will
	 * be updated when the data changes. And in cases when applicable,
	 * vice-versa.
	 *
	 * @method addMorph
	 * @param {HTMLBarsMorph} morph 
	 * @param {object} scope
	 */
	addMorph(morph, scope) {

		// Is this an already bound morph?
		if (this.morphs.has(morph)) return;

		//////////////////////////////////////////
		// Add the morph, for data->dom binding //
		//////////////////////////////////////////

		this.morphs.add(morph);

		// Save the component and view
		morph.view = scope.view || scope.self;
		if (scope.component) morph.component = scope.component;


		///////////////////////////////////////////
		// Check node type for dom->data binding //
		///////////////////////////////////////////
		
		for (var key in Binding.TwoWay) {

			// Check if it applies
			var twoWay = Binding.TwoWay[key];
			if (twoWay.match(morph)) {

				// Let's bind!
				twoWay.bind(this, morph);
				break;
			}

		}

	}

	
	static TwoWay : Dictionary<any> = {
		
		InputValue: {
			match: (morph) => {
				return morph.element && /^INPUT$/.test(morph.element.tagName) 
					&& morph.attrName === 'value'
					&& /^text|search|date|time|password|number|range|email$/.test(morph.element.type);
			},
			bind: (binding, morph) => {
	
				// Listen to key up, etc
				var $element = $(morph.element);
				var lastValue = $element.val();
				$element.on('input keyup change paste', () => {
					var v = $element.val();
					if (v !== lastValue) {
						binding.setValue(v, morph);
						lastValue = v;
					}
				});
	
			}
		},
	
		TextareaContent: {
			match: (morph) => {
				return morph.contextualElement && /^TEXTAREA$/.test(morph.contextualElement.tagName) && morph.attributeName === undefined;
			},
			bind: (binding, morph) => {
	
				// Listen to key up, etc
				var $element = $(morph.contextualElement);
				$element.on('keyup change paste', () => {
					binding.setValue($element.val(), morph);
				});
	
			}
	
		},
	
		SelectValue: {
			match: (morph) => {
				return morph.element && /^SELECT$/.test(morph.element.tagName) && morph.attrName === 'value';
			},
			bind: (binding, morph) => {
	
				// Listen to change
				var $element = $(morph.element);
				$element.on('change', () => {
					binding.setValue($element.val(), morph);
				});
	
			}
	
		},
	
		CheckboxChecked: {
			match: (morph) => {
				return morph.element && /^INPUT$/.test(morph.element.tagName) 
					&& morph.attrName === 'checked'
					&& /^checkbox$/.test(morph.element.type);
			},
			bind: (binding, morph) => {
	
				// Listen to key up, etc
				var $element = $(morph.element);
				$element.on('change', () => {
					binding.setValue($element.prop('checked'), morph);
				});
	
			}
		}
	
	
	
	};

}	
