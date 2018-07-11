import _ from 'underscore';
import moment from 'moment';
import Querystring from 'query-string';

import Observable from '../Core/Observable';
import ObservableArray from '../Core/ObservableArray';
import ComputedProperty from '../Core/ComputedProperty';
import Reference from '../Core/Reference';
import HelperProxy from '../Dom/HelperProxy';
import Binding from '../Dom/Binding';

let _uid = 0;
let _UniqueIdKey = `___chicken_${(new Date()).toString()}`;


export function getValue(obj : any) : any {

    if (obj instanceof HelperProxy) return obj.invoke();
    if (obj instanceof Binding || obj instanceof ComputedProperty || obj instanceof Reference) {
        return obj.getValue();
    }
    return obj;

};

export function each(obj : any, callback : any, context? : any) : void {

    // Map?
    if (obj instanceof Map) {
        obj.forEach((value, key) => {
            callback.apply(context, [value, key]);
        });
        return;

    } else if (obj instanceof Observable) {
        obj = obj.attributes;
    } else if (obj instanceof ObservableArray) {
        obj = obj.items;
    }
    _.each(obj, callback, context);

};

export function reverseEach(obj : any, callback : any, context? : any) : void {
    
    // Map?
    if (obj instanceof Map) {
        obj.forEach((value, key) => {
            callback.apply(context, [value, key]);
        });
        return;

    } else if (obj instanceof Observable) {
        obj = obj.attributes;
    } else if (obj instanceof ObservableArray) {
        obj = obj.items;
    }
    for (let i = obj.length - 1; i >= 0; i--) {
        callback.apply(context, [obj[i]]);
    }

};

export function map(obj : any, callback : any, context? : any) : void {
    if (obj instanceof Observable) {
        obj = obj.attributes;
    } else if (obj instanceof ObservableArray) {
        obj = obj.items;
    }
    _.map(obj, callback, context);
};

export function isTruthlike(value : any) : boolean {

    // Null/undef
    if (value === null || value === undefined) return false;

    // Bool?
    if (value === true || value === 'true') return true;
    if (value === false || value === 'false') return false;

    // 0 and 1?
    if (value === 1 || value === '1') return true;
    if (value === 0 || value === '0') return false;

    // Array?
    if (Array.isArray(value) || value instanceof ObservableArray) {
        return value.length > 0;
    }

    // Object
    if (value instanceof Object) {
        return _.keys(value).length > 0;
    }

    // Do it natively
    return !!value;

};

export function areEqual(value1 : any, value2 : any) : boolean {

    // Identical?
    if (value1 === value2) return true;

    // Is one or both a moment?
    if (moment.isMoment(value1) && value2 !== undefined) return value1.isSame(value2);
    if (moment.isMoment(value2) && value1 !== undefined) return value2.isSame(value1);

    // One of them null or undefined?
    if (value1 === undefined || value2 === undefined || value1 === null || value2 === null) return false;
    if (typeof value1 !== 'object' || typeof value2 !== 'object') return false;
    if (value1 instanceof Array || value2 instanceof Array) return false;

    // Same id?
    if (uidFor(value1) === uidFor(value2)) return true;

    return false;

};


export function uid() : string {
    return `*${(++_uid).toString()}*`;
};
export function uidFor(obj : any) : string {

    // Already set for this object?
    if (obj && obj[_UniqueIdKey] !== undefined) return obj[_UniqueIdKey];

    // Non-existing things?
    if (obj === undefined) return '(undefined)';
    if (obj === null) return '(null)';

    // Check what type the value is
    let type = typeof obj;
    switch(type) {

        case 'number':
        case 'string':
            return type + ':' + obj;

        case 'boolean': 
            return obj ? '(true)' : '(false)';				

    }

    // Is it a standard object?
    if (obj === Object) return '(Object)';
    if (obj === Array) return '(Array)';

    // Store the id on the obj
    let id : string = uid();
    obj[_UniqueIdKey] = id;
    return id;

};

export function	encodeQueryString(obj : any, deep : boolean = false) : string {

    if (deep) {

        //init str
        let propStrings : string[] = [];
        let str : string = '';

        //convert to simple object
        if (obj instanceof Observable) obj = obj.toObject();			

        //base url
        if (obj.baseUrl) str += obj.baseUrl + '?';

        //add props
        _.each(_.keys(obj), (key) => {

            //skip baseUrl
            if (key == 'baseUrl') return;

            propStrings = _addPropString(propStrings, key, obj[key]);

        });
        

        //add to querystring
        str += propStrings.join('&');

        return str;

    } else {
        
        return Querystring.stringify(obj);
    }


};

function _addPropString(propStrings : string[], key : string, value : any) {

    if (value instanceof Array) {
        
        //array
        propStrings.push(key + '=' + value.join(','));

    } else if (value instanceof Object) {
        
        //object
        _.each(_.keys(value), (subKey) => {
            propStrings = _addPropString(propStrings, key + '[' + subKey + ']', value[subKey]);
        });

    } else {

        propStrings.push(key + '=' + value);
    }


	return propStrings;

};
