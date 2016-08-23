module.exports = function(cls) {

	cls.create = (...args) => {

		return new cls(...args);

	};


	return cls;

};