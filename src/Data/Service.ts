import Observable from "../Core/Observable";

export default abstract class Service extends Observable
{

    name : string;
    constructor(name : string) {

		super();

		this.name = name;
		this.initialize.apply(this);

	}

	abstract initialize() : void;
	abstract load() : Promise<any>;


    static registry : Map<string, any> = new Map();
    static services : Map<string, Service> = new Map();

    static get(name : string) : Service {

        // Created?
        if (!Service.services.has(name)) {
    
            // Do we know it?
            if (!Service.registry.has(name)) {
                throw new Error(`There is no service registered with the name "${name}"`);
            }
    
            // Instantiate
            let ServiceClass : any = Service.registry.get(name)!;
            let service = new ServiceClass(name);
    
            // Store
            Service.services.set(name, service);
    
        }
    
        return Service.services.get(name)!;
    
    
    }

}