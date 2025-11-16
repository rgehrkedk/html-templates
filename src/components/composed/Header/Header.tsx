import { Button } from '../../primitives';
import { HeaderProps } from './Header.types';
import styles from './Header.module.css';

export const Header = ({ onThemeToggle, isDarkMode }: HeaderProps) => {
  const navigateToBuilder = () => {
    window.location.hash = 'builder';
  };

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const isBuilder = window.location.hash === '#builder';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>HTML Templates til e-Boks</h1>
          <p className={styles.subtitle}>
            Responsive HTML/CSS skabeloner til digitale beskeder
          </p>
        </div>
        <div className={styles.themeToggle}>
          {!isBuilder && (
            <Button variant="primary" onClick={navigateToBuilder}>
              🛠️ Template Builder
            </Button>
          )}
          {isBuilder && (
            <Button variant="secondary" onClick={navigateToHome}>
              ← Back to Gallery
            </Button>
          )}
          <Button variant="secondary" onClick={onThemeToggle}>
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>
      </div>
    </header>
  );
};
