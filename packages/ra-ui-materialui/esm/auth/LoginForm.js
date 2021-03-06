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
import { Field, Form } from 'react-final-form';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate, useLogin, useNotify, useSafeSetState } from 'ra-core';
var useStyles = makeStyles(function (theme) { return ({
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    button: {
        width: '100%',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}); }, { name: 'RaLoginForm' });
var Input = function (_a) {
    var _b = _a.meta, touched = _b.touched, error = _b.error, // eslint-disable-line react/prop-types
    inputProps = _a.input, // eslint-disable-line react/prop-types
    props = __rest(_a, ["meta", "input"]);
    return (React.createElement(TextField, __assign({ error: !!(touched && error), helperText: touched && error }, inputProps, props, { fullWidth: true })));
};
var LoginForm = function (props) {
    var redirectTo = props.redirectTo;
    var _a = useSafeSetState(false), loading = _a[0], setLoading = _a[1];
    var login = useLogin();
    var translate = useTranslate();
    var notify = useNotify();
    var classes = useStyles(props);
    var validate = function (values) {
        var errors = { username: undefined, password: undefined };
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };
    var submit = function (values) {
        setLoading(true);
        login(values, redirectTo)
            .then(function () {
            setLoading(false);
        })
            .catch(function (error) {
            setLoading(false);
            notify(typeof error === 'string'
                ? error
                : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message, 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        });
    };
    return (React.createElement(Form, { onSubmit: submit, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit;
            return (React.createElement("form", { onSubmit: handleSubmit, noValidate: true },
                React.createElement("div", { className: classes.form },
                    React.createElement("div", { className: classes.input },
                        React.createElement(Field, { autoFocus: true, id: "username", name: "username", component: Input, label: translate('ra.auth.username'), disabled: loading })),
                    React.createElement("div", { className: classes.input },
                        React.createElement(Field, { id: "password", name: "password", component: Input, label: translate('ra.auth.password'), type: "password", disabled: loading, autoComplete: "current-password" }))),
                React.createElement(CardActions, null,
                    React.createElement(Button, { variant: "contained", type: "submit", color: "primary", disabled: loading, className: classes.button },
                        loading && (React.createElement(CircularProgress, { className: classes.icon, size: 18, thickness: 2 })),
                        translate('ra.auth.sign_in')))));
        } }));
};
LoginForm.propTypes = {
    redirectTo: PropTypes.string,
};
export default LoginForm;
