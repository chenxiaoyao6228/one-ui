import * as React from 'react'

export interface PropsType {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  current?: string
  pageSize?: number
  activeIndex?: number
  total: number
}
