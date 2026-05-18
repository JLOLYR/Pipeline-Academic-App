# Pipeline Académico

Plataforma gratuita para gestionar **publicaciones científicas, proyectos de investigación y congresos** desde un solo lugar. Pensada para reemplazar la planilla Excel que cada académico mantiene a mano y tener una vista clara y unificada de la propia productividad.

> **No necesitas instalar nada ni crear una cuenta.** Funciona en el navegador, los datos viven en tu propio computador, no hay servidor.

---

## Tabla de contenidos

- [Inicio rápido](#inicio-rápido)
- [Lo que la plataforma puede hacer](#lo-que-la-plataforma-puede-hacer)
- [Cómo cargar tus artículos](#cómo-cargar-tus-artículos)
- [Las funciones más útiles](#las-funciones-más-útiles)
- [Respaldar tus datos (importante)](#respaldar-tus-datos-importante)
- [Instalar como aplicación](#instalar-como-aplicación-opcional)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [Para usuarios técnicos](#para-usuarios-técnicos)

---

## Inicio rápido

**Si solo quieres usarla:**

1. Abre el enlace en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
2. La plataforma arranca vacía.
3. Empieza a agregar tus papers — la forma más rápida está más abajo en "Cómo cargar tus artículos".

**Si te interesa entender más antes de meter datos:** sigue leyendo.

---

## Lo que la plataforma puede hacer

La barra superior tiene cinco pestañas:

- **Dashboard** — Resumen ejecutivo: tarjetas con totales, gráfico de trayectoria, alertas, metas y co-autores frecuentes.
- **Artículos** — Tus publicaciones en cualquier etapa (idea → publicado).
- **Proyectos** — Postulaciones a fondos (FONDECYT, FONDEF, ANID y similares).
- **Congresos** — Ponencias y conferencias.
- **Estadísticas** — Gráficos de análisis.

Junto al título de la app verás botones para todas las acciones globales:

| Botón | Para qué sirve |
|-------|----------------|
| **⌕** | Búsqueda global instantánea (atajo `Ctrl+K`) |
| **◎ Metas** | Definir objetivos anuales numéricos |
| **↓ CV md** | Exportar tu CV en Markdown |
| **↓ CV ANID** | Exportar CV con formato ANID/FONDECYT (imprimible a PDF) |
| **⇪ Lote** | Importación masiva (DOIs, BibTeX, RIS) |
| **↑ Importar** | Cargar un archivo JSON de respaldo |
| **↓ Exportar** | Descargar todos tus datos como JSON |
| **+ Nuevo** | Crear artículo, proyecto o congreso (cambia según la pestaña activa) |

---

## Cómo cargar tus artículos

Hay tres maneras, de la más rápida a la más manual. Si tienes muchos papers, empieza por la primera.

### Opción A — Importación masiva (recomendada)

Pulsa **⇪ Lote** en el header. Verás tres pestañas:

**1. Lista de DOIs.** La forma más rápida si tus papers tienen DOI. Pegas uno por línea:

```
10.1016/j.optmat.2016.08.021
10.1016/j.ijadhadh.2018.02.018
10.1038/s41586-021-03491-6
```

Pulsa **Previsualizar** — la plataforma consulta cada DOI en [Crossref](https://www.crossref.org/) (base de datos pública internacional) y trae automáticamente título, autores, revista, editorial y año. Revisa el preview y pulsa **Importar todo**.

**2. BibTeX.** Si exportas referencias desde Google Scholar, Scopus, Mendeley o Zotero, obtienes archivos `.bib`. Pega el contenido o arrastra el archivo a la zona de drop. Funciona con cualquier `.bib` estándar.

**3. RIS.** Mismo flujo pero para archivos `.ris` (formato de EndNote, Web of Science, PubMed).

> La plataforma detecta DOIs duplicados automáticamente y los omite, así puedes reimportar sin miedo a duplicar registros.

### Opción B — Uno por uno con DOI

Pulsa **+ Nuevo** en la pestaña Artículos. En el campo **DOI**, pega el DOI y pulsa **⌕ Buscar** (o Enter). La plataforma rellena los campos vacíos automáticamente. Solo te queda agregar lo que falte: cuartil, factor de impacto, posición de autoría, citas, tags.

### Opción C — Manual completo

Pulsa **+ Nuevo** y llena todos los campos a mano. Útil para papers viejos sin DOI o trabajos en preparación.

### Qué se registra en cada artículo

- Título, revista, editorial, cuartil, factor de impacto
- DOI (con auto-completado desde Crossref)
- Autores y tu posición — para calcular si eres primer autor
- Citas y citas por año — para H-index y crecimiento (datos de Scholar o Scopus)
- Tags (áreas temáticas) — clave para análisis por temática
- Etapa actual y fecha — desde "idea" hasta "publicado", se guarda historial completo
- Notas libres

Los proyectos y congresos siguen el mismo patrón, con sus propios campos específicos (institución, monto, deadline, tipo de ponencia, etc.).

---

## Las funciones más útiles

**Búsqueda global (`Ctrl+K`).** Encuentra cualquier artículo, proyecto o congreso buscando por título, revista, autor, DOI o tag. El atajo de teclado es lo más rápido.

**Metas anuales.** Pulsa **◎ Metas**, define cuántos artículos quieres enviar y publicar, cuántos proyectos postular, cuántos congresos presentar este año. En el dashboard verás barras de progreso con tu avance real, comparado con lo que te propusiste.

**Alertas automáticas.** En el dashboard, panel **Atención requerida**. Te avisa de tres cosas: artículos estancados más de 90 días en revisión, deadlines de proyectos/congresos en los próximos 30 días, deadlines vencidos sin haber postulado.

**CV ANID/FONDECYT con un clic.** Pulsa **↓ CV ANID**. Se abre una página nueva formateada al estilo de los formularios ANID con todas tus publicaciones, proyectos y congresos. Tu nombre aparece subrayado donde eres autor. Usa `Ctrl+P` → **Guardar como PDF** y tienes el CV listo para postular.

**Estadísticas por área temática.** Si usas tags consistentemente, la pestaña Estadísticas muestra un ranking de tu trabajo por tema — útil para identificar dónde concentras esfuerzo y dónde podrías diversificar.

---

## Respaldar tus datos (importante)

**Tus datos viven solo en este navegador.** No hay servidor. No hay nube. Esto significa:

- ✓ Privacidad total: nadie ve tus papers.
- ✓ Funciona sin internet una vez cargada.
- ⚠ Si limpias cookies o datos del navegador, los datos se pierden.
- ⚠ Si cambias de computador, no se sincronizan automáticamente.

### Cómo protegerte (2 pasos)

**1. Exporta a JSON cada vez que hagas cambios importantes.**

Pulsa **↓ Exportar** en el header — descarga un archivo tipo `pipeline-academico-2026-05-18.json`. Guárdalo en Google Drive, Dropbox, OneDrive o tu disco duro.

La plataforma te recuerda automáticamente cuando pasan más de 30 días sin exportar (verás un banner dorado en el dashboard).

**2. Para usar la plataforma en otro computador:**

1. Abre el enlace en el computador nuevo.
2. Pulsa **↑ Importar** y selecciona tu archivo JSON.
3. Listo: tus datos aparecen idénticos.

### Si trabajas en varios computadores

El flujo realista es: editar en uno, exportar JSON al terminar, importar en el otro al volver. Es como mover una planilla Excel entre máquinas. Para sincronización automática hace falta una versión con cuenta de usuario y servidor — está planeada pero todavía no existe.

---

## Instalar como aplicación (opcional)

La plataforma es una **Progressive Web App (PWA)**: puedes instalarla en tu computador o teléfono como si fuera una app nativa.

**Chrome o Edge desde computador:**
Al abrir la página verás abajo a la derecha un banner sugiriendo instalar. Pulsa **Instalar**. Aparece como app en tu escritorio, se abre sin barra del navegador, y funciona offline.

**Android Chrome:**
Toca el menú (los tres puntos) → **Añadir a pantalla de inicio** → aparece como app independiente en tu cajón de apps.

**iPhone Safari:**
Toca el botón de compartir → **Añadir a pantalla de inicio**.

Una vez instalada, funciona sin conexión a internet. Lo único que necesita conexión es el auto-completado con DOI (porque consulta Crossref).

---

## Preguntas frecuentes

**¿Es gratis?**
Sí, completamente. Sin anuncios. Sin cuenta. Sin límites.

**¿Mis datos están seguros?**
Viven solo en tu navegador, en tu computador. Ni el desarrollador ni nadie tiene acceso. La única forma de perderlos es si limpias los datos del navegador sin haber exportado a JSON.

**¿Funciona offline?**
Sí, una vez cargada. Lo único que necesita internet es el auto-completado con DOI.

**¿Puedo usarla con varios investigadores en el mismo computador?**
Cada navegador maneja un solo perfil. Si dos personas usan el mismo computador, conviene crear perfiles de navegador separados (en Chrome: ícono de perfil arriba a la derecha → Agregar) o exportar/importar JSON entre sesiones.

**¿Calcula bien el H-index?**
Sí. Usa la definición estándar: H-index = mayor número H tal que tienes H artículos con al menos H citas. El H₅ es el H-index considerando solo publicaciones de los últimos 5 años.

**¿Por qué algunos campos no se autocompletan al pegar un DOI?**
Crossref no siempre tiene toda la metadata, especialmente para revistas pequeñas o regionales. Si falta algo, llénalo manualmente. El DOI te garantiza al menos título, autores y año.

**¿Y si encuentro un bug o tengo una sugerencia?**
Reporta en la sección **Issues** de este repositorio en GitHub, o contacta directamente al desarrollador.

---

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl+K` / `⌘+K` | Búsqueda global |
| `Ctrl+N` / `⌘+N` | Nuevo (según pestaña activa) |
| `Esc` | Cerrar modal abierto |
| `Enter` en campo DOI | Buscar metadata en Crossref |

---

## Flujo ideal de trabajo

1. **Día 1.** Importas tus papers existentes con la opción de lote (DOIs o BibTeX desde Scholar/Scopus). Defines tus metas anuales.
2. **Cada semana.** Actualizas el avance de tus papers (cambio de etapa con fecha), agregas papers nuevos.
3. **Al postular a fondos.** Registras los proyectos con su deadline. La plataforma te avisa cuando se acerca.
4. **Al ir a un congreso.** Lo registras con tipo de ponencia, lugar y fechas.
5. **Cada mes.** Revisas el dashboard, ves alertas, exportas JSON de respaldo.
6. **Una vez al año.** Para renovación FONDECYT, informes ANID o postulaciones: generas tu CV ANID con un clic.

---

## Para usuarios técnicos

Si conoces de desarrollo web, esta sección te interesa.

### Stack

- HTML + CSS + JavaScript vanilla. Sin frameworks, sin build system.
- Chart.js cargado desde CDN para gráficos.
- Fuentes desde Google Fonts.
- Datos en `localStorage` (clave `articles_v2`, `projects_v1`, `conferences_v1`, `goals_v1`).

### Arquitectura de archivos

```
pipeline-academico.html   # Toda la app en un solo archivo
manifest.json             # Manifest para PWA
sw.js                     # Service worker (caché offline)
icon-192.png              # Ícono PWA pequeño
icon-512.png              # Ícono PWA grande
```

Todos estos archivos deben estar en la misma carpeta del servidor para que la PWA funcione.

### Hospedaje recomendado

**GitHub Pages** (gratis): subes el repo, activas Pages en Settings, listo. La URL será `https://tu-usuario.github.io/nombre-repo/pipeline-academico.html`.

**Netlify, Vercel, Cloudflare Pages**: cualquiera funciona con configuración cero — solo conectas el repo.

**Servidor propio**: cualquier servidor estático (Apache, nginx, Caddy). No requiere PHP, Node ni base de datos.

### Probar localmente

La PWA requiere protocolo HTTP, no `file://`. Para probar en local:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000/pipeline-academico.html`.

### Formato del JSON de respaldo

```json
{
  "version": 3,
  "exportedAt": "2026-05-18T12:00:00.000Z",
  "articles": [ /* array de artículos */ ],
  "projects": [ /* array de proyectos */ ],
  "conferences": [ /* array de congresos */ ],
  "goals": { "2026": { "articlesSubmitted": 5, ... } }
}
```

Cada entidad tiene un `id` único, `createdAt`, `updatedAt`, `stageHistory` (array de cambios de etapa con fecha), y campos específicos por tipo. El import es **merge por ID**: las entradas nuevas se agregan, las que coinciden en ID se sobrescriben.

### Privacidad y datos

- No hay telemetría, analytics ni tracking.
- No hay llamadas a servidores externos excepto Crossref (api.crossref.org) cuando el usuario lo solicita explícitamente al pegar un DOI.
- Las fuentes y Chart.js se cargan desde CDN pero quedan en caché tras la primera visita.

### Hoja de ruta

- **Fase 1A (actual):** producto individual sólido. Aquí estamos.
- **Fase 1B (próxima):** cuenta de usuario opcional + sincronización en la nube vía Supabase.
- **Fase 2:** versión multi-usuario para departamentos universitarios y centros de investigación, con vistas agregadas y reportes institucionales.

### Contribuir

Pull requests bienvenidos. Especialmente útiles: traducciones, mejoras de accesibilidad, soporte para más formatos de CV (NSF biosketch, ERC, etc.), parsers más robustos para BibTeX/RIS con casos extraños.

### Licencia

MIT. Úsala, modifícala, intégrala donde quieras.

---

*Construida con HTML, CSS y JavaScript puros. Sin frameworks. Sin tracking. Sin dependencias críticas.*
