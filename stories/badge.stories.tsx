import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../components/grid';
import Badge from '../components/badge';
import Button from '../components/button';
import './styles/badge.less';
// import cls from 'classnames';
import './styles/grid.less';

storiesOf('Badge', module)
  .add('badge', () => (
    <div className='demo'>
      <Row>
        <Col span={12}>
          <h2>Basic Badge</h2>
          <Row>
            <Col span={8}>
              <Badge count={10}>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={0} showZero>
                <Button type="info">No Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <h2>Overflow Count</h2>
          <Row>
            <Col span={8}>
              <Badge count={1000}>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
              <Badge count={1000} overflowCount={999}>
                <Button type="info">Unread message</Button>
              </Badge>
            <Col span={8}>

            </Col>
            <Col span={8}>

            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{marginTop: 50}}>
        <Col span={12}>
          <h2>custom style</h2>
          <Row>
            <Col span={8}>
              <Badge count={10} style={{ backgroundColor: '#52c41a' }}>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={10} style={{ backgroundColor: '#745e2e'}}>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>

            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <h2>Dot</h2>
          <Row>
            <Col span={8}>
              <Badge dot>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8} >
              <Badge dot >
                Unread message
              </Badge>
            </Col>
            <Col span={8}>

            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{marginTop: 50}}>
        <Col span={12}>
          <h2>Callback</h2>
          <Row>
            <Col span={8}>
              <Badge count={10} onClick={(e)=> alert('Read message')}>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={0} showZero onClick={(e)=> alert('Read message')}>
                <Button type="info">No Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  ));
