import { IndustryType, StyleType } from '../../../types/template';

export interface FilterSectionProps {
  activeIndustry: IndustryType | 'alle';
  activeStyle: StyleType | 'alle';
  onIndustryChange: (industry: IndustryType | 'alle') => void;
  onStyleChange: (style: StyleType | 'alle') => void;
}
