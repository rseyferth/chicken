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
	constructor(name, source, initCallback = null, renderer = null) {

		super(source, initCallback, renderer);

		this.name = name;

	}

}


Component.registry = new Map();


Component.initializeFromHelper = (/*definition, params, attributesHash, options*/) => {

//	console.log(definition, params, attributesHash, options);


};



module.exports = Component;