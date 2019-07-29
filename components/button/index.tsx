import React from 'react';
import './style/index.less';

interface Props {
  prefix?: string;
}

export default class Btn extends React.Component<Props, {}> {
  render() {
    return <button className="one-btn">button</button>;
  }
}
