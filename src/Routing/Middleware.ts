export default class Middleware
{

    name : string;
    callback : Function;

	constructor(name : string, callback : Function) {

		this.name = name;
		this.callback = callback;

	}

    static registry : Map<string, Middleware> = new Map();
    static register(middleware : Middleware | Function, name? : string) : void {
	
        // Check arguments
        if (!(middleware instanceof Middleware)) {
            middleware = new Middleware(name!, middleware);
        } else if (name === null) {
            name = middleware.name;
        }
    
        // Store it.
        Middleware.registry.set(name!, middleware);
    
    };


}

