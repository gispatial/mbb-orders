"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceInputView = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var LinearProgress_1 = __importDefault(require("../layout/LinearProgress"));
var Labeled_1 = __importDefault(require("./Labeled"));
var ReferenceError_1 = __importDefault(require("./ReferenceError"));
/**
 * An Input component for choosing a reference record. Useful for foreign keys.
 *
 * This component fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), then delegates rendering
 * to a subcomponent, to which it passes the possible choices
 * as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<AutocompleteInput>`,
 * `<SelectInput>`, or `<RadioButtonGroupInput>`.
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <AutocompleteInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <SelectInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      perPage={100}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      sort={{ field: 'title', order: 'ASC' }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filter={{ is_published: true }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * The enclosed component may filter results. ReferenceInput passes a `setFilter`
 * function as prop to its child component. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function prop:
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filterToQuery={searchText => ({ title: searchText })}>
 *     <AutocompleteInput optionText="title" />
 * </ReferenceInput>
 */
var ReferenceInput = function (_a) {
    var format = _a.format, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, parse = _a.parse, validate = _a.validate, props = __rest(_a, ["format", "onBlur", "onChange", "onFocus", "parse", "validate"]);
    var inputProps = ra_core_1.useInput(__assign({ format: format,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        parse: parse,
        validate: validate }, props));
    return (react_1.default.createElement(exports.ReferenceInputView, __assign({}, inputProps, props, ra_core_1.useReferenceInputController(__assign(__assign({}, props), inputProps)))));
};
ReferenceInput.propTypes = {
    allowEmpty: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    filter: prop_types_1.default.object,
    filterToQuery: prop_types_1.default.func.isRequired,
    label: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    perPage: prop_types_1.default.number,
    record: prop_types_1.default.object,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.oneOf(['ASC', 'DESC']),
    }),
    source: prop_types_1.default.string,
};
ReferenceInput.defaultProps = {
    filter: {},
    filterToQuery: function (searchText) { return (searchText ? { q: searchText } : {}); },
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
};
var sanitizeRestProps = function (_a) {
    var _b = _a.dataStatus, dataStatus = _b === void 0 ? null : _b, _c = _a.filter, filter = _c === void 0 ? null : _c, _d = _a.filterToQuery, filterToQuery = _d === void 0 ? null : _d, _e = _a.onChange, onChange = _e === void 0 ? null : _e, _f = _a.perPage, perPage = _f === void 0 ? null : _f, _g = _a.reference, reference = _g === void 0 ? null : _g, _h = _a.referenceRecord, referenceRecord = _h === void 0 ? null : _h, _j = _a.referenceSource, referenceSource = _j === void 0 ? null : _j, _k = _a.sort, sort = _k === void 0 ? null : _k, _l = _a.validation, validation = _l === void 0 ? null : _l, rest = __rest(_a, ["dataStatus", "filter", "filterToQuery", "onChange", "perPage", "reference", "referenceRecord", "referenceSource", "sort", "validation"]);
    return sanitizeInputRestProps_1.default(rest);
};
exports.ReferenceInputView = function (_a) {
    var allowEmpty = _a.allowEmpty, basePath = _a.basePath, children = _a.children, choices = _a.choices, classes = _a.classes, className = _a.className, error = _a.error, helperText = _a.helperText, id = _a.id, input = _a.input, isRequired = _a.isRequired, loading = _a.loading, label = _a.label, meta = _a.meta, possibleValues = _a.possibleValues, resource = _a.resource, reference = _a.reference, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, source = _a.source, warning = _a.warning, rest = __rest(_a, ["allowEmpty", "basePath", "children", "choices", "classes", "className", "error", "helperText", "id", "input", "isRequired", "loading", "label", "meta", "possibleValues", "resource", "reference", "setFilter", "setPagination", "setSort", "source", "warning"]);
    if (react_1.Children.count(children) !== 1) {
        throw new Error('<ReferenceInput> only accepts a single child');
    }
    if (loading) {
        return (react_1.default.createElement(Labeled_1.default, { id: id, label: label, source: source, resource: resource, className: className, isRequired: isRequired, meta: meta, input: input },
            react_1.default.createElement(LinearProgress_1.default, null)));
    }
    // This is not a final-form error but an unrecoverable error from the
    // useReferenceInputController hook
    if (error) {
        return react_1.default.createElement(ReferenceError_1.default, { label: label, error: error });
    }
    // When the useReferenceInputController returns a warning, it means there it
    // had an issue trying to load the referenced record
    // We display it by overriding the final-form meta
    var finalMeta = warning
        ? __assign(__assign({}, meta), { error: warning }) : meta;
    // helperText should never be set on ReferenceInput, only in child component
    // But in a Filter component, the child helperText have to be forced to false
    ra_core_1.warning(helperText !== undefined && helperText !== false, "<ReferenceInput> doesn't accept a helperText prop. Set the helperText prop on the child component instead");
    var disabledHelperText = helperText === false ? { helperText: helperText } : {};
    return (react_1.default.createElement(ra_core_1.ResourceContextProvider, { value: reference },
        react_1.default.createElement(ra_core_1.ListContextProvider, { value: possibleValues }, react_1.cloneElement(children, __assign(__assign({ allowEmpty: allowEmpty,
            classes: classes,
            className: className,
            input: input,
            isRequired: isRequired,
            label: label,
            resource: resource, meta: finalMeta, source: source,
            choices: choices,
            basePath: basePath,
            setFilter: setFilter,
            setPagination: setPagination,
            setSort: setSort, translateChoice: false }, disabledHelperText), sanitizeRestProps(rest))))));
};
exports.default = ReferenceInput;
