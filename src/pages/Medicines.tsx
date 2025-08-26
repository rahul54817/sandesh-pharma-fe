import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { medicineList } from "../types/medicineList";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Medicines() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  const filtered = medicineList.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header />
      <section
        className="py-5"
        style={{
          minHeight: "100vh",
          paddingTop: "80px",
          backgroundColor: "#f9fafb",
        }}
      >
        <div className="container bg-white p-4 rounded shadow">
          <h2 className="text-center text-primary fw-bold mb-4 mt-5">
            💊 Explore Our Medicines
          </h2>
          <p className="text-center text-muted mb-5">
            High-quality, affordable, and effective healthcare solutions.
          </p>

          {/* Search Bar with Dropdown */}
          <div className="mb-4 row relative">
            <div className="col-md-6 mx-auto relative">
              <input
                type="text"
                className="form-control"
                style={{
                  borderRadius: "50px",
                  padding: "12px 20px",
                  border: "1px solid #ccc",
                }}
                placeholder="🔍 Search medicines..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowDropdown(true);
                }}
              />

              {/* Dropdown Suggestions */}
              {showDropdown && search && (
                <ul
                  className="absolute w-100 bg-white border border-primary rounded-3 shadow mt-2 z-10 max-h-60 overflow-y-auto"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  {filtered.length > 0 ? (
                    filtered.map((med) => (
                      <li
                        key={med.id}
                        className="px-4 py-2"
                        style={{
                          transition: "all 0.2s ease-in-out",
                          cursor: "pointer",
                        }}
                        onMouseDown={() => {
                          setSearch(med.name);
                          setShowDropdown(false);
                          navigate(`/medicines/${med.id}`);
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#e6f0ff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "white")
                        }
                      >
                        <span className="fw-semibold text-primary">
                          {med.name}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-muted">No results found</li>
                  )}
                </ul>
              )}
            </div>
          </div>

          {/* Medicines Grid */}
          <div className="row">
            {filtered.map((med) => (
              <div
                className="col-12 col-sm-6 col-md-4 mb-4"
                key={med.id}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/medicines/${med.id}`)}
              >
                <div
                  className="card shadow-sm border-0 h-100"
                  style={{ minHeight: "260px" }} // slightly reduced card height
                >
                  <img
                    src={med.image}
                    alt={med.name}
                    className="card-img-top"
                    style={{
                      height: "150px",
                      objectFit: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">{med.name}</h5>
                    <p className="card-text text-success fw-semibold">
                      ₹{(
                        med.price -
                        (med.price * med.discount) / 100
                      ).toFixed(2)}{" "}
                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{med.price.toFixed(2)}
                      </span>{" "}
                      <span className="text-danger">({med.discount}% OFF)</span>
                       <p className={`fw-semibold ${med.stock > 0 ? "text-secondary" : "text-danger"}`}>
    {med.stock > 0 ? `In Stock: ${med.stock}` : "Out of Stock"}
  </p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="mt-5 p-3 rounded shadow-sm bg-light">
              <h5 className="fw-bold text-primary">
                🛒 Cart: {totalItems} item(s)
              </h5>
              <ul className="list-unstyled mb-0">
                {cart.map((item, i) => {
                  const discountedPrice =
                    item.price - (item.price * item.discount) / 100;
                  return (
                    <li key={i} className="text-muted mb-1">
                      - {item.name} × {item.quantity} :{" "}
                      <span className="text-success fw-semibold">
                        ₹{discountedPrice.toFixed(2)}
                      </span>{" "}
                      <span className="text-decoration-line-through text-secondary">
                        ₹{item.price.toFixed(2)}
                      </span>{" "}
                      <span className="text-danger">({item.discount}% OFF)</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
