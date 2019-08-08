import { CSSProperties, MouseEvent } from 'react';

export interface Props {
  prefix?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent) => void;
  size?: 'sm' | 'lg';
  type?: 'primary' | 'warning' | 'success' | 'info' | 'error';
  block?: boolean;
  disabled?: boolean;
  inverted?: boolean;
}
