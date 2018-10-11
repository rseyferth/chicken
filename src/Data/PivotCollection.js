import Collection from '../Data/Collection';
import Pivot from '../Data/Pivot';

/**
 * @module Data
 */
class PivotCollection extends Collection
{

	constructor(modelClass, relationship) {

		super(modelClass);

		// Localize
		this.relationship = relationship;

	}

	add(model, pivotAttributes = {}) {

		// Already a pivot?
		if (!model.isPivot()) {
		
			// Proxy it
			model = Pivot.createFor(model, pivotAttributes);

		}

		// Add it.
		super.add(model);
		
		return this;

	}


}

export default PivotCollection;