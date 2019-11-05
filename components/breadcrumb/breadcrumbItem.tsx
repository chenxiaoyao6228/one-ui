import React from 'react'
import { ItemProps } from './PropsType'
import './style/index.less'

const BreadcrumbItem: React.FC<ItemProps> = ({ prefix = 'one-breadcrumb-item', children, separator }) => {
  return (
    <span className={`${prefix}`}>
      <span className={`${prefix}-link`}>{children}</span>
      <span className={`${prefix}-separator`}>{separator}</span>
    </span>
  )
}
export default BreadcrumbItem
