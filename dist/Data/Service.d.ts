import Observable from "../Core/Observable";
export default abstract class Service extends Observable {
    name: string;
    constructor(name: string);
    abstract initialize(): void;
    abstract load(): Promise<any>;
    static registry: Map<string, any>;
    static services: Map<string, Service>;
    static get(name: string): Service;
}
