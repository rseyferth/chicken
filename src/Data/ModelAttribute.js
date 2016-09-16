import moment from 'moment';

class ModelAttribute {

	constructor(name, type) {

		this.name = name;
		this.type = type;


		this.isPrimaryKey = false;

		this.size = null;

	}

	primary(isPrimaryKey = true) {
		this.isPrimaryKey = isPrimaryKey;
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


			///////////
			// Dates //
			///////////

			// Date or date time
			case ModelAttribute.Date:
			case ModelAttribute.DateTime:
				return value ? moment(value) : value;

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


			///////////
			// Dates //
			///////////

			// Date or date time
			case ModelAttribute.Date:
				return moment.isMoment(value) ? value.format('YYYY-MM-DD') : value;

			case ModelAttribute.DateTime:
				return moment.isMoment(value) ? value.format('YYYY-MM-DD HH:mm:ss') : value;

			default:
				return value;

		}


	}






}





ModelAttribute.Number = 'Number';
ModelAttribute.Integer = 'Integer';
ModelAttribute.String = 'String';
ModelAttribute.Enum = 'Enum';

ModelAttribute.Date = 'Date';
ModelAttribute.DateTime = 'DateTime';

module.exports = ModelAttribute;