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
exports.EditView = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var EditActions_1 = __importDefault(require("./EditActions"));
var TitleForRecord_1 = __importDefault(require("../layout/TitleForRecord"));
exports.EditView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, classesOverride = props.classes, className = props.className, Content = props.component, title = props.title, undoable = props.undoable, rest = __rest(props, ["actions", "aside", "children", "classes", "className", "component", "title", "undoable"]);
    var classes = useStyles(props);
    var _b = ra_core_1.useEditContext(props), basePath = _b.basePath, defaultTitle = _b.defaultTitle, hasList = _b.hasList, hasShow = _b.hasShow, record = _b.record, redirect = _b.redirect, resource = _b.resource, save = _b.save, saving = _b.saving, version = _b.version;
    var finalActions = typeof actions === 'undefined' && hasShow ? (React.createElement(EditActions_1.default, null)) : (actions);
    if (!children) {
        return null;
    }
    return (React.createElement("div", __assign({ className: classnames_1.default('edit-page', classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(TitleForRecord_1.default, { title: title, record: record, defaultTitle: defaultTitle }),
        finalActions &&
            react_1.cloneElement(finalActions, __assign({ basePath: basePath, data: record, hasShow: hasShow,
                hasList: hasList,
                resource: resource }, finalActions.props)),
        React.createElement("div", { className: classnames_1.default(classes.main, (_a = {},
                _a[classes.noActions] = !finalActions,
                _a)) },
            React.createElement(Content, { className: classes.card }, record ? (react_1.cloneElement(react_1.Children.only(children), {
                basePath: basePath,
                record: record,
                redirect: typeof children.props.redirect === 'undefined'
                    ? redirect
                    : children.props.redirect,
                resource: resource,
                save: save,
                saving: saving,
                undoable: undoable,
                version: version,
            })) : (React.createElement(CardContent_1.default, null, "\u00A0"))),
            aside &&
                React.cloneElement(aside, {
                    basePath: basePath,
                    record: record,
                    resource: resource,
                    version: version,
                    save: save,
                    saving: saving,
                }))));
};
exports.EditView.propTypes = {
    actions: prop_types_1.default.element,
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    component: ra_core_1.ComponentPropType,
    defaultTitle: prop_types_1.default.any,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    record: prop_types_1.default.object,
    redirect: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
    save: prop_types_1.default.func,
    title: prop_types_1.default.node,
    version: prop_types_1.default.number,
    onSuccess: prop_types_1.default.func,
    onFailure: prop_types_1.default.func,
    setOnSuccess: prop_types_1.default.func,
    setOnFailure: prop_types_1.default.func,
    setTransform: prop_types_1.default.func,
};
exports.EditView.defaultProps = {
    classes: {},
    component: Card_1.default,
};
var useStyles = styles_1.makeStyles({
    root: {},
    main: {
        display: 'flex',
    },
    noActions: {
        marginTop: '1em',
    },
    card: {
        flex: '1 1 auto',
    },
}, { name: 'RaEdit' });
var sanitizeRestProps = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? null : _b, _c = _a.defaultTitle, defaultTitle = _c === void 0 ? null : _c, _d = _a.hasCreate, hasCreate = _d === void 0 ? null : _d, _e = _a.hasEdit, hasEdit = _e === void 0 ? null : _e, _f = _a.hasList, hasList = _f === void 0 ? null : _f, _g = _a.hasShow, hasShow = _g === void 0 ? null : _g, _h = _a.history, history = _h === void 0 ? null : _h, _j = _a.id, id = _j === void 0 ? null : _j, _k = _a.loaded, loaded = _k === void 0 ? null : _k, _l = _a.loading, loading = _l === void 0 ? null : _l, _m = _a.location, location = _m === void 0 ? null : _m, _o = _a.match, match = _o === void 0 ? null : _o, _p = _a.onFailureRef, onFailureRef = _p === void 0 ? null : _p, _q = _a.onSuccessRef, onSuccessRef = _q === void 0 ? null : _q, _r = _a.options, options = _r === void 0 ? null : _r, _s = _a.permissions, permissions = _s === void 0 ? null : _s, _t = _a.save, save = _t === void 0 ? null : _t, _u = _a.saving, saving = _u === void 0 ? null : _u, _v = _a.setOnFailure, setOnFailure = _v === void 0 ? null : _v, _w = _a.setOnSuccess, setOnSuccess = _w === void 0 ? null : _w, _x = _a.setTransform, setTransform = _x === void 0 ? null : _x, _y = _a.successMessage, successMessage = _y === void 0 ? null : _y, _z = _a.transformRef, transformRef = _z === void 0 ? null : _z, rest = __rest(_a, ["basePath", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "id", "loaded", "loading", "location", "match", "onFailureRef", "onSuccessRef", "options", "permissions", "save", "saving", "setOnFailure", "setOnSuccess", "setTransform", "successMessage", "transformRef"]);
    return rest;
};
