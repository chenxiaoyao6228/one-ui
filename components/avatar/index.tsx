import React, { Component } from 'react';
import { AvatarPropsType } from './PropTypes';
import { OneUserOutline } from '../icon';
import cls from 'classnames';
import './styles/index.less';

export default class Avatar extends Component<AvatarPropsType, {}> {
  static defaultProps = {
    prefix: 'one-avatar',
  };
  render() {
    const { prefix, size, shape, className, style, src } = this.props;
    const sizeStyle: React.CSSProperties =
      typeof size === 'number'
        ? {
            width: `${size}px`,
            height: `${size}px`,
            lineHeight: `${size}px`,
            fontSize: size / 2,
          }
        : {};
    let children = this.props.children;
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
}
