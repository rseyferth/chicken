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
var inflection_1 = __importDefault(require("inflection"));
var underscore_1 = __importDefault(require("underscore"));
var jquery_1 = __importDefault(require("jquery"));
var moment_1 = __importDefault(require("moment"));
var Observable_1 = __importDefault(require("../Core/Observable"));
var ComputedProperty_1 = __importDefault(require("../Core/ComputedProperty"));
var ModelStore_1 = __importDefault(require("./ModelStore"));
var Pivot_1 = require("./Pivot");
var Utils_1 = require("../Helpers/Utils");
var Collection_1 = __importDefault(require("./Collection"));
var Application_1 = __importDefault(require("../Application"));
var ObservableArray_1 = __importDefault(require("../Core/ObservableArray"));
/**
 * @module Data
 */
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    /**
     * The Model class is an extension of Observable, and is used
     * to hold data that is received from an Api, and save that data, etc.
     *
     * @class Data.Model
     *
     * @constructor
     * @param  {Object}  initValues
     * @param  {Boolean} convertToObservables
     */
    function Model(initValues, convertToObservables) {
        if (initValues === void 0) { initValues = {}; }
        if (convertToObservables === void 0) { convertToObservables = false; }
        var _this = _super.call(this, initValues, convertToObservables) || this;
        _this.relationshipStudies = {};
        /**
         * The original values as received from the Api
         *
         * @property originalValues
         * @type {object}
         */
        _this.originalValues = {};
        underscore_1.default.each(initValues, function (value, key) {
            _this.originalValues[key] = _this.uncastValue(key, value);
        });
        /**
         * Values of relationships, keyed by the relationshipname
         *
         * @property related
         * @type {Object}
         */
        _this.related = {};
        /**
         * The watchable current state of this model. This
         * contains attributes for 'busy', 'saving', and 'dirty'.
         *
         * You can use this in a view to update the view according
         * to the model state, using the 'is' property e.g.:
         *
         * 	{{#if author.is.busy}}
         * 		Please wait a moment...
         * 	{{/if}}
         *
         * @property state
         * @type {Observable}
         */
        _this.state = new Observable_1.default({
            busy: false,
            saving: false,
            dirty: false,
            deleting: false,
            deleted: false,
            new: !_this.get('id')
        });
        _this.state.study(function () {
            _this._scheduleAttributeChanged('is');
        });
        _this.metaAttributes = new Observable_1.default({});
        // Check computed!
        var def = _this.getDefinition();
        if (def) {
            // Apply to model
            def.initializeModel(_this);
        }
        // A initialize method on the model?
        _this.initialize();
        return _this;
    }
    Model.prototype.initialize = function () {
    };
    ///////////
    // State //
    ///////////
    /**
     * Get the model state. This method is used to make the state
     * available in views.
     *
     * @method getIs
     * @return {Observable}
     */
    Model.prototype.getIs = function () {
        return this.state;
    };
    Model.prototype.getMeta = function () {
        return this.metaAttributes;
    };
    /**
     * @method isBusy
     * @return {Boolean}
     */
    Model.prototype.isBusy = function () {
        return this.state.get('busy');
    };
    /////////////////////////
    // Information methods //
    /////////////////////////
    /**
     * Checks whether this model is new or has already been saved. This
     * is determined by checking whether the 'id' is set.
     *
     * @method isNew
     * @return {Boolean}
     */
    Model.prototype.isNew = function () {
        return !this.get('id');
    };
    /////////////////
    // Get and set //
    /////////////////
    Model.prototype._get = function (key) {
        // Is there a getter?
        var methodName = 'get' + inflection_1.default.camelize(key);
        if (this[methodName] && typeof this[methodName] === 'function') {
            return this[methodName].apply(this, [this.attributes[key]]);
        }
        // Is it a relationship that was not yet loaded
        var relationship = this.getRelationship(key);
        if (!this.related)
            this.related = {};
        if (relationship && !this.related[key]) {
            this.related[key] = relationship.getInitValue();
        }
        // Is it a relationship?
        if (this.related && this.related[key])
            return this.related[key];
        // Nothing special. Do basics
        return _super.prototype._get.call(this, key);
    };
    Model.prototype._set = function (key, value) {
        var _this = this;
        // Is there a setter?
        var methodName = 'set' + inflection_1.default.camelize(key);
        if (this[methodName] && typeof this[methodName] === 'function' && !(value instanceof ComputedProperty_1.default)) {
            return this[methodName].apply(this, [value]);
        }
        // Is it a relationship that was not yet loaded
        if (!this.related)
            this.related = {};
        var relationship = this.getRelationship(key);
        if (relationship) {
            // Many?
            if (relationship.usesCollection()) {
                // Already initialized?
                if (this.related[key])
                    this.related[key].empty();
                // Initialize relationship
                if (!(value instanceof Collection_1.default))
                    throw new TypeError("The '" + key + "' relationship expects a Collection as value");
                value.each(function (model) {
                    _this.addRelatedModel(key, model);
                });
            }
            else {
                // Set the model
                this.setRelatedModel(key, value);
            }
        }
        else {
            // Cast if necessary
            value = this.castValue(key, value);
            // Continue with it
            _super.prototype._set.call(this, key, value);
        }
        // Is dirty?
        if (this.state) {
            this._scheduleUpdateDirty();
        }
        return this;
    };
    /**
     * Override Observable.observe
     *
     * Check if model has HasMany, HasManyTrough or BelongToMany relations it can study
     */
    Model.prototype.observe = function (keyOrKeys, callback) {
        var _this = this;
        //can have multiple keys, call function for each key
        if (Array.isArray(keyOrKeys)) {
            underscore_1.default.each(keyOrKeys, function (key) {
                _this.observe(key, callback);
            });
            return this;
        }
        var key = keyOrKeys;
        //Study relation?
        var rel = this.getRelationship(key);
        if (rel && rel.usesCollection()) {
            if (this.relationshipStudies[key] === undefined) {
                this.relationshipStudies[key] = function () {
                    _this._scheduleAttributeChanged(key);
                };
                this.get(key).study(this.relationshipStudies[key]);
            }
        }
        //super
        return _super.prototype.observe.call(this, keyOrKeys, callback);
    };
    /**
     * Get a value for use in the API, meaning it is in
     * database format. For example, dates will be converted back
     * from Moment instances into strings.
     *
     * @method getForApi
     * @param  {string} key
     * @return {mixed}
     */
    Model.prototype.getForApi = function (key) {
        // Get value
        var value = this.uncastValue(key, this.attributes[key]);
        return value;
    };
    /**
     * Cast given value according to the AttributeDefinition for given
     * key. For example, if you pass a string containing a date as value,
     * for a Date key, you will receive a Moment instance.
     *
     * @method castValue
     * @param  {string} key
     * @param  {Mixed} value
     * @return {Mixed}
     */
    Model.prototype.castValue = function (key, value) {
        // Do we need to cast it?
        var attributeDefinition = this.getAttributeDefinition(key);
        if (attributeDefinition) {
            value = attributeDefinition.cast(value);
        }
        return value;
    };
    /**
     * Uncast given value according to the AttributeDefinition for given key.
     *
     * @method uncastValue
     * @param  {string} key
     * @param  {Mixed} value
     * @return {Mixed}
     */
    Model.prototype.uncastValue = function (key, value) {
        // Do we need to uncast it?
        var attributeDefinition = this.getAttributeDefinition(key);
        if (attributeDefinition) {
            value = attributeDefinition.uncast(value);
        }
        return value;
    };
    /**
     * Get the value of a translation
     *
     * @method translation
     * @param  {string} key
     * @param  {string} language     (Default = null) When null, the application language will be used
     * @return {string|null}
     */
    Model.prototype.translation = function (key, language) {
        // Language given?
        if (!language)
            language = Application_1.default.getInstance().i18n.language;
        // Retrieve value
        var v = this.get(key);
        if (v instanceof Observable_1.default)
            v = v.toObject();
        if (!v || !(v instanceof Object) || !v[language])
            return null;
        return v[language];
    };
    /////////////////////////
    // Api related methods //
    /////////////////////////
    /**
     * Set attribute values that were retrieved from the API, meaning
     * they will not be seen as dirty, and will overwrite the original values
     * of the model.
     *
     * @method setAttributesFromApi
     * @param {Object} attributes
     * @chainable
     */
    Model.prototype.setAttributesFromApi = function (attributes) {
        var _this = this;
        // Loop through them and set values that are not dirty
        underscore_1.default.each(attributes, function (value, key) {
            // Dirty?
            if (_this.isDirty(key))
                return;
            // Set it, and see this as a non-dirty value
            _this.setAttribute(key, value);
            _this.originalValues[key] = _this.uncastValue(key, _this.attributes[key]);
        });
        return this;
    };
    /**
     * Get attribute values for use in the API.
     *
     * @method getAttributesForApi
     * @param  {Boolean} [onlyDirty=true]  When true, only attributes that have been changed will be retrieved
     * @param  {Boolean} [modelIsDynamic=false]	 When true, attributes that are not in the model definition are also passed along. This overrides the model definition's 'dynamic' value
     * @return {Object}      A hash containing attribute key/values
     */
    Model.prototype.getAttributesForApi = function (onlyDirty) {
        var _this = this;
        if (onlyDirty === void 0) { onlyDirty = true; }
        // Which attributes to use?
        var attr = onlyDirty ? this.getDirty() : underscore_1.default.defaults({}, this.attributes);
        // Check model definition
        var modelDefinition = this.getDefinition();
        if (modelDefinition) {
            // Use only attributes in the model definition
            var modelAttr = underscore_1.default.pick(attr, function (value, key) {
                // Dynamic?
                if (!modelDefinition.isDynamic) {
                    // Has property?
                    if (!(modelDefinition.hasAttribute(key) || modelDefinition.getRelationshipByLocalKey(key) !== undefined))
                        return false;
                }
                // Is the value computed?
                if (value instanceof ComputedProperty_1.default)
                    return false;
                // OK.
                return true;
            });
            // Now uncast the values
            attr = underscore_1.default.mapObject(modelAttr, function (value, key) {
                // Get the actual value
                value = Utils_1.getValue(value);
                // Uncast it for DB usage
                var definition = _this.getAttributeDefinition(key);
                if (definition)
                    value = definition.uncast(value);
                return value;
            });
            // Not only dirty?
            if (!onlyDirty && !modelDefinition.isDynamic) {
                // Also add defined attributes that were not set in the model (by default value)
                var missingKeys = underscore_1.default.difference(modelDefinition.getApiAttributeNames(), underscore_1.default.keys(attr));
                underscore_1.default.each(missingKeys, function (key) {
                    // Is it a local relationship?
                    if (modelDefinition.getRelationshipByLocalKey(key) !== undefined)
                        return;
                    // Add default value
                    var def = _this.getAttributeDefinition(key);
                    var defaultValue = def.getDefaultValue();
                    if (defaultValue)
                        attr[key] = def.uncast(def.getDefaultValue());
                });
            }
            // Remove hidden attributes
            attr = underscore_1.default.omit(attr, modelDefinition.getHiddenAttributeNames());
            return attr;
        }
        else {
            // Loop attributes
            var convertedAttr_1 = {};
            underscore_1.default.each(attr, function (value, key) {
                // Is the value computed?
                if (value instanceof ComputedProperty_1.default)
                    return;
                // Get the actual value
                value = Utils_1.getValue(value);
                // Is it a moment?
                if (moment_1.default.isMoment(value)) {
                    // Make it ISO 8601
                    value = value.format('YYYY-MM-DD HH:mm:ss');
                }
                // Is it an array or model?
                else if (value instanceof ObservableArray_1.default) {
                    value = JSON.stringify(value.toArray());
                }
                else if (value instanceof Model) {
                    value = JSON.stringify(value.getAttributesForApi(onlyDirty));
                }
                // Set it
                convertedAttr_1[key] = value;
            });
            // Switch
            attr = convertedAttr_1;
        }
        delete attr.id;
        return attr;
    };
    Model.prototype.setMetaAttributes = function (attributes) {
        this.metaAttributes.import(attributes);
        return this;
    };
    /**
     * Get the Api instance that is used by this model
     *
     * @method getApi
     * @return {Api.Api}
     */
    Model.prototype.getApi = function () {
        // Check model definition
        var apiName = this.getDefinition() ? this.getDefinition().api : 'default';
        return Application_1.default.getInstance().apis[apiName];
    };
    /**
     * Get the uri for this model, that can be used in an API call
     *
     * @method getApiUri
     * @return {string}
     */
    Model.prototype.getApiUri = function () {
        // Check definition
        var def = this.getDefinition();
        if (!def)
            throw new Error('Cannot guess the ApiUri for a model that has no ModelDefinition');
        // Get api uri
        return def.getApiUri(this.get('id'));
    };
    /**
     * Save the model to the Api.
     *
     * Possible options are:
     *
     * **uri** (string)
     * A custom uri to use instead of the model's default uri
     *
     * **includeRelated** (boolean)
     * _(Default: true)_
     * Whether to included modifications in the relationships
     *
     * **includeRelatedData** (boolean)
     * _(Default: false)_
     * Whether to embed relationship data into the request. Note: this is not following JSONAPI specifications.
     *
     * @method save
     * @param  {Object} [options={}]	Optional options hash
     * @return {Promise} The promise returned by the ApiCall.execute method
     */
    Model.prototype.save = function (options) {
        var _this = this;
        // Make settings
        var settings = jquery_1.default.extend({
            uri: null,
            includeRelated: true,
            includeRelatedData: false // False, true or an array of relationship-names to save
        }, options);
        // Busy?
        if (this.isBusy())
            throw new Error('Model has not completed its last action');
        this.state.set('busy', true);
        this.state.set('saving', true);
        // Create the call
        if (!settings.uri)
            settings.uri = this.getApiUri();
        var apiCall = this.getApi().saveModel(this, settings);
        // Handle it.
        apiCall.getPromise('complete').then(function (result) {
            // Check result
            if (result instanceof Model) {
                // Use id for me.
                if (!_this.get('id')) {
                    _this.set('id', result.get('id'));
                    _this.state.set('new', false);
                }
            }
            // No longer dirty!
            _this.state.set('dirty', false);
            _this.resetDirty();
            // No longer busy
            _this.state.set('busy', false);
            _this.state.set('saving', false);
            // Trigger.
            _this.trigger('save', apiCall);
        }, function () {
            // No longer busy
            _this.state.set('busy', false);
            _this.state.set('saving', false);
            _this.trigger('error', apiCall);
        });
        // Done.
        return apiCall.execute();
    };
    /**
     * Delete the model from the Api.
     *
     * Possible options are:
     *
     * **uri** (string)
     * A custom uri to use instead of the model's default uri
     *
     * @method delete
     * @param  {Object} [options={}]	Optional options hash
     * @return {Promise} The promise returned by the ApiCall.execute method
     */
    Model.prototype.delete = function (options) {
        var _this = this;
        // Make settings
        var settings = jquery_1.default.extend({
            uri: null,
            modelIsDynamic: false
        }, options);
        // Busy?
        if (this.isBusy())
            throw new Error('Model has not completed its last action');
        this.state.set('busy', true);
        this.state.set('deleting', true);
        // Create the call
        if (!settings.uri)
            settings.uri = this.getApiUri();
        var apiCall = this.getApi().deleteModel(this, settings);
        // Handle it.
        apiCall.getPromise('complete').then(function () {
            // No longer busy
            _this.state.set('busy', false);
            _this.state.set('saving', false);
            _this.state.set('deleted', true);
            _this.trigger('delete');
            //remove model from the store
            Model.deleteFromStore(_this.getModelName(), _this.get('id'));
        }, function () {
            // No longer busy
            _this.state.set('busy', false);
            _this.state.set('saving', false);
            _this.trigger('error', apiCall);
        });
        // Done.
        return apiCall.execute();
    };
    ///////////////////
    // Handy methods //
    ///////////////////
    Model.prototype.toObject = function (includedUids) {
        if (includedUids === void 0) { includedUids = []; }
        // Get basics
        var obj = _super.prototype.toObject.call(this, includedUids);
        // Add relationships
        underscore_1.default.each(this.related, function (item, key) {
            // Observable?
            if (item.toObject) {
                item = item.toObject(includedUids);
            }
            else if (item.toArray) {
                item = item.toArray(includedUids);
            }
            obj[key] = item;
        });
        return obj;
    };
    /**
     * Restore all attributes to their original values
     *
     * @method reset
     * @chainable
     */
    Model.prototype.reset = function () {
        var _this = this;
        underscore_1.default.each(this.originalValues, function (value, key) {
            _this.set(key, value);
        });
        return this;
    };
    //////////////////////////
    // Forms and validation //
    //////////////////////////
    Model.prototype.getValidationRules = function (formKey) {
        if (formKey === void 0) { formKey = 'default'; }
        // Check definition
        var def = this.getDefinition();
        if (def) {
            var rules = def.validationRules[formKey];
            return rules ? rules : null;
        }
        else {
            return null;
        }
    };
    ///////////////////////
    // Dirtying of model //
    ///////////////////////
    /**
     * @method getDirty
     * @return {Object} Key/value hash containing dirty attributes
     */
    Model.prototype.getDirty = function () {
        var _this = this;
        // Get dirty values
        var dirty = {};
        underscore_1.default.each(this.attributes, function (value, key) {
            // Not in original or changed?
            if (_this.isDirty(key)) {
                // Then it's dirty
                dirty[key] = value;
            }
        });
        return dirty;
    };
    /**
     * Determine whether the model, or a specific attribute is dirty
     * (meaning it has been changed since initialization or Api update)
     *
     * @method isDirty
     * @param  {string}  [key]    Optional attribute name
     * @return {Boolean}
     */
    Model.prototype.isDirty = function (key) {
        var _this = this;
        // Specific key?
        if (key) {
            // Get value
            var newValue = this.attributes[key];
            var oldValue = this.originalValues[key];
            // None at all?
            if (newValue === undefined)
                return false;
            // Is the value computed?
            if (newValue instanceof ComputedProperty_1.default)
                return false;
            // Is it new?
            if (newValue !== undefined && oldValue === undefined)
                return true;
            // Cast original value for comparison with new value
            oldValue = this.castValue(key, oldValue);
            // Has it changed
            return !Utils_1.areEqual(oldValue, newValue);
        }
        else {
            // Loop to see if anything is dirty
            for (var key_1 in this.attributes) {
                if (this.isDirty(key_1))
                    return true;
            }
            //check relationships with touchLocalOnUpdate
            var dirtyRelation = underscore_1.default.find(this.related, function (rel, key) {
                if (_this.getRelationship(key) && _this.getRelationship(key).touchLocalOnUpdate) {
                    return rel.isDirty();
                }
                return false;
            });
            return !(!dirtyRelation);
        }
    };
    /**
     * Reset dirtyness of model, for given key of for whole model
     *
     * @method resetDirty
     * @param  {string|array} [keys]  	Optional attribute name(s)
     * @chainable
     */
    Model.prototype.resetDirty = function (keys) {
        var _this = this;
        // Null?
        if (!keys)
            keys = underscore_1.default.keys(this.attributes);
        if (typeof keys === 'string')
            keys = [keys];
        // Specific key?
        underscore_1.default.each(keys, function (key) {
            _this.originalValues[key] = _this.uncastValue(key, _this.attributes[key]);
        });
        return this;
    };
    /**
     * Check the current dirty state of the model and update
     * its status value.
     *
     * @method updateDirty
     * @chainable
     */
    Model.prototype.updateDirty = function () {
        var isDirty = this.isDirty();
        if (isDirty !== this.get('isDirty')) {
            this.state.set('dirty', this.isDirty());
        }
        return this;
    };
    Model.prototype._scheduleUpdateDirty = function () {
        var _this = this;
        // Already going?
        if (this._scheduleUpdateDirtyTimeout)
            return;
        // Wait a bit
        this._scheduleUpdateDirtyTimeout = setTimeout(function () {
            _this.updateDirty();
            _this._scheduleUpdateDirtyTimeout = null;
        }, Model.UpdateDirtyDelay);
    };
    ///////////////////
    // Relationships //
    ///////////////////
    /**
     * Set the given model as the value of a relationship
     *
     * @method setRelatedModel
     * @param {string} relationshipName
     * @param {Data.Model} relatedModel
     * @chainable
     */
    Model.prototype.setRelatedModel = function (relationshipName, relatedModel) {
        // Get the relationship itself
        var relationship = this.getRelationship(relationshipName);
        if (!relationship)
            throw new Error('Error trying to set related model; there is no relationship defined on "' + this.getModelName() + '" by the name "' + relationshipName + '"');
        // Is there a model?
        if (relatedModel) {
            // Check where the key is stored and set it
            if (relationship.isStoredOnLocalModel()) {
                // Get the remote key's value and set it on the local key
                this.set(relationship.localKey, relatedModel.get(relationship.remoteKey));
                // Morph too?
                if (relationship.morphModelKey) {
                    // Add model type
                    this.set(relationship.morphModelKey, relationship.getMorphModelValue(relatedModel));
                }
            }
            else if (relationship.isStoredOnRemoteModel()) {
                // Get the local key's value and set it on the remote key
                relatedModel.set(relationship.remoteKey, this.get(relationship.localKey));
            }
        }
        else if (relatedModel === null) {
            // Unset it
            if (relationship.isStoredOnLocalModel()) {
                // Unset the local key
                this.set(relationship.localKey, null);
            }
        }
        this.related[relationshipName] = relatedModel;
        // Trigger
        this._scheduleAttributeChanged(relationshipName);
        return this;
    };
    /**
     * Add the given model to a relationship collection
     *
     * @method addRelatedModel
     * @param {string} relationshipName
     * @param {Data.Model} relatedModel
     * @param {boolean} fromApi
     * @chainable
     */
    Model.prototype.addRelatedModel = function (relationshipName, relatedModel, fromApi, pivotAttributes) {
        var _this = this;
        if (fromApi === void 0) { fromApi = false; }
        // Check if collection exists
        var relationship = this.getRelationship(relationshipName);
        if (this.related[relationshipName] === undefined) {
            // Make collection
            if (relationship) {
                this.related[relationshipName] = relationship.getInitValue();
            }
            else {
                this.related[relationshipName] = new Collection_1.default(relatedModel.constructor);
            }
        }
        // Is it a valid collection?
        else if (!(this.related[relationshipName] instanceof Collection_1.default)) {
            throw new TypeError('Tried to add a related model to an existing object that is not a Collection');
        }
        // Check relationship
        if (relationship && relationship.isPivot() && relatedModel.isPivot) {
            // Create pivot wrapper
            relatedModel = Pivot_1.createPivotFor(relatedModel, pivotAttributes);
        }
        // Add model
        var coll = this.related[relationshipName];
        if (fromApi) {
            coll.addFromApi(relatedModel);
        }
        else {
            coll.add(relatedModel);
        }
        // Set the inverse?
        if (relationship && relationship.inverseRelationshipName && relatedModel.hasRelationship(relationship.inverseRelationshipName)) {
            // Set it
            relatedModel.withoutNotifications(function () {
                relatedModel.setRelatedModel(relationship.inverseRelationshipName, _this);
            });
        }
        // Trigger
        this._scheduleAttributeChanged(relationshipName);
        return this;
    };
    Model.prototype.deleteRelatedModel = function (relationshipName, model) {
        // Check if collection exists
        var relationship = this.getRelationship(relationshipName);
        if (!(this.related[relationshipName] instanceof Collection_1.default)) {
            throw new TypeError('Tried to delete a related model from a non-existing relationship');
        }
        // Remove it
        this.related[relationshipName].delete(model);
        // Trigger
        this._scheduleAttributeChanged(relationshipName);
        // Set the inverse?
        if (relationship && relationship.inverseRelationshipName && model.hasRelationship(relationship.inverseRelationshipName)) {
            // Set it
            model.withoutNotifications(function () {
                model.setRelatedModel(relationship.inverseRelationshipName, null);
            });
        }
        return this;
    };
    //////////////////////
    // Model definition //
    //////////////////////
    /**
     * Get the model class name for the current instance. When no definition was
     * made for this model, 'DefaultModel' will be returned.
     *
     * @method getModelName
     * @return {string}
     */
    Model.prototype.getModelName = function () {
        var definition = this.getDefinition();
        if (!definition)
            return 'DefaultModel';
        return definition.name;
    };
    /**
     * Get this model's ModelDefinition.
     * Can be undefined for non-defined Models.
     *
     * @method getDefinition
     * @return {Data.ModelDefinition}
     */
    Model.prototype.getDefinition = function () {
        return this.constructor.definition;
    };
    Model.prototype.getPrimaryKey = function () {
        return this.get(this.getDefinition().primaryKey);
    };
    /**
     * Get the definition for given attribute key.
     * Can be undefined for non-defined Models, or if the
     * attribute is not defined in the ModelDefinition.
     *
     * @method getAttributeDefinition
     * @param  {string} key
     * @return {Data.ModelAttribute}
     */
    Model.prototype.getAttributeDefinition = function (key) {
        // Check if the model has a definition at all
        var def = this.getDefinition();
        if (!def)
            return;
        // Get the attribute
        return def.attributes[key];
    };
    Model.prototype.getRelationship = function (key) {
        // Check if the model has a definition at all
        var def = this.getDefinition();
        if (!def)
            return null;
        // Get the relationship
        var relationship = def.relationships[key];
        return relationship;
    };
    Model.prototype.hasRelationship = function (key) {
        return !!this.getRelationship(key);
    };
    Model.prototype.getRelationshipByLocalKey = function (key) {
        // Check if the model has a definition at all
        var def = this.getDefinition();
        if (!def)
            return null;
        // Is it the local key?
        return def.getRelationshipByLocalKey(key);
    };
    Model.prototype.isPivot = function () {
        return false;
    };
    /**
     * Check whether this instance is the same instance as given parameter.
     *
     * @method is
     * @param  {Chicken.Data.Model}  obj
     * @return {Boolean}
     */
    Model.prototype.is = function (obj) {
        return Utils_1.uidFor(this) === Utils_1.uidFor(obj);
    };
    Model.prototype.createCopy = function () {
        var _this = this;
        // Get all attributes
        var attr = {};
        underscore_1.default.each(this.attributes, function (value, key) {
            // Not computed?
            if (value instanceof ComputedProperty_1.default)
                return;
            attr[key] = _this.get(key);
        });
        delete attr.id;
        // Create model
        var constr = this.constructor;
        var copy = new constr(attr);
        return copy;
    };
    /**
     * Create copy of model and its attributes and relations
     *
     * @method clone
     * @param  {cacheMap}  obj
     * @return {Copy}
     */
    Model.prototype.clone = function (cacheMap) {
        var _this = this;
        //create cacheMap?
        if (!cacheMap)
            cacheMap = new Map();
        //known in cache map? return it
        if (cacheMap.has(this))
            return cacheMap.get(this);
        //create copy
        var c = this.constructor;
        var copy = new c();
        //store in cacheMap
        cacheMap.set(this, copy);
        // Get all attributes
        var attr = {};
        underscore_1.default.each(this.attributes, function (value, key) {
            // Not computed?
            if (value instanceof ComputedProperty_1.default)
                return;
            attr[key] = _this.get(key);
            if (attr[key] instanceof Model) {
                attr[key] = attr[key].clone(cacheMap);
            }
            else if (attr[key] instanceof Object && typeof attr[key].clone === 'function') {
                attr[key] = attr[key].clone();
            }
        });
        //store attributes
        copy.attributes = attr;
        //copy relationships
        underscore_1.default.each(this.related, function (value, key) {
            if (value)
                copy.related[key] = value.clone(cacheMap);
        });
        return copy;
    };
    /**
     * Create a shallow clone of the current model, meaning only
     * the attributes will be copied and the relationships will not be cloned,
     * but just linked.
     *
     * @method shallowClone
     * @return {Model}
     */
    Model.prototype.shallowClone = function () {
        var _this = this;
        // Get all attributes
        var attr = {};
        underscore_1.default.each(this.attributes, function (value, key) {
            // Not computed?
            if (value instanceof ComputedProperty_1.default)
                return;
            attr[key] = _this.get(key);
            if (attr[key] instanceof Model) {
                attr[key] = attr[key].shallowClone();
            }
            else if (attr[key] instanceof Object && typeof attr[key].clone === 'function') {
                attr[key] = attr[key].clone();
            }
        });
        //create copy
        var c = this.constructor;
        var copy = new c(attr);
        // Relationships
        copy.related = underscore_1.default.extend({}, this.related);
        return copy;
    };
    /**
     * @static
     * @method getStore
     * @param  {string} modelName
     * @return {Map}
     */
    Model.getStore = function (modelName) {
        if (!Model.stores.has(modelName)) {
            Model.stores.set(modelName, new ModelStore_1.default(modelName));
        }
        return Model.stores.get(modelName);
    };
    ;
    /**
     * @static
     * @method getFromStaore
     * @param  {string} modelName
     * @param  {number} id
     * @return {Data.Model}
     */
    Model.getFromStore = function (modelName, id) {
        // Is there a store?
        if (!Model.stores.has(modelName))
            return undefined;
        var store = Model.getStore(modelName);
        return store.get(id);
    };
    ;
    Model.deleteFromStore = function (modelName, id) {
        //Is there a store
        if (!Model.stores.has(modelName))
            return;
        //throw new Error('Cannot delete `' + modelName + '` with id `' + id + '` from store. The store cannot be found.');
        var store = Model.getStore(modelName);
        store.forget(id);
    };
    ;
    /**
     * Create a new model instance
     *
     * @static
     * @method create
     * @param  {string} modelName
     * @param  {Object} [initValues={}]
     * @return {Data.Model}
     */
    Model.create = function (modelName, initValues) {
        if (initValues === void 0) { initValues = {}; }
        var ModelClass = Model.registry.get(modelName);
        if (!ModelClass)
            return new Model(initValues);
        return new ModelClass(initValues, false);
    };
    ;
    /**
     * A map of registered model classes
     *
     * @static
     * @property registry
     * @type {Map}
     */
    Model.registry = new Map();
    /**
     * A map of Model stores, containing loaded records
     *
     * @static
     * @property stores
     * @type {Map}
     */
    Model.stores = new Map();
    /**
     * The number of milliseconds to delay checking whether the
     * model has dirty attributes, after it an attribute has been changed.
     *
     * @property UpdateDirtyDelay
     * @static
     * @type {Number}
     */
    Model.UpdateDirtyDelay = 100;
    return Model;
}(Observable_1.default));
exports.default = Model;
//# sourceMappingURL=Model.js.map