import { Link } from "react-router-dom"
import type { IMedicineProp } from "../types/medicine"

interface Props extends IMedicineProp {
  onAdd?: () => void
}

export default function MedicineCard({ name, price, discount, onAdd }: Props) {
  const finalPrice = price - (price * discount) / 100

  return (
    <div
      className="card h-100 border-0 shadow-sm"
      style={{ borderRadius: '1rem', transition: '0.3s' }}
    >
      <div className="card-body">
         <h5 className="card-title fw-bold text-primary">
          <Link to={`/medicines/${name}`} className="text-decoration-none text-primary">
            {name}
          </Link>
        </h5>
        <p className="mb-1">Price: ₹{price}</p>
        <p className="mb-1 text-success">Discount: {discount}%</p>
        <p className="fw-bold text-dark">Final Price: ₹{finalPrice.toFixed(2)}</p>
      </div>
      <div className="card-footer bg-transparent border-0">
        <button className="btn btn-gradient w-100" onClick={onAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
