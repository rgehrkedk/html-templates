export type TagType = 'industry' | 'style';

export interface TagProps {
  type: TagType;
  children: React.ReactNode;
  className?: string;
}
