import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import logo from '../assets/logo6.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email && password) {
      navigate('/medicines')
    }
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
       
      >
        <div
          className="card shadow p-4"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '12px' }}
        >
          <div className="text-center mb-4">
            <img src={logo} alt="Sandesh Pharma" height="75" className="mb-2" />
            <h4 className="fw-bold">LOGIN</h4>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button
            className="btn w-100 mb-3"
            style={{ backgroundColor: '#0c5360ff', color: '#fff' }}
            onClick={handleLogin}
          >
            LOGIN
          </button>

          <div className="text-center text-muted mb-2">Or login with</div>

          <div className="d-flex justify-content-between gap-2 mb-3">
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-facebook me-1" /> Facebook
            </button>
            <button className="btn btn-outline-danger w-100">
              <i className="bi bi-google me-1" /> Google
            </button>
          </div>

          <div className="text-center">
            <small>
              Not a member?{' '}
              <a href="#" className="text-decoration-none">
                Sign up now
              </a>
            </small>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
