"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reference = /** @class */ (function () {
    function Reference(observable, path) {
        this.observable = observable;
        this.path = path;
    }
    Reference.prototype.getValue = function () {
        return this.observable.get(this.path);
    };
    Reference.prototype.setValue = function (value) {
        this.observable.set(this.path, value);
        return this;
    };
    Reference.prototype.watch = function (callback) {
        this.observable.observe(this.path, callback);
    };
    return Reference;
}());
exports.default = Reference;
//# sourceMappingURL=Reference.js.map