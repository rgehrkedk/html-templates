import React from 'react';
import { BuilderProvider, useBuilder } from './BuilderContext';
import { StyleSelection } from './steps/StyleSelection';
import { ColorPalette } from './steps/ColorPalette';
import { SectionBuilder } from './steps/SectionBuilder';
import { PreviewExport } from './steps/PreviewExport';
import styles from './BuilderApp.module.css';

const BuilderContent: React.FC = () => {
  const { currentStep } = useBuilder();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StyleSelection />;
      case 2:
        return <ColorPalette />;
      case 3:
        return <SectionBuilder />;
      case 4:
        return <PreviewExport />;
      default:
        return <StyleSelection />;
    }
  };

  return (
    <div className={styles.builderApp}>
      <div className={styles.progressBar}>
        <div className={styles.progressSteps}>
          <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepLabel}>Style</div>
          </div>
          <div className={styles.progressLine} />
          <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepLabel}>Colors</div>
          </div>
          <div className={styles.progressLine} />
          <div className={`${styles.step} ${currentStep >= 3 ? styles.active : ''}`}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepLabel}>Sections</div>
          </div>
          <div className={styles.progressLine} />
          <div className={`${styles.step} ${currentStep >= 4 ? styles.active : ''}`}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepLabel}>Export</div>
          </div>
        </div>
      </div>

      <div className={styles.stepContent}>{renderStep()}</div>
    </div>
  );
};

export const BuilderApp: React.FC = () => {
  return (
    <BuilderProvider>
      <BuilderContent />
    </BuilderProvider>
  );
};
