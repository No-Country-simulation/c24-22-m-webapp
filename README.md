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
cd guau_miau
```

### 2. Crear y activar un entorno virtual
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
o puedes usar .\venv\Scripts\activate
```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```
### 4.Aplicar migraciones

```
python manage.py makemigrations
python manage.py migrate
```

### 5. Inyectar datos ficticios para pruebas
```bash
sqlite3 db.sqlite3 ".read fictionalData.sql"
```

### 6. Ejecutar el servidor

```
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

## Pruebas
Es recomendable agregar pruebas unitarias en `tests.py`:
```bash
python manage.py test
```

## Contribuciones
Si deseas contribuir, abre un issue o un pull request con mejoras.

---
Proyecto desarrollado para la gestión eficiente de adopciones de mascotas. 🐶🐱

