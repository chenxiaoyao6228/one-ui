import * as React from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const Pagination: React.FC<PropsType> = ({
  children,
  className,
  style,
  ...attr
}) => {
  const renderTemplate = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('Template')
    const classes = cls(prefixCls, className)
    return (
      <div className={classes} {...attr}>
        template
      </div>
    )
  }

  return <ConfigConsumer>{renderTemplate}</ConfigConsumer>
}

export default Pagination
