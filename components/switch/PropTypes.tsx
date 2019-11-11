import * as React from 'react'

export interface Props {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  checked?: boolean
  disabled?: boolean;
  onChange?: () => void
  loading?: boolean;
  size?: 'default' | 'large' | 'small'
}
