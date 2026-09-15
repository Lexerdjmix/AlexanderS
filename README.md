# Análisis Forense en iOS — Grupo 3

Presentación web interactiva de nivel académico sobre arquitectura, almacenamiento, APFS, cifrado y preservación forense en iOS.

## Tecnologías

- HTML5 semántico
- CSS3 responsive, animaciones y estilos de impresión
- JavaScript ES6+
- SVG/CSS para diagramas e ilustraciones
- PptxGenJS desde CDN para la exportación opcional a PowerPoint

## Estructura

```text
index.html
css/style.css
js/script.js
README.md
```

## Ejecutar en GitHub Codespaces

La presentación es estática. Puede abrirse directamente desde `index.html` o servirse desde la terminal:

```bash
python3 -m http.server 8080
```

Después abre el puerto 8080 en Codespaces. La conexión es necesaria para cargar la fuente web y PptxGenJS desde CDN; la navegación local y la exportación PDF funcionan sin esa librería.

## Controles

- Botones Anterior / Siguiente y menú lateral de contenido.
- `←` / `→`, `PageUp` / `PageDown`, `Home`, `End` y `Esc`.
- Modo presentación desde el botón de pantalla completa.
- Tarjetas, línea de tiempo, capas, particiones APFS y respuestas expandibles.
- Una ilustración SVG temática en cada diapositiva: pasa el cursor para resaltarla y haz clic para ampliarla.
- Fuentes técnicas en el botón de referencias superior.

## Exportaciones

**PowerPoint:** pulsa `Exportar a PowerPoint`. Se genera `Analisis_Forense_iOS_Grupo_3.pptx` con las 14 diapositivas, títulos, textos, colores institucionales y numeración. El navegador debe poder cargar PptxGenJS desde CDN.

**PDF:** pulsa `PDF` y selecciona “Guardar como PDF” en el diálogo del navegador. La regla `@media print` convierte cada diapositiva en una página panorámica.

## Nota académica

Las afirmaciones forenses se expresan como dependientes del modelo, versión de iOS, estado del dispositivo y método de adquisición. La presentación es material educativo y no reemplaza protocolos institucionales de preservación ni validación de herramientas.
