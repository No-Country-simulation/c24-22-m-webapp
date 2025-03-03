# Guau & Miau - Frontend de Adopción de Mascotas 🐶🐱

## Descripción
Guau & Miau es el frontend desarrollado en React utilizando Vite como herramienta de construcción. Esta interfaz está diseñada para interactuar con la API RESTful del backend, permitiendo a los usuarios buscar mascotas, gestionar solicitudes de adopción, colaborar con refugios y más.

La aplicación cuenta con funcionalidades avanzadas como filtros de búsqueda, modo oscuro/claro, diseño responsive y animaciones fluidas para mejorar la experiencia del usuario.

## Tecnologías Utilizadas
- **React**: Framework principal.
- **Vite**: Herramienta de construcción rápida.
- **Tailwind CSS**: Framework de estilos.
- **React Router**: Manejo de rutas.
- **React Icons**: Íconos visuales.
- **ESLint**: Linter para mantener un código limpio y consistente.

## Instalación

### 1. Clonar el Repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd frontend     
```
### 2. Instalar Dependencias
```bash
npm install
```
### 3. Ejecutar el Servidor de Desarrollo
```bash
npm run dev
```
Abre tu navegador y visita http://localhost:5173.

### Estructura del Proyecto
```bash
joseorteha-plataform-adoption/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
    ├── App.css
    ├── App.jsx
    ├── main.jsx
    ├── assets/
    ├── components/
    │    ├── ErrorBoundary.jsx
    │    ├── Navbar.jsx
    │    └── PetCard.jsx
    ├── hooks/
    │    └── useAuth.js
    ├── pages/
    │    ├── About.jsx
    │    ├── Adopt.jsx
    │    ├── Collaborate.jsx
    │    ├── Home.jsx
    │    ├── Location.jsx
    │    ├── Login.jsx
    │    ├── PetProfile.jsx
    │    └── SignUp.jsx
    ├── services/
    │    └── api.js
    └── styles/
        ├── Home.css
        └── index.css
```

# Características Principales
## Búsqueda Avanzada
  Filtros por especie, raza, edad, tamaño, personalidad, compatibilidad con niños y otras mascotas.
  Resultados dinámicos basados en los filtros seleccionados.
    
## Modo Oscuro/Claro
  Cambio dinámico entre modos oscuro y claro.
  Persistencia del modo seleccionado mediante localStorage.
## Diseño Responsive
  Compatible con dispositivos móviles y escritorio.
  Uso de Tailwind CSS para un diseño flexible y moderno.
## Componentes Reutilizables
  Navbar con soporte para modo oscuro.
  Tarjetas de mascotas (PetCard) para mostrar información relevante.
  Manejo de errores con ErrorBoundary.
### Si tienes preguntas o sugerencias, no dudes en contactarnos:
  Frontend Lead: Jose Ortega (joseortegahac@gmail.com)


