# -*- coding: utf-8 -*-
"""
Analiza las imágenes recortadas que subas
Extrae: colores, estructura, contenido visual
"""

from PIL import Image
from collections import Counter
import json
from pathlib import Path

IMAGES_DIR = Path("public/images")
OUTPUT_FILE = "extracted_data/analisis_imagenes.json"

print("=" * 70)
print("ANALISIS DE IMAGENES SUBIDAS")
print("=" * 70)

IMAGES_DIR.mkdir(parents=True, exist_ok=True)
Path("extracted_data").mkdir(exist_ok=True)

all_colors = []
images_analyzed = []

# Buscar imágenes en public/images
image_extensions = ['.png', '.jpg', '.jpeg', '.webp']
image_files = []

for ext in image_extensions:
    image_files.extend(list(IMAGES_DIR.glob(f"*{ext}")))
    image_files.extend(list(IMAGES_DIR.glob(f"**/*{ext}")))

if not image_files:
    print(f"\n[INFO] No se encontraron imagenes en {IMAGES_DIR}/")
    print("[INFO] Sube las imagenes recortadas en public/images/ y ejecuta este script nuevamente")
else:
    print(f"\n[INFO] Encontradas {len(image_files)} imagenes\n")

    for img_path in sorted(image_files):
        try:
            print(f"[ANALIZANDO] {img_path.name}...")
            
            img = Image.open(img_path)
            img = img.convert('RGB')
            
            # Análisis de tamaño
            width, height = img.size
            
            # Reducir para análisis de colores
            img_resized = img.resize((300, 300), Image.Resampling.LANCZOS)
            pixels = list(img_resized.getdata())
            
            # Agrupar colores similares
            color_groups = {}
            for r, g, b in pixels:
                # Agrupar en rangos más amplios para mejores resultados
                r_group = (r // 20) * 20
                g_group = (g // 20) * 20
                b_group = (b // 20) * 20
                key = (r_group, g_group, b_group)
                
                if key not in color_groups:
                    color_groups[key] = 0
                color_groups[key] += 1
            
            # Top colores
            top_colors = sorted(color_groups.items(), key=lambda x: x[1], reverse=True)[:10]
            
            image_data = {
                "file": str(img_path.relative_to(Path.cwd())),
                "name": img_path.stem,
                "dimensions": {"width": width, "height": height},
                "colors": [f"#{r:02x}{g:02x}{b:02x}" for (r, g, b), _ in top_colors],
                "color_counts": [count for _, count in top_colors]
            }
            
            images_analyzed.append(image_data)
            
            # Agregar a colores globales
            for (r, g, b), count in top_colors:
                hex_color = f"#{r:02x}{g:02x}{b:02x}"
                all_colors.extend([hex_color] * count)
            
            print(f"  Dimensiones: {width}x{height} | Top 3 colores: {image_data['colors'][:3]}")
            
        except Exception as e:
            print(f"  ERROR: {e}")

    # Análisis global de colores
    color_counter = Counter(all_colors)
    top_global = color_counter.most_common(15)

    # Categorizar colores
    light_colors = [(c, cnt) for c, cnt in top_global 
                    if int(c[1:3], 16) > 200 and int(c[3:5], 16) > 200 and int(c[5:7], 16) > 200]
    dark_colors = [(c, cnt) for c, cnt in top_global 
                   if int(c[1:3], 16) < 80 and int(c[3:5], 16) < 80 and int(c[5:7], 16) < 80]
    mid_colors = [(c, cnt) for c, cnt in top_global 
                  if c not in [lc[0] for lc in light_colors] and c not in [dc[0] for dc in dark_colors]]

    result = {
        "images": images_analyzed,
        "color_analysis": {
            "top_15_colors": [{"color": c, "frequency": cnt} for c, cnt in top_global],
            "light_colors": [{"color": c, "frequency": cnt} for c, cnt in sorted(light_colors, key=lambda x: x[1], reverse=True)[:5]],
            "dark_colors": [{"color": c, "frequency": cnt} for c, cnt in sorted(dark_colors, key=lambda x: x[1], reverse=True)[:5]],
            "mid_colors": [{"color": c, "frequency": cnt} for c, cnt in sorted(mid_colors, key=lambda x: x[1], reverse=True)[:5]]
        },
        "suggested_palette": {
            "background": light_colors[0][0] if light_colors else None,
            "text": dark_colors[0][0] if dark_colors else None,
            "primary": top_global[0][0] if top_global else None,
            "secondary": top_global[1][0] if len(top_global) > 1 else None,
            "accent": mid_colors[0][0] if mid_colors else None
        }
    }

    # Guardar resultado
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"\n{'='*70}")
    print(f"[SUCCESS] Analisis guardado en: {OUTPUT_FILE}")
    print(f"{'='*70}")
    
    if result["suggested_palette"]["background"]:
        print("\nPALETA SUGERIDA:")
        print(f"  Fondo: {result['suggested_palette']['background']}")
        print(f"  Texto: {result['suggested_palette']['text']}")
        print(f"  Primario: {result['suggested_palette']['primary']}")
        print(f"  Secundario: {result['suggested_palette']['secondary']}")
        print(f"  Acento: {result['suggested_palette']['accent']}")

