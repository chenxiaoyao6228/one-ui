import * as React from 'react'

export interface PropsType {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  message: string | React.ReactNode
  type: 'success' | 'error' | 'info' | 'warning'
}
