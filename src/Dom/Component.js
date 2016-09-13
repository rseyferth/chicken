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


		this.templateString = '<h1>Hoi</h1>{{yield}}';

	}


	renderSync() {

		// Create block
		let block = HTMLBars.Util.Template.blockFor(
			HTMLBars.Runtime.render,
			this.templateString,
			{
				scope: this.scope
			}
		);
		console.log(this.scope);

		// Render it.
		this.renderer.hooks.block(this.morph, this.renderer, this.scope, this.name, this.parameters, this.attributeHash, this.subTemplates.default, this.subTemplates.inverse, this.visitor);

		return;

		// Create the template
		try {

			// Render it into the morph
			
			console.log(this.getTemplate());
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


	getTemplate() {

		// Create
		if (!this.template) {
			this.template = HTMLBars.Util.Template.blockFor(
				HTMLBars.Runtime.render,
				this.templateString,
				{

				});
			console.log('template', this.template);
		}
		return this.template;

	}



}






Component.registry = new Map();


module.exports = Component;