import Morph from 'htmlbars/dist/cjs/htmlbars-runtime/morph';
import { Dictionary } from '../../node_modules/@types/lodash';
import View from './View';
import { Scope } from './Renderer';
import Obj from '../Core/Obj';
import ComponentDefinition from './ComponentDefinition';
import Renderer from './Renderer';
/**
 * @module Dom
 */
export default class Component extends View {
    name: string;
    morph: Morph;
    scope: Scope;
    parameters: any[];
    attributes: Dictionary<any>;
    visitor: any;
    subTemplates: any;
    tagName: string;
    cssClass?: string;
    element?: HTMLElement;
    parentComponent?: Component;
    view?: View;
    dom: Obj;
    _id?: string;
    isDestroyed: boolean;
    /**
     * @class Dom.Component
     * @extends Dom.View
     */
    constructor(name: string, source: string, morph: Morph, scope: Scope, parameters: any[], attributeHash: Dictionary<any>, visitor: any, subTemplates: any, initCallback?: Function, methods?: Dictionary<Function>, renderer?: Renderer);
    getHelper(key: any): any;
    findParentComponent(key: any): any;
    getId(): string;
    sendAction(name?: string, ...args: any[]): any;
    renderSync(): Component;
    enableDomEvents(): void;
    getSubTemplate(key: any): any;
    getAttribute(key: any, defaultValue?: null): any;
    getAttributes(prefix?: string): {};
    get(key: any): any;
    /**
     * Set default values for component attributes. Use this in the initCallback.
     *
     * @method defaults
     * @param  {Object} hash   Key/value pairs
     * @chainable
     */
    defaults(hash: any): void;
    beforeDestroy(callback: any): this;
    destroy(): this;
    static DomEventNames: string[];
    static registry: Map<string, ComponentDefinition>;
    static instanceCounts: Dictionary<number>;
}
