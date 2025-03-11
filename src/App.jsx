import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Collaborate from './pages/Collaborate';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Location from './pages/Location'
import PetProfile from './pages/PetProfile';

function App() {
  return (
    <>
      <Navbar /> 
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