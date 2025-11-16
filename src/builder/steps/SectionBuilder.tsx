import React, { useState } from 'react';
import { useBuilder } from '../BuilderContext';
import { SECTION_DEFINITIONS } from '../data/sections';
import { SectionType, VariantDefinition } from '../types/builder.types';
import { SectionEditor } from '../components/SectionEditor';
import { getDefaultData } from '../data/variantFields';
import styles from './SectionBuilder.module.css';

type PickerMode = 'section' | 'variant' | null;

export const SectionBuilder: React.FC = () => {
  const {
    sections,
    addSection,
    removeSection,
    updateSection,
    moveSectionUp,
    moveSectionDown,
    nextStep,
    prevStep,
  } = useBuilder();

  const [pickerMode, setPickerMode] = useState<PickerMode>(null);
  const [selectedSectionType, setSelectedSectionType] = useState<SectionType | null>(null);

  const handleAddSectionClick = () => {
    setPickerMode('section');
  };

  const handleSectionTypeSelect = (type: SectionType) => {
    setSelectedSectionType(type);
    setPickerMode('variant');
  };

  const handleVariantSelect = (variant: VariantDefinition) => {
    if (!selectedSectionType) return;

    // Get default data for this variant
    const defaultData = getDefaultData(variant.id);

    addSection({
      type: selectedSectionType,
      variant: variant.id,
      data: defaultData,
    });

    // Reset picker
    setPickerMode(null);
    setSelectedSectionType(null);
  };

  const handleCancelPicker = () => {
    setPickerMode(null);
    setSelectedSectionType(null);
  };

  const handleContinue = () => {
    nextStep();
  };

  const selectedDefinition = selectedSectionType
    ? SECTION_DEFINITIONS.find((def) => def.type === selectedSectionType)
    : null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Build Your Template</h1>
        <p className={styles.subtitle}>Add sections to create your template</p>
      </div>

      <div className={styles.content}>
        {/* Current sections list */}
        <div className={styles.sectionsList}>
          <h2 className={styles.sectionTitle}>Your Template</h2>

          {sections.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📄</div>
              <p className={styles.emptyText}>No sections yet</p>
              <p className={styles.emptyHint}>Click "Add Section" to get started</p>
            </div>
          ) : (
            <div className={styles.sectionsContainer}>
              {sections
                .sort((a, b) => a.order - b.order)
                .map((section, index) => (
                  <SectionEditor
                    key={section.id}
                    section={section}
                    onUpdate={(data) => updateSection(section.id, data)}
                    onRemove={() => removeSection(section.id)}
                    onMoveUp={() => moveSectionUp(section.id)}
                    onMoveDown={() => moveSectionDown(section.id)}
                    canMoveUp={index > 0}
                    canMoveDown={index < sections.length - 1}
                  />
                ))}
            </div>
          )}

          <button className={styles.addButton} onClick={handleAddSectionClick}>
            + Add Section
          </button>
        </div>

        {/* Section picker */}
        {pickerMode === 'section' && (
          <div className={styles.picker}>
            <div className={styles.pickerHeader}>
              <h2 className={styles.pickerTitle}>Choose Section Type</h2>
              <button className={styles.closeButton} onClick={handleCancelPicker}>
                ×
              </button>
            </div>
            <div className={styles.pickerGrid}>
              {SECTION_DEFINITIONS.map((def) => (
                <button
                  key={def.type}
                  className={styles.pickerCard}
                  onClick={() => handleSectionTypeSelect(def.type)}
                >
                  <div className={styles.pickerIcon}>{def.icon}</div>
                  <div className={styles.pickerName}>{def.name}</div>
                  <div className={styles.pickerDescription}>{def.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Variant picker */}
        {pickerMode === 'variant' && selectedDefinition && (
          <div className={styles.picker}>
            <div className={styles.pickerHeader}>
              <h2 className={styles.pickerTitle}>
                Choose {selectedDefinition.name} Variant
              </h2>
              <button className={styles.closeButton} onClick={handleCancelPicker}>
                ×
              </button>
            </div>
            <div className={styles.pickerGrid}>
              {selectedDefinition.variants.map((variant) => (
                <button
                  key={variant.id}
                  className={styles.pickerCard}
                  onClick={() => handleVariantSelect(variant)}
                >
                  <div className={styles.pickerName}>{variant.name}</div>
                  <div className={styles.pickerDescription}>{variant.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.backButton} onClick={prevStep}>
          ← Back
        </button>
        <button
          className={styles.continueButton}
          onClick={handleContinue}
          disabled={sections.length === 0}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};
