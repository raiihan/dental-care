
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Index from './Pages/Home/Index';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
