import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './contexts/DataContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import {Toaster} from "react-hot-toast"
import { CartProvider } from './contexts/CartContext.jsx'
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DataProvider>
    <CartProvider>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
      <Toaster position='top-right'/>
      </ClerkProvider>
      </CartProvider>
  </DataProvider>
  </StrictMode>,
)
