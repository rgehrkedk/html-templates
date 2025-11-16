import { StyleType } from '../types/builder.types';

export interface StyleDefinition {
  id: StyleType;
  name: string;
  description: string;
  preview: string;
}

export const STYLE_DEFINITIONS: StyleDefinition[] = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Clean & Modern',
    preview: 'Professional design with rounded corners and subtle shadows',
  },
  {
    id: 'swiss',
    name: 'Swiss',
    description: 'Grid & Minimal',
    preview: 'International Typographic Style with grid-based layout',
  },
];
