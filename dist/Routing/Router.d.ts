import { Dictionary } from 'underscore';
import Obj from '../Core/Obj';
import Application from '../Application';
import RouteMatch from './RouteMatch';
import Route from './Route';
import Request from './Request';
export default class Router extends Obj {
    routes: Route[];
    application: Application;
    errorHandlers: Dictionary<any[]>;
    namedRoutes: Map<string, Route>;
    private currentConfig;
    /**
     *
     *
     * @class Routing.Router
     * @extends Core.Object
     */
    constructor(application: Application);
    /**
     * Create a Route and add it to the Router.
     *
     * @method route
     * @param  {string} 			pattern 	The uri pattern
     * @param  {Object|String} 		actions
     * @param  {Object} 			[options]
     * @return {Routing.Route}
     */
    route(pattern: string, actions: any, options?: Dictionary<any>): Route;
    errorRoute(errorKey: string, actions: any, options?: Dictionary<any>): this;
    catchAll(actions: any, options?: Dictionary<any>): Route;
    /**
     * Configure the Router to add the given options to
     * the Routes you define within the callback.
     *
     * @method group
     * @param  {object}   options
     * @param  {Function} callback
     * @chainable
     */
    group(options: Dictionary<any>, callback: Function): this;
    /**
     * Handle given Request, by finding a matching Route
     * and executing it.
     *
     * @method handle
     * @param  {Routing.Request} request
     * @return {Routing.RouteMatch}
     */
    handle(request: Request): RouteMatch | boolean;
    handleErrors(errorType: string, callback: any): void;
    getErrorHandlers(error: any, obj?: any): Function[];
    getErrorRouteMatch(error: any): RouteMatch | undefined;
    /**
     * Output a table to the console containing an overview
     * of all defined routes.
     *
     * Note: This is not supported in all browsers!
     * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
     *
     * @method outputToConsole
     * @chainable
     */
    outputToConsole(): this;
}
