"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var Reference_1 = __importDefault(require("../Core/Reference"));
var Binding = /** @class */ (function () {
    /**
     * @class Dom.Binding
     *
     * @constructor
     * @param  {Dom.Renderer} 							renderer
     * @param  {Core.Observable|Core.ObservableArray} 	observable
     * @param  {string} 								path
     */
    function Binding(renderer, observable, path) {
        var _this = this;
        this.renderer = renderer;
        this.observable = observable;
        this.path = path;
        /**
         * The list of 'morph' objects that are bound by this Binding. A
         * morph refers to a specific part of the DocumentFragment that can be
         * updated. These morphs are provides by the HTMLBars package.
         *
         * @property morphs
         * @type {Set}
         */
        this.morphs = new Set();
        ////////////////
        // Now watch! //
        ////////////////
        // What to do when value changes
        this.changeCallback = function () {
            // Trigger updates for all morphs
            _this.morphs.forEach(function (morph) {
                morph.isDirty = true;
                if (morph.view)
                    morph.view.scheduleRevalidate();
                if (morph.component)
                    morph.component.scheduleRevalidate();
            });
        };
        // Now listen to the object
        if (this.path) {
            try {
                this.observable.observe(path, this.changeCallback);
            }
            catch (ex) {
            }
        }
        else {
            this.observable.study(this.changeCallback);
        }
    }
    /**
     * Get the current value of the data object
     *
     * @method getValue
     * @return {mixed}
     */
    Binding.prototype.getValue = function () {
        // Get a path value
        if (this.path) {
            return this.observable.get(this.path);
        }
        // Then return the whole thing
        return this.observable;
    };
    Binding.prototype.setValue = function (value, morph) {
        if (morph) {
            // Make sure the morph is not updated itself by this value setting
            morph.lastValue = value;
        }
        return this.observable.set(this.path, value);
    };
    Binding.prototype.getReference = function () {
        if (!this.reference) {
            this.reference = new Reference_1.default(this.observable, this.path);
        }
        return this.reference;
    };
    Binding.prototype.destroy = function () {
        // Unlisten the object
        if (this.path) {
            this.observable.disregard(this.path, this.changeCallback);
        }
        else {
            this.observable.neglect(this.changeCallback);
        }
    };
    /**
     * Add a morph object to the list of morphs, so that it will
     * be updated when the data changes. And in cases when applicable,
     * vice-versa.
     *
     * @method addMorph
     * @param {HTMLBarsMorph} morph
     * @param {object} scope
     */
    Binding.prototype.addMorph = function (morph, scope) {
        // Is this an already bound morph?
        if (this.morphs.has(morph))
            return;
        //////////////////////////////////////////
        // Add the morph, for data->dom binding //
        //////////////////////////////////////////
        this.morphs.add(morph);
        // Save the component and view
        morph.view = scope.view || scope.self;
        if (scope.component)
            morph.component = scope.component;
        ///////////////////////////////////////////
        // Check node type for dom->data binding //
        ///////////////////////////////////////////
        for (var key in Binding.TwoWay) {
            // Check if it applies
            var twoWay = Binding.TwoWay[key];
            if (twoWay.match(morph)) {
                // Let's bind!
                twoWay.bind(this, morph);
                break;
            }
        }
    };
    Binding.TwoWay = {
        InputValue: {
            match: function (morph) {
                return morph.element && /^INPUT$/.test(morph.element.tagName)
                    && morph.attrName === 'value'
                    && /^text|search|date|time|password|number|range|email$/.test(morph.element.type);
            },
            bind: function (binding, morph) {
                // Listen to key up, etc
                var $element = jquery_1.default(morph.element);
                var lastValue = $element.val();
                $element.on('input keyup change paste', function () {
                    var v = $element.val();
                    if (v !== lastValue) {
                        binding.setValue(v, morph);
                        lastValue = v;
                    }
                });
            }
        },
        TextareaContent: {
            match: function (morph) {
                return morph.contextualElement && /^TEXTAREA$/.test(morph.contextualElement.tagName) && morph.attributeName === undefined;
            },
            bind: function (binding, morph) {
                // Listen to key up, etc
                var $element = jquery_1.default(morph.contextualElement);
                $element.on('keyup change paste', function () {
                    binding.setValue($element.val(), morph);
                });
            }
        },
        SelectValue: {
            match: function (morph) {
                return morph.element && /^SELECT$/.test(morph.element.tagName) && morph.attrName === 'value';
            },
            bind: function (binding, morph) {
                // Listen to change
                var $element = jquery_1.default(morph.element);
                $element.on('change', function () {
                    binding.setValue($element.val(), morph);
                });
            }
        },
        CheckboxChecked: {
            match: function (morph) {
                return morph.element && /^INPUT$/.test(morph.element.tagName)
                    && morph.attrName === 'checked'
                    && /^checkbox$/.test(morph.element.type);
            },
            bind: function (binding, morph) {
                // Listen to key up, etc
                var $element = jquery_1.default(morph.element);
                $element.on('change', function () {
                    binding.setValue($element.prop('checked'), morph);
                });
            }
        }
    };
    return Binding;
}());
exports.default = Binding;
//# sourceMappingURL=Binding.js.map