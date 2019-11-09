import React, { useState, useEffect } from 'react'
import { Props } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

const BackTop: React.FC<Props> = ({
  onClick,
  visibilityHeight,
  children,
  className,
  ...attr
}) => {
  const [scrollTop, setScrollTop] = useState(0)

  const scrollToTop = () => {
    const st = document.documentElement.scrollTop || document.body.scrollTop;
    if (st > 0) {
      window.requestAnimationFrame(scrollToTop);
      document.body.scrollTop = st - st / 8;
      document.documentElement.scrollTop = st - st / 8;
    }
  };

  const handleScroll = () => {
    const st = document.documentElement.scrollTop || document.body.scrollTop
    setScrollTop(st)
  }
  const backTop = (e: React.MouseEvent) => {
    onClick && onClick(e)
    window.requestAnimationFrame(scrollToTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const renderBackTop = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('backtop')
    const classes = cls(
      prefixCls,
      { [`${prefixCls}-show`]: scrollTop > (visibilityHeight ? visibilityHeight : 500) },
      className
    )
    return (
      <div
        className={classes}
        onClick={backTop}
        {...attr}
      >
        {children}
      </div>
    )
  }
  return <ConfigConsumer>{renderBackTop}</ConfigConsumer>
}
export default BackTop
