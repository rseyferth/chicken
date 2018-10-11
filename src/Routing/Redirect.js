import $ from 'jquery';

class Redirect
{



	constructor(uri) {

		this.uri = uri;
		this.flash = {};

	}

	with(dataOrKey, value = null) {

		// Value?
		let data = dataOrKey;
		if (value) {
			data = {};
			data[dataOrKey] = value;
		}

		$.extend(this.flash, data);

		return this;
	}

	withError(message) {
		return this.with('error', message);
	}





}

export default Redirect;