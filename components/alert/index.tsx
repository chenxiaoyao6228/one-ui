import React, {
  useState
} from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'
import {
  IoIosClose,
} from 'react-icons/io'
import {
  AlertIconSuccess,
  AlertIconWarning,
  AlertIconInfo,
  AlertIconError
} from '../icon'



const Alert: React.FC<PropsType> = ({
  prefix: customizePrefixCls,
  className,
  style,
  children,
  type = '',
  message = '',
  closable = false,
  description,
  onClose,
  showIcon = false,
  // afterClose,
  ...attr
}) => {
  const [show, setShow] = useState(true)
  const handleClose = (e: React.MouseEvent<Element>) => {
    e.preventDefault()
    setShow(false)
    onClose && onClose(e)
  }
  const renderAlert = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('alert', customizePrefixCls)
    const classes = cls(
      prefixCls,
      `${prefixCls}-${type}`,
      {
        [`${prefixCls}-with-description`]: !!description,
      },
      className)
    return (
      <>
        {show && <div className={classes} {...attr}>
          {showIcon && <i className={`${prefixCls}-icon`}>
            {type === 'success' && <AlertIconSuccess />}
            {type === 'error' && <AlertIconError />}
            {type === 'warning' && <AlertIconWarning />}
            {type === 'info' && <AlertIconInfo />}
          </i>}
          {message && <div className={`${prefixCls}-message`}>
            {message}
          </div>}
          {description && <div className={`${prefixCls}-description`}>
            {description}
          </div>}
          {closable && <i className={`${prefixCls}-close-icon`}>
            <IoIosClose onClick={handleClose} />
          </i>}
        </div>}
      </>
    )
  }

  return <ConfigConsumer>{renderAlert}</ConfigConsumer>
}

export default Alert
