import React from 'react'; // Importamos React explícitamente
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importamos Navbar
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Collaborate from './pages/Collaborate';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PetProfile from './pages/PetProfile';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar aparece en todas las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="location" element={<Location/>} />
        <Route path="petprofile" element={<PetProfile/>} />
      </Routes>
    </>
  );
}

export default App;