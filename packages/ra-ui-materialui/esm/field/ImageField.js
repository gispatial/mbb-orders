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
import * as React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
var useStyles = makeStyles({
    list: {
        display: 'flex',
        listStyleType: 'none',
    },
    image: {
        margin: '0.5rem',
        maxHeight: '10rem',
    },
}, { name: 'RaImageField' });
var ImageField = function (props) {
    var className = props.className, classesOverride = props.classes, emptyText = props.emptyText, record = props.record, source = props.source, src = props.src, title = props.title, rest = __rest(props, ["className", "classes", "emptyText", "record", "source", "src", "title"]);
    var sourceValue = get(record, source);
    var classes = useStyles(props);
    if (!sourceValue) {
        return emptyText ? (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText)) : (React.createElement("div", __assign({ className: className }, sanitizeFieldRestProps(rest))));
    }
    if (Array.isArray(sourceValue)) {
        return (React.createElement("ul", __assign({ className: classnames(classes.list, className) }, sanitizeFieldRestProps(rest)), sourceValue.map(function (file, index) {
            var fileTitleValue = get(file, title) || title;
            var srcValue = get(file, src) || title;
            return (React.createElement("li", { key: index },
                React.createElement("img", { alt: fileTitleValue, title: fileTitleValue, src: srcValue, className: classes.image })));
        })));
    }
    var titleValue = get(record, title) || title;
    return (React.createElement("div", __assign({ className: className }, sanitizeFieldRestProps(rest)),
        React.createElement("img", { title: titleValue, alt: titleValue, src: sourceValue, className: classes.image })));
};
// wat? TypeScript looses the displayName if we don't set it explicitly
ImageField.displayName = 'ImageField';
ImageField.defaultProps = {
    addLabel: true,
};
ImageField.propTypes = __assign(__assign({}, fieldPropTypes), { src: PropTypes.string, title: PropTypes.string });
export default ImageField;
