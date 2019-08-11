import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox, CheckboxGroup } from '../components/checkbox';
import './styles/checkbox.less';
import { Row, Col } from '../components/grid';

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
      <div className='demo'>
        <Row>
          <Col span={12}>
            <h2>Basic</h2>
            <Checkbox checked value='chooseme'>Choose me</Checkbox>
          </Col>
          <Col span={12}>
            <h2>Disabled</h2>
            <Checkbox disabled value='not allowed'>Not allowed</Checkbox >
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h2>Checkbox Group</h2>
            <CheckboxGroup options={plainOptions} />
          </Col>
          <Col span={12}>

            <h2>Options As Object</h2>
            <CheckboxGroup options={options} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h2>Default Values</h2>
            <CheckboxGroup options={options} defaultValue={['Apple', 'Pear']} />
          </Col>
          <Col span={12}>
            <h2>Options With Disabled</h2>
            <CheckboxGroup options={optionsWithDisabled} disabled />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h2>Select All</h2>
            <App />
          </Col>
          <Col span={12}>
            <h2>Click Event</h2>
            <CheckboxGroup options={plainOptions} onChange={(v) => alert(JSON.stringify(v))} />
          </Col>
        </Row>
      </div >
    );
  },
);
