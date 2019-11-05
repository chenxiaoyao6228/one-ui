import React, { Component } from 'react'
import { PropsType } from './PropTypes'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import './styles/index.less'

export default class Template extends Component<PropsType, {}> {
  static defaultProps = {}
  renderTemplate = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { children, className, style, ...attr } = this.props
    const prefixCls = getPrefixCls('Template')
    const classes = cls(prefixCls, className)
    return (
      <div className={classes} {...attr}>
        template
      </div>
    )
  }
  render() {
    return <ConfigConsumer>{this.renderTemplate}</ConfigConsumer>
  }
}
