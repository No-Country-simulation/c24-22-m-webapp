import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import { FaMapMarkerAlt, FaPhone, FaClock, FaPaw, FaInfoCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar'; // Importa tu componente Navbar
import Footer from '../components/Footer'; // Importa tu componente Footer

function Location() {
  const [refugios, setRefugios] = useState([
    { 
      id: 1, 
      nombre: "Refugio Madrid Patitas", 
      direccion: "Calle Gran Vía 28", 
      ciudad: "Madrid", 
      pais: "España",
      latLng: [40.416775, -3.703790],
      telefono: "+34 91 123 45 67",
      horario: "Lunes a Domingo: 8:00 - 20:00",
      servicios: ["Adopción de perros y gatos", "Atención veterinaria", "Voluntariado", "Donaciones"],
      descripcion: "Un refugio dedicado a rescatar y rehabilitar perros y gatos abandonados en Madrid."
    },
    { 
      id: 2, 
      nombre: "Refugio Veracruz Huellitas", 
      direccion: "Av. Independencia 730", 
      ciudad: "Veracruz", 
      pais: "México",
      latLng: [19.172464, -96.134316],
      telefono: "+52 229 123 4567",
      horario: "Lunes a Viernes: 9:00 - 18:00",
      servicios: ["Rescate de animales", "Esterilización gratuita", "Adopciones", "Educación comunitaria"],
      descripcion: "Comprometidos con el bienestar animal en Veracruz, rescatamos y encontramos hogares amorosos."
    },
    { 
      id: 3, 
      nombre: "Refugio Buenos Aires Peludos", 
      direccion: "Av. 9 de Julio 1000", 
      ciudad: "Buenos Aires", 
      pais: "Argentina",
      latLng: [-34.603722, -58.381592],
      telefono: "+54 11 1234 5678",
      horario: "Lunes a Sábado: 10:00 - 19:00",
      servicios: ["Albergue para animales", "Campañas de adopción", "Atención médica", "Rehabilitación"],
      descripcion: "Un hogar temporal para animales en busca de una familia en el corazón de Buenos Aires."
    }
  ]);
  
  const [mapaListo, setMapaListo] = useState(false);
  const [selectedRefugio, setSelectedRefugio] = useState(null);
  const [mostrarInfoCompleta, setMostrarInfoCompleta] = useState(false);

  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.css';
    document.head.appendChild(linkElement);

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.js';
    scriptElement.onload = initMap;
    document.body.appendChild(scriptElement);

    return () => {
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement);
      }
      if (document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  function initMap() {
    if (typeof window !== 'undefined' && !mapaListo && window.L) {
      const L = window.L;
      const map = L.map('mapa').setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      const markers = [];
      refugios.forEach(refugio => {
        const marker = L.marker(refugio.latLng)
          .addTo(map)
          .bindPopup(`<b>${refugio.nombre}</b><br>${refugio.direccion}<br>${refugio.ciudad}, ${refugio.pais}`);
          
        marker.on('click', () => {
          setSelectedRefugio(refugio);
          setMostrarInfoCompleta(false);
        });
        
        markers.push(marker);
      });
      
      if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds(), { padding: [20, 20] });
      }
      
      setMapaListo(true);
      window.mapaLeaflet = map;
    }
  }

  const handleComoLlegar = (refugio) => {
    const direccionCompleta = `${refugio.direccion}, ${refugio.ciudad}, ${refugio.pais}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccionCompleta)}`;
    window.open(url, '_blank');
  };

  const handleMasInfo = (refugio) => {
    setMostrarInfoCompleta(true);
  };

  const handleCerrarInfo = () => {
    setMostrarInfoCompleta(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 to-green-100 dark:from-gray-700 dark:to-gray-800">
      <Navbar /> {/* Navbar en la parte superior */}

      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 animate-fade-in">
          {/* Título y Descripción */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center animate-slide-down">
            Refugios de Mascotas
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 text-center animate-slide-up">
            Descubre refugios de animales cerca de ti. Haz clic en un marcador para más detalles.
          </p>

          {/* Mapa */}
          <div className="bg-[#e8eef4] dark:bg-gray-600 h-60 sm:h-72 md:h-96 rounded-lg overflow-hidden mb-4 sm:mb-6 animate-slide-left relative">
          <div id="mapa" className="w-full h-full z-10"></div>
          {!mapaListo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
          
          {/* Lista de refugios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
            {refugios.map(refugio => (
              <div 
                key={refugio.id} 
                className={`p-4 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  selectedRefugio?.id === refugio.id 
                    ? 'bg-blue-100 dark:bg-blue-900' 
                    : 'bg-gray-100 dark:bg-gray-600'
                }`}
                onClick={() => {
                  setSelectedRefugio(refugio);
                  setMostrarInfoCompleta(false);
                }}
              >
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg flex items-center gap-2">
                  <FaPaw className="text-blue-500" /> {refugio.nombre}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" /> {refugio.direccion}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{refugio.ciudad}, {refugio.pais}</p>
              </div>
            ))}
          </div>
          
          {/* Información básica del refugio seleccionado */}
          {selectedRefugio && !mostrarInfoCompleta && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg animate-fade-in">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <FaPaw className="text-blue-500" /> {selectedRefugio.nombre}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" /> 
                {selectedRefugio.direccion}, {selectedRefugio.ciudad}, {selectedRefugio.pais}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => handleComoLlegar(selectedRefugio)}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <FaMapMarkerAlt /> Cómo llegar
                </button>
                <button 
                  onClick={() => handleMasInfo(selectedRefugio)}
                  className="w-full sm:w-auto px-4 py-2 border border-blue-500 text-blue-500 dark:text-blue-300 rounded-lg hover:bg-blue-500/10 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <FaInfoCircle /> Más información
                </button>
              </div>
            </div>
          )}
          
          {/* Información completa del refugio */}
          {selectedRefugio && mostrarInfoCompleta && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <FaPaw className="text-blue-500" /> {selectedRefugio.nombre}
                </h2>
                <button 
                  onClick={handleCerrarInfo}
                  className="p-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-500" /> Dirección
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {selectedRefugio.direccion}, {selectedRefugio.ciudad}, {selectedRefugio.pais}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
                      <FaPhone className="text-blue-500" /> Contacto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      Teléfono: {selectedRefugio.telefono}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
                      <FaClock className="text-blue-500" /> Horario
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {selectedRefugio.horario}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
                      <FaPaw className="text-blue-500" /> Servicios
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {selectedRefugio.servicios.map((servicio, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FaPaw className="text-blue-300 text-xs" /> {servicio}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
                      <FaInfoCircle className="text-blue-500" /> Sobre Nosotros
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {selectedRefugio.descripcion}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button 
                  onClick={() => handleComoLlegar(selectedRefugio)}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base flex items-center gap-2"
                >
                  <FaMapMarkerAlt /> Cómo llegar
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const LocationWithErrorBoundary = () => (
  <ErrorBoundary>
    <Location />
  </ErrorBoundary>
);

export default LocationWithErrorBoundary;