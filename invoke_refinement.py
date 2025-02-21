import os
import shutil
import stat

def move_directories_and_files(source, destination):
    """
    Mueve todos los directorios y archivos desde 'source' a 'destination', excepto los archivos clave,
    la carpeta 'backend', y la carpeta '.git'.
    """
    exclude_files = {'manage.py', 'README.md', 'requirements.txt', '.gitignore', 'invoke_refinement.py'}
    exclude_dirs = {'backend', '.git'}  # Excluir la carpeta 'backend' y la carpeta '.git'

    for item in os.listdir(source):
        source_path = os.path.join(source, item)
        destination_path = os.path.join(destination, item)

        # No mover los archivos clave
        if item in exclude_files:
            print(f"⚠️ {item} se mantiene en la raíz.")
            continue

        # No mover la carpeta 'backend' ni la carpeta '.git'
        if item in exclude_dirs:
            print(f"⚠️ {item} se mantiene en la raíz.")
            continue

        # Si el item ya existe en el destino, lo sobrescribimos
        if os.path.exists(destination_path):
            print(f"⚠️ {item} ya existe en {destination}, se sobrescribirá.")
            if os.path.isdir(destination_path):
                shutil.rmtree(destination_path)  # Eliminar directorio existente
            else:
                os.remove(destination_path)  # Eliminar archivo existente

        # Mover el item (archivo o directorio)
        print(f"🚚 Moviendo: {source_path} a {destination_path}")
        shutil.move(source_path, destination_path)

def create_directory_structure(base_dir):
    """
    Crea la estructura de directorios en la ubicación deseada.
    """
    directories = [
        'backend/core',
        'backend/adoption',
        'backend/shelter',
        'backend/users',
        'backend/api',
        'backend/config',
        'backend/static/css',
        'backend/static/js',
        'backend/static/img',
        'backend/templates/base',
        'backend/templates/partials',
        'backend/media',
        'backend/scripts',
    ]

    for directory in directories:
        dir_path = os.path.join(base_dir, directory)
        if not os.path.exists(dir_path):
            print(f"📂 Creando directorio: {dir_path}")
            os.makedirs(dir_path)
        else:
            print(f"⚠️ El directorio {dir_path} ya existe.")

def force_remove_readonly(func, path, _):
    """
    Función para eliminar archivos de solo lectura en Windows.
    """
    os.chmod(path, stat.S_IWRITE)  # Dar permisos de escritura
    func(path)  # Eliminar el archivo o directorio

def cleanup_backend_directory(base_dir):
    """
    Elimina la carpeta 'backend' si existe para evitar conflictos.
    """
    backend_dir = os.path.join(base_dir, 'backend')
    if os.path.exists(backend_dir):
        print(f"🧹 Eliminando la carpeta 'backend' existente: {backend_dir}")
        shutil.rmtree(backend_dir, onerror=force_remove_readonly)

def refinement_script():
    """
    Ejecuta el refinamiento de la estructura de directorios y mueve los directorios y archivos.
    """
    base_dir = os.getcwd()  # Directorio base donde se ejecuta el script
    print(f"🚀 Ejecutando script en: {base_dir}")

    # Eliminar la carpeta 'backend' existente para evitar conflictos
    cleanup_backend_directory(base_dir)

    # Crear la estructura de directorios si no existe
    create_directory_structure(base_dir)

    # Mover los directorios y archivos desde la raíz al directorio 'backend'
    move_directories_and_files(base_dir, os.path.join(base_dir, 'backend'))

    print("✅ Refinamiento de la estructura de directorios completado.")

if __name__ == '__main__':
    refinement_script()
