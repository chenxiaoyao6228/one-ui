import React, { CSSProperties } from 'react';

export type dragEventHandler = (e: React.DragEvent<HTMLDivElement>) => void

export interface Props {
  prefix?: string;
  axis?: 'both' | 'x' | 'y'
  handle?: string
  cancel?: string
  zIndex?: number
  onStart?: Function
  onDrag?: Function
  onStop?: Function
  className?: string;
  style?: CSSProperties;
}
