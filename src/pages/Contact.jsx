import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaDog, FaCat, FaHeart } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000); // Ocultar mensaje tras 3 segundos
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden my-8">
        {/* Header con efecto de onda */}
        <div className="relative bg-[#9acd32] h-20 sm:h-28 flex items-center justify-center">
          <div className="absolute w-full bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="flex items-center space-x-2 z-10">
            <FaDog className="text-white text-3xl sm:text-4xl" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Contáctanos</h1>
            <FaCat className="text-white text-3xl sm:text-4xl" />
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          {/* Introducción */}
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              ¿Tienes preguntas sobre adopciones o quieres colaborar con nosotros? 
              <span className="inline-flex items-center mx-2">
                <FaHeart className="text-red-500 mx-1 animate-pulse" />
              </span>
              ¡Estamos aquí para ayudarte!
            </p>
          </div>

          {/* Contenido: Formulario y Detalles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-750 dark:to-gray-850 rounded-xl p-6 shadow-lg order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <FaEnvelope className="text-[#9acd32] text-xl" /> Envíanos un mensaje
              </h2>
              
              {submitted ? (
                <div className="text-center p-8 bg-green-50 dark:bg-green-900 rounded-lg flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-700 rounded-full flex items-center justify-center mb-4">
                    <FaPaperPlane className="text-green-600 dark:text-green-300 text-2xl" />
                  </div>
                  <p className="text-green-800 dark:text-green-300 font-semibold text-lg mb-2">
                    ¡Mensaje enviado con éxito!
                  </p>
                  <p className="text-green-700 dark:text-green-400">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="w-full pl-10 p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9acd32] shadow-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Correo electrónico</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu.email@ejemplo.com"
                        className="w-full pl-10 p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9acd32] shadow-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPaperPlane className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Asunto de tu mensaje"
                        className="w-full pl-10 p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9acd32] shadow-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9acd32] resize-none h-32 shadow-sm"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#9acd32] hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Detalles de Contacto */}
            <div className="flex flex-col order-1 lg:order-2">
              {/* Tarjeta de información */}
              <div className="bg-white dark:bg-gray-750 rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <FaPhone className="text-[#9acd32]" /> Información de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-blue-600 dark:text-blue-300 text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:info@gauymiau.com" className="text-gray-800 dark:text-gray-200 hover:text-[#9acd32] dark:hover:text-[#9acd32] transition-colors">info@gauymiau.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-green-600 dark:text-green-300 text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
                      <a href="tel:+5412345678" className="text-gray-800 dark:text-gray-200 hover:text-[#9acd32] dark:hover:text-[#9acd32] transition-colors">+54 123 456 7890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="text-yellow-600 dark:text-yellow-300 text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Dirección</p>
                      <p className="text-gray-800 dark:text-gray-200">Av. Siempre Viva 123, Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tarjeta de redes sociales */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-750 dark:to-gray-850 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Síguenos en redes</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">WhatsApp</span>
                  </a>
                  
                  <a href="#" className="flex items-center gap-2 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <FaInstagram className="text-white" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Horario de atención */}
              <div className="mt-6 bg-green-50 dark:bg-gray-700 rounded-xl p-4 shadow-md">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <span className="font-semibold">Horario de atención:</span> Lunes a Viernes de 9:00 a 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer con efecto de onda */}
        <div className="relative bg-[#9acd32] h-16 sm:h-24 mt-8">
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

export default Contact;