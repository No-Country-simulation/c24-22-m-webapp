import React, { useState, useEffect } from 'react';
import { 
  FaHandsHelping, 
  FaDonate, 
  FaUsers, 
  FaPaw, 
  FaHeart, 
  FaShoppingCart, 
  FaCalendarAlt, 
  FaPhone, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';

function Collaborate() {
  const [activeTab, setActiveTab] = useState('donaciones');
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [donationSubmitted, setDonationSubmitted] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerCount, setVolunteerCount] = useState(() => {
    // Cargar el valor inicial desde localStorage, o usar 42 como predeterminado
    const savedCount = localStorage.getItem('volunteerCount');
    return savedCount ? parseInt(savedCount, 10) : 42;
  });
  const [formData, setFormData] = useState({
    donation: {
      name: '',
      email: '',
      amount: '',
      method: 'Transferencia',
      message: ''
    },
    volunteer: {
      name: '',
      email: '',
      phone: '',
      availability: 'Mañanas',
      message: ''
    }
  });

  // Guardar el conteo de voluntarios en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('volunteerCount', volunteerCount);
  }, [volunteerCount]);

  const handleDonationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      donation: {
        ...formData.donation,
        [name]: value
      }
    });
  };

  const handleVolunteerChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      volunteer: {
        ...formData.volunteer,
        [name]: value
      }
    });
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", formData.donation);
    setDonationSubmitted(true);
    
    setTimeout(() => {
      setDonationSubmitted(false);
      setShowDonationForm(false);
      setFormData({
        ...formData,
        donation: {
          name: '',
          email: '',
          amount: '',
          method: 'Transferencia',
          message: ''
        }
      });
    }, 5000);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer submitted:", formData.volunteer);
    setVolunteerSubmitted(true);
    // Incrementar el contador de voluntarios
    setVolunteerCount(prevCount => prevCount + 1);
    
    setTimeout(() => {
      setVolunteerSubmitted(false);
      setShowVolunteerForm(false);
      setFormData({
        ...formData,
        volunteer: {
          name: '',
          email: '',
          phone: '',
          availability: 'Mañanas',
          message: ''
        }
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 mt-16">
        {/* Header */}
        <div className="relative">
          <div className="absolute -top-16 left-0 right-0 flex justify-center">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-full shadow-lg">
              <FaPaw className="text-green-600 text-4xl" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mt-10 mb-4 flex items-center justify-center gap-2">
            <FaHandsHelping className="text-green-600" /> ¡Colabora con Nosotros!
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 dark:text-gray-300 mb-4">
            ❤️ Tu ayuda es fundamental para mejorar la vida de muchos peluditos. 
            ¡Únete a nuestra causa y marca la diferencia! 🐶🐾
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex flex-col items-center p-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">157</span>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">Animales Rescatados</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">89</span>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">Adoptados</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">{volunteerCount}</span>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">Voluntarios</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">28</span>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">Eventos</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-6 gap-2 sm:gap-0">
          <button 
            className={`px-4 py-2 rounded-lg sm:rounded-t-lg sm:rounded-b-none font-medium text-sm md:text-base ${activeTab === 'donaciones' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
            onClick={() => setActiveTab('donaciones')}
          >
            <FaDonate className="inline mr-2" /> Donaciones
          </button>
          <button 
            className={`px-4 py-2 rounded-lg sm:rounded-t-lg sm:rounded-b-none font-medium text-sm md:text-base ${activeTab === 'voluntariado' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
            onClick={() => setActiveTab('voluntariado')}
          >
            <FaUsers className="inline mr-2" /> Voluntariado
          </button>
          <button 
            className={`px-4 py-2 rounded-lg sm:rounded-t-lg sm:rounded-b-none font-medium text-sm md:text-base ${activeTab === 'tienda' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
            onClick={() => setActiveTab('tienda')}
          >
            <FaShoppingCart className="inline mr-2" /> Tienda Solidaria
          </button>
        </div>

        {/* Contenido de las pestañas */}
        <div className="mb-6">
          {activeTab === 'donaciones' && (
            <div className="bg-green-50 dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md animate-fade-in">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <FaDonate className="text-yellow-500" /> Donaciones
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Transferencia Bancaria</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Realiza una transferencia a nuestra cuenta bancaria. Cada euro ayuda a brindar alimento, refugio y cuidados médicos.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">💳 Número de cuenta:</p>
                    <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-2 break-all">ES12 3456 7890 1234 5678 9012</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">🏦 Banco:</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">CaixaBank</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Bizum / Paypal</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Donaciones rápidas y seguras a través de estos métodos de pago. Perfectos para aportaciones periódicas.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">📱 Bizum:</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">+34 600 123 456</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">📧 PayPal:</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">donaciones@refugiopeludos.org</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                {!donationSubmitted && (
                  <button 
                    onClick={() => setShowDonationForm(!showDonationForm)}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 text-sm md:text-base"
                  >
                    {showDonationForm ? 'Ocultar formulario' : 'Hacer una donación ahora'}
                  </button>
                )}
              </div>

              {showDonationForm && !donationSubmitted && (
                <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Formulario de Donación</h3>
                  <form onSubmit={handleDonationSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.donation.name} 
                        onChange={handleDonationChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.donation.email} 
                        onChange={handleDonationChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cantidad (€)</label>
                      <input 
                        type="number" 
                        name="amount" 
                        value={formData.donation.amount} 
                        onChange={handleDonationChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Método de pago</label>
                      <select 
                        name="method" 
                        value={formData.donation.method} 
                        onChange={handleDonationChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      >
                        <option>Transferencia</option>
                        <option>Bizum</option>
                        <option>PayPal</option>
                        <option>Tarjeta de crédito</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje (opcional)</label>
                      <textarea 
                        name="message" 
                        value={formData.donation.message} 
                        onChange={handleDonationChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 h-20" 
                      />
                    </div>
                    <div className="md:col-span-2 text-center">
                      <button 
                        type="submit" 
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                      >
                        Enviar Donación
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {donationSubmitted && (
                <div className="mt-4 bg-green-100 dark:bg-green-800 p-4 rounded-lg shadow-md text-center animate-fade-in">
                  <FaCheckCircle className="text-green-600 dark:text-green-400 text-3xl mb-2" />
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">¡Gracias por tu donación!</p>
                  <p className="text-gray-700 dark:text-gray-300">Tu apoyo es invaluable para nosotros.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'voluntariado' && (
            <div className="bg-blue-50 dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md animate-fade-in">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <FaUsers className="text-blue-500" /> Voluntariado
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Únete a nuestro equipo de voluntarios y ayuda a mejorar la vida de muchos peluditos.
              </p>

              <div className="text-center mt-4">
                {!volunteerSubmitted && (
                  <button 
                    onClick={() => setShowVolunteerForm(!showVolunteerForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 text-sm md:text-base"
                  >
                    {showVolunteerForm ? 'Ocultar formulario' : 'Unirse como voluntario'}
                  </button>
                )}
              </div>

              {showVolunteerForm && !volunteerSubmitted && (
                <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Formulario de Voluntariado</h3>
                  <form onSubmit={handleVolunteerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.volunteer.name} 
                        onChange={handleVolunteerChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.volunteer.email} 
                        onChange={handleVolunteerChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.volunteer.phone} 
                        onChange={handleVolunteerChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disponibilidad</label>
                      <select 
                        name="availability" 
                        value={formData.volunteer.availability} 
                        onChange={handleVolunteerChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      >
                        <option>Mañanas</option>
                        <option>Tardes</option>
                        <option>Fines de semana</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje (opcional)</label>
                      <textarea 
                        name="message" 
                        value={formData.volunteer.message} 
                        onChange={handleVolunteerChange} 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 h-20" 
                      />
                    </div>
                    <div className="md:col-span-2 text-center">
                      <button 
                        type="submit" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                      >
                        Enviar solicitud
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {volunteerSubmitted && (
                <div className="mt-4 bg-blue-100 dark:bg-blue-800 p-4 rounded-lg shadow-md text-center animate-fade-in">
                  <FaCheckCircle className="text-blue-600 dark:text-blue-400 text-3xl mb-2" />
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">¡Gracias por unirte como voluntario!</p>
                  <p className="text-gray-700 dark:text-gray-300">Nos pondremos en contacto contigo pronto.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tienda' && (
            <div className="bg-purple-50 dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md animate-fade-in">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <FaShoppingCart className="text-purple-500" /> Tienda Solidaria
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Compra productos solidarios y ayuda a nuestros peludos. Todo lo recaudado se destina a su bienestar.
              </p>
              {/* Aquí puedes agregar el contenido de la tienda */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collaborate;