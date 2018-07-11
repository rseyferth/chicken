import { Dictionary } from 'underscore';
import Route from './Route';
import Action from './Action';
import Request from './Request';
/**
 * @module Routing
 */
export default class RouteMatch {
    route: Route;
    regExpMatch: Dictionary<string>;
    request: Request;
    actions: Map<string, Action>;
    parameters: Map<string, string>;
    query: Dictionary<string>;
    constructor(route: Route, regExpMatch: Dictionary<string>, request: Request);
    /**
     * Handle leaving this RouteMatch
     *
     * @method leave
     * @param  {Routing.RouteMatch} toRoute The RouteMatch we're going to after leaving this
     * @return {Promise}
     */
    leave(toRoute: RouteMatch): Promise<{}>;
    _readActionsFromRoute(route: Route): Map<string, Action>;
}
