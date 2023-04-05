import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Meals from './Meals';
import About from './About';
import Login from './Login';
import MealDetails from './MealDetails';
import HomePage from './HomePage';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: 'meals',
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      },
      {
        path: 'meal/:idMeal',
        element: <MealDetails></MealDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
