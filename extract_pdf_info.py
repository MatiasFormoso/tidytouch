#!/usr/bin/env python3
"""
Script para extraer información del PDF del portafolio TidyTouch
"""

try:
    import PyPDF2
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False
    print("PyPDF2 no está instalado. Instalando...")

try:
    from pdf2image import convert_from_path
    HAS_PDF2IMAGE = True
except ImportError:
    HAS_PDF2IMAGE = False

import sys
import json

PDF_PATH = "Portafolio Tidy Touch by Luisa Rueda.pdf"

def extract_text_from_pdf():
    """Extrae texto del PDF si es posible"""
    if not HAS_PYPDF2:
        print("\n[INFO] PyPDF2 no disponible. Instalando con: pip install PyPDF2")
        return None
    
    try:
        with open(PDF_PATH, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            num_pages = len(pdf_reader.pages)
            
            print(f"\n[INFO] PDF tiene {num_pages} páginas")
            
            all_text = []
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                if text.strip():
                    all_text.append({
                        "page": page_num + 1,
                        "text": text
                    })
                    print(f"[OK] Página {page_num + 1}: {len(text)} caracteres extraídos")
            
            return all_text
    except Exception as e:
        print(f"[ERROR] Error extrayendo texto: {e}")
        return None

def main():
    print("=" * 60)
    print("EXTRACCIÓN DE INFORMACIÓN DEL PDF - TIDYTOUCH")
    print("=" * 60)
    
    # Intentar extraer texto
    text_content = extract_text_from_pdf()
    
    if text_content:
        output_file = "PDF_EXTRACTED_TEXT.txt"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("TEXTO EXTRAÍDO DEL PORTFOLIO TIDYTOUCH\n")
            f.write("=" * 60 + "\n\n")
            for page_data in text_content:
                f.write(f"\n--- PÁGINA {page_data['page']} ---\n")
                f.write(page_data['text'])
                f.write("\n\n")
        print(f"\n[SUCCESS] Texto guardado en: {output_file}")
    else:
        print("\n[INFO] No se pudo extraer texto del PDF.")
        print("[INFO] El PDF puede estar basado en imágenes.")
        print("[INFO] Necesitaremos revisar manualmente el PDF para extraer:")
        print("  - Colores de la paleta")
        print("  - Tipografías utilizadas")
        print("  - Contenido y mensajes del negocio")
        print("  - Referencias de diseño")
    
    print("\n" + "=" * 60)
    print("RECOMENDACIÓN: Revisar manualmente el PDF para información visual")
    print("=" * 60)

if __name__ == "__main__":
    main()

