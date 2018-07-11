export default class Middleware {
    name: string;
    callback: Function;
    constructor(name: string, callback: Function);
    static registry: Map<string, Middleware>;
    static register(middleware: Middleware | Function, name?: string): void;
}
