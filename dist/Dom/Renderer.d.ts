import { Dictionary } from 'underscore';
import DOMHelper from 'htmlbars/dist/cjs/dom-helper';
import Morph from 'htmlbars/dist/cjs/htmlbars-runtime/morph';
import Binding from './Binding';
import Helpers from './Helpers';
import Component from './Component';
import View from './View';
export interface Scope {
    _bindings: Dictionary<Binding>;
    localPresent: Dictionary<boolean>;
    actions?: Dictionary<Function>;
    self: any;
    locals: Dictionary<any>;
    component?: Component;
    view?: View;
}
/**
 * @module Dom
 */
export default class Renderer {
    dom: DOMHelper;
    hooks: Dictionary<Function>;
    helpers: Helpers;
    partials: Dictionary<any>;
    useFragmentCache: boolean;
    currentMorph?: Morph;
    /**
     * @class Dom.Renderer
     *
     * @constructor
     */
    constructor();
}
