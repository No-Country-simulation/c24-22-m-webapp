#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'guau_miau.settings')
    
    try:
        from django.core.management import execute_from_command_line
    except ImportError:
        sys.stderr.write("Error: No se pudo importar Django. Asegúrate de que está instalado y de haber activado el entorno virtual.\n")
        sys.exit(1)
    
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
