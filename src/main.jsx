import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Father from './component/Father';
import ProductList from './component/ProductList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Father/>,
    children:[
{
path:'/',
element:<App/>,

},
{
path:'Product',
element:<ProductList/>,

}



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
