import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Counter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './Counter';
import CategoryHome from './Component';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/Counter',
    element: <Counter></Counter>
  },
  {
    path: '/component',
    element: <CategoryHome></CategoryHome>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>  </React.StrictMode>
);

