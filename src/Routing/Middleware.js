class Middleware
{

	constructor(name, callback) {

		this.name = name;

		this.callback = callback;

	}

}

Middleware.registry = new Map();
Middleware.register = (middleware, name = null) => {
	
	// Check arguments
	if (!(middleware instanceof Middleware)) {
		middleware = new Middleware(name, middleware);
	} else if (name === null) {
		name = middleware.name;
	}

	// Store it.
	Middleware.registry.set(name, middleware);

};

export default Middleware;