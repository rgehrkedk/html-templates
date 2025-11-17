# HTML Templates til Beskeder

En samling af sikre, responsive HTML/CSS skabeloner til e-Boks webview beskeder, med en moderne React-baseret demo landing page.

## Oversigt

Dette repository indeholder:
- **Produktionsklare HTML/CSS skabeloner** til e-Boks digital post (kun HTML/CSS, ingen JavaScript)
- **Moderne demo landing page** bygget med React, TypeScript, CSS Modules og Style Dictionary

## GitHub Pages

Se live site: [https://rgehrkedk.github.io/html-templates/](https://rgehrkedk.github.io/html-templates/)

Siden opdateres automatisk fra main branch ved hver push.

## Tilgængelige Skabeloner

- **Årsbrev - Forsikring (Classic)** - Professionelt årsbrev med CSS-only accordions
- **Årsbrev - Forsikring (Editorial)** - Editorial design med serif typografi og illustrationer
- **Årsbrev - Forsikring (Swiss Style)** - International Typographic Style med grid-baseret layout
- **Årsbrev - Forsikring (Utility)** - Funktionel design med klar hierarki
- **Fripolice Notifikation - Pension** - Soft Illustrated stil med dekorative marginer

## Features

### HTML Templates
- ✅ Ren, valideret HTML uden eksterne afhængigheder
- ✅ Responsivt design der virker på alle enheder
- ✅ Kun HTML og CSS (ingen JavaScript)
- ✅ Sikkerhedsfokuseret (ingen scripts, ingen eksterne ressourcer)
- ✅ CSS-only accordions

### Demo Landing Page
- ✅ **React 18** med TypeScript
- ✅ **CSS Modules** for scoped styling
- ✅ **Style Dictionary** for design tokens (primitives + themes)
- ✅ **Dark/Light mode** support
- ✅ **Component-based architecture** (primitive + composed components)
- ✅ **Vite** for fast development and optimized builds

## Project Structure

```
html-templates/
├── src/                                    # React application source
│   ├── components/
│   │   ├── primitives/                     # Primitive components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx             # Component implementation
│   │   │   │   ├── Button.types.ts        # TypeScript types
│   │   │   │   ├── Button.module.css      # CSS modules
│   │   │   │   └── index.ts               # Barrel export
│   │   │   ├── Tag/
│   │   │   └── Card/
│   │   └── composed/                       # Composed components
│   │       ├── Header/
│   │       ├── FilterSection/
│   │       ├── TemplateCard/
│   │       └── TemplateGrid/
│   ├── data/
│   │   └── templates.ts                    # Template data
│   ├── styles/
│   │   ├── tokens/                         # Generated design tokens (auto-generated)
│   │   │   ├── variables.css              # CSS custom properties
│   │   │   └── tokens.js                  # JS tokens
│   │   └── global.css                     # Global styles
│   ├── types/
│   │   ├── template.ts                     # Template types
│   │   └── css-modules.d.ts               # CSS module types
│   ├── App.tsx                             # Main app component
│   ├── main.tsx                            # Entry point
│   └── vite-env.d.ts                      # Vite types
├── tokens/                                 # Design token definitions
│   ├── primitives/                         # Design primitives
│   │   ├── colors.json
│   │   ├── spacing.json
│   │   ├── typography.json
│   │   ├── radius.json
│   │   └── shadow.json
│   └── themes/                             # Theme layers
│       ├── light.json                      # Light theme
│       └── dark.json                       # Dark theme
├── templates/                              # HTML/CSS templates (untouched)
│   ├── insurance-annual-letter.html
│   ├── insurance-annual-letter-editorial.html
│   ├── insurance-annual-letter-swiss.html
│   ├── insurance-annual-letter-utility.html
│   └── pension-fripolice-notice.html
├── dist/                                   # Build output (git-ignored)
├── build-index.js                          # Post-build script
├── style-dictionary.config.cjs             # Style Dictionary config
├── vite.config.ts                          # Vite configuration
├── tsconfig.json                           # TypeScript config
└── package.json                            # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/rgehrkedk/html-templates.git
cd html-templates
npm install
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate design tokens only
npm run tokens:build
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Architecture

### Design Tokens (Style Dictionary)

The project uses Style Dictionary to manage design tokens in a two-layer system:

#### Primitives Layer (`tokens/primitives/`)
Raw design values that are platform-agnostic:
- **colors.json** - Color palette (blue, slate, green scales)
- **spacing.json** - Spacing scale (0-24)
- **typography.json** - Font families, sizes, weights, line heights
- **radius.json** - Border radius values
- **shadow.json** - Box shadow definitions

#### Theme Layer (`tokens/themes/`)
Semantic tokens that reference primitives:
- **light.json** - Light theme colors, shadows
- **dark.json** - Dark theme colors, shadows

Design tokens are automatically compiled to:
- `src/styles/tokens/variables.css` - CSS custom properties
- `src/styles/tokens/tokens.js` - JavaScript tokens

### Component Architecture

#### Primitive Components
Self-contained, reusable UI elements:
- **Button** - Primary/Secondary variants with active states
- **Tag** - Industry/Style tags with themed colors
- **Card** - Content cards with hover effects

Each primitive component has:
- `ComponentName.tsx` - Component logic
- `ComponentName.types.ts` - TypeScript interfaces
- `ComponentName.module.css` - Scoped styles using design tokens
- `index.ts` - Barrel export

#### Composed Components
Higher-level components built from primitives:
- **Header** - Site header with theme toggle
- **FilterSection** - Filter controls for industry/style
- **TemplateCard** - Template display card with actions
- **TemplateGrid** - Grid layout for templates with empty state

### CSS Modules

All components use CSS Modules for scoped styling:
- Class names are automatically scoped to prevent conflicts
- Design tokens (CSS custom properties) are used for all design values
- Dark mode support via `[data-theme="dark"]` attribute
- Responsive design with mobile-first approach

### Theme Switching

The app supports light/dark modes:
1. Theme state managed in `App.tsx`
2. `data-theme` attribute set on `<html>` element
3. CSS custom properties switch based on theme
4. User preference persists via React state

## Build Process

```bash
npm run build
```

Build steps:
1. **Generate design tokens** - Style Dictionary compiles tokens to CSS/JS
2. **Build React app** - Vite bundles the application
3. **Copy templates** - HTML templates copied to `dist/templates/`
4. **Output** - Production-ready files in `dist/`

Build output:
```
dist/
├── index.html                  # Entry HTML
├── assets/
│   ├── index-[hash].css       # Bundled CSS
│   └── index-[hash].js        # Bundled JS
└── templates/                  # HTML templates
    └── *.html
```

## Deployment

The project uses GitHub Actions for automated deployment:

### Workflow (`.github/workflows/auto-merge-to-main.yml`)
1. Push to `claude/*` branch
2. Runs `npm run build`
3. Auto-commits build changes
4. Merges to `main` branch
5. GitHub Pages deploys from `main`

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service

## Adding New Templates

1. Create your `.html` file in `templates/` directory
2. Add metadata to `src/data/templates.ts`:
   ```typescript
   {
     id: 'template-id',
     title: 'Template Title',
     description: 'Description...',
     industry: 'forsikring' | 'pension',
     style: 'editorial' | 'swiss' | 'utility' | 'soft-illustrated' | 'classic',
     filename: 'template-file.html'
   }
   ```
3. Commit and push - deployment happens automatically

## Extending the Design System

### Adding New Tokens

1. **Add primitive values** to `tokens/primitives/*.json`
2. **Reference in theme** in `tokens/themes/*.json`
3. **Rebuild tokens**: `npm run tokens:build`
4. **Use in CSS Modules**: `var(--token-name)`

Example:
```json
// tokens/primitives/colors.json
{
  "color": {
    "purple": {
      "500": { "value": "#a855f7" }
    }
  }
}

// tokens/themes/light.json
{
  "theme": {
    "light": {
      "color": {
        "accent": { "value": "{color.purple.500.value}" }
      }
    }
  }
}
```

### Creating New Components

1. Create component folder in `src/components/primitives/` or `src/components/composed/`
2. Add files:
   - `ComponentName.tsx`
   - `ComponentName.types.ts`
   - `ComponentName.module.css`
   - `index.ts`
3. Use design tokens in CSS: `var(--theme-light-color-primary)`
4. Export from parent `index.ts`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties (CSS variables) required

## License

MIT License - Use freely in your projects.
