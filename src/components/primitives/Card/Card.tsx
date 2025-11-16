import { CardProps } from './Card.types';
import styles from './Card.module.css';

export const Card = ({ children, className = '', onClick }: CardProps) => {
  const classNames = [
    styles.card,
    className
  ].filter(Boolean).join(' ');

  return (
    <article className={classNames} onClick={onClick}>
      {children}
    </article>
  );
};
