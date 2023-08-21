import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useQuery} from "react-query";

const fetchProjectById = (id: string) => {
    const newEndpoint = endpoints.projects.projectById.replace('{id}', id);
    return http().get(newEndpoint);
}

export function useFetchProjectById(projectId: string) {
    return useQuery(['fetchProjectById', projectId],() => fetchProjectById(projectId), {enabled: !!projectId} )
}