"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Collection_1 = __importDefault(require("./Collection"));
var Pivot_1 = require("./Pivot");
/**
 * @module Data
 */
var PivotCollection = /** @class */ (function (_super) {
    __extends(PivotCollection, _super);
    function PivotCollection(modelClass, relationship) {
        var _this = _super.call(this, modelClass) || this;
        // Localize
        _this.relationship = relationship;
        return _this;
    }
    PivotCollection.prototype.add = function (model, pivotAttributes) {
        if (pivotAttributes === void 0) { pivotAttributes = {}; }
        // Already a pivot?
        if (!model.isPivot()) {
            // Proxy it
            model = Pivot_1.createPivotFor(model, pivotAttributes);
        }
        // Add it.
        _super.prototype.add.call(this, model);
        return this;
    };
    return PivotCollection;
}(Collection_1.default));
exports.default = PivotCollection;
//# sourceMappingURL=PivotCollection.js.map