import React, { Component } from 'react';
import { Props } from './PropsTypes';
import cls from 'classnames';
import './style/index.less';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';


const Button: React.FC<Props> = function ({
  type, size, disabled, block, inverted,
  children, onClick, ...attr
}) {
  const renderButton = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('button');
    const classes = cls(
      // className,
      prefixCls, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-${type}-inverted`]: inverted,
    });
    return (
      <Button className={classes} onClick={onClick} {...attr} >
        {children}
      </Button>
    );
  }
  return <ConfigConsumer>{renderButton}</ConfigConsumer>;

}
export default Button