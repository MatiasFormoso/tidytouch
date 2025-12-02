# Imágenes del Portfolio TidyTouch

Sube aquí las imágenes recortadas del PDF en esta estructura:

```
public/images/
├── logo/
│   └── logo.png (o .svg)
├── hero/
│   └── hero-image.jpg
├── servicios/
│   ├── servicio-1.jpg
│   ├── servicio-2.jpg
│   └── ...
├── galeria/
│   ├── imagen-1.jpg
│   └── ...
└── otros/
```

Una vez subidas, ejecuta:
```bash
python analyze_uploaded_images.py
```

Esto analizará automáticamente:
- Colores dominantes
- Paleta sugerida
- Dimensiones
- Estructura visual

