import React from 'react';
import { Link } from "react-router-dom";

function PetCard({ pet }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
      <img
        src="/assets/placeholder-pet.jpg"
        alt={pet.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{pet.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{pet.species} - {pet.breed}</p>
        <p className="text-gray-500 dark:text-gray-400">{pet.age} años - {pet.size}</p>
        <p className="text-gray-500 dark:text-gray-400">Personalidad: {pet.personality}</p>
        <p className="text-gray-500 dark:text-gray-400">
          Niños: {pet.kidsCompatibility}, Mascotas: {pet.petsCompatibility}
        </p>
        <Link
          to={`/pet/${pet.id}`}
          className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ver Perfil
        </Link>
      </div>
    </div>
  );
}

export default PetCard;