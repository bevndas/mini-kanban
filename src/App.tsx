import React from 'react';
import './App.scss';
import Container from "./layouts/Container";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {mainRoute} from "./data/routes";
import { QueryClientProvider } from 'react-query';
import {QueryClient} from "react-query";
import {notification} from "antd";

const router = createBrowserRouter(mainRoute);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            onError: (errorData: any) => {
                console.log(errorData);
                let errorMessage: any = '';
                if (errorData?.errors) {
                    notification.error({ message: errorMessage });
                } else {
                    errorMessage = errorData?.message || errorData?.error?.message || errorData?.data || 'Unable to fetch data';
                    notification.error({ message: errorMessage });
                }
            },
        },
        mutations: {
            retry: 0,
            onError: (errorData: any) => {
                console.log(errorData);
                let errorMessage: any = '';
                if (errorData?.errors) {
                    notification.error({ message: errorMessage });
                } else {
                    errorMessage = errorData?.message || errorData?.error?.message || errorData?.data || 'Unable to post data';
                    notification.error({ message: errorMessage });
                }
            },
            onSuccess: (data: any) => {
                if (data?.message) {
                    notification.success({ message: data?.message });
                }
            },
        },
    },
});

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Container>
              <RouterProvider router={router} />
          </Container>
      </QueryClientProvider>

  );
}

export default App;
