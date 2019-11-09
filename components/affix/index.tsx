import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import React, { useState, useEffect, useRef } from 'react'
import { PropsType } from './PropTypes'
import cls from 'classnames'
import './styles/index.less'

const Affix: React.FC<PropsType> = ({
  prefix: customizePrefixCls,
  offsetTop = 0,
  callback,
  className,
  style,
  children,
  ...attr
}) => {
  const [fixed, setFixed] = useState(false)

  const container = useRef<HTMLDivElement>()

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop >= offsetTop - offsetTop) {
      setFixed(true)
      callback && callback(fixed)
    } else {
      setFixed(false)
    }
  }

  useEffect(() => {
    const node = container.current
    if (node) {
      offsetTop = node.getBoundingClientRect().top
    }
    window.addEventListener('scroll', handleScroll)

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const renderAffix = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('affix')
    const classes = cls(prefixCls, className, {
      [`${prefixCls}-fixed`]: fixed
    })
    const styles = { ...style, top: offsetTop }
    return (
      <div className={classes} style={styles} {...attr} ref={container}>
        {children}
      </div>
    )
  }
  return <ConfigConsumer>{renderAffix}</ConfigConsumer>
}

export default Affix
