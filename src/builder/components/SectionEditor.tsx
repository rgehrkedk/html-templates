import React, { useState } from 'react';
import { TemplateSection } from '../types/builder.types';
import { VARIANT_FIELDS } from '../data/variantFields';
import { SECTION_DEFINITIONS } from '../data/sections';
import styles from './SectionEditor.module.css';

interface SectionEditorProps {
  section: TemplateSection;
  onUpdate: (data: Record<string, any>) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({
  section,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Record<string, any>>(section.data || {});

  const definition = SECTION_DEFINITIONS.find(d => d.type === section.type);
  const variant = definition?.variants.find(v => v.id === section.variant);
  const fields = VARIANT_FIELDS[section.variant] || [];

  const handleFieldChange = (key: string, value: string) => {
    setEditData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onUpdate(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(section.data || {});
    setIsEditing(false);
  };

  return (
    <div className={styles.sectionEditor}>
      <div className={styles.header}>
        <div className={styles.info}>
          <span className={styles.icon}>{definition?.icon}</span>
          <div>
            <div className={styles.name}>{definition?.name} - {variant?.name}</div>
            <div className={styles.description}>{variant?.description}</div>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.actionBtn}
            onClick={onMoveUp}
            disabled={!canMoveUp}
            title="Move up"
          >
            ↑
          </button>
          <button
            className={styles.actionBtn}
            onClick={onMoveDown}
            disabled={!canMoveDown}
            title="Move down"
          >
            ↓
          </button>
          <button
            className={styles.editBtn}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? '👁️' : '✏️'}
          </button>
          <button
            className={styles.removeBtn}
            onClick={onRemove}
            title="Remove"
          >
            ×
          </button>
        </div>
      </div>

      {isEditing && (
        <div className={styles.editForm}>
          {fields.map(field => (
            <div key={field.key} className={styles.field}>
              <label className={styles.label}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  className={styles.textarea}
                  value={editData[field.key] || field.defaultValue || ''}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  rows={3}
                />
              ) : (
                <input
                  className={styles.input}
                  type="text"
                  value={editData[field.key] || field.defaultValue || ''}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}

          <div className={styles.formActions}>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
            <button className={styles.saveBtn} onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
