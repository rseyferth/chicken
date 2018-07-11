/**
 * @module Core
 */
export default class Obj {
    private static promiseCount;
    listeners: Map<string, Set<Function>>;
    promises: Map<string, PromiseInfo>;
    /**
     * Basic object that can trigger events
     *
     * @class Core.Obj
     * @constructor
     */
    constructor();
    promise(key: string, callback: Function): Promise<any>;
    resolvePromise(key: string, ...args: any[]): this;
    rejectPromise(key: string, ...args: any[]): this;
    getPromise(key: string): Promise<any>;
    resetPromise(key: string): void;
    _getPromiseInfo(key: string): PromiseInfo;
    when(...args: any[]): this;
    /**
     * Add listener for chosen event
     *
     * @method on
     * @param  {string}   eventName The event name to listen for.
     * @param  {Function} callback  The function to call when the event occurs. Depending on the event, this
     *                              callback can receive 0 or more arguments when called.
     * @example
     * 		obj.on('message', function(message) {
     * 			console.log(message);
     * 		});
     * @chainable
     */
    on(eventName: string, callback: Function): this;
    /**
     * Remove a previously added listener for chosen event
     *
     * @method off
     * @param  {string}   eventName The event name to remove listener for
     * @param  {Function} callback  The previously added callback to remove from listeners
     * @chainable
     */
    off(eventName: string, callback: Function): this;
    /**
     * Trigger calling of all registered callbacks for given event
     * with given arguments.
     *
     * @method trigger
     * @param  {string}    eventName The event name to trigger callbacks for
     * @param  {...mixed}  args      Zero or more arguments to pass along to each callback
     * @chainable
     */
    trigger(eventName: string, ...args: any[]): this;
}
export declare class PromiseInfo {
    promise: Promise<any>;
    reject: Function;
    resolve: Function;
    id: number;
}
