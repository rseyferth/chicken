"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("./Model"));
function createPivotFor(model, pivotAttributes) {
    // The pivot itself is a model too
    var pivot = new Model_1.default(pivotAttributes);
    // Make it
    var proxy = new Proxy(model, {
        get: function (target, property /*, receiver*/) {
            // Get pivot?
            if (property === 'getPivot') {
                return function () {
                    return pivot;
                };
            }
            if (property === 'getModel') {
                return function () {
                    return model;
                };
            }
            if (property === 'pivot') {
                return pivot;
            }
            // Is pivot.
            if (property === 'isPivot') {
                return function () {
                    return true;
                };
            }
            // Is it a method?
            var value = target[property];
            if (typeof value === 'function') {
                // Wrap it
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Is the first argument a key, starting with 'pivot.'?
                    if (args.length > 0 && typeof args[0] === 'string' && args[0].match(/^pivot\./)) {
                        // Pass on to the pivot model
                        args[0] = args[0].replace(/^pivot\./, '');
                        return pivot[property].apply(pivot, args);
                    }
                    else {
                        // Pass on to the regular model
                        return target[property].apply(target, args);
                    }
                };
            }
            else {
                // Normal behaviour
                return value;
            }
        }
    });
    return proxy;
}
exports.createPivotFor = createPivotFor;
//# sourceMappingURL=Pivot.js.map