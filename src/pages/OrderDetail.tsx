// src/pages/OrderDetail.tsx
import { useParams } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const { getOrderById } = useOrder();
  const navigate = useNavigate();
  
  const order = getOrderById(id || "");

  if (!order) {
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
            <div className="text-center bg-white p-5 rounded shadow-sm">
              <p className="lead mb-4">Order not found</p>
              <button
                onClick={() => navigate("/orders")}
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                Back to Orders
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const orderTotal = order.items.reduce((sum, item) => {
    const finalPrice = item.price - (item.price * item.discount) / 100;
    return sum + finalPrice * (item.qty || 1);
  }, 0);

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
          <button
            onClick={() => navigate("/orders")}
            className="btn btn-outline-secondary mb-4"
          >
            ← Back to Orders
          </button>

          <div className="row g-4">
            {/* Order Summary */}
            <div className="col-12 col-lg-8">
              <div className="bg-white p-4 rounded shadow-sm mb-4">
                <h3 className="fw-bold mb-4">Order #{order.id}</h3>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold">Order Details</h5>
                    <p className="mb-1">
                      <strong>Date:</strong> {order.date}
                    </p>
                    <p className="mb-1">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`badge ${
                          order.status === "Delivered"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {order.status}
                      </span>
                    </p>
                    <p className="mb-1">
                      <strong>Payment Method:</strong> {order.paymentMethod}
                    </p>
                    <p className="mb-0">
                      <strong>Total:</strong> ₹{orderTotal.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="col-md-6">
                    <h5 className="fw-bold">Shipping Information</h5>
                    <p className="mb-1">
                      <strong>Name:</strong> {order.shippingInfo.name}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> {order.shippingInfo.email}
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong> {order.shippingInfo.phone}
                    </p>
                    <p className="mb-1">
                      <strong>Address:</strong> {order.shippingInfo.address}
                    </p>
                    <p className="mb-1">
                      <strong>City:</strong> {order.shippingInfo.city}
                    </p>
                    <p className="mb-0">
                      <strong>Pincode:</strong> {order.shippingInfo.pincode}
                    </p>
                  </div>
                </div>

                <h5 className="fw-bold mb-3">Items</h5>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Discount</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, idx) => {
                        const finalPrice =
                          item.price - (item.price * item.discount) / 100;
                        return (
                          <tr key={idx}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={item.image || "/placeholder.png"}
                                  alt={item.name}
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                    marginRight: "10px",
                                  }}
                                />
                                <div>
                                  <strong>{item.name}</strong>
                                  {item.description && (
                                    <p className="small text-muted mb-0">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td>₹{item.price.toFixed(2)}</td>
                            <td>{item.quantity || 1}</td>
                            <td>{item.discount}%</td>
                            <td> ₹{(finalPrice * (item.quantity ?? 1)).toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-12 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="fw-bold mb-3">Order Summary</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>₹{order.total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>₹{order.total}</span>
                </div>
                <div className="mt-4">
                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => alert("Contact support to cancel order")}
                  >
                    Cancel Order
                  </button>
                  <button
                    className="btn btn-outline-secondary w-100"
                    onClick={() => navigate("/")}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}