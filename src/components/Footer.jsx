// src/components/Footer.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    // Sincronizar con el modo oscuro global si cambia
    const handleDarkModeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    window.addEventListener('darkModeChange', handleDarkModeChange);
    return () => window.removeEventListener('darkModeChange', handleDarkModeChange);
  }, []);

  const navigationLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Adoptar', to: '/adopt' },
    { name: 'Colaborar', to: '/collaborate' },
    { name: 'Quiénes Somos', to: '/about' },
    { name: 'Dónde Estamos', to: '/location' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8 border-t border-gray-700">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección de Enlaces */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-[#9acd32] dark:text-blue-400">Enlaces Útiles</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-[#9acd32] dark:hover:text-blue-400 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección de Contacto */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-[#9acd32] dark:text-blue-400">Contáctanos</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-300">info@guauymiau.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-300">+34 600 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-gray-300">Calle Ejemplo 123, Madrid</span>
              </li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#9acd32] dark:text-blue-400">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#9acd32] dark:hover:text-blue-400 transition duration-300"
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sección de Derechos de Autor */}
        <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-4">
          <p>
            © {new Date().getFullYear()} Guau & Miau. Todos los derechos reservados. |{' '}
            <Link to="/terms" className="hover:text-[#9acd32] dark:hover:text-blue-400 transition duration-300">
              Términos de Servicio
            </Link>{' '}
            |{' '}
            <Link to="/privacy" className="hover:text-[#9acd32] dark:hover:text-blue-400 transition duration-300">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
