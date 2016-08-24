import _ from 'underscore';

import Obj from '~/Core/Obj';
import Observable from '~/Core/Observable';

/**
 * @module Dom
 */
class View extends Obj
{

	constructor() {
		super();


		this.data = new Observable();



		this.dataPromises = {};


		this.loadPromises = [];



	}

	with(...args) {

		// Is it a single object hash?
		if (args.length === 1 && typeof args[0] === 'object') {

			// Do an each
			_.each(args[0], (value, key) => {
				this.with(key, value);
			});

		} else {

			// Use key/value
			var [key, value] = args;
			
			// Is the key a string?
			if (typeof key !== 'string') throw new TypeError('[Dom.View] The "with" method accepts either a key, value or hash-object as arguments.');

			// Is the data a promise?
			if (value instanceof Promise) {

				// Add to promises
				this.dataPromises[key] = value;
				this.loadPromises.push(value);

			} else {

				// Set it now
				this.data.set(key, value, true);

			}

		}

		return this;

	} 



}

module.exports = View;