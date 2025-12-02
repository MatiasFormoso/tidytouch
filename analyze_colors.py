# -*- coding: utf-8 -*-
"""
Analiza colores dominantes de las imágenes extraídas
"""

from PIL import Image
from collections import Counter
import json
from pathlib import Path

OUTPUT_DIR = Path("extracted_data")
OUTPUT_FILE = OUTPUT_DIR / "analisis_colores.json"

print("=" * 70)
print("ANALISIS DE COLORES DOMINANTES")
print("=" * 70)

all_colors = []
page_colors = []

for img_file in sorted(OUTPUT_DIR.glob("pagina_*.png")):
    try:
        print(f"\n[ANALIZANDO] {img_file.name}...")
        
        img = Image.open(img_file)
        img = img.convert('RGB')
        
        # Reducir tamaño para análisis más rápido pero manteniendo calidad
        img_resized = img.resize((400, 400), Image.Resampling.LANCZOS)
        pixels = list(img_resized.getdata())
        
        # Agrupar colores similares (reducir variaciones)
        color_groups = {}
        for r, g, b in pixels:
            # Agrupar en rangos de 16 para reducir variaciones
            r_group = (r // 16) * 16
            g_group = (g // 16) * 16
            b_group = (b // 16) * 16
            key = (r_group, g_group, b_group)
            
            if key not in color_groups:
                color_groups[key] = 0
            color_groups[key] += 1
        
        # Top 10 colores de esta página
        top_colors_page = sorted(color_groups.items(), key=lambda x: x[1], reverse=True)[:10]
        
        page_color_data = {
            "page": img_file.stem,
            "colors": [f"#{r:02x}{g:02x}{b:02x}" for (r, g, b), _ in top_colors_page],
            "counts": [count for _, count in top_colors_page]
        }
        
        page_colors.append(page_color_data)
        
        # Agregar a lista global
        for (r, g, b), count in top_colors_page:
            hex_color = f"#{r:02x}{g:02x}{b:02x}"
            all_colors.extend([hex_color] * count)
        
        print(f"  Top 3: {page_color_data['colors'][:3]}")
        
    except Exception as e:
        print(f"  ERROR: {e}")

# Analizar colores globales
color_counter = Counter(all_colors)
top_global = color_counter.most_common(20)

result = {
    "colors_by_page": page_colors,
    "global_top_colors": [
        {"color": color, "frequency": count} 
        for color, count in top_global
    ],
    "palette_suggestion": {
        "primary": top_global[0][0] if top_global else None,
        "secondary": top_global[1][0] if len(top_global) > 1 else None,
        "accent": top_global[2][0] if len(top_global) > 2 else None,
        "background": None,  # Buscar colores más claros
        "text": None  # Buscar colores más oscuros
    }
}

# Buscar colores de fondo (más claros) y texto (más oscuros)
light_colors = sorted([(c, cnt) for c, cnt in top_global if int(c[1:3], 16) > 200 and int(c[3:5], 16) > 200 and int(c[5:7], 16) > 200], key=lambda x: x[1], reverse=True)
dark_colors = sorted([(c, cnt) for c, cnt in top_global if int(c[1:3], 16) < 100 and int(c[3:5], 16) < 100 and int(c[5:7], 16) < 100], key=lambda x: x[1], reverse=True)

if light_colors:
    result["palette_suggestion"]["background"] = light_colors[0][0]
if dark_colors:
    result["palette_suggestion"]["text"] = dark_colors[0][0]

# Guardar resultado
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print(f"\n{'='*70}")
print(f"[SUCCESS] Analisis guardado en: {OUTPUT_FILE}")
print(f"{'='*70}")
print("\nPALETA SUGERIDA:")
print(f"  Primario: {result['palette_suggestion']['primary']}")
print(f"  Secundario: {result['palette_suggestion']['secondary']}")
print(f"  Acento: {result['palette_suggestion']['accent']}")
print(f"  Fondo: {result['palette_suggestion']['background']}")
print(f"  Texto: {result['palette_suggestion']['text']}")

