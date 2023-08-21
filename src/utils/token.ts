import * as localStorage from './storage';
const ACCESS_TOKEN = 'token';

type TReturnTypes = {
    setToken:(token: string) => void;
    getAccessToken:() => string;
    clearToken: () => void;
}

const tokenService = (): TReturnTypes => {

    function _setToken(token: string) {
        localStorage.set(ACCESS_TOKEN, token);
    }

    function _getAccessToken(): string {
        return localStorage.get(ACCESS_TOKEN);
    }

    function _clearToken() {
        localStorage.remove(ACCESS_TOKEN);
    }

    return {
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        clearToken: _clearToken
    }
}

export default tokenService();