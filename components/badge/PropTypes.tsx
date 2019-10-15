import * as React from 'react';
export interface Props {
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  count?: number;
  overflowCount?: number;
  showZero?: boolean;
  offset?: number[];
  dot?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
