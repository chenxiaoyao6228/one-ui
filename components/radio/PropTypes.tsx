import * as React from 'react'

export interface Props {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  onChange?: (e: any) => void
  value?: any
  disabled?: boolean;
  name: string;
  checked?: boolean;
}


export interface GroupProps {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  onChange?: (e: any) => void
  value?: any
}