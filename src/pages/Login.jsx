import { Link } from 'react-router-dom'; // Importamos el componente Link para la navegación entre rutas
import { FcGoogle } from 'react-icons/fc'; // Ícono de Google
import { FaFacebook } from 'react-icons/fa'; // Ícono de Facebook

// Componente de Login
const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      {/* Contenedor principal de la página, con diseño responsive para pantallas grandes */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl p-6 flex flex-col md:flex-row items-center md:items-stretch md:gap-8">
        
        {/* Sección Login (Formulario de inicio de sesión) */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            ¡Bienvenido de nuevo!
          </h1>

          {/* Formulario de inicio de sesión */}
          <form className="space-y-5">
            {/* Campo para ingresar el e-mail */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            {/* Campo para ingresar la contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Botón para iniciar sesión */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
              Ingresar
            </button>

            {/* Enlace para recuperar la contraseña */}
            <div className="text-center">
              <Link 
                to="/forgot-password" 
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </form>

          {/* Separador para los métodos de inicio de sesión */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-4 text-sm text-gray-500 dark:text-gray-400">o</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Botones de inicio de sesión social */}
          <div className="space-y-3">
            {/* Botón para iniciar sesión con Google */}
            <button className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <FcGoogle className="text-xl" />
              Ingresa con tu cuenta de Gmail
            </button>

            {/* Botón para iniciar sesión con Facebook */}
            <button className="w-full flex items-center justify-center gap-3 bg-[#3b5998] text-white py-3 rounded-lg font-medium hover:bg-[#2d4373] transition-colors">
              <FaFacebook className="text-xl" />
              Ingresa con tu cuenta de Facebook
            </button>
          </div>
        </div>

        {/* Sección de Registro */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            ¡Hola Rescatista!
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
            Ingresa tu información personal y empieza este hermoso viaje con nosotros.
          </p>
          {/* Enlace para registrarse */}
          <Link
            to="/signup"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-8 rounded-lg font-medium transition-colors"
          >
            SIGN UP
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;

