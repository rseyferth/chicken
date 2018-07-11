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
var Element_1 = __importDefault(require("./Element"));
var Obj_1 = __importDefault(require("../Core/Obj"));
var Transition_1 = __importDefault(require("./Transition"));
var ViewContainer = /** @class */ (function (_super) {
    __extends(ViewContainer, _super);
    function ViewContainer($element, application) {
        var _this = _super.call(this, $element) || this;
        _this._isLoading = false;
        _this.transitionsDisabled = false;
        _this.name = ViewContainer.getViewName($element);
        _this.defaultTransition = $element.attr('transition');
        return _this;
    }
    ViewContainer.getViewName = function ($element) {
        // Get it either from the name-attr or view-attr
        var name = $element.is('view-container') ? $element.attr('name') : $element.attr('view-container');
        // No?
        if (!name)
            name = ViewContainer.DefaultName;
        return name;
    };
    /**
     * Initialize the ViewContainer.
     *
     * @method initialize
     * @chainable
     */
    ViewContainer.prototype.initialize = function () {
        this.$element.addClass(ViewContainer.Classes.Initialized);
        return this;
    };
    ViewContainer.prototype.setContent = function (content, setLoadingFalse) {
        var _this = this;
        if (setLoadingFalse === void 0) { setLoadingFalse = true; }
        // Transition?
        var transition = this.currentAction.transition;
        if (transition === undefined) {
            // Use my default transition
            transition = this.defaultTransition;
        }
        // No longer loading
        if (setLoadingFalse)
            this.setLoading(false);
        // Use transition?
        this.transitionContent(content, transition).then(function () {
            // Apply hooks
            ViewContainer.any.trigger('render', _this);
        });
        return this;
    };
    ViewContainer.prototype.transitionContent = function (newContent, transitionName) {
        var _this = this;
        return new Promise(function (resolve) {
            // Put content into container
            var $newContent = $('<div class="view-container-element" />').html(newContent.toString());
            // No transition?
            if (!transitionName || transitionName === 'none' || _this.transitionsDisabled) {
                // Set content now
                _this._fireHooks('beforeRender');
                _this.$element.append($newContent);
                // Remove old content
                if (_this.$currentContent) {
                    _this.$currentContent.remove();
                }
                // Switch!
                _this.$currentContent = $newContent;
                _this.trigger('content', newContent);
                _this._fireHooks('afterRender');
                return resolve();
            }
            // Create transition
            var transition = new Transition_1.default(_this.$element, _this.$currentContent, $newContent, transitionName);
            _this._fireHooks('beforeRender');
            transition.play().then(function () {
                // Remove old content
                if (_this.$currentContent) {
                    _this.$currentContent.remove();
                }
                // Switch!
                _this.$currentContent = $newContent;
                _this.trigger('content', newContent);
                _this._fireHooks('afterRender');
                // Done!
                resolve();
            });
        });
    };
    ViewContainer.prototype.setView = function (view) {
        this.currentView = view;
        return this;
    };
    ViewContainer.prototype.setAction = function (action) {
        this.currentAction = action;
        return this;
    };
    ViewContainer.prototype.setLoading = function (loading) {
        if (loading === void 0) { loading = true; }
        this._isLoading = loading;
        this.$element.toggleClass(ViewContainer.Classes.Loading, loading);
        return this;
    };
    ViewContainer.prototype.getIsLoading = function () {
        return this._isLoading;
    };
    ViewContainer.prototype.isInDom = function () {
        return this.$element.closest(document.documentElement).length > 0;
    };
    ViewContainer.Classes = {
        Initialized: 'initialized',
        Loading: 'loading'
    };
    ViewContainer.ElementSelector = 'view-container:not(.initialized),[view-container]:not(.initialized)';
    ViewContainer.DefaultName = 'main';
    ViewContainer.any = new Obj_1.default();
    return ViewContainer;
}(Element_1.default));
exports.default = ViewContainer;
//# sourceMappingURL=ViewContainer.js.map