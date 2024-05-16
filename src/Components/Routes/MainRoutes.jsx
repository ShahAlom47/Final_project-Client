import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import OurMenuPage from "../OurMenuPage/OurMenuPage";

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
      ]
    },
  ]);

  export default router