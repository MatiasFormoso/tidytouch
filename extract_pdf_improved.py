#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script mejorado para extraer TODA la información del PDF de TidyTouch
"""

import sys
import os
from pathlib import Path

PDF_PATH = "Portafolio Tidy Touch by Luisa Rueda.pdf"

print("=" * 70)
print("EXTRACCION COMPLETA DEL PDF - TIDYTOUCH")
print("=" * 70)

try:
    import pdfplumber
    
    output_file = "PDF_COMPLETE_EXTRACTION.md"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# Extracción Completa del PDF - TidyTouch\n\n")
        f.write(f"**Archivo:** {PDF_PATH}\n\n")
        f.write("=" * 70 + "\n\n")
        f.write("## TEXTO EXTRAÍDO\n\n")
        
        print("\n[PROCESANDO] Extrayendo texto con pdfplumber...")
        
        with pdfplumber.open(PDF_PATH) as pdf:
            num_pages = len(pdf.pages)
            print(f"[INFO] PDF tiene {num_pages} páginas\n")
            f.write(f"**Total de páginas:** {num_pages}\n\n")
            
            all_text = []
            for page_num, page in enumerate(pdf.pages, 1):
                print(f"[PROCESANDO] Página {page_num}/{num_pages}...", end=" ")
                try:
                    text = page.extract_text()
                    
                    if text and text.strip():
                        f.write(f"### PÁGINA {page_num}\n\n")
                        f.write("```\n")
                        f.write(text.replace('\x00', ''))
                        f.write("\n```\n\n")
                        all_text.append(text)
                        print(f"✓ {len(text)} caracteres")
                    else:
                        print("⚠ Sin texto")
                        f.write(f"### PÁGINA {page_num}\n\n")
                        f.write("*Esta página no contiene texto extraíble (probablemente imagen)*\n\n")
                        
                    # Intentar extraer tablas
                    tables = page.extract_tables()
                    if tables:
                        f.write(f"**Tablas encontradas:** {len(tables)}\n\n")
                        
                except Exception as e:
                    print(f"✗ Error: {e}")
                    f.write(f"### PÁGINA {page_num}\n\n")
                    f.write(f"*Error al extraer: {str(e)}*\n\n")
            
            # Resumen de todo el texto
            f.write("\n" + "=" * 70 + "\n")
            f.write("## RESUMEN DEL CONTENIDO\n\n")
            full_text = "\n".join(all_text)
            if full_text:
                f.write(f"**Total de caracteres extraídos:** {len(full_text)}\n\n")
                f.write("### Contenido completo:\n\n")
                f.write("```\n")
                f.write(full_text.replace('\x00', ''))
                f.write("\n```\n\n")
            
            print(f"\n[SUCCESS] Extracción guardada en {output_file}")
            
except ImportError:
    print("[ERROR] pdfplumber no está instalado")
    sys.exit(1)
except Exception as e:
    print(f"[ERROR] Error general: {e}")
    import traceback
    traceback.print_exc()

print("\n" + "=" * 70)

