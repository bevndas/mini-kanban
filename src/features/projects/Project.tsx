import React from 'react';
import {Outlet} from "react-router-dom";

type ProjectProps = {

};

const Project: React.FC<ProjectProps> = (props) => {

  return (
    <div>
        <Outlet/>
    </div>
  );
};

export default Project;