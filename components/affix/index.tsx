import React, { Component, createRef } from 'react';
import { PropsType, StateProps } from './PropTypes';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import cls from 'classnames';
import './styles/index.less';

export default class Affix extends Component<PropsType, StateProps> {
  static defaultProps = {
    offsetTop: 0,
  };

  offsetTop: number;
  private container = createRef<HTMLDivElement>();
  constructor(props: PropsType) {
    super(props);
    this.state = {
      fixed: false,
    };
  }

  handleScroll = () => {
    const { offsetTop, callback } = this.props;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= this.offsetTop - offsetTop) {
      this.setState({ fixed: true });
      callback && callback(this.state.fixed);
    } else {
      this.setState({ fixed: false });
    }
  }
  componentDidMount() {
    const node = this.container.current;
    if (node) {
      this.offsetTop = node.getBoundingClientRect().top;
    }
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  renderAffix = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('affix');
    const { fixed } = this.state;
    const { className, style, children, offsetTop, ...attr } = this.props;
    const classes = cls(prefixCls, className, {
      [`${prefixCls}-fixed`]: fixed,
    });
    const styles = { ...style, top: offsetTop };
    return (
      <div className={classes} style={styles} {...attr} ref={this.container}>
        {children}
      </div>
    );
  }
  render() {
    return <ConfigConsumer>{this.renderAffix}</ConfigConsumer>;
  }
}
