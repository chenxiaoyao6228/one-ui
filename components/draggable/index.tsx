import React, { useState } from 'react';

import './style/index.less';
import { Props } from './PropsTypes';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import classnames from 'classnames'

const noop = () => { }

function canDragY(axis: string) {
  return axis === 'both' ||
    axis === 'y';
}

function canDragX(axis: string) {
  return axis === 'both' ||
    axis === 'x';
}

const Draggable: React.FC<Props> = ({
  axis = 'both',
  handle = null,
  cancel = null,
  zIndex = null,
  onStart = noop,
  onDrag = noop,
  onStop = noop,
  className,
  style,
  children,
  ...attr
}) => {
  const [dragging, setDragging] = useState(false)
  const [pos, setPos] = useState({
    startX: 0, startY: 0,
    offsetX: 0, offsetY: 0,
    clientX: 0, clientY: 0
  })
  const createUIEvent = () => {
    return {
      top: pos.clientY,
      left: pos.clientX
    }
  }
  const handleMouseDown = (e: any): void => {
    e.preventDefault()
    setPos({
      ...pos,
      offsetX: e.clientX,
      offsetY: e.clientY,
      startX: parseInt(e.currentTarget.style.left, 10) || 0,
      startY: parseInt(e.currentTarget.style.top, 10) || 0
    });
    onStart && onStart(e, createUIEvent())
  }
  const handleMouseMove = (e: any) => {
    setPos({
      ...pos,
      clientX: pos.startX + (e.clientX - pos.offsetX),
      clientY: pos.startY + (e.clientY - pos.offsetY)
    })
    onDrag && onDrag(e, createUIEvent())
  }
  const handleMouseUp = (e: any): void => {
    e.preventDefault()
    if (!dragging) return
    setDragging(true)
    onStop && onStop(e, createUIEvent())
  }


  const renderDraggable = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('draggable');
    let styles = {
      top: canDragY(axis) ? pos.clientY : pos.startY,
      left: canDragX(axis) ? pos.clientX : pos.startX
    }
    const newChildren = React.Children.map(children, (c: any) => {
      console.log(c.style)
      return React.cloneElement(c, {
        className: classnames(prefixCls),
        style: styles,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        onMouseDown: handleMouseDown,
        ...attr
      })
    })
    // console.log(newChildren);
    return (newChildren)
  }
  return (
    <ConfigConsumer>{renderDraggable}</ConfigConsumer>
  )
}

export default Draggable