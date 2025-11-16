export type IndustryType = 'forsikring' | 'pension' | 'builded';
export type StyleType = 'editorial' | 'swiss' | 'utility' | 'soft-illustrated' | 'classic';

export interface Template {
  id: string;
  title: string;
  description: string;
  industry: IndustryType;
  style: StyleType;
  filename: string;
  // Optional fields for builded templates
  htmlContent?: string;
  colors?: {
    brand: string;
    accent: string;
    neutral: string;
  };
  createdAt?: string;
}
