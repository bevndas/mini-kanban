import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = {
    token: {
        fontFamily: 'Helvetica',
        colorPrimary: "#421983",
        colorInfo: "#421983",
        colorSuccess: "#ff622d",
        colorError: "#f51a38",
        fontSize: 13,
        lineHeight: 1.5715,
        borderRadius: 5
    }
};
root.render(
  <React.StrictMode>
      <ConfigProvider theme={theme}>
       <App />
      </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
