import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

function AdoptionForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const pets = [
    {
      id: 1,
      name: 'Limón',
      species: 'Gato',
      breed: 'No especificada',
      age: 1,
      gender: 'Macho',
      status: 'Castrado - Vacunado',
      description: 'Un gatito juguetón y adorable que busca un hogar.',
      compatibility: {
        kids: true,
        cats: true,
        dogs: false,
      },
      shelter: {
        name: 'S.O.S. HociCos',
        description: 'Servicio de rescate de animales',
        location: 'Mar del Plata, Buenos Aires, Argentina',
        email: 'soshocicos.mdp@gmail.com',
      },
      photos: ['/assets/pet1.jpg', '/assets/pet2.jpg'],
    },
    {
      id: 2,
      name: 'Melón',
      species: 'Gato',
      breed: 'Siamés',
      age: 2,
      gender: 'Macho',
      status: 'Castrado - Vacunado - Tuxedo',
      description: 'Melón es un gato elegante y curioso.',
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
    },
    {
      id: 3,
      name: 'Sandía',
      species: 'Gato',
      breed: 'Persa',
      age: 3,
      gender: 'Hembra',
      status: 'Castrada - Vacunada',
      description: 'Sandía es perfecta para un hogar tranquilo.',
      compatibility: {
        kids: false,
        cats: true,
        dogs: false,
      },
      shelter: {
        name: 'S.O.S. HociCos',
        description: 'Servicio de rescate de animales',
        location: 'Mar del Plata, Buenos Aires, Argentina',
        email: 'soshocicos.mdp@gmail.com',
      },
      photos: ['/assets/pet1.jpg', '/assets/pet2.jpg'],
    },
    {
      id: 4,
      name: 'Canela & Manzana',
      species: 'Perro',
      breed: 'Pitbull',
      age: 2,
      gender: 'Hembras',
      status: 'Castradas - Vacunadas',
      description: 'Dos hermanitos inseparables que buscan un hogar juntos.',
      compatibility: {
        kids: true,
        cats: false,
        dogs: true,
      },
      shelter: {
        name: 'S.O.S. HociCos',
        description: 'Servicio de rescate de animales',
        location: 'Mar del Plata, Buenos Aires, Argentina',
        email: 'soshocicos.mdp@gmail.com',
      },
      photos: ['/assets/pet1.jpg', '/assets/pet2.jpg'],
    },
    {
      id: 5,
      name: 'Budin',
      species: 'Perro',
      breed: 'Rottweiler',
      age: 4,
      gender: 'Macho',
      status: 'Castrado - Vacunado',
      description: 'Budin es un perro majestuoso y protector.',
      compatibility: {
        kids: true,
        cats: false,
        dogs: true,
      },
      shelter: {
        name: 'S.O.S. HociCos',
        description: 'Servicio de rescate de animales',
        location: 'Mar del Plata, Buenos Aires, Argentina',
        email: 'soshocicos.mdp@gmail.com',
      },
      photos: ['/assets/pet1.jpg', '/assets/pet2.jpg'],
    },
    {
      id: 6,
      name: 'Bufuelo',
      species: 'Perro',
      breed: 'Labrador',
      age: 3,
      gender: 'Macho',
      status: 'Castrado - Vacunado',
      description: 'Bufuelo es un compañero ideal para toda la familia.',
      compatibility: {
        kids: true,
        cats: true,
        dogs: true,
      },
      shelter: {
        name: 'S.O.S. HociCos',
        description: 'Servicio de rescate de animales',
        location: 'Mar del Plata, Buenos Aires, Argentina',
        email: 'soshocicos.mdp@gmail.com',
      },
      photos: ['/assets/pet1.jpg', '/assets/pet2.jpg'],
    },
  ];
  const pet = pets.find(p => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    nombreApellido: '',
    numeroContacto: '',
    email: '',
    ciudadProvPais: '',
    direccion: '',
    nucleoFamiliar: '',
    tipoVivienda: '',
    nombreMascota: pet?.name || '', 
    motivosAdopcion: '',
    experienciaAnimales: '',
    familiaDeAcuerdo: '',
    cuidadoVacaciones: '',
    conoceGastos: '',
    espacioAireLibre: '',
    aceptaTerminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Formulario enviado con éxito! El refugio se pondrá en contacto contigo pronto.');
    navigate('/'); 
  };

  const nextStep = () => {
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 px-4 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Solicitud de Adopción para {pet?.name || 'esta mascota'}
          </h1>
        </div>

        {currentStep === 1 && (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border-2 border-blue-500 animate-slide-up">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              REQUISITOS DE ADOPCIÓN
            </h2>

            <div className="flex flex-col md:flex-row mb-6">
              <div className="w-full md:w-2/3 pr-0 md:pr-6">
                <div className="mb-4 flex items-start">
                  <FaCheck className="mt-1 mr-2 flex-shrink-0 text-green-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Una vez completado el formulario de adopción, el refugio se contactará con el adoptante.
                  </p>
                </div>
                <div className="mb-4 flex items-start">
                  <FaCheck className="mt-1 mr-2 flex-shrink-0 text-green-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Los adoptantes deberán suscribir un contrato de adopción, comprometiéndose a garantizar una tenencia responsable a lo largo de la vida del animal.
                  </p>
                </div>
                <div className="mb-4 flex items-start">
                  <FaCheck className="mt-1 mr-2 flex-shrink-0 text-green-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Los animales serán entregados tras una entrevista presencial con el equipo de adopción correspondiente.
                  </p>
                </div>
                <div className="mb-4 flex items-start">
                  <FaCheck className="mt-1 mr-2 flex-shrink-0 text-green-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Cada refugio se reserva el derecho de aprobar o rechazar una postulación según los criterios y valores de su organización.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
                <img
                  src={pet?.photos[0] || '/assets/placeholder-pet.jpg'}
                  alt={pet?.name || 'Mascota'}
                  className="w-48 h-48 object-cover rounded-full border-2 border-gray-300"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Si te sentís listo, es momento de comenzar con la postulación para elegir a tu nuevo compañero de vida.
              </p>
              <button
                onClick={nextStep}
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-16 rounded-md transition-colors"
              >
                ESTOY LISTO
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Columna izquierda - Datos Adoptante */}
              <div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 text-center mb-4">
                  <h2 className="font-bold text-gray-800 dark:text-white">Datos Adoptante</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Nombre y Apellido</label>
                    <input
                      type="text"
                      name="nombreApellido"
                      value={formData.nombreApellido}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Número de contacto</label>
                    <input
                      type="tel"
                      name="numeroContacto"
                      value={formData.numeroContacto}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Ciudad, Provincia y País</label>
                    <input
                      type="text"
                      name="ciudadProvPais"
                      value={formData.ciudadProvPais}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Dirección</label>
                    <input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Columna derecha - Datos Mascota */}
              <div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 text-center mb-4">
                  <h2 className="font-bold text-gray-800 dark:text-white">Datos de la Mascota</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Motivos para adoptar</label>
                    <input
                      type="text"
                      name="motivosAdopcion"
                      value={formData.motivosAdopcion}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">¿Tiene experiencia con animales?</label>
                    <input
                      type="text"
                      name="experienciaAnimales"
                      value={formData.experienciaAnimales}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">¿Su familia está de acuerdo con la adopción?</label>
                    <input
                      type="text"
                      name="familiaDeAcuerdo"
                      value={formData.familiaDeAcuerdo}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">¿Cómo garantizará el cuidado durante las vacaciones?</label>
                    <input
                      type="text"
                      name="cuidadoVacaciones"
                      value={formData.cuidadoVacaciones}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">¿Conoce los gastos asociados con la adopción?</label>
                    <input
                      type="text"
                      name="conoceGastos"
                      value={formData.conoceGastos}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">¿Cuenta con espacio al aire libre para la mascota?</label>
                    <input
                      type="text"
                      name="espacioAireLibre"
                      value={formData.espacioAireLibre}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdoptionForm;
