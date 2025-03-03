// pages/Location.jsx
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

function Location() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Dónde Estamos</h1>
      <p className="text-lg mb-4">
        Encuentra los refugios más cercanos. Pronto integraremos un mapa interactivo.
      </p>
      {/* Placeholder para mapa */}
      <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-300">Mapa en desarrollo</p>
      </div>
    </div>
  );
}

export default () => (
  <ErrorBoundary>
    <Location />
  </ErrorBoundary>
);