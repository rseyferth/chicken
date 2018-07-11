"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelperProxy = /** @class */ (function () {
    function HelperProxy(name, helperFunction, context) {
        this.arguments = [];
        this.name = name;
        this.callback = helperFunction;
        this.context = context;
    }
    HelperProxy.prototype.setArguments = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.arguments = args;
    };
    HelperProxy.prototype.invoke = function () {
        // Do it
        return this.callback.apply(this.context, this.arguments);
    };
    return HelperProxy;
}());
exports.default = HelperProxy;
//# sourceMappingURL=HelperProxy.js.map