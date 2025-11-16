import { Card, Button, Tag } from '../../primitives';
import { TemplateCardProps } from './TemplateCard.types';
import styles from './TemplateCard.module.css';

export const TemplateCard = ({ template }: TemplateCardProps) => {
  const handleView = () => {
    window.open(`templates/${template.filename}`, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `templates/${template.filename}`;
    link.download = template.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{template.title}</h3>
        <p className={styles.description}>{template.description}</p>

        <div className={styles.tags}>
          <Tag type="industry">{template.industry}</Tag>
          <Tag type="style">{template.style}</Tag>
        </div>

        <div className={styles.actions}>
          <Button
            variant="primary"
            onClick={handleView}
            className={styles.actionButton}
          >
            Se Skabelon
          </Button>
          <Button
            variant="secondary"
            onClick={handleDownload}
            className={styles.actionButton}
          >
            Download
          </Button>
        </div>
      </div>
    </Card>
  );
};
