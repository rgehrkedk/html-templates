import { TemplateCard } from '../TemplateCard';
import { TemplateGridProps } from './TemplateGrid.types';
import styles from './TemplateGrid.module.css';

export const TemplateGrid = ({ templates, onTemplateDelete }: TemplateGridProps) => {
  if (templates.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <h2 className={styles.emptyTitle}>Ingen skabeloner fundet</h2>
          <p className={styles.emptyDescription}>
            Prøv at ændre dine filtre for at se flere skabeloner
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onDelete={onTemplateDelete}
          />
        ))}
      </div>
    </main>
  );
};
