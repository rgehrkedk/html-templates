export type IndustryType = 'forsikring' | 'pension';
export type StyleType = 'editorial' | 'swiss' | 'utility' | 'soft-illustrated' | 'classic';

export interface Template {
  id: string;
  title: string;
  description: string;
  industry: IndustryType;
  style: StyleType;
  filename: string;
}
