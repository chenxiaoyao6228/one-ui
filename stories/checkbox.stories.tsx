import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox, CheckboxGroup } from '../components/checkbox';
import './styles/checkbox.less';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class App extends Component<any, any> {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = (checkedList: Array<string>) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e: any) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

storiesOf('Checkbox', module).add('checkbox',
  () => {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];
    return (
      <div className="demo">
        <h2>基本用法</h2>
        <Checkbox checked value="me">选我</Checkbox>
        <h2>禁用</h2>
        <Checkbox disabled value="notme">禁止选我</Checkbox >
        <h2>checkbox组</h2>
        <CheckboxGroup options={plainOptions} />
        <h3>选项options为对象</h3>
        <CheckboxGroup options={options} />
        <h3>默认值</h3>
        <CheckboxGroup options={options} defaultValue={['Apple', 'Pear']} />
        <h3>默认值中带有disabled</h3>
        <CheckboxGroup options={optionsWithDisabled} disabled />
        <h3>全选</h3>
        <App />
      </div >
    );
  },
);
