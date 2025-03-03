import React from 'react'; // Importamos React
import { useParams } from "react-router-dom"; // useParams se utiliza para obtener parámetros de la URL

function PetProfile() {
  // Extraemos el id de la mascota desde los parámetros de la URL
  const { id } = useParams();

  // Simulación de los datos de la mascota (normalmente estos vendrían de un backend)
  const pet = {
    id,
    name: "Luna",
    species: "Perro",
    breed: "Labrador",
    age: 2,
    size: "Mediano",
    health: "Sana",
    description: "Luna es una perrita juguetona y cariñosa.",
    shelter: {
      name: "Refugio Madrid",
      email: "madrid@refugio.com",
      phone: "123-456-789"
    },
    photos: ["/assets/pet1.jpg", "/assets/pet2.jpg"],
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      {/* Título principal con el nombre de la mascota */}
      <h1 className="text-3xl font-bold mb-6">{pet.name}</h1>

      {/* Diseño en dos columnas para fotos y detalles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Galería de fotos de la mascota */}
        <div>
          {/* Foto principal de la mascota */}
          <img
            src={pet.photos[0]}
            alt={`Foto de ${pet.name}`}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          
          {/* Galería de fotos pequeñas */}
          <div className="flex space-x-2">
            {pet.photos.slice(1).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${pet.name} foto ${index + 2}`}
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* Detalles de la mascota */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          {/* Información sobre la mascota */}
          <p><strong>Especie:</strong> {pet.species}</p>
          <p><strong>Raza:</strong> {pet.breed}</p>
          <p><strong>Edad:</strong> {pet.age} años</p>
          <p><strong>Tamaño:</strong> {pet.size}</p>
          <p><strong>Salud:</strong> {pet.health}</p>
          <p><strong>Descripción:</strong> {pet.description}</p>
          
          {/* Información sobre el refugio */}
          <p><strong>Refugio:</strong> {pet.shelter.name}</p>
          <p><strong>Contacto:</strong> {pet.shelter.email} | {pet.shelter.phone}</p>

          {/* Botón para solicitar la adopción */}
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Solicitar Adopción
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetProfile;
