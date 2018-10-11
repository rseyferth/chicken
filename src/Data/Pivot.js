import ClassMap from '../Helpers/ClassMap';
import Model from '../Data/Model';

/**
 * @module Data
 */
class Pivot extends Model
{




}

ClassMap.register('Pivot', Pivot);


Pivot.createFor = (model, pivotAttributes) => {

	// The pivot itself is a model too
	let pivot = new Pivot(pivotAttributes);
	
	// Make it
	let proxy = new Proxy(model, {

		get: function(target, property/*, receiver*/){

			// Get pivot?
			if (property === 'getPivot') {
				return () => {
					return pivot;
				};
			}
			if (property === 'getModel') {
				return () => {
					return model;
				};
			}
			if (property === 'pivot') {
				return pivot;
			}

			// Is pivot.
			if (property === 'isPivot'){
				return () => {
					return true;
				};
			}

			// Is it a method?
			let value = target[property];
			if (typeof value === 'function') {

				// Wrap it
				return (...args) => {

					// Is the first argument a key, starting with 'pivot.'?
					if (args.length > 0 && typeof args[0] === 'string' && args[0].match(/^pivot\./)) {
						
						// Pass on to the pivot model
						args[0] = args[0].replace(/^pivot\./, '');
						return pivot[property].apply(pivot, args);

					} else {

						// Pass on to the regular model
						return target[property].apply(target, args);

					}

				};

			} else {

				// Normal behaviour
				return value;

			}


		}


	});

	return proxy;


};


export default Pivot;