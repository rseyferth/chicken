"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var moment_1 = __importDefault(require("moment"));
var query_string_1 = __importDefault(require("query-string"));
var Observable_1 = __importDefault(require("../Core/Observable"));
var ObservableArray_1 = __importDefault(require("../Core/ObservableArray"));
var ComputedProperty_1 = __importDefault(require("../Core/ComputedProperty"));
var Reference_1 = __importDefault(require("../Core/Reference"));
var HelperProxy_1 = __importDefault(require("../Dom/HelperProxy"));
var Binding_1 = __importDefault(require("../Dom/Binding"));
var _uid = 0;
var _UniqueIdKey = "___chicken_" + (new Date()).toString();
function getValue(obj) {
    if (obj instanceof HelperProxy_1.default)
        return obj.invoke();
    if (obj instanceof Binding_1.default || obj instanceof ComputedProperty_1.default || obj instanceof Reference_1.default) {
        return obj.getValue();
    }
    return obj;
}
exports.getValue = getValue;
;
function each(obj, callback, context) {
    // Map?
    if (obj instanceof Map) {
        obj.forEach(function (value, key) {
            callback.apply(context, [value, key]);
        });
        return;
    }
    else if (obj instanceof Observable_1.default) {
        obj = obj.attributes;
    }
    else if (obj instanceof ObservableArray_1.default) {
        obj = obj.items;
    }
    underscore_1.default.each(obj, callback, context);
}
exports.each = each;
;
function reverseEach(obj, callback, context) {
    // Map?
    if (obj instanceof Map) {
        obj.forEach(function (value, key) {
            callback.apply(context, [value, key]);
        });
        return;
    }
    else if (obj instanceof Observable_1.default) {
        obj = obj.attributes;
    }
    else if (obj instanceof ObservableArray_1.default) {
        obj = obj.items;
    }
    for (var i = obj.length - 1; i >= 0; i--) {
        callback.apply(context, [obj[i]]);
    }
}
exports.reverseEach = reverseEach;
;
function map(obj, callback, context) {
    if (obj instanceof Observable_1.default) {
        obj = obj.attributes;
    }
    else if (obj instanceof ObservableArray_1.default) {
        obj = obj.items;
    }
    underscore_1.default.map(obj, callback, context);
}
exports.map = map;
;
function isTruthlike(value) {
    // Null/undef
    if (value === null || value === undefined)
        return false;
    // Bool?
    if (value === true || value === 'true')
        return true;
    if (value === false || value === 'false')
        return false;
    // 0 and 1?
    if (value === 1 || value === '1')
        return true;
    if (value === 0 || value === '0')
        return false;
    // Array?
    if (Array.isArray(value) || value instanceof ObservableArray_1.default) {
        return value.length > 0;
    }
    // Object
    if (value instanceof Object) {
        return underscore_1.default.keys(value).length > 0;
    }
    // Do it natively
    return !!value;
}
exports.isTruthlike = isTruthlike;
;
function areEqual(value1, value2) {
    // Identical?
    if (value1 === value2)
        return true;
    // Is one or both a moment?
    if (moment_1.default.isMoment(value1) && value2 !== undefined)
        return value1.isSame(value2);
    if (moment_1.default.isMoment(value2) && value1 !== undefined)
        return value2.isSame(value1);
    // One of them null or undefined?
    if (value1 === undefined || value2 === undefined || value1 === null || value2 === null)
        return false;
    if (typeof value1 !== 'object' || typeof value2 !== 'object')
        return false;
    if (value1 instanceof Array || value2 instanceof Array)
        return false;
    // Same id?
    if (uidFor(value1) === uidFor(value2))
        return true;
    return false;
}
exports.areEqual = areEqual;
;
function uid() {
    return "*" + (++_uid).toString() + "*";
}
exports.uid = uid;
;
function uidFor(obj) {
    // Already set for this object?
    if (obj && obj[_UniqueIdKey] !== undefined)
        return obj[_UniqueIdKey];
    // Non-existing things?
    if (obj === undefined)
        return '(undefined)';
    if (obj === null)
        return '(null)';
    // Check what type the value is
    var type = typeof obj;
    switch (type) {
        case 'number':
        case 'string':
            return type + ':' + obj;
        case 'boolean':
            return obj ? '(true)' : '(false)';
    }
    // Is it a standard object?
    if (obj === Object)
        return '(Object)';
    if (obj === Array)
        return '(Array)';
    // Store the id on the obj
    var id = uid();
    obj[_UniqueIdKey] = id;
    return id;
}
exports.uidFor = uidFor;
;
function encodeQueryString(obj, deep) {
    if (deep === void 0) { deep = false; }
    if (deep) {
        //init str
        var propStrings_1 = [];
        var str = '';
        //convert to simple object
        if (obj instanceof Observable_1.default)
            obj = obj.toObject();
        //base url
        if (obj.baseUrl)
            str += obj.baseUrl + '?';
        //add props
        underscore_1.default.each(underscore_1.default.keys(obj), function (key) {
            //skip baseUrl
            if (key == 'baseUrl')
                return;
            propStrings_1 = _addPropString(propStrings_1, key, obj[key]);
        });
        //add to querystring
        str += propStrings_1.join('&');
        return str;
    }
    else {
        return query_string_1.default.stringify(obj);
    }
}
exports.encodeQueryString = encodeQueryString;
;
function _addPropString(propStrings, key, value) {
    if (value instanceof Array) {
        //array
        propStrings.push(key + '=' + value.join(','));
    }
    else if (value instanceof Object) {
        //object
        underscore_1.default.each(underscore_1.default.keys(value), function (subKey) {
            propStrings = _addPropString(propStrings, key + '[' + subKey + ']', value[subKey]);
        });
    }
    else {
        propStrings.push(key + '=' + value);
    }
    return propStrings;
}
;
//# sourceMappingURL=Utils.js.map