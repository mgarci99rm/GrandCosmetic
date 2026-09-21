# Grand Cosmetic Clinic — Concept Website

Static demo site for Grand Cosmetic Clinic (Studio City, CA), built as a concept to present to the business before it becomes official. Live at **sophiawebdraft.es**.

## Version history

- **v1** — First pass: basic layout, pink/burgundy palette.
- **v2** — Real logo added, black + gold palette derived from it.
- **v3** — Full section restructure per client spec: treatments, pricing, about, team, credentials, testimonials, contact, map.
- **v4** — Hero redesigned to a side-photo split layout with exact copy "Refining features. Creating balance. A better you."; "The Grand Menu" restyled as an elegant restaurant-style price list; logo made more prominent in the Welcome section.
- **v5 (this version)** — Full rebuild from scratch. Same section flow and copy as v4, but:
  - Swapped the hero photo for the client's own uploaded Botox close-up (`assets/hero-botox.jpg`) instead of a generic stock photo.
  - Replaced the "About/Welcome" section image with a more premium, editorial, Botox/filler-focused photo instead of a generic spa/facial stock image.
  - Reduced overall stock-photo usage — the design now leans on typography, whitespace and the gold/black palette rather than filling every section with photos, since the client felt earlier photos looked "too stock."
  - Team section keeps neutral initials avatars (no photos) until the clinic provides real, correctly-labeled photos of Dr. Dehkordi and Tricia.

## How to update your local project

1. Replace `index.html`, and the entire `css/` and `js/` folders in your VS Code project with the ones in this zip.
2. **Keep your existing `assets/logo.png`** — it isn't included in this zip since your project already has it from before. If for any reason it's missing, re-add the clinic's logo file at `assets/logo.png` (square image works best).
3. In the VS Code terminal:
   ```
   git add .
   git commit -m "Rebuild site with improved photography"
   git push
   ```
4. Give it a minute, then refresh sophiawebdraft.es (hard refresh: Ctrl+F5) to see the changes live.

## Pendiente antes de presentarlo como oficial (Spanish notes for the client-facing punch list)

- **Fotos reales**: sigue usando una foto de stock (con licencia libre) en la sección "Welcome". En cuanto la clínica tenga fotos propias del local o del equipo, deberían sustituirla.
- **Fotos del equipo**: Dr. Dehkordi y Tricia siguen mostrados con iniciales, no fotos. Necesitamos fotos reales y correctamente etiquetadas antes de publicar la web como oficial.
- **Texto de "Welcome to Grand Cosmetic Clinic"**: es un texto inventado (marcado en la propia web como "Placeholder copy"). Hay que sustituirlo por la historia real de la clínica.
- **Formulario de inquiry y pop-up de email**: ambos son solo de diseño (muestran una alerta), no están conectados a ningún backend real todavía. Se puede conectar con Formspree, Netlify Forms o similar antes de lanzar.
- **WhatsApp**: se asume que el número (818) 200-7769 tiene WhatsApp activo — confirmar con la clínica.
