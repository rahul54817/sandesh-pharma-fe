import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { medicineList } from "../types/medicineList";
import { useCart } from "../context/CartContext"; // ✅ Cart Context import
import { useState } from "react";

export default function MedicineDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Get addToCart function from context

  const [added, setAdded] = useState(false); // ✅ For showing feedback

  const medicine = medicineList.find((med) => med.name === name);

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
    addToCart(medicine);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Remove message after 2 sec
  };

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
            <p className="mb-2">
              <strong>Original Price:</strong>{" "}
              <span className="text-muted">₹{medicine.price}</span>
            </p>
            <p className="mb-2">
              <strong>Discount:</strong>{" "}
              <span className="text-success">{medicine.discount}%</span>
            </p>
            <h4 className="fw-bold text-dark mb-3">
              Final Price: ₹{finalPrice.toFixed(2)}
            </h4>
            <p className="lead mb-4">
              {medicine.description || "No description provided."}
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button
                onClick={handleAddToCart}
                className="btn px-4 py-2 text-white"
                style={{
                  background: "linear-gradient(90deg, #0c5360, #127c91)",
                  borderRadius: "30px",
                }}
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

            {/* Success Message */}
            {added && (
              <p className="mt-3 text-success fw-bold">
                Item added to cart successfully!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
