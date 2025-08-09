import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useOrder } from "../context/OrderContext";
import type { IOrder } from "../types/order";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrder();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const total = cart.reduce((sum, item) => {
    const finalPrice = item.price - (item.price * item.discount) / 100;
    return sum + finalPrice * (item.quantity || 1);
  }, 0);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    const order: IOrder = {
      id: `ORD${Date.now()}`, // Generate a unique order ID
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      status: "Pending", // Default status
      shippingInfo: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
      },
      items: cart.map(item => ({
        ...item,
        qty: 1, // Or use item.qty if you have quantity in cart
      })),
      total,
      paymentMethod: formData.payment,
    };

    addOrder(order);
    clearCart();
    navigate("/orders");
  };

  return (
    <>
      <Header />
      <section
        className="py-5"
        style={{
          minHeight: "100vh",
          paddingTop: "90px",
          background: "#f5f7fa",
        }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">
            🧾 Checkout
          </h2>

          <div className="row g-4">
            {/* Shipping Details */}
            <div className="col-12 col-lg-8">
              <div
                className="bg-white p-4 rounded shadow-sm"
                style={{ borderLeft: "5px solid #127c91" }}
              >
                <h4 className="fw-bold mb-3">Shipping Information</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter pincode"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control"
                      rows={2}
                      placeholder="Enter your full address"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter city"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div
                className="bg-white p-4 rounded shadow-sm mt-4"
                style={{ borderLeft: "5px solid #127c91" }}
              >
                <h4 className="fw-bold mb-3">Payment Method</h4>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.payment === "cod"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Cash on Delivery (COD)
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.payment === "card"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Credit/Debit Card</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={formData.payment === "upi"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">UPI Payment</label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-12 col-lg-4">
              <div
                className="bg-white p-4 rounded shadow-sm"
                style={{ borderTop: "5px solid #127c91" }}
              >
                <h4 className="fw-bold mb-3">Order Summary</h4>
                {cart.map((item, idx) => {
                  const finalPrice =
                    item.price - (item.price * item.discount) / 100;
                  const itemTotal = finalPrice * (item.quantity || 1); 
                  return (
                    <div
                      key={idx}
                      className="d-flex justify-content-between mb-2"
                    >
                      <span>{item.name} × {item.quantity || 1}</span>
                      <span>₹{itemTotal.toFixed(2)}</span>
                    </div>
                  );
                })}
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="btn btn-success w-100 py-2 mt-3 rounded-pill fw-bold"
                  style={{
                    background: "linear-gradient(90deg, #0c5360, #127c91)",
                    border: "none",
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
