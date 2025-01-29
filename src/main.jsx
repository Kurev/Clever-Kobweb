import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'

const rounter = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/product', element: <ProductPage />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rounter} />
  </StrictMode>,
)
