/// <reference types="jquery" />
import { Dictionary } from 'underscore';
import Observable from './Core/Observable';
import ViewContainer from './Dom/ViewContainer';
import Router from './Routing/Router';
import SettingsObject from './Core/SettingsObject';
import Api from './Api/Api';
import RouteMatch from './Routing/RouteMatch';
import Auth from './Auth/Auth';
import I18n from './Localization/I18n';
/**
 * The main Application class, used to create a Chicken application.
 *
 * @param {JQuery} $app - The target jQuery element to create application in
 * @param {Object} settings - Application settings object
 * @param {string} [settings.baseUrl=/] - The root uri of the application
 * @param {History} [history] Optional browser history instance. Will be created for you if you leave it null.
 *
 */
export default class Application extends Observable {
    $app: JQuery;
    viewContainers: Dictionary<ViewContainer>;
    router: Router;
    settings: SettingsObject;
    currentRoute?: RouteMatch;
    apis: Dictionary<Api>;
    auths: Dictionary<Auth>;
    loadPromises: Promise<any>[];
    navigationDisabledOnce: boolean;
    i18n: I18n;
    history: any;
    private static _instance?;
    static getInstance(): Application;
    constructor($app: JQuery, settings: Dictionary<any>, history?: any);
    findViewContainers($element?: JQuery): this;
    updateViewContainers($lookForNewOnesIn?: JQuery): this;
    getViewContainer(key: any): ViewContainer;
    routes(callback: any): this;
    api(key?: string, apiInstance?: Api): this | Api;
    auth(key?: string, authInstance?: Auth): Application | Auth;
    translations(callback: any): this;
    start(): this;
    gotoNamed(name: string, attributes?: Dictionary<any>, query?: string | Dictionary<any>, flash?: Dictionary<any>, transition?: string): Application;
    transitionToNamed(name: any, attributes: {} | undefined, transition: any): Application;
    transitionTo(uri: any, transition: any): Application;
    goto(uri: string, query?: string | Dictionary<any>, flash?: Dictionary<any>, doNotNavigate?: boolean, transition?: string): Application;
    refresh(viewContainerKeys?: string[]): void;
    getCurrentUri(): any;
    config(...args: any[]): any;
    uri(...args: any[]): string;
}
