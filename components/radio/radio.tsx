import React, {
  useState, useEffect
} from 'react'
import { Props } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const Radio: React.FC<Props> = ({
  prefix: customizePrefixCls,
  children,
  className,
  style,
  value,
  checked,
  name,
  onChange,
  disabled,
  ...attr
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    onChange && onChange(e)
  };
  const renderRadio = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('radio')
    return (
      <label
        className={`${prefixCls}-wrapper`}
        {...attr}
      >
        <span
          className={cls(
            prefixCls,
            {
              [`${prefixCls}-checked`]: checked === value,
              [`${prefixCls}-disabled`]: disabled,
            },
            className,
          )}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked === value}
            className={cls(`${prefixCls}-input`)}
            onChange={handleChange}
            disabled={disabled}
          />
          <span className={cls(`${prefixCls}-inner`)} ></span>
        </span>
        <span>{children}</span>
      </label >
    )
  }

  return <ConfigConsumer>{renderRadio}</ConfigConsumer>
}

export default Radio;