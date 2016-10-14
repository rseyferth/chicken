import Observable from '~/Core/Observable';

/**
 * @module Data
 */
class Pivot extends Observable
{

	/**
	 * @class Data.Pivot
	 *
	 * @constructor
	 * @param  {Data.Model} model        
	 * @param  {Data.Model} owner        
	 * @param  {Data.Relationship} relationship 
	 */
	constructor(model, owner, relationship, initValues = {}) {

		super(initValues);

		// Localize
		this.model = model;
		this.owner = owner;
		this.relationship = relationship;

	}

	getModel() {
		return this.model;
	}
	getOwner() {
		return this.owner;
	}	

}

module.exports = Pivot;