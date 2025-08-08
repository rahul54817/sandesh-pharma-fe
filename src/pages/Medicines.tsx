import { useState } from 'react'
import MedicineCard from '../components/MedicineCard'
import type { IMedicineProp } from '../types/medicine'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { medicineList } from '../types/medicineList'
import { useCart } from '../context/CartContext'

// const medicineList: IMedicineProp[] = [
//   { name: 'Paracetamol', price: 50, discount: 10 },
//   { name: 'Amoxicillin', price: 120, discount: 15 },
//   { name: 'Cetirizine', price: 30, discount: 5 },
//   { name: 'Metformin', price: 90, discount: 20 },
//   { name: 'Dolo 650', price: 60, discount: 8 },
// ]

export default function Medicines() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState<IMedicineProp[]>([])
  const { addToCart } = useCart()

  const filtered = medicineList.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  )

  

  return (
    <>
      <Header />
      <section
        className="py-5"
        style={{
          minHeight: '100vh',
          paddingTop: '80px'
        }}
      >
        <div className="container bg-white p-4 rounded shadow">
          <h2 className="text-center text-primary fw-bold mb-4 mt-5">Medicine List</h2>

          <div className="mb-4 row">
            <div className="col-md-6 mx-auto">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search medicines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            {filtered.map((med, idx) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4" key={idx}>
                <MedicineCard {...med} onAdd={() => addToCart(med)} />
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h5 className="fw-bold">🛒 Cart: {cart.length} item(s)</h5>
            {cart.map((item, i) => (
              <div key={i}>
                - {item.name} (₹{item.price})
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

