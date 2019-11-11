import React, { Component, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox, CheckboxGroup } from '../components/checkbox';
import { Radio, RadioGroup } from '../components/radio';
import { Row, Col } from '../components/grid';
import Input from '../components/input';
import Button from '../components/button'
import Switch from '../components/switch'
import useToggle from '../components/utils/hooks/useToggle';
import './styles/input.less';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];


const stories = storiesOf('Input', module)

// Checkbox
class CheckboxDemo extends Component<any, any> {
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

stories.add('Checkbox', () => {
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
          <CheckboxDemo />
        </Col>
        <Col span={12}>
          <h2>Click Event</h2>
          <CheckboxGroup options={plainOptions} onChange={(v) => alert(JSON.stringify(v))} />
        </Col>
      </Row>
    </div >
  );
});

stories.add('Input', () => {
  return (
    <div className="demo demo-input">
      <div style={{ width: 400 }}>
        <h2>Basic</h2>
        <Input
          placeholder="place your input here"
          onChange={(e: any) => console.log(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          style={{ margin: "10px 0" }}
        />
        <Input type="number" placeholder="number" />
        <Input
          placeholder="default"
          defaultValue="default"
          style={{ margin: "10px 0" }}
        />
        <Input readonly value="readonly" style={{ marginBottom: 10 }} />
        <Input disabled placeholder="readonly" />

        <h2>AddonBefore, AddonAfter</h2>
        <Input placeholder="" />
        <Input
          addonAfter={".com"}
          placeholder="website"
          style={{ margin: "10px 0" }}
        />
        <Input
          addonBefore={"https://"}
          addonAfter={".cn"}
          placeholder="www.chenxiaoyao"
        />
      </div>
    </div>
  )
})

stories.add('Radio', () => {
  const [basicChecked, setBasicChecked] = useState('pear')
  const handleBasicChange = (e: any) => {
    setBasicChecked(e.currentTarget.value)
  }

  const [checked, setChecked] = useState('pear')
  const [disabled, setDisabled] = useState(false)
  const toggleDisabled = (e: any) => {
    setDisabled(!disabled)
  }
  const handleChange = (e: any) => {
    setChecked(e.currentTarget.value)
  }
  return (
    <div className="demo">
      <h2>Basic</h2>
      <RadioGroup onChange={handleBasicChange} value={basicChecked}>
        <Radio value="apple" name="fruit">apple</Radio>
        <Radio value="pear" name="fruit">pear</Radio>
        <Radio value="orange" name="fruit">orange</Radio>
      </RadioGroup>
      <h2>Disabled</h2>
      <RadioGroup onChange={handleChange} value={checked} disabled={disabled}>
        <Radio value="apple" name="fruit">apple</Radio>
        <Radio value="pear" name="fruit">pear</Radio>
        <Radio value="orange" name="fruit">orange</Radio>
      </RadioGroup>
      <Button type="primary" style={{ marginTop: 20 }} onClick={toggleDisabled}>Toggle Disabled </Button>
    </div>
  )
})

stories.add('Switch', () => {
  const [basicChecked, toggleBasicChecked] = useToggle(false)

  const [value, toggle] = useToggle(false)
  const [disabled, toggleDisabled] = useToggle(false)

  const [loading, toggleLoading] = useToggle(true)
  const [value1, setValue1] = useToggle(true)
  return (
    <div className="demo">
      <h2>Basic</h2>
      <Switch checked={basicChecked} onChange={toggleBasicChecked}></Switch>
      <h2>Disabled</h2>
      <Switch checked={value} onChange={toggle} disabled={disabled}></Switch>
      <br></br>
      <Button onClick={toggleDisabled} type="primary" style={{ marginTop: 20 }}>Toggle Disabled</Button>
      <h2>Size</h2>
      <Switch checked={value1} onChange={setValue1} size="large" style={{ marginRight: 20 }}></Switch>
      <Switch checked={value1} onChange={setValue1} style={{ marginRight: 20 }}></Switch>
      <Switch checked={value1} onChange={setValue1} size="small"></Switch>
      <h2>Loading</h2>
      {/* <Switch loading={loading} size="large" checked style={{ margi nRight: 20 }}></Switch> */}
      <Switch loading={loading} checked style={{ marginRight: 20 }}></Switch>
      {/* <Switch loading={loading} size="small" checked ></Switch> */}
    </div>
  )
})