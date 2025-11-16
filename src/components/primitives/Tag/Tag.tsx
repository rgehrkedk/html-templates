import { TagProps } from './Tag.types';
import styles from './Tag.module.css';

export const Tag = ({ type, children, className = '' }: TagProps) => {
  const classNames = [
    styles.tag,
    styles[type],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classNames}>
      {children}
    </span>
  );
};
