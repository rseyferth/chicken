"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = __importDefault(require("../Application"));
/**
 * @module Dom
 */
var ComponentDefinition = /** @class */ (function () {
    function ComponentDefinition(name, source, initCallback, methods, renderer) {
        if (methods === void 0) { methods = {}; }
        this.name = name;
        this.source = source;
        this.initCallback = initCallback;
        this.renderer = renderer ? renderer : Application_1.default.getInstance().config('renderer');
        this.methods = methods;
    }
    return ComponentDefinition;
}());
exports.default = ComponentDefinition;
//# sourceMappingURL=ComponentDefinition.js.map