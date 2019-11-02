import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';
import Modal from '../components/modal';
import { Row, Col } from '../components/grid';
import './styles/button.less';
import { useToggle } from 'react-use'

const ModalDemo: React.FC<{}> = ({ }) => {
  const [modal, toggleModal] = useToggle(false);
  return (
    <React.Fragment>
      <Modal modal={modal} toggleModal={toggleModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      {/* <Button
        onClick={toggleModal}
      >
        button
      </Button> */}
    </React.Fragment>
  )
}

storiesOf('Common', module)
  .add('Button',
    () => {
      return (
        <div className='demo'>
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
              <Button size='lg' type='primary' >large</Button>
            </Col>
            <Col span={12}>
              <h2>Fibidden</h2>
              <Button type='primary' disabled >primary</Button>
              <Button type='warning' disabled>warning</Button>
              <Button type='success' disabled>success</Button>
              <Button type='error' disabled>error</Button>
              <Button type='info' disabled>info</Button>
            </Col>
            <Col span={24}>
              <h2>Click event</h2>
              <Button>default</Button>
              <Button type='primary' onClick={(e) => { alert('You clicked me!') }} style={{ width: 100 }}>primary</Button>
              <Button type='warning' onClick={(e) => { alert('You clicked me!') }}>warning</Button>
              <Button type='success' onClick={(e) => { alert('You clicked me!') }}>success</Button>
              <Button type='error' onClick={(e) => { alert('You clicked me!') }}>error</Button>
              <Button type='info' onClick={(e) => { alert('You clicked me!') }}>info</Button>
              <Button size='lg' onClick={(e) => { alert('You clicked me!') }} type='primary' block>block</Button>
            </Col>
          </Row>
        </div >
      );
    })
  .add('Modal', () => <ModalDemo />)

