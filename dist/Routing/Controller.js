"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = __importDefault(require("../Application"));
var Controller = /** @class */ (function () {
    /**
     * @class Routing.Controller
     *
     * @constructor
     * @param {Routing.Action} action  The routing action that leads to the creation of this controller
     */
    function Controller(action, application) {
        this.action = action;
        this.application = application || Application_1.default.getInstance();
    }
    Object.defineProperty(Controller.prototype, "parameters", {
        ////////////////
        // Properties //
        ////////////////
        /**
         * Request parameters
         *
         * @property parameters
         * @type {Map}
         */
        get: function () {
            return this.action.parameters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "viewContainer", {
        /**
         * The ViewContainer into which this controller action will render
         *
         * @property viewContainer
         * @type {Dom.ViewContainer}
         */
        get: function () {
            return this.action.viewContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "request", {
        /**
         * @property request
         * @type {Routing.Request}
         */
        get: function () {
            return this.action.request;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "route", {
        /**
         * @property route
         * @type {Routing.Route}
         */
        get: function () {
            return this.action.route;
        },
        enumerable: true,
        configurable: true
    });
    Controller.registry = new Map();
    return Controller;
}());
exports.default = Controller;
//# sourceMappingURL=Controller.js.map