import { Button } from '../../primitives';
import { FilterSectionProps } from './FilterSection.types';
import { IndustryType, StyleType } from '../../../types/template';
import styles from './FilterSection.module.css';

const INDUSTRIES: Array<{ value: IndustryType | 'alle'; label: string }> = [
  { value: 'alle', label: 'Alle' },
  { value: 'forsikring', label: 'Forsikring' },
  { value: 'pension', label: 'Pension' },
  { value: 'builded', label: '🛠️ Builded' },
];

const STYLES: Array<{ value: StyleType | 'alle'; label: string }> = [
  { value: 'alle', label: 'Alle' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'swiss', label: 'Swiss' },
  { value: 'utility', label: 'Utility' },
  { value: 'soft-illustrated', label: 'Soft Illustrated' },
  { value: 'classic', label: 'Classic' },
];

export const FilterSection = ({
  activeIndustry,
  activeStyle,
  onIndustryChange,
  onStyleChange,
}: FilterSectionProps) => {
  return (
    <section className={styles.filterSection}>
      <div className={styles.container}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Branche</label>
          <div className={styles.filterButtons}>
            {INDUSTRIES.map(({ value, label }) => (
              <Button
                key={value}
                variant="secondary"
                active={activeIndustry === value}
                onClick={() => onIndustryChange(value)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Stil</label>
          <div className={styles.filterButtons}>
            {STYLES.map(({ value, label }) => (
              <Button
                key={value}
                variant="secondary"
                active={activeStyle === value}
                onClick={() => onStyleChange(value)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
