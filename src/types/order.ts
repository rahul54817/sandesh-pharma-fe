// src/types/order.ts
export interface IOrderItem {
  id?: string;
  name: string;
  image?: string;
  price: number;
  qty: number;
  discount: number;
}

export interface IShippingInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

// src/types/order.ts
export interface IOrder {
  id: string;
  date: string;
  status: string;
  shippingInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
  };
  items: Array<{
    id?: string;
    name: string;
    image?: string;
    price: number;
    qty: number;
    discount: number;
    description?: string;
    quantity ?: number
  }>;
  total: number;
  paymentMethod: string;
}