import React, { Children, useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashbord from './component/Dashbord';
import Main from './component/Main';
import Service from './component/Service';
import AllMenu from './component/AllMenu';

function App() {
  const router = createBrowserRouter([
    {
      // Root route
      path: "/",
      element: <Dashbord /> ,
      children:[
        {
          index:true,
          element:<Main/>
        },
        {
          path:"service",
          element:<Service/>
        },
          {
            path:"route/:type",
            element:<AllMenu/>
          }
      ]
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}
export default App
