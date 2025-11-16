import { StyleType } from '../builder/types/builder.types';

export interface BuildedTemplate {
  id: string;
  title: string;
  description: string;
  style: StyleType;
  sectionCount: number;
  htmlContent: string;
  createdAt: string;
  colors: {
    brand: string;
    accent: string;
    neutral: string;
  };
}

const STORAGE_KEY = 'builded-templates';

/**
 * Save a generated template to localStorage
 */
export function saveTemplate(template: BuildedTemplate): void {
  const templates = getTemplates();
  templates.push(template);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
}

/**
 * Get all generated templates from localStorage
 */
export function getTemplates(): BuildedTemplate[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to load templates from localStorage:', error);
    return [];
  }
}

/**
 * Delete a generated template by ID
 */
export function deleteTemplate(id: string): void {
  const templates = getTemplates();
  const filtered = templates.filter(t => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

/**
 * Get a single template by ID
 */
export function getTemplateById(id: string): BuildedTemplate | undefined {
  const templates = getTemplates();
  return templates.find(t => t.id === id);
}

/**
 * Clear all generated templates
 */
export function clearAllTemplates(): void {
  localStorage.removeItem(STORAGE_KEY);
}
