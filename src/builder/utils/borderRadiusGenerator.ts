import { BorderRadiusStyle, BorderRadiusPreset } from '../types/builder.types';

/**
 * Predefined border-radius presets
 */
export const BORDER_RADIUS_PRESETS: Record<BorderRadiusStyle, BorderRadiusPreset> = {
  none: {
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
    badge: '0',
    full: '50%',  // Circles stay circular
  },
  soft: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    badge: '16px',
    full: '50%',
  },
  rounded: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    badge: '9999px',  // Full pill shape
    full: '50%',
  },
};

/**
 * Generate CSS custom properties for border-radius
 */
export function generateBorderRadiusVariables(style: BorderRadiusStyle): string {
  const preset = BORDER_RADIUS_PRESETS[style];

  return `  /* Border Radius (${style}) */
  --radius-sm: ${preset.sm};
  --radius-md: ${preset.md};
  --radius-lg: ${preset.lg};
  --radius-xl: ${preset.xl};
  --radius-badge: ${preset.badge};
  --radius-full: ${preset.full};`;
}

/**
 * Get human-readable description for each style
 */
export function getBorderRadiusDescription(style: BorderRadiusStyle): string {
  const descriptions: Record<BorderRadiusStyle, string> = {
    none: 'Sharp, angular design with no rounded corners',
    soft: 'Subtle rounded corners for a balanced look',
    rounded: 'Prominent rounded corners for a modern feel',
  };
  return descriptions[style];
}
