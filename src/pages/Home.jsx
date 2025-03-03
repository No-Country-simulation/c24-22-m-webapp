import React from 'react'; // Importamos React explícitamente
import { useState } from 'react';
import { Link } from "react-router-dom"; // Importamos el componente Link para la navegación
import { BsSearch, BsSun, BsMoon } from "react-icons/bs"; // Íconos de búsqueda, sol, y luna
import Navbar from '../components/Navbar'; // Importamos el componente Navbar
import "../styles/Home.css"; // Importamos el archivo CSS separado

// Componente principal de la página de inicio
function Home() {
  // Estado que maneja los filtros de búsqueda de las mascotas
  const [search, setSearch] = useState({
    species: "", // Especie de la mascota
    age: "", // Edad de la mascota
    personality: "", // Personalidad de la mascota
    gender: "", // Sexo de la mascota
    compatibility: "", // Compatibilidad con otros elementos
  });

  // Estado que maneja el modo oscuro de la aplicación
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Se recupera el valor de localStorage para mantener la persistencia del modo oscuro
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  // Función para manejar los cambios en los campos de búsqueda
  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value }); // Actualiza el valor del filtro correspondiente
  };

  // Función para enviar el formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const queryParams = new URLSearchParams(search).toString(); // Convierte el estado de búsqueda en una cadena de parámetros
    window.location.href = `/adopt?${queryParams}`; // Redirige a la página de adopción con los filtros aplicados
  };

  // Función para alternar entre modo oscuro y claro
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newDarkMode = !prev;
      // Cambia la clase del documento para aplicar los estilos del modo oscuro
      document.documentElement.classList.toggle('dark', newDarkMode);
      // Guarda el estado del modo oscuro en localStorage para persistencia
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navbar con modo oscuro */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section con fondo azul y animación de entrada */}
      <div className="bg-blue-300 animate-fade-in py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-down">
            ¡Encuentra a tu compañero ideal en Miau & Gauu!
          </h1>
          {/* Formulario de búsqueda */}
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-4 animate-slide-up">
            <div className="relative w-full">
              <input
                type="text"
                name="species"
                value={search.species}
                onChange={handleSearchChange} // Maneja el cambio en el campo de búsqueda
                placeholder="Busca tu match perfecto..."
                className="w-full px-6 py-3 rounded-full text-gray-800 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 placeholder-gray-500 shadow-sm transition-all duration-300"
              />
              {/* Icono de búsqueda */}
              <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <BsSearch className="text-xl" />
              <span>Buscar</span>
            </button>
          </form>
        </div>
      </div>

      {/* Sección de filtros con fondo azul claro */}
      <section className="bg-blue-300 animate-fade-in py-12">
        <div className="container mx-auto px-4">
          {/* Estructura de filtros en dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Imagen placeholder */}
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center shadow-md animate-slide-left">
              <p className="text-gray-500">Imagen de mascota (placeholder)</p>
            </div>

            {/* Filtros de búsqueda */}
            <div className="bg-blue-700 p-6 rounded-xl shadow-md animate-slide-right">
              <h2 className="text-2xl font-semibold mb-6 text-white">Busca tu match perfecto</h2>
              <div className="space-y-4">
                {/* Filtro de especie */}
                <div className="relative">
                  <label className="block text-white mb-2 text-left">Especie</label>
                  <select
                    name="species"
                    value={search.species}
                    onChange={handleSearchChange} // Actualiza el estado de la especie seleccionada
                    className="w-full p-3 rounded-full bg-gray-200 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 appearance-none shadow-sm transition-all duration-300"
                  >
                    <option value="">Selecciona</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                  </select>
                  <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>

                {/* Filtro de edad */}
                <div className="relative">
                  <label className="block text-white mb-2 text-left">Edad</label>
                  <input
                    type="number"
                    name="age"
                    value={search.age}
                    onChange={handleSearchChange} // Actualiza el estado de la edad seleccionada
                    placeholder="Ej. 2"
                    className="w-full p-3 rounded-full bg-gray-200 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 shadow-sm transition-all duration-300"
                  />
                  <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>

                {/* Filtro de personalidad */}
                <div className="relative">
                  <label className="block text-white mb-2 text-left">Personalidad</label>
                  <select
                    name="personality"
                    value={search.personality}
                    onChange={handleSearchChange} // Actualiza el estado de la personalidad seleccionada
                    className="w-full p-3 rounded-full bg-gray-200 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 appearance-none shadow-sm transition-all duration-300"
                  >
                    <option value="">Selecciona</option>
                    <option value="jugueton">Juguetón</option>
                    <option value="tranquilo">Tranquilo</option>
                  </select>
                  <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>

                {/* Filtro de sexo */}
                <div className="relative">
                  <label className="block text-white mb-2 text-left">Sexo</label>
                  <select
                    name="gender"
                    value={search.gender}
                    onChange={handleSearchChange} // Actualiza el estado del género seleccionado
                    className="w-full p-3 rounded-full bg-gray-200 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 appearance-none shadow-sm transition-all duration-300"
                  >
                    <option value="">Selecciona</option>
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                  </select>
                  <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>

                {/* Filtro de compatibilidad */}
                <div className="relative">
                  <label className="block text-white mb-2 text-left">Compatibilidad</label>
                  <select
                    name="compatibility"
                    value={search.compatibility}
                    onChange={handleSearchChange} // Actualiza el estado de compatibilidad seleccionado
                    className="w-full p-3 rounded-full bg-gray-200 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 appearance-none shadow-sm transition-all duration-300"
                  >
                    <option value="">Selecciona</option>
                    <option value="niños">Con niños</option>
                    <option value="mascotas">Con mascotas</option>
                  </select>
                  <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Secciones de Información */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            {/* Sección de adopción */}
            <div className="bg-blue-700 p-6 rounded-xl shadow-md animate-slide-up">
              <h3 className="text-xl font-semibold mb-4 text-white">Adoptar</h3>
              <p className="text-gray-300 mb-4">
                Encuentra a tu nuevo mejor amigo entre cientos de mascotas que buscan un hogar en Miau & Gauu.
              </p>
              <Link to="/adopt" className="text-blue-600 hover:underline transition-colors duration-300">
                Ver mascotas disponibles →
              </Link>
            </div>

            {/* Sección de colaborar */}
            <div className="bg-blue-700 p-6 rounded-xl shadow-md animate-slide-up delay-100">
              <h3 className="text-xl font-semibold mb-4 text-white">Colaborar</h3>
              <p className="text-gray-300 mb-4">
                Descubre cómo puedes ayudar a los animales necesitados a través de donaciones o voluntariado con Miau & Gauu.
              </p>
              <Link to="/collaborate" className="text-blue-600 hover:underline transition-colors duration-300">
                Más información →
              </Link>
            </div>

            {/* Sección de quienes somos */}
            <div className="bg-blue-700 p-6 rounded-xl shadow-md animate-slide-up delay-200">
              <h3 className="text-xl font-semibold mb-4 text-white">Quiénes Somos</h3>
              <p className="text-gray-300 mb-4">
                Conoce nuestra misión, visión y el equipo detrás de Miau & Gauu.
              </p>
              <Link to="/about" className="text-blue-600 hover:underline transition-colors duration-300">
                Conócenos →
              </Link>
            </div>
          </div>

          {/* Enlace a la ubicación de refugios */}
          <div className="text-center mb-12">
            <Link to="/location" className="text-blue-600 hover:underline text-lg font-semibold transition-colors duration-300">
              ¿Dónde Estamos? → Descubre nuestros refugios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
