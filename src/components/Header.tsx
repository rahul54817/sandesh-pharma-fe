import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/logo6.png'
import { useCart } from '../context/CartContext'


export default function Header() {
  const { cart } = useCart()
  return (
    <header
      className=" shadow-sm fixed-top"
      style={{
        background: '#0c5360ff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1030
      }}
    >
      <nav className="navbar navbar-expand-md navbar-dark container py-2">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Sandesh Pharma" height="70" className="ms-2" />
          {/* <span className="fw-bold fs-5 ms-3">Sandesh Pharma</span> */}
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon me-4"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/medicines" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upload-prescription">
                <i className="bi bi-prescription me-1"></i>
                Upload Prescription
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-item d-md-flex justify-content-md-center">
              <Link
                to="/cart"
                className="nav-link position-relative d-block text-center mx-md-2"
              >
                <i className="bi bi-cart3 fs-5"></i>

                {cart.length > 0 && (
                  <span
                    className="position-absolute top-0 start-80 translate-middle-x badge rounded-pill bg-danger"
                    style={{ top: '10px' }}
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-light btn-sm ms-md-3 mt-2 mt-md-0">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
