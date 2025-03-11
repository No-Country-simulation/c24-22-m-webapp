import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

function Location() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg w-full max-w-4xl p-8 animate-fade-in">
        {/* Título y Descripción */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center animate-slide-down">
          Dónde Estamos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-center animate-slide-up">
          Encuentra los refugios más cercanos. Pronto integraremos un mapa interactivo.
        </p>

        {/* Card para el mapa */}
        <div className="bg-[#e8eef4] dark:bg-gray-600 h-64 rounded-lg flex items-center justify-center mb-6 animate-slide-left">
          <p className="text-gray-500 dark:text-gray-200">Mapa en desarrollo</p>
        </div>

      </div>
    </div>
  );
}

const LocationWithErrorBoundary = () => (
  <ErrorBoundary>
    <Location />
  </ErrorBoundary>
);

export default LocationWithErrorBoundary;
