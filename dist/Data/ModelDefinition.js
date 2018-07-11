"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inflection_1 = __importDefault(require("inflection"));
var underscore_1 = __importDefault(require("underscore"));
var underscore_string_1 = require("underscore.string");
var ModelAttribute_1 = __importDefault(require("./ModelAttribute"));
var Relationship_1 = __importDefault(require("./Relationship"));
var ComputedProperty_1 = __importDefault(require("../Core/ComputedProperty"));
/**
 * @module Data
 */
var ModelDefinition = /** @class */ (function () {
    function ModelDefinition(name, callback) {
        var _this = this;
        this.api = 'default';
        this.attributes = {};
        this.attributeNames = [];
        this.relationships = {};
        this.computedAttributes = {};
        this.validationRules = {};
        this.isDynamic = false;
        this.primaryKey = 'id';
        this.name = name;
        // Guess api uri from model name
        var parts = name.split('.');
        this.apiUri = '/' + underscore_1.default.map(parts, function (part, index) {
            return inflection_1.default.underscore(index === parts.length - 1 ? inflection_1.default.pluralize(part) : part);
        }).join('/');
        callback.apply(this, [this]);
        underscore_1.default.each(this.relationships, function (rel) {
            rel.addLocalKeyToModelDefinitionAttributes(_this);
        });
        // Guess the default table name
        this.tableName = inflection_1.default.pluralize(underscore_string_1.underscored(this.name));
    }
    /**
     * Making a model dynamic means that not all attributes are defined,
     * and when submitting the model to an API, all set attributes will
     * be sent.
     *
     * @method dynamic
     * @param  {Boolean} [isDynamic=true]
     * @chainable
     */
    ModelDefinition.prototype.dynamic = function (isDynamic) {
        if (isDynamic === void 0) { isDynamic = true; }
        this.isDynamic = isDynamic;
        return this;
    };
    ModelDefinition.prototype.setPrimaryKey = function (key) {
        if (key === void 0) { key = 'id'; }
        this.primaryKey = key;
        return this;
    };
    ModelDefinition.prototype.getRelationshipsByLocalKey = function () {
        var _this = this;
        // Initialized?
        if (!this.relationshipsByLocalKey) {
            // Loop through relationships
            this.relationshipsByLocalKey = {};
            underscore_1.default.each(this.relationships, function (relationship) {
                // Stored on local model?
                if (relationship.isStoredOnLocalModel()) {
                    _this.relationshipsByLocalKey[relationship.localKey] = relationship;
                }
            });
        }
        return this.relationshipsByLocalKey;
    };
    ModelDefinition.prototype.getRelationshipByLocalKey = function (localKey) {
        return this.getRelationshipsByLocalKey()[localKey];
    };
    ModelDefinition.prototype.getApiAttributeNames = function () {
        var _this = this;
        // Initialized?
        if (!this.apiAttributeNames) {
            this.apiAttributeNames = underscore_1.default.filter(this.attributeNames, function (name) {
                return _this.attributes[name].includeInRequests;
            });
        }
        return this.apiAttributeNames;
    };
    ModelDefinition.prototype.getHiddenAttributeNames = function () {
        var _this = this;
        // Initialized?
        if (!this.hiddenAttributeNames) {
            this.hiddenAttributeNames = underscore_1.default.filter(this.attributeNames, function (name) {
                return !_this.attributes[name].includeInRequests;
            });
        }
        return this.hiddenAttributeNames;
    };
    ModelDefinition.prototype.hasAttribute = function (key) {
        return this.attributes[key] !== undefined;
    };
    ModelDefinition.prototype.initializeModel = function (model) {
        var _this = this;
        // Don't notify
        model.withoutNotifications(function () {
            // Default values
            underscore_1.default.each(_this.attributes, function (attr) {
                if (attr.defaultValue && model.attributes[attr.name] === undefined) {
                    model.set(attr.name, attr.defaultValue);
                }
            });
            // Add computed
            underscore_1.default.each(_this.computedAttributes, function (attr, key) {
                model.set(key, new ComputedProperty_1.default(attr.dependencies, attr.callback));
            });
        });
        return model;
    };
    ModelDefinition.prototype.attribute = function (name, type) {
        var attr = new ModelAttribute_1.default(name, type);
        this.attributeNames.push(name);
        this.attributes[name] = attr;
        return attr;
    };
    ModelDefinition.prototype.computed = function (name, dependencies, callback) {
        this.computedAttributes[name] = {
            dependencies: dependencies,
            callback: callback
        };
        return true;
    };
    //////////////////////
    // Column defitions //
    //////////////////////
    ModelDefinition.prototype.integer = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Integer);
        return attr;
    };
    ModelDefinition.prototype.number = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Number);
        return attr;
    };
    ModelDefinition.prototype.string = function (name, size) {
        if (size === void 0) { size = 1024; }
        var attr = this.attribute(name, ModelAttribute_1.default.String);
        attr.size = size;
        return attr;
    };
    ModelDefinition.prototype.date = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Date);
        return attr;
    };
    ModelDefinition.prototype.dateTime = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.DateTime);
        return attr;
    };
    ModelDefinition.prototype.time = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Time);
        return attr;
    };
    ModelDefinition.prototype.text = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Text);
        return attr;
    };
    ModelDefinition.prototype.boolean = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Boolean);
        return attr;
    };
    ModelDefinition.prototype.enum = function (name, options) {
        var attr = this.attribute(name, ModelAttribute_1.default.Enum);
        attr.enumOptions = options;
        return attr;
    };
    ///////////
    // Model //
    ///////////
    ModelDefinition.prototype.model = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Model);
        return attr;
    };
    //////////
    // JSON //
    //////////
    ModelDefinition.prototype.array = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Array);
        return attr;
    };
    ModelDefinition.prototype.object = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Object);
        return attr;
    };
    ModelDefinition.prototype.translations = function (name) {
        var attr = this.attribute(name, ModelAttribute_1.default.Object);
        return attr;
    };
    //////////////////////
    // Column shortcuts //
    //////////////////////
    ModelDefinition.prototype.timestamps = function () {
        this.dateTime('createdAt').hidden();
        this.dateTime('updatedAt').hidden();
        return this;
    };
    ///////////////////
    // Relationships //
    ///////////////////
    ModelDefinition.prototype.relationship = function (name) {
        var rel = new Relationship_1.default(name, this.name);
        this.relationships[name] = rel;
        return rel;
    };
    /////////////////////
    // Form validation //
    /////////////////////
    ModelDefinition.prototype.validation = function (rules, formKey) {
        if (formKey === void 0) { formKey = 'default'; }
        this.validationRules[formKey] = rules;
        return this;
    };
    ///////////////
    // Searching //
    ///////////////
    ModelDefinition.prototype.searchable = function () {
        var fields = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fields[_i] = arguments[_i];
        }
        // Stroe
        this.searchFields = fields;
        return this;
    };
    ModelDefinition.prototype.getSearchFields = function () {
        return this.searchFields;
    };
    /////////
    // Api //
    /////////
    ModelDefinition.prototype.getApiUri = function (id) {
        var uri = this.apiUri;
        if (id)
            uri += '/' + id;
        return uri;
    };
    return ModelDefinition;
}());
exports.default = ModelDefinition;
//# sourceMappingURL=ModelDefinition.js.map