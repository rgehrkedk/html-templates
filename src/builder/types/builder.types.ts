export type StyleType = 'classic' | 'swiss';

export type SectionType =
  | 'header'
  | 'text-block'
  | 'infobox'
  | 'accordion'
  | 'table'
  | 'timeline'
  | 'footer';

export type InfoBoxType = 'info' | 'warning' | 'alert';

export interface ColorPalette {
  brand: string;
  accent: string;
  neutral: string;
  generated?: GeneratedColors;
}

export interface GeneratedColors {
  // Brand shades
  brandLighter: string;
  brandLight: string;
  brandDark: string;
  brandDarker: string;

  // Accent shades
  accentLighter: string;
  accentLight: string;
  accentDark: string;
  accentDarker: string;

  // Neutral shades
  neutralLighter: string;
  neutralLight: string;
  neutralDark: string;
  neutralDarker: string;

  // Feedback colors
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface TemplateSection {
  id: string;
  type: SectionType;
  variant: string;
  order: number;
  data?: Record<string, any>; // For variant-specific data
}

export interface SectionDefinition {
  type: SectionType;
  name: string;
  description: string;
  icon: string;
  variants: VariantDefinition[];
}

export interface VariantDefinition {
  id: string;
  name: string;
  description: string;
  preview?: string; // SVG or description
}

export interface TemplateBuilderState {
  // Step 1
  selectedStyle: StyleType | null;

  // Step 2
  colorPalette: ColorPalette;

  // Step 3
  sections: TemplateSection[];

  // Current step (1-4)
  currentStep: number;
}

export interface BuilderContextType extends TemplateBuilderState {
  setStyle: (style: StyleType) => void;
  setColors: (colors: ColorPalette) => void;
  addSection: (section: Omit<TemplateSection, 'id' | 'order'>) => void;
  removeSection: (id: string) => void;
  updateSection: (id: string, data: Record<string, any>) => void;
  moveSectionUp: (id: string) => void;
  moveSectionDown: (id: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}
