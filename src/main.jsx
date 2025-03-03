import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Asegúrate de importar los estilos de Tailwind
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);