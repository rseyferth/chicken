/// <reference types="jquery" />
import { Dictionary } from '../../node_modules/@types/lodash';
import Morph from 'htmlbars/dist/cjs/htmlbars-runtime/morph';
import View from './View';
import Renderer from './Renderer';
/**
 * @module Dom
 */
export default class ActionBinding {
    renderer: Renderer;
    morph: Morph;
    actionName: string;
    actionHandler: Function;
    parameters: string[];
    options: Dictionary<any>;
    view: View;
    eventName: string;
    isListening: boolean;
    $element?: JQuery;
    id: string;
    /**
     * @class Dom.ActionBinding
     *
     * @constructor
     */
    constructor(renderer: Renderer, morph: Morph, actionName: string, actionHandler: Function, parameters: string[], options: Dictionary<any>, view: View);
    apply(): this;
    static registry: Map<string, ActionBinding>;
    static register(binding: ActionBinding): string;
    static get(id: string): ActionBinding | undefined;
    static getDefaultEventName(element: HTMLElement): string;
    static DefaultEventNames: Dictionary<string>;
}
