import {endpoints} from "../../global/endpoints";
import http from "../../utils/http";
import {useMutation, useQueryClient} from "react-query";

export interface ITab {
    projectId: string;
    title: string;
    tabOrderIndex: string;
    tabId: string;
}

const saveTab = ({tabId, ...postData}: ITab) => {
    if (tabId) {
        const newEndpoints = endpoints.tab.tabById.replace('{id}', tabId);
        return http().put(newEndpoints, postData);
    } else {
        return http().post(endpoints.tab.base, postData);
    }
}

export function useSaveTab() {
    const queryClient = useQueryClient();

    return useMutation(saveTab, {
        onSettled: (data: any) => {
            if (data) {
                queryClient.invalidateQueries('fetchProjectById');
            }
        }
    })
}