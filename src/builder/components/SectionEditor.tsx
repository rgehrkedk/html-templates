import React, { useState } from 'react';
import { TemplateSection } from '../types/builder.types';
import { VARIANT_FIELDS } from '../data/variantFields';
import { SECTION_DEFINITIONS } from '../data/sections';
import { VARIANT_RENDERERS } from '../utils/variantRenderers';
import { useBuilder } from '../BuilderContext';
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
  const [showPreview, setShowPreview] = useState(true);
  const [editData, setEditData] = useState<Record<string, any>>(section.data || {});
  const { colorPalette } = useBuilder();

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

  const getPreviewHTML = () => {
    const renderer = VARIANT_RENDERERS[section.variant];
    if (!renderer) return '';

    let html = renderer(section.data);

    // Apply color palette
    const colors = colorPalette.generated;
    if (colors) {
      html = html
        .replace(/var\(--color-brand\)/g, colorPalette.brand)
        .replace(/var\(--color-brand-lighter\)/g, colors.brandLighter)
        .replace(/var\(--color-brand-light\)/g, colors.brandLight)
        .replace(/var\(--color-accent\)/g, colorPalette.accent)
        .replace(/var\(--color-neutral\)/g, colorPalette.neutral)
        .replace(/var\(--color-neutral-lighter\)/g, colors.neutralLighter)
        .replace(/var\(--color-neutral-light\)/g, colors.neutralLight)
        .replace(/var\(--color-neutral-dark\)/g, colors.neutralDark)
        .replace(/var\(--color-neutral-darker\)/g, colors.neutralDarker)
        .replace(/var\(--color-text\)/g, '#1f2937')
        .replace(/var\(--color-text-light\)/g, '#6b7280')
        .replace(/var\(--color-border\)/g, '#e5e7eb')
        .replace(/var\(--color-info\)/g, colors.info)
        .replace(/var\(--color-warning\)/g, colors.warning)
        .replace(/var\(--color-error\)/g, colors.error)
        .replace(/var\(--color-success\)/g, colors.success);
    }

    return html;
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
            onClick={() => setShowPreview(!showPreview)}
            title={showPreview ? 'Hide preview' : 'Show preview'}
          >
            {showPreview ? '👁️' : '👁️‍🗨️'}
          </button>
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
            title={isEditing ? 'View mode' : 'Edit mode'}
          >
            {isEditing ? 'View' : 'Edit'}
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

      {showPreview && !isEditing && (
        <div className={styles.preview}>
          <div className={styles.previewLabel}>Preview</div>
          <div
            className={styles.previewContent}
            dangerouslySetInnerHTML={{ __html: getPreviewHTML() }}
          />
        </div>
      )}

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
