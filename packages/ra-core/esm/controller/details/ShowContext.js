import { createContext } from 'react';
/**
 * Context to store the result of the useShowController() hook.
 *
 * Use the useShowContext() hook to read the context. That's what the Show components do in react-admin.
 *
 * @example
 *
 * import { useShowController, ShowContextProvider } from 'ra-core';
 *
 * const Show = props => {
 *     const controllerProps = useShowController(props);
 *     return (
 *         <ShowContextProvider value={controllerProps}>
 *             ...
 *         </ShowContextProvider>
 *     );
 * };
 */
export var ShowContext = createContext({
    basePath: null,
    record: null,
    defaultTitle: null,
    loaded: null,
    loading: null,
    resource: null,
    version: null,
});
ShowContext.displayName = 'ShowContext';
