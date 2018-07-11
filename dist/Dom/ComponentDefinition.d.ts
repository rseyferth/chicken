/// <reference types="marked" />
/// <reference types="underscore" />
import { Dictionary } from "../../node_modules/@types/underscore";
import { Renderer } from "../../node_modules/@types/marked";
/**
 * @module Dom
 */
export default class ComponentDefinition {
    name: string;
    source: string;
    initCallback: Function;
    renderer: Renderer;
    methods: Dictionary<Function>;
    constructor(name: string, source: string, initCallback: Function, methods?: Dictionary<Function>, renderer?: Renderer);
}
