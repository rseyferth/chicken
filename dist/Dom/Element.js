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
var underscore_1 = __importDefault(require("underscore"));
var Obj_1 = __importDefault(require("../Core/Obj"));
/**
 * @module Dom
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @class Dom.Element
     * @extends Core.Obj
     *
     * @constructor
     * @param {jQuery} $element
     * @param {Application} [application]
     */
    function Element($element) {
        var _this = _super.call(this) || this;
        _this.$element = $element;
        return _this;
    }
    Element.registerHook = function (callback, type) {
        if (type === void 0) { type = 'afterRender'; }
        Element.Hooks[type].push(callback);
        return true;
    };
    ;
    Element.prototype.setContent = function (content) {
        // Fire the before hooks.
        this._fireHooks('beforeRender');
        // Set it
        this.$element.html(content);
        this.trigger('content', content);
        // Fire the after hooks
        this._fireHooks('afterRender');
    };
    Element.prototype._fireHooks = function (type) {
        var _this = this;
        underscore_1.default.each(Element.Hooks[type], function (callback) {
            // Fire it.
            callback.apply(_this, [_this.$element, _this]);
        });
    };
    Element.Hooks = {
        beforeRender: [],
        afterRender: []
    };
    return Element;
}(Obj_1.default));
exports.default = Element;
//# sourceMappingURL=Element.js.map