import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Añadir Firestore
import { auth, db } from '../firebase'; // Ajusta la ruta según tu estructura

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Inicio de sesión con email y contraseña
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario logueado:', userCredential.user);
      navigate('/');
    } catch (err) {
      setError(err.message);
      console.error('Error al iniciar sesión:', err);
    }
  };

  // Inicio de sesión con Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log('Usuario logueado con Google:', userCredential.user);

      // Verificar si el usuario ya tiene datos en Firestore
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        // Si no existe, guardar datos básicos
        await setDoc(userDocRef, {
          firstName: userCredential.user.displayName?.split(' ')[0] || '',
          lastName: userCredential.user.displayName?.split(' ')[1] || '',
          email: userCredential.user.email,
          createdAt: new Date(),
        });
        console.log('Datos guardados en Firestore para usuario de Google');
      }

      navigate('/');
    } catch (err) {
      if (err.code === 'auth/account-exists-with-different-credential') {
        setError('Ya existe una cuenta con este correo. Por favor, inicia sesión con el método original (por ejemplo, email/contraseña o Facebook).');
      } else {
        setError(err.message);
      }
      console.error('Error al iniciar sesión con Google:', err);
    }
  };

  // Inicio de sesión con Facebook
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log('Usuario logueado con Facebook:', userCredential.user);

      // Verificar si el usuario ya tiene datos en Firestore
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        // Si no existe, guardar datos básicos
        await setDoc(userDocRef, {
          firstName: userCredential.user.displayName?.split(' ')[0] || '',
          lastName: userCredential.user.displayName?.split(' ')[1] || '',
          email: userCredential.user.email,
          createdAt: new Date(),
        });
        console.log('Datos guardados en Firestore para usuario de Facebook');
      }

      navigate('/');
    } catch (err) {
      if (err.code === 'auth/account-exists-with-different-credential') {
        setError('Ya existe una cuenta con este correo. Por favor, inicia sesión con el método original (por ejemplo, email/contraseña o Google).');
      } else {
        setError(err.message);
      }
      console.error('Error al iniciar sesión con Facebook:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl p-6 flex flex-col md:flex-row items-center md:items-stretch md:gap-8">
        {/* Sección Login */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            ¡Bienvenido de nuevo!
          </h1>

          {/* Formulario de email/contraseña */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Ingresar
            </button>
            <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </form>

          {/* Separador */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-4 text-sm text-gray-500 dark:text-gray-400">o</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Botones sociales */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <FcGoogle className="text-xl" />
              Ingresa con tu cuenta de Gmail
            </button>
            <button
              onClick={handleFacebookLogin}
              className="w-full flex items-center justify-center gap-3 bg-[#3b5998] text-white py-3 rounded-lg font-medium hover:bg-[#2d4373] transition-colors"
            >
              <FaFacebook className="text-xl" />
              Ingresa con tu cuenta de Facebook
            </button>
          </div>
        </div>

        {/* Sección de Registro */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-[#e8eef4] dark:bg-gray-700 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            ¡Hola Rescatista!
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
            Ingresa tu información personal y empieza este hermoso viaje con nosotros.
          </p>
          <Link
            to="/signup"
            className="bg-[#9acd32] hover:bg-green-700 text-white py-2 px-8 rounded-full font-medium transition-colors"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;