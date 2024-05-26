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
import PaymentPage from "../DashBoard/PaymentPage/PaymentPage";
import AdminRoutes from "./AdminRoutes";
import AddItem from "../DashBoard/AddItem/AddItem";
import ManageItem from "../DashBoard/ManageItem/ManageItem";
import UpdateItem from "../DashBoard/ManageItem/UpdateItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenuPage></OurMenuPage>,
      },
      {
        path: "/order/:catName",
        element: <OrderPage></OrderPage>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/signIn",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Register></Register>,
      },
      {
        path: "/dashBoard",
        element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      },
    ]
  },
  {
    path: "/dashBoard",
    element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    errorElement: <ErrorPage />,
    children: [


      {
        path: "/dashBoard/myCart",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
      },
      {
        path: "/dashBoard/payment/:total",
        element: <PaymentPage></PaymentPage>,
      },

      // admin routes 

      {
        path: "/dashBoard/adminHome",
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>,
      },
      {
        path: "/dashBoard/allUsers",
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>,
      },
      {
        path: "/dashBoard/addItem",
        element: <AdminRoutes><AddItem></AddItem></AdminRoutes>,
      },
      {
        path: "/dashBoard/manageItem",
        element: <AdminRoutes><ManageItem></ManageItem></AdminRoutes>,
      },
      {
        path: "/dashBoard/updateItem/:id",
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
      },
    ]

  },

]);

export default router