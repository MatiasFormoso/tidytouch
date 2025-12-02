# -*- coding: utf-8 -*-
import pdfplumber
import sys

PDF_PATH = "Portafolio Tidy Touch by Luisa Rueda.pdf"
OUTPUT_FILE = "PDF_COMPLETE_EXTRACTION.md"

print("=" * 70)
print("EXTRACCION COMPLETA DEL PDF - TIDYTOUCH")
print("=" * 70)

try:
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("# Extraccion Completa del PDF - TidyTouch\n\n")
        f.write(f"**Archivo:** {PDF_PATH}\n\n")
        f.write("=" * 70 + "\n\n")
        f.write("## TEXTO EXTRAIDO\n\n")
        
        print("\n[PROCESANDO] Extrayendo texto...")
        
        with pdfplumber.open(PDF_PATH) as pdf:
            num_pages = len(pdf.pages)
            print(f"[INFO] PDF tiene {num_pages} paginas\n")
            f.write(f"**Total de paginas:** {num_pages}\n\n")
            
            all_text = []
            for page_num, page in enumerate(pdf.pages, 1):
                print(f"[PROCESANDO] Pagina {page_num}/{num_pages}...")
                try:
                    text = page.extract_text()
                    
                    if text and text.strip():
                        f.write(f"### PAGINA {page_num}\n\n")
                        f.write("```\n")
                        clean_text = text.replace('\x00', '').replace('\r\n', '\n')
                        f.write(clean_text)
                        f.write("\n```\n\n")
                        all_text.append(clean_text)
                        print(f"  OK - {len(text)} caracteres")
                    else:
                        print(f"  Sin texto extraible")
                        f.write(f"### PAGINA {page_num}\n\n")
                        f.write("*Esta pagina no contiene texto extraible (probablemente imagen)*\n\n")
                        
                except Exception as e:
                    print(f"  Error: {str(e)}")
                    f.write(f"### PAGINA {page_num}\n\n")
                    f.write(f"*Error al extraer: {str(e)}*\n\n")
            
            # Resumen completo
            f.write("\n" + "=" * 70 + "\n")
            f.write("## CONTENIDO COMPLETO\n\n")
            full_text = "\n\n---\n\n".join(all_text)
            if full_text:
                f.write(f"**Total de caracteres extraidos:** {len(full_text)}\n\n")
                f.write("```\n")
                f.write(full_text)
                f.write("\n```\n\n")
            
            print(f"\n[SUCCESS] Extraccion guardada en {OUTPUT_FILE}")
            
except Exception as e:
    print(f"[ERROR] Error: {e}")
    import traceback
    traceback.print_exc()

print("\n" + "=" * 70)

