// src/context/CartContext.tsx
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { IMedicineProp } from '../types/medicine'

interface CartContextType {
  cart: IMedicineProp[]
  addToCart: (item: IMedicineProp) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<IMedicineProp[]>([])

  const addToCart = (item: IMedicineProp) => {
    setCart((prev) => [...prev, item])
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}