import React, { Component } from 'react';
import { PropsType } from './PropTypes';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import cls from 'classnames';
import './styles/index.less';

export default class Badge extends Component<PropsType, {}> {
  static defaultProps = {
    overflowCount: 99,
    showZero: false,
  };
  renderBadge = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      className,
      children,
      count,
      overflowCount,
      showZero,
      style,
      dot,
      onClick,
    } = this.props;
    const prefixCls = getPrefixCls('badge');
    const classes = cls(
      `${prefixCls}-inner`,
      { [`${prefixCls}-dot`]: dot },
      className,
    );
    return (
      <div className={`${prefixCls}`} onClick={onClick}>
        {count > 0 || (count === 0 && showZero) || dot ? (
          <span className={classes} style={style}>
            {count > overflowCount ? overflowCount + '+' : count}
          </span>
        ) : (
          ''
        )}
        {children}
      </div>
    );
  }
  render() {
    return <ConfigConsumer>{this.renderBadge}</ConfigConsumer>;
  }
}
