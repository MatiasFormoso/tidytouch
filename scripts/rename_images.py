#!/usr/bin/env python3
"""
Script para renombrar las imágenes según su uso en el sitio
"""
import os
import shutil
from pathlib import Path

# Mapeo de imágenes identificadas
image_mapping = {
    "Captura de pantalla 2025-12-02 144701.png": "toallas-beige.jpg",  # Slide 2 - Value Proposition
    "Captura de pantalla 2025-12-02 144738.png": "cajas-lavanda.jpg",  # Slide 3 - Misión
    "Captura de pantalla 2025-12-02 144812.png": "perchero-industrial.jpg",  # Slide 4 - Filosofía
    "Captura de pantalla 2025-12-02 144909.png": "luisa-roca.jpg",  # Slide 5 - Bio
    "Captura de pantalla 2025-12-02 144937.png": "collage-hogar.jpg",  # Slide 6 - Servicios Hogar
    "Captura de pantalla 2025-12-02 144956.png": "archivadores-blancos.jpg",  # Slide 7 - Servicios Oficina
    "Captura de pantalla 2025-12-02 145016.png": "manos-laptop.jpg",  # Slide 7 - Servicios Digital
    "Captura de pantalla 2025-12-02 145042.png": "banner-inspiracion.jpg",  # Slide 9 - CTA/Inspiración
}

def rename_images():
    images_dir = Path("public/images")
    
    if not images_dir.exists():
        print(f"Error: Directorio {images_dir} no existe")
        return
    
    print("Renombrando imágenes según el brief...")
    print("-" * 50)
    
    for old_name, new_name in image_mapping.items():
        old_path = images_dir / old_name
        new_path = images_dir / new_name
        
        if old_path.exists():
            # Convertir PNG a JPG manteniendo calidad
            try:
                # Primero copiamos y renombramos
                if new_path.exists():
                    print(f"⚠️  {new_name} ya existe, omitiendo...")
                    continue
                
                shutil.copy2(old_path, new_path)
                print(f"[OK] {old_name} -> {new_name}")
            except Exception as e:
                print(f"[ERROR] Error copiando {old_name}: {e}")
        else:
            print(f"[WARNING] No se encontro: {old_name}")
    
    print("-" * 50)
    print("Renombrado completo!")
    print("\nNota: Las imágenes originales PNG se mantienen por seguridad.")

if __name__ == "__main__":
    rename_images()

