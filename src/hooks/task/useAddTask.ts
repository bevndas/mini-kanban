import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useMutation, useQueryClient} from "react-query";

export interface ITask {
    taskId: string;
    title: string;
    status: string;
    tabId: string;
}

const saveTask = ({taskId, ...postData}: ITask) => {
    if (taskId) {
        const newEndpoints = endpoints.task.taskById.replace('{id}', taskId);
        return http().put(newEndpoints, postData);
    } else {
        return http().post(endpoints.task.taskById, postData);
    }
}

export function useSaveTask() {
    const queryClient = useQueryClient();

    return useMutation(saveTask, {
        onSettled: (data: any) => {
            if (data) {
                queryClient.invalidateQueries('fetchProjectById');
            }
        }
    })
}