import * as React from 'react'
import { Props } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import { SwitchLoadingIcon } from '../icon'
import cls from 'classnames'
import './styles/index.less'

const Switch: React.FC<Props> = ({
  prefix: customizePrefixCls,
  children,
  className,
  style,
  checked,
  disabled,
  onChange,
  loading,
  size,
  ...attr
}) => {
  const handleChange = () => {
    onChange && onChange()
  }
  const renderSwitch = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('switch', customizePrefixCls)
    const switchContent = loading ? (
      <div className={cls(`${prefixCls}-loading-icon`)}>
        <SwitchLoadingIcon />
      </div>
    ) : (
        <span className={cls(`${prefixCls}-inner`)}>
          {/* {checked ? checkedChildren : unCheckedChildren} */}
        </span>
      )
    return (
      <button
        className={cls(prefixCls, className, {
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-loading`]: loading,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-${size}`]: !!size
        })}
        {...attr}
        onClick={disabled || loading ? undefined : handleChange}
        style={style}
      >
        {switchContent}
      </button>
    )
  }

  return <ConfigConsumer>{renderSwitch}</ConfigConsumer>
}

export default Switch
