import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useToggle } from 'react-use'
import Modal from '..'

test('test modal', () => {
  const handleCancel = jest.fn()
  const handleConfirm = jest.fn()
  const ModalTester: React.FC<{}> = ({}) => {
    const [modal, toggleModal] = useToggle(false)
    return (
      <>
        <button onClick={toggleModal}>显示弹窗</button>
        <Modal modal={modal} toggleModal={toggleModal} onCancel={handleCancel} onConfirm={handleConfirm}>
          <p>内容</p>
        </Modal>
      </>
    )
  }
  const { getByTestId, getByText } = render(<ModalTester />, { container: document.body })
  let showBtn
  let cancelBtn
  showBtn = getByText('显示弹窗')

  // 遮罩层点击关闭弹窗
  showBtn.click()
  let mask = getByTestId('modal-mask')
  expect(mask).toBeInTheDocument()
  fireEvent.click(mask, handleCancel)
  expect(handleCancel).toHaveBeenCalledTimes(1)
  expect(mask).not.toBeInTheDocument()

  // 取消按钮点击
  showBtn.click()
  mask = getByTestId('modal-mask')
  expect(mask).toBeInTheDocument()
  cancelBtn = getByText('取消')
  fireEvent.click(cancelBtn, handleCancel)
  expect(handleCancel).toHaveBeenCalledTimes(2)

  // 关闭按钮点击
  showBtn.click()
  mask = getByTestId('modal-mask')
  expect(mask).toBeInTheDocument()
  let close = getByTestId('modal-cancel')
  fireEvent.click(close, handleCancel)
  expect(handleCancel).toHaveBeenCalledTimes(3)

  // 其他部分点击不关闭弹窗
  showBtn.click()
  mask = getByTestId('modal-mask')
  expect(mask).toBeInTheDocument()
  let body = getByTestId('modal-body')
  fireEvent.click(body, handleCancel)
  expect(handleCancel).toHaveBeenCalledTimes(3)
  close = getByTestId('modal-cancel')
  fireEvent.click(close, handleCancel)
  expect(handleCancel).toHaveBeenCalledTimes(4)

  // 确定按钮点击
  showBtn.click()
  let confirmBtn = getByText('确定')
  confirmBtn.click()
  expect(mask).not.toBeInTheDocument()
  expect(handleConfirm).toHaveBeenCalledTimes(1)
})
