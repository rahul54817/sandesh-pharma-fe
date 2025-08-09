import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Medicines from './pages/Medicines';
import './App.css'
import MedicineDetails from './pages/MedicineDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Order from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/medicines/:id" element={<MedicineDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
