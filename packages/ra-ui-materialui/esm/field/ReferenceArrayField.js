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
import { Children, cloneElement, memo } from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ListContextProvider, useListContext, useReferenceArrayFieldController, ResourceContextProvider, } from 'ra-core';
import { fieldPropTypes } from './types';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
/**
 * A container component that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * // order = {
 * //   id: 123,
 * //   product_ids: [456, 457, 458],
 * // }
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categories of the current product as a list of chips
 * // product = {
 * //   id: 456,
 * //   category_ids: [11, 22, 33],
 * // }
 * <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 * By default, restricts the displayed values to 1000. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayField perPage={10} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * By default, the field displays the results in the order in which they are referenced
 * (i.e in the order of the list of ids). You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayField sort={{ field: 'name', order: 'ASC' }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * Also, you can filter the results to display only a subset of values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayField filter={{ is_published: true }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 */
var ReferenceArrayField = function (props) {
    var basePath = props.basePath, children = props.children, filter = props.filter, _a = props.page, page = _a === void 0 ? 1 : _a, perPage = props.perPage, record = props.record, reference = props.reference, resource = props.resource, sort = props.sort, source = props.source;
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceArrayField> only accepts a single child (like <Datagrid>)');
    }
    var controllerProps = useReferenceArrayFieldController({
        basePath: basePath,
        filter: filter,
        page: page,
        perPage: perPage,
        record: record,
        reference: reference,
        resource: resource,
        sort: sort,
        source: source,
    });
    return (React.createElement(ResourceContextProvider, { value: reference },
        React.createElement(ListContextProvider, { value: controllerProps },
            React.createElement(PureReferenceArrayFieldView, __assign({}, props, controllerProps)))));
};
ReferenceArrayField.propTypes = __assign(__assign({}, fieldPropTypes), { addLabel: PropTypes.bool, basePath: PropTypes.string, classes: PropTypes.object, className: PropTypes.string, children: PropTypes.element.isRequired, label: PropTypes.string, record: PropTypes.any, reference: PropTypes.string.isRequired, resource: PropTypes.string, sortBy: PropTypes.string, sortByOrder: fieldPropTypes.sortByOrder, source: PropTypes.string.isRequired });
ReferenceArrayField.defaultProps = {
    addLabel: true,
};
var useStyles = makeStyles(function (theme) { return ({
    progress: { marginTop: theme.spacing(2) },
}); }, { name: 'RaReferenceArrayField' });
export var ReferenceArrayFieldView = function (props) {
    var children = props.children, pagination = props.pagination, className = props.className, resource = props.resource, reference = props.reference, rest = __rest(props, ["children", "pagination", "className", "resource", "reference"]);
    var classes = useStyles(props);
    var loaded = useListContext(props).loaded;
    if (!loaded) {
        return React.createElement(LinearProgress, { className: classes.progress });
    }
    return (React.createElement(React.Fragment, null,
        cloneElement(Children.only(children), __assign(__assign({}, sanitizeFieldRestProps(rest)), { className: className,
            resource: resource })),
        ' ',
        pagination &&
            props.total !== undefined &&
            cloneElement(pagination, sanitizeFieldRestProps(rest))));
};
ReferenceArrayFieldView.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.any,
    className: PropTypes.string,
    data: PropTypes.any,
    ids: PropTypes.array,
    loaded: PropTypes.bool,
    children: PropTypes.element.isRequired,
    reference: PropTypes.string.isRequired,
};
var PureReferenceArrayFieldView = memo(ReferenceArrayFieldView);
export default ReferenceArrayField;
