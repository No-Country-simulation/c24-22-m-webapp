import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { BsChevronDown, BsSun, BsMoon } from "react-icons/bs";
import PropTypes from 'prop-types';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null); 
  const location = useLocation();

  const navigation = [
    { name: 'Adoptar', to: '/adopt', subItems: ['Perros', 'Gatos', 'Todos'] },
    { name: 'Colaborar', to: '/collaborate', subItems: ['Donar', 'Voluntariado'] },
    { name: 'Quiénes Somos', to: '/about', subItems: ['Misión', 'Equipo'] },
    { name: 'Dónde Estamos', to: '/location', subItems: ['Mapa', 'Contacto'] },
  ];

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

  const [localDarkMode, setIsDarkMode] = useState(isDarkMode || localStorage.getItem('darkMode') === 'true');

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
    <nav className="bg-[#e8eef4] dark:bg-gray-900 shadow-lg fixed w-full z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#9acd32] dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300"
          >
            Guau & Miau
          </Link>
          
          <div className="hidden md:flex md:space-x-8 items-center">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative">
                <div className="flex items-center">
                  <Link
                    to={item.to}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 ${location.pathname === item.to ? 'border-b-2 border-blue-700 dark:border-blue-400' : ''}`}
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

            <Link
              to={location.pathname === "/login" ? "/signup" : "/login"}
              className="inline-flex items-center px-4 py-2 bg-[#9acd32] text-white rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              {location.pathname === "/login" ? "Sign Up" : "Sign In"}
            </Link>
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
