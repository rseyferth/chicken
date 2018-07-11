/// <reference types="jquery" />
import { Dictionary } from 'underscore';
import Obj from '../Core/Obj';
/**
 * @module Dom
 */
export default class Element extends Obj {
    static Hooks: Dictionary<Function[]>;
    static registerHook(callback: Function, type?: string): boolean;
    $element: JQuery;
    /**
     * @class Dom.Element
     * @extends Core.Obj
     *
     * @constructor
     * @param {jQuery} $element
     * @param {Application} [application]
     */
    constructor($element: JQuery);
    setContent(content: string): void;
    _fireHooks(type: string): void;
}
