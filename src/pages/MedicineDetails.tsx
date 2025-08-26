import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { medicineList } from "../types/medicineList";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export default function MedicineDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [medicine, setMedicine] = useState(
    medicineList.find((med) => med.id === id) || null
  );
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const med = medicineList.find((m) => m.id === id) || null;
    setMedicine(med);
    setQuantity(0);
    setAdded(false);
  }, [id]);

  if (!medicine) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center mt-6">
          <h4>Medicine not found</h4>
          <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const finalPrice =
    medicine.price - (medicine.price * medicine.discount) / 100;

  const handleAddToCart = () => {
    const cartItem = { ...medicine, quantity };
    addToCart(cartItem);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const suggestions = medicineList.filter(
    (med) => med.category === medicine.category && med.id !== medicine.id
  );

  return (
    <>
      <Header />
      <div className="container py-5" style={{ marginTop: "75px" }}>
        <div className="row align-items-center g-5">
          {/* Medicine Image */}
          <div className="col-12 col-md-5 text-center">
            <div
              style={{
                overflow: "hidden",
                borderRadius: "15px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={medicine.image}
                alt={medicine.name}
                className="img-fluid"
                style={{
                  transition: "transform 0.4s ease",
                  cursor: "zoom-in",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          </div>

          {/* Medicine Details */}
          <div className="col-12 col-md-7">
            <h2 className="text-primary fw-bold mb-3">{medicine.name}</h2>

            <h4 className="fw-bold text-dark mb-3">
              ₹{finalPrice.toFixed(2)}{" "}
              <span className="text-muted text-decoration-line-through ms-2">
                ₹{medicine.price.toFixed(2)}
              </span>{" "}
              <span className="text-danger">({medicine.discount}% OFF)</span>
            </h4>
            <p className="mb-3">
              {medicine.stock > 0 ? (
                <span className="text-success fw-semibold">
                  In Stock: {medicine.stock} strips
                </span>
              ) : (
                <span className="text-danger fw-bold">Out of Stock</span>
              )}
            </p>


            <p className="lead mb-4">
              {medicine.description || "No description provided."}
            </p>

            {/* Pack Info */}
            <p className="text-sm text-gray-600 mb-3">
              Per strip of {medicine.packInfo}  tablets
            </p>

            {/* Quantity Selector */}
            <div className="mb-3 d-flex align-items-center gap-3">
              <label className="fw-semibold">Quantity (Strips):</label>
              <input
                type="number"
                min="0"
                max={medicine.stock}   // ✅ Prevent exceeding stock
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.min(medicine.stock, Math.max(0, parseInt(e.target.value) || 0))
                  )
                }
                className="form-control"
                style={{
                  width: "100px",
                  borderRadius: "30px",
                  textAlign: "center",
                }}
                disabled={medicine.stock === 0}
              />
              <span className="fw-semibold text-muted">
                = {quantity * medicine.packInfo} tablets
              </span>
            </div>


            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button
                onClick={handleAddToCart}
                className="btn px-4 py-2 text-white"
                style={{
                  background: "linear-gradient(90deg, #0c5360, #127c91)",
                  borderRadius: "30px",
                }}
                disabled={quantity < 1 || medicine.stock === 0} // ✅ Disable if no stock
              >
                {added ? "✅ Added!" : "Add to Cart"}
              </button>
              <button
                className="btn btn-outline-primary px-4 py-2"
                style={{ borderRadius: "30px" }}
                onClick={() => navigate(-1)}
              >
                ← Back to List
              </button>
            </div>

            {added && (
              <p className="mt-3 text-success fw-bold">
                {quantity} strip(s) = {quantity * 10} tablets added to cart successfully!
              </p>
            )}
          </div>
        </div>

        {/* Suggested Medicines */}
        {suggestions.length > 0 && (
          <div className="mt-5">
            <h3 className="fw-bold text-dark mb-4">You may also like</h3>
            <div className="row g-4">
              {suggestions.map((med) => {
                const discountedPrice =
                  med.price - (med.price * med.discount) / 100;
                return (
                  <div key={med.id} className="col-12 col-sm-6 col-md-4">
                    <div className="card h-100 shadow-sm">
                      <img
                        src={med.image}
                        className="card-img-top"
                        alt={med.name}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{med.name}</h5>
                        <p className="card-text text-success fw-semibold">
                          ₹{discountedPrice.toFixed(2)}{" "}
                          <span className="text-muted text-decoration-line-through ms-2">
                            ₹{med.price.toFixed(2)}
                          </span>{" "}
                          <span className="text-danger">
                            ({med.discount}% OFF)
                          </span>
                        </p>
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => navigate(`/medicines/${med.id}`)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
