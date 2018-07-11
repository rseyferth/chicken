import Observable from './Observable';
/**
 * @module Core
 */
export default class ComputedProperty {
    dependencies: string[];
    callback: Function;
    observable: Observable;
    name: string;
    /**
     * @class Core.ComputedProperty
     *
     * @constructor
     * @param  {Array}   			dependencies
     * @param  {Function} 			callback
     */
    constructor(dependencies: string[], callback: Function);
    getValue(): any;
    toString(): any;
    initialize(name: string, observable: Observable): this;
}
