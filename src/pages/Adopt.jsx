import React, { useState } from 'react';
import PetCard from "../components/PetCard";

function Adopt() {
  const [filters, setFilters] = useState({
    species: "",
    breed: "",
    age: "",
    size: "",
    location: "",
    personality: "",
    kidsCompatibility: "",
    petsCompatibility: "",
  });

  const pets = [
    {
      id: 1,
      name: "Luna",
      species: "Perro",
      breed: "Labrador",
      age: 2,
      size: "Mediano",
      location: "Madrid",
      personality: "Juguetón",
      kidsCompatibility: "Sí",
      petsCompatibility: "Sí",
    },
    {
      id: 2,
      name: "Milo",
      species: "Gato",
      breed: "Siamés",
      age: 1,
      size: "Pequeño",
      location: "Barcelona",
      personality: "Cariñoso",
      kidsCompatibility: "No",
      petsCompatibility: "Sí",
    },
  ];

  const filteredPets = pets.filter((pet) =>
    (!filters.species || pet.species === filters.species) &&
    (!filters.breed || pet.breed.toLowerCase().includes(filters.breed.toLowerCase())) &&
    (!filters.age || pet.age === Number(filters.age)) &&
    (!filters.size || pet.size === filters.size) &&
    (!filters.location || pet.location.toLowerCase().includes(filters.location.toLowerCase())) &&
    (!filters.personality || pet.personality.toLowerCase().includes(filters.personality.toLowerCase())) &&
    (!filters.kidsCompatibility || pet.kidsCompatibility === filters.kidsCompatibility) &&
    (!filters.petsCompatibility || pet.petsCompatibility === filters.petsCompatibility)
  );

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center ">
      <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg w-full max-w-4xl p-8 m-20 animate-fade-in">
        {/* Título y Descripción */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center animate-slide-down">
          Encuentra tu Compañero
        </h1>

        {/* Filtros y tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filtros */}
          <div className="col-span-1 bg-[#e8eef4] dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Filtros</h2>
            <div className="space-y-4">
              {/* Filtro de Tipo de Mascota */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Tipo de Mascota</label>
                <div className="relative">
                  <select
                    name="species"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500"
                  >
                    <option value="">Selecciona</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                  </select>
                </div>
              </div>
              {/* Filtro de Raza */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Raza</label>
                <div className="relative">
                  <input
                    type="text"
                    name="breed"
                    placeholder="Ej. Labrador"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500 placeholder-gray-500"
                  />
                </div>
              </div>
              {/* Filtro de Edad */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Edad</label>
                <div className="relative">
                  <input
                    type="number"
                    name="age"
                    placeholder="Ej. 2"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500 placeholder-gray-500"
                  />
                </div>
              </div>
              {/* Filtro de Tamaño */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Tamaño</label>
                <div className="relative">
                  <select
                    name="size"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500"
                  >
                    <option value="">Selecciona</option>
                    <option value="Pequeño">Pequeño</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
              </div>
              {/* Filtro de Ubicación */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Ubicación</label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    placeholder="Ej. Madrid"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500 placeholder-gray-500"
                  />
                </div>
              </div>
              {/* Filtro de Personalidad */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Personalidad</label>
                <div className="relative">
                  <input
                    type="text"
                    name="personality"
                    placeholder="Ej. Juguetón"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500 placeholder-gray-500"
                  />
                </div>
              </div>
              {/* Filtro de Compatibilidad con Niños */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Compatibilidad con Niños</label>
                <div className="relative">
                  <select
                    name="kidsCompatibility"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500"
                  >
                    <option value="">Selecciona</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              {/* Filtro de Compatibilidad con Mascotas */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Compatibilidad con Mascotas</label>
                <div className="relative">
                  <select
                    name="petsCompatibility"
                    onChange={handleFilterChange}
                    className="w-full p-2 text-sm bg-white dark:bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-300 text-gray-500"
                  >
                    <option value="">Selecciona</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Resultados de la búsqueda */}
          <div className="col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mostrar las mascotas filtradas o un mensaje si no hay resultados */}
              {filteredPets.length > 0 ? (
                filteredPets.map((pet) => (
                  <div key={pet.id} className="transform transition-transform hover:scale-105">
                    <PetCard pet={pet} />
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500 dark:text-gray-300">No se encontraron mascotas.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adopt;
