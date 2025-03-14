# Guau and Miau - API de Adopción de Mascotas

## Descripción 
Guau and Miau es una API RESTful desarrollada en Django con Django REST Framework (DRF) para gestionar la adopción de mascotas. Permite la gestión de adoptantes, refugios, mascotas, solicitudes de adopción y colaboraciones con refugios.

## Tecnologías Utilizadas
- Python 3.x
- Django 5.x
- Django REST Framework
- PostgreSQL 17
- Docker

## Instalación y Despliegue en Local con Docker

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd backend
```

### 2. Eliminar datos previos de Docker (si es necesario)
```bash
docker system prune -a --volumes -f
```

### 3. Construir e iniciar los contenedores
```bash
docker-compose up --build -d
```

### 4. Aplicar migraciones
```bash
docker exec guau_miau_api python manage.py migrate
```

### 5. Inyectar datos ficticios para pruebas
```bash
docker cp fictionalData.sql guau_miau_db:/fictionalData.sql
docker exec -it guau_miau_db psql -U postgres -d guau_miau_db -f /fictionalData.sql
```

### 6. Reiniciar los contenedores para aplicar los cambios
```bash
docker-compose restart
```

### 7. Ver logs del backend (opcional)
```bash
docker logs -f guau_miau_api
```

### 8. Acceder a la API
La API estará disponible en: `http://localhost:8080`

## Endpoints Principales
| Recurso | Método | Endpoint |
|---------|--------|-----------|
| Adoptantes | GET/POST | `/api/adopters/` |
| Refugios | GET/POST | `/api/shelters/` |
| Mascotas | GET/POST | `/api/pets/` |
| Solicitudes de Adopción | GET/POST | `/api/adoption-requests/` |
| Colaboraciones | GET/POST | `/api/collaborations/` |
| Administradores | GET/POST | `/api/administrators/` |
| Gestión de Usuarios | GET/POST | `/api/user-managements/` |
| Filtros de Búsqueda | GET/POST | `/api/search-filters/` |

## Mejoras y Seguridad
- **Autenticación:** Implementar `permissions.IsAuthenticated` en las vistas.
- **CORS:** Agregar `django-cors-headers` para la integración con React.
- **Almacenamiento seguro de contraseñas:** Usar `make_password` o `AbstractUser`.
- **Subida de imágenes:** Configurar `ImageField` en lugar de `TextField` para fotos de mascotas.
- **Base de datos en producción:** Usar PostgreSQL en lugar de SQLite.

---
Proyecto desarrollado para la gestión eficiente de adopciones de mascotas. 🐶🐱

