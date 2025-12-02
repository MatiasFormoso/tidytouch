# -*- coding: utf-8 -*-
"""
Analiza las imágenes extraídas del PDF para obtener colores y texto
"""

import os
import json
from collections import Counter
from PIL import Image
import numpy as np

OUTPUT_DIR = "pdf_images"
ANALYSIS_FILE = "branding_analysis.json"

print("=" * 70)
print("ANALISIS DE IMAGENES - EXTRACCION DE COLORES Y CONTENIDO")
print("=" * 70)

analysis = {
    "colors": {},
    "dominant_colors": [],
    "pages_analysis": {}
}

# Analizar cada página
page_files = [f for f in os.listdir(OUTPUT_DIR) if f.startswith("pagina_") and f.endswith(".png") and not "_img_" in f]
page_files.sort()

print(f"\n[INFO] Analizando {len(page_files)} páginas...\n")

all_colors = []

for page_file in page_files:
    page_num = page_file.replace("pagina_", "").replace(".png", "")
    img_path = os.path.join(OUTPUT_DIR, page_file)
    
    print(f"[PROCESANDO] Página {page_num}...")
    
    try:
        img = Image.open(img_path)
        
        # Convertir a RGB si es necesario
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Redimensionar para análisis más rápido pero mantener calidad
        img_small = img.resize((400, 400), Image.Resampling.LANCZOS)
        
        # Obtener colores
        pixels = np.array(img_small).reshape(-1, 3)
        
        # Filtrar colores muy similares (agrupar)
        color_counts = Counter()
        for r, g, b in pixels:
            # Agrupar colores similares (redondear a múltiplos de 5)
            r_g = (r // 10) * 10
            g_g = (g // 10) * 10
            b_g = (b // 10) * 10
            color_counts[(r_g, g_g, b_g)] += 1
        
        # Obtener colores más comunes
        dominant = color_counts.most_common(15)
        
        page_colors = []
        for (r, g, b), count in dominant:
            # Filtrar colores muy claros o muy oscuros (probablemente fondo/texto)
            brightness = (r + g + b) / 3
            if 30 < brightness < 240:  # Evitar casi negro y casi blanco
                hex_color = f"#{r:02x}{g:02x}{b:02x}".upper()
                page_colors.append({
                    "hex": hex_color,
                    "rgb": f"rgb({r}, {g}, {b})",
                    "frequency": count
                })
                all_colors.append(hex_color)
        
        analysis["pages_analysis"][page_num] = {
            "colors": page_colors[:10],  # Top 10
            "image_size": img.size
        }
        
        print(f"  Colores encontrados: {len(page_colors)}")
        
    except Exception as e:
        print(f"  Error: {e}")

# Colores más dominantes en todo el PDF
color_frequency = Counter(all_colors)
top_colors = color_frequency.most_common(20)

analysis["dominant_colors"] = [
    {
        "hex": color,
        "frequency": count,
        "percentage": round((count / len(all_colors)) * 100, 2) if all_colors else 0
    }
    for color, count in top_colors
]

# Guardar análisis
print(f"\n[GUARDANDO] Análisis en {ANALYSIS_FILE}...")
with open(ANALYSIS_FILE, 'w', encoding='utf-8') as f:
    json.dump(analysis, f, indent=2, ensure_ascii=False)

print("[OK] Análisis guardado")

# Generar resumen de colores
print("\n[RESUMEN] Colores dominantes del PDF:")
print("-" * 70)
for i, color_info in enumerate(analysis["dominant_colors"][:10], 1):
    print(f"{i:2}. {color_info['hex']} - {color_info['frequency']} veces ({color_info['percentage']}%)")

print("\n" + "=" * 70)
print("[COMPLETADO] Análisis de colores finalizado")
print("=" * 70)

