"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var inflection_1 = __importDefault(require("inflection"));
var Model_1 = __importDefault(require("./Model"));
var Collection_1 = __importDefault(require("./Collection"));
var PivotCollection_1 = __importDefault(require("./PivotCollection"));
var Relationship = /** @class */ (function () {
    function Relationship(name, localModel) {
        this.pivotAttributes = [];
        this.touchLocalOnUpdate = false;
        this.name = name;
        this.localModel = localModel;
    }
    ////////////////////////
    // Relationship types //
    ////////////////////////
    Relationship.prototype.hasMany = function (remoteModel, localKey, remoteKey) {
        if (localKey === void 0) { localKey = 'id'; }
        // Basics
        this.type = Relationship.HasMany;
        this.remoteModel = remoteModel;
        var cleanModel = underscore_1.default.last(this.localModel.split('.'));
        // Guess/store the keys
        if (!this.localKey)
            this.localKey = localKey;
        if (remoteKey || !this.remoteKey) {
            this.remoteKey = remoteKey || inflection_1.default.camelize(inflection_1.default.singularize(cleanModel), true) + 'Id';
        }
        // Guess the inverse relationship name
        this.inverseRelationshipName = inflection_1.default.camelize(inflection_1.default.singularize(cleanModel), true);
        return this;
    };
    Relationship.prototype.belongsTo = function (remoteModel, localKey, remoteKey) {
        if (remoteKey === void 0) { remoteKey = 'id'; }
        // Basics
        this.type = Relationship.BelongsTo;
        this.remoteModel = remoteModel;
        // Guess/store the keys
        if (localKey || !this.localKey) {
            this.localKey = localKey || inflection_1.default.camelize(inflection_1.default.singularize(this.name), true) + 'Id';
        }
        if (!this.remoteKey)
            this.remoteKey = remoteKey;
        return this;
    };
    Relationship.prototype.hasOne = function (remoteModel, localKey, remoteKey) {
        if (localKey === void 0) { localKey = 'id'; }
        // Basics
        this.type = Relationship.HasOne;
        this.remoteModel = remoteModel;
        // Guess/store the keys
        if (!this.localKey)
            this.localKey = localKey;
        if (remoteKey || !this.remoteKey) {
            this.remoteKey = remoteKey || inflection_1.default.camelize(inflection_1.default.singularize(this.localModel), true) + 'Id';
        }
        return this;
    };
    ///////////
    // Pivot //
    ///////////
    Relationship.prototype.belongsToMany = function (remoteModel, localKey, remoteKey, pivotModel) {
        if (localKey === void 0) { localKey = 'id'; }
        if (remoteKey === void 0) { remoteKey = 'id'; }
        // Basics 
        this.type = Relationship.BelongsToMany;
        this.remoteModel = remoteModel;
        this.localKey = localKey;
        this.remoteKey = remoteKey;
        // Pivot model given?
        if (!pivotModel) {
            var models = [this.localModel, this.remoteModel];
            models.sort();
            pivotModel = models.join('');
        }
        this.pivotModel = pivotModel;
        return this;
    };
    /////////////////////////
    // Morph relationships //
    /////////////////////////
    Relationship.prototype.belongsToMorph = function (morphModelKey, localKey, remoteKey, morphModelValuePrefix) {
        if (remoteKey === void 0) { remoteKey = 'id'; }
        if (morphModelValuePrefix === void 0) { morphModelValuePrefix = 'App\\'; }
        // Basics
        this.type = Relationship.BelongsToMorph;
        this.remoteModel = undefined;
        // Guess/store the keys
        this.localKey = localKey;
        this.remoteKey = remoteKey;
        this.morphModelKey = morphModelKey;
        this.morphModelValuePrefix = morphModelValuePrefix;
        return this;
    };
    Relationship.prototype.hasManyMorph = function (remoteModel, morphModelKey, localKey, remoteKey, morphModelValuePrefix) {
        if (remoteKey === void 0) { remoteKey = 'id'; }
        if (morphModelValuePrefix === void 0) { morphModelValuePrefix = 'App\\'; }
        // Basics
        this.type = Relationship.HasManyMorph;
        this.remoteModel = remoteModel;
        // Guest/store the keys
        this.morphModelKey = morphModelKey;
        if (localKey || !this.localKey) {
            this.localKey = localKey || this.morphModelKey.replace(/Type$/, 'Id');
        }
        if (!this.remoteKey)
            this.remoteKey = remoteKey;
        this.morphModelValuePrefix = morphModelValuePrefix;
        return this;
    };
    Relationship.prototype.getMorphModelValue = function (remoteModel) {
        // Check prefix
        var name = remoteModel.getModelName();
        if (this.morphModelValuePrefix) {
            name = "" + this.morphModelValuePrefix + name;
        }
        return name;
    };
    Relationship.prototype.usesCollection = function () {
        return (this.type == Relationship.BelongsToMany || this.type == Relationship.HasMany || this.type == Relationship.HasManyThrough || this.type == Relationship.HasManyMorph);
    };
    /////////////
    // Setters //
    /////////////
    Relationship.prototype.setLocalKey = function (value) {
        this.localKey = value;
        return this;
    };
    Relationship.prototype.setRemoteKey = function (value) {
        this.remoteKey = value;
        return this;
    };
    /////////////
    // Methods //
    /////////////
    /**
     * set a flag to update the dirty attribute of local model
     * @return {Relationship} Chainable
     */
    Relationship.prototype.touchLocal = function (value) {
        if (value === void 0) { value = true; }
        this.touchLocalOnUpdate = value;
        return this;
    };
    /**
     * Add local key as attribute to the modelDefinition to ensure
     * that it is being serialized in the apiCall.
     * Attributes with `Id` will be cast as an integer,
     * Attributes with 'Key' will be cast as a string.
     * For other keys manually define them in the model.
     *
     * @param {ModelDefinition} modelDefinition the definition to at the attribute to
     * @return {Relationship} chainable
     */
    Relationship.prototype.addLocalKeyToModelDefinitionAttributes = function (modelDefinition) {
        // Add morph type
        if (this.morphModelKey) {
            modelDefinition.string(this.morphModelKey);
        }
        // Skip if `id` or already exists
        if (this.localKey == 'id' || modelDefinition.hasAttribute(this.localKey))
            return this;
        // Add key as string
        if (/Key$/.test(this.localKey)) {
            modelDefinition.string(this.localKey);
        }
        else {
            modelDefinition.integer(this.localKey);
        }
        return this;
    };
    /**
     * Add sorting method to the relationship. The given callback will be
     * called when the relationship Collection is instantiated from the API.
     *
     * @param  {Function} callback
     * @chainable
     */
    Relationship.prototype.sorted = function (callback) {
        this.sortCallback = callback;
        return this;
    };
    Relationship.prototype.inverse = function (relationshipName) {
        this.inverseRelationshipName = relationshipName;
        return this;
    };
    Relationship.prototype.isStoredOnLocalModel = function () {
        return this.type === Relationship.BelongsTo || this.type == Relationship.BelongsToMorph;
    };
    Relationship.prototype.isStoredOnRemoteModel = function () {
        return this.type === Relationship.HasOne || this.type === Relationship.HasMany || this.type == Relationship.HasManyMorph;
    };
    Relationship.prototype.getInitValue = function () {
        // Depends on the type
        switch (this.type) {
            case Relationship.HasMany:
            case Relationship.HasManyThrough:
            case Relationship.HasManyMorph:
                return new Collection_1.default(Model_1.default.registry.get(this.remoteModel));
            case Relationship.BelongsToMany:
                return new PivotCollection_1.default(Model_1.default.registry.get(this.remoteModel), this);
            default:
                return null;
        }
    };
    /**
     * Add one or more attributes as pivot attributes
     *
     * @method withPivot
     * @param  {...string} attributes  One or more attribute names
     * @chainable
     */
    Relationship.prototype.withPivot = function () {
        var attributes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attributes[_i] = arguments[_i];
        }
        this.pivotAttributes = underscore_1.default.union(this.pivotAttributes, attributes);
        return this;
    };
    Relationship.prototype.isPivot = function () {
        return this.type === Relationship.BelongsToMany;
    };
    Relationship.HasMany = 'HasMany';
    Relationship.HasOne = 'HasOne';
    Relationship.BelongsTo = 'BelongsTo';
    Relationship.HasManyThrough = 'HasManyThrough';
    Relationship.BelongsToMany = 'BelongsToMany';
    Relationship.BelongsToMorph = 'BelongsToMorph';
    Relationship.HasManyMorph = 'HasManyMorph';
    return Relationship;
}());
exports.default = Relationship;
//# sourceMappingURL=Relationship.js.map