# -*- coding: utf-8 -*-
"""
Extrae las imagenes de cada pagina del PDF para analizarlas
"""
try:
    from pdf2image import convert_from_path
    import os
    
    PDF_PATH = "Portafolio Tidy Touch by Luisa Rueda.pdf"
    OUTPUT_DIR = "pdf_images"
    
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"[INFO] Creado directorio: {OUTPUT_DIR}")
    
    print("=" * 70)
    print("EXTRAYENDO IMAGENES DEL PDF")
    print("=" * 70)
    print(f"\n[INFO] Convirtiendo paginas a imagenes...")
    print("[INFO] Esto puede tardar varios minutos para un PDF de 79MB...\n")
    
    images = convert_from_path(PDF_PATH, dpi=300, fmt='png')
    
    print(f"[SUCCESS] Extraidas {len(images)} paginas\n")
    
    for i, image in enumerate(images, 1):
        output_path = os.path.join(OUTPUT_DIR, f"pagina_{i:02d}.png")
        image.save(output_path, 'PNG')
        print(f"[OK] Pagina {i} guardada: {output_path}")
    
    print(f"\n[SUCCESS] Todas las imagenes guardadas en: {OUTPUT_DIR}/")
    print("\nAhora puedes revisar las imagenes para extraer:")
    print("  - Colores exactos (usando herramientas de color picker)")
    print("  - Tipografias")
    print("  - Contenido visual")
    print("  - Logo y elementos de diseno")
    
except ImportError:
    print("[ERROR] pdf2image no esta instalado")
    print("[INFO] Instalando pdf2image...")
    os.system("pip install pdf2image")
    print("[INFO] Por favor ejecuta el script nuevamente")
    print("\nNOTA: Necesitas tener instalado poppler:")
    print("  Windows: Descargar de https://github.com/oschwartz10612/poppler-windows/releases/")
    print("  O usar: conda install -c conda-forge poppler")
    
except Exception as e:
    print(f"[ERROR] Error: {e}")
    import traceback
    traceback.print_exc()

