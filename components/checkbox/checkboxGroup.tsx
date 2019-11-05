import React, { Component } from 'react'
import { GroupPropsTypes } from './PropTypes'
import Checkbox from './checkbox'
import './styles/index.less'

export default class CheckboxGroup extends Component<GroupPropsTypes, any> {
  static defaulProps = {
    prefix: 'one-checkbox-group'
  }
  state = {
    options: this.props.options,
    checkedValue: this.props.defaultValue || []
  }
  onCheckChange = (e: any) => {
    const { onChange } = this.props
    let { checkedValue } = this.state
    const targetValue = e.target.value
    const index = checkedValue.indexOf(targetValue)
    if (index > -1) {
      checkedValue.splice(index, 1)
    } else {
      checkedValue.push(targetValue)
    }
    onChange && onChange(checkedValue)
  }
  render() {
    const { options } = this.state
    const { prefix, defaultValue, disabled, value } = this.props
    const Checkboxes = options.map(option => {
      const val = typeof option === 'object' ? option.value : option
      const label = typeof option === 'object' ? option.label : option
      const checked = (defaultValue && defaultValue.indexOf(val) > -1) || (value && value.indexOf(val) > -1)
      return (
        <Checkbox
          key={label.toString()}
          value={val}
          checked={checked}
          disabled={disabled}
          onChange={e => this.onCheckChange(e)}
        >
          {label}
        </Checkbox>
      )
    })
    return <div className={`${prefix}`}>{Checkboxes}</div>
  }
}
