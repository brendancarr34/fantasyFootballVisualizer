import React from 'react';
// import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import NJFL from './NJFL';
import EXFL from './EXFL';
import ManagersPage from './components/ManagersPage';
import ManagerRecordsPage from './components/ManagerRecordsPage';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/njfl",
    element: <NJFL/>,
  },
  {
    path: "/njfl/managers",
    element: <ManagersPage/>,
  },
  {
    path: "njfl/managerRecords",
    element: <ManagerRecordsPage/>,
  },
  {
    path: "/exfl",
    element: <EXFL/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();