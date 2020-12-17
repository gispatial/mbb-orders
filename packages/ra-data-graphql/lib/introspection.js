"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResourceExcluded = exports.isResourceIncluded = void 0;
var graphql_1 = require("graphql");
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var ra_core_1 = require("ra-core");
var constants_1 = require("./constants");
exports.isResourceIncluded = function (_a) {
    var include = _a.include, type = _a.type;
    if (Array.isArray(include)) {
        return include.includes(type.name);
    }
    if (typeof include === 'function') {
        return include(type);
    }
    return false;
};
exports.isResourceExcluded = function (_a) {
    var exclude = _a.exclude, type = _a.type;
    if (Array.isArray(exclude)) {
        return exclude.includes(type.name);
    }
    if (typeof exclude === 'function') {
        return exclude(type);
    }
    return false;
};
/**
 * @param {ApolloClient} client The Apollo client
 * @param {Object} options The introspection options
 */
exports.default = (function (client, options) { return __awaiter(void 0, void 0, void 0, function () {
    var schema, _a, queries, types, isResource, buildResource, filteredResources, resources;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!options.schema) return [3 /*break*/, 1];
                _a = options.schema;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, client
                    .query({
                    fetchPolicy: 'network-only',
                    query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                      ", "\n                  "], ["\n                      ", "\n                  "])), graphql_1.getIntrospectionQuery()),
                })
                    .then(function (_a) {
                    var __schema = _a.data.__schema;
                    return __schema;
                })];
            case 2:
                _a = _b.sent();
                _b.label = 3;
            case 3:
                schema = _a;
                queries = schema.types.reduce(function (acc, type) {
                    if (type.name !== (schema.queryType && schema.queryType.name) &&
                        type.name !== (schema.mutationType && schema.mutationType.name))
                        return acc;
                    return __spreadArrays(acc, type.fields);
                }, []);
                types = schema.types.filter(function (type) {
                    return type.name !== (schema.queryType && schema.queryType.name) &&
                        type.name !== (schema.mutationType && schema.mutationType.name);
                });
                isResource = function (type) {
                    if (exports.isResourceIncluded(__assign({ type: type }, options)))
                        return true;
                    if (exports.isResourceExcluded(__assign({ type: type }, options)))
                        return false;
                    return (queries.some(function (query) { return query.name === options.operationNames[ra_core_1.GET_LIST](type); }) &&
                        queries.some(function (query) { return query.name === options.operationNames[ra_core_1.GET_ONE](type); }));
                };
                buildResource = function (type) {
                    return constants_1.ALL_TYPES.reduce(function (acc, aorFetchType) {
                        var _a;
                        return (__assign(__assign({}, acc), (_a = {}, _a[aorFetchType] = queries.find(function (query) {
                            return options.operationNames[aorFetchType] &&
                                query.name ===
                                    options.operationNames[aorFetchType](type);
                        }), _a)));
                    }, { type: type });
                };
                filteredResources = types.filter(isResource);
                resources = filteredResources.map(buildResource);
                return [2 /*return*/, {
                        types: types,
                        queries: queries,
                        resources: resources,
                        schema: schema,
                    }];
        }
    });
}); });
var templateObject_1;
