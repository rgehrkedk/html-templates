import React, { useState, useEffect } from 'react';
import { useBuilder } from '../BuilderContext';
import { generateColorPalette } from '../utils/colorGenerator';
import { ColorPalette as ColorPaletteType } from '../types/builder.types';
import styles from './ColorPalette.module.css';

export const ColorPalette: React.FC = () => {
  const { colorPalette, setColors, nextStep, prevStep } = useBuilder();

  const [localPalette, setLocalPalette] = useState<ColorPaletteType>(colorPalette);

  useEffect(() => {
    // Generate colors whenever base colors change
    const generated = generateColorPalette(localPalette);
    setLocalPalette(generated);
  }, [localPalette.brand, localPalette.accent, localPalette.neutral]);

  const handleColorChange = (key: 'brand' | 'accent' | 'neutral', value: string) => {
    setLocalPalette((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleContinue = () => {
    setColors(localPalette);
    nextStep();
  };

  const generated = localPalette.generated;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Choose Your Colors</h1>
        <p className={styles.subtitle}>
          Select three base colors - we'll auto-generate the rest
        </p>
      </div>

      <div className={styles.colorInputs}>
        <div className={styles.colorInput}>
          <label className={styles.label}>
            <span className={styles.labelText}>Brand Color</span>
            <span className={styles.labelHint}>Primary brand color (usually blue)</span>
          </label>
          <div className={styles.inputGroup}>
            <input
              type="color"
              value={localPalette.brand}
              onChange={(e) => handleColorChange('brand', e.target.value)}
              className={styles.colorPicker}
            />
            <input
              type="text"
              value={localPalette.brand}
              onChange={(e) => handleColorChange('brand', e.target.value)}
              className={styles.textInput}
              placeholder="#2563eb"
            />
          </div>
        </div>

        <div className={styles.colorInput}>
          <label className={styles.label}>
            <span className={styles.labelText}>Accent Color</span>
            <span className={styles.labelHint}>Secondary/success color (usually green)</span>
          </label>
          <div className={styles.inputGroup}>
            <input
              type="color"
              value={localPalette.accent}
              onChange={(e) => handleColorChange('accent', e.target.value)}
              className={styles.colorPicker}
            />
            <input
              type="text"
              value={localPalette.accent}
              onChange={(e) => handleColorChange('accent', e.target.value)}
              className={styles.textInput}
              placeholder="#10b981"
            />
          </div>
        </div>

        <div className={styles.colorInput}>
          <label className={styles.label}>
            <span className={styles.labelText}>Neutral Color</span>
            <span className={styles.labelHint}>Gray/neutral tones</span>
          </label>
          <div className={styles.inputGroup}>
            <input
              type="color"
              value={localPalette.neutral}
              onChange={(e) => handleColorChange('neutral', e.target.value)}
              className={styles.colorPicker}
            />
            <input
              type="text"
              value={localPalette.neutral}
              onChange={(e) => handleColorChange('neutral', e.target.value)}
              className={styles.textInput}
              placeholder="#64748b"
            />
          </div>
        </div>
      </div>

      {generated && (
        <div className={styles.preview}>
          <h2 className={styles.previewTitle}>Generated Palette Preview</h2>

          <div className={styles.paletteSection}>
            <h3 className={styles.sectionTitle}>Brand Shades</h3>
            <div className={styles.swatchRow}>
              <div className={styles.swatch} style={{ background: generated.brandLighter }}>
                <span className={styles.swatchLabel}>Lighter</span>
              </div>
              <div className={styles.swatch} style={{ background: generated.brandLight }}>
                <span className={styles.swatchLabel}>Light</span>
              </div>
              <div className={styles.swatch} style={{ background: localPalette.brand }}>
                <span className={styles.swatchLabel}>Base</span>
              </div>
              <div className={styles.swatch} style={{ background: generated.brandDark }}>
                <span className={styles.swatchLabel}>Dark</span>
              </div>
              <div className={styles.swatch} style={{ background: generated.brandDarker }}>
                <span className={styles.swatchLabel}>Darker</span>
              </div>
            </div>
          </div>

          <div className={styles.paletteSection}>
            <h3 className={styles.sectionTitle}>Feedback Colors</h3>
            <div className={styles.swatchRow}>
              <div className={styles.swatch} style={{ background: generated.info }}>
                <span className={styles.swatchLabel}>Info</span>
              </div>
              <div className={styles.swatch} style={{ background: generated.success }}>
                <span className={styles.swatchLabel}>Success</span>
              </div>
              <div className={styles.swatch} style={{ background: generated.warning }}>
                <span className={styles.swatchLabel}>Warning</span>
              </div>
              <div className={styles.swatch} style={{ background: generated.error }}>
                <span className={styles.swatchLabel}>Error</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.actions}>
        <button className={styles.backButton} onClick={prevStep}>
          ← Back
        </button>
        <button className={styles.continueButton} onClick={handleContinue}>
          Continue →
        </button>
      </div>
    </div>
  );
};
