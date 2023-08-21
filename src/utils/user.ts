import * as localStorage from '../utils/storage';

const USER_TOKEN = 'user';

export interface IUserInfo {
    userId: string;
}

export function setUserInfo(userInfo: IUserInfo) {
    const stringifyInfo = JSON.stringify(userInfo);
    localStorage.set(USER_TOKEN, stringifyInfo);
}

export function getUserInfo(): IUserInfo {
    const value = localStorage.get(USER_TOKEN);
    return JSON.parse(value);
}