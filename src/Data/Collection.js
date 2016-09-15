import ObservableArray from '~/Core/ObservableArray';

class Collection extends ObservableArray
{

	constructor(modelClass = null) {

		super();

		this.modelClass = null;

	}

}
module.exports = Collection;