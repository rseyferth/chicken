"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var Redirect = /** @class */ (function () {
    function Redirect(uri) {
        this.flash = {};
        this.uri = uri;
    }
    Redirect.prototype.with = function (dataOrKey, value) {
        // Value?
        var data = dataOrKey;
        if (value) {
            data = {};
            data[dataOrKey] = value;
        }
        jquery_1.default.extend(this.flash, data);
        return this;
    };
    Redirect.prototype.withError = function (message) {
        return this.with('error', message);
    };
    return Redirect;
}());
exports.default = Redirect;
//# sourceMappingURL=Redirect.js.map