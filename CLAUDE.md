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
- Arbejde på `claude/*` branches
- Pushe til `claude/*` branches
- Lade GitHub Actions håndtere deployment

### Auto-Deploy til GitHub Pages
Dette projekt har **automatisk deployment til gh-pages** via GitHub Actions:

1. **Du arbejder på:** `claude/[task]-[session-id]` branches
2. **Du pusher til:** Din `claude/*` branch
3. **GitHub Actions:** Bygger projektet og deployer til `gh-pages` branch
4. **GitHub Pages:** Serverer automatisk fra `gh-pages` branch

### Workflow fil
`.github/workflows/deploy-gh-pages.yml` - Deployer alle `claude/**` branches direkte til GitHub Pages.

### Main Branch Workflow

**Vigtig filosofi:** `main` branch er for **færdige features**, ikke hver iteration!

- `gh-pages` branch opdateres ved hver push til `claude/*` branches
- `main` branch opdateres KUN via **Pull Request** når feature er færdig
- Dette holder `main` ren og fri for "work in progress" commits

### Hvad betyder det?

✅ **Du skal:**
- Arbejde på `claude/*` branches (som normalt)
- Pushe til din `claude/*` branch så ofte du vil
- Lade GitHub Actions deploye til `gh-pages` automatisk
- Oprette PR til `main` når feature er **færdig og klar**

❌ **Du skal IKKE:**
- Prøve at pushe direkte til `main` (giver 403 fejl)
- Bekymre dig om deployment til GitHub Pages
- Merge til `main` for hver lille iteration

## Design Principper

- **Minimalistisk:** Clean, fokuseret design uden fancy effekter
- **Responsivt:** Mobile-first med CSS Grid og Flexbox
- **Tilgængeligt:** WCAG AA kontraster, semantic HTML
- **CSS-only:** Ingen JavaScript - kun HTML + CSS
- **Interaktivitet:** `<details>` og `<summary>` for accordions

## Filstruktur

```
html-templates/
├── .github/
│   └── workflows/
│       └── deploy-gh-pages.yml      # Auto-deploy til gh-pages
├── src/                             # React app source
├── templates/                       # Statiske HTML templates
├── tokens/                          # Design tokens
├── index.html                       # Built app entry point
├── assets/                          # Built assets (auto-genereret)
├── package.json                     # npm dependencies & scripts
├── vite.config.ts                   # Vite bundler config
├── README.md                        # Projekt dokumentation
└── CLAUDE.md                        # Dette dokument (auto-læses af Claude Code)
```

## Vigtige Kommandoer

### Arbejde med branches
```bash
# Opret ny branch (auto-genereret session ID)
git checkout -b claude/new-feature-[session-id]

# Commit og push (kan gøres så ofte du vil!)
git add .
git commit -m "Beskrivelse"
git push -u origin claude/new-feature-[session-id]

# GitHub Actions deployer automatisk til gh-pages!
# Vent 1-2 minutter → live på https://rgehrkedk.github.io/html-templates/
```

### Build og test lokalt
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build production
npm run build
```

## Kontekst fra Tidligere Sessions

### Session historie:
1. **Initial setup** - Oprettede grundlæggende templates
2. **Insurance template** - Lavede forsikringsårsbrev med CSS accordions
3. **Auto-merge setup** - Konfigurerede GitHub Actions workflow (senere erstattet)
4. **Apple variant eksperiment** - Testede alternative designs (SLETTET)
5. **Template builder** - React app til at bygge templates dynamisk
6. **Streamline workflow (2025-11-17)** - Ændrede fra auto-merge-to-main til gh-pages deployment for at holde main branch ren

### Design fokus:
- **Minimalistisk** - Clean design uden overflødige effekter
- **Funktionel** - CSS-only accordions, responsive layout
- **Tilgængelig** - WCAG AA kontrast, semantic HTML

## Tips til Næste Claude Session

1. **Husk:** Brug `claude/*` branches - auto-merge er sat op
2. **Design:** Hold det simpelt, funktionelt og tilgængeligt
3. **Test:** Tjek altid WCAG kontrast ved farveændringer
4. **Dansk:** Alle templates er på dansk
5. **Ingen JS:** Projektet er kun HTML + CSS
6. **CSS-only:** Brug `<details>` for accordions, ikke JavaScript

## Nyttige Links

- [Live site](https://rgehrkedk.github.io/html-templates/)
- [GitHub repo](https://github.com/rgehrkedk/html-templates)
- [GitHub Actions](https://github.com/rgehrkedk/html-templates/actions)

---

*Opdateret: 2025-11-17*
*Auto-deploy til gh-pages workflow: Aktiv ✅*
*Claude Code Remote: Konfigureret korrekt ✅*
