import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => {
    const finalPrice = item.price - (item.price * item.discount) / 100;
    return sum + finalPrice;
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
          <h2 className="text-center fw-bold mb-5 text-primary">
            🛒 Your Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <div className="text-center bg-white p-5 rounded shadow-sm">
              <p className="lead mb-4">Your cart is empty.</p>
              <button
                onClick={() => navigate("/")}
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {/* Cart Items */}
              <div className="col-12 col-lg-8">
                <div
                  style={{
                    maxHeight: "500px", // limit visible height
                    overflowY: "auto", // vertical scroll
                    paddingRight: "5px", // avoid content cut-off
                  }}
                >
                  {cart.map((item, idx) => {
                    const finalPrice =
                      item.price - (item.price * item.discount) / 100;

                    return (
                      <div
                        key={idx}
                        className="d-flex align-items-center bg-white rounded shadow-sm p-3 mb-3 flex-wrap flex-md-nowrap"
                        style={{
                          borderLeft: "5px solid #127c91",
                          transition: "transform 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.01)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        {/* Product Image */}
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
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
                        <div className="flex-grow-1">
                          <h5 className="mb-1">{item.name}</h5>
                          <p className="mb-1 text-muted">
                            Discount: {item.discount}%
                          </p>
                          <p className="fw-bold text-success mb-0">
                            ₹{finalPrice.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity */}
                        <div className="ms-auto mt-3 mt-md-0">
                          <input
                            type="number"
                            min="1"
                            defaultValue={1}
                            className="form-control"
                            style={{ width: "70px" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Summary Section */}
              <div className="col-12 col-lg-4">
                <div
                  className="bg-white p-4 rounded shadow-sm"
                  style={{ borderTop: "5px solid #127c91" }}
                >
                  <h4 className="fw-bold mb-3">Order Summary</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Items:</span>
                    <span>{cart.length}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total Price:</span>
                    <span className="fw-bold">₹{total.toFixed(2)}</span>
                  </div>
                  <button
                    className="btn btn-success w-100 py-2 rounded-pill fw-bold"
                    style={{
                      background: "linear-gradient(90deg, #0c5360, #127c91)",
                      border: "none",
                    }}
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="btn btn-outline-primary w-100 mt-3 py-2 rounded-pill"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
