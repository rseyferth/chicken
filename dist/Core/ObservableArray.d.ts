import { Dictionary } from 'underscore';
import Obj from './Obj';
import IObservable from './IObservable';
import Binding from '../Dom/Binding';
/**
 * @module Core
 */
export default class ObservableArray extends Obj implements IObservable {
    _bindings?: Dictionary<Binding>;
    _scheduleChangedTimeout?: any;
    static Events: {
        /**
         * This event is fired whenever anything changes in the array
         * of one of its observable items.
         *
         * @event change
         */
        Change: string;
        /**
         * This event is fired whenever one or more items are added
         *
         * @event add
         * @param {Array} values		The item values that were added
         */
        Add: string;
        /**
         * This event is fired whenever one or more items are deleted
         *
         * @event delete
         * @param {Array} values		The item values that were deleted
         */
        Delete: string;
        /**
         * This event is fired when the array is emptied. Not that the `delete`
         * event is also triggered, right before the `empty` event.
         *
         * @event empty
         */
        Empty: string;
        /**
         * This event is fired whenever an import is completed
         *
         * @event import
         */
        Import: string;
    };
    items: any[];
    notificationsDisabled: boolean;
    isStudyingChildren: boolean;
    allowStudyChildren: boolean;
    childStudyCallback: Function;
    constructor(initValues?: any[], convertToObservables?: boolean);
    import(items: any[], convertToObservables?: boolean): this;
    get(key: any): any;
    set(key: any, value: any, convertToObservables?: boolean): ObservableArray;
    /**
     * Add one or more items to the array
     *
     * @method add
     * @param {...[mixed]} values One or more values to add
     * @chainable
     */
    add(...values: any[]): this;
    _add(value: any): ObservableArray;
    /**
     * Delete one or more items from the array
     *
     * @method delete
     * @param  {...[mixed]} values One or more values to delete
     * @chainable
     */
    delete(...values: any[]): this;
    _delete(value: any): void;
    /**
     * Remove all items from the array
     *
     * @method empty
     * @chainable
     */
    empty(): ObservableArray;
    /**
     * Get the first item in the collection
     *
     * @method first
     * @return {mixed}
     */
    first(): any;
    /**
     * Get the last item in the collection
     *
     * @method last
     * @return {mixed}
     */
    last(): any;
    /**
     * Listen for any changes in any of the object's attributes.
     * The callback will receive an array containing the names of
     * all updates attributes.
     *
     * Note: This is an alias of the 'changed' event, so calling
     * ```this.on('changed', callback)``` will achieve the same result.
     *
     * @example
     * 	// Initialize object
     * 	var obj = new Chicken.Core.Observable();
     * 	obj.set('foo', 'bar');
     * 	var childObj = new Chicken.Core.Observable();
     * 	childObj.set('free', 'willy');
     * 	obj.set('child', childObj);
     *
     * 	// Listen
     * 	obj.study((changedAttributes) {
     * 		console.log(changedAttributes);
     * 	});
     *
     * 	// Update attributes
     *	obj.set('foo', 'boo');                  // Will log ['foo']
     *	obj.get('child').set('free', 'tibet');  // Will log ['child']
     * 	childObj.set('foo', 'bee');             // Will log ['child']
     *
     * @method study
     * @param  {Function} callback
     * @chainable
     */
    study(callback: Function): ObservableArray;
    /**
     * Stop listening for changes on the object's attributes.
     *
     * Note: This is an alias of the 'changed' event, so calling
     * ```this.off('changed', callback)``` will achieve the same result.
     *
     * @example
     *
     *
     * @method neglect
     * @param  {Function} callback
     * @chainable
     */
    neglect(callback: Function): ObservableArray;
    toArray(includedUids?: string[]): any[];
    /**
     * Get a keyed array containing all items in this ObservableArray
     * by the value of given key.
     *
     * @method keyBy
     * @param  {string} key 	The attribute key. You can also use dot-notation in this key.
     * @return {Obj}
     */
    keyBy(key: any): {};
    sortBy(keyOrCallback: any): this;
    reverse(): this;
    /**
     * Get a keyed array containing ObservableArray's with values that have the same
     * value for given key.
     *
     * @method groupBy
     * @param  {string} keyOrCallback  The attribute key. You can also use dot-notation in this key.
     * @param  {string} [defaultGroup=default] The key under which to put items that have no value for given key
     * @param  {boolean} [makeObservable=false]
     * @return {Obj}
     */
    groupBy(keyOrCallback: any, defaultGroup?: string, makeObservable?: boolean): any;
    /**
     * Get value for given valueAttribute key from all items
     *
     * @method list
     * @param  {string} valueAttribute
     * @param  {string} keyAttribute
     * @return {[type]}                [description]
     */
    list(valueAttribute: string, keyAttribute?: string): Dictionary<any> | any[];
    /**
     * Get the lowest value for objects in this array
     *
     * @method getLowestValue
     * @param  {string}  key
     * @return {mixed}
     */
    getLowestValue(key: any): any;
    each(callback: any): this;
    reverseEach(callback: any): this;
    find(idOrAttributeOrCallback: any, value?: undefined): any;
    /**
     * find object with empty attribute
     *
     * @method findEmpty
     * @param  {string}	attribute 	the attribute checked for definition
     * @return {mixed}				the object containing the empty property or `undefined`
     */
    findEmpty(attribute: any): any;
    contains(item: any): boolean;
    sum(callback: any): number;
    map(callback: any): {}[];
    extend(observableArray: any): any;
    filter(...args: any[]): any[] | ObservableArray;
    chunk(size?: number): ObservableArray;
    /**
     * The number of items in the array
     *
     * @property length
     * @type {Number}
     */
    readonly length: number;
    count(callback?: Function): number;
    size(): number;
    isObservable(): boolean;
    _scheduleChanged(): void;
    _triggerChanged(): void;
    static ChangedDelay: number;
}
