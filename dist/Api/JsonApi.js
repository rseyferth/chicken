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
var Api_1 = __importDefault(require("./Api"));
var JsonApiCall_1 = __importDefault(require("./JsonApiCall"));
var Model_1 = __importDefault(require("../Data/Model"));
var Collection_1 = __importDefault(require("../Data/Collection"));
var Utils_1 = require("../Helpers/Utils");
/**
 * @module Api
 */
var JsonApi = /** @class */ (function (_super) {
    __extends(JsonApi, _super);
    function JsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonApi.prototype.call = function (method, uri, data, ajaxOptions) {
        // Create api call
        return new JsonApiCall_1.default(this, method, uri, data, ajaxOptions);
    };
    JsonApi.prototype.saveModel = function (model, options) {
        // Make settings
        var settings = jquery_1.default.extend({
            includeRelated: true,
            includeRelatedData: false // False, true, or array of relationship names
        }, options);
        if (!settings.uri)
            settings.uri = model.getApiUri();
        // Make the data
        var data = {
            data: this.serialize(model, settings.includeRelated, settings.includeRelatedData)
        };
        // Check method
        var method = model.isNew() ? 'post' : 'patch';
        // Do the call
        var cache = [];
        var apiCall = this.call(method, settings.uri, JSON.stringify(data, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        }), settings.ajax);
        cache = undefined; // Enable garbage collection
        // Return it
        return apiCall;
    };
    JsonApi.prototype.deleteModel = function (model, options) {
        // Make settings
        var settings = jquery_1.default.extend({}, options);
        if (!settings.uri)
            settings.uri = model.getApiUri();
        // Make the data
        var data = {
            data: this.serialize(model)
        };
        // Do the call
        var cache = [];
        var apiCall = this.call('delete', settings.uri, JSON.stringify(data, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        }), settings.ajax);
        cache = undefined; // Enable garbage collection
        // Return it
        return apiCall;
    };
    JsonApi.prototype.serialize = function (model, includeRelated, includeRelatedData, includedModelGuids) {
        var _this = this;
        if (includeRelated === void 0) { includeRelated = true; }
        if (includeRelatedData === void 0) { includeRelatedData = false; }
        if (includedModelGuids === void 0) { includedModelGuids = []; }
        // Check related data
        if (typeof includeRelatedData === 'string')
            includeRelatedData = [includeRelatedData];
        // Basics: type and id
        var data = {
            type: inflection_1.default.pluralize(inflection_1.default.underscore(model.getDefinition().name))
        };
        var id = model.get('id');
        if (id)
            data.id = id;
        // Add pivot data?		
        if (model.isPivot()) {
            // Get attributes (non-dirty as well.)
            var pivotAttributes = model.getPivot().getAttributesForApi(false);
            if (underscore_1.default.size(pivotAttributes) > 0) {
                // Convert for API
                var meta_1 = {};
                underscore_1.default.each(pivotAttributes, function (value, key) {
                    meta_1[inflection_1.default.underscore(key)] = value;
                });
                // Set as meta data
                data.meta = meta_1;
            }
        }
        // Was this model already added before? Then we skip attributes and relationships
        if (!underscore_1.default.contains(includedModelGuids, Utils_1.uidFor(model))) {
            // Attributes?
            var attr = model.getAttributesForApi(!model.isNew());
            if (underscore_1.default.size(attr) > 0) {
                data.attributes = {};
                underscore_1.default.each(attr, function (value, key) {
                    data.attributes[inflection_1.default.underscore(key)] = value;
                });
            }
            // Add model guid now, if it hasn't been added before
            includedModelGuids.push(Utils_1.uidFor(model));
            // @TODO Check wheter the reverse of a relationship was already included
            // e.g. In case of author > books > author, the last 'author' should be skipped, even
            // when the 'book' model has it defined.
            // Include related?
            if (includeRelated) {
                // Loop through relationships
                var relationships_1 = {};
                underscore_1.default.each(model.related, function (relatedData, key) {
                    // Is it a collection?
                    if (relatedData instanceof Collection_1.default) {
                        // Is dirty? or had dirty children
                        if (relatedData.isDirty() || relatedData.hasDirtyChildren()) {
                            // Add them all
                            relationships_1[key] = { data: underscore_1.default.map(relatedData.items, function (item) {
                                    // Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
                                    if (includeRelatedData === false || !underscore_1.default.contains(includeRelatedData, key)) {
                                        includedModelGuids.push(Utils_1.uidFor(item));
                                    }
                                    // Add that model, but only add relationships when this model has not been added to the resource before, to prevent nesting recursive loop
                                    return _this.serialize(item, true, includeRelatedData, includedModelGuids);
                                }) };
                        }
                    }
                    else if (relatedData instanceof Model_1.default) {
                        // Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
                        if (includeRelatedData === false || underscore_1.default.indexOf(includeRelatedData, key) === -1) {
                            includedModelGuids.push(Utils_1.uidFor(relatedData));
                        }
                        // Is it dirty?
                        if (relatedData.isDirty()) {
                            // We always add the related model data
                            relationships_1[key] = { data: _this.serialize(relatedData, true, includeRelatedData, includedModelGuids) };
                        }
                    }
                    else if (relatedData) {
                        // What is this
                        throw new TypeError('Unrecognized data found in model\'s relationship ' + key);
                    }
                });
                if (underscore_1.default.size(relationships_1) > 0) {
                    data.relationships = relationships_1;
                }
            }
        }
        return data;
    };
    JsonApi.prototype.deserialize = function (result, apiCall) {
        var _this = this;
        // Call given?
        if (!apiCall) {
            apiCall = new JsonApiCall_1.default(this, 'get', '/foo/bar');
        }
        // Check included data
        if (result.included) {
            // Loop and store them in the model stores
            underscore_1.default.each(result.included, function (recordData) {
                _this.deserializeModel(recordData, apiCall, false);
            });
            underscore_1.default.each(result.included, function (recordData) {
                _this._deserializeRelationships(recordData, apiCall);
            });
        }
        // Is the result an object or an array
        var data = result.data;
        if (data === undefined || data === null)
            throw new Error('No data received from Api');
        if (data instanceof Array) {
            return this.deserializeCollection(data, apiCall, result.meta);
        }
        else if (data instanceof Object) {
            return this.deserializeModel(data, apiCall);
        }
        // Don't know...
        throw new TypeError('Unrecognized data received from Api');
    };
    JsonApi.prototype.deserializeModel = function (data, apiCall, deserializeRelationships) {
        var _this = this;
        if (deserializeRelationships === void 0) { deserializeRelationships = true; }
        // Look for the type of model
        var resourceType = data.type;
        var modelClass = Model_1.default;
        if (!resourceType) {
            throw new TypeError('Api result did not specity the record type');
        }
        var modelName = this._getModelName(resourceType);
        if (Model_1.default.registry.has(modelName)) {
            modelClass = Model_1.default.registry.get(modelName);
        }
        // Collect attributes
        var attributes = {};
        underscore_1.default.each(data.attributes, function (value, key) {
            attributes[inflection_1.default.camelize(key, true)] = value;
        });
        // Check if the model is already in the store
        var model = apiCall.getResponseModel(modelName, data.id);
        if (!model) {
            // Create a new model.
            attributes.id = /^\d+$/.test(data.id) ? parseInt(data.id) : data.id;
            model = new modelClass(attributes);
            apiCall.storeResponseModel(model);
        }
        else {
            // Set the attributes (not overwriting dirty ones)
            model.setAttributesFromApi(attributes);
        }
        // Meta?
        if (data.meta) {
            var metaAttributes_1 = {};
            underscore_1.default.each(data.meta, function (value, key) {
                metaAttributes_1[inflection_1.default.camelize(key, true)] = value;
            });
            model.setMetaAttributes(metaAttributes_1);
        }
        // Also deserialize relationships?
        if (deserializeRelationships) {
            model.withoutNotifications(function () {
                _this._deserializeRelationships(data, apiCall, model);
            });
        }
        return model;
    };
    JsonApi.prototype.deserializeCollection = function (data, apiCall, meta) {
        var _this = this;
        // Make a collection
        var collection = new Collection_1.default(apiCall.modelClass);
        // Add records
        underscore_1.default.each(data, function (recordData) {
            collection.addFromApi(_this.deserializeModel(recordData, apiCall));
        });
        // Store meta data
        if (meta) {
            // Store it
            collection.setMetaData(meta);
            // Check pagination
            if (meta.pagination) {
                collection.setPageInfo(meta.pagination.current_page, meta.pagination.total_pages, meta.pagination.per_page, meta.pagination.total);
            }
        }
        return collection;
    };
    JsonApi.prototype._deserializeRelationships = function (data, apiCall, model) {
        var _this = this;
        // Model given?
        if (model === undefined) {
            // Look it up in the store			
            model = apiCall.getResponseModel(this._getModelName(data.type), data.id);
            // Not known?
            if (!model)
                throw new Error('Could not deserialize relationships for unknown model: ' + this._getModelName(data.type) + ' with id ' + data.id);
        }
        // Check relationships records.
        if (data.relationships) {
            underscore_1.default.each(data.relationships, function (rel, relationshipName) {
                // Is there data?
                if (rel.data) {
                    // Camelize
                    var modelRelName_1 = inflection_1.default.camelize(relationshipName, true);
                    // Is it one record?
                    if (rel.data instanceof Array) {
                        // Find relationship
                        var relationship_1 = model.getRelationship(modelRelName_1);
                        // Loop and add
                        underscore_1.default.each(rel.data, function (relData) {
                            // Get the model
                            var relatedModel = _this._getRelatedModel(relData, apiCall);
                            if (relatedModel) {
                                // Pivot data defined?
                                var pivotAttributes_1 = {};
                                if (relData.meta && relationship_1.isPivot() && relationship_1.pivotModel) {
                                    // Collect pivot attributes
                                    underscore_1.default.each(relData.meta, function (value, key) {
                                        pivotAttributes_1[inflection_1.default.camelize(key, true)] = value;
                                    });
                                }
                                // Add to collection
                                model.addRelatedModel(modelRelName_1, relatedModel, true, pivotAttributes_1);
                            }
                        });
                        // Is the relationship sorted?						
                        if (relationship_1 && relationship_1.sortCallback && model.related[modelRelName_1]) {
                            // Apply sorting
                            model.related[modelRelName_1].sortBy(relationship_1.sortCallback);
                        }
                    }
                    else if (rel.data instanceof Object) {
                        // Get the one
                        var relatedModel = _this._getRelatedModel(rel.data, apiCall);
                        if (relatedModel) {
                            // Set it
                            model.setRelatedModel(modelRelName_1, relatedModel);
                        }
                    }
                    else {
                        throw new TypeError('Unrecognized relationship data received from Api');
                    }
                }
            });
        }
        // Trigger the event
        model.trigger('deserialized', [this]);
    };
    JsonApi.prototype._getRelatedModel = function (relationshipData, apiCall) {
        // Check data integrity
        var relType = relationshipData.type;
        var relId = relationshipData.id;
        if (!relType)
            throw new TypeError('Api result did not specify the relationship type');
        if (!relId)
            throw new TypeError('Api result did not specify the relationship record id');
        // Find model in store
        relType = this._getModelName(relType);
        var relModel = apiCall.getResponseModel(relType, relId);
        return relModel;
    };
    JsonApi.prototype._getModelName = function (resourceType) {
        // directions.locations => Directions.Location
        // times => Time
        var parts = resourceType.split('.');
        var modelType = underscore_1.default.map(parts, function (part, index) {
            part = inflection_1.default.camelize(part);
            return index === parts.length - 1 ? inflection_1.default.singularize(part) : part;
        }).join('.');
        return modelType;
    };
    return JsonApi;
}(Api_1.default));
exports.default = JsonApi;
//# sourceMappingURL=JsonApi.js.map