import React, {PropsWithChildren, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const Auth: React.FC<{children: React.ReactNode}> = ({children}) => {
    console.log('here in auth')
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, [navigate])
    return <>{children}</>
}

const isAuthenticated = () => !!localStorage.getItem('token');
