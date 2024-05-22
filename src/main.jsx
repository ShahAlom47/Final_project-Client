import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Components/Routes/MainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'

import { ParallaxProvider } from 'react-scroll-parallax'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <ParallaxProvider>
        <RouterProvider router={router} />
    </ParallaxProvider>
    </QueryClientProvider>
   </AuthProvider>

  </React.StrictMode>,
)
