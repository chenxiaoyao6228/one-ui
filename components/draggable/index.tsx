/* tslint:disable */
import React from 'react';
import './style/index.less';
import { Props, dragEventHandler } from './PropsTypes';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import classnames from 'classnames'


const Draggable: React.FC<Props> = ({
  children,
  onStart,
  onDrag,
  onEnd,
  className,
  ...attr
}) => {
  // const [startX, setStartX] = useState(0)
  // const [startY, setStartY] = useState(0)
  // const [offsetX, setOffsetX] = useState(0)
  // const [offsetY, setOffsetY] = useState(0)
  const renderDraggable = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('draggable');
    const classes = classnames(
      prefixCls
    )
    const handleDragStart: dragEventHandler = (e): void => {
      // console.log('dragging start');
      onStart(e)
    }
    const handleDrag: dragEventHandler = (e): void => {
      // console.log('dragging');
      onDrag(e)
    }
    const handleDragEnd: dragEventHandler = (e): void => {
      // console.log('dragging end');
      onEnd(e)
    }
    return (
      <div
        className={classes}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        {...attr}
      > {children}</div >
    )
  }
  return (
    <ConfigConsumer>{renderDraggable}</ConfigConsumer>
  )
}

export default Draggable