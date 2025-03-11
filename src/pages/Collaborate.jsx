import React from 'react';
import { FaHandsHelping, FaDonate, FaUsers } from 'react-icons/fa';

function Collaborate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 animate-fade-in">

        {/* Encabezado */}
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-2 animate-slide-down">
          <FaHandsHelping className="text-green-600" /> ¡Colabora con Nosotros!
        </h1>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6 animate-slide-up">
          ❤️ Tu ayuda es fundamental para mejorar la vida de muchos peluditos. 
          ¡Únete a nuestra causa y marca la diferencia! 🐶🐾
        </p>

        {/* Opciones de colaboración */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Donaciones */}
          <div className="bg-[#e8eef4] dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform animate-slide-left">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
              <FaDonate className="text-yellow-500" /> Donaciones
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
              Cada aporte ayuda a brindar alimento, refugio y cuidados médicos a nuestros peludos. 🏡🐕
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">💳 Número de cuenta:</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">ES12 3456 7890 1234</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">📱 Bizum:</p>
            <p className="text-gray-600 dark:text-gray-400">+34 600 123 456</p>
          </div>

          {/* Voluntariado */}
          <div className="bg-[#e8eef4] dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform animate-slide-right">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
              <FaUsers className="text-blue-500" /> Voluntariado
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
              Ayuda directamente en nuestro refugio. ¡Tu tiempo vale oro para nuestros amigos peludos! 🐾✨
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">🕒 Horario:</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Sábados de 10:00 a 14:00</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">🎁 ¿Cómo ayudar?</p>
            <p className="text-gray-600 dark:text-gray-400">Dona alimento, mantas o juguetes.</p>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="text-center mt-8 animate-slide-up">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            🐾 Cada granito de arena cuenta. ¡Gracias por ser parte de esta hermosa misión! 💖🐶🐱
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
