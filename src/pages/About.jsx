// pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Importamos íconos de react-icons para hacer la interfaz más visual y atractiva
import { FaPaw, FaHeart, FaHome, FaHandshake } from 'react-icons/fa';

/**
 * Página "Acerca de Nosotros" de la aplicación.
 * Contiene información sobre la organización, su misión y visión.
 */
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Sección: Quiénes Somos */}
        <div className="w-full p-6 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
            <FaPaw className="text-blue-500" /> Quiénes Somos
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            En <span className="font-semibold text-blue-600 dark:text-blue-400">Guau & Miau 🐶🐱</span>, nuestra misión es conectar mascotas necesitadas con hogares llenos de amor. ❤️
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Somos un equipo apasionado por el bienestar animal, colaborando con refugios para hacer realidad miles de adopciones exitosas. 🏡✨
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Nos aseguramos de que cada mascota reciba el cuidado necesario hasta encontrar su familia ideal. ¡Cada adopción es una historia de amor! 💕
          </p>
        </div>

        {/* Sección: Misión y Visión */}
        <div className="w-full p-6 flex flex-col justify-center bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <FaHeart className="text-red-500" /> Nuestra Misión y Visión
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            💡 Nuestra misión es mejorar la vida de las mascotas sin hogar y promover la <span className="font-semibold text-blue-600 dark:text-blue-400">adopción responsable</span>. 🐕🐾
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            🤝 Trabajamos con refugios y organizaciones para dar segundas oportunidades a miles de peludos en busca de un hogar. 🏡💙
          </p>
          {/* Botón para redirigir a la página de contacto */}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaHandshake /> Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
