## Alcance

Rediseño del home actual (`src/routes/index.tsx`) más ajustes globales para acercarlo al look "legal corporativo actual" tipo BLP, sin salir de una sola página por ahora. Contenido en español (tú traduces después). Sin dark mode.

## Cambios de marca y sistema visual

- Reemplazar la "S" gradiente del nav por el logo adjunto (`Logo-EA-Abogados.png`) subido como asset Lovable. Se usará en el nav y en el footer.
- Ajustar paleta a los colores del logo: teal/petróleo `#127C8A` como primario + azul marino profundo `#0E2A3A`, acento naranja `#E5793A` sólo para detalles pequeños (iconos, subrayados). Actualizar tokens en `src/styles.css`.
- Cambiar tipografía a una sans-serif fresca: **Inter Tight** para display y **Inter** para body (ambas Google Fonts). Quitar `Instrument Serif` en todos los usos (`font-display`, itálicas, etc.).
- Quitar `.dark` overrides y el import de `tw-animate-css` para que no haya modo oscuro accidental.

## Hero y estructura tipo BLP

- Quitar imagen de fondo AI del hero. Reemplazar por un hero de tipografía grande sobre un fondo `bg-gradient-hero` limpio + patrón sutil (grid/lineas SVG). Sin foto.
- Layout tipo BLP: eyebrow pequeño + titular grande alineado a la izquierda, párrafo corto, dos CTAs (Agenda consulta / Descargar presentación PDF), y una franja horizontal de "áreas de práctica" ya existente (kinetic marquee) se conserva.
- Buscar el video existente del sitio actual: no se encontró referencia en el `index.html` adjunto, así que **no se incluye video** (como indicaste, si no hay, quitarlo).

## Secciones

- **Nosotros**: quitar foto AI `about.jpg`. Reemplazar por composición gráfica (bloques de color + números clave) al estilo editorial corporativo.
- **Servicios**: mantener grid de 12 con iconos (los iconos "están bien"). Textos actuales quedan como placeholder; agregar comentario `TODO: reemplazar con textos revisados`.
- **Equipo**: nueva sección con tres columnas:
  - **Socios** (arriba, tarjetas grandes) con placeholders para foto + nombre + rol.
  - **Asociados** (debajo, tarjetas medianas).
  - **Of Counsel** (asesor interno / externo, debajo).
  - Iconos sociales sólo **LinkedIn** y **Twitter/X**. Quitar Facebook, WhatsApp, Instagram.
  - Placeholders `TODO: perfiles pendientes`.
- **FAQ**: nueva sección con FAQ en formato texto (acordeón simple), con placeholders de preguntas para que ellos filtren.
- **"Haznos una pregunta"**: formulario (nombre, email, mensaje) que envía a `info@elementoabogados.com` vía `mailto:` por ahora — sin backend hasta que confirmes si quieres Lovable Cloud + envío real por correo.
- **Sign In / Sign Up**: agregar botón "Portal de clientes" en el nav que enlaza a `/sign-in` (ruta placeholder pendiente de implementación con Lovable Cloud cuando quieras).
- **Descargar PDF de la presentación**: botón en el hero y en un bloque destacado. Enlace a `/presentacion.pdf` (colocarás el archivo cuando lo tengas).
- **Contacto**: mejorar diagramación — dos columnas: info (dirección, teléfono, correo, horario, mapa embed) + formulario.
- **Galería**: eliminada del alcance (no se crea ruta).
- **Botón flotante de WhatsApp**: no se agrega (lo pediste quitar).

## Micro-interacciones

Se conservan: reveal on scroll, marquee de áreas, hover states en cards de servicios (ya corregidos). Se afinan para sentirse más "corporativo fresco" (menos italic, más geometría).

## Notas de contenido pendiente

Los siguientes bloques quedan con placeholders claramente marcados hasta que envíes material:
- Textos revisados de servicios.
- Perfiles de socios, asociados y of counsel (foto, bio, LinkedIn, X).
- Preguntas de FAQ finales.
- PDF de presentación.
- Video institucional (si aparece).

## Detalles técnicos

- `src/styles.css`: nueva paleta OKLCH derivada del logo, `--font-display` = `"Inter Tight"`, `--font-sans` = `"Inter"`, se eliminan gradientes/tokens no usados, se remueve bloque `.dark`.
- `src/routes/__root.tsx`: `<link>` a Google Fonts de Inter + Inter Tight (quitar Instrument Serif).
- Logo: `lovable-assets create --file /mnt/user-uploads/Logo-EA-Abogados.png` → `src/assets/logo-ea.png.asset.json`, importado y usado en Nav y Footer.
- Se eliminan imports/usos de `hero.jpg` y `about.jpg`. Los archivos quedan en `src/assets` pero sin referencia (se pueden borrar en un pase posterior).
- Formulario "Haznos una pregunta" y Contacto: por ahora `mailto:` (sin backend). Si prefieres envío real por correo, activo Lovable Cloud y un server function que use un proveedor de email — dímelo y lo agrego.

## Preguntas antes de implementar

1. **Idioma ahora**: dejo todo en español y tú traduces después, ¿correcto? (Así lo entendí.)
2. **Formulario**: ¿`mailto:` provisional está bien, o ya activo Lovable Cloud para que los mensajes lleguen por correo real?
3. **Portal de clientes (Sign In)**: ¿lo dejo como botón "próximamente" o quieres que ya prepare la ruta con login (requiere Lovable Cloud)?