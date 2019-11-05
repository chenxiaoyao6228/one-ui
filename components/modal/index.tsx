import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import cls from 'classnames'
import Button from '../button'
import './styles/index.less'
import { MdClose } from 'react-icons/md'
export interface Props {
  prefix?: string
  style?: React.CSSProperties
  className?: string
  modal: boolean
  toggleModal: any
  mask?: boolean
  title?: string
  cancelText?: string
  confirmText?: string
  centered?: boolean
  onCancel?: (e: React.MouseEvent<any>) => void
  onConfirm?: (e: React.MouseEvent<any>) => void
}

const Modal: React.FC<Props> = ({
  modal,
  toggleModal,
  mask = true,
  title = '',
  centered = false,
  onCancel,
  onConfirm,
  cancelText = '取消',
  confirmText = '确定',
  children
}) => {
  const handleCancelClick = (e: React.MouseEvent<any>) => {
    e.stopPropagation()
    onCancel && onCancel(e)
    toggleModal()
  }
  const handleConfirm = (e: React.MouseEvent<any>) => {
    e.stopPropagation()
    onConfirm && onConfirm(e)
    toggleModal()
  }

  const renderModal = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('modal')

    const modalContent = (
      <div className={cls(
        `${prefixCls}-content`,
        centered ? `${prefixCls}-content-centered` : null,
      )}>
        <div className={`${prefixCls}-header`}>
          <span className={`${prefixCls}-title`}>{title}</span>
          <div className={`${prefixCls}-close`} data-testid='modal-cancel' onClick={handleCancelClick}>
            <i className={`${prefixCls}-closeBtn`}>
              <MdClose />
            </i>
          </div>
        </div>

        <div className={`${prefixCls}-body`} data-testid='modal-body'>
          {children}
        </div>

        <div className={`${prefixCls}-footer`}>
          <Button type='info' className={`${prefixCls}-cancelBtn`} onClick={handleCancelClick}>
            {' '}
            {cancelText}
          </Button>
          <Button type='primary' onClick={handleConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    )

    const maskClass = cls({
      [`${prefixCls}-mask`]: true,
      [`${prefixCls}-mask-hidden`]: !mask
    })

    const modalMask = <div className={maskClass} data-testid='modal-mask' onClick={handleCancelClick} />

    const modalWrapper = (
      <div className={`${prefixCls}-wrapper`}>
        {modalMask}
        {modalContent}
      </div>
    )
    return <React.Fragment>{modal ? ReactDOM.createPortal(modalWrapper, document.body) : null}</React.Fragment>
  }
  return <ConfigConsumer>{renderModal}</ConfigConsumer>
}

export default Modal
