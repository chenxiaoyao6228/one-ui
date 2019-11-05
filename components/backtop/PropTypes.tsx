import * as React from 'react'
export interface Props {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  visibilityHeight?: number
  onClick?: (e: React.MouseEvent) => void
}

export interface State {
  scrollTop: number
}
