import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { medicineList } from '../types/medicineList'

export default function MedicineDetails() {
  const { name } = useParams()
  const navigate = useNavigate()

  const medicine = medicineList.find((med) => med.name === name)

  if (!medicine) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center">
          <h4>Medicine not found</h4>
          <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
        <Footer />
      </>
    )
  }

  const finalPrice = medicine.price - (medicine.price * medicine.discount) / 100

  return (
    <>
      <Header />
      <div className="container py-5">
        <h2 className="text-primary">{medicine.name}</h2>
        <p><strong>Original Price:</strong> ₹{medicine.price}</p>
        <p><strong>Discount:</strong> {medicine.discount}%</p>
        <p><strong>Final Price:</strong> ₹{finalPrice.toFixed(2)}</p>
        <p><strong>Description:</strong> {medicine.description || 'No description provided.'}</p>

        <button className="btn btn-gradient mt-4" onClick={() => navigate(-1)}>
          ← Back to List
        </button>
      </div>
      <Footer />
    </>
  )
}
