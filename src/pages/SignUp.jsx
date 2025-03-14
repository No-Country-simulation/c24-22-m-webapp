import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    setIsLoading(true);

    try {
      // Crear usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log('Usuario creado en Authentication:', userCredential.user);

      // Actualizar perfil
      await updateProfile(userCredential.user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });
      console.log('Perfil actualizado');

      // Datos a guardar en Firestore
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        createdAt: new Date()
      };
      console.log('Datos a guardar en Firestore:', userData);

      // Guardar datos en Firestore
      try {
        await setDoc(doc(db, 'users', userCredential.user.uid), userData);
        console.log('Datos guardados en Firestore');
      } catch (firestoreError) {
        console.error('Error al guardar en Firestore:', firestoreError);
        throw new Error(`Error al guardar datos en Firestore: ${firestoreError.message}`);
      }

      // Mostrar mensaje de éxito y redirigir
      setSuccessMessage('¡Registro exitoso! Redirigiendo al login...');
      navigate('/login');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('El correo ya está registrado. Por favor, usa otro correo o inicia sesión.');
      } else if (err.code === 'auth/invalid-email') {
        setError('El correo no es válido. Por favor, verifica tu correo.');
      } else {
        setError(`Error al registrar: ${err.message}`);
        console.error('Error completo:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl p-6 flex flex-col md:flex-row items-center md:items-stretch md:gap-8">
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Crear Cuenta
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-lg font-medium transition-colors`}
            >
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                Inicia Sesión
              </Link>
            </p>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            ¡Bienvenido de nuevo!
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
            Para seguir conectado con nosotros por favor ingresa con tu información personal.
          </p>
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-8 rounded-lg font-medium transition-colors"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;