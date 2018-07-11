import { Dictionary } from "../../node_modules/@types/underscore";
import { Renderer } from "../../node_modules/@types/marked";
import Application from '../Application';

/**
 * @module Dom
 */
export default class ComponentDefinition
{

    name : string;
    source : string;
    initCallback : Function;
    renderer : Renderer;
    methods : Dictionary<Function>;

	constructor(name : string, source : string, initCallback : Function, methods : Dictionary<Function> = {}, renderer? : Renderer) {

		this.name = name;
		this.source = source;

		this.initCallback = initCallback;
		this.renderer = renderer ? renderer : Application.getInstance().config('renderer');
		this.methods = methods;

	}





}

