import React from 'react';
import { Props } from './PropTypes';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import cls from 'classnames';
import './styles/index.less';

const Badge: React.FC<Props> = ({
  className,
  children,
  count,
  style,
  dot,
  onClick,
  overflowCount = 99,
  showZero = false,
}) => {
  const renderBadge = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('badge');
    const classes = cls(`${prefixCls}-inner`, { [`${prefixCls}-dot`]: dot }, className);
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
  return <ConfigConsumer>{renderBadge}</ConfigConsumer>;
}

export default Badge