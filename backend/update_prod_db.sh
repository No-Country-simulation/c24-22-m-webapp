#!/bin/bash

# Aplicar migraciones
echo "Aplicando migraciones en producción..."
python manage.py makemigrations
python manage.py migrate

# Inyectar datos desde fictionalData.sql
echo "Inyectando datos desde fictionalData.sql en producción..."
if [ -f "fictionalData.sql" ]; then
    psql $DATABASE_URL -f fictionalData.sql
    echo "Datos inyectados correctamente en producción."
else
    echo "El archivo fictionalData.sql no existe en el directorio raíz."
fi

echo "Proceso completado en producción."    