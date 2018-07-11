"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Middleware = /** @class */ (function () {
    function Middleware(name, callback) {
        this.name = name;
        this.callback = callback;
    }
    Middleware.register = function (middleware, name) {
        // Check arguments
        if (!(middleware instanceof Middleware)) {
            middleware = new Middleware(name, middleware);
        }
        else if (name === null) {
            name = middleware.name;
        }
        // Store it.
        Middleware.registry.set(name, middleware);
    };
    ;
    Middleware.registry = new Map();
    return Middleware;
}());
exports.default = Middleware;
//# sourceMappingURL=Middleware.js.map