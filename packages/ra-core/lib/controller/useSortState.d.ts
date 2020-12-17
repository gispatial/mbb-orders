import { SortPayload } from '../types';
export interface SortProps {
    setSortField: (field: string) => void;
    setSortOrder: (order: string) => void;
    setSort: (sort: SortPayload, order?: string) => void;
    sort: SortPayload;
}
export declare const defaultSort: {
    field: string;
    order: string;
};
/**
 * set the sort { field, order }
 * @name setSort
 * @function
 * @param {SortPayload} sort the sort object
 */
/**
 * set the sort field, swap the order if the field is the same
 * @name setSortField
 * @function
 * @param {string} field the sort field
 */
/**
 * set the sort order
 * @name setSortOrder
 * @function
 * @param {string} order the sort order eiather ASC or DESC
 */
/**
 * @typedef SortProps
 * @type {Object}
 * @property {Object} sort: the sort object.
 * @property {string} sort.field: the sort object.
 * @property {'ASC' | 'DESC'} sort.order: the sort object.
 * @property {setSort} setSort
 * @property {setSortField} setSortField
 * @property {setSortOrder} setSortOrder
 */
/**
 * Hooks to provide sort state
 *
 * @example
 *
 * const { sort, setSort, setSortField, setSortOrder } = useSort({
 *      field: 'name',
 *      order: 'ASC',
 * });
 *
 * setSort({ field: 'name', order: 'ASC' });
 * // is the same as
 * setSortField('name');
 * setSortOrder('ASC');
 *
 * @param {Object} initialSort
 * @param {string} initialSort.field The initial sort field
 * @param {string} initialSort.order The initial sort order
 * @returns {SortProps} The sort props
 */
declare const useSortState: (initialSort?: SortPayload) => SortProps;
export default useSortState;
