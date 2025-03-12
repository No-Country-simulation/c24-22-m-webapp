# 🐾 Guau & Miau 🐾

## 📌 Descripción del Proyecto

**Guau & Miau** es una plataforma diseñada para facilitar la adopción de mascotas y fomentar la colaboración con refugios de animales. La aplicación permite a los adoptantes buscar mascotas, enviar solicitudes de adopción y conocer más sobre los refugios. A su vez, los refugios pueden registrar y gestionar las adopciones de sus animales.

---

## 🛠️ Tecnologías Utilizadas

| Categoría              | Tecnologías                                                  |
| ---------------------- | ------------------------------------------------------------ |
| **Backend**           | Django, Python 3.x                                           |
| **Frontend**          | React, Vite, Tailwind CSS, React Router, React Icons, ESLint |
| **Base de Datos**     | PostgreSQL 17                                                |
| **UI/UX**             | Figma                                                        |
| **Gestión de Proyectos** | Jira, Slack, Google Meet                                     |
| **Testing**           | Postman                                                      |
| **Control de Versiones** | GitHub                                                       |

---

## 🌟 Funcionalidades Clave

### 👨‍👩‍👧‍👦 Para Adoptantes

- 🏠 **Menú de Navegación Intuitivo**
  - Secciones: "Adoptar", "Colaborar", "Quiénes Somos", "Dónde Estamos".
  - Compatible con dispositivos móviles y escritorio.
  - Incluye un mapa interactivo con la ubicación de los refugios.

- 🔍 **Búsqueda de Mascotas con Filtros**
  - Filtros disponibles: especie, raza, edad, tamaño y ubicación.
  - Cada mascota muestra nombre, foto y descripción breve.

- 📖 **Visualización del Perfil de una Mascota**
  - Información detallada: fotos, descripción, edad, estado de salud y refugio responsable.
  - Botón para iniciar solicitud de adopción.

- 📝 **Envío de Solicitud de Adopción**
  - Formulario con datos personales, motivo de adopción y experiencia con mascotas (opcional).
  - Confirmación por pantalla y correo electrónico.
  - Notificación automática al refugio correspondiente.

### 🏡 Para Refugios de Animales

- 🔐 **Registro y Login de Refugios**
  - Formulario de registro con validación de email único y confirmación.
  - Inicio de sesión con email y contraseña.

- 📂 **Gestión de Mascotas**
  - Registro de nuevas mascotas con fotos, descripción, salud y ubicación.
  - Edición y actualización de información de mascotas.
  - Eliminación de mascotas con confirmación previa.

- 📋 **Gestión de Solicitudes de Adopción**
  - Panel de control exclusivo para refugios.
  - Listado de solicitudes con datos del adoptante.
  - Opciones para aprobar o rechazar solicitudes.

### 🔧 Para Administradores

- ⚙️ **Gestión de Usuarios**
  - Sección administrativa con lista de cuentas de adoptantes y refugios.
  - Posibilidad de activar, desactivar o eliminar cuentas.
  - Restricción de acceso a cuentas desactivadas.

---

## 🚀 Instalación y Configuración

### 📌 Requisitos Previos

- Python 3.x
- Django
- Node.js y npm
- React
- PostgreSQL 17

### ⚡ Pasos para Ejecutar el Proyecto

#### 🖥️ Clonar el repositorio

Abrir la terminal en Visual Studio Code o cualquier otro editor con terminal integrada y ejecutar:

```bash
 git clone https://github.com/No-Country-simulation/c24-22-m-webapp.git
```

#### 🔧 Configurar el backend

1. Abrir una terminal en Visual Studio Code y acceder a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instalar PostgreSQL 17 desde [EnterpriseDB](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).
3. Crear la base de datos ejecutando en la terminal:
   ```bash
   psql -U postgres
   CREATE DATABASE guau_miau;
   \q
   ```
4. Instalar Python y dependencias:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   ```
5. Aplicar migraciones y cargar datos ficticios:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   psql -U postgres -d guau_miau -f fictionalData.sql
   ```
6. Ejecutar el servidor:
   ```bash
   python manage.py runserver
   ```

#### 💻 Configurar el frontend

1. Abrir una nueva terminal en Visual Studio Code y acceder a la carpeta del frontend:
   ```bash
   cd frontend
   ```
2. Instalar dependencias ejecutando:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir el navegador y visitar: [http://localhost:5173](http://localhost:5173).

### 📂 Estructura del Proyecto

```
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

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Si deseas colaborar, abre un **issue** o envía un **pull request** con mejoras y correcciones.

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.

---

## 👥 Equipo

- **Nahuel Marcilli** - Backend
  - GitHub: [@marili-mn](https://github.com/marili-mn)
  - LinkedIn: [Nahuel Marcilli](https://www.linkedin.com/in/nahuelmarcilli/)
- **Jose** - Frontend
- **Camila** - Frontend
- **Florencia Mauna** - UI/UX
  - GitHub: [@FlorMauna](https://github.com/FlorMauna)
  - LinkedIn: [Florencia Mauna](https://www.linkedin.com/in/florenciamauna/)
- **Samanta Ramos Podadera** - QA
  - GitHub: [@SamantaRamosPodadera](https://github.com/SamantaRamosPodadera)
  - LinkedIn: [Samanta Ramos Podadera](https://www.linkedin.com/in/samantaramospodadera/)

---

🎯 **Gracias por apoyar este proyecto!** 🎯










