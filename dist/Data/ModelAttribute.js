"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __importDefault(require("underscore"));
var moment_1 = __importDefault(require("moment"));
var Observable_1 = __importDefault(require("../Core/Observable"));
var ObservableArray_1 = __importDefault(require("../Core/ObservableArray"));
var ModelAttribute = /** @class */ (function () {
    function ModelAttribute(name, type) {
        this.isPrimaryKey = false;
        this.isNullable = false;
        this.isUnique = false;
        this.includeInRequests = true;
        this.name = name;
        this.type = type;
    }
    ModelAttribute.prototype.default = function (value) {
        this.defaultValue = value;
        return this;
    };
    ModelAttribute.prototype.primary = function (isPrimaryKey) {
        if (isPrimaryKey === void 0) { isPrimaryKey = true; }
        this.isPrimaryKey = isPrimaryKey;
        return this;
    };
    ModelAttribute.prototype.unique = function (isUnique) {
        if (isUnique === void 0) { isUnique = true; }
        this.isUnique = isUnique;
        return this;
    };
    ModelAttribute.prototype.nullable = function (isNullable) {
        if (isNullable === void 0) { isNullable = true; }
        this.isNullable = isNullable;
        return this;
    };
    ModelAttribute.prototype.hidden = function (isHiddenFromRequests) {
        if (isHiddenFromRequests === void 0) { isHiddenFromRequests = true; }
        this.includeInRequests = !isHiddenFromRequests;
        return this;
    };
    /**
     * Cast given (database) value for use in the application,
     * according to the type of this attribute
     *
     * @method cast
     * @param  {mixed} value
     * @return {mixed}
     */
    ModelAttribute.prototype.cast = function (value) {
        // Undefined and null will remain so
        if (value === undefined || value === null)
            return value;
        switch (this.type) {
            ////////////////
            // Primitives //
            ////////////////
            // Number
            case ModelAttribute.Number:
                return value instanceof Number ? value : Number.parseFloat(value);
            // Integer
            case ModelAttribute.Integer:
                return Number.isInteger(value) ? value : Number.parseInt(value);
            // String
            case ModelAttribute.String:
                return value instanceof String ? value : '' + value;
            // Array
            case ModelAttribute.Array:
                return typeof value === 'string' ? JSON.parse(value) : value;
            ///////////
            // Dates //
            ///////////
            // Date or date time
            case ModelAttribute.Date:
            case ModelAttribute.DateTime:
                return value && !moment_1.default.isMoment(value) ? moment_1.default(value) : value;
            default:
                return value;
        }
    };
    /**
     * Cast given application value back for use in the database/api.
     *
     * @method uncast
     * @param  {mixed} value
     * @return {mixed}
     */
    ModelAttribute.prototype.uncast = function (value) {
        // Undefined and null will remain so
        if (value === undefined || value === null)
            return value;
        var v;
        switch (this.type) {
            ////////////////
            // Primitives //
            ////////////////
            // Number
            case ModelAttribute.Number:
                return value instanceof Number ? value : Number.parseFloat(value);
            // Integer
            case ModelAttribute.Integer:
                return Number.isInteger(value) ? value : Number.parseInt(value);
            // String
            case ModelAttribute.String:
                return value instanceof String ? value : '' + value;
            //Array
            case ModelAttribute.Array:
                if (value instanceof ObservableArray_1.default)
                    value = value.toArray();
                return value;
            ///////////
            // Dates //
            ///////////
            // Date or date time
            case ModelAttribute.Date:
                return moment_1.default.isMoment(value) ? value.format('YYYY-MM-DD') : value;
            case ModelAttribute.DateTime:
                return moment_1.default.isMoment(value) ? value.format('YYYY-MM-DD HH:mm:ss') : value;
            /////////////
            // Objects //
            /////////////
            case ModelAttribute.Object:
                v = underscore_1.default.omit(value instanceof Observable_1.default ? value.attributes : value, function (foo, key) {
                    return /^__/.test(key);
                });
                return v;
            default:
                return value;
        }
    };
    ModelAttribute.prototype.getDefaultValue = function () {
        // Is there a value?
        if (this.defaultValue)
            return this.defaultValue;
        // Nullable?
        if (this.isNullable)
            return null;
        // Default for type
        switch (this.type) {
            ////////////////
            // Primitives //
            ////////////////
            // Number
            case ModelAttribute.Number:
            case ModelAttribute.Integer:
                return 0;
            // String
            case ModelAttribute.String:
                return '';
            // Boolean
            case ModelAttribute.Boolean:
                return false;
            ///////////
            // Dates //
            ///////////
            // Date or date time
            case ModelAttribute.DateTime:
            case ModelAttribute.Time:
            case ModelAttribute.Date:
                return moment_1.default();
            ///////////
            // Model //
            ///////////
            case ModelAttribute.Model:
            case ModelAttribute.Translations:
                return {};
            default:
                return null;
        }
    };
    ModelAttribute.Number = 'Number';
    ModelAttribute.Boolean = 'Boolean';
    ModelAttribute.Integer = 'Integer';
    ModelAttribute.String = 'String';
    ModelAttribute.Text = 'Text';
    ModelAttribute.Enum = 'Enum';
    ModelAttribute.Date = 'Date';
    ModelAttribute.DateTime = 'DateTime';
    ModelAttribute.Time = 'Time';
    ModelAttribute.Array = 'Array';
    ModelAttribute.Object = 'Object';
    ModelAttribute.Translations = 'Translations';
    ModelAttribute.Model = 'Model';
    return ModelAttribute;
}());
exports.default = ModelAttribute;
//# sourceMappingURL=ModelAttribute.js.map