import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { BsChevronDown, BsSun, BsMoon } from "react-icons/bs";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Adoptar', to: '/adopt', subItems: ['Perros', 'Gatos', 'Todos'] },
    { name: 'Colaborar', to: '/collaborate', subItems: ['Donar', 'Voluntariado'] },
    { name: 'Quiénes Somos', to: '/about', subItems: ['Misión', 'Equipo'] },
    { name: 'Dónde Estamos', to: '/location', subItems: ['Mapa', 'Contacto'] },
  ];

  // Verificar si toggleDarkMode es una función antes de usarla
  const handleToggleDarkMode = () => {
    if (typeof toggleDarkMode === 'function') {
      toggleDarkMode();
    } else {
      console.warn('toggleDarkMode no es una función, usando estado local');
      setIsDarkMode((prev) => {
        const newDarkMode = !prev;
        document.documentElement.classList.toggle('dark', newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        return newDarkMode;
      });
    }
  };

  // Estado local para darkMode como respaldo
  const [localDarkMode, setIsDarkMode] = useState(isDarkMode || localStorage.getItem('darkMode') === 'true');

  // Sincronizar con el prop isDarkMode y localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDarkMode || savedDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode || savedDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('darkMode', localDarkMode);
    document.documentElement.classList.toggle('dark', localDarkMode);
  }, [localDarkMode]);

  return (
    <nav className="bg-blue-300 dark:bg-gray-900 shadow-lg fixed w-full z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300"
          >
            Guau & Miau
          </Link>
          
          {/* Menú desktop */}
          <div className="hidden md:flex md:space-x-8 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.to}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 ${
                    location.pathname === item.to ? 'border-b-2 border-blue-700 dark:border-blue-400' : ''
                  }`}
                >
                  {item.name}
                  {item.subItems && <BsChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />}
                </Link>
                
                {/* Submenú con animación */}
                {item.subItems && (
                  <div className="absolute hidden group-hover:block pt-2 animate-slide-down">
                    <div className="bg-blue-700 dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[200px] transition-all duration-300">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.to}/${subItem.toLowerCase().replace(' ', '-')}`}
                          className="block px-4 py-2 text-sm text-gray-300 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Modo oscuro */}
            <button
              onClick={handleToggleDarkMode}
              className="p-2 rounded-full hover:bg-blue-400 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {localDarkMode ? (
                <BsMoon className="h-6 w-6 text-blue-700 dark:text-gray-300 transition-colors duration-300" /> // Luna en modo oscuro
              ) : (
                <BsSun className="h-6 w-6 text-gray-700 dark:text-gray-300 transition-colors duration-300" /> // Sol en modo claro
              )}
            </button>

            {/* Botón Sign In */}
            <Link
  to={location.pathname === "/login" ? "/signup" : "/login"}
  className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
>
  {location.pathname === "/login" ? "Sign Up" : "Sign In"}
</Link>
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-blue-400 dark:hover:bg-gray-700 focus:outline-none transition-all duration-300"
          >
            <span className="sr-only">Abrir menú</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil con animación */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} animate-slide-down`}>
        <div className="pt-2 pb-3 space-y-1 bg-blue-300 dark:bg-gray-900">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                to={item.to}
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  location.pathname === item.to
                    ? 'border-blue-700 text-blue-600 dark:text-blue-400 bg-blue-400 dark:bg-gray-800'
                    : 'border-transparent text-gray-700 dark:text-gray-300 hover:bg-blue-400 dark:hover:bg-gray-800'
                } transition-all duration-300`}
              >
                {item.name}
              </Link>
              {item.subItems?.map((subItem) => (
                <Link
                  key={subItem}
                  to={`${item.to}/${subItem.toLowerCase().replace(' ', '-')}`}
                  className="block pl-6 pr-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-blue-400 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {subItem}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/login"
            className="block pl-3 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-400 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;