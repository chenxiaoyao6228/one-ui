import React, { Component, ReactElement, Children, cloneElement } from 'react';
import { Props } from './PropsType';
import BreadcrumbItem from './breadcrumbItem';
import './style/index.less';
// import { AppContextInterface, withAppContext } from "../config-provider";

export default class Breadcrumb extends Component<Props, {}> {
  static defaultProps = {
    prefix: 'one-breadcrumb',
    seperator: '/',
  };
  static Item: typeof BreadcrumbItem;

  render() {
    const { prefix, children, seperator } = this.props;
    const items = Children.map(children, (element, index) => {
      return cloneElement(element as ReactElement<any>, {
        seperator,
        key: index,
      });
    });

    return <div className={`${prefix}`}>{items}</div>;
  }
}
