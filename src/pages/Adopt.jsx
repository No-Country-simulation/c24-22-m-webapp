import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Añadí Link aquí

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
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  // Colores de la nueva paleta
  const colors = {
    blue: "#55a9e6",    // Azul de la paleta
    yellow: "#ffcf56",  // Amarillo de la paleta
    coral: "#ea7a77",   // Rojo/coral de la paleta
    green: "#7cc474",   // Verde de la paleta
  };

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
      description: "Luna es una labradora muy activa que adora los paseos largos y jugar a buscar la pelota."
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
      description: "Milo es un gato siamés muy vocal y afectuoso que busca un hogar tranquilo."
    },
    {
      id: 3,
      name: "Limón",
      species: "Gato",
      breed: "Europeo común",
      age: 1,
      size: "Pequeño",
      location: "Valencia",
      personality: "Juguetón",
      kidsCompatibility: "Sí",
      petsCompatibility: "Sí",
      description: "Un gatito juguetón y adorable que busca un hogar."
    },
    {
      id: 4,
      name: "Melón",
      species: "Gato",
      breed: "Persa",
      age: 3,
      size: "Mediano",
      location: "Sevilla",
      personality: "Curioso",
      kidsCompatibility: "Sí",
      petsCompatibility: "No",
      description: "Melón es un gato elegante y curioso."
    },
    {
      id: 5,
      name: "Sandía",
      species: "Gato",
      breed: "Británico",
      age: 4,
      size: "Mediano",
      location: "Bilbao",
      personality: "Tranquilo",
      kidsCompatibility: "No",
      petsCompatibility: "No",
      description: "Sandía es perfecta para un hogar tranquilo."
    },
    {
      id: 6,
      name: "Canela & Manzana",
      species: "Perro",
      breed: "Mestizo",
      age: 1,
      size: "Pequeño",
      location: "Madrid",
      personality: "Sociable",
      kidsCompatibility: "Sí",
      petsCompatibility: "Sí",
      description: "Dos hermanitos inseparables que buscan un hogar juntos."
    },
    {
      id: 7,
      name: "Budin",
      species: "Perro",
      breed: "Pastor Alemán",
      age: 5,
      size: "Grande",
      location: "Barcelona",
      personality: "Protector",
      kidsCompatibility: "Sí",
      petsCompatibility: "No",
      description: "Budin es un perro majestuoso y protector."
    },
    {
      id: 8,
      name: "Bufuelo",
      species: "Perro",
      breed: "Golden Retriever",
      age: 2,
      size: "Grande",
      location: "Valencia",
      personality: "Amigable",
      kidsCompatibility: "Sí",
      petsCompatibility: "Sí",
      description: "Bufuelo es un compañero ideal para toda la familia."
    }
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
  
  const handleViewProfile = (pet) => {
    navigate(`/pet/${pet.id}`, { state: { pet } });
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const resetFilters = () => {
    setFilters({
      species: "",
      breed: "",
      age: "",
      size: "",
      location: "",
      personality: "",
      kidsCompatibility: "",
      petsCompatibility: "",
    });
  };

  // Iconos para las características de las mascotas
  const getSpeciesIcon = (species) => {
    return species === "Perro" ? "🐕" : "🐈";
  };

  // Función para asignar colores según el tipo de mascota
  const getPetColor = (species) => {
    return species === "Perro" ? colors.blue : colors.coral;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f7fa" }}>
      {/* Header con imagen de fondo */}
      <div className="relative bg-cover bg-center h-64 mb-6" style={{ backgroundImage: `url('/api/placeholder/1920/500?text=Adopta+una+mascota')` }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center" style={{ backgroundColor: 'rgba(85, 169, 230, 0.7)' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">
            Adopta Un Amigo
          </h1>
          <p className="text-xl text-white text-center max-w-2xl px-4">
            Cada mascota merece un hogar lleno de amor y cuidados
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Botón para mostrar/ocultar filtros en móvil */}
        <div className="md:hidden mb-6">
          <button 
            onClick={toggleFilters}
            className="w-full text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all flex justify-center items-center space-x-2"
            style={{ backgroundColor: colors.blue }}
          >
            <span>{isFilterOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'}</span>
            <span>{isFilterOpen ? '▲' : '▼'}</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Panel de filtros */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block md:w-1/4 transition-all duration-300`}>
            <div className="sticky top-4 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="py-4 px-6" style={{ backgroundColor: colors.blue }}>
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🔍</span> Filtrar Mascotas
                </h2>
              </div>
              
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Tipo de Mascota</label>
                  <select
                    name="species"
                    value={filters.species}
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  >
                    <option value="">Todos</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Raza</label>
                  <input
                    type="text"
                    name="breed"
                    value={filters.breed}
                    placeholder="Ej. Labrador"
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Edad (años)</label>
                  <input
                    type="number"
                    name="age"
                    value={filters.age}
                    placeholder="Ej. 2"
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Tamaño</label>
                  <select
                    name="size"
                    value={filters.size}
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  >
                    <option value="">Todos</option>
                    <option value="Pequeño">Pequeño</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Ubicación</label>
                  <input
                    type="text"
                    name="location"
                    value={filters.location}
                    placeholder="Ej. Madrid"
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Personalidad</label>
                  <input
                    type="text"
                    name="personality"
                    value={filters.personality}
                    placeholder="Ej. Juguetón"
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Compatible con Niños</label>
                  <select
                    name="kidsCompatibility"
                    value={filters.kidsCompatibility}
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  >
                    <option value="">Todos</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Compatible con Mascotas</label>
                  <select
                    name="petsCompatibility"
                    value={filters.petsCompatibility}
                    onChange={handleFilterChange}
                    className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:border-transparent"
                    style={{ focusRing: colors.blue }}
                  >
                    <option value="">Todos</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <button 
                  onClick={resetFilters}
                  className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl shadow transition-all"
                >
                  Limpiar Filtros
                </button>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  <span style={{ color: colors.blue }}>{filteredPets.length}</span> mascotas encontradas
                </h2>
                <div className="text-sm text-gray-500">
                  Mostrando resultados para tus filtros
                </div>
              </div>
              
              {filteredPets.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-6xl mb-4">😢</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No encontramos mascotas</h3>
                  <p className="text-gray-500 max-w-md">
                    No hay mascotas que coincidan con los filtros seleccionados. ¿Por qué no intentas con otros criterios?
                  </p>
                  <button 
                    onClick={resetFilters}
                    className="mt-6 text-white font-medium py-2 px-6 rounded-lg transition-all"
                    style={{ backgroundColor: colors.blue }}
                  >
                    Mostrar todas las mascotas
                  </button>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPets.map((pet) => (
                  <div key={pet.id} className="group">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 hover:shadow-2xl transition-all duration-300 transform group-hover:scale-102 relative">
                      <div className="h-56 bg-gray-200 relative overflow-hidden">
                        <img 
                          src={`/api/placeholder/500/400?text=${pet.name}`} 
                          alt={pet.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 flex space-x-2">
                          <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: getPetColor(pet.species) }}>
                            {getSpeciesIcon(pet.species)} {pet.species}
                          </span>
                          <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: colors.yellow }}>
                            {pet.age} {pet.age === 1 ? "año" : "años"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold text-gray-800">
                            {pet.name}
                          </h3>
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                            {pet.location}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {pet.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                          <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.blue }}></span>
                            <span className="text-gray-700">{pet.breed}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.green }}></span>
                            <span className="text-gray-700">{pet.size}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.yellow }}></span>
                            <span className="text-gray-700">{pet.personality}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm text-gray-700 mb-4">
                          <div className="flex items-center">
                            <span className="mr-1">👶</span>
                            <span>Niños: <span style={{ color: pet.kidsCompatibility === 'Sí' ? colors.green : colors.coral, fontWeight: 500 }}>{pet.kidsCompatibility}</span></span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-1">🐾</span>
                            <span>Mascotas: <span style={{ color: pet.petsCompatibility === 'Sí' ? colors.green : colors.coral, fontWeight: 500 }}>{pet.petsCompatibility}</span></span>
                          </div>
                        </div>
                        
                        <button 
                          className="w-full py-3 text-white font-medium rounded-xl shadow transition-all duration-300 transform group-hover:scale-105 flex justify-center items-center space-x-2"
                          onClick={() => handleViewProfile(pet)}
                          style={{ 
                            background: `linear-gradient(to right, ${colors.blue}, ${colors.coral})`,
                          }}
                        >
                          <span>Conocer a {pet.name}</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sección de ayuda con enlace a Contact */}
            {filteredPets.length > 0 && (
              <div className="rounded-2xl shadow-xl p-8 text-white" style={{ 
                background: `linear-gradient(to right, ${colors.blue}, ${colors.yellow})`,
              }}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <h3 className="text-2xl font-bold mb-2">¿Necesitas ayuda para elegir?</h3>
                    <p className="opacity-90">
                      Nuestro equipo puede ayudarte a encontrar el compañero perfecto para tu hogar y estilo de vida.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to="/contact"
                      className="bg-white hover:bg-gray-100 font-bold py-3 px-6 rounded-xl shadow-lg transition-all inline-block"
                      style={{ color: colors.blue }}
                    >
                      Contactar Asesor
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adopt;