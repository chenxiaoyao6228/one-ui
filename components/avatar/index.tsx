import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import React from 'react';
import { Props } from './PropTypes';
import { OneUserOutline } from '../icon';
import cls from 'classnames';
import './styles/index.less';

const Avatar: React.FC<Props> = ({
  prefix, size, shape, className, style, src, children
}) => {
  const renderAvatar = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('avatar');
    if (!prefix) prefix = prefixCls
    const sizeStyle: React.CSSProperties =
      typeof size === 'number'
        ? {
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
          fontSize: size / 2,
        }
        : {};
    let hasImg = !!src;
    let hasText = !!children;
    if (!hasImg && !hasText) {
      children = <OneUserOutline />;
    } else if (hasImg) {
      children = <img src={src} className={`${prefix}-image`} />;
    } else {
      children = <span className={`${prefix}-string`}>{children}</span>;
    }
    return (
      <span
        className={cls(
          `${prefix}`,
          {
            'is-sm': size === 'sm',
            'is-lg': size === 'lg',
            'is-square': shape === 'square',
          },
          className,
        )}
        style={{ ...sizeStyle, ...style }}
      >
        {children}
      </span>
    );
  }
  return <ConfigConsumer>{renderAvatar}</ConfigConsumer>;
}

export default Avatar