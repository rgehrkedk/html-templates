# HTML Templates til e-Boks Beskeder

En samling af sikre, responsive HTML/CSS skabeloner til e-Boks webview beskeder.

## Oversigt

Dette repository indeholder produktionsklare HTML/CSS skabeloner designet til e-Boks digital post. Hver skabelon er bygget med sikkerhed og kompatibilitet i fokus, kun HTML og CSS (ingen JavaScript).

## GitHub Pages

Se live site: [https://rgehrkedk.github.io/html-templates/](https://rgehrkedk.github.io/html-templates/)

Siden opdateres automatisk fra main branch ved hver push.

## Tilgængelige Skabeloner

- **Årsbrev - Forsikring** ⭐ Professionelt årsbrev fra forsikringsselskab med CSS-only accordions (dansk)
- **Årsbrev - Forsikring (Swiss Style)** ⭐ Swiss/International Typographic Style variant med Helvetica, grid-baseret layout og ekstrem renhed
- **Grundlæggende Notifikation** - Simpel skabelon til systemnotifikationer og advarsler
- **Velkomstbesked** - Professionel velkomstbesked til nye brugere eller kunder
- **Sikkerhedsadvarsel** - Vigtig sikkerhedsnotifikation med tydelige handlingsemner
- **Nyhedsbrev** - Multi-sektion nyhedsbrevsskabelon til regelmæssige opdateringer

## Features

- Ren, valideret HTML uden eksterne afhængigheder
- Responsivt design der virker på alle enheder
- Kun HTML og CSS (ingen JavaScript)
- Sikkerhedsfokuseret (ingen scripts, ingen eksterne ressourcer)
- CSS-only accordions brugt smart i forsikringsskabelonen

## Anvendelse

1. Gennemse skabeloner på [https://rgehrkedk.github.io/html-templates/](https://rgehrkedk.github.io/html-templates/)
2. Se eller download den skabelon du har brug for
3. Tilpas med dit eget indhold og branding
4. Test på forskellige enheder før publicering

## Filstruktur

```
html-templates/
├── index.html          # Hovedside
├── styles.css          # Styles til hovedsiden
├── templates/          # Skabeloner
│   ├── insurance-annual-letter.html  # Årsbrev forsikring (ny!)
│   ├── basic-notification.html
│   ├── welcome-email.html
│   ├── security-alert.html
│   └── newsletter.html
└── README.md
```

## Tekniske Detaljer

### CSS-Only Accordions
Forsikringsskabelonen bruger `<details>` og `<summary>` HTML elementer for at skabe interaktive accordions uden JavaScript. Dette sikrer maksimal kompatibilitet og hurtig loading.

### Responsivt Design
Alle skabeloner er mobile-first og bruger moderne CSS Grid og Flexbox for optimal visning på alle skærme.

## Development

### Automatisk Deployment
Repository bruger GitHub Actions til automatisk workflow:

- **Template discovery:** Ved hver push scannes `templates/` mappen automatisk
- **Index opdatering:** `index.html` opdateres automatisk med alle tilgængelige templates via `build-index.js`
- **Auto-merge:** Claude branches (`claude/*`) merges automatisk til `main` ved push
- **GitHub Pages:** Deployer automatisk fra `main` branch
- Ingen manuel intervention nødvendig

Workflow: `.github/workflows/auto-merge-to-main.yml`

### Tilføj Ny Template
1. Opret din `.html` fil i `templates/` mappen
2. Tilføj metadata i `build-index.js` (valgfrit - ellers bruges automatisk detection)
3. Commit og push - resten sker automatisk
4. `index.html` opdateres automatisk med link til din nye template

### Lokal Development
1. Klon repository
2. Åbn `index.html` i browser
3. Rediger skabeloner i `templates/` mappen
4. Kør `npm run build` for at opdatere index.html lokalt
5. Push til `claude/*` branch - resten sker automatisk

## Licens

MIT License - Brug frit skabelonerne i dine projekter.