// src/pages/Orders.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

export default function Orders() {
  const navigate = useNavigate();
  const { orders } = useOrder(); // Get orders from context

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
          <h2 className="text-center fw-bold mb-5 text-primary">📦 My Orders</h2>

          {orders.length === 0 ? (
            <div className="text-center bg-white p-5 rounded shadow-sm">
              <p className="lead mb-4">You have no orders yet.</p>
              <button
                onClick={() => navigate("/")}
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {orders.map((order, idx) => {

                return (
                  <div
                    key={idx}
                    className="col-12 bg-white rounded shadow-sm p-4"
                    style={{
                      borderLeft: "5px solid #127c91",
                    }}
                  >
                    {/* Order Header */}
                    <div className="d-flex flex-wrap justify-content-between mb-3">
                      <div>
                        <h5 className="mb-1 fw-bold">Order ID: {order.id}</h5>
                        <p className="mb-0 text-muted">Date: {order.date}</p>
                      </div>
                      <span
                        className={`badge px-3 py-2 rounded-pill ${
                          order.status === "Delivered"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                        style={{ fontSize: "0.7rem" }}
                      >
                        {order.status || "Pending"}
                      </span>
                    </div>

                    {/* Order Items */}
                    <div
                      style={{
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {order.items.map((item, i) => {
                        const finalPrice =
                          item.price - (item.price * item.discount) / 100;

                        return (
                          <div
                            key={i}
                            className="d-inline-flex align-items-center bg-light rounded shadow-sm p-3 me-3 mb-3"
                            style={{
                              minWidth: "250px",
                              transition: "transform 0.2s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.transform = "scale(1.02)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          >
                            {/* Product Image */}
                            <div
                              style={{
                                width: "60px",
                                height: "60px",
                                overflow: "hidden",
                                borderRadius: "10px",
                              }}
                              className="me-3"
                            >
                              <img
                                src={item.image || "/placeholder.png"}
                                alt={item.name}
                                className="img-fluid"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>

                            {/* Product Info */}
                            <div>
                              <h6 className="mb-1">{item.name}</h6>
                              <small className="text-muted">
                                Qty: {item.quantity || 1} | Discount: {item.discount}%
                              </small>
                              <p className="fw-bold text-success mb-0">
                                 ₹{(finalPrice * (item.quantity ?? 1)).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Order Footer */}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <strong>Total: ₹{order.total}</strong>
                      <button
                        className="btn btn-outline-primary rounded-pill px-4"
                       onClick={() => navigate(`/orders/${order.id}`)} // You can implement order details page later
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}