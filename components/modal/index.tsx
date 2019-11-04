import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import Button from "../button"
import './styles/index.less';
import { MdClose } from 'react-icons/md'
export interface Props {
  prefix?: string;
  style?: React.CSSProperties;
  className?: string;
  modal: boolean;
  toggleModal: any;
  onCancel?: (e: React.MouseEvent<Element>) => void
}

const Modal: React.FC<Props> = ({ modal, toggleModal, onCancel, children }) => {
  const handleModalClose = (e: React.MouseEvent) => {
    // const prefixCls = 'one-modal'
    // const list = [
    //   `${prefixCls}-close`,
    //   `${prefixCls}-cancel`,
    //   `${prefixCls}-wrapper`
    // ]
    // if (list.indexOf(e.currentTarget.className) < 0) {
    //   return
    // } 
    e.stopPropagation()
    onCancel && onCancel(e)
    toggleModal()
  }
  const renderModal = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('modal')

    const modalContent = (<div className={`${prefixCls}-content`}>
      <div className={`${prefixCls}-header`}>
        <span className={`${prefixCls}-title`}>This is title</span>
        <div className={`${prefixCls}-close`}
          data-testid="modal-cancel"
        >
          <i
            className={`${prefixCls}-closeBtn`}
          >
            <MdClose></MdClose>
          </i>

        </div>
      </div>
      <div className={`${prefixCls}-body`} data-testid="modal-body">
        {children}
      </div>
      <div className={`${prefixCls}-footer`}>
        <Button type='info' >取消</Button>
        <Button type='primary' >确定</Button>
      </div>
    </div >)

    const modalWrapper = <div
      className={`${prefixCls}-wrapper`}
      onClick={handleModalClose}
      data-testid="modal-mask"
    >
      {modalContent}
    </div>;

    return (
      <React.Fragment>
        {modal ? ReactDOM.createPortal(modalWrapper, document.body) : null}
      </React.Fragment>
    );
  }
  return (
    <ConfigConsumer>{renderModal}</ConfigConsumer>
  )
};

export default Modal;
