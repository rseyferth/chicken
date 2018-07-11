"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var jquery_1 = __importDefault(require("jquery"));
var uuid_lib_1 = __importDefault(require("uuid-lib"));
/**
 * @module Dom
 */
var ActionBinding = /** @class */ (function () {
    /**
     * @class Dom.ActionBinding
     *
     * @constructor
     */
    function ActionBinding(renderer, morph, actionName, actionHandler, parameters, options, view) {
        this.isListening = false;
        this.renderer = renderer;
        this.morph = morph;
        this.actionName = actionName;
        this.actionHandler = actionHandler;
        this.options = underscore_1.default.defaults(options, {
            preventDefault: true
        });
        this.parameters = parameters;
        this.view = view;
        this.eventName = options.on ? options.on : ActionBinding.getDefaultEventName(morph.element);
        this.isListening = false;
        this.id = ActionBinding.register(this);
        // Store this binding on the element
        morph.element.setAttribute('data-chicken-action', this.id);
    }
    ActionBinding.prototype.apply = function () {
        var _this = this;
        // Already applied?
        if (this.isListening === true)
            return this;
        this.isListening = true;
        // Get element
        this.$element = jquery_1.default(this.morph.element);
        this.$element.on(this.eventName, function (e) {
            // Prevent default?
            if (_this.options.preventDefault)
                e.preventDefault();
            // Call the handler
            var params = underscore_1.default.flatten([
                underscore_1.default.map(_this.parameters, function (value) {
                    return _this.renderer.hooks.getValue(value);
                }),
                _this,
                _this.view,
                e
            ]);
            _this.actionHandler.apply(_this.view, params);
        });
        return this;
    };
    ActionBinding.register = function (binding) {
        // Generate id
        var id = uuid_lib_1.default.raw();
        ActionBinding.registry.set(id, binding);
        return id;
    };
    ;
    ActionBinding.get = function (id) {
        return ActionBinding.registry.get(id);
    };
    ;
    ActionBinding.getDefaultEventName = function (element) {
        // Specific one for this tag?
        var eventName = ActionBinding.DefaultEventNames[element.tagName.toLowerCase()];
        // Or the old click.
        if (!eventName)
            eventName = 'click';
        return eventName;
    };
    ;
    ActionBinding.registry = new Map();
    ActionBinding.DefaultEventNames = {
        input: 'change keyup paste',
        select: 'change',
        form: 'submit'
    };
    return ActionBinding;
}());
exports.default = ActionBinding;
//# sourceMappingURL=ActionBinding.js.map