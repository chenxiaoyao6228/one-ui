import React, { useState } from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const Pagination: React.FC<PropsType> = ({
  prefix,
  className,
  children,
  total,
  pageSize = 10,
  current = 1,
  activeIndex = 1,
  ...attr
}) => {
  const totalPage = Math.ceil(total / pageSize)
  const [active, setActive] = useState(activeIndex)
  const handlePageChange = (i: number) => setActive(i)
  const handlePreOrNextChange = (type: string) => {
    if (type === 'prev') {
      active > 1 && setActive(active - 1)
    } else if (type === 'next') {
      active < totalPage && setActive(active + 1)
    }
  }
  const renderPagination = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('pagination') || `${prefix}-pagination`
    const classes = cls(prefixCls, className, {})
    const getPrevOrNextItem = (type: string, key: number) => {
      const isDisabled = (type === 'prev' && active === 1) || (type === 'next' && active === totalPage)
      return (
        <li
          key={type === 'prev' ? -1 : totalPage + 1}
          className={cls({
            [`${prefixCls}-disabled`]: isDisabled,
            [`${prefixCls}-prev`]: type === 'prev',
            [`${prefixCls}-next`]: type === 'next'
          })}
          onClick={(e: React.MouseEvent<any>) => {
            handlePreOrNextChange(type)
          }}
        >
          <a className={`${prefixCls}-item-link`}>{type === 'prev' ? <FaAngleLeft /> : <FaAngleRight />}</a>
        </li>
      )
    }
    const renderListItems = (totalPage: number) => {
      let Items = []
      Items.push(getPrevOrNextItem('prev', -1))
      for (let i = 1; i < totalPage + 1; i++) {
        Items.push(
          <li
            key={i}
            className={cls({
              [`${prefixCls}-item`]: true,
              [`${prefixCls}-item-active`]: active === i
            })}
            onClick={(e: React.MouseEvent<any>) => {
              handlePageChange(i)
            }}
          >
            <a className={`${prefixCls}-item-link`}>{i}</a>
          </li>
        )
      }
      Items.push(getPrevOrNextItem('next', totalPage + 1))
      return Items
    }
    return (
      <ul className={classes} {...attr}>
        {renderListItems(totalPage)}
      </ul>
    )
  }

  return <ConfigConsumer>{renderPagination}</ConfigConsumer>
}

export default Pagination
