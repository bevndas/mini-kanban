import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useMutation, useQueryClient} from "react-query";

export interface IDeleteProject {
    projectId: number;
    userId: number;
}

const deleteProject = ({projectId, userId}: IDeleteProject) => {
    const newEndPoints = endpoints.projects.projectById.replace('{id}', projectId.toString());
    return http().delete(newEndPoints, {
        userId
    })
}

export function useDeleteProject() {
    const queryClient = useQueryClient();

    return useMutation(deleteProject, {
        onSettled: (data: any) => {
            if (data) {
                queryClient.invalidateQueries(['fetchProjects'])
            }
        }
    })
}