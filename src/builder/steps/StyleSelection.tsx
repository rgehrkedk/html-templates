import React from 'react';
import { useBuilder } from '../BuilderContext';
import { STYLE_DEFINITIONS } from '../data/styles';
import { StyleType, BorderRadiusStyle } from '../types/builder.types';
import { BORDER_RADIUS_PRESETS, getBorderRadiusDescription } from '../utils/borderRadiusGenerator';
import styles from './StyleSelection.module.css';

export const StyleSelection: React.FC = () => {
  const { selectedStyle, borderRadius, setStyle, setBorderRadius, nextStep } = useBuilder();

  const handleStyleSelect = (styleId: StyleType) => {
    setStyle(styleId);
  };

  const handleBorderRadiusSelect = (radius: BorderRadiusStyle) => {
    setBorderRadius(radius);
  };

  const handleContinue = () => {
    if (selectedStyle) {
      nextStep();
    }
  };

  const radiusOptions: BorderRadiusStyle[] = ['none', 'soft', 'rounded'];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Choose Your Style</h1>
        <p className={styles.subtitle}>Select a visual style and border radius for your template</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Template Style</h2>
        <div className={styles.styleGrid}>
          {STYLE_DEFINITIONS.map((style) => (
            <button
              key={style.id}
              className={`${styles.styleCard} ${
                selectedStyle === style.id ? styles.selected : ''
              }`}
              onClick={() => handleStyleSelect(style.id)}
            >
              <h3 className={styles.styleName}>{style.name}</h3>
              <p className={styles.styleDescription}>{style.description}</p>
              <div className={styles.styleDetails}>{style.preview}</div>
              {selectedStyle === style.id && (
                <div className={styles.checkmark}>✓</div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Radius</h2>
        <p className={styles.sectionDescription}>Choose how rounded the corners should be</p>

        <div className={styles.radiusGrid}>
          {radiusOptions.map((option) => (
            <button
              key={option}
              className={`${styles.radiusCard} ${
                borderRadius === option ? styles.radiusCardSelected : ''
              }`}
              onClick={() => handleBorderRadiusSelect(option)}
            >
              <div className={styles.radiusPreview}>
                <div
                  className={styles.radiusPreviewBox}
                  style={{
                    borderRadius: BORDER_RADIUS_PRESETS[option].lg
                  }}
                />
                <div
                  className={styles.radiusPreviewBadge}
                  style={{
                    borderRadius: BORDER_RADIUS_PRESETS[option].badge
                  }}
                >
                  Badge
                </div>
              </div>

              <div className={styles.radiusInfo}>
                <h3 className={styles.radiusName}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </h3>
                <p className={styles.radiusDescription}>
                  {getBorderRadiusDescription(option)}
                </p>

                <div className={styles.radiusValues}>
                  <span className={styles.radiusValue}>SM: {BORDER_RADIUS_PRESETS[option].sm}</span>
                  <span className={styles.radiusValue}>MD: {BORDER_RADIUS_PRESETS[option].md}</span>
                  <span className={styles.radiusValue}>LG: {BORDER_RADIUS_PRESETS[option].lg}</span>
                </div>
              </div>
              {borderRadius === option && (
                <div className={styles.checkmark}>✓</div>
              )}
            </button>
          ))}
        </div>
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
