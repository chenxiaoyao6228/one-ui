import React, {
  useState, useEffect
} from 'react'
import { GroupProps } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const RadioGroup: React.FC<GroupProps> = ({
  prefix: customizePrefixCls,
  children,
  className,
  style,
  onChange,
  value,
  ...attr
}) => {
  const handleChange = (e: any) => {
    onChange && onChange(e)
  }
  const renderRadioGroup = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('radio-group', customizePrefixCls)
    const classes = cls(prefixCls, className)
    return (
      <div
        className={classes}
        {...attr}
      >
        {
          React.Children.map(children, (child: React.ReactElement) => {
            return React.cloneElement(child, {
              checked: value,
              onChange: handleChange
            })
          })
        }
      </div>
    )
  }

  return <ConfigConsumer>{renderRadioGroup}</ConfigConsumer>
}

export default RadioGroup