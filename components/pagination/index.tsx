import React, { useState } from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'
import { FaAngleRight, FaAngleLeft, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

type jumperType = 'prev' | 'next' | 'jump-prev' | 'jump-next'

let paginationKeyId = 0;
function uniqueId() {
  return (paginationKeyId++).toString();
}

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
  const pagePerJump = 5
  const [active, setActive] = useState(activeIndex)
  const handlePageChange = (i: number) => setActive(i)
  const handlePreOrNextChange = (type: string) => {
    if (type === 'prev') {
      active > 1 && setActive(active - 1)
    } else if (type === 'next') {
      active < totalPage && setActive(active + 1)
    } else if (type === 'jump-prev') {
      active - pagePerJump > 1 && setActive(active - pagePerJump)
    } else {
      active + pagePerJump < totalPage && setActive(active + pagePerJump)
    }
  }
  const renderPagination = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('pagination') || `${prefix}-pagination`
    const createJumperIcon = (type: jumperType): any => {
      if (type === 'prev') return <FaAngleLeft />
      else if (type === 'next') return <FaAngleRight />
      else if (type === 'jump-prev' || 'jump-next') {
        return (
          <div className={`${prefixCls}-item-container`}>
            <i className={`${prefixCls}-item-link-icon`}>
              {type === 'jump-prev' ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
            </i>
            <i className={`${prefixCls}-item-ellipsis`}>•••</i>
          </div>
        )
      }
    }
    const createJumperItem = (type: jumperType) => {
      const isDisabled =
        (type === 'prev' && active === 1) ||
        (type === 'jump-prev' && active < pagePerJump) ||
        (type === 'next' && active === totalPage) ||
        (type === 'jump-next' && active + pagePerJump > totalPage)
      return (
        <li
          key={uniqueId()}
          className={cls({
            [`${prefixCls}-disabled`]: isDisabled,
            [`${prefixCls}-${type}`]: true
          })}
          onClick={(e: React.MouseEvent<any>) => {
            handlePreOrNextChange(type)
          }}
        >
          <a className={`${prefixCls}-item-link`}>
            {createJumperIcon(type)}
          </a>
        </li>
      )
    }
    const createItem = (active: number, i: number) => {
      return (
        <li
          key={uniqueId()}
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
    const renderListItems = (totalPage: number) => {
      let Items = []
      Items.push(createJumperItem('prev'))
      Items.push(createItem(active, 1))
      if (active >= 5 && totalPage > 10) {
        Items.push(createJumperItem('jump-prev'))
      }
      for (let i = 2; i < totalPage; i++) {
        // show Ellipsis or all pageNum
        if (totalPage > 10) {
          // eg: [1,2,3,4,5 ..., 11]
          if (active < 5) {
            if (i <= 5) {
              Items.push(createItem(active, i))
            }
          } else if (active >= 5 && active + 4 < totalPage) {
            //[1, ...5, 6, 7..., 11]
            if ([active - 1, active, active + 1].indexOf(i) > -1) {
              Items.push(createItem(active, i))
            }
          } else {
            // [1,...7,8, 9, 10, 11]
            if (i + 4 >= totalPage) {
              Items.push(createItem(active, i))
            }
          }
        } else {
          Items.push(createItem(active, i))
        }
      }
      if (totalPage > 10 && totalPage > active + 4) {
        Items.push(createJumperItem('jump-next'))
      }
      Items.push(createItem(active, totalPage))
      Items.push(createJumperItem('next'))
      return Items
    }
    return (
      <ul className={prefixCls} {...attr}>
        {renderListItems(totalPage)}
      </ul>
    )
  }

  return <ConfigConsumer>{renderPagination}</ConfigConsumer>
}

export default Pagination
