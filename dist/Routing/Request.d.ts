/// <reference types="underscore" />
import Application from '../Application';
import { Dictionary } from '../../node_modules/@types/underscore';
/**
 * @module Routing
 */
export default class Request {
    static cleanUri(uri: string): string;
    flash?: Dictionary<any>;
    transition?: string;
    uri: string;
    query: Dictionary<any>;
    /**
     * @class Routing.Request
     *
     * @constructor
     * @param {object} 			location 		The location received from the History library
     * @param {Application} 	[application] 	The Application instance that this Request is a part of
     */
    constructor(location: any, application?: Application);
    getFlash(key: any): any;
}
