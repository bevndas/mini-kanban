import * as localStorage from '../utils/storage';

const USER_TOKEN = 'user';

type IUserReturnTypes = {
    setUserInfo: (userInfo: IUserInfo) => void;
    getUserInfo: () => IUserInfo
}

export interface IUserInfo {
    userId: string;
}

const userService =(): IUserReturnTypes => {
     function _setUserInfo(userInfo: IUserInfo) {
        const stringifyInfo = JSON.stringify(userInfo);
        localStorage.set(USER_TOKEN, stringifyInfo);
    }

     function _getUserInfo(): IUserInfo {
        const value = localStorage.get(USER_TOKEN);
        return JSON.parse(value);
    }

    return  {
         setUserInfo: _setUserInfo,
        getUserInfo: _getUserInfo
    }
}

export default userService();

