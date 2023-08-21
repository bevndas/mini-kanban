import http from "../../utils/http";
import {endpoints} from "../../global/endpoints";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {routePaths} from "../../global/routePaths";
import {notification} from "antd";

export interface IRegister  {
    email: string;
    username: string;
    password: string;
}

export const register = (postData: IRegister) => {
    return http().post(endpoints.auth.register, postData);
}

export function useRegister() {
    const navigate = useNavigate();

    return useMutation(register, {
        onSuccess: () => {
            notification.success({
                message: 'User created successfully'
            });
            navigate(routePaths.auth.login);
        }
    })
}