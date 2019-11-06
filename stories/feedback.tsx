import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import './styles/feedback.less';

import Button from '../components/button'
import Modal from '../components/modal';
import useToggle from '../components/utils/hooks/useToggle';

const stories = storiesOf('Feedback', module)

// Modal
const ModalDemo: React.FC<{}> = ({ }) => {
  const [modal, toggleModal] = useToggle(false);
  const handleCancel = () => {
    console.log('cancel event fires');
  }
  const handleConfirm = () => {
    console.log('confirm event fires');
  }
  return (
    <>
      <h2>Modal</h2>
      <Modal
        modal={modal}
        toggleModal={toggleModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        title="Basic Title"
        cancelText="Cancel"
        confirmText="Ok"
      // mask={false}
      // centered
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Button type="primary" onClick={toggleModal}>show modal</Button>
    </>
  )
}
stories.add('Modal', () => {
  return (
    <div className="demo demo-modal" style={{ minHeight: 2000 }}>
      <ModalDemo />
    </div>

  )
})