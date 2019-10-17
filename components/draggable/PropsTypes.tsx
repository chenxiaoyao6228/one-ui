import React, { CSSProperties } from 'react';

export type dragEventHandler = (e: React.DragEvent<HTMLDivElement>) => void

export interface Props {
  prefix?: string;
  className?: string;
  style?: CSSProperties;
  onStart?: dragEventHandler
  onEnd?: dragEventHandler
  onDrag?: dragEventHandler
}