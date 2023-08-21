import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useMutation, useQueryClient} from "react-query";

export interface IDeleteTask {
    taskId: number;
}

const deleteTask = ({taskId}: IDeleteTask) => {
    const newEndPoints = endpoints.task.taskById.replace('{id}', taskId.toString());
    return http().delete(newEndPoints)
}

export function useDeleteTask() {
    const queryClient = useQueryClient();

    return useMutation(deleteTask, {
        onSettled: (data: any) => {
            if (data) {
                queryClient.invalidateQueries(['fetchProjectById'])
            }
        }
    })
}