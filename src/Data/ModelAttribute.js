import _ from 'underscore';

import moment from 'moment';
import Observable from '../Core/Observable';
import ObservableArray from '../Core/ObservableArray';

class ModelAttribute {

	constructor(name, type) {

		this.name = name;
		this.type = type;

		this.isPrimaryKey = false;
		this.isNullable = false;
		this.isUnique = false;

		this.defaultValue = undefined;		
		this.includeInRequests = true;

		this.size = null;

		this.enumOptions = null;

	}

	default(value) {
		this.defaultValue = value;
		return this;
	} 

	primary(isPrimaryKey = true) {
		this.isPrimaryKey = isPrimaryKey;
		return this;
	}
	unique(isUnique = true) {
		this.isUnique = isUnique;
		return this;
	}

	nullable(isNullable = true) {
		this.isNullable = isNullable;
		return this;
	}

	hidden(isHiddenFromRequests = true) {
		this.includeInRequests = !isHiddenFromRequests;
		return this;
	}


	/**
	 * Cast given (database) value for use in the application,
	 * according to the type of this attribute
	 * 
	 * @method cast
	 * @param  {mixed} value 
	 * @return {mixed}       
	 */
	cast(value) {

		// Undefined and null will remain so
		if (value === undefined || value === null) return value;

		switch (this.type) {

			////////////////
			// Primitives //
			////////////////

			// Number
			case ModelAttribute.Number: 
				return value instanceof Number ? value : Number.parseFloat(value);

			// Integer
			case ModelAttribute.Integer:
				return Number.isInteger(value) ? value : Number.parseInt(value);

			// String
			case ModelAttribute.String:
				return value instanceof String ? value : '' + value;

			// Array
			case ModelAttribute.Array: 
				return typeof value === 'string' ? JSON.parse(value) : value;

			///////////
			// Dates //
			///////////

			// Date or date time
			case ModelAttribute.Date:
				if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
					return moment(value.substr(0, 10));	
				}
				// Fall through to date-time

			case ModelAttribute.DateTime:
				return value && !moment.isMoment(value) ? moment(value) : value;

			default:
				return value;

		}

	}

	/**
	 * Cast given application value back for use in the database/api.
	 *
	 * @method uncast
	 * @param  {mixed} value 
	 * @return {mixed}       
	 */
	uncast(value) {

		// Undefined and null will remain so
		if (value === undefined || value === null) return value;

		let v;
		switch (this.type) {

			////////////////
			// Primitives //
			////////////////

			// Number
			case ModelAttribute.Number: 
				return value instanceof Number ? value : Number.parseFloat(value);

			// Integer
			case ModelAttribute.Integer:
				return Number.isInteger(value) ? value : Number.parseInt(value);

			// String
			case ModelAttribute.String:
				return value instanceof String ? value : '' + value;

			//Array
			case ModelAttribute.Array: 
				if (value instanceof ObservableArray) value = value.toArray();
				return value;				


			///////////
			// Dates //
			///////////

			// Date or date time
			case ModelAttribute.Date:
				return moment.isMoment(value) ? value.format('YYYY-MM-DD') : value;

			case ModelAttribute.DateTime:
				return moment.isMoment(value) ? value.format('YYYY-MM-DD HH:mm:ss') : value;


			/////////////
			// Objects //
			/////////////

			case ModelAttribute.Object:
				v = _.omit(value instanceof Observable ? value.attributes : value, (foo, key) => {
					return /^__/.test(key);
				});
				return v;
				

			default:
				return value;

		}


	}


	getDefaultValue() {

		// Is there a value?
		if (this.defaultValue) return this.defaultValue;

		// Nullable?
		if (this.isNullable) return null;

		// Default for type
		switch (this.type) {


			////////////////
			// Primitives //
			////////////////

			// Number
			case ModelAttribute.Number: 
			case ModelAttribute.Integer:
				return 0;

			// String
			case ModelAttribute.String:
				return '';

			// Boolean
			case ModelAttribute.Boolean:
				return false;


			///////////
			// Dates //
			///////////

			// Date or date time
			case ModelAttribute.DateTime:
			case ModelAttribute.Time:
			case ModelAttribute.Date:
				return moment();

			///////////
			// Model //
			///////////
			
			case ModelAttribute.Model:
			case ModelAttribute.Translations:
				return {};

			default:
				return null;
 

		}

	}





}





ModelAttribute.Number = 'Number';
ModelAttribute.Boolean = 'Boolean';
ModelAttribute.Integer = 'Integer';
ModelAttribute.String = 'String';
ModelAttribute.Enum = 'Enum';

ModelAttribute.Date = 'Date';
ModelAttribute.DateTime = 'DateTime';
ModelAttribute.Time = 'Time';

ModelAttribute.Array = 'Array';
ModelAttribute.Object = 'Object';
ModelAttribute.Translations = 'Translations';
ModelAttribute.Model = 'Model';


export default ModelAttribute;