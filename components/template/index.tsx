import * as React from 'react'
import { Props } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const Switch: React.FC<Props> = ({
  prefix: customizePrefixCls,
  children,
  className,
  style,
  ...attr
}) => {
  const renderSwitch = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('switch', customizePrefixCls)
    const classes = cls(prefixCls, className)
    return (
      <div className={classes} {...attr}>
        template
      </div>
    )
  }

  return <ConfigConsumer>{renderSwitch}</ConfigConsumer>
}

export default Switch
