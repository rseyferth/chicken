import Observable from '~/Core/Observable';

/**
 * @module Data
 */
class Model extends Observable
{

	constructor(initValues = {}, convertToObservables = true) {	

		super(initValues, convertToObservables);	

	}


	computed(...args) {

		// Dependencies?
		if (args.length === 0) throw new Error('The `computed` method needs at least one argument.');

	}



}

module.exports = Model;