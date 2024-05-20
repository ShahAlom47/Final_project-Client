import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import OurMenuPage from "../OurMenuPage/OurMenuPage";
import OrderPage from "../OrderPage/OrderPage";
import ContactUs from "../ContactUs/ContactUs";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import DashBoard from "../DashBoard/DashBoard";
import PrivetRoute from "./PrivetRoute";
import AdminHome from "../DashBoard/AdminHome/AdminHome";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import MyCart from "../DashBoard/MyCart/MyCart";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage />,
      children:[

        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: "/our-menu",
            element:<OurMenuPage></OurMenuPage>,
        },
        {
            path: "/order/:catName",
            element:<OrderPage></OrderPage>,
        },
        {
            path: "/contact",
            element:<ContactUs></ContactUs>,
        },
        {
            path: "/signIn",
            element:<Login></Login>,
        },
        {
            path: "/signUp",
            element:<Register></Register>,
        },
        {
            path: "/dashBoard",
            element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        },
      ]
    },
    {
      path: "/dashBoard",
      element:<DashBoard></DashBoard>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/dashBoard",
          element:<AdminHome></AdminHome>,
        },
        {
          path: "/dashBoard/allUsers",
          element:<AllUsers></AllUsers>,
        },
        {
          path: "/dashBoard/myCart",
          element:<MyCart></MyCart>,
        },
      ]

    },
    
  ]);

  export default router