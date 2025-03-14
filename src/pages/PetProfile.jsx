// src/pages/PetProfile.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Añadimos useNavigate
import { FaHeart, FaPaw, FaUserFriends, FaCat, FaDog, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function PetProfile() {
  const { id } = useParams();
  const navigate = useNavigate(); // Para manejar redirecciones

  // Paleta de colores basada en la imagen proporcionada
  const colors = {
    blue: '#5DADE2',
    yellow: '#F9D057',
    red: '#E67F73',
    green: '#7AC380',
    lightBlue: '#69B3E7',
    lightYellow: '#FFDA65',
    lightRed: '#EB857A',
    lightGreen: '#88CC8D',
  };

  const pet = {
    id,
    name: 'Melón',
    species: 'Gato',
    breed: 'Siamés',
    age: 2,
    gender: 'Macho',
    status: 'Castrado - Vacunado - Tuxedo',
    description: 'Cariñoso, Juguetón, Curioso, Divertido, Energético y Aventurero.',
    compatibility: {
      kids: true,
      cats: false,
      dogs: false,
    },
    shelter: {
      name: 'S.O.S. HociCos',
      description: 'Servicio de rescate de animales',
      location: 'Mar del Plata, Buenos Aires, Argentina',
      email: 'soshocicos.mdp@gmail.com',
    },
    photos: ['/assets/pet1.jpg', '/assets/pet2.jpg'],
  };

  // Función para regresar a la búsqueda
  const handleBackToSearch = () => {
    navigate('/search'); // Redirige a la página de búsqueda
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 px-4 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Contenedor principal de dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna izquierda - Información del perfil */}
          <div className="md:col-span-2">
            {/* Tarjeta de perfil */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
              {/* Cabecera con imagen y nombre */}
              <div className="flex flex-col items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                <img
                  src={pet.photos[0] || '/assets/placeholder-pet.jpg'}
                  alt={pet.name}
                  className="w-24 h-24 object-cover rounded-full bg-gray-200 mb-2 border-2 border-yellow-500"
                />
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{pet.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {pet.gender} - {pet.age} años
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{pet.status}</p>
              </div>

              {/* Características */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  <FaPaw /> Descripción
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{pet.description}</p>
                <h3 className="text-md font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  <FaHeart /> Compatibilidad
                </h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <FaUserFriends /> {pet.compatibility.kids ? 'Se lleva bien con niños' : 'No se lleva bien con niños'}
                  </li>
                  <li className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <FaCat /> {pet.compatibility.cats ? 'Se lleva bien con otros gatos' : 'No se lleva bien con otros gatos'}
                  </li>
                  <li className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <FaDog /> {pet.compatibility.dogs ? 'Se lleva bien con perros' : 'No se lleva bien con perros'}
                  </li>
                </ul>
              </div>

              {/* Galería de fotos */}
              <div className="grid grid-cols-3 gap-2">
                {pet.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo || '/assets/placeholder-pet.jpg'}
                    alt={`${pet.name} photo ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg bg-gray-200"
                  />
                ))}
                {[...Array(6 - pet.photos.length)].map((_, index) => (
                  <div
                    key={index + pet.photos.length}
                    className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400"
                  >
                    Placeholder
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Adopción y refugio */}
          <div className="md:col-span-1">
            {/* Tarjeta de adopción */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
              <div className="text-center mb-4">
                <p className="font-medium text-gray-800 dark:text-white mb-2">
                  ¿Te gustaría adoptar a {pet.name}?
                </p>
                <div className="text-red-500 dark:text-red-400 text-2xl">❤️</div>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => navigate(`/adoption-form/${pet.id}`)} // Redirige a AdoptionForm
                  className="w-full py-2 px-4 rounded-md text-sm text-white transition-colors bg-blue-500 hover:bg-blue-600"
                >
                  Sí, quiero adoptar
                </button>
                <button
                  onClick={handleBackToSearch} // Regresa a la búsqueda
                  className="w-full py-2 px-4 rounded-md text-sm text-gray-800 dark:text-gray-200 transition-colors bg-yellow-300 hover:bg-yellow-400"
                >
                  Aún no, quiero ver más
                </button>
              </div>
            </div>

            {/* Tarjeta del refugio */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
                <h2 className="font-bold text-lg text-gray-800 dark:text-white">{pet.shelter.name}</h2>
                <p className="text-xs text-gray-600 dark:text-gray-300">{pet.shelter.description}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-red-500 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">{pet.shelter.location}</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{pet.shelter.email}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/collaborate')} // Redirige a Collaborate
                className="w-full py-2 px-4 rounded-md text-sm mt-4 text-white bg-green-500 hover:bg-green-600 transition-colors"
              >
                Quiero ayudar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetProfile;