import { SectionDefinition } from '../types/builder.types';

export const SECTION_DEFINITIONS: SectionDefinition[] = [
  {
    type: 'header',
    name: 'Header',
    description: 'Page header with company name',
    icon: 'H',
    variants: [
      {
        id: 'header-centered',
        name: 'Centered',
        description: 'Centered header with company name',
      },
      {
        id: 'header-left',
        name: 'Left-aligned',
        description: 'Left-aligned header with tagline',
      },
      {
        id: 'header-logo',
        name: 'With Logo',
        description: 'Header with logo placeholder',
      },
    ],
  },
  {
    type: 'text-block',
    name: 'Text Block',
    description: 'Text content with optional badge',
    icon: 'T',
    variants: [
      {
        id: 'text-standard',
        name: 'Standard',
        description: 'Simple paragraph text',
      },
      {
        id: 'text-badge',
        name: 'With Badge',
        description: 'Text with info/success/warning badge',
      },
      {
        id: 'text-highlighted',
        name: 'Highlighted',
        description: 'Text in highlighted box',
      },
    ],
  },
  {
    type: 'infobox',
    name: 'InfoBox',
    description: 'Information, warning, or alert box',
    icon: 'i',
    variants: [
      {
        id: 'infobox-info',
        name: 'Info',
        description: 'Information box (blue)',
      },
      {
        id: 'infobox-warning',
        name: 'Warning',
        description: 'Warning box (yellow)',
      },
      {
        id: 'infobox-alert',
        name: 'Alert',
        description: 'Alert/Error box (red)',
      },
    ],
  },
  {
    type: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content sections',
    icon: 'A',
    variants: [
      {
        id: 'accordion-simple',
        name: 'Simple',
        description: 'Single CSS-only toggle',
      },
      {
        id: 'accordion-multi',
        name: 'Multi-item',
        description: 'Multiple expandable items',
      },
    ],
  },
  {
    type: 'table',
    name: 'Table',
    description: 'Data table',
    icon: 'TB',
    variants: [
      {
        id: 'table-striped',
        name: 'Striped',
        description: 'Table with striped rows',
      },
      {
        id: 'table-bordered',
        name: 'Bordered',
        description: 'Table with borders',
      },
    ],
  },
  {
    type: 'timeline',
    name: 'Timeline',
    description: 'Timeline or chronological list',
    icon: 'TL',
    variants: [
      {
        id: 'timeline-vertical',
        name: 'Vertical',
        description: 'Vertical timeline with dates',
      },
      {
        id: 'timeline-simple',
        name: 'Simple List',
        description: 'Simple ordered list',
      },
    ],
  },
  {
    type: 'footer',
    name: 'Footer',
    description: 'Page footer',
    icon: 'F',
    variants: [
      {
        id: 'footer-centered',
        name: 'Centered',
        description: 'Centered footer',
      },
      {
        id: 'footer-columns',
        name: 'Multi-column',
        description: 'Footer with multiple columns',
      },
    ],
  },
];
