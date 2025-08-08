import { useState } from "react";
import MedicineCard from "../components/MedicineCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { medicineList } from "../types/medicineList";
import { useCart } from "../context/CartContext";

export default function Medicines() {
  const [search, setSearch] = useState("");
  const { addToCart, cart } = useCart();

  const filtered = medicineList.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  )

  

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

          {/* Search Bar */}
          <div className="mb-4 row">
            <div className="col-md-6 mx-auto">
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
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Medicines Grid */}
          <div className="row">
            {filtered.length > 0 ? (
              filtered.map((med, idx) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={idx}>
                  <MedicineCard {...med} onAdd={() => addToCart(med)} />
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No medicines found.</p>
            )}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="mt-5 p-3 rounded shadow-sm bg-light">
              <h5 className="fw-bold text-primary">
                🛒 Cart: {cart.length} item(s)
              </h5>
              <ul className="list-unstyled mb-0">
                {cart.map((item, i) => (
                  <li key={i} className="text-muted">
                    - {item.name} (₹{item.price})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
