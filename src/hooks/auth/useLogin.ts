import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import tokenService from '../../utils/token';
import {routePaths} from "../../global/routePaths";

export interface ILogin  {
    username: string;
    password: string;
}

export const login = (postData: ILogin) => {
    return http().post(endpoints.auth.login, postData);
}

export function useLogin() {
    const navigate = useNavigate();

    return useMutation(login, {
        onSuccess: ({ payload }) => {
            tokenService.setToken(payload.data);
            navigate(routePaths.project.projectList);
        }
    })
}