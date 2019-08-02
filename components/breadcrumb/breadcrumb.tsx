import React, { Component, cloneElement, ReactElement } from 'react';
import { Props } from './PropsType';
import './style/index.less';

export default class Breadcrumb extends Component<Props, {}> {
  static defaultProps = {
    prefix: 'one-breadcrumb',
    seperator: '/',
  };
  static Item: any;

  render() {
    const { prefix, children, seperator } = this.props;

    const items = React.Children.map(children, (element, index) => {
      return cloneElement(element as ReactElement<any>, {
        seperator,
        key: index,
      });
    });

    return <div className={`${prefix}`}>{items}</div>;
  }
}
