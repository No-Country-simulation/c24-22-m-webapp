# Guau and Miau - API de Adopción de Mascotas

## Descripción 
Guau and Miau es una API RESTful desarrollada en Django con Django REST Framework (DRF) para gestionar la adopción de mascotas. Permite la gestión de adoptantes, refugios, mascotas, solicitudes de adopción y colaboraciones con refugios.

## Tecnologías Utilizadas
- Python 3.x
- Django 5.x
- Django REST Framework
- PostgreSQL 17 (recomendado para producción)

## Instalación
### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd backend
```

### 2. Instalar PostgreSQL 17
Descarga e instala PostgreSQL 17 desde la página oficial:
[https://www.enterprisedb.com/downloads/postgres-postgresql-downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Durante la instalación:
1. Selecciona las opciones predeterminadas con la contraseña `admin`.
2. Asegúrate de que PostgreSQL esté corriendo y que pgAdmin esté instalado.

#### Comprobar la instalación de PostgreSQL
Para verificar que PostgreSQL está instalado y funcionando, ejecuta:
```bash
psql --version
```
Si la instalación fue correcta, deberías ver algo como:
```
psql (PostgreSQL) 17.x
```

### 3. Crear la base de datos
Ejecuta `psql` y crea la base de datos:
```bash
psql -U postgres
```
Dentro del prompt de `psql`, ejecuta:
```sql
CREATE DATABASE guau_miau;
```
Sal del prompt con:
```sql
\q
```

### 4. Instalar Python
Descarga e instala la última versión de Python desde:
[https://www.python.org/](https://www.python.org/)

Durante la instalación, asegúrate de marcar la opción **"Add Python to PATH"**.

### 5. Crear y activar un entorno virtual
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
# o puedes usar:
.\venv\Scripts\activate
```

### 6. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 7. Aplicar migraciones
```bash
python manage.py makemigrations
python manage.py migrate
```

### 8. Inyectar datos ficticios para pruebas
```bash
psql -U postgres -d guau_miau -f fictionalData.sql
```

### 9. Ejecutar el servidor
```bash
python manage.py runserver
```

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
