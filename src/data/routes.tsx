import Root from "../pages/Root";
import {RouteObject} from "react-router-dom";
import Login from "../features/authentication/Login";
import SignUp from "../features/authentication/SignUp";
import ProjectDetail from "../features/projects/projectDetail/ProjectDetail";
import ProjectList from "../features/projects/projectList/ProjectList";
import {Auth} from "../utils/Authentication";
import Error from "../pages/Error";

const authRoute: RouteObject[] = [
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'signup',
        element: <SignUp />
    }
];

const protectedRoute: RouteObject[] = [
    {
        index: true,
        element: <Auth><ProjectList /></Auth>
    },
    {
        path: 'project/:projectId',
        element: <Auth><ProjectDetail /></Auth>
    }
]

export const mainRoute: RouteObject[] = [
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            ...protectedRoute
        ]
    },
        ...authRoute
];

