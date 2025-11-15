import { Button } from '../../primitives';
import { HeaderProps } from './Header.types';
import styles from './Header.module.css';

export const Header = ({ onThemeToggle, isDarkMode }: HeaderProps) => {
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
          <Button variant="secondary" onClick={onThemeToggle}>
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>
      </div>
    </header>
  );
};
