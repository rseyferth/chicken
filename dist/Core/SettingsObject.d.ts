import { Dictionary } from 'underscore';
import Observable from './Observable';
/**
 * @module Core
 */
export default class SettingsObject extends Observable {
    allowedKeys: string[];
    constructor(defaultSettings?: Dictionary<any>, allowedKeys?: string[]);
    /**
     * Apply given settings
     *
     * @method apply
     * @param {object} 	settings	A hash-object with keys and values
     * @chainable
     */
    apply(settings: Dictionary<any>): this;
    set(key: string, value: any): this;
}
