import $ from 'jquery';

import Reference from '~/Core/Reference';

/**
 * @module Dom
 */
class Binding
{

	/**
	 * @class Dom.Binding
	 * 
	 * @constructor
	 * @param  {Dom.Renderer} 							renderer   
	 * @param  {Core.Observable|Core.ObservableArray} 	observable 
	 * @param  {string} 								path       	
	 * @param  {Dom.View}								view
	 */
	constructor(renderer, observable, path, view) {

		/**
		 * The Renderer this Binding has been created by. This is 
		 * used to be able to hook back into Rendere functions.
		 *
		 * @property renderer
		 * @type {Dom.Renderer}
		 */
		this.renderer = renderer;

		/**
		 * The Observable (or ObservableArray) that contains the data.
		 * 
		 * @property observable
		 * @type {Core.Observable|Core.ObservableArray}
		 */
		this.observable = observable;

		/**
		 * The path/key in the Observable to observe
		 *
		 * @property path
		 * @type {string}
		 */
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



		this.view = view;


		////////////////
		// Now watch! //
		////////////////

		this.observable.observe(path, () => {

			// Trigger updates for all morphs
			this.morphs.forEach((morph) => {
				morph.isDirty = true;
				this.view.scheduleRevalidate();
			});

		});

	}

	/**
	 * Get the current value of the data object
	 *
	 * @method getValue
	 * @return {mixed}
	 */
	getValue() {
		return this.observable.get(this.path);
	}


	setValue(value, morph = null) {

		if (morph) {

			// Make sure the morph is not updated itself by this value setting
			morph.lastValue = value;

		}

		return this.observable.set(this.path, value);

	}


	getReference() {
		if (!this.reference) {
			this.reference = new Reference(this.observable, this.path);
		}
		return this.reference;
	}


	/**
	 * Add a morph object to the list of morphs, so that it will
	 * be updated when the data changes. And in cases when applicable,
	 * vice-versa.
	 *
	 * @method addMorph
	 * @param {HTMLBarsMorph} morph 
	 */
	addMorph(morph) {

		// Is this an already bound morph?
		if (this.morphs.has(morph)) return;

		//////////////////////////////////////////
		// Add the morph, for data->dom binding //
		//////////////////////////////////////////

		this.morphs.add(morph);


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

}


Binding.TwoWay = {
	
	InputValue: {
		match: (morph) => {
			return morph.element && /^INPUT$/.test(morph.element.tagName) 
				&& morph.attrName === 'value'
				&& /^text|password|number|email$/.test(morph.element.type);
		},
		bind: (binding, morph) => {

			// Listen to key up, etc
			var $element = $(morph.element);
			var lastValue = $element.val();
			$element.on('keyup change paste', () => {
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


module.exports = Binding;