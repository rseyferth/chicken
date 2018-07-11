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
var Observable_1 = __importDefault(require("../Core/Observable"));
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.initialize.apply(_this);
        return _this;
    }
    Service.get = function (name) {
        // Created?
        if (!Service.services.has(name)) {
            // Do we know it?
            if (!Service.registry.has(name)) {
                throw new Error("There is no service registered with the name \"" + name + "\"");
            }
            // Instantiate
            var ServiceClass = Service.registry.get(name);
            var service = new ServiceClass(name);
            // Store
            Service.services.set(name, service);
        }
        return Service.services.get(name);
    };
    Service.registry = new Map();
    Service.services = new Map();
    return Service;
}(Observable_1.default));
exports.default = Service;
//# sourceMappingURL=Service.js.map