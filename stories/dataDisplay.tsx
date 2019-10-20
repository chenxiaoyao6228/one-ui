import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../components/grid';
import Badge from '../components/badge';
import Button from '../components/button';
import './styles/badge.less';
import './styles/grid.less';

import Avatar from '../components/avatar';
import './styles/avatar.less';
import './styles/avatar.less';
import Draggable from './../components/draggable/index';


storiesOf('Data Display', module)
  .add('draggable', () => {
    const start = (e: any, ui: any) => {
      console.log(ui);
    }
    const drag = (e: any, ui: any) => {
      console.log(ui);
    }
    return (
      <div>
        <Draggable>
          <div className="box">can be dragged in both direction</div>
        </Draggable>
        {/* <Draggable axis="x">
          <div className="box">can be dragged in horizontally</div>
        </Draggable>
        <Draggable axis="y">
          <div className="box">can be dragged in vertically</div>
        </Draggable>
        <Draggable handle="strong">
          <div className="box">
            <strong>Drag here</strong>
            <div>You must click my handle to drag me</div>
          </div>
        </Draggable> */}
      </div>
    )
  })
  .add('avatar', () => {
    return (
      <div className="demo">
        <h2>Basic</h2>
        <div>
          <Avatar size='sm' shape='square' />
          <Avatar shape='square' />
          <Avatar size='lg' shape='square' />
          <Avatar size={64} shape='square' />
        </div>
        <div>
          <Avatar size='sm' shape='circle' />
          <Avatar shape='circle' />
          <Avatar size='lg' shape='circle' />
          <Avatar size={64} shape='circle' />
        </div>
        <h2>Image, Character</h2>
        <div>
          <Avatar size='sm' shape='circle' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
          <Avatar src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
          <Avatar size='lg' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
          <Avatar size={64} shape='circle' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
        </div>
        <div>
          <Avatar size='sm' shape='square' >U</Avatar>
          <Avatar shape='square' style={{ background: '#46c37b' }}>U</Avatar>
          <Avatar size='lg' shape='square' >U</Avatar>
          <Avatar size={64} shape='square' style={{ background: '#46c37b' }} >U</Avatar>
        </div>
      </div>
    )
  })
  .add('Badge', () => (
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
      <Row style={{ marginTop: 50 }}>
        <Col span={12}>
          <h2>custom style</h2>
          <Row>
            <Col span={8}>
              <Badge count={10} style={{ backgroundColor: '#52c41a' }}>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={10} style={{ backgroundColor: '#745e2e' }}>
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
      <Row style={{ marginTop: 50 }}>
        <Col span={12}>
          <h2>Callback</h2>
          <Row>
            <Col span={8}>
              <Badge count={10} onClick={(e) => alert('Read message')}>
                <Button type="info">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={0} showZero onClick={(e) => alert('Read message')}>
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
