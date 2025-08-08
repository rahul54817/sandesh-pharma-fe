import { Link } from "react-router-dom";
import type { IMedicineProp } from "../types/medicine";

interface Props extends IMedicineProp {
  onAdd?: () => void;
}

export default function MedicineCard({ name, price, discount, image, onAdd }: Props) {
  
  const finalPrice = price - (price * discount) / 100;

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
          src= {`${image}`}
          alt={name}
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
            to={`/medicines/${name}`}
            className="text-decoration-none text-primary"
          >
            {name}
          </Link>
        </h5>
        <p className="mb-1 text-muted">
          Price: <span className="fw-semibold">₹{price}</span>
        </p>
        <p className="mb-1 text-success fw-semibold">Discount: {discount}%</p>
        <p className="fw-bold text-dark fs-5 mb-0">₹{finalPrice.toFixed(2)}</p>
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
          onClick={onAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
