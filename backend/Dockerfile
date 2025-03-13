# Usa una imagen optimizada de Python
FROM python:3.11-slim

# Define el directorio de trabajo en el contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY requirements.txt .

# Instala las dependencias y elimina los archivos temporales
RUN pip install --no-cache-dir -r requirements.txt

# Copia el código de la aplicación después de instalar dependencias
COPY . .

# Define las variables de entorno para evitar errores de input
ENV PYTHONUNBUFFERED=1

# Asegurar que la carpeta está correctamente configurada
RUN chmod -R 755 /app

# Expone el puerto 8000 donde correrá la API
EXPOSE 8000

# Comando para iniciar el servidor de Django usando Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "guau_miau.wsgi:application"]
