
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ProtectedRoute from './Pages/Auth/ProtectedRoute';
import Index from './Pages/Home/Index';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/appointment' element={
        <ProtectedRoute>
          <Appointment />
        </ProtectedRoute>
      } />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
