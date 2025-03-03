import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaLock, FaBuilding } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({
    shelterName: '',
    address: '',
    state: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl p-6 flex flex-col md:flex-row items-center md:items-stretch md:gap-8">
        
        {/* Sección Registro */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Crear Cuenta
          </h1>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input type="text" placeholder="Nombre del Refugio" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input type="text" placeholder="Dirección" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
              </div>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input type="text" placeholder="Estado" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
              </div>
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input type="email" placeholder="Email" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input type="password" placeholder="Contraseña" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
              Registrarse
            </button>

            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                Inicia Sesión
              </Link>
            </p>
          </form>
        </div>

        {/* Sección Bienvenida */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            ¡Bienvenido de nuevo!
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
            Para seguir conectado con nosotros por favor ingresa con tu información personal.
          </p>
          <Link to="/login" className="bg-green-600 hover:bg-green-700 text-white py-2 px-8 rounded-lg font-medium transition-colors">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
