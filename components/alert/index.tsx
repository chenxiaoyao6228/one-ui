import * as React from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const Alert: React.FC<PropsType> = ({
  prefix: customizePrefixCls,
  className,
  style,
  children,
  type = '',
  message = '',
  ...attr
}) => {
  const renderAlert = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('alert', customizePrefixCls)
    const classes = cls(
      prefixCls,
      `${prefixCls}-${type}`,
      className)
    return (
      <div className={classes} {...attr}>
        {message}
      </div>
    )
  }

  return <ConfigConsumer>{renderAlert}</ConfigConsumer>
}

export default Alert
