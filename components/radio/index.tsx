import * as React from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const Radio: React.FC<PropsType> = ({
  children,
  className,
  style,
  ...attr
}) => {
  const renderRadio = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('radio')
    const classes = cls(prefixCls, className)
    return (
      <div className={classes} {...attr}>
        radio
      </div>
    )
  }

  return <ConfigConsumer>{renderRadio}</ConfigConsumer>
}

export default Radio
