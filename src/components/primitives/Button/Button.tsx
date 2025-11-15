import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button = ({
  variant = 'primary',
  children,
  onClick,
  active = false,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
    active ? styles.active : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
