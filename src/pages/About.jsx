import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaHeart, FaHandshake, FaHome, FaDog, FaCat } from 'react-icons/fa';

function About() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden my-8">
        {/* Header con efecto de onda */}
        <div className="relative bg-[#9acd32] h-24 sm:h-32 flex items-center justify-center">
          <div className="absolute w-full bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="dark:hidden">
            <FaPaw className="text-white text-5xl sm:text-6xl animate-bounce" />
          </div>
          <div className="hidden dark:block">
            <FaPaw className="text-gray-900 text-5xl sm:text-6xl animate-bounce" />
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Sección: Quiénes Somos */}
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <FaPaw className="text-[#9acd32] text-3xl sm:text-4xl md:text-5xl" /> 
              <span>Quiénes Somos</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                En <span className="font-bold text-[#9acd32] dark:text-blue-400">Guau & Miau</span> 
                <span className="inline-flex items-center ml-2">
                  <FaDog className="text-[#9acd32] mr-1" /> 
                  <FaCat className="text-[#9acd32]" />
                </span>, somos un equipo apasionado dedicado a conectar mascotas sin hogar con familias amorosas.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                Colaboramos con refugios y voluntarios para garantizar que cada animal reciba el cuidado que merece mientras encuentra su hogar ideal.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                Cada historia de adopción es un testimonio de amor y esperanza, y estamos aquí para hacer que esas historias sigan creciendo.
              </p>
            </div>
            
            {/* Tarjetas de valores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 sm:mt-8">
              <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <div className="flex justify-center mb-2">
                  <FaHeart className="text-red-500 text-2xl" />
                </div>
                <h3 className="text-center font-bold text-gray-800 dark:text-white">Amor</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm">Por cada mascota</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <div className="flex justify-center mb-2">
                  <FaHandshake className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-center font-bold text-gray-800 dark:text-white">Compromiso</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm">Con su bienestar</p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <div className="flex justify-center mb-2">
                  <FaHome className="text-yellow-500 text-2xl" />
                </div>
                <h3 className="text-center font-bold text-gray-800 dark:text-white">Hogar</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm">Para cada uno</p>
              </div>
            </div>
          </div>

          {/* Sección: Misión y Visión */}
          <div className="w-full flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <FaHeart className="text-red-500 text-2xl sm:text-3xl md:text-4xl animate-pulse" /> 
              <span>Nuestra Misión</span>
            </h2>
            
            <div className="space-y-4 mb-6 sm:mb-8">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 leading-relaxed">
                💡 Promover la <span className="font-bold text-[#9acd32] dark:text-blue-400">adopción responsable</span> y mejorar la vida de las mascotas sin hogar en todo el mundo.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 leading-relaxed">
                🤝 Imaginamos un futuro donde cada peludo tenga un lugar seguro y lleno de cariño, trabajando junto a comunidades y refugios para lograrlo.
              </p>
            </div>
            
           
            
            {/* Botón para la página de contacto */}
            <Link
              to="/contact"
              className="bg-[#9acd32] hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto shadow-md w-full sm:w-auto"
            >
              <FaHandshake className="text-xl" /> Contáctanos
            </Link>
          </div>
        </div>
        
        {/* Footer con efecto de onda */}
        <div className="relative bg-[#9acd32] h-16 sm:h-24">
          <div className="absolute w-full top-0 transform rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="flex justify-center items-center h-full relative">
            <p className="text-white text-sm sm:text-base font-medium">
              Guau & Miau © {new Date().getFullYear()} - Con amor por los animales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;