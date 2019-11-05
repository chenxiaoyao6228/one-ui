import * as React from 'react'
import cls from 'classnames'
import './style/index.less'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'

export interface Props {
  prefix?: string
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent) => void
  size?: 'sm' | 'lg'
  type?: 'primary' | 'warning' | 'success' | 'info' | 'error'
  block?: boolean
  disabled?: boolean
  inverted?: boolean
}

const Button: React.FC<Props> = ({ type, size, disabled, block, inverted, className, children, onClick, ...attr }) => {
  const renderButton = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('button')
    const classes = cls(className, prefixCls, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-${type}-inverted`]: inverted
    })
    return (
      <button className={classes} onClick={onClick} {...attr}>
        {children}
      </button>
    )
  }
  return <ConfigConsumer>{renderButton}</ConfigConsumer>
}
export default Button
