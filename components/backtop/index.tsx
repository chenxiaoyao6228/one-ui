import React, { Component } from 'react';
import { PropsType, StateType } from './PropTypes';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import cls from 'classnames';
import './styles/index.less';

export default class BackTop extends Component<PropsType, StateType> {
  static defaultProps = {};
  state = {
    scrollTop: 0,
  };
  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({ scrollTop });
  }
  backTop = () => {
    document.documentElement.scrollTop = 0;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  renderBacktop = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { children, className, style, ...attr } = this.props;
    const prefixCls = getPrefixCls('backtop');
    const classes = cls(prefixCls, className);

    return (
      <div className={classes} {...attr} onClick={this.backTop}>
        {children}
      </div>
    );
  }
  render() {
    return <ConfigConsumer>{this.renderBacktop}</ConfigConsumer>;
  }
}
