import React, { Component } from 'react';
import { ItemProps } from './PropsType';
import './style/index.less';

export default class BreadcrumbItem extends Component<ItemProps, {}> {
  static defaultProps = {
    prefix: 'one-breadcrumb-item',
    seperator: '/',
  };
  render() {
    const { prefix, seperator, children } = this.props;
    return (
      <span className={`${prefix}`}>
        <span className={`${prefix}-link`}>{children}</span>
        <span className={`${prefix}-seperator`}>{seperator}</span>
      </span>
    );
  }
}
