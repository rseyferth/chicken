import { Dictionary } from 'underscore';
import Obj from './Obj';
import IObservable from './IObservable';
import Binding from '../Dom/Binding';
/**
 * @module Core
 */
export default class Observable extends Obj implements IObservable {
    _bindings?: Dictionary<Binding>;
    observers: Map<string, Set<Function>>;
    attributes: Dictionary<any>;
    notificationsDisabled: boolean;
    private _scheduleAttributesChangedTimeout?;
    private _scheduleAttributesChangedAttributes?;
    /**
     * The basic object class that notifies **observers** and **students** about
     * changes in its attributes.
     *
     * ## Observers
     * An observer is an object (in actuality a callback) that watches for changes on
     * a certain attribute or it's child attributes, in case of nested Observables.
     * An observer can {{#crossLink "Core.Observable/disregard"}}{{/crossLink}} the attribute to stop watching.
     *
     * 	// Initialize object and watch for changes
     * 	var obj = new Chicken.Core.Observable();
     * 	obj.set('foo', 'bar');
     * 	var callback = () => {
     * 		alert('Changed: ' + obj.get('foo'));
     * 	};
     * 	obj.observe('foo', callback);
     *
     * 	// Change
     * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
     *
     * 	// Stop watching
     * 	obj.disregard('foo', callback);
     * 	obj.set('foo', 'back-to-bar'); // Will not alert anthing
     *
     * ## Students
     * A student is an object (in actuality a callback) that watches for changes in
     * **any attribute** or any **child attribute**, in case of nested Observables.
     * An observer can **neglect** their study to stop wachting.
     *
     * 	// Initialize object
     * 	var obj = new Chicken.Core.Observable();
     * 	obj.set('foo', 'bar');
     * 	var childObj = new Chicken.Core.Observable();
     * 	childObj.set('free', 'willy');
     * 	obj.set('child', childObj);
     *
     * 	// Listen
     * 	var callback = (changedAttributes) {
     * 		console.log(changedAttributes);
     * 	};
     * 	obj.study(callback);
     *
     * 	// Update attributes
     *	obj.set('foo', 'boo');                  // Will log ['foo']
     *	obj.get('child').set('free', 'tibet');  // Will log ['child']
     * 	childObj.set('foo', 'bee');             // Will log ['child']
     *
     * 	// Neglect my study
     * 	obj.neglect(callback);
     * 	obj.set('foo', 'back to bar');          // Will not log anything
     *
     * @class Core.Observable
     * @extends Core.Object
     *
     * @constructor
     * @param  {Obj}  [initValues={}]       			 A hash of key-value pairs to initialize the object with
     * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
     **/
    constructor(initValues?: Dictionary<any>, convertToObservables?: boolean);
    has(key: any): boolean;
    _has(key: string): boolean;
    /**
     * Get attribute from object
     *
     * @method get
     * @param  {string} key The name of the key to retrieve the value of. You can use dot-notation to use deep-getting
     * @return The value or undefined when the key is not set
     */
    get(key: any): any;
    _get(key: string): any;
    /**
     * Set attribute on object. When you set a attribute on Observable, all
     * *observers* and *students* will be notified of the change.
     *
     * @method set
     * @param {string/array} key   	The name of the key to store the value of. You can use dot-notation to use deep-setting
     * @param {mixed} value 		The value to store
     * @param {boolean} [convertToObservables=false]
     *        						Whether to convert standard object values into Observable instances
     * @chainable
     */
    set(key: any, value: any, convertToObservables?: boolean): this;
    setAttribute(key: string, value: any): this;
    setIfChanged(key: string, value: any): this;
    _set(key: string, value: any): Observable;
    setSilently(key: any, value: any, convertToObservables?: boolean): this;
    unset(key: any): this;
    _unset(key: any): void;
    import(obj: any, convertToObservables?: boolean): this;
    fill(obj: any): this;
    /**
     * Increment given attribute's numeric value
     *
     * @method increment
     * @param  {string} key
     * @param  {Number} by           (Default = 1)
     * @param  {Number} defaultValue (Default = 0)
     * @chainable
     */
    increment(key: any, by?: number, defaultValue?: number): this;
    /**
     * Decrement given attribute's numeric value
     *
     * @method increment
     * @param  {string} key
     * @param  {Number} by           (Default = 1)
     * @param  {Number} defaultValue (Default = 0)
     * @chainable
     */
    decrement(key: any, by?: number, defaultValue?: number): this;
    /**
     * Toggle the given attribute's boolean value
     *
     * @method toggle
     * @param  {string}  key
     * @param  {Boolean} valueWhenUndefined  (Default = true) What value to set when the attribute does not have a value yet
     * @chainable
     */
    toggle(key: any, valueWhenUndefined?: boolean): this;
    /**
     * Listen for any changes in any of the object's attributes.
     * The callback will receive an array containing the names of
     * all updates attributes.
     *
     * Note: This is an alias of the 'change' event, so calling
     * ```this.on('change', callback)``` will achieve the same result.
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
    study(callback: any): this;
    /**
     * Stop listening for changes on the object's attributes.
     *
     * Note: This is an alias of the 'change' event, so calling
     * ```this.off('change', callback)``` will achieve the same result.
     *
     * @example
     *
     *
     * @method neglect
     * @param  {Function} callback
     * @chainable
     */
    neglect(callback: any): this;
    /**
     * Observe the attribute with given key, so that callback is called
     * whenever the attribute or it's child attributes change.
     *
     * 	// Initialize object and watch for changes
     * 	var obj = new Chicken.Core.Observable();
     * 	obj.set('foo', 'bar');
     * 	var callback = () => {
     * 		alert('Changed: ' + obj.get('foo'));
     * 	};
     * 	obj.observe('foo', callback);
     *
     * 	// Change
     * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
     *
     * @method observe
     * @param  {string|array}   key      The name of the attribute to observe
     * @param  {Function} callback
     * @chainable
     */
    observe(keyOrKeys: any, callback: any): any;
    /**
     * Stop observing the attribute with given key, or any of it's
     * child attributes.
     *
     * @method disregard
     * @param  {string}   key      The name of the attribute to disregard
     * @param  {Function} callback
     * @chainable
     */
    disregard(key: any, callback: any): this;
    /**
     * Get the Observable including all its children
     * as a native object.
     *
     * @method toObject
     * @return {object}
     */
    toObject(includedUids?: string[]): Dictionary<any>;
    /**
     * Apply given callback for each attribute defined in this observable
     *
     * @method each
     * @param  {Function} callback
     * @chainable
     */
    each(callback: any, context?: null): this;
    /**
     * Execute given callback without triggering change notifications.
     *
     * @method withoutNotifications
     * @param  {Function} callback
     * @chainable
     */
    withoutNotifications(callback: any): this;
    clone(convertToObservables?: boolean): any;
    _scheduleAttributeChanged(key: any): void;
    _triggerAttributesChanged(): void;
    isObservable(): boolean;
    static Events: Dictionary<string>;
    static AttributeChangedDelay: number;
}
