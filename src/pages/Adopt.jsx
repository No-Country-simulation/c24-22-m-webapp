// pages/Adopt.jsx
import React, { useState } from 'react';
import PetCard from "../components/PetCard";
import { AiOutlineSearch } from "react-icons/ai"; // Ícono de lupa para los filtros

// Componente de la página de adopción de mascotas
function Adopt() {
  // Estado para almacenar los filtros seleccionados por el usuario
  const [filters, setFilters] = useState({
    species: "",           // Tipo de mascota (Perro/Gato)
    breed: "",             // Raza de la mascota
    age: "",               // Edad de la mascota
    size: "",              // Tamaño de la mascota
    location: "",          // Ubicación de la mascota
    personality: "",       // Personalidad de la mascota
    kidsCompatibility: "", // Compatibilidad con niños
    petsCompatibility: "", // Compatibilidad con otras mascotas
  });

  // Datos simulados de mascotas (modificados para incluir los nuevos filtros)
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

  // Filtrado de las mascotas basándose en los filtros aplicados
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

  // Función para manejar cambios en los filtros (se actualiza el estado de los filtros)
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Encuentra tu Compañero</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filtros */}
        <div className="col-span-1 bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-white">Filtros</h2>
          <div className="space-y-4">
            {/* Filtro de Tipo de Mascota */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Tipo de Mascota</label>
              <div className="relative">
                <select
                  name="species"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                >
                  <option value="">Selecciona</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                </select>
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* Filtro de Raza */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Raza</label>
              <div className="relative">
                <input
                  type="text"
                  name="breed"
                  placeholder="Ej. Labrador"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                />
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* Filtro de Edad */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Edad</label>
              <div className="relative">
                <input
                  type="number"
                  name="age"
                  placeholder="Ej. 2"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                />
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* Filtro de Tamaño */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Tamaño</label>
              <div className="relative">
                <select
                  name="size"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                >
                  <option value="">Selecciona</option>
                  <option value="Pequeño">Pequeño</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                </select>
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* Filtro de Ubicación */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Ubicación</label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  placeholder="Ej. Madrid"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                />
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* Filtro de Personalidad */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Personalidad</label>
              <div className="relative">
                <input
                  type="text"
                  name="personality"
                  placeholder="Ej. Juguetón"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                />
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* Filtro de Compatibilidad con Niños */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Compatibilidad con Niños</label>
              <div className="relative">
                <select
                  name="kidsCompatibility"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                >
                  <option value="">Selecciona</option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* Filtro de Compatibilidad con Mascotas */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Compatibilidad con Mascotas</label>
              <div className="relative">
                <select
                  name="petsCompatibility"
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded dark:bg-gray-800 text-white"
                >
                  <option value="">Selecciona</option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
                <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Resultados de la búsqueda */}
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mostrar las mascotas filtradas o un mensaje si no hay resultados */}
            {filteredPets.length > 0 ? (
              filteredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
            ) : (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-300">No se encontraron mascotas.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adopt;
