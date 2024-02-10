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
import About from './component/About';
import Footer from './component/Footer';
import Features from './component/Features';
import SpecialDish from './component/SpecialDish';
import Reservation from './component/Reservation';

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
          },
          {
            path:"about",
            element:<About/>
          },
          {
            path:"footer",
            element:<Footer/>
          },
          {
            path:"features",
            element:<Features/>
          },
         {
          path:"s",
          element:<SpecialDish/>
         },
         {
          path:"reservation",
          element:<Reservation/>
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
