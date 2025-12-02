#!/usr/bin/env python3
"""
Script completo para extraer TODA la información del PDF de TidyTouch
"""

import sys
import os
from pathlib import Path

PDF_PATH = "Portafolio Tidy Touch by Luisa Rueda.pdf"

print("=" * 70)
print("EXTRACCION COMPLETA DEL PDF - TIDYTOUCH")
print("=" * 70)
print(f"\n[INFO] Analizando PDF: {PDF_PATH}")
print(f"[INFO] Tamaño del archivo: {os.path.getsize(PDF_PATH) / (1024*1024):.2f} MB\n")

# Intentar con PyPDF2
try:
    import PyPDF2
    print("[OK] PyPDF2 disponible")
    HAS_PYPDF2 = True
except ImportError:
    print("[WARNING] PyPDF2 no disponible - instalando...")
    os.system("pip install PyPDF2")
    try:
        import PyPDF2
        HAS_PYPDF2 = True
    except:
        HAS_PYPDF2 = False
        print("[ERROR] No se pudo instalar PyPDF2")

# Intentar con pdfplumber (mejor para extracción de texto)
try:
    import pdfplumber
    print("[OK] pdfplumber disponible")
    HAS_PDFPLUMBER = True
except ImportError:
    print("[WARNING] pdfplumber no disponible - instalando...")
    os.system("pip install pdfplumber")
    try:
        import pdfplumber
        HAS_PDFPLUMBER = True
    except:
        HAS_PDFPLUMBER = False
        print("[ERROR] No se pudo instalar pdfplumber")

# Intentar con Pillow para análisis de imágenes
try:
    from PIL import Image
    print("[OK] Pillow disponible")
    HAS_PILLOW = True
except ImportError:
    print("[WARNING] Pillow no disponible")
    HAS_PILLOW = False

output_file = "PDF_COMPLETE_EXTRACTION.md"

with open(output_file, 'w', encoding='utf-8') as f:
    f.write("# Extracción Completa del PDF - TidyTouch\n\n")
    f.write(f"**Archivo:** {PDF_PATH}\n\n")
    f.write("=" * 70 + "\n\n")
    
    # Extraer texto con pdfplumber (más preciso)
    if HAS_PDFPLUMBER:
        print("\n[PROCESANDO] Extrayendo texto con pdfplumber...")
        f.write("## TEXTO EXTRAÍDO\n\n")
        
        try:
            with pdfplumber.open(PDF_PATH) as pdf:
                num_pages = len(pdf.pages)
                print(f"[INFO] PDF tiene {num_pages} páginas\n")
                f.write(f"**Total de páginas:** {num_pages}\n\n")
                
                for page_num, page in enumerate(pdf.pages, 1):
                    print(f"[PROCESANDO] Página {page_num}/{num_pages}...")
                    text = page.extract_text()
                    
                    if text and text.strip():
                        f.write(f"### PÁGINA {page_num}\n\n")
                        f.write("```\n")
                        f.write(text)
                        f.write("\n```\n\n")
                        
                        # Intentar extraer tablas
                        tables = page.extract_tables()
                        if tables:
                            f.write(f"**Tablas encontradas:** {len(tables)}\n\n")
                            for i, table in enumerate(tables, 1):
                                f.write(f"#### Tabla {i}\n\n")
                                for row in table:
                                    f.write("| " + " | ".join(str(cell) if cell else "" for cell in row) + " |\n")
                                f.write("\n")
                        
                        print(f"  ✓ {len(text)} caracteres extraídos")
                    else:
                        print(f"  ⚠ Sin texto (probablemente imagen)")
                        f.write(f"### PÁGINA {page_num}\n\n")
                        f.write("*Esta página no contiene texto extraíble (probablemente imagen)*\n\n")
                
                print(f"\n[SUCCESS] Texto extraído y guardado en {output_file}")
        except Exception as e:
            print(f"[ERROR] Error con pdfplumber: {e}")
            f.write(f"**Error al extraer texto:** {e}\n\n")
    
    # Fallback a PyPDF2
    elif HAS_PYPDF2:
        print("\n[PROCESANDO] Extrayendo texto con PyPDF2...")
        f.write("## TEXTO EXTRAÍDO (PyPDF2)\n\n")
        
        try:
            with open(PDF_PATH, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                num_pages = len(pdf_reader.pages)
                print(f"[INFO] PDF tiene {num_pages} páginas\n")
                f.write(f"**Total de páginas:** {num_pages}\n\n")
                
                for page_num in range(num_pages):
                    print(f"[PROCESANDO] Página {page_num + 1}/{num_pages}...")
                    page = pdf_reader.pages[page_num]
                    text = page.extract_text()
                    
                    if text and text.strip():
                        f.write(f"### PÁGINA {page_num + 1}\n\n")
                        f.write("```\n")
                        f.write(text)
                        f.write("\n```\n\n")
                        print(f"  ✓ {len(text)} caracteres extraídos")
                    else:
                        print(f"  ⚠ Sin texto")
                        f.write(f"### PÁGINA {page_num + 1}\n\n")
                        f.write("*Sin texto extraíble*\n\n")
        except Exception as e:
            print(f"[ERROR] Error con PyPDF2: {e}")
            f.write(f"**Error al extraer texto:** {e}\n\n")
    
    # Información sobre imágenes
    f.write("\n" + "=" * 70 + "\n")
    f.write("## INFORMACIÓN ADICIONAL\n\n")
    f.write("### NOTAS IMPORTANTES:\n\n")
    f.write("1. Este PDF contiene principalmente imágenes (11 páginas)\n")
    f.write("2. Para extraer colores exactos, se necesita:\n")
    f.write("   - Abrir el PDF en un editor de diseño (Adobe Illustrator, InDesign, etc.)\n")
    f.write("   - O usar herramientas de extracción de color de imágenes\n")
    f.write("3. Para obtener las imágenes, se puede:\n")
    f.write("   - Exportar cada página como imagen\n")
    f.write("   - O usar herramientas como pdf2image\n\n")
    
    f.write("### PRÓXIMOS PASOS:\n\n")
    f.write("1. Revisar manualmente el PDF para identificar:\n")
    f.write("   - Paleta de colores (tomar muestras de color)\n")
    f.write("   - Tipografías (identificar familias de fuentes)\n")
    f.write("   - Logo y marca\n")
    f.write("   - Estructura del contenido\n")
    f.write("   - Imágenes clave\n")
    f.write("2. Documentar la información visual en BRANDING_EXTRACTION.md\n")
    f.write("3. Implementar el diseño basado en la información extraída\n\n")

print("\n" + "=" * 70)
print(f"[SUCCESS] Extracción guardada en: {output_file}")
print("=" * 70)
print("\n[RECOMENDACION] Revisar el archivo generado y el PDF manualmente")
print("para completar la información visual (colores, tipografías, etc.)")

