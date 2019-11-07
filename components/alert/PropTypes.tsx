import * as React from 'react'

export interface PropsType {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  message: string | React.ReactNode
  description?: string | React.ReactNode
  type: 'success' | 'error' | 'info' | 'warning'
  closable?: boolean
  onClose?: (e: React.MouseEvent) => void
  showIcon?: boolean
  // callback after close animation
  // afterClose: () => void
}
