import React from 'react';
import {useRouteError} from "react-router-dom";
import {Typography} from "antd";

interface Error {statusText: string; message: string}


const Error: React.FC = () => {
  const error  = useRouteError() as Error;
  const {Text, Title} = Typography;

  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
        <Title level={3}>Oops!</Title>
        <Text>Sorry, an unexpected error has occured.</Text>
        <Text italic>
            {error!.statusText || error.message || ''}
        </Text>
    </div>
  );
};

export default Error;