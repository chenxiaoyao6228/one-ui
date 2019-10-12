import * as React from 'react';
export interface PropsType {
  // prefix?: string;
  offsetTop?: number;
  style?: React.CSSProperties;
  className?: string;
  callback?: (affixed?: boolean) => void;
}
export interface StateProps {
  fixed: boolean;
}
