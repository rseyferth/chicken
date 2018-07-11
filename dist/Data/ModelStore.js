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
var Obj_1 = __importDefault(require("../Core/Obj"));
var ModelStore = /** @class */ (function (_super) {
    __extends(ModelStore, _super);
    function ModelStore(modelName) {
        var _this = _super.call(this) || this;
        _this.modelName = modelName;
        _this.records = {};
        return _this;
    }
    ModelStore.prototype.has = function (id) {
        return this.records[id] !== undefined;
    };
    ModelStore.prototype.set = function (id, model) {
        this.records[id] = model;
        return this;
    };
    ModelStore.prototype.get = function (id) {
        return this.records[id] ? this.records[id] : undefined;
    };
    ModelStore.prototype.forget = function (id) {
        delete this.records[id];
        return this;
    };
    return ModelStore;
}(Obj_1.default));
exports.default = ModelStore;
//# sourceMappingURL=ModelStore.js.map