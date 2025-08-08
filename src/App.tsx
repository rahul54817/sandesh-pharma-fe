import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Medicines from './pages/Medicines';
import './App.css'
import MedicineDetails from './pages/MedicineDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/medicines/:name" element={<MedicineDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        contact
      </Routes>
    </BrowserRouter>
  );
};

export default App;
