"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var dom_helper_1 = __importDefault(require("htmlbars/dist/cjs/dom-helper"));
var hooks_1 = __importDefault(require("htmlbars/dist/cjs/htmlbars-runtime/hooks"));
var render_1 = require("htmlbars/dist/cjs/htmlbars-runtime/render");
var Observable_1 = __importDefault(require("../Core/Observable"));
var ObservableArray_1 = __importDefault(require("../Core/ObservableArray"));
var Binding_1 = __importDefault(require("./Binding"));
var HelperProxy_1 = __importDefault(require("./HelperProxy"));
var Helpers_1 = __importDefault(require("./Helpers"));
var Component_1 = __importDefault(require("./Component"));
var View_1 = __importDefault(require("./View"));
var ActionBinding_1 = __importDefault(require("./ActionBinding"));
var Utils_1 = require("../Helpers/Utils");
var ComponentDefinition_1 = __importDefault(require("./ComponentDefinition"));
/**
 * @module Dom
 */
var Renderer = /** @class */ (function () {
    /**
     * @class Dom.Renderer
     *
     * @constructor
     */
    function Renderer() {
        var _this = this;
        this.partials = {};
        this.useFragmentCache = true;
        /**
         * @property dom
         * @type {HTMLBars.DOMHelper}
         */
        this.dom = new dom_helper_1.default();
        /**
         * Hooks are the way to configure the way HTMLBars renders your
         * templates. Renderer comes pre-configured with hooks that allow you
         * to bind to Observables (models) and ObservableArrays (collections).
         *
         * @property hooks
         * @type {object}
         */
        this.hooks = underscore_1.default.defaults({
            /**
             * The `get` hook is responsible for retrieving Bindings from the data store.
             *
             * @method hooks.get
             * @param  {Renderer} 	renderer   	The Renderer instance (this)
             * @param  {Scope} 		scope 		The Scope in which the `get` was called,
             *                           		containing the data that is available in this Scope
             * @param  {string} 	path 		The path (key) of the variable to retrieve
             * @return {mixed}     	The retrieved value
             */
            get: function (renderer, scope, path) {
                // Get first part
                var keys = path.split(/\./);
                // Look into local data
                var appliedScope = scope.self;
                if (scope.localPresent[keys[0]]) {
                    appliedScope = scope.locals[keys[0]];
                    keys.shift();
                    path = keys.join('.');
                }
                // Is data an observable?
                if ((appliedScope instanceof Observable_1.default && path.length > 0) || appliedScope instanceof ObservableArray_1.default) {
                    // Already a binding?
                    if (appliedScope._bindings === undefined)
                        appliedScope._bindings = {};
                    if (appliedScope._bindings[path]) {
                        // Return existing binding
                        return appliedScope._bindings[path];
                    }
                    // Create a binding
                    var binding = new Binding_1.default(_this, appliedScope, path);
                    // Store it
                    appliedScope._bindings[path] = binding;
                    // Get the value
                    return binding;
                }
                else if (path === '') {
                    // Return the scope itself
                    return appliedScope;
                }
                else {
                    // Do native thing (deep-get)
                    var value = appliedScope;
                    for (var q = 0; q < keys.length; q++) {
                        if (value === undefined || value === null)
                            return value;
                        value = value[keys[q]];
                    }
                }
                return value;
            },
            /**
             * Get value from reference (Binding)
             *
             * @method hooks.getValue
             * @param  {Binding} reference
             * @return {mixed}
             */
            getValue: function (reference) {
                // Is it a binding?
                if (reference instanceof Binding_1.default)
                    return reference.getValue();
                // A helper?
                if (reference instanceof HelperProxy_1.default)
                    return reference.invoke();
                // Just a value
                return reference;
            },
            /**
             * Link a morph to one or more values (in our case Bindings)
             *
             * @method hooks.linksRenderNode
             * @param  {HTMLBarsMorph} morph
             * @param  {Dom.Renderer} renderer
             * @param  {Scope} scope
             * @param  {string} type   				Values can be `@range`, `@attribute`, or helper names
             * @param  {array} values     			Array of values that have been linked to the morph. The should be Binding instances
             * @return
             */
            linkRenderNode: function (morph, renderer, scope, type, values) {
                // Add this morph to all involved bindings
                underscore_1.default.each(values, function (binding) {
                    // Is it a binding?
                    if (binding instanceof Binding_1.default) {
                        binding.addMorph(morph, scope);
                    }
                });
            },
            willRenderNode: function (morph /*, renderer, scope*/) {
                // Store morph so we can bind it when we get subexpressions, etc
                _this.currentMorph = morph;
            },
            subexpr: function (renderer, scope, helperName, params, hash) {
                // Loop through parameters to find Bindings
                underscore_1.default.each(params, function (param) {
                    if (param instanceof Binding_1.default) {
                        // Add morph
                        if (renderer.currentMorph)
                            param.addMorph(renderer.currentMorph, scope);
                    }
                });
                // Original behavior
                return hooks_1.default.Default.subexpr(renderer, scope, helperName, params, hash);
            },
            createFreshScope: function () {
                return { self: null, blocks: {}, locals: {}, localPresent: {}, actions: {}, view: null };
            },
            createChildScope: function (parentScope) {
                // Create a new scope extending the parent
                var scope = Object.create(parentScope);
                scope.locals = Object.create(parentScope.locals);
                scope.localPresent = Object.create(parentScope.localPresent);
                scope.blocks = Object.create(parentScope.blocks);
                scope.actions = Object.create(parentScope.actions);
                // Check is parent is a view
                if (parentScope.self instanceof View_1.default) {
                    // Bubble the actions
                    scope.actions = underscore_1.default.extend(scope.actions, parentScope.self.actions);
                    // No a component?
                    if (!(parentScope.self instanceof Component_1.default)) {
                        scope.view = parentScope.self;
                    }
                    else {
                        scope.component = parentScope.self;
                        scope.view = scope.component.view;
                    }
                }
                return scope;
            },
            findHelper: function (renderer, scope, helperName) {
                // Scope helper?
                if (scope.self && typeof scope.self.getHelper === 'function') {
                    var helper = scope.self.getHelper(helperName);
                    if (helper)
                        return helper;
                }
                // Use helper?
                if (Helpers_1.default.User[helperName]) {
                    return Helpers_1.default.User[helperName];
                }
                // Chicken helper?
                if (renderer.helpers[helperName]) {
                    return renderer.helpers[helperName];
                }
            },
            lookupHelper: function (renderer, scope, helperName) {
                // Find a helper
                var helper = _this.hooks.findHelper(renderer, scope, helperName);
                if (!helper)
                    throw new Error('There is no helper registered with the name "' + helperName + '"');
                // Create the wrapper
                var proxy = new HelperProxy_1.default(helperName, helper, _this.helpers);
                return proxy;
            },
            invokeHelper: function (morph, renderer, scope, visitor, params, attributeHash, helper, options) {
                // Is it a component?
                if (helper instanceof ComponentDefinition_1.default) {
                    // Call component hook
                    return {
                        value: _this.hooks.component(morph, renderer, scope, helper, params, attributeHash, options, visitor)
                    };
                }
                // Do we have a morph?
                if (morph) {
                    // Loop through params to hook up bindings
                    underscore_1.default.each(params, function (value) {
                        if (value instanceof Binding_1.default) {
                            value.addMorph(morph, scope);
                        }
                    });
                    // And the attribute
                    underscore_1.default.each(attributeHash, function (value) {
                        if (value instanceof Binding_1.default) {
                            value.addMorph(morph, scope);
                        }
                    });
                }
                // Set arguments 
                helper.setArguments(params, attributeHash, options, morph, renderer, scope, visitor);
                // Invoke it once to see if the helper returns a value, or is a block-type helper
                var helperResult = helper.invoke();
                var helperValue;
                if (helperResult === undefined) {
                    // No result, then we don't want to return a value
                    helperValue = undefined;
                }
                else {
                    // A value was returned, meaning this helper is used as a value getter, and might need
                    // to be invoked again when bound values change: thus, return the proxy
                    helperValue = helper;
                }
                // Invoke the helper and give back the value
                return {
                    value: helperValue,
                    link: !!helperValue
                };
            },
            component: function (morph, renderer, scope, tagName, params, attributeHash, options, visitor) {
                ////////////////////////////////////////////////////////////////
                // Is the component already created, and is this a re-render? //
                ////////////////////////////////////////////////////////////////
                var state = morph.getState();
                if (state.component) {
                    state.component.scheduleRevalidate();
                    return;
                }
                ///////////////////////////////////
                // Create the component instance //
                ///////////////////////////////////
                // Get definition
                var definition = Component_1.default.registry.get(tagName);
                // No known component?
                if (!definition) {
                    // Do the component fallback.
                    var element_1 = renderer.dom.createElement(tagName);
                    underscore_1.default.each(attributeHash, function (value, key) {
                        element_1.setAttribute(key, renderer.hooks.getValue(value));
                    });
                    var fragment = render_1.render(options.default, renderer, scope, {}).fragment;
                    element_1.appendChild(fragment);
                    morph.setNode(element_1);
                    return;
                }
                // Create a new scope and use the component as self
                var newScope = renderer.hooks.createScope(renderer, scope);
                // Are there attributes defined as an attribute?
                if (attributeHash && attributeHash.attributes) {
                    // A binding?
                    var attrs = attributeHash.attributes;
                    if (attrs instanceof Binding_1.default)
                        attrs = attrs.getValue();
                    // A hash?
                    if (attrs instanceof Object) {
                        // Replace
                        delete attributeHash.attributes;
                        Utils_1.each(attrs, function (value, key) {
                            attributeHash[key] = value;
                        });
                    }
                }
                // Create it
                var component = new Component_1.default(definition.name, definition.source, morph, newScope, params, attributeHash, visitor, options, definition.initCallback, definition.methods, _this);
                newScope.self = component;
                // Now render it.
                component.render();
                // Store it.
                state.component = component;
            },
            /**
             * Check if the given path is a known class (component, or block, inline)
             *
             * @method hooks.classify
             * @param  {Dom.Renderer} renderer
             * @param  {Object} scope
             * @param  {string} path
             * @return {string}
             */
            classify: function (renderer, scope, path) {
                // Is this a known component?
                if (Component_1.default.registry.has(path))
                    return 'component';
                // Nothing known.
                return false;
            },
            getBlock: function (scope, key) {
                // Is the block known?
                var block = scope.blocks[key];
                if (block)
                    return block;
                // Are we inside a component?
                if (scope.self instanceof Component_1.default) {
                    return scope.self.getSubTemplate(key);
                }
                // Nothing there
                return null;
            },
            getActionScope: function (scope, key) {
                // Check the scope
                if (scope.actions && scope.actions[key]) {
                    return scope;
                }
                else if (scope.locals.actions && scope.locals.actions[key]) {
                    // Use local action
                    return scope.locals;
                }
                else if (scope.self.actions && scope.self.actions[key]) {
                    // Use that
                    return scope.self;
                }
                else if (scope.view && scope.view.actions && scope.view.actions[key]) {
                    // Use the veiw
                    return scope.view;
                }
                else {
                    return false;
                }
            },
            getAction: function (scope, key) {
                var appliedScope = _this.hooks.getActionScope(scope, key);
                if (appliedScope) {
                    // Get the action
                    return appliedScope.actions[key];
                }
                return false;
            },
            keywords: underscore_1.default.defaults({
                /**
                 * The action keyword creates an ActionBinding instance and
                 * stores it on the element. The `action` helper can then use
                 * this ActionBinding to apply it on the DOM.
                 *
                 * @method keywords.action
                 */
                action: function (morph, renderer, scope, params, attributeHash) {
                    // Check binding
                    if (morph.actionBindings)
                        return;
                    // Get action scope
                    var actionCallback = renderer.hooks.getAction(scope, params[0]);
                    if (!actionCallback) {
                        // Lazy action?
                        if (attributeHash.lazy === true) {
                            // Use current scope so send action lazily
                            actionCallback = function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                scope.self.sendAction(params[0], args);
                            };
                        }
                        else {
                            // Undefined action.
                            throw new Error("Could not find action \"" + params[0] + "\" within the scope");
                        }
                    }
                    // Get action
                    var parameters = params.slice(1);
                    // Create action binding
                    var binding = new ActionBinding_1.default(renderer, morph, params[0], actionCallback, parameters, attributeHash, scope.self);
                    morph.actionBindings = binding;
                },
            }, hooks_1.default.keywords)
        }, hooks_1.default);
        this.helpers = new Helpers_1.default(this);
    }
    return Renderer;
}());
exports.default = Renderer;
//# sourceMappingURL=Renderer.js.map