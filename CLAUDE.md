# Claude Project Context

**Auto-læses ved start af hver Claude Code session**

Dette dokument giver persistent kontekst til fremtidige Claude Code sessions.

## Projekt Oversigt

**HTML Templates til e-Boks** - En samling af sikre, responsive HTML/CSS email templates til e-Boks digital post.

- **Sprog:** Dansk
- **Tech:** Kun HTML + CSS (ingen JavaScript)
- **Fokus:** Sikkerhed, tilgængelighed, responsivt design
- **Live site:** https://rgehrkedk.github.io/html-templates/

## Templates i Projektet

1. **insurance-annual-letter.html** - Forsikringsårsbrev med CSS accordions
2. **basic-notification.html** - Simpel notifikation
3. **welcome-email.html** - Velkomstbesked
4. **security-alert.html** - Sikkerhedsadvarsel
5. **newsletter.html** - Nyhedsbrev

## Git Workflow - VIGTIGT! 🚨

### Claude Code Remote Begrænsninger
Dette projekt køres i **Claude Code Remote Sessions**:

❌ **DU KAN IKKE:**
- Pushe direkte til `main` branch (giver 403 fejl i remote sessions)
- Merge direkte til `main` via bash kommandoer

✅ **DU KAN:**
- Arbejde på `claude/*` branches med source code
- Pushe til `claude/*` branches så ofte du vil
- Lade GitHub Actions automatisk bygge og deploye til `main`

### Auto-Deploy Workflow

**Sådan fungerer det:**

1. **Du arbejder på:** `claude/[task]-[session-id]` branch
   - Indeholder KUN source code (ingen built files)
   - `index.html` refererer til `/src/main.tsx` (source entry point)
   - `assets/` folder er gitignored (ikke tracked)

2. **Du pusher til:** Din `claude/*` branch
   - Kan gøres så mange gange du vil
   - Hver push trigger GitHub Actions workflow

3. **GitHub Actions workflow:**
   - Checker ud din `claude/*` branch
   - Kører `npm run build` → bygger til `dist/` folder
   - Checker ud `main` branch
   - Kopierer ONLY built files (`index.html`, `assets/`, `templates/`) til `main`
   - Committer og pusher til `main` automatisk

4. **GitHub Pages:**
   - Serverer fra `main` branch
   - Opdateres automatisk når workflow pusher til `main`
   - Live på https://rgehrkedk.github.io/html-templates/

### Branch Struktur

**Source branches (`claude/*`):**
- ✅ Source code (`src/`, `package.json`, `vite.config.ts`, etc.)
- ✅ Source `index.html` med `<script src="/src/main.tsx">`
- ❌ INGEN built assets (`assets/` er gitignored)
- ❌ INGEN compiled bundles

**Main branch:**
- ✅ Source code (samme som claude branches)
- ✅ Built `index.html` med `<script src="./assets/index-XYZ.js">`
- ✅ Built assets i `assets/` folder (auto-genereret af workflow)
- ✅ GitHub Pages serverer herfra

### Workflow fil
`.github/workflows/build-and-deploy.yml` - Bygger og deployer automatisk til `main` ved push til `claude/**` branches.

### Hvad betyder det?

✅ **Du skal:**
- Arbejde på `claude/*` branches med source code only
- Pushe til din `claude/*` branch så ofte du vil
- Lade GitHub Actions bygge og deploye til `main` automatisk
- Vente 1-2 minutter efter push → changes er live!

❌ **Du skal IKKE:**
- Prøve at pushe direkte til `main` (giver 403 fejl)
- Committe built files til source branches
- Bekymre dig om at køre build manuelt
- Manuelt kopiere filer til main branch

## Design Principper

- **Minimalistisk:** Clean, fokuseret design uden fancy effekter
- **Responsivt:** Mobile-first med CSS Grid og Flexbox
- **Tilgængeligt:** WCAG AA kontraster, semantic HTML
- **CSS-only:** Ingen JavaScript - kun HTML + CSS
- **Interaktivitet:** `<details>` og `<summary>` for accordions

## Filstruktur

### Source branches (`claude/*`):
```
html-templates/
├── .github/
│   └── workflows/
│       └── build-and-deploy.yml     # Auto-deploy workflow
├── src/                             # React app source code
│   ├── builder/                     # Template builder components
│   ├── main.tsx                     # App entry point
│   └── ...
├── templates/                       # Statiske HTML email templates
├── tokens/                          # Design tokens (Style Dictionary)
├── index.html                       # SOURCE template (refs /src/main.tsx)
├── package.json                     # npm dependencies & scripts
├── vite.config.ts                   # Vite bundler config
├── .gitignore                       # Ignores assets/, dist/, node_modules/
├── README.md                        # Projekt dokumentation
└── CLAUDE.md                        # Dette dokument
```

### Main branch (adds built files):
```
html-templates/
├── ... (samme source files som ovenfor)
├── index.html                       # BUILT (refs ./assets/index-XYZ.js)
└── assets/                          # Built bundles (auto-genereret)
    ├── index-XYZ.js
    ├── index-XYZ.js.map
    └── index-ABC.css
```

## Vigtige Kommandoer

### Arbejde med branches
```bash
# Opret ny branch (auto-genereret session ID)
git checkout -b claude/new-feature-[session-id]

# Commit og push source code (kan gøres så ofte du vil!)
git add .
git commit -m "feat: Beskrivelse af ændring"
git push -u origin claude/new-feature-[session-id]

# GitHub Actions workflow starter automatisk:
# 1. Bygger projektet (npm run build)
# 2. Deployer built files til main branch
# 3. GitHub Pages opdaterer automatisk
#
# Vent 1-2 minutter → live på https://rgehrkedk.github.io/html-templates/
```

### Build og test lokalt
```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build production (outputs to dist/)
npm run build

# VIGTIGT: Du behøver IKKE køre build manuelt!
# GitHub Actions bygger automatisk ved push til claude/* branches
```

### Troubleshooting
```bash
# Hvis du får git conflicts:
git fetch origin
git reset --hard origin/claude/[din-branch]

# Hvis built files ved en fejl er committet til source branch:
git rm -r assets/
echo "assets/" >> .gitignore
git add .gitignore
git commit -m "fix: Remove built assets from source branch"
```

## Kontekst fra Tidligere Sessions

### Session historie:
1. **Initial setup** - Oprettede grundlæggende templates
2. **Insurance template** - Lavede forsikringsårsbrev med CSS accordions
3. **Auto-merge setup** - Konfigurerede GitHub Actions workflow (senere erstattet)
4. **Apple variant eksperiment** - Testede alternative designs (SLETTET)
5. **Template builder** - React app til at bygge templates dynamisk
6. **Streamline workflow (2025-11-17)** - Første forsøg på auto-deploy til gh-pages
7. **Comprehensive color & border-radius system (2025-11-17)** - Implementerede 5-farve system med 65+ CSS variables, 3 border-radius styles, og class-based styling (ingen inline styles)
8. **Fix deployment workflow (2025-11-18)** - Rettede workflow til at deploye til main branch i stedet for gh-pages. Fjernede built assets fra source branches. Source branches indeholder nu KUN source code, og workflow bygger + deployer automatisk til main.

### Design fokus:
- **Minimalistisk** - Clean design uden overflødige effekter
- **Funktionel** - CSS-only accordions, responsive layout
- **Tilgængelig** - WCAG AA kontrast, semantic HTML

## Tips til Næste Claude Session

1. **Source only:** Source branches (`claude/*`) indeholder KUN source code - INGEN built assets!
2. **Auto-deploy:** Push til `claude/*` → GitHub Actions bygger og deployer automatisk til main
3. **Design:** Hold det simpelt, funktionelt og tilgængeligt
4. **Test:** Tjek altid WCAG kontrast ved farveændringer
5. **Dansk:** Alle templates er på dansk
6. **Template Builder:** 5 farver (brand, accent, neutral, warning, error) + 3 border-radius styles
7. **CSS-only:** Class-based CSS med 65+ CSS variables - ingen inline styles!

## Nyttige Links

- [Live site](https://rgehrkedk.github.io/html-templates/)
- [GitHub repo](https://github.com/rgehrkedk/html-templates)
- [GitHub Actions](https://github.com/rgehrkedk/html-templates/actions)

---

*Opdateret: 2025-11-18*
*Auto-deploy til main branch: Aktiv ✅*
*Source-only branches: Konfigureret ✅*
*GitHub Pages serverer fra main: Aktiv ✅*
