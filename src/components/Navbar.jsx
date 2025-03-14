import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsChevronDown, BsSun, BsMoon } from "react-icons/bs";
import PropTypes from 'prop-types';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Ajusta la ruta según tu estructura

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);
  const [localDarkMode, setIsLocalDarkMode] = useState(isDarkMode || localStorage.getItem('darkMode') === 'true');
  const [user, setUser] = useState(null); // Estado para el usuario autenticado
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuRef = useRef();
  const hamburgerButtonRef = useRef();

  const navigation = [
    { name: 'Adoptar', to: '/adopt', subItems: null },
    { name: 'Colaborar', to: '/collaborate', subItems: null },
    { name: 'Quiénes Somos', to: '/about', subItems: null },
    { name: 'Dónde Estamos', to: '/location', subItems: null },
  ];

  // Detectar el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('Estado de autenticación:', currentUser ? 'Usuario autenticado' : 'No autenticado');
    });
    return () => unsubscribe();
  }, []);

  // Manejar el cierre de sesión
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirigir al login después de cerrar sesión
      setIsMobileMenuOpen(false); // Cerrar el menú móvil si está abierto
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  const handleToggleDarkMode = () => {
    if (typeof toggleDarkMode === 'function') {
      toggleDarkMode();
    } else {
      setIsLocalDarkMode(prev => {
        const newDarkMode = !prev;
        document.documentElement.classList.toggle('dark', newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        return newDarkMode;
      });
    }
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const newDarkMode = isDarkMode !== undefined ? isDarkMode : savedDarkMode;
    setIsLocalDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen && 
        mobileMenuRef.current && 
        hamburgerButtonRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setOpenMobileSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubMenu(null);
  }, [location.pathname]);

  return (
    <nav className="bg-[#e8eef4] dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#9acd32] dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300"
          >
            Guau & Miau
          </Link>
          
          {/* Menú para escritorio */}
          <div className="hidden md:flex md:space-x-8 items-center">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative">
                <div className="flex items-center">
                  <Link
                    to={item.to}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 ${
                      location.pathname === item.to && item.subItems ? 'border-b-2 border-blue-700 dark:border-blue-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {item.subItems && (
                    <button 
                      className="ml-1 p-1"
                      onMouseEnter={() => setOpenSubMenu(index)}  
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >
                      <BsChevronDown className="h-4 w-4 transition-transform duration-300" />
                    </button>
                  )}
                </div>

                {item.subItems && openSubMenu === index && (
                  <div 
                    className="absolute pt-2 animate-slide-down"
                    onMouseEnter={() => setOpenSubMenu(index)}
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    <div className="bg-[#9acd32] dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[200px] transition-all duration-300">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.to}/${subItem.toLowerCase().replace(' ', '-')}`}
                          className="block px-4 py-2 text-sm text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={handleToggleDarkMode}
              className="p-2 rounded-full hover:bg-blue-400 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {localDarkMode ? (
                <BsMoon className="h-6 w-6 text-blue-700 dark:text-gray-300 transition-colors duration-300" />
              ) : (
                <BsSun className="h-6 w-6 text-gray-700 dark:text-gray-300 transition-colors duration-300" />
              )}
            </button>

            {/* Mostrar opciones según el estado de autenticación (Escritorio) */}
            {user ? (
              <div className="relative">
                <button
                  onMouseEnter={() => setOpenSubMenu('profile')}
                  onMouseLeave={() => setOpenSubMenu(null)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                >
                  {user.displayName || 'Perfil'}
                  <BsChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                </button>
                {openSubMenu === 'profile' && (
                  <div
                    className="absolute pt-2 animate-slide-down right-0"
                    onMouseEnter={() => setOpenSubMenu('profile')}
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    <div className="bg-[#9acd32] dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[150px] transition-all duration-300">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        Mi Perfil
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={location.pathname === "/login" ? "/signup" : "/login"}
                className="inline-flex items-center px-4 py-2 bg-[#9acd32] text-white rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                {location.pathname === "/login" ? "Sign Up" : "Sign In"}
              </Link>
            )}
          </div>

          {/* Botón del menú hamburguesa para móvil */}
          <div className="md:hidden flex items-center">
            <button
              ref={hamburgerButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed top-16 left-0 right-0 bg-[#e8eef4] dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item, index) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setOpenMobileSubMenu(openMobileSubMenu === index ? null : index)}
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <span>{item.name}</span>
                      <BsChevronDown className={`h-4 w-4 transform transition-transform ${
                        openMobileSubMenu === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {openMobileSubMenu === index && (
                      <div className="pl-4 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`${item.to}/${subItem.toLowerCase().replace(' ', '-')}`}
                            className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleToggleDarkMode}
                className="w-full flex items-center justify-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {localDarkMode ? (
                  <BsMoon className="h-6 w-6 mr-2 text-blue-700 dark:text-gray-300" />
                ) : (
                  <BsSun className="h-6 w-6 mr-2 text-gray-700 dark:text-gray-300" />
                )}
                {localDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
              </button>

              {/* Mostrar opciones según el estado de autenticación (Móvil) */}
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mi Perfil
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <Link
                  to={location.pathname === "/login" ? "/signup" : "/login"}
                  className="block mt-2 w-full px-4 py-2 text-center bg-[#9acd32] text-white rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {location.pathname === "/login" ? "Sign Up" : "Sign In"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;