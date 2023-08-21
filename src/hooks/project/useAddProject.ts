import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useMutation, useQueryClient} from "react-query";

export interface IProject {
    projectId: string;
    title: string;
    userId: string;
}

const saveProject = ({projectId, ...postData}: IProject) => {
    if (projectId) {
        const newEndpoints = endpoints.projects.projectById.replace('{id}', projectId);
        return http().put(newEndpoints, postData);
    } else {
        return http().post(endpoints.projects.base, postData);
    }
}

export function useSaveProject() {
    const queryClient = useQueryClient();

    return useMutation(saveProject, {
        onSettled: (data: any) => {
            if (data) {
                queryClient.invalidateQueries('fetchProjects');
            }
        }
    })
}