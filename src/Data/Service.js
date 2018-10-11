import Observable from '../Core/Observable';

class Service extends Observable
{


	constructor(name) {

		super();

		this.name = name;
		this.initialize.apply(this);

	}

	initialize() {
		throw new Error('The ' + this.name + ' service has not implemented the "initialize" method');		
	}
	load() {
		throw new Error('The ' + this.name + ' service has not implemented the "load" method');				
	}


}

Service.registry = new Map();
Service.services = new Map();

Service.get = (name) => {

	// Created?
	if (!Service.services.has(name)) {

		// Do we know it?
		if (!Service.registry.has(name)) {
			throw new Error('There is no service registed with the name "' + name + '"');
		}

		// Instantiate
		let ServiceClass = Service.registry.get(name);
		let service = new ServiceClass(name);

		// Store
		Service.services.set(name, service);

	}

	return Service.services.get(name);


};

export default Service;