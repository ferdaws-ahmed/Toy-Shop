import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HelmetProvider><AuthProvider> 
      <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </AuthProvider>
    </HelmetProvider>
      

  </StrictMode>,
)























