/**
 * Hook for Unselect All Side Effect
 *
 * @example
 *
 * const unselectAll = useUnselectAll('posts');
 * unselectAll();
 */
declare const useUnselectAll: (resource1?: string) => (resource2?: string) => void;
export default useUnselectAll;
