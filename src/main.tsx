import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext'
import { OrderProvider } from './context/OrderContext.tsx';
import { BlogProvider } from "./context/BlogContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlogProvider>
      <OrderProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </OrderProvider>
    </BlogProvider>
  </StrictMode>,
)
