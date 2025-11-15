# HTML Templates til e-Boks Beskeder

En samling af sikre, responsive HTML/CSS skabeloner til e-Boks webview beskeder.

## Oversigt

Dette repository indeholder produktionsklare HTML/CSS skabeloner designet til e-Boks digital post. Hver skabelon er bygget med sikkerhed og kompatibilitet i fokus, kun HTML og CSS (ingen JavaScript).

## GitHub Pages

Se live site: [https://rgehrkedk.github.io/html-templates/](https://rgehrkedk.github.io/html-templates/)

Siden opdateres automatisk fra main branch ved hver push.

## Tilgængelige Skabeloner

- **Årsbrev - Forsikring** ⭐ Professionelt årsbrev fra forsikringsselskab med CSS-only accordions (dansk)
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

Repository er konfigureret til GitHub Pages med automatisk deployment. Alle ændringer pushet til main branch opdaterer automatisk live site.

## Licens

MIT License - Brug frit skabelonerne i dine projekter.