import $ from 'jquery';
import { Dictionary } from '../../node_modules/@types/underscore';

export default class Redirect
{

    uri : string;
    flash : Dictionary<any> = {};

	constructor(uri : string) {

		this.uri = uri;
		
	}

	with(dataOrKey : any, value? : any) {

		// Value?
		let data = dataOrKey;
		if (value) {
			data = {};
			data[dataOrKey] = value;
		}

		$.extend(this.flash, data);

		return this;
	}

	withError(message : string) {
		return this.with('error', message);
	}





}