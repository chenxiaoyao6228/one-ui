import React, { Fragment, useState, useRef } from 'react';
import { Props } from './PropsTypes';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import classnames from 'classnames'
import { noop, int, canDragX, canDragY, matchSelector } from './utils'
import './styles/index.less';

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
  const ref = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [dragged, setDragged] = useState(false)
  const [pos, setPos] = useState({
    originX: 0, originY: 0,
    totalMoveX: 0, totalMoveY: 0,
    mouseStartX: 0, mouseStartY: 0,
    mouseMoveX: 0, mouseMoveY: 0
  })
  const createUIEvent = () => {
    return {
      deltaX: pos.mouseMoveX,
      deltaY: pos.mouseMoveY
    }
  }
  const handleMouseDown = (e: any): void => {
    e.preventDefault()
    // handle, cancel area will not trigger drag event
    if ((handle && !matchSelector(e.target as Element, handle)) ||
      (cancel && matchSelector(e.target as Element, cancel))
    ) return
    const mouseStartX = int(e.pageX)
    const mouseStartY = int(e.pageY)
    if (!dragged) {
      setPos({
        ...pos,
        originX: mouseStartX,
        originY: mouseStartY,
      });
    }
    setPos({
      ...pos,
      mouseStartX: mouseStartX,
      mouseStartY: mouseStartY
    })
    onStart && onStart(e, createUIEvent())
    setDragging(true)
  }
  const handleMouseMove = (e: any) => {
    e.preventDefault()
    if (!dragging) return
    const mouseMoveX = int(e.pageX) - pos.mouseStartX
    const mouseMoveY = int(e.pageY) - pos.mouseStartY
    setPos({
      ...pos,
      mouseMoveX: mouseMoveX,
      mouseMoveY: mouseMoveY
    });
    onDrag && onDrag(e, createUIEvent())
  }
  const handleMouseUpOrOut = (e: any): void => {
    e.preventDefault()
    setDragging(false)
    setDragged(true)
    setPos({
      ...pos,
      // accumulate current mousemove, since translate start from 0
      totalMoveX: pos.totalMoveX + pos.mouseMoveX,
      totalMoveY: pos.totalMoveY + pos.mouseMoveY,
      mouseMoveX: 0, // reset current mousemove
      mouseMoveY: 0
    })
    onStop && onStop(e, createUIEvent())
  }

  const renderDraggable = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('draggable');
    // use last totalMoveX/Y as base case during each mousedown-mouseup period
    // since translate will not memorize your total move
    const translateX = canDragX(axis) ? pos.totalMoveX + pos.mouseMoveX : 0
    const translateY = canDragY(axis) ? pos.totalMoveY + pos.mouseMoveY : 0
    const styles = {
      transform: `translate(${translateX}px, ${translateY}px)`,
      zIndex: (dragging && !isNaN(zIndex)) ? zIndex : null,
      position: dragging ? 'relative' : null
    };
    // make sure only accept one child
    React.Children.only(children)
    const newChildren = React.Children.map(children, (child: any) => {
      // extend pros for child
      return React.cloneElement(child, {
        className: classnames(prefixCls, child.props.className),
        style: { ...child.props.style, ...styles },
        ref: ref,
        // attach mouseDown event on the element
        // mousemove/ out / up events will be attached to the mask
        onMouseDown: handleMouseDown,
        ...attr
      })
    })
    return (
      <Fragment>
        {newChildren}
        {dragging ?
          <div
            className={`${prefixCls}-mask`}
            onMouseUp={handleMouseUpOrOut}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseUpOrOut}
          ></div> : ''
        }
      </Fragment >
    )
  }
  return (
    <ConfigConsumer>{renderDraggable}</ConfigConsumer>
  )
}

export default Draggable