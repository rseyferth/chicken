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
var jquery_1 = __importDefault(require("jquery"));
var Observable_1 = __importDefault(require("../Core/Observable"));
var Application_1 = __importDefault(require("../Application"));
var Binding_1 = __importDefault(require("./Binding"));
var ApiCall_1 = __importDefault(require("../Api/ApiCall"));
var Obj_1 = __importDefault(require("../Core/Obj"));
var Utils_1 = require("../Helpers/Utils");
var Model_1 = __importDefault(require("../Data/Model"));
var Collection_1 = __importDefault(require("../Data/Collection"));
var compiler_1 = require("htmlbars/dist/cjs/htmlbars-compiler/compiler");
/**
 * @module Dom
 */
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(source, initCallback, renderer) {
        var _this = _super.call(this) || this;
        _this.dataPromises = {};
        _this.dataExpectations = {};
        _this.loadPromises = [];
        _this.actions = {};
        _this.helpers = {};
        _this.components = {};
        _this.apiCalls = [];
        _this.isActive = true;
        _this.bindings = new Set();
        _this.source = source;
        _this.renderer = renderer ? renderer : Application_1.default.getInstance().config('renderer');
        _this.hooks = {
            beforeRender: [],
            beforeLeave: []
        };
        //////////////////////////
        // Check out the source //
        //////////////////////////
        // No template (just yield)?
        if (source === false) {
            _this.templateString = '{{yield}}';
        }
        // Is it HTML?		
        else if (/^\<[a-z\!]/.test(source) || /^{{/.test(source)) {
            // Use code now
            _this.templateString = source;
        }
        // Name?
        else if (/[a-z0-9\-]+\./.test(source) || /^[a-zA-Z]+$/.test(source)) {
            // Set translation prefix?
            if (_this.constructor === View && View.AutoTranslationPrefix) {
                _this.translationPrefix(source);
            }
            // Is it cached?
            if (View.TemplateCache.has(source)) {
                // Use it.
                _this.templateString = View.TemplateCache.get(source);
            }
            else {
                // Load template
                var url = Application_1.default.getInstance().uri(Application_1.default.getInstance().config('viewPath'), source.split(/\./).join('/'), '.' + Application_1.default.getInstance().config('viewExtension'));
                _this.templateUrl = url;
            }
        }
        // Url.
        else {
            // Load it
            _this.templateUrl = source;
        }
        // Definition callback?
        if (initCallback) {
            initCallback.apply(_this);
        }
        return _this;
    }
    View.prototype.beforeRender = function (callback) {
        this.hooks.beforeRender.push(callback);
        return this;
    };
    View.prototype.beforeLeave = function (callback) {
        this.hooks.beforeLeave.push(callback);
        return this;
    };
    View.prototype.loadTemplate = function () {
        var _this = this;
        // Already loading or loaded?
        if (this.promises.has('template')) {
            return this.getPromise('template');
        }
        // Promise.
        var promise = this.promise('template', function (resolve, reject) {
            // Do we have the template already?
            if (_this.templateString) {
                resolve(_this.templateString);
                return;
            }
            // Load it.
            jquery_1.default.ajax(_this.templateUrl).then(function (result) {
                // Set template code
                _this.templateString = result;
                // We're done.
                resolve(result);
            }).fail(function (error) {
                reject(error.responseText);
            });
        });
        // Add and return
        this.loadPromises.push(promise);
        return promise;
    };
    /**
     * To add data to the view, you can use the **with** method. The simplest way is to
     * call it using a **key** and a **value**:
     *
     * 	Chicken.view('page').with('title', 'Page title')
     *
     * You can also add a promise-returning method, such as:
     *
     * 	Chicken.view('product.index')
     * 		.with('products', Chicken.api('/products'));
     *
     * The view will then wait for the Api call to finish, before showing, so that you
     * can use the `products` collection your view.
     *
     * The same goes for a single model:
     *
     * 	Chicken.view('product.show')
     * 		.with('product', Chicken.api('/product/' + this.parameters.get('id')));
     *
     * When you have multiple data variables you want to pass to the view, you
     * can also use object notation:
     *
     * 	Chicken.view('product.index')
     * 		.with({
     * 			products: Chicken.api('/products'),
     * 			categories: Chicken.api('/categories')
     * 		});
     *
     *
     *
     * @method with
     * @param  {...mixed} args   This method can be called in two ways. See documentation
     * @chainable
     */
    View.prototype.with = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Is it a single object hash?
        if (args.length === 1 && typeof args[0] === 'object') {
            // Do an each
            underscore_1.default.each(args[0], function (value, key) {
                _this.with(key, value);
            });
        }
        else {
            // Use key/value
            var key = args[0], value = args[1];
            // Is the key a string?
            if (typeof key !== 'string')
                throw new TypeError('[Dom.View] The "with" method accepts either a key, value or hash-object as arguments.');
            // Is it an Api call?
            if (value instanceof ApiCall_1.default && !value.doNotExecuteInView) {
                // Get the promise and add to api calls list
                this.apiCalls.push(value);
                var promise = this.dataPromises[key] = value.getPromise('complete');
                this.loadPromises.push(promise);
                promise.then(function (result) {
                    _this.withoutNotifications(function () {
                        _this.set(key, result, true);
                    });
                });
            }
            // Is the data a promise?
            else if (value instanceof Promise) {
                // Add to promises
                this.dataPromises[key] = value;
                this.loadPromises.push(value);
                value.then(function (result) {
                    _this.withoutNotifications(function () {
                        _this.set(key, result, true);
                    });
                });
            }
            else {
                // Is it a Binding?
                if (value instanceof Binding_1.default) {
                    // Use value
                    value = value.getReference();
                }
                // Set it now (convert to observables, and do not trigger updates)
                this.withoutNotifications(function () {
                    _this.set(key, value, true);
                });
            }
        }
        return this;
    };
    /**
     * Tell the View to expect given data to present in order to render properly. When this data
     * is not present, the View will throw an error.
     *
     * @method expect
     * @param  {string}  key          The data key that is expected in order for the View to render properly
     * @param  {Number}  minimumCount (Default = 1) The minimum number of records we expect
     * @param  {Number}  maximumCount (Default = false) The maximum number of recorders we expected
     * @chainable
     */
    View.prototype.expect = function (key, minimumCount, maximumCount) {
        if (minimumCount === void 0) { minimumCount = 1; }
        if (maximumCount === void 0) { maximumCount = false; }
        // Set it
        this.dataExpectations[key] = {
            min: minimumCount,
            max: maximumCount
        };
        return this;
    };
    View.prototype.action = function (key, callback) {
        this.actions[key] = callback;
        return this;
    };
    View.prototype.helper = function (key, callback) {
        this.helpers[key] = callback;
        return this;
    };
    View.prototype.getHelper = function (key) {
        return this.helpers[key] || false;
    };
    View.prototype.translationPrefix = function (key) {
        var _this = this;
        // Store prefix
        if (!key && this.source)
            key = this.source;
        this.translationKeyPrefix = key;
        this.tkp = key; // Shorthand
        // Register the 'l' helper
        if (this.helpers.l === undefined) {
            this.helper('l', function (params, attributeHash) {
                // Get key
                var key = Utils_1.getValue(params[0]);
                key = _this.translationKeyPrefix + "." + key;
                // Translate
                return Application_1.default.getInstance().i18n.translate(key, attributeHash, Utils_1.getValue(params[1]));
            });
        }
        return this;
    };
    View.prototype.sendAction = function (name) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // Get the callback.
        var actionScope = this;
        var callback = actionScope.actions[name];
        // Now call it.
        var params = underscore_1.default.flatten([
            underscore_1.default.map(args, function (value) {
                return _this.renderer.hooks.getValue(value);
            }),
            this,
            actionScope
        ]);
        callback.apply(actionScope, params);
    };
    /**
     * Render the view!
     *
     * @method render
     * @return {Promise}  The 'render' promise is returned. The 'added' promise will be called
     *                    when the view is added to the DOM.
     **/
    View.prototype.render = function () {
        var _this = this;
        // Make sure the template is loaded
        this.loadTemplate();
        // We make the 'render' promise.
        return this.promise('render', function (resolve, reject) {
            // Start api calls.
            underscore_1.default.invoke(_this.apiCalls, 'execute');
            /////////////////////////////////////////
            // Wait for all loadPromises to finish //
            /////////////////////////////////////////
            Promise.all(_this.loadPromises).then(function () {
                // Check present of data
                underscore_1.default.each(_this.dataExpectations, function (options, key) {
                    // Get it
                    var data = _this.get(key);
                    if (data === undefined)
                        return reject('The View expected ' + key + ' to be present, but it was not.');
                    // Model or Collection?
                    if (!(data instanceof Model_1.default || data instanceof Collection_1.default))
                        return reject('The View expected ' + key + ' to be a Model or Collection, but it was a ' + (typeof data));
                    // Check count
                    if (data instanceof Model_1.default && options.min && options.min > 1)
                        return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, only one was present');
                    if (data instanceof Collection_1.default) {
                        if (options.min && data.length < options.min)
                            return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, ' + data.length + ' were present');
                        if (options.max && data.length > options.max)
                            return reject('The View expected ' + key + ' to have no more than ' + options.max + ' records, ' + data.length + ' were present');
                    }
                });
                _this.renderSync();
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * Render the view synchronously. Only use this when you know all
     * the data is already loaded!
     *
     * @method renderSync
     * @chainable
     */
    View.prototype.renderSync = function () {
        /////////////////////
        // Create template //
        /////////////////////
        var _this = this;
        // Before render hook
        var continueRendering = true;
        underscore_1.default.each(this.hooks.beforeRender, function (cb) {
            if (!continueRendering)
                return;
            var result = cb.apply(_this);
            if (result === false)
                continueRendering = false;
        });
        // Before render returned false?
        if (!continueRendering)
            return this;
        // Render it
        try {
            this.renderResult = this.getTemplate().render(this, this.renderer);
            // Localize and be done!
            this.documentFragment = this.renderResult.fragment;
            this.resolvePromise('render', this.documentFragment);
        }
        catch (error) {
            // Enrich error with element-path
            var path_1 = [];
            var stringPath = void 0;
            if (this.renderer.currentMorph && this.renderer.currentMorph.element) {
                var $el = jquery_1.default(this.renderer.currentMorph.element);
                $el.parents().addBack().not('html').each(function () {
                    var entry = this.tagName.toLowerCase();
                    if (this.className) {
                        entry += '.' + this.className.replace(/ /g, '.');
                    }
                    path_1.push(entry);
                });
                stringPath = path_1.join(' > ');
            }
            else {
                stringPath = 'unknown';
            }
            // Get template source
            var source = this.source;
            var msg = "Error in template \"" + source + "\" at \"" + stringPath + "\":\n\t" + error + "\n";
            this.rejectPromise('ready', msg);
            return this;
        }
        return this;
    };
    View.prototype.getTemplate = function () {
        // Create
        if (!this.template) {
            this.template = compiler_1.compile(this.templateString);
        }
        return this.template;
    };
    /**
     * Have the rendered view be revalidated when it's convenient.
     *
     * @method scheduleRevalidate
     * @chainable
     */
    View.prototype.scheduleRevalidate = function () {
        var _this = this;
        // Still active?
        if (!this.isActive) {
            return this;
        }
        // Not already pending?
        if (!this.revalidateTimeout) {
            // Wait a bit.
            this.revalidateTimeout = setTimeout(function () {
                // Revalidate!
                _this.revalidate();
                // Check if components are still there
                underscore_1.default.each(_this.components, function (component, key) {
                    // Element rendered?
                    if (component.$element && component.$element.length > 0) {
                        // No longer in DOM
                        if (!jquery_1.default.contains(document.documentElement, component.$element[0])) {
                            component.destroy();
                            delete _this.components[key];
                        }
                    }
                });
            }, View.RevalidationDelay);
        }
        return this;
    };
    /**
     * Revalidate the rendered view. Revalidation means the updating of
     * 'dirty' elements (morphs). The dirtying is done by the Bindings, set up
     * by the Renderer.
     *
     * If your binding is valid, and components work as the should, you shouldn't
     * need to call this method. If you do though, it is better to call
     * `scheduleRevalidate` instead, to prevent undue calls.
     *
     * @method revalidate
     * @chainable
     */
    View.prototype.revalidate = function () {
        this.trigger('beforeRevalidate');
        if (this.renderResult)
            this.renderResult.revalidate();
        this.trigger('revalidate');
        View.any.trigger('revalidate', this);
        this.revalidateTimeout = false;
        return this;
    };
    /**
     * Add the view to the ViewContainer, replacing previous contents
     * and making sure the ViewContainer knows it's gotten the view.
     *
     * @method addToContainer
     * @param {Dom.ViewContainer} viewContainer
     */
    View.prototype.addToContainer = function (viewContainer) {
        // Set view
        viewContainer.setView(this);
        // Create wrapper
        var $view = jquery_1.default('<view/>');
        $view.html(this.documentFragment.toString());
        // Add to DOM
        viewContainer.setContent($view);
        // Set element
        this.$element = $view;
        // Done.
        View.any.trigger('render', $view);
        this.resolvePromise('ready', [this]);
    };
    /**
     * Handle the leaving of the page this View is on, e.g. destroying
     * components.
     *
     * @method leave
     * @return {Promise}
     */
    View.prototype.leave = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Before ,leave hook
            var allowLeave = true;
            underscore_1.default.each(_this.hooks.beforeLeave, function (cb) {
                if (allowLeave) {
                    var result = cb.apply(_this);
                    if (result === false)
                        allowLeave = false;
                }
            });
            // Can't leave?
            if (!allowLeave)
                return reject();
            // I am destroyed
            _this.isActive = false;
            // Destroy components
            underscore_1.default.each(_this.components, function (component) {
                component.destroy();
                component.isActive = false;
            });
            // Kill bindings
            _this.bindings.forEach(function (binding) {
                binding.destroy();
            });
            // Done.
            resolve();
        });
    };
    View.prototype.addBinding = function (binding) {
        this.bindings.add(binding);
        return this;
    };
    /**
     * The TemplateCache is used to cache templates by their name. When you are
     * building your application for production, you can also use this to bundle
     * the templates.
     *
     * @property TemplateCache
     * @static
     * @type {Map}
     */
    View.TemplateCache = new Map();
    /**
     * The number of milliseconds to wait before revalidating your views after
     * a change in the data has occured.
     *
     * This value can be very low, as it is mostly used to bundle changes together
     * that occur semi-simultaneously.
     *
     * @property RevalidationDelay
     * @static
     * @type {Number}
     */
    View.RevalidationDelay = 3;
    /**
     * When this is true, a translation-prefix will automatically be set
     * upon creation of this View, with the same value as the given source.
     *
     * @property AutoTranslationPrefix
     * @static
     * @type {Boolean}
     */
    View.AutoTranslationPrefix = false;
    View.any = new Obj_1.default();
    return View;
}(Observable_1.default));
exports.default = View;
//# sourceMappingURL=View.js.map