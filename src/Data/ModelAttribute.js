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

}





ModelAttribute.Number = 'Number';
ModelAttribute.Integer = 'Integer';
ModelAttribute.String = 'String';
ModelAttribute.Enum = 'Enum';

ModelAttribute.Date = 'Date';
ModelAttribute.DateTime = 'DateTime';

module.exports = ModelAttribute;