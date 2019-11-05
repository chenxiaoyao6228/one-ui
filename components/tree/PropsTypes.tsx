import * as React from 'react'

export interface Props {
  prefix?: string
  className?: string
  style?: React.CSSProperties
  data: TreeData
}

interface Collapse {
  (key: string): void
}
export interface NodeProps {
  prefix?: string
  className?: string
  style?: React.CSSProperties
  data: TreeData
  onCollapse?: Collapse
  onCheck?: Collapse
}

export interface TreeData {
  name: string
  key: string
  type: string
  collapsed: boolean
  children?: TreeData[]
  parent?: TreeData
  checked?: boolean
  loading?: boolean
}

export interface KeyNodeMap {
  // 属性名任意，值是一个TreeData类型
  [key: string]: TreeData
}
