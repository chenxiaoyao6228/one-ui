import * as React from 'react';
export interface PropsType {
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  count?: number;
  overflowCount?: number;
  showZero?: boolean;
  offset?: number[];
  dot?: boolean;
  onClick?: (e: any) => void;
}
