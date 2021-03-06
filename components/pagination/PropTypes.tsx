import * as React from 'react'

export interface PropsType {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  current?: number
  pageSize?: number
  activeIndex?: number
  total: number
  onChange?: (page: number, pageSize: number) => void
  showQuickJumper?: boolean
}
