import HTMLBars from 'htmlbars-standalone';

import View from '~/Dom/View';

/**
 * @module Dom
 */
class Component extends View
{

	/**
	 * @class Dom.Component
	 * @extends Dom.View
	 */
	constructor(name, source, morph, scope, parameters, attributeHash, visitor, subTemplates, initCallback = null, renderer = null) {

		super(source, initCallback, renderer);

		this.name = name;

		this.morph = morph;

		this.scope = scope;

		this.parameters = parameters;
		this.attributeHash = attributeHash;
		this.visitor = visitor;

		this.subTemplates = subTemplates;


	}


	renderSync() {

		// Create the template
		try {

			// Render it
			this.renderResult = this.getTemplate().render(this, this.renderer, {
				scope: this.scope,
				template: this.subTemplates.default
			});
			this.documentFragment = this.renderResult.fragment;

		} catch (error) {
			this.rejectPromise('render', error);
			return;
		}


		// Study the object
		this.study(() => {
			this.scheduleRevalidate();
		});


		this.morph.setNode(this.documentFragment);

	}



	getSubTemplate(key) {

		let block = HTMLBars.Util.Template.blockFor(
			HTMLBars.Runtime.render,
			this.subTemplates[key],
			{
				scope: this.scope
			}
		);

		return block;

	}


}






Component.registry = new Map();


module.exports = Component;