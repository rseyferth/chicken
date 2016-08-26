import _ from 'underscore';
import $ from 'jquery';

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
	 */
	constructor(renderer, observable, path) {

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
		 * @type {string}
		 */
		this.path = path;


		/**
		 * The list of 'morph' objects that are bound by this Binding. A
		 * morph refers to a specific part of the DocumentFragment that can be
		 * updated. These morphs are provides by the HTMLBars package.
		 * 
		 * @property morphs
		 * @type {Array} 
		 */
		this.morphs = [];


		////////////////
		// Now watch! //
		////////////////

		this.observable.observe(path, () => {

			// Trigger updates for all morphs
			_.each(this.morphs, (morph) => {
				this.applyValue(morph);				
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


	setValue(value) {
		return this.observable.set(this.path, value);
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

		//////////////////////////////////////////
		// Add the morph, for data->dom binding //
		//////////////////////////////////////////

		this.morphs.push(morph);


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


	/**
	 * Apply the current value to the given morph
	 *
	 * @method applyValue
	 * @param  {HTMLBarsMorph} 	morph
	 */
	applyValue(morph) {

		// Set it		
		morph.setContent(this.renderer.hooks.getValue(this));

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
			$element.on('keyup change paste', () => {
				binding.setValue($element.val());
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
				binding.setValue($element.val());
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
				binding.setValue($element.val());
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
				binding.setValue($element.prop('checked'));
			});

		}
	}



};


module.exports = Binding;