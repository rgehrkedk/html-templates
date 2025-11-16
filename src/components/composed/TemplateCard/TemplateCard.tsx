import { Card, Button, Tag } from '../../primitives';
import { TemplateCardProps } from './TemplateCard.types';
import { deleteTemplate } from '../../../utils/templateStorage';
import styles from './TemplateCard.module.css';

export const TemplateCard = ({ template, onDelete }: TemplateCardProps) => {
  const isBuildedTemplate = template.industry === 'builded';

  const handleView = () => {
    if (isBuildedTemplate && template.htmlContent) {
      // Open builded template in new window with HTML content
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(template.htmlContent);
        newWindow.document.close();
      }
    } else {
      // Open static template file
      window.open(`templates/${template.filename}`, '_blank');
    }
  };

  const handleDownload = () => {
    if (isBuildedTemplate && template.htmlContent) {
      // Download builded template from content
      const blob = new Blob([template.htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${template.id}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      // Download static template file
      const link = document.createElement('a');
      link.href = `templates/${template.filename}`;
      link.download = template.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete "${template.title}"?`)) {
      deleteTemplate(template.id);
      onDelete?.();
    }
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
          {isBuildedTemplate && (
            <Button
              variant="secondary"
              onClick={handleDelete}
              className={styles.deleteButton}
            >
              🗑️ Slet
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
