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
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MuiTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { useTranslate } from 'ra-core';
var useStyles = makeStyles({
    clearIcon: {
        height: 16,
        width: 0,
    },
    visibleClearIcon: {
        width: 16,
    },
    clearButton: {
        height: 24,
        width: 24,
        padding: 0,
    },
    selectAdornment: {
        position: 'absolute',
        right: 24,
    },
    inputAdornedEnd: {
        paddingRight: 0,
    },
}, { name: 'RaResettableTextField' });
var handleMouseDownClearButton = function (event) {
    event.preventDefault();
};
/**
 * An override of the default Material-UI TextField which is resettable
 */
function ResettableTextField(props) {
    var classesOverride = props.classes, clearAlwaysVisible = props.clearAlwaysVisible, InputProps = props.InputProps, value = props.value, resettable = props.resettable, disabled = props.disabled, _a = props.variant, variant = _a === void 0 ? 'filled' : _a, _b = props.margin, margin = _b === void 0 ? 'dense' : _b, rest = __rest(props, ["classes", "clearAlwaysVisible", "InputProps", "value", "resettable", "disabled", "variant", "margin"]);
    var classes = useStyles(props);
    var translate = useTranslate();
    var onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur;
    var handleClickClearButton = useCallback(function (event) {
        event.preventDefault();
        onChange('');
    }, [onChange]);
    var handleFocus = useCallback(function (event) {
        onFocus && onFocus(event);
    }, [onFocus]);
    var handleBlur = useCallback(function (event) {
        onBlur && onBlur(event);
    }, [onBlur]);
    var clearButton = classes.clearButton, clearIcon = classes.clearIcon, inputAdornedEnd = classes.inputAdornedEnd, selectAdornment = classes.selectAdornment, visibleClearButton = classes.visibleClearButton, visibleClearIcon = classes.visibleClearIcon, restClasses = __rest(classes, ["clearButton", "clearIcon", "inputAdornedEnd", "selectAdornment", "visibleClearButton", "visibleClearIcon"]);
    var _c = InputProps || {}, endAdornment = _c.endAdornment, InputPropsWithoutEndAdornment = __rest(_c, ["endAdornment"]);
    if (clearAlwaysVisible && endAdornment) {
        throw new Error('ResettableTextField cannot display both an endAdornment and a clear button always visible');
    }
    var getEndAdornment = function () {
        var _a;
        if (!resettable) {
            return endAdornment;
        }
        else if (!value) {
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return (React.createElement(InputAdornment, { position: "end", classes: {
                        root: props.select ? selectAdornment : null,
                    } },
                    React.createElement(IconButton, { className: clearButton, "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'), disableRipple: true, disabled: true },
                        React.createElement(ClearIcon, { className: classNames(clearIcon, visibleClearIcon) }))));
            }
            else {
                if (endAdornment) {
                    return endAdornment;
                }
                else {
                    // show spacer
                    return (React.createElement(InputAdornment, { position: "end", classes: {
                            root: props.select ? selectAdornment : null,
                        } },
                        React.createElement("span", { className: clearButton }, "\u00A0")));
                }
            }
        }
        else {
            // show clear
            return (React.createElement(InputAdornment, { position: "end", classes: {
                    root: props.select ? selectAdornment : null,
                } },
                React.createElement(IconButton, { className: clearButton, "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'), disableRipple: true, onClick: handleClickClearButton, onMouseDown: handleMouseDownClearButton, disabled: disabled },
                    React.createElement(ClearIcon, { className: classNames(clearIcon, (_a = {},
                            _a[visibleClearIcon] = clearAlwaysVisible || value,
                            _a)) }))));
        }
    };
    return (React.createElement(MuiTextField, __assign({ classes: restClasses, value: value, InputProps: __assign({ classes: props.select && variant === 'filled'
                ? { adornedEnd: inputAdornedEnd }
                : {}, endAdornment: getEndAdornment() }, InputPropsWithoutEndAdornment), disabled: disabled, variant: variant, margin: margin }, rest, { onFocus: handleFocus, onBlur: handleBlur })));
}
ResettableTextField.propTypes = {
    classes: PropTypes.object,
    clearAlwaysVisible: PropTypes.bool,
    disabled: PropTypes.bool,
    InputProps: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    resettable: PropTypes.bool,
    value: PropTypes.any.isRequired,
};
export default ResettableTextField;
