"use strict";
/* eslint no-console: ["error", { allow: ["log"] }] */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var jquery_1 = __importDefault(require("jquery"));
var query_string_1 = __importDefault(require("query-string"));
var inflection_1 = __importDefault(require("inflection"));
var moment_1 = __importDefault(require("moment"));
var filesize_js_1 = __importDefault(require("filesize.js"));
var Utils_1 = require("../Helpers/Utils");
var Application_1 = __importDefault(require("../Application"));
var Observable_1 = __importDefault(require("../Core/Observable"));
var ObservableArray_1 = __importDefault(require("../Core/ObservableArray"));
var ActionBinding_1 = __importDefault(require("./ActionBinding"));
/**
 * @module Dom
 */
var Helpers = /** @class */ (function () {
    function Helpers(renderer) {
        this.renderer = renderer;
    }
    /////////////
    // Actions //
    /////////////
    Helpers.prototype.action = function (params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
        // There should be an ActionBinding for this element
        var element = blocks.element;
        if (element && element.getAttribute('data-chicken-action')) {
            // Get the action
            var binding = ActionBinding_1.default.get(element.getAttribute('data-chicken-action'));
            binding.apply();
        }
        else {
            throw new Error('The "action" keyword was not correctly configured in your Renderer... Or you are trying to add an action to a Component.');
        }
    };
    /////////////
    // Routing //
    /////////////
    Helpers.prototype.link = function (params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
        var _this = this;
        // Check the event
        var eventName = attributeHash.event ? this._getValue(attributeHash.event) : 'click';
        // Add listener
        if (blocks.element) {
            // Get element(s)
            var $el = jquery_1.default(blocks.element);
            // Add href and event
            $el.each(function (index, el) {
                // Set href for easy debuggin' and statusbar info
                jquery_1.default(el).attr('href', _this._getValue(params[0]));
            }).on(eventName, function (e) {
                e.preventDefault();
                // Get uri value
                var uri = _this._getValue(params[0]);
                // Transition
                var transition = attributeHash.transition ? _this._getValue(attributeHash.transition) : null;
                // Go there.
                Application_1.default.getInstance().goto(uri, undefined, {}, false, transition);
            });
        }
    };
    Helpers.prototype.linkTo = function (params, attributeHash, block) {
        var _this = this;
        // Find named route
        var name = this._getValue(params[0]);
        // Relative route?
        if (/^\./.test(name)) {
            // Current name?
            var curName = Application_1.default.getInstance().currentRoute.route.name;
            if (!curName)
                throw new Error('The current route does not have a name, so relative links are not possible from here');
            // ..? (Level up)
            while (/^\.\./.test(name)) {
                // Remove last part
                var parts = curName.split(/\./);
                parts.pop();
                curName = parts.join('.');
                name = name.replace(/^\./, '');
            }
            // Add it.
            name = curName + name;
            // Remove any trailing dots
            name = name.replace(/\.+$/, '');
        }
        // Find route
        var route = Application_1.default.getInstance().router.namedRoutes.get(name);
        if (!route)
            throw new Error('There is no route with the name "' + name + '"');
        // Make uri
        var attributes = underscore_1.default.mapObject(attributeHash, function (value) {
            return _this._getValue(value);
        });
        var uri = route.makeUrl(attributes);
        // Query?
        if (attributeHash.query) {
            // Try to decode as JSON
            var query = attributeHash.query;
            if (typeof query === 'string') {
                try {
                    // Parse JSON
                    query = JSON.parse(query);
                }
                catch (e) {
                    // Ok, then we use it as it is
                }
            }
            // Convert to querystring
            if (typeof query === 'object') {
                query = query_string_1.default.stringify(query);
            }
            // Add to URL
            uri = uri + "?" + query;
        }
        // Make the link
        return this.link([uri], attributeHash, block);
    };
    Helpers.prototype.touchLink = function (params, attributeHash, block /* , morph : any, renderer : Renderer, scope : Scope, visitor : any */) {
        // Add hammertime
        attributeHash.hammerTime = true;
        if (!attributeHash.event)
            attributeHash.event = 'tap';
        return this.link(params, attributeHash, block /* , morph, renderer, scope, visitor */);
    };
    Helpers.prototype.touchLinkTo = function (params, attributeHash, block /* , morph : any, renderer : Renderer, scope : Scope, visitor : any */) {
        // Add hammertime
        attributeHash.hammerTime = true;
        if (!attributeHash.event)
            attributeHash.event = 'tap';
        return this.linkTo(params, attributeHash, block /* , morph, renderer, scope, visitor */);
    };
    ////////////////////////
    // Control statements //
    ////////////////////////
    /**
     * @method each
     */
    Helpers.prototype.each = function (params, attributeHash, blocks, morph /*, renderer, scope, visitor*/) {
        // Check uid for this each-block
        var eachUid = Utils_1.uidFor(morph);
        // Get the value
        var list = this._getValue(params[0]);
        Utils_1.each(list, function (item, i) {
            // Get a unique id for the item.
            var uid = Utils_1.uidFor(item);
            var itemKey = 'each:' + eachUid + ':' + i + ':' + uid;
            // Render item
            blocks.template.yieldItem(itemKey, [item, i]);
        });
    };
    /**
     * @method reverseEach
     */
    Helpers.prototype.reverseEach = function (params, attributeHash, blocks, morph /*, renderer, scope, visitor*/) {
        // Check uid for this each-block
        var eachUid = Utils_1.uidFor(morph);
        // Get the value
        var list = this._getValue(params[0]);
        Utils_1.reverseEach(list, function (item, i) {
            // Get a unique id for the item.
            var uid = Utils_1.uidFor(item);
            var itemKey = 'each:' + eachUid + ':' + i + ':' + uid;
            // Render item
            blocks.template.yieldItem(itemKey, [item, i]);
        });
    };
    Helpers.prototype.repeat = function (params, attributeHash, blocks, morph) {
        var repeatUid = Utils_1.uidFor(morph);
        var times = this._getValue(params[0]);
        for (var q = 0; q < times; q++) {
            var itemKey = 'repeat:' + repeatUid + ':' + q;
            blocks.template.yieldItem(itemKey, [q, q]);
        }
    };
    /**
     * @method if
     */
    Helpers.prototype.if = function (params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
        // Get the value
        var value = this._getValue(params[0]);
        return this._ifUnless(params, blocks, Utils_1.isTruthlike(value));
    };
    Helpers.prototype.ifOne = function (params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
        var _this = this;
        var trueConditions = underscore_1.default.filter(this._getValue(params), function (value) {
            return !!_this._getValue(value);
        });
        return this._ifUnless(params, blocks, Utils_1.isTruthlike(trueConditions.length > 0));
    };
    Helpers.prototype.ifAll = function (params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
        var _this = this;
        var trueConditions = underscore_1.default.filter(this._getValue(params), function (value) {
            return !!_this._getValue(value);
        });
        return this._ifUnless(params, blocks, Utils_1.isTruthlike(trueConditions.length === params.length));
    };
    /**
     * @method unless
     */
    Helpers.prototype.unless = function (params, attributeHash, blocks /*, morph, renderer, scope, visitor*/) {
        // Get the value
        var value = this._getValue(params[0]);
        return this._ifUnless(params, blocks, !Utils_1.isTruthlike(value));
    };
    Helpers.prototype._ifUnless = function (params, blocks, show) {
        // Is the param truth-like?
        if (show) {
            // Is it a yielding-if?
            if (blocks.template && blocks.template.yield) {
                blocks.template.yield();
                // Or parameter-if?
            }
            else {
                return this._getValue(params[1]);
            }
        }
        else {
            // Render the inverse yield
            if (blocks.inverse && blocks.inverse.yield) {
                blocks.inverse.yield();
                // Or the inverse param
            }
            else {
                return this._getValue(params[2]);
            }
        }
    };
    //////////////////////
    // Boolean switches //
    //////////////////////
    Helpers.prototype.either = function (params) {
        // Look for a truthlike param
        var values = this._getValues(params);
        for (var q = 0; q < values.length; q++) {
            if (Utils_1.isTruthlike(values[q]))
                return true;
        }
        return false;
    };
    Helpers.prototype.neither = function (params) {
        return !this.either(params);
    };
    Helpers.prototype.both = function (params) {
        // Look for a non-truthlike param
        var values = this._getValues(params);
        for (var q = 0; q < values.length; q++) {
            if (!Utils_1.isTruthlike(values[q]))
                return false;
        }
        return true;
    };
    ////////////
    // Values //
    ////////////
    Helpers.prototype.concat = function (params, attributeHash /*, blocks, morph, renderer, scope, visitor*/) {
        attributeHash = underscore_1.default.defaults(attributeHash, {
            separator: ''
        });
        return this._getValues(params).join(attributeHash.separator);
    };
    Helpers.prototype.object = function (params, attributeHash) {
        var _this = this;
        // Convert attributes to object
        var obj = {};
        underscore_1.default.each(attributeHash, function (value, key) {
            obj[key] = _this._getValue(value);
        });
        return obj;
    };
    Helpers.prototype.get = function (params) {
        // Get params
        var obj = this._getValue(params[0]);
        var key = this._getValue(params[1]);
        // Is it an observable?
        if (obj instanceof Observable_1.default || obj instanceof ObservableArray_1.default) {
            return obj.get(key);
        }
        else {
            return obj[key];
        }
    };
    Helpers.prototype.firstIn = function (params) {
        var arr = this._getValue(params[0]);
        if (arr instanceof ObservableArray_1.default) {
            return arr.first();
        }
        else {
            return underscore_1.default.first(arr);
        }
    };
    Helpers.prototype.equal = function (params) {
        // Get params
        var value1 = this._getValue(params[0]);
        var value2 = this._getValue(params[1]);
        return value1 == value2;
    };
    Helpers.prototype.notEqual = function (params) {
        return !this.equal(params);
    };
    Helpers.prototype.not = function (params) {
        var v = this._getValue(params[0]);
        if (v instanceof ObservableArray_1.default)
            v = v.length;
        return !v;
    };
    Helpers.prototype.isNull = function (params) {
        return this._getValue(params[0]) === null;
    };
    Helpers.prototype.isSet = function (params) {
        var value = this._getValue(params[0]);
        return value !== null && value !== undefined;
    };
    Helpers.prototype.gt = function (params) {
        // Get params
        var value1 = this._getValue(params[0]);
        var value2 = this._getValue(params[1]);
        return value1 > value2;
    };
    Helpers.prototype.gte = function (params) {
        // Get params
        var value1 = this._getValue(params[0]);
        var value2 = this._getValue(params[1]);
        return value1 >= value2;
    };
    Helpers.prototype.lt = function (params) {
        // Get params
        var value1 = this._getValue(params[0]);
        var value2 = this._getValue(params[1]);
        return value1 < value2;
    };
    Helpers.prototype.lte = function (params) {
        // Get params
        var value1 = this._getValue(params[0]);
        var value2 = this._getValue(params[1]);
        return value1 <= value2;
    };
    Helpers.prototype.isObject = function (params) {
        // Get param
        var value = this._getValue(params[0]);
        return value instanceof Object;
    };
    Helpers.prototype.valueOr = function (params) {
        var value = this._getValue(params[0]);
        var defaultValue = this._getValue(params[1]);
        return (value) ? value : defaultValue;
    };
    Helpers.prototype.fallback = function (params) {
        // Loop to find first non-null value
        for (var i in params) {
            var v = this._getValue(params[i]);
            if (v)
                return v;
        }
    };
    /////////////
    // Methods //
    /////////////
    Helpers.prototype.method = function (params) {
        // Get params
        params = this._getValues(params);
        var obj = params.shift();
        var key = params.shift();
        // No method
        if (!obj[key])
            throw new Error("Problem in 'method'-helper: there is no method '" + key + "' on the object");
        // Do it.
        return obj[key].apply(obj, params);
    };
    ////////////
    // Models //
    ////////////
    Helpers.prototype.isDirty = function (params) {
        // Get params
        var model = this._getValue(params[0]);
        var attributes = [];
        for (var q = 1; q < params.length; q++) {
            attributes.push(this._getValue(params[q]));
        }
        // Any of those dirty?
        return !!underscore_1.default.find(attributes, function (attr) {
            return model.isDirty(attr);
        });
    };
    //////////////////
    // HTML Helpers //
    //////////////////
    Helpers.prototype.attributesFrom = function (params, attributeHash, blocks, morph) {
        console.log(params, attributeHash, blocks, morph);
    };
    /////////////
    // Strings //
    /////////////
    Helpers.prototype.isNumeric = function (params) {
        var string = this._getValue(params[0]);
        return /^-?\d*(\.\d+)?$/.test(string);
    };
    Helpers.prototype.camelize = function (params) {
        var string = this._getValue(params[0]);
        var capitalFirstLetter = !!this._getValue(params[1]);
        return inflection_1.default.camelize(string, !capitalFirstLetter);
    };
    Helpers.prototype.string = function (params) {
        // First is method, second is str
        var args = this._getValues(params);
        var method = args.shift();
        var str = args.shift();
        if (!str)
            return null;
        return str[method].apply(str, args);
    };
    Helpers.prototype.underscore = function (params) {
        // First is method, second is str
        var args = this._getValues(params);
        var method = args.shift();
        return underscore_1.default[method].apply(this, args);
    };
    ////////////
    // Arrays //
    ////////////
    Helpers.prototype.count = function (params) {
        var value = this._getValue(params[0]);
        if (value instanceof Observable_1.default) {
            return underscore_1.default.size(value.attributes);
        }
        return value.length;
    };
    Helpers.prototype.contains = function (params) {
        var list = this._getValue(params[0]);
        var value = this._getValue(params[1]);
        return underscore_1.default.contains(list, value);
    };
    /////////////////////
    // Dates and times //
    /////////////////////
    Helpers.prototype.moment = function (params) {
        var value = this._getValue(params[0]);
        if (!moment_1.default.isMoment(value)) {
            value = moment_1.default(value);
        }
        return value;
    };
    Helpers.prototype.momentFormat = function (params) {
        var value = this._getValue(params[0]);
        var format = this._getValue(params[1]);
        if (moment_1.default.isMoment(value)) {
            return value.format(format);
        }
        else {
            return value;
        }
    };
    Helpers.prototype.momentIsAfter = function (params) {
        var moment1 = this._getValue(params[0]);
        var moment2 = this._getValue(params[1]);
        if (moment_1.default.isMoment(moment1) && moment_1.default.isMoment(moment2)) {
            return moment1.isAfter(moment2);
        }
        return false;
    };
    Helpers.prototype.fileSize = function (params) {
        var value = this._getValue(params[0]);
        return filesize_js_1.default(value);
    };
    /////////////
    // Numbers //
    /////////////
    Helpers.prototype.add = function (params) {
        var values = this._getValues(params);
        return values.reduce(function (total, item) {
            return item + total;
        }, 0);
    };
    Helpers.prototype.subtract = function (params) {
        var values = this._getValues(params);
        var startValue = values.shift();
        return values.reduce(function (total, item) {
            return total - item;
        }, startValue);
    };
    Helpers.prototype.numberFormat = function (params) {
        var value = this._getValue(params[0]);
        if (value === undefined)
            return '';
        return value.toLocaleString(Application_1.default.getInstance().i18n.language);
    };
    Helpers.prototype.round = function (params) {
        var value = this._getValue(params[0]);
        var digits = params.length > 1 ? this._getValue(params[1]) : 0;
        if (digits > 0) {
            var pow = Math.pow(10, digits);
            return Math.round(value * pow) / pow;
        }
        else {
            return Math.round(value);
        }
    };
    Helpers.prototype.max = function (params) {
        var values = this._getValues(params);
        return underscore_1.default.max(values);
    };
    Helpers.prototype.min = function (params) {
        var values = this._getValues(params);
        return underscore_1.default.min(values);
    };
    Helpers.prototype.multiply = function (params) {
        var values = this._getValues(params);
        var result = 1;
        underscore_1.default.each(values, function (v) {
            result *= parseFloat(v);
        });
        return result;
    };
    ///////////
    // Debug //
    ///////////
    Helpers.prototype.log = function (params /*, attributeHash : Dictionary<any>, blocks, morph, renderer, scope, visitor*/) {
        console.log.apply(console, this._getValues(params));
    };
    Helpers.prototype['query-params'] = function (params, attributeHash /*, blocks, morph, renderer, scope, visitor*/) {
        return query_string_1.default.stringify(this._getHashValues(attributeHash));
    };
    //////////////////
    // Localization //
    //////////////////
    Helpers.prototype.t = function (params, attributeHash) {
        // Get the key
        var key = this._getValue(params[0]);
        // Get from app
        return Application_1.default.getInstance().i18n.translate(key, attributeHash, this._getValue(params[1]));
    };
    Helpers.prototype.tText = function (params, attributeHash) {
        // Get value
        var v = this.t(params, attributeHash);
        // Plainify
        return jquery_1.default('<span>' + v + '</span>').text();
    };
    //////////////
    // Internal //
    //////////////
    Helpers.prototype._getValue = function (param) {
        return this.renderer.hooks.getValue(param);
    };
    Helpers.prototype._getValues = function (params) {
        var _this = this;
        return params.map(function (value) {
            return _this._getValue(value);
        });
    };
    Helpers.prototype._getHashValues = function (attributeHash) {
        var _this = this;
        var result = {};
        underscore_1.default.each(attributeHash, function (value, key) {
            result[key] = _this._getValue(value);
        });
        return result;
    };
    Helpers.User = {};
    return Helpers;
}());
exports.default = Helpers;
//# sourceMappingURL=Helpers.js.map