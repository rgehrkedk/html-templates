import { ColorPalette, GeneratedColors } from '../types/builder.types';

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert RGB to hex
 */
function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

/**
 * Lighten a color by a percentage
 */
function lighten(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const amount = percent / 100;
  const r = rgb.r + (255 - rgb.r) * amount;
  const g = rgb.g + (255 - rgb.g) * amount;
  const b = rgb.b + (255 - rgb.b) * amount;

  return rgbToHex(r, g, b);
}

/**
 * Darken a color by a percentage
 */
function darken(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const amount = percent / 100;
  const r = rgb.r * (1 - amount);
  const g = rgb.g * (1 - amount);
  const b = rgb.b * (1 - amount);

  return rgbToHex(r, g, b);
}

/**
 * Generate a complete color palette from base colors
 */
export function generateColorPalette(palette: ColorPalette): ColorPalette {
  const generated: GeneratedColors = {
    // Brand shades
    brandLighter: lighten(palette.brand, 40),
    brandLight: lighten(palette.brand, 20),
    brandDark: darken(palette.brand, 20),
    brandDarker: darken(palette.brand, 40),

    // Accent shades
    accentLighter: lighten(palette.accent, 40),
    accentLight: lighten(palette.accent, 20),
    accentDark: darken(palette.accent, 20),
    accentDarker: darken(palette.accent, 40),

    // Neutral shades
    neutralLighter: lighten(palette.neutral, 50),
    neutralLight: lighten(palette.neutral, 30),
    neutralDark: darken(palette.neutral, 20),
    neutralDarker: darken(palette.neutral, 40),

    // Warning shades
    warningLighter: lighten(palette.warning, 40),
    warningLight: lighten(palette.warning, 20),
    warningDark: darken(palette.warning, 20),
    warningDarker: darken(palette.warning, 40),

    // Error shades
    errorLighter: lighten(palette.error, 40),
    errorLight: lighten(palette.error, 20),
    errorDark: darken(palette.error, 20),
    errorDarker: darken(palette.error, 40),

    // Feedback colors (semantic aliases)
    success: palette.accent, // Use accent color as success (usually green)
    info: palette.brand, // Use brand color as info (usually blue)

    // InfoBox specific colors
    infoBg: lighten(palette.brand, 40),        // Very light blue
    infoHeading: darken(palette.brand, 20),    // Dark blue
    infoText: darken(palette.brand, 40),       // Darker blue

    warningBg: lighten(palette.warning, 40),   // Very light amber
    warningHeading: darken(palette.warning, 20), // Dark amber/brown
    warningText: darken(palette.warning, 40),  // Darker brown

    errorBg: lighten(palette.error, 40),       // Very light red
    errorHeading: darken(palette.error, 20),   // Dark red
    errorText: darken(palette.error, 40),      // Darker red
  };

  return {
    ...palette,
    generated,
  };
}

/**
 * Generate CSS custom properties from color palette
 */
export function generateCSSVariables(palette: ColorPalette): string {
  const generated = palette.generated;
  if (!generated) return '';

  return `  /* ===========================
     BASE COLORS
     =========================== */
  --color-brand: ${palette.brand};
  --color-accent: ${palette.accent};
  --color-neutral: ${palette.neutral};
  --color-warning: ${palette.warning};
  --color-error: ${palette.error};

  /* ===========================
     BRAND SHADES
     =========================== */
  --color-brand-lighter: ${generated.brandLighter};
  --color-brand-light: ${generated.brandLight};
  --color-brand-dark: ${generated.brandDark};
  --color-brand-darker: ${generated.brandDarker};

  /* ===========================
     ACCENT SHADES
     =========================== */
  --color-accent-lighter: ${generated.accentLighter};
  --color-accent-light: ${generated.accentLight};
  --color-accent-dark: ${generated.accentDark};
  --color-accent-darker: ${generated.accentDarker};

  /* ===========================
     NEUTRAL SHADES
     =========================== */
  --color-neutral-lighter: ${generated.neutralLighter};
  --color-neutral-light: ${generated.neutralLight};
  --color-neutral-dark: ${generated.neutralDark};
  --color-neutral-darker: ${generated.neutralDarker};

  /* ===========================
     WARNING SHADES
     =========================== */
  --color-warning-lighter: ${generated.warningLighter};
  --color-warning-light: ${generated.warningLight};
  --color-warning-dark: ${generated.warningDark};
  --color-warning-darker: ${generated.warningDarker};

  /* ===========================
     ERROR SHADES
     =========================== */
  --color-error-lighter: ${generated.errorLighter};
  --color-error-light: ${generated.errorLight};
  --color-error-dark: ${generated.errorDark};
  --color-error-darker: ${generated.errorDarker};

  /* ===========================
     FEEDBACK COLORS (semantic)
     =========================== */
  --color-success: ${generated.success};
  --color-info: ${generated.info};

  /* ===========================
     INFOBOX SPECIFIC COLORS
     =========================== */
  --color-info-bg: ${generated.infoBg};
  --color-info-heading: ${generated.infoHeading};
  --color-info-text: ${generated.infoText};

  --color-warning-bg: ${generated.warningBg};
  --color-warning-heading: ${generated.warningHeading};
  --color-warning-text: ${generated.warningText};

  --color-error-bg: ${generated.errorBg};
  --color-error-heading: ${generated.errorHeading};
  --color-error-text: ${generated.errorText};

  /* ===========================
     SEMANTIC MAPPINGS
     =========================== */
  --color-primary: var(--color-brand);
  --color-secondary: var(--color-accent);
  --color-text: var(--color-neutral-darker);
  --color-text-light: var(--color-neutral);
  --color-background: #ffffff;
  --color-background-gray: #f9fafb;
  --color-border: var(--color-neutral-light);`;
}
