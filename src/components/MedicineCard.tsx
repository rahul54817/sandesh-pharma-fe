import { Link } from "react-router-dom";
import type { IMedicineProp } from "../types/medicine";
import { useState } from "react";

interface Props extends IMedicineProp {
  onAdd?:  (qty: number) => void;
}

export default function MedicineCard({
  id,
  name,
  price,
  discount,
  image,
  onAdd,
  description,
}: Props) {
  const [quantity, setQuantity] = useState(1);
  const finalPrice = price - (price * discount) / 100;

  const handleAddToCart = () => {
    if (onAdd) {
      onAdd(quantity); // Call the onAdd callback if provided
    }
  };

  return (
    <div
      className="card h-100 border-0 shadow-sm bg-white"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
      }}
    >
      {/* Medicine Image */}
      <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
        <img
          src={image || "/placeholder.png"}
          alt={name}
          className="img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Card Body */}
      <div className="card-body text-center p-3">
        <h5 className="card-title fw-bold text-primary mb-2">
          <Link
            to={`/medicines/${id}`}
            className="text-decoration-none text-primary"
          >
            {name}
          </Link>
        </h5>
        {description && (
          <p className="text-muted small mb-2">{description}</p>
        )}
        <div className="d-flex justify-content-center gap-3 mb-2">
          <p className="mb-0 text-muted">
            <s>₹{price.toFixed(2)}</s>
          </p>
          <p className="mb-0 text-success fw-semibold">{discount}% OFF</p>
        </div>
        <p className="fw-bold text-dark fs-5 mb-3">₹{finalPrice.toFixed(2)}</p>
        
        {/* Quantity Selector */}
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="mx-3 align-self-center">{quantity}</span>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setQuantity(q => q + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer bg-transparent border-0 p-3">
        <button
          className="btn w-100"
          style={{
            background: "linear-gradient(90deg, #0c5360, #127c91)",
            color: "#fff",
            borderRadius: "30px",
            padding: "10px 0",
            fontWeight: "500",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          onClick={handleAddToCart}
        >
          Add to Cart ({quantity})
        </button>
      </div>
    </div>
  );
}