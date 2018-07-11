/// <reference types="underscore" />
/// <reference types="jquery" />
import Element from "./Element";
import Application from "../Application";
import Action from "../Routing/Action";
import { Dictionary } from "../../node_modules/@types/underscore";
import Obj from "../Core/Obj";
import View from "./View";
export default class ViewContainer extends Element {
    static Classes: Dictionary<string>;
    static ElementSelector: string;
    static DefaultName: string;
    static getViewName($element: JQuery): string;
    static any: Obj;
    private _isLoading;
    transitionsDisabled: boolean;
    name: string;
    currentAction?: Action;
    currentView?: View;
    $currentContent?: JQuery;
    defaultTransition?: string;
    constructor($element: JQuery, application: Application);
    /**
     * Initialize the ViewContainer.
     *
     * @method initialize
     * @chainable
     */
    initialize(): this;
    setContent(content: string | DocumentFragment, setLoadingFalse?: boolean): ViewContainer;
    transitionContent(newContent: string | DocumentFragment, transitionName: string): Promise<{}>;
    setView(view: View): this;
    setAction(action: any): this;
    setLoading(loading?: boolean): this;
    getIsLoading(): boolean;
    isInDom(): boolean;
}
