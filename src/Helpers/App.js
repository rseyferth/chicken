import ClassMap from '../Helpers/ClassMap';

module.exports = function() {
	return ClassMap.get('Application').getInstance();
};