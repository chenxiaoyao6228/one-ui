import React, { Component } from 'react';
import { Props } from './PropsTyps';
// import cls from 'classnames';
import './style/index.less';

export default class Btn extends Component<Props, {}> {
  static defaultProps = {};

  render() {
    return <button>button</button>;
  }
}
