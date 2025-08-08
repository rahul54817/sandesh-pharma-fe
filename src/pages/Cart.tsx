// src/pages/Cart.tsx
import { useCart } from '../context/CartContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cart() {
  const { cart } = useCart()

  const total = cart.reduce((sum, item) => {
    const finalPrice = item.price - (item.price * item.discount) / 100
    return sum + finalPrice
  }, 0)

  return (
    <>
      <Header />
      <section className="py-5 mt-5" style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <div className="container bg-white p-4 rounded shadow mt-5s">
          <h2 className="text-center text-primary fw-bold mb-4 mt-6">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-center">🛒 Your cart is empty.</p>
          ) : (
            <>
              <ul className="list-group mb-4">
                {cart.map((item, idx) => {
                  const finalPrice = item.price - (item.price * item.discount) / 100
                  return (
                    <li className="list-group-item d-flex justify-content-between" key={idx}>
                      <span>{item.name}</span>
                      <span>₹{finalPrice.toFixed(2)}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="text-end">
                <h5>Total: ₹{total.toFixed(2)}</h5>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
