
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './Form';
import ScoreCard from './ScoreCard';
import Vacation from './Vacation'; 
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path: "/for",
        element: <Form></Form>,
      },
      {
        path: "/asd",
        element: <ScoreCard></ScoreCard>,
      },
      {
        path : "/zxc",
        element: <Vacation></Vacation>
      }
    ]
  },
  
  

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

