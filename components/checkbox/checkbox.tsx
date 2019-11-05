import React, { Component } from 'react'
import { PropsTypes } from './PropTypes'
import cls from 'classnames'
import './styles/index.less'

class Checkbox extends Component<PropsTypes, any> {
  static defaultProps = {
    prefix: 'one-checkbox',
    disabled: false
  }
  static getDerivedStateFromProps(props: PropsTypes, state: any) {
    if (props.checked !== state.prevChecked) {
      return {
        checked: props.checked,
        prevChecked: props.checked
      }
    }
    return null
  }
  state = {
    checked: false,
    value: this.props.value
  }
  toggleChecked = (e: any) => {
    const { onChange } = this.props
    this.setState({ checked: !this.state.checked })
    onChange && onChange(e)
  }
  render() {
    const { prefix, disabled, children, indeterminate } = this.props
    const { checked, value } = this.state
    return (
      <label className={cls(prefix, { 'is-disabled': disabled }, { 'is-indeterminate': indeterminate })}>
        <span className={`${prefix}__container`}>
          <input
            type='checkbox'
            className={`${prefix}__input`}
            disabled={disabled}
            checked={checked || false}
            value={value || ''}
            onChange={e => {
              this.toggleChecked(e)
            }}
          />
          <span className={cls(`${prefix}__inner`, { 'is-checked': checked })} />
        </span>
        <span className='one-checkbox__content'>{children}</span>
      </label>
    )
  }
}
export default Checkbox
