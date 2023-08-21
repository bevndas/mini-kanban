import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useMutation, useQueryClient} from "react-query";

export interface IDeleteTab {
    tabId: number;
}

const deleteTab = ({tabId}: IDeleteTab) => {
    const newEndPoints = endpoints.tab.tabById.replace('{id}', tabId.toString());
    return http().delete(newEndPoints)
}

export function useDeleteTab() {
    const queryClient = useQueryClient();

    return useMutation(deleteTab, {
        onSettled: (data: any) => {
            if (data) {
                queryClient.invalidateQueries(['fetchProjectById'])
            }
        }
    })
}