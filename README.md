# Guau and Miau - API de Adopción de Mascotas

## Descripción 
Guau and Miau es una API RESTful desarrollada en Django con Django REST Framework (DRF) para gestionar la adopción de mascotas. Permite la gestión de adoptantes, refugios, mascotas, solicitudes de adopción y colaboraciones con refugios.

## Tecnologías Utilizadas
- Python 3.x
- Django 5.x
- Django REST Framework
- SQLite (para desarrollo, recomendable PostgreSQL en producción)

## Instalación
### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd backend
```

### 2. Configurar SQLite en Windows
Para utilizar SQLite en Windows, sigue estos pasos:

1. Descarga las siguientes herramientas desde la página oficial de SQLite:
   - [SQLite DLL (64-bit)](https://www.sqlite.org/2025/sqlite-dll-win-x64-3490100.zip)
   - [SQLite Tools (64-bit)](https://www.sqlite.org/2025/sqlite-tools-win-x64-3490100.zip)
2. Crea un directorio `C:\sqlite3`.
3. Extrae los archivos descargados en `C:\sqlite3`.
4. Agrega `C:\sqlite3` al `PATH` de Windows:
   - Abre el Explorador de Windows y haz clic derecho en "Este equipo".
   - Selecciona "Propiedades" > "Configuración avanzada del sistema".
   - En la pestaña "Opciones avanzadas", haz clic en "Variables de entorno".
   - En "Variables del sistema", selecciona "Path" y haz clic en "Editar".
   - Agrega `C:\sqlite3` y guarda los cambios.

### 3. Instalar Python
Descarga e instala la última versión de Python desde:
[https://www.python.org/](https://www.python.org/)

Durante la instalación, asegúrate de marcar la opción **"Add Python to PATH"**.

### 4. Crear y activar un entorno virtual
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
# o puedes usar:
.\venv\Scripts\activate
```

### 5. Instalar dependencias
```bash
pip install -r requirements.txt
```
### 6. Aplicar migraciones
```bash
python manage.py makemigrations
python manage.py migrate
```

### 7. Inyectar datos ficticios para pruebas
```bash
sqlite3 db.sqlite3 ".read fictionalData.sql"
```

### 8. Ejecutar el servidor
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
- **Base de datos en producción:** Usar PostgreSQL o MySQL en lugar de SQLite.

---
Proyecto desarrollado para la gestión eficiente de adopciones de mascotas. 🐶🐱

