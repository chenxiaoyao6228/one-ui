import { MouseEvent, ReactNode } from 'react';

export interface Props {
  prefix?: string;
  params?: object;
  seperator?: string | ReactNode;
}

export interface ItemProps {
  prefix?: string;
  seperator?: string;
  href?: string;
  onClick?: (e: MouseEvent) => void;
}
