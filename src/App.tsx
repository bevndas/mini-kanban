import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from "./layouts/Container";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {mainRoute} from "./data/routes";
import Root from "./pages/Root";

const router = createBrowserRouter(mainRoute);

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
