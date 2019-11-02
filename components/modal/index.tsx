import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import Button from "../button"
import './styles/index.less';


export interface Props {
  prefix?: string;
  style?: React.CSSProperties;
  className?: string;
  modal: any;
  toggleModal: any;
}

const Modal: React.FC<Props> = ({ modal, toggleModal, children }) => {
  const renderModal = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('modal')
    const modalMask = <div className={`${prefixCls}-mask`}></div>;
    const modalWrapper = <div className={`${prefixCls}-wrapper`}>
      <div className={`${prefixCls}-header`}>
        <span className={`${prefixCls}-title`}>This is title</span>
      </div>
      <div className={`${prefixCls}-body`}>
        {children}
      </div>
      <div className={`${prefixCls}-footer`}>
        <Button type='info' onClick={toggleModal}>取消</Button>
        <Button type='info' onClick={toggleModal}>确定</Button>
      </div>
    </div>
    return (
      <React.Fragment>
        {modal ? modalWrapper : null}
        {modal ? ReactDOM.createPortal(modalMask, document.body) : null}
      </React.Fragment>
    );
  }
  return (
    <ConfigConsumer>{renderModal}</ConfigConsumer>
  )
};

export default Modal;
