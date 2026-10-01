# Grand Cosmetic Clinic — Concept Website

Static demo site for Grand Cosmetic Clinic (Studio City, CA), built as a concept to present to the business before it becomes official. Live at **sophiawebdraft.es**.

## Version history

- **v1** — First pass: basic layout, pink/burgundy palette.
- **v2** — Real logo added, black + gold palette derived from it.
- **v3** — Full section restructure per client spec: treatments, pricing, about, team, credentials, testimonials, contact, map.
- **v4** — Hero redesigned to a side-photo split layout with exact copy "Refining features. Creating balance. A better you."; "The Grand Menu" restyled as an elegant restaurant-style price list; logo made more prominent in the Welcome section.
- **v5** — Full rebuild from scratch. Same section flow and copy as v4, but:
  - Swapped the hero photo for the client's own uploaded Botox close-up (`assets/hero-botox.jpg`) instead of a generic stock photo.
  - Replaced the "About/Welcome" section image with a more premium, editorial, Botox/filler-focused photo instead of a generic spa/facial stock image.
  - Reduced overall stock-photo usage — the design now leans on typography, whitespace and the gold/black palette rather than filling every section with photos, since the client felt earlier photos looked "too stock."
  - Team section keeps neutral initials avatars (no photos) until the clinic provides real, correctly-labeled photos of Dr. Dehkordi and Tricia.
- **v6 (this version)** — Rebuilt again, this time cross-checked line-by-line against the real, live grandcosmeticclinic.com so every fact is accurate, plus a big visual upgrade:
  - **Corrected real data** pulled directly from the live site: real address (11239 Ventura Blvd, Ste 212 Unit 2, Studio City, CA 91604 — the old draft had the wrong address), real opening hours (Tue/Wed/Fri/Sat only, by appointment), the real Square booking link (`grand-cosmetic-clinic.square.site`), Tricia's real full name and bio ("Tricia Santos, NP"), Dr. Dehkordi's real bio (sports medicine background), and the real, more detailed House Rules / cancellation policy text.
  - Added the clinic's real service categories (Injectables, Skin Rejuvenation, Peptide Therapy) as a category strip above the treatment cards, and the real Instagram handles (@aestheticsbytricia, @grandcosmeticclinic) in the About section.
  - **Visual upgrade**: added a scrolling gold ticker bar (5.0★ · Physician-Led · Studio City · By Appointment), scroll-triggered fade-in animations on every section, hover lift/shadow on treatment and team cards, a bordered corner-frame accent on the hero photo, and a large quote mark on testimonials.
  - Logo and gold/black palette were re-confirmed by viewing the live site directly — matches what's already built.
- **v7** — Replaced the split hero with a full-bleed, auto-rotating slider (inspired by a reference site the client liked): 3 full-screen slides (Botox, Dermal Fillers, Skin & Wellness) with a dark gradient over editorial photography, big uppercase headline, auto-advances every 4s, with arrows + dots for manual control. Removed the email pop-up entirely (client didn't want it). Added the client's real HD logo file.
- **v8** — Two more visual upgrades inspired by a reference site the client liked:
  - Added a "Our Most Requested Treatments" featured band right under the hero slider (3 square photo cards + "Learn More" buttons), matching the dark, editorial feel of the slider.
  - Redesigned "Meet the Team" from centered cards into an editorial split layout per person: a dark pull-quote card + a tall photo on one side, full bio on the other, alternating sides for each team member.
  - **Needs real photos to look right**: the team section now expects `assets/team-dehkordi.jpg` and `assets/team-tricia.jpg` (the real photos from the clinic's own "About Us" page) — save those into `assets/` with those exact filenames. Until then the photo boxes show as plain dark placeholders.
  - The pull-quotes for both team members are **invented placeholder quotes** (clearly marked in the code) — swap for their real words before this goes live.

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
- **Formulario de inquiry**: es solo de diseño (muestra una alerta), no está conectado a ningún backend real todavía. Se puede conectar con Formspree, Netlify Forms o similar antes de lanzar.
- **Pop-up de email (15% descuento)**: eliminado a petición del cliente.
- **WhatsApp**: se asume que el número (818) 200-7769 tiene WhatsApp activo — confirmar con la clínica.
