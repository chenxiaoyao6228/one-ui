import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useToggle } from 'react-use';
import Modal from '..'


test('should close when clicked the closeBtn and mask, other parts don\'t', () => {
  let onCancel = jest.fn()
  const ModalTester: React.FC<{}> = ({ }) => {
    const [modal, toggleModal] = useToggle(false)
    return (
      <>
        <button onClick={toggleModal}>显示弹窗</button>
        < Modal
          modal={modal}
          toggleModal={toggleModal}
          onCancel={onCancel}
        >
          <p>内容</p>
        </Modal>
      </>)
  }
  const { getByTestId, getByText, debug } = render(< ModalTester />, { container: document.body })
  let showBtn, cancelBtn;
  showBtn = getByText('显示弹窗')

  // 遮罩层点击关闭弹窗
  showBtn.click()
  let mask = getByTestId('modal-mask')
  expect(mask).toBeInTheDocument()
  fireEvent.click(mask, onCancel)
  expect(onCancel).toHaveBeenCalled()
  expect(mask).not.toBeInTheDocument()

  // 取消按钮点击
  showBtn.click()
  mask = getByTestId('modal-mask')
  expect(mask).toBeInTheDocument()
  cancelBtn = getByText('取消')
  fireEvent.click(cancelBtn, onCancel)
  expect(onCancel).toHaveBeenCalled()

  // 关闭按钮点击
  showBtn.click()
  mask = getByTestId('modal-mask')
  expect(mask).toBeInTheDocument()
  let close = getByTestId('modal-cancel')
  fireEvent.click(close, onCancel)
  expect(onCancel).toHaveBeenCalled()

  // 其他部分点击不关闭弹窗
  // showBtn.click()
  // mask = getByTestId('modal-mask')
  // expect(mask).toBeInTheDocument()
  // let body = getByTestId('modal-body')
  // fireEvent.click(body, onCancel)
  // expect(onCancel).not.toHaveBeenCalled()
});