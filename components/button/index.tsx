import React, { Component } from 'react';
import { Props } from './PropsTypes';
import cls from 'classnames';
import './style/index.less';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export default class Button extends Component<Props, {}> {
  static defaultProps = {};
  renderButton = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('button');
    const { children, type, size, disabled, block, inverted, onClick } = this.props;
    const classes = cls(prefixCls, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-${type}-inverted`]: inverted,
    });
    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
  render() {
    return <ConfigConsumer>{this.renderButton}</ConfigConsumer>;
  }
}
