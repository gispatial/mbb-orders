import * as React from 'react';
import { RecordContextProvider, usePickRecordContext } from '../RecordContext';
import { EditContext } from './EditContext';
import { SaveContextProvider, usePickSaveContext } from './SaveContext';
/**
 * Create an Edit Context.
 *
 * @example
 *
 * const MyEdit = (props) => {
 *     const controllerProps = useEditController(props);
 *     return (
 *         <EditContextProvider value={controllerProps}>
 *             <MyEditView>
 *         </EditContextProvider>
 *     );
 * };
 *
 * const MyEditView = () => {
 *     const { record } = useRecordContext();
 *     // or, to rerender only when the save operation change but not data
 *     const { saving } = useEditContext();
 * }
 *
 * @see EditContext
 * @see RecordContext
 */
export var EditContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React.createElement(EditContext.Provider, { value: value },
        React.createElement(SaveContextProvider, { value: usePickSaveContext(value) },
            React.createElement(RecordContextProvider, { value: usePickRecordContext(value) }, children))));
};
