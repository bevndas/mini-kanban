import {QueryClient} from "react-query";
import {getHeader, THeader} from "./header";
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

const queryClient = new QueryClient();
const TIMEOUT = 180000;

const logout = () => {
    localStorage.clear();
    queryClient.clear();
}

const API_ROOT = process.env.REACT_APP_API_ENDPOINT || ''


const http = (headerType: THeader = 'json', baseURL: string = API_ROOT, timeout: number = TIMEOUT) => {
    const headers = getHeader(headerType);

    const client: AxiosInstance = axios.create({
        baseURL,
        timeout,
        headers
    })

    client.interceptors.response.use(handleSuccess, handleError);

    function handleSuccess(response: AxiosResponse) {
        return response
    }

    function handleError(error: AxiosError) {
        const status = error?.response?.status;
        if (status === 401) {
            logout();
        }
        if (error?.response?.status !== 500) {
            if (error?.response?.data) {
                return Promise.reject(error?.response?.data);
            } else {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject(error?.response?.data);
        }
    }


    function get(path: string, config?: AxiosRequestConfig) {
        return client.get(path, config).then(response => response.data);
    }

    function post(path: string, payload: any, config?: AxiosRequestConfig) {
        return client.post(path, payload, config).then(response => response.data);
    }

    function put(path: string, payload: any, config?: AxiosRequestConfig) {
        return client.put(path, payload, config).then(response => response.data);
    }

    function patch(path: string, payload: any, config?: AxiosRequestConfig) {
        return client.patch(path, payload).then(response => response.data);
    }

    function _delete(path: string, data?: any, config?: AxiosRequestConfig) {
        if (data) {
            return client.delete(path, { data: data }).then(response => response.data);
        }
        return client.delete(path, config).then(response => response.data);
    }

    return {
        get,
        post,
        put,
        patch,
        delete: _delete,
    };

}

export default http;