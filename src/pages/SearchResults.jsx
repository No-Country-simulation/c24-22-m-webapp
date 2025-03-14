// src/pages/SearchResults.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const species = queryParams.get('species')?.toLowerCase() || '';

  // Estado para "Me gusta" persistente
  const [likedPets, setLikedPets] = useState(() => {
    return JSON.parse(localStorage.getItem('likedPets')) || {};
  });

  // Guardar en localStorage cuando cambia likedPets
  useEffect(() => {
    localStorage.setItem('likedPets', JSON.stringify(likedPets));
  }, [likedPets]);

  // Alternar "Me gusta"
  const toggleLike = (id) => {
    setLikedPets((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Compartir enlace
  const sharePet = (id) => {
    const url = `${window.location.origin}/pet/${id}`;
    navigator.clipboard.writeText(url)
      .then(() => alert('Enlace copiado al portapapeles: ' + url))
      .catch((err) => console.error('Error al copiar enlace:', err));
  };

  // Datos simulados de mascotas
  const pets = [
    { id: 1, name: "Limón", species: "Gato", description: "Un gatito juguetón y adorable que busca un hogar." },
    { id: 2, name: "Melón", species: "Gato", description: "Melón es un gato elegante y curioso." },
    { id: 3, name: "Sandía", species: "Gato", description: "Sandía es perfecta para un hogar tranquilo." },
    { id: 4, name: "Canela & Manzana", species: "Perro", description: "Dos hermanitos inseparables que buscan un hogar juntos." },
    { id: 5, name: "Budin", species: "Perro", description: "Budin es un perro majestuoso y protector." },
    { id: 6, name: "Bufuelo", species: "Perro", description: "Bufuelo es un compañero ideal para toda la familia." },
  ];

  // Filtrar según búsqueda
  const filteredPets = pets.filter((pet) =>
    species ? pet.species.toLowerCase().includes(species) : true
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center animate-slide-down">
          ¡Quiero ser parte de tu familia!
        </h1>

        {/* Cuadrícula de resultados */}
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 animate-fade-in"
              >
                <div className="relative">
                  <img
                    src="/assets/placeholder-pet.jpg"
                    alt={pet.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    {/* Botón de Me gusta */}
                    <button
                      onClick={() => toggleLike(pet.id)}
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                      aria-label="Me gusta"
                    >
                      <FaHeart className={likedPets[pet.id] ? 'text-red-500' : 'text-gray-400'} />
                    </button>

                    {/* Botón de Compartir */}
                    <button
                      onClick={() => sharePet(pet.id)}
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                      aria-label="Compartir"
                    >
                      <FaShareAlt className="text-blue-500" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{pet.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm truncate">{pet.description}</p>
                  <Link to={`/pet/${pet.id}`} className="mt-2 inline-block text-[#9acd32] dark:text-blue-400 hover:underline">
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No se encontraron mascotas para "{species}". Prueba con otro término.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
