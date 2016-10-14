import _ from 'underscore';

import Collection from '~/Data/Collection';

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

		// Add it.
		super.add(model);

		// Check pivot
		if (_.size(pivotAttributes) > 0) {
			model.setPivot(this.relationship.pivotModel, pivotAttributes);
		}
		
		return this;

	}


}

module.exports = PivotCollection;