import Collection from './Collection';
import Relationship from './Relationship';
import { ModelConstructor } from './Model';
import { createPivotFor } from './Pivot';

/**
 * @module Data
 */
export default class PivotCollection extends Collection
{

    relationship : Relationship;

	constructor(modelClass : ModelConstructor, relationship : Relationship) {

		super(modelClass);

		// Localize
		this.relationship = relationship;

	}

	add(model, pivotAttributes = {}) {

		// Already a pivot?
		if (!model.isPivot()) {
		
			// Proxy it
			model = createPivotFor(model, pivotAttributes);

		}

		// Add it.
		super.add(model);
		
		return this;

	}


}