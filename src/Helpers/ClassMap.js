/**
 * @module Helpers
 */

const ClassMap = {

	classes: new Map(),

	get(className) {
		return this.classes.get(className);
	},

	register(className, c) {
		this.classes.set(className, c);
		return this;
	},

	create(className, args = []) {
		var c = this.get(className);
		if (c === undefined) throw new Error('The ' + className + ' class is not registered in the ClassMap');
		return new c(...args);
	}

};



module.exports = ClassMap;