import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Components/Routes/MainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import PrivetRoute from './Components/Routes/PrivetRoute.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <PrivetRoute>
        <RouterProvider router={router} />
      </PrivetRoute>
    </ParallaxProvider>

  </React.StrictMode>,
)
