import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import './styles/common.less';

import Button from '../components/button';
import { Row, Col } from '../components/grid';


const stories = storiesOf('Common', module)

// Button
stories.add('Button', () => {
  return (
    <div className='demo demo-button'>
      <Row>
        <Col span={24}>
          <h2>Type</h2>
          <Button>default</Button>
          <Button type='primary'>primary</Button>
          <Button type='warning'>warning</Button>
          <Button type='success'>success</Button>
          <Button type='error'>error</Button>
          <Button type='info'>info</Button>
          <Button size='lg' type='primary' block>block</Button>
        </Col>
        <Col span={24}>
          <h2>Inverted</h2>
          <Button type='primary' inverted>primary</Button>
          <Button type='warning' inverted>warning</Button>
          <Button type='success' inverted>success</Button>
          <Button type='error' inverted>error</Button>
          <Button type='info' inverted>info</Button>
          <Button size='lg' type='primary' block inverted>block</Button>
        </Col>
        <Col span={12}>
          <h2>Size</h2>
          <Button size='sm' type='primary' >small</Button>
          <Button type='primary' >medium</Button>
          <Button size='lg' type='primary'>large</Button>
        </Col>
        <Col span={12}>
          <h2>Disabled</h2>
          <Button type='primary' disabled >primary</Button>
          <Button type='warning' disabled>warning</Button>
          <Button type='success' disabled>success</Button>
          <Button type='error' disabled>error</Button>
          <Button type='info' disabled>info</Button>
        </Col>
        <Col span={24}>
          <h2>Click event</h2>
          <Button onClick={action('clicked')}>default</Button>
          <Button type='primary' onClick={action('clicked')} >primary</Button>
          <Button type='warning' onClick={action('clicked')}>warning</Button>
          <Button type='success' onClick={action('clicked')}>success</Button>
          <Button type='error' onClick={action('clicked')}>error</Button>
          <Button type='info' onClick={action('clicked')}>info</Button>
          <Button size='lg' onClick={action('clicked')} type='primary' block>block</Button>
        </Col>
      </Row>
    </div >
  );
})


