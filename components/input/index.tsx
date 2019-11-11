import * as React from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const Input: React.FC<PropsType> = ({
  prefix: customizePrefixCls,
  children,
  className,
  onChange,
  type,
  disabled,
  readonly,
  placeholder,
  addonBefore,
  addonAfter,
  ...attr
}) => {
  const OnChange = (e: any) => {
    onChange && onChange(e)
  }
  const renderInput = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('input', customizePrefixCls)
    const inputEle = (
      <input
        type={type}
        disabled={disabled}
        readOnly={readonly}
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled
        })}
        placeholder={placeholder}
        onChange={onChange}
        {...attr}
      />
    );

    if (addonBefore || addonAfter) {
      return (
        <span
          className={cls(
            `${prefixCls}-group`,
            { [`${prefixCls}-group-addon-before`]: !!addonBefore },
            { [`${prefixCls}-group-addon-after`]: !!addonAfter },
            { [`${prefixCls}-group-addon-all`]: !!addonAfter && !!addonBefore }
          )}
        >
          {addonBefore ? (
            <span className={`${prefixCls}-group-addon`}>{addonBefore}</span>
          ) : (
              undefined
            )}
          {inputEle}
          {addonAfter ? (
            <span className={`${prefixCls}-group-addon`}>{addonAfter}</span>
          ) : (
              undefined
            )}
        </span>
      );
    }
    return inputEle;
  }

  return <ConfigConsumer>{renderInput}</ConfigConsumer>
}

export default Input
