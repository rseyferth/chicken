import Obj from '../Core/Obj';
import ViewContainer from '../Dom/ViewContainer';
import Request from './Request';
import Route from './Route';
import RouteMatch from './RouteMatch';
import Controller from './Controller';
import Application from '../Application';
/**
 * @module Routing
 */
export default class Action extends Obj {
    static controllerActionRegexp: RegExp;
    targetViewContainer: string;
    viewContainer?: ViewContainer;
    request: Request;
    route?: Route;
    matchedRoute?: Route;
    routeMatch?: RouteMatch;
    controller?: Controller;
    controllerClass?: string;
    controllerAction?: string;
    callback?: Function;
    parameters: Map<string, string>;
    parameterArray: string[];
    transition?: string;
    dependsOn: Action[];
    result?: any;
    /**
     * @class Routing.Action
     * @extends Core.Obj
     */
    constructor(targetViewContainer: string, controllerActionOrCallback: any, request: Request);
    execute(application: Application): Promise<void>;
    leave(): Promise<{}>;
    _processResult(result: any, resolve: any, reject: any): void;
    private handleError;
}
