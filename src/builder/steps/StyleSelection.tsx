import React from 'react';
import { useBuilder } from '../BuilderContext';
import { STYLE_DEFINITIONS } from '../data/styles';
import { StyleType } from '../types/builder.types';
import styles from './StyleSelection.module.css';

export const StyleSelection: React.FC = () => {
  const { selectedStyle, setStyle, nextStep } = useBuilder();

  const handleStyleSelect = (styleId: StyleType) => {
    setStyle(styleId);
  };

  const handleContinue = () => {
    if (selectedStyle) {
      nextStep();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Choose Your Style</h1>
        <p className={styles.subtitle}>Select a visual style for your template</p>
      </div>

      <div className={styles.styleGrid}>
        {STYLE_DEFINITIONS.map((style) => (
          <button
            key={style.id}
            className={`${styles.styleCard} ${
              selectedStyle === style.id ? styles.selected : ''
            }`}
            onClick={() => handleStyleSelect(style.id)}
          >
            <div className={styles.stylePreview}>
              <div className={styles.previewIcon}>
                {style.id === 'classic' ? '📄' : '📐'}
              </div>
            </div>
            <h3 className={styles.styleName}>{style.name}</h3>
            <p className={styles.styleDescription}>{style.description}</p>
            <div className={styles.styleDetails}>{style.preview}</div>
            {selectedStyle === style.id && (
              <div className={styles.checkmark}>✓</div>
            )}
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <button
          className={styles.continueButton}
          onClick={handleContinue}
          disabled={!selectedStyle}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};
