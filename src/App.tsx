import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Medicines from './pages/Medicines';
import './App.css'
import MedicineDetails from './pages/MedicineDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/medicines" element={<Medicines />} />
         <Route path="/medicines/:name" element={<MedicineDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
