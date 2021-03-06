import { useEffect } from 'react';
import { useRefresh } from '../sideEffect';
import useIsAutomaticRefreshEnabled from './useIsAutomaticRefreshEnabled';
/**
 * Trigger a refresh of the page when the page comes back from background after a certain delay
 *
 * @param {number} delay Delay in milliseconds since the time the page was hidden. Defaults to 5 minutes.
 */
var useRefreshWhenVisible = function (delay) {
    if (delay === void 0) { delay = 1000 * 60 * 5; }
    var refresh = useRefresh();
    var automaticRefreshEnabled = useIsAutomaticRefreshEnabled();
    useEffect(function () {
        var lastHiddenTime;
        var handleVisibilityChange = function () {
            if (!automaticRefreshEnabled) {
                return;
            }
            if (document.hidden) {
                // tab goes hidden
                lastHiddenTime = Date.now();
            }
            else {
                // tab goes visible
                if (Date.now() - lastHiddenTime > delay) {
                    refresh();
                }
                lastHiddenTime = null;
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange, {
            capture: true,
        });
        return function () {
            return document.removeEventListener('visibilitychange', handleVisibilityChange, { capture: true });
        };
    }, [automaticRefreshEnabled, delay, refresh]);
};
export default useRefreshWhenVisible;
