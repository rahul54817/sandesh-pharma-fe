// src/context/OrderContext.tsx
import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import type { IOrder } from "../types/order"

interface OrderContextType {
    orders: IOrder[]
    addOrder: (order: Omit<IOrder, 'id' | 'date' | 'status'>) => void
    getOrderById: (id: string) => IOrder | undefined
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
    const [orders, setOrders] = useState<IOrder[]>(() => {
        const saved = localStorage.getItem("orders")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders))
    }, [orders])

    const addOrder = (order: Omit<IOrder, 'id' | 'date' | 'status'>) => {
        const newOrder: IOrder = {
            ...order,
            id: `ORD${Date.now()}`,
            date: new Date().toISOString().split('T')[0],
            status: "Pending" // default status
        }
        setOrders((prev) => [newOrder, ...prev])
    }

    const getOrderById = (id: string) => {
        return orders.find(order => order.id === id)
    }

    return (
        <OrderContext.Provider value={{ orders, addOrder, getOrderById }}>
            {children}
        </OrderContext.Provider>
    )
}

export function useOrder() {
    const context = useContext(OrderContext)
    if (!context) {
        throw new Error("useOrder must be used within OrderProvider")
    }
    return context
}