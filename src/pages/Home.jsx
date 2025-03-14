import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/Home.css";
import catPainting from '../assets/cat.jpg';
import perro from '../assets/perro.jpg';
import gato from '../assets/gato.jpg';
import conejo from '../assets/conejo.jpg';

function Home() {
  const [search, setSearch] = useState({
    species: "",
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  const navigate = useNavigate(); // Hook para manejar la navegación

  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(search).toString();
    navigate(`/search?${queryParams}`); // Redirige a /search en lugar de /adopt
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newDarkMode = !prev;
      document.documentElement.classList.toggle('dark', newDarkMode);
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gray-200 dark:bg-gray-900 transition-all`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Sección principal */}
      <div className="bg-gray-100 dark:bg-gray-800 animate-fade-in pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-down">
                No todos los héroes usan capa, <span className="text-[#9acd32]">algunos tienen patitas.</span>
              </h1>
            </div>
            <div>
              <img src={catPainting} alt="Gato pintando" className="cat-painting smaller-image animate-slide-up" />
            </div>
          </div>

          {/* Formulario de búsqueda */}
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-4 animate-slide-up">
            <div className="relative w-full">
              <input
                type="text"
                name="species"
                value={search.species}
                onChange={handleSearchChange}
                placeholder="Busca tu match perfecto..."
                className="w-full px-6 py-3 rounded-full text-gray-800 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700 placeholder-gray-500 dark:placeholder-gray-300 shadow-sm transition-all duration-300"
                aria-label="Buscar especie"
              />
              <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#9acd32] text-white rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
              aria-label="Buscar"
            >
              <span>Buscar</span>
            </button>
          </form>

          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 animate-slide-down">
            ¡Encontrá a tu compañero ideal!
          </p>
        </div>
      </div>

      {/* Sección de Galería de Mascotas */}
      <section className="gallery-section bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">🐾 Mascotas disponibles 🐾</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/petcard" className="gallery-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
              <img src={perro} alt="Perro" className="w-full h-32 object-contain object-center mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Perro</h3>
            </Link>
            <Link to="/petcard" className="gallery-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
              <img src={gato} alt="Gato" className="w-full h-32 object-contain object-center mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Gato</h3>
            </Link>
            <Link to="/petcard" className="gallery-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
              <img src={conejo} alt="Conejo" className="w-full h-32 object-contain object-center mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Conejo</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios Mejorada */}
      <section className="testimonials-section bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
              <p className="text-gray-800 dark:text-white">"Adoptar a mi perro fue la mejor decisión que tomé. ¡Es tan amoroso!"</p>
              <p className="mt-4 font-semibold text-gray-900 dark:text-white">- Juan Pérez</p>
            </div>
            <div className="testimonial-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
              <p className="text-gray-800 dark:text-white">"Mi gato me ha dado tanto cariño. Gracias por ayudarme a encontrarlo."</p>
              <p className="mt-4 font-semibold text-gray-900 dark:text-white">- María Gómez</p>
            </div>
            <div className="testimonial-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
              <p className="text-gray-800 dark:text-white">"La experiencia de adopción fue increíble. Mi familia está muy feliz."</p>
              <p className="mt-4 font-semibold text-gray-900 dark:text-white">- Pedro López</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
