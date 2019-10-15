import React, { ReactElement, Children, cloneElement } from 'react';
import { Props } from './PropsType';
import BreadcrumbItem from './breadcrumbItem';
import './style/index.less';
// import { AppContextInterface, withAppContext } from "../config-provider";

type IBreadCrumb<P> = React.FC<P> & {
  Item: any
}

const Breadcrumb: IBreadCrumb<Props> = ({
  prefix = "one-breadcrumb",
  separator = "/",
  children
}) => {
  const items = Children.map(children, (element, index) => {
    return cloneElement(element as ReactElement<any>, {
      separator,
      key: index,
    });
  });
  return <div className={`${prefix}`}>{items}</div>;
}

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
