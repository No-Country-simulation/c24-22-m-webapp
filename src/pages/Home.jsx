import React, { useState } from 'react'; 
import { BsSearch } from "react-icons/bs"; 
import { Link } from "react-router-dom"; 
import Navbar from '../components/Navbar'; 
import "../styles/Home.css"; 

function Home() {
  // Estado para el formulario de búsqueda
  const [search, setSearch] = useState({
    species: "", 
    age: "", 
    personality: "", 
    gender: "", 
    compatibility: "", 
  });

  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  // Manejar cambios en el formulario de búsqueda
  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(search).toString();
    window.location.href = `/adopt?${queryParams}`;
  };

  // Alternar el modo oscuro
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-down">
            ¡Encuentra a tu compañero ideal en <span className="text-[#9acd32]">Guau & Miau</span>!
          </h1>

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
              {/* <BsSearch className="text-xl" /> */}
              <span>Buscar</span>
            </button>
          </form>
        </div>
      </div>

      {/* Sección de opciones de búsqueda */}
      <section className="bg-gray-100 dark:bg-gray-800 animate-fade-in py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#e8eef4] dark:bg-gray-700 h-64 rounded-xl flex items-center justify-center shadow-md animate-slide-left">
              <p className="text-gray-500 dark:text-gray-300">Imagen de mascota (placeholder)</p>
            </div>

            <div className="bg-[#e8eef4] dark:bg-gray-700 p-6 rounded-xl shadow-md animate-slide-right">
              <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Busca tu match perfecto</h2>
              <div className="space-y-4">
                {/* Selector de especie */}
                <div className="relative">
                  <label className="block text-black dark:text-white mb-2 text-left">Especie</label>
                  <select
                    name="species"
                    value={search.species}
                    onChange={handleSearchChange}
                    className="w-full p-3 rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 appearance-none shadow-sm transition-all duration-300"
                    aria-label="Selecciona especie"
                  >
                    <option value="">Selecciona</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                  </select>
                </div>

                {/* Campo de edad */}
                <div className="relative">
                  <label className="block text-black dark:text-white mb-2 text-left">Edad</label>
                  <input
                    type="number"
                    name="age"
                    value={search.age}
                    onChange={handleSearchChange}
                    placeholder="Ej. 2"
                    className="w-full p-3 rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 shadow-sm transition-all duration-300"
                    aria-label="Edad de la mascota"
                  />
                </div>

                {/* Selector de personalidad */}
                <div className="relative">
                  <label className="block text-black dark:text-white mb-2 text-left">Personalidad</label>
                  <select
                    name="personality"
                    value={search.personality}
                    onChange={handleSearchChange}
                    className="w-full p-3 rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 appearance-none shadow-sm transition-all duration-300"
                    aria-label="Selecciona personalidad"
                  >
                    <option value="">Selecciona</option>
                    <option value="jugueton">Juguetón</option>
                    <option value="tranquilo">Tranquilo</option>
                  </select>
                </div>
              </div>
              <Link to="/adopt" className="block text-center mt-4 py-2 bg-[#9acd32] text-white rounded-full hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
                Ver más mascotas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;