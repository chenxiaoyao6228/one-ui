import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../components/grid';
import Badge from '../components/badge';
import Button from '../components/button';
import Draggable from './../components/draggable/index';
import Affix from '../components/affix';
import Backtop from '../components/backtop';
import Tree from '../components/tree';
import data from './utils/data';
import './styles/badge.less';
import './styles/grid.less';
import './styles/draggable.less';
import './styles/affix.less';
import './styles/backtop.less';
// import Avatar from '../components/avatar';
// import './styles/avatar.less';


storiesOf('Data Display', module)
  .add('draggable', () => {
    const start = (e: any, ui: any) => {
      console.log(ui);
    }
    const drag = (e: any, ui: any) => {
      console.log(ui);
    }
    const stop = (e: any, ui: any) => {
      console.log(ui);
    }
    return (
      <div className="demo">
        <h2>Axis</h2>
        <Draggable>
          <div className="box">Can be dragged in both direction</div>
        </Draggable>
        <Draggable axis="x">
          <div className="box">Can be dragged in horizontally</div>
        </Draggable>
        <Draggable axis="y">
          <div className="box">Can be dragged in vertically</div>
        </Draggable>
        <Draggable axis="none">
          <div className="box">Can not be dragged</div>
        </Draggable>
        <h2>Handle, Cancel, Callback, zIndex</h2>
        <Draggable handle="button">
          <div className="box">
            <Button>Drag here</Button>
            <div>You must click my handle to drag me</div>
          </div>
        </Draggable>
        <Draggable cancel=".cancel">
          <div className="box">
            <Button className="cancel" style={{ cursor: 'move' }}>Can not drag here</Button>
            <div>Can be dragged here</div>
          </div>
        </Draggable>
        <Draggable onStart={start} onDrag={drag} onStop={stop}>
          <div className="box">with callback event attached</div>
        </Draggable>
        <Draggable zIndex={100}>
          <div className="box">zIndex support</div>
        </Draggable>
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
                <Button type="primary">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={0} showZero>
                <Button type="primary">No Unread message</Button>
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
                <Button type="primary">Unread message</Button>
              </Badge>
            </Col>
            <Badge count={1000} overflowCount={999}>
              <Button type="primary">Unread message</Button>
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
                <Button type="primary">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={10} style={{ backgroundColor: '#745e2e' }}>
                <Button type="primary">Unread message</Button>
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
                <Button type="primary">Unread message</Button>
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
                <Button type="primary">Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
              <Badge count={0} showZero onClick={(e) => alert('Read message')}>
                <Button type="primary">No Unread message</Button>
              </Badge>
            </Col>
            <Col span={8}>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  ))
  .add('Affix', () => (
    <div className='demo' style={{ minHeight: 3000 }}>
      <Row>
        <Col span={24} style={{ height: 200 }} ></Col>
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
          <Affix offsetTop={240} callback={(affixed) => { console.log('invoked the callback function in With Callback') }}>
            <Button type='primary' >With Callback</Button>
          </Affix>
        </Col>
      </Row>
    </div>
  ))
  .add('Backtop', () => (
    <div className='demo' style={{ minHeight: 3000 }}>
      <Row>
        <Col span={12}>
          <h2>Basic backtop</h2>
          <p>Scroll down the page to see the backtop button</p>
          <Backtop>
            <Button type="primary">Top</Button>
          </Backtop>
        </Col>
      </Row>
    </div>
  ))
  .add('Tree', () => (
    <Tree data={data}></Tree>
  ))

  // .add('avatar', () => {
  //   return (
  //     <div className="demo">
  //       <h2>Basic</h2>
  //       <div>
  //         <Avatar size='sm' shape='square' />
  //         <Avatar shape='square' />
  //         <Avatar size='lg' shape='square' />
  //         <Avatar size={64} shape='square' />
  //       </div>
  //       <div>
  //         <Avatar size='sm' shape='circle' />
  //         <Avatar shape='circle' />
  //         <Avatar size='lg' shape='circle' />
  //         <Avatar size={64} shape='circle' />
  //       </div>
  //       <h2>Image, Character</h2>
  //       <div>
  //         <Avatar size='sm' shape='circle' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
  //         <Avatar src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
  //         <Avatar size='lg' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
  //         <Avatar size={64} shape='circle' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
  //       </div>
  //       <div>
  //         <Avatar size='sm' shape='square' >U</Avatar>
  //         <Avatar shape='square' style={{ background: '#46c37b' }}>U</Avatar>
  //         <Avatar size='lg' shape='square' >U</Avatar>
  //         <Avatar size={64} shape='square' style={{ background: '#46c37b' }} >U</Avatar>
  //       </div>
  //     </div>
  //   )
  // })
