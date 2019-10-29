import React from 'react';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import TreeNode from './TreeNode';
import { Props } from './types';
import './styles/index.less'

const Tree: React.FC<Props> = ({ data }) => {
  const renderTree = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('tree');
    return (
      <div className={`${prefixCls}`}>
        <div className='tree-nodes'>
          <TreeNode data={data}></TreeNode>
        </div>
      </div>
    );
  }
  return (
    <ConfigConsumer>{renderTree}</ConfigConsumer>
  )
};

export default Tree;