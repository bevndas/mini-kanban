import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useQuery} from "react-query";

const fetchProjects = () => {
    const endPoints = endpoints.projects.base;
    return http().get(endPoints);
}

export function useFetchProjects() {
    return useQuery(['fetchProjects'], () => fetchProjects());
}