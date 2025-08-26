// src/context/CartContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { ICartItem, IMedicineProp } from '../types/medicine'

interface CartItem extends IMedicineProp {
  quantity: number,
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: ICartItem) => void
  clearCart: () => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, qty: number) => void   // ✅ Added here
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: ICartItem) => {
    setCart(prev => {
    const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
      );
  }
    return [...prev, item];
  });
};

  const increaseQuantity = (id: string) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id: string) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    )
  }

  const updateQuantity = (id: string, qty: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        updateQuantity,   // ✅ Provided here
      }}
    >
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
