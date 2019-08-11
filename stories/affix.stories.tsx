import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../components/grid';
import Affix from '../components/affix';
import Button from '../components/button';
import './styles/affix.less';

storiesOf('Affix', module)
  .add('affix', () => (
    <div className='demo' style={{minHeight: 3000}}>
      <Row>
        <Col span={24} style={{height: 200}} ></Col>
        <Col span={8}>
          <h2>Basic Affix</h2>
          <Affix>
            <Button type='primary'>Basic Affix</Button>
          </Affix>
        </Col>
        <Col span={8}>
           <h2>With 120px OffsetTop </h2>
          <Affix offsetTop={120}>
            <Button type='primary'>With 120px OffsetTop</Button>
          </Affix>
        </Col>
        <Col span={8}>
           <h2>With Callback </h2>
          <Affix offsetTop={240} callback={(affixed)=> {console.log('invoked the callback function in With Callback')}}>
            <Button type='primary' >With Callback</Button>
          </Affix>
        </Col>
      </Row>
    </div>
  ));
