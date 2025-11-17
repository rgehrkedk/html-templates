import React, { useState, useMemo } from 'react';
import { useBuilder } from '../BuilderContext';
import { renderTemplate, generateFilename } from '../utils/templateRenderer';
import { downloadHTML, copyToClipboard } from '../utils/htmlExporter';
import { saveTemplate } from '../../utils/templateStorage';
import { SECTION_DEFINITIONS } from '../data/sections';
import styles from './PreviewExport.module.css';

export const PreviewExport: React.FC = () => {
  const { sections, colorPalette, selectedStyle, borderRadius, prevStep, reset } = useBuilder();
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const htmlContent = useMemo(() => {
    if (!selectedStyle) return '';
    return renderTemplate(sections, colorPalette, selectedStyle, borderRadius);
  }, [sections, colorPalette, selectedStyle, borderRadius]);

  const handleDownload = () => {
    if (!selectedStyle) return;
    const filename = generateFilename(selectedStyle);
    downloadHTML(htmlContent, filename);
  };

  const handleCopy = async () => {
    try {
      await copyToClipboard(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSaveToGallery = () => {
    if (!selectedStyle) return;

    // Generate title from sections
    const sectionTypes = sections.map(s => {
      const def = SECTION_DEFINITIONS.find(d => d.type === s.type);
      return def?.name || s.type;
    });
    const title = `Custom Template - ${selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1)}`;

    const template = {
      id: `builded-${Date.now()}`,
      title,
      description: `Generated template with ${sections.length} sections: ${sectionTypes.join(', ')}`,
      style: selectedStyle,
      sectionCount: sections.length,
      htmlContent,
      createdAt: new Date().toISOString(),
      colors: {
        brand: colorPalette.brand,
        accent: colorPalette.accent,
        neutral: colorPalette.neutral,
      },
    };

    saveTemplate(template);
    setSaved(true);

    // Show confirmation and navigate to home
    setTimeout(() => {
      if (confirm('Template saved to gallery! Go to gallery now?')) {
        window.location.hash = '';
      }
    }, 100);
  };

  const handleStartOver = () => {
    if (confirm('Are you sure? This will reset all your progress.')) {
      reset();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Template is Ready!</h1>
        <p className={styles.subtitle}>Download or copy the HTML below</p>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Style</div>
          <div className={styles.summaryValue}>
            {selectedStyle === 'classic' ? 'Classic' : 'Swiss'}
          </div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Sections</div>
          <div className={styles.summaryValue}>{sections.length}</div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Colors</div>
          <div className={styles.colorPreview}>
            <div
              className={styles.colorSwatch}
              style={{ background: colorPalette.brand }}
              title="Brand"
            />
            <div
              className={styles.colorSwatch}
              style={{ background: colorPalette.accent }}
              title="Accent"
            />
            <div
              className={styles.colorSwatch}
              style={{ background: colorPalette.neutral }}
              title="Neutral"
            />
          </div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Status</div>
          <div className={styles.statusBadge}>✓ Tagged as "builded"</div>
        </div>
      </div>

      <div className={styles.codeSection}>
        <div className={styles.codeHeader}>
          <h2 className={styles.codeTitle}>HTML Output</h2>
          <button
            className={copied ? styles.copiedButton : styles.copyButton}
            onClick={handleCopy}
          >
            {copied ? '✓ Copied!' : '📋 Copy to Clipboard'}
          </button>
        </div>
        <pre className={styles.codeBlock}>
          <code>{htmlContent}</code>
        </pre>
      </div>

      <div className={styles.actions}>
        <button className={styles.backButton} onClick={prevStep}>
          ← Back
        </button>
        <div className={styles.actionGroup}>
          <button className={styles.resetButton} onClick={handleStartOver}>
            Start Over
          </button>
          <button
            className={saved ? styles.savedButton : styles.saveButton}
            onClick={handleSaveToGallery}
            disabled={saved}
          >
            {saved ? '✓ Saved to Gallery' : '💾 Save to Gallery'}
          </button>
          <button className={styles.downloadButton} onClick={handleDownload}>
            ⬇ Download HTML
          </button>
        </div>
      </div>
    </div>
  );
};
