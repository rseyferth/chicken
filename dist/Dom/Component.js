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
var jquery_1 = __importDefault(require("jquery"));
var underscore_1 = __importDefault(require("underscore"));
var inflection_1 = __importDefault(require("inflection"));
var template_utils_1 = require("htmlbars/dist/cjs/htmlbars-util/template-utils");
var render_1 = require("htmlbars/dist/cjs/htmlbars-runtime/render");
var View_1 = __importDefault(require("./View"));
var Obj_1 = __importDefault(require("../Core/Obj"));
/**
 * @module Dom
 */
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    /**
     * @class Dom.Component
     * @extends Dom.View
     */
    function Component(name, source, morph, scope, parameters, attributeHash, visitor, subTemplates, initCallback, methods, renderer) {
        if (methods === void 0) { methods = {}; }
        var _this = _super.call(this, source, undefined, renderer) || this;
        _this.tagName = 'div';
        _this.isDestroyed = false;
        _this.name = name;
        _this.morph = morph;
        _this.scope = scope;
        /**
         * The list of non-keyed parameters used in this component
         *
         * @property parameters
         * @type {array}
         */
        _this.parameters = parameters;
        /**
         * The attribute hash
         *
         * @property attributes
         * @type {object}
         */
        _this.attributes = {};
        underscore_1.default.each(attributeHash, function (value, key) {
            // Autocast
            if (value === 'true') {
                value = true;
            }
            else if (value === 'false') {
                value = false;
            }
            // Set it.
            _this.attributes[inflection_1.default.camelize(key.split('-').join('_'), true)] = value;
        });
        _this.visitor = visitor;
        _this.subTemplates = subTemplates;
        /**
         * The component instance that wrap this component, if any.
         *
         * @property parentComponent
         * @type {Dom.Component}
         */
        if (_this.scope.component) {
            _this.parentComponent = _this.scope.component;
            _this.setSilently('parent', _this.parentComponent);
        }
        // Do I have a parent?
        if (_this.parentComponent) {
            _this.parentComponent.components[_this.getId()] = _this;
            _this.attributes._ = _this.parentComponent;
        }
        /**
         * @property view
         * @type {Dom.View}
         */
        _this.view = _this.scope.view;
        if (_this.view) {
            _this.view.components[_this.getId()] = _this;
            if (!_this.parentComponent)
                _this.set('_', _this.view);
            _this.attributes.$ = _this.view;
        }
        /**
         * The dom-object can be used to listen to dom events on the event
         *
         * @property dom
         * @type {Core.Obj}
         */
        _this.dom = new Obj_1.default();
        // Make attributes available
        _this.with(_this.attributes);
        // Add methods
        jquery_1.default.extend(_this, methods);
        // Before destroy
        _this.hooks.beforeDestroy = [];
        // Definition callback?
        if (initCallback) {
            initCallback.apply(_this);
        }
        return _this;
    }
    Component.prototype.getHelper = function (key) {
        // Me?
        if (this.helpers[key])
            return this.helpers[key];
        // Parent component?
        if (this.parentComponent)
            return this.parentComponent.getHelper(key);
        // View
        if (this.view)
            return this.view.getHelper(key);
        return false;
    };
    Component.prototype.findParentComponent = function (key) {
        // My parent?
        if (this.parentComponent) {
            // Am I the one you're looking for?
            if (this.parentComponent.name === key)
                return this.parentComponent;
            // Look higher up
            return this.parentComponent.findParentComponent(key);
        }
        else {
            // No dice.
            return false;
        }
    };
    Component.prototype.getId = function () {
        // Already set?
        if (!this._id) {
            // Set as attribute
            var id = this.attributes.id;
            if (id) {
                this._id = id;
            }
            else {
                // Do it by name
                var name_1 = inflection_1.default.camelize(this.name.split('-').join('_'), true);
                if (Component.instanceCounts[name_1] === undefined)
                    Component.instanceCounts[name_1] = 0;
                Component.instanceCounts[name_1]++;
                this._id = name_1 + Component.instanceCounts[name_1];
            }
        }
        return this._id;
    };
    Component.prototype.sendAction = function (name) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // No name given?
        if (!name) {
            name = this.attributes.action;
        }
        // Get the callback.
        var actionScope = this.renderer.hooks.getActionScope(this.scope, name);
        if (!actionScope)
            throw new Error("[Component " + this.name + "] Could not find action \"" + name + "\" within the scope");
        var callback = actionScope.actions[name];
        // Now call it.
        var params = underscore_1.default.flatten([
            underscore_1.default.map(args, function (value) {
                return _this.renderer.hooks.getValue(value);
            }),
            this,
            actionScope
        ]);
        return callback.apply(actionScope instanceof View_1.default ? actionScope : this, params);
    };
    Component.prototype.renderSync = function () {
        var _this = this;
        // Before render hook
        underscore_1.default.each(this.hooks.beforeRender, function (cb) {
            cb.apply(_this);
        });
        // Create the template
        try {
            // Render it
            this.renderResult = this.getTemplate().render(this, this.renderer, {
                scope: this.scope,
                template: this.subTemplates.default
            });
            this.documentFragment = this.renderResult.fragment;
        }
        catch (error) {
            // Enrich error with element-path
            var path_1 = [];
            var $el = jquery_1.default(this.renderer.currentMorph.element);
            $el.parents().addBack().not('html').each(function () {
                var entry = this.tagName.toLowerCase();
                if (this.className) {
                    entry += '.' + this.className.replace(/ /g, '.');
                }
                path_1.push(entry);
            });
            var stringPath = path_1.join(' > ');
            // Get template source
            var source = this.source;
            if (this.view)
                source = this.name + " in " + this.view.source;
            var msg = "Error in template \"" + source + "\" at \"" + stringPath + "\":\n\t" + error + "\n";
            this.rejectPromise('ready', msg);
            return this;
        }
        // Study the object
        this.study(function () {
            _this.scheduleRevalidate();
        });
        // Create the element
        this.element = document.createElement(this.tagName);
        underscore_1.default.each(this.attributes, function (value, key) {
            // Check value type
            if (value === 'true')
                value = true;
            if (value === 'false')
                value = false;
            if (!(value instanceof Object) && jquery_1.default.isNumeric(value) && !/^0/.test(value.toString()))
                value = parseFloat(value.toString());
            if (value !== _this.attributes[key]) {
                _this.attributes[key] = value;
            }
            // Is it a useful value?
            if (key !== 'title' && (typeof value === 'string' || typeof value === 'number') && value.toString().length < 64) {
                var attrKey = inflection_1.default.underscore(key).split('_').join('-');
                _this.element.setAttribute(attrKey, value.toString());
            }
        });
        this.$element = jquery_1.default(this.element);
        this.$element.append(this.documentFragment);
        // CSS class
        if (this.cssClass)
            this.$element.addClass(this.cssClass);
        // Trigger beforeAdded
        this.trigger('beforeAdd', this.$element);
        // Put element in result
        this.morph.setNode(this.$element[0]);
        // Done.
        this.trigger('added', this.$element);
        // Enable DOM events
        this.enableDomEvents();
        // Find child components
        if (underscore_1.default.size(this.components) > 0) {
            // Wait for the children to complete first
            var promises = underscore_1.default.map(this.components, function (child) {
                return child.getPromise('ready');
            });
            Promise.all(promises).then(function () {
                _this.resolvePromise('ready');
                View_1.default.any.trigger('render', _this.$element);
            });
        }
        else {
            // We are ready now.
            this.resolvePromise('ready');
            View_1.default.any.trigger('render', this.$element);
        }
        return this;
    };
    Component.prototype.enableDomEvents = function () {
        var _this = this;
        // Loop through callbacks
        this.dom.listeners.forEach(function (callbacks, name) {
            // Proper event?
            if (!underscore_1.default.contains(Component.DomEventNames, name)) {
                throw new Error('The "' + name + '" event is not a valid DOM event.');
            }
            // Listen and connect.
            _this.$element.on(name, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args.unshift(name);
                _this.dom.trigger.apply(_this.dom, args);
            });
        });
    };
    Component.prototype.getSubTemplate = function (key) {
        var block = template_utils_1.blockFor(render_1.render, this.subTemplates[key], {
            scope: this.scope
        });
        return block;
    };
    Component.prototype.getAttribute = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var value = this.attributes[key];
        if (value === undefined)
            value = defaultValue;
        return value;
    };
    Component.prototype.getAttributes = function (prefix) {
        // Get all keys with uiX
        var result = {};
        var regex = prefix ? new RegExp('^' + prefix + '[A-Z]') : false;
        underscore_1.default.each(this.attributes, function (value, key) {
            // Prefixed?
            if (regex) {
                // Match?
                if (!regex.test(key))
                    return;
                // Remove it
                if (prefix)
                    key = key.substr(prefix.length).toLowerCase();
            }
            // Value
            if (value !== null && typeof value === 'object' && typeof value.getValue === 'function') {
                value = value.getValue();
            }
            // Set it
            result[key] = value;
        });
        return result;
    };
    Component.prototype.get = function (key) {
        // Do basics first
        var value = _super.prototype.get.call(this, key);
        // Nothing?
        if (value === undefined) {
            // Bubble up.
            if (this.parentComponent) {
                return this.parentComponent.get(key);
            }
            else if (this.view) {
                return this.view.get(key);
            }
        }
        return value;
    };
    /**
     * Set default values for component attributes. Use this in the initCallback.
     *
     * @method defaults
     * @param  {Object} hash   Key/value pairs
     * @chainable
     */
    Component.prototype.defaults = function (hash) {
        var _this = this;
        this.withoutNotifications(function () {
            underscore_1.default.each(hash, function (value, key) {
                // Set?
                if (_this.attributes[key] === undefined) {
                    _this.set(key, value);
                }
            });
        });
    };
    Component.prototype.beforeDestroy = function (callback) {
        this.hooks.beforeDestroy.push(callback);
        return this;
    };
    Component.prototype.destroy = function () {
        var _this = this;
        // I am destroyed
        if (this.isDestroyed)
            return this;
        this.isDestroyed = true;
        // Call the hooks
        underscore_1.default.each(this.hooks.beforeDestroy, function (cb) {
            cb.apply(_this);
        });
        return this;
    };
    Component.DomEventNames = [
        // Touch events
        'touchStart', 'touchMove', 'touchEnd', 'touchCancel',
        // Keyboard
        'keyDown', 'keyUp', 'keyPress',
        // Mouse
        'mouseDown', 'mouseUp', 'contextMenu', 'click', 'doubleClick', 'mouseMove', 'focusIn', 'focusOut', 'mouseEnter', 'mouseLeave',
        // Form
        'submit', 'change', 'focusIn', 'focusOut', 'input',
        // HTML5
        'dragStart', 'drag', 'dragEnter', 'dragLeave', 'dragOver', 'dragEnd', 'drop'
    ];
    Component.registry = new Map();
    Component.instanceCounts = {};
    return Component;
}(View_1.default));
exports.default = Component;
//# sourceMappingURL=Component.js.map