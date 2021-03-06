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
import { memo } from 'react';
import get from 'lodash/get';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
var useStyles = makeStyles({
    chip: { margin: 4, cursor: 'inherit' },
}, { name: 'RaChipField' });
export var ChipField = memo(function (props) {
    var className = props.className, classesOverride = props.classes, source = props.source, _a = props.record, record = _a === void 0 ? {} : _a, emptyText = props.emptyText, rest = __rest(props, ["className", "classes", "source", "record", "emptyText"]);
    var classes = useStyles(props);
    var value = get(record, source);
    if (value == null && emptyText) {
        return (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText));
    }
    return (React.createElement(Chip, __assign({ className: classnames(classes.chip, className), label: value }, sanitizeFieldRestProps(rest))));
});
ChipField.defaultProps = {
    addLabel: true,
};
ChipField.propTypes = __assign(__assign({}, ChipField.propTypes), fieldPropTypes);
export default ChipField;
