import { useCallback } from 'react';
import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import { useLocation, useHistory } from 'react-router-dom';
/**
 * Get a callback for calling the authProvider.login() method
 * and redirect to the previous authenticated page (or the home page) on success.
 *
 * @see useAuthProvider
 *
 * @returns {Function} login callback
 *
 * @example
 *
 * import { useLogin } from 'react-admin';
 *
 * const LoginButton = () => {
 *     const [loading, setLoading] = useState(false);
 *     const login = useLogin();
 *     const handleClick = {
 *         setLoading(true);
 *         login({ username: 'john', password: 'p@ssw0rd' }, '/posts')
 *             .then(() => setLoading(false));
 *     }
 *     return <button onClick={handleClick}>Login</button>;
 * }
 */
var useLogin = function () {
    var authProvider = useAuthProvider();
    var location = useLocation();
    var locationState = location.state;
    var history = useHistory();
    var nextPathName = locationState && locationState.nextPathname;
    var login = useCallback(function (params, pathName) {
        if (params === void 0) { params = {}; }
        return authProvider.login(params).then(function (ret) {
            var redirectUrl = pathName
                ? pathName
                : nextPathName || defaultAuthParams.afterLoginUrl;
            history.push(redirectUrl);
            return ret;
        });
    }, [authProvider, history, nextPathName]);
    var loginWithoutProvider = useCallback(function (_, __) {
        history.push(defaultAuthParams.afterLoginUrl);
        return Promise.resolve();
    }, [history]);
    return authProvider ? login : loginWithoutProvider;
};
export default useLogin;
