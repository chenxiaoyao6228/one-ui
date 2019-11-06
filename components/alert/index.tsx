import React, {
  useState
} from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'
import { IoIosClose } from 'react-icons/io'

const Alert: React.FC<PropsType> = ({
  prefix: customizePrefixCls,
  className,
  style,
  children,
  type = '',
  message = '',
  closable = false,
  ...attr
}) => {
  const [show, setShow] = useState(true)
  const handleClose = (e: React.MouseEvent<Element>) => {
    e.preventDefault()
    setShow(false)
  }
  const renderAlert = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('alert', customizePrefixCls)
    const classes = cls(
      prefixCls,
      `${prefixCls}-${type}`,
      className)
    return (
      show && <div className={classes} {...attr}>
        {message}
        {closable && <i className={`${prefixCls}-close-icon`}>
          <IoIosClose onClick={handleClose} />
        </i>}
      </div>
    )
  }

  return <ConfigConsumer>{renderAlert}</ConfigConsumer>
}

export default Alert
