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
var Model_1 = __importDefault(require("./Model"));
var ObservableArray_1 = __importDefault(require("../Core/ObservableArray"));
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection(modelClass) {
        var _this = _super.call(this) || this;
        _this.itemsById = {};
        _this.originalIds = [];
        _this.meta = {};
        _this.page = {};
        _this.modelClass = modelClass;
        return _this;
    }
    Collection.prototype.knows = function (idOrModel) {
        var id = idOrModel instanceof Model_1.default ? idOrModel.get('id') : idOrModel;
        return this.itemsById[id] !== undefined;
    };
    Collection.prototype.setMetaData = function (data) {
        this.meta = underscore_1.default.extend(this.meta, data);
        return this;
    };
    Collection.prototype.setPageInfo = function (currentPage, pageCount, recordsPerPage, totalRecordCount) {
        // Basics
        this.page = {
            currentPage: currentPage,
            pageCount: pageCount,
            size: recordsPerPage,
            recordCount: totalRecordCount
        };
        // Calculate current
        if (recordsPerPage) {
            this.page.from = (currentPage - 1) * recordsPerPage + 1;
            this.page.through = Math.min(totalRecordCount, currentPage * recordsPerPage);
        }
    };
    Collection.prototype.get = function (key) {
        // Page info?
        if (this.page && /^page\.(currentPage|pageCount|size|recordCount|through)$/.test(key)) {
            var _a = key.split(/\./), k = _a[1];
            return this.page[k];
        }
        // Basics
        return _super.prototype.get.call(this, key);
    };
    Collection.prototype.addFromApi = function (item) {
        // Add it
        this.add(item);
        // Store id as original id
        var id = item.get('id');
        if (id && !underscore_1.default.contains(this.originalIds, id)) {
            this.originalIds.push(id);
        }
        return this;
    };
    Collection.prototype._add = function (value) {
        // Not already in there?
        var modelId = value.get('id');
        if (!modelId || !this.itemsById[modelId]) {
            // Store it and add it
            this.items.push(value);
            if (modelId) {
                this.itemsById[modelId] = value;
            }
        }
        return this;
    };
    Collection.prototype._delete = function (value) {
        // Is value an id?
        if (typeof value === 'number' || typeof value === 'string') {
            value = this.itemsById[value];
            if (!value)
                return this;
        }
        // Is value a model?
        if (!(value instanceof Model_1.default)) {
            throw new TypeError('You cannot delete non-Model values to a Collection');
        }
        // Basics
        _super.prototype._delete.call(this, value);
        // And from keyed array
        delete this.itemsById[value.get('id')];
        return this;
    };
    Collection.prototype.empty = function () {
        // Do the basics
        _super.prototype.empty.call(this);
        // Clear ids
        this.itemsById = {};
        return this;
    };
    Collection.prototype.isDirty = function () {
        // Compare item id's
        var currentIds = underscore_1.default.map(this.items, function (item) {
            return item.get('id');
        });
        var newIds = underscore_1.default.difference(currentIds, this.originalIds);
        var removedIds = underscore_1.default.difference(this.originalIds, currentIds);
        // Are any of the id's different?
        return newIds.length > 0 || removedIds.length > 0;
    };
    Collection.prototype.hasDirtyChildren = function () {
        //check children for dirty
        var dirtyChildren = underscore_1.default.filter(this.items, function (item) {
            return item.isDirty();
        });
        return dirtyChildren.length > 0;
    };
    /**
     * Create copy of collection and its items
     *
     * @method clone
     * @return {Collection}
     */
    Collection.prototype.clone = function (cacheMap) {
        //create cacheMap?
        if (!cacheMap)
            cacheMap = new Map();
        //known in cache map? return it
        if (cacheMap.has(this))
            return this;
        //create copy
        var c = this.constructor;
        var copy = new c(this.modelClass);
        //store in cacheMap1
        cacheMap.set(this, copy);
        //copy items
        underscore_1.default.each(this.items, function (item) {
            copy.items.push(item.clone(cacheMap));
        });
        return copy;
    };
    Collection.prototype.search = function (query, limit, fields) {
        // No models in me?
        if (this.items.length === 0)
            return new Collection(this.modelClass);
        // No fields defined?
        if (!fields) {
            // Try to get fields from definition
            var def = this.modelClass.definition;
            if (def) {
                // Get fields
                fields = def.getSearchFields();
            }
            // Still no field?
            if (!fields) {
                // Use all but id
                fields = underscore_1.default.without(underscore_1.default.keys(underscore_1.default.first(this.items).attributes), 'id');
            }
        }
        // Get words
        var words = query.split(/\s+/);
        var result = [];
        underscore_1.default.each(this.items, function (model) {
            // How many words are matched by the fields
            var wordsMatched = 0;
            var entireMatch = false;
            underscore_1.default.each(words, function (word) {
                // Not empty?
                if (!word)
                    return;
                // Loop through fields
                underscore_1.default.each(fields, function (field) {
                    // Entire match?
                    var value = model.get(field);
                    if (value && value === word) {
                        entireMatch = true;
                        wordsMatched++;
                    }
                    else {
                        // Check if it contains me
                        value = ('' + value).toLowerCase();
                        var w = word.toLowerCase();
                        var index = value.indexOf(w);
                        if (index > -1)
                            wordsMatched++;
                    }
                });
            });
            // Match?
            if (wordsMatched > 0) {
                result.push({
                    wordsMatched: wordsMatched,
                    entireMatch: entireMatch,
                    model: model
                });
            }
        });
        // Now sort it
        result.sort(function (a, b) {
            // Entire match same?
            if (a.entireMatch !== b.entireMatch) {
                // Entire match is better.
                return a.entireMatch ? -1 : 1;
            }
            // # words matched
            if (a.wordsMatched === b.wordsMatched)
                return 0;
            return a.wordsMatched > b.wordsMatched ? -1 : 1;
        });
        // Check limit
        limit = limit ? Math.min(result.length, limit) : result.length;
        // Make collection
        var collectionResult = new Collection(this.modelClass);
        for (var q = 0; q < limit; q++) {
            collectionResult.items.push(result[q].model);
        }
        return collectionResult;
    };
    Collection.prototype.filter = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Do the basics
        var items = _super.prototype.filter.apply(this, args);
        // Did we receive an ObservableArray?
        if (items instanceof ObservableArray_1.default) {
            // Make collection
            var collectionResult = new Collection(this.modelClass);
            collectionResult.items = items.items;
            return collectionResult;
        }
        else {
            // Return items as they are
            return items;
        }
    };
    Collection.prototype.saveAll = function (saveOptions, breakOnError, saveOnlyDirtyModels) {
        var _this = this;
        if (breakOnError === void 0) { breakOnError = true; }
        if (saveOnlyDirtyModels === void 0) { saveOnlyDirtyModels = true; }
        // Create promise
        return new Promise(function (resolve, reject) {
            // Prepare queue
            var queue = underscore_1.default.filter(_this.items, function (item) {
                return saveOnlyDirtyModels ? item.isDirty() : true;
            });
            // Next
            var saveNext = function () {
                // Queue empty?
                if (queue.length === 0) {
                    resolve();
                    return;
                }
                // Save next
                var model = queue.shift();
                model.save(saveOptions).then(function () {
                    saveNext();
                }, function (error) {
                    // Break?
                    if (breakOnError) {
                        reject(error);
                    }
                    else {
                        saveNext();
                    }
                });
            };
            // GO!
            saveNext();
        });
    };
    Collection.fromArray = function (arr) {
        // Empty?
        if (arr.length === 0)
            return new Collection();
        // Create collection
        var coll = new Collection(underscore_1.default.first(arr).constructor);
        coll.items = arr;
        return coll;
    };
    Collection.merge = function () {
        var collections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            collections[_i] = arguments[_i];
        }
        // Get all items
        collections = underscore_1.default.flatten(collections);
        var items = underscore_1.default.flatten(underscore_1.default.pluck(collections, 'items'));
        // Create new collection
        var result = new Collection();
        result.import(items, false);
        return result;
    };
    Collection.combine = function () {
        var collections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            collections[_i] = arguments[_i];
        }
        // Combine items by id
        collections = underscore_1.default.flatten(collections);
        var itemArrays = underscore_1.default.map(underscore_1.default.pluck(collections, 'items'), function (arr) {
            var items = {};
            underscore_1.default.each(arr, function (item) {
                items[item.get('id')] = item;
            });
            return items;
        });
        itemArrays.unshift({});
        var resultArray = underscore_1.default.extend.apply(undefined, itemArrays);
        // Create new collection
        var result = new Collection();
        result.import(resultArray, false);
        return result;
    };
    return Collection;
}(ObservableArray_1.default));
exports.default = Collection;
//# sourceMappingURL=Collection.js.map