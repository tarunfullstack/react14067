import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import {Link} from "react-router-dom";
import './index.css';
import App from './App';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import Books from './features/books/Books';

import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Counter from './features/counter/Counter';
import CountryDetails from './features/countries/countryDetails';
import AddBook from './features/books/Addbook';
import UpdateBook from './features/books/Updatebook';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
        path:"/counter",
        element:<Counter/>,
      },
      {
        path:"/todolist",
        element:<Todolist/>,
      },
      {
        path:"/countries",
        element:<Countries/>,
        children:[
          {
          path:"/countries/:cname",
          element:<CountryDetails/>
  
        }]
      },
      {
        path:"/books",
        element:<Books></Books>,
        children:
        [
          {
          path:"/books/addbook",
          element:<AddBook></AddBook>
         },
         {
          path:"/books/update",
          element:<UpdateBook/>
         },

        ]
      }
    ]
    }
  ]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
