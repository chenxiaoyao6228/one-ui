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
  const [dragged, setDragged] = useState(false)
  const [pos, setPos] = useState({
    originX: 0, originY: 0,
    mouseStartX: 0, mouseStartY: 0,
    deltaX: 0, deltaY: 0
  })
  const createUIEvent = () => {
    return {
      deltaX: pos.deltaX,
      deltaY: pos.deltaY
    }
  }
  const handleMouseDown = (e: any): void => {
    e.preventDefault()
    const mouseStartX = parseInt(e.pageX, 10)
    const mouseStartY = parseInt(e.pageY, 10)
    if (!dragged) {
      setPos({
        ...pos,
        originX: mouseStartX,
        originY: mouseStartY,
        mouseStartX: mouseStartX,
        mouseStartY: mouseStartY
      });
    }
    onStart && onStart(e, createUIEvent())
    setDragging(true)
  }
  const handleMouseMove = (e: any) => {
    if (!dragging) return
    const mouseX = parseInt(e.pageX, 10)
    const mouseY = parseInt(e.pageY, 10)
    setPos({
      ...pos,
      deltaX: mouseX - pos.mouseStartX,
      deltaY: mouseY - pos.mouseStartY
    });
    onDrag && onDrag(e, createUIEvent())
  }
  const handleMouseUp = (e: any): void => {
    e.preventDefault()
    setDragging(false)
    setDragged(true)
    onStop && onStop(e, createUIEvent())
  }

  const renderDraggable = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('draggable');
    const styles = {
      transform: `translate(${pos.deltaX}px, ${pos.deltaY}px)`
    };
    const newChildren = React.Children.map(children, (child: any) => {
      // extend pros for child
      return React.cloneElement(child, {
        className: classnames(prefixCls, child.props.className),
        style: { ...child.props.style, ...styles },
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        onMouseDown: handleMouseDown,
        ...attr
      })
    })
    return (newChildren)
  }
  return (
    <ConfigConsumer>{renderDraggable}</ConfigConsumer>
  )
}

export default Draggable