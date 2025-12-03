import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './Components/ThemeContext/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HelmetProvider><AuthProvider> 
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </ThemeProvider>
    </AuthProvider>
    </HelmetProvider>
      

  </StrictMode>,
)























