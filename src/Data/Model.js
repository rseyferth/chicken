import Observable from '~/Core/Observable';

/**
 * @module Data
 */
class Model extends Observable
{

	constructor(initValues = {}, convertToObservables = true) {	

		super(initValues, convertToObservables);	

	}




}

module.exports = Model;