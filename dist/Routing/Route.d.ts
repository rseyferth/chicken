import { Dictionary } from 'underscore';
import Obj from '../Core/Obj';
import Router from './Router';
import RouteMatch from './RouteMatch';
import Request from './Request';
/**
 * @module Routing
 */
export default class Route extends Obj {
    router: Router;
    parentRoute?: Route;
    nested: Dictionary<Route>;
    pattern: string;
    private actions;
    private parameterConstraints;
    errorHandlers: Dictionary<any>;
    parameters: string[];
    options: Dictionary<any>;
    name?: string;
    acceptsQuery: boolean;
    acceptsFlash: boolean;
    regExp?: RegExp;
    constructor(router: Router, parent: Route | null, pattern: string, actions?: null, options?: {});
    /**
     * Call this when you want to define routes nested under the current one. The provided callback
     * will be called with the Router as context, allowing you to use this.route to define the nested
     * routes.
     *
     * @example
     * 	Chicken.createApplication($('#application'), {
     * 		baseUrl: '/'
     * 	}).routes(function() {
     *
     *  	this.route('/animals', 'Animal@index')                            // /animals
     *  		.nest(function() {
     *  			this.route('/dog', 'Animal@dog')                          // /animals/dog
     *  				.nest({ viewContainer: 'dogs' }, function() {
     *      				this.route('/:dogName', 'Animal@dogDetails');     // /animals/dog/:dogName
     *      				this.route('/about-dogs', 'Animal@aboutDogs');    // /animals/dog/about-dogs
     *  				});
     *      		this.route('/cat', 'Animal@cat');                         // /animals/cat
     *  		 });
     *
     *
     * 	});
     *
     *
     * @method nest
     * @param {object} 		[options]   An optional options hash, to apply to all nested routes
     * @param {function} 	callback 	Your callback
     * @chainable
     */
    nest(...args: any[]): this;
    abstract(): this;
    /**
     * Check whether this Route matches the given Request. If so, the method
     * will return a complete RouteMatch. If not, the method will return `false`.
     *
     * @method match
     * @param  {Routing.Request} request
     * @return {Routing.RouteMatch|boolean}
     */
    match(request: Request): RouteMatch | false;
    error(key: string, callback: Function): this;
    /**
     * Get the action definitions for the Route. An action definition can either
     * be a Controller action (e.g.: `Product@index`), or a callback. The result
     * is keyed by the target ViewContainer name.
     *
     * @method getActions
     * @return {object}
     */
    getActions(): Dictionary<any>;
    /**
     * Get the action definitions for this Route, and any parent routes that it may have.
     *
     * @method getFullActions
     * @return {object}
     */
    getFullActions(): any;
    /**
     * Get the full Route pattern within the application for this route,
     * including any parent Routes.
     *
     * @method getFullPattern
     * @return {string}
     */
    getFullPattern(): string;
    makeUrl(attributes?: {}): string;
    /**
     * Get all parameter constraints for this Route, combining constraints
     * defined by parent routes.
     *
     * @method getAllParameterConstraints
     * @return {Map} Map with a regular expression constraint for each constrained parameter
     */
    getAllParameterConstraints(): Map<string, any>;
    getMiddlewareNames(): string[];
    getRegExp(): RegExp;
    /**
     * Add a constraint to a parameter, by supplying a regular expression.
     *
     * @method constrain
     * @param  {string} parameterName The name of the parameter to add constrains to
     * @param  {RegExp} regExp        A regular expression to use when matching the parameter
     * @chainable
     */
    constrain(parameterName: any, regExp: any): this;
    acceptQuery(accept?: boolean): this;
    acceptFlash(accept?: boolean): this;
    /**
     * Set the name of this Route
     *
     * @method as
     * @param  {string} name
     * @chainable
     */
    as(name: any): this;
    middleware(...keys: any[]): this;
    services(...keys: any[]): this;
    /**
     * An abstract Route can never be matched. This is useful when you have a Route
     * that only has subroutes, but no actions itself. If you define a Route without
     * actions, this will automatically be set to true.
     *
     * @method isAbstract
     * @return {Boolean}
     */
    isAbstract(): boolean;
    static ParameterType: Dictionary<RegExp>;
}
