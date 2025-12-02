# -*- coding: utf-8 -*-
"""
Analiza los datos extraídos y genera un reporte estructurado
"""

import json
import os
from pathlib import Path
from collections import Counter
import re

OUTPUT_DIR = "extracted_data"
REPORT_FILE = "datos_extraidos_analizados.txt"

print("=" * 70)
print("ANALIZANDO DATOS EXTRAIDOS")
print("=" * 70)

report = []

# Analizar texto
text_file = Path(OUTPUT_DIR) / "texto_extraido.json"
if text_file.exists():
    print("\n[ANALIZANDO] Texto extraido...")
    with open(text_file, "r", encoding="utf-8") as f:
        text_data = json.load(f)
    
    all_text = " ".join([item["text"] for item in text_data if "text" in item])
    
    report.append("=" * 70)
    report.append("TEXTO EXTRAIDO")
    report.append("=" * 70)
    report.append(f"\nTotal de caracteres: {len(all_text)}")
    report.append(f"Total de paginas con texto: {len(text_data)}\n")
    
    for item in text_data:
        if item.get("text"):
            report.append(f"\n--- PAGINA {item['page']} ---")
            report.append(item["text"])
            report.append("")
    
    # Buscar palabras clave
    keywords = ["servicio", "organizacion", "limpieza", "precio", "contacto", "email", "telefono"]
    found_keywords = []
    for keyword in keywords:
        if keyword.lower() in all_text.lower():
            found_keywords.append(keyword)
    
    if found_keywords:
        report.append("\nPalabras clave encontradas:")
        report.append(", ".join(found_keywords))
        report.append("")

# Analizar colores
colors_file = Path(OUTPUT_DIR) / "colores_dominantes.json"
if colors_file.exists():
    print("[ANALIZANDO] Colores...")
    with open(colors_file, "r", encoding="utf-8") as f:
        colors_data = json.load(f)
    
    all_colors = []
    for page_colors in colors_data:
        all_colors.extend(page_colors.get("colors", []))
    
    color_counter = Counter(all_colors)
    top_colors = color_counter.most_common(10)
    
    report.append("\n" + "=" * 70)
    report.append("COLORES DOMINANTES")
    report.append("=" * 70)
    report.append("\nTop 10 colores mas frecuentes:\n")
    for color, count in top_colors:
        report.append(f"  {color}: aparece {count} veces")
    report.append("")

# Escribir reporte
with open(REPORT_FILE, "w", encoding="utf-8") as f:
    f.write("\n".join(report))

print(f"\n[SUCCESS] Reporte generado: {REPORT_FILE}")

