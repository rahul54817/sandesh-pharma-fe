import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext'
import { OrderProvider } from './context/OrderContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrderProvider>
    <CartProvider>
        <App />
    </CartProvider>

    </OrderProvider>
  </StrictMode>,
)
