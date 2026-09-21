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

## Set up as a brand-new repository (recommended if you got lost mixing folders before)

This zip is a **complete, ready-to-go project** — it already includes its own Git history, so you don't need to copy/paste files into an existing folder at all.

1. **Create a new empty repository on GitHub**: go to github.com → the **+** icon top-right → "New repository". Name it (e.g. `GrandCosmetic2`), leave it **empty** (do NOT check "Add a README"), click **Create repository**. GitHub will show you a page with a URL like `https://github.com/mgarci99rm/GrandCosmetic2.git` — copy it.
2. **Extract this zip** anywhere on your computer (right-click → "Extraer todo").
3. **Open the extracted `grand-cosmetic-clinic` folder in VS Code**: File → Open Folder.
4. Open the terminal in VS Code (Terminal → New Terminal) and run these two lines, one at a time (replace the URL with the one you copied in step 1):
   ```
   git remote add origin https://github.com/mgarci99rm/GrandCosmetic2.git
   git push -u origin main
   ```
5. Refresh your GitHub repo page — all the files should be there.
6. In GitHub → **Settings → Pages**, set it to deploy from branch `main` / root, and add your custom domain `sophiawebdraft.es` again (same as you did the first time).

**Note on the logo:** since this is a completely fresh project, I couldn't carry over your real clinic logo file — I generated a placeholder gold/black "GC" monogram at `assets/logo.png` so the site isn't broken. If you still have the real logo image saved somewhere on your computer, just drag it into the `assets` folder (overwriting the placeholder, same filename `logo.png`) and push again. If not, just re-attach it to me and I'll swap it in.

## Pendiente antes de presentarlo como oficial (Spanish notes for the client-facing punch list)

- **Fotos reales**: sigue usando una foto de stock (con licencia libre) en la sección "Welcome". En cuanto la clínica tenga fotos propias del local o del equipo, deberían sustituirla.
- **Fotos del equipo**: Dr. Dehkordi y Tricia siguen mostrados con iniciales, no fotos. Necesitamos fotos reales y correctamente etiquetadas antes de publicar la web como oficial.
- **Texto de "Welcome to Grand Cosmetic Clinic"**: es un texto inventado (marcado en la propia web como "Placeholder copy"). Hay que sustituirlo por la historia real de la clínica.
- **Formulario de inquiry y pop-up de email**: ambos son solo de diseño (muestran una alerta), no están conectados a ningún backend real todavía. Se puede conectar con Formspree, Netlify Forms o similar antes de lanzar.
- **WhatsApp**: se asume que el número (818) 200-7769 tiene WhatsApp activo — confirmar con la clínica.
