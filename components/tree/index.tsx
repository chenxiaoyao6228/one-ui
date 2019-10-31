import React, { useState, useEffect } from 'react';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import TreeNode from './TreeNode';
import { Props, TreeData, KeyNodeMap } from './types';
import './styles/index.less'

// & { keyNodeMap: KeyNodeMap }
const Tree: React.FC<Props> = ({ data }) => {
  const [stateData, setStateData] = useState({ data: data })
  let keyNodeMap = {}
  useEffect(() => {
    bindKeyMap()
  })
  const bindKeyMap = () => {
    let data = stateData.data
    if (data.children && data.children.length) {
      walk(data.children, data)
    }

  }
  const walk = (children: TreeData[], parent: TreeData): void => {
    children.forEach((child: TreeData) => {
      child.parent = parent
      keyNodeMap[child.key] = child
      if (child.children && child.children.length) [
        walk(child.children, child)
      ]
    })
  }
  const onCollapse = (key: string) => {
    debugger
    let data = keyNodeMap[key]
    if (data) {
      let { children } = data
      if (children) {
        data.collapsed = !data.collapsed
        data.children = data.children || []
        setStateData(stateData)
      } else {
        // todo
      }
    }
  }
  const onCheck = (key: string) => {
    let data = keyNodeMap[key];
    if (data) {
      data.checked = !data.checked;
      if (data.checked) {
        checkChildren(data.children, true);
        checkParent(data.parent);
      } else {
        checkChildren(data.children, false);
        checkParent(data.parent);
      }
    }
  }
  const checkParent = (parent: TreeData) => {
    while (parent) {
      parent.checked = parent.children.every((item: TreeData) => item.checked);
      parent = parent.parent;
    }
  }
  const checkChildren = (children: TreeData[] = [], checked: boolean) => {
    children.forEach((item: TreeData) => {
      item.checked = checked;
      checkChildren(item.children, checked);
    });
  }
  const renderTree = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('tree');
    return (
      <div className={`${prefixCls}`}>
        <div className='tree-nodes'>
          <TreeNode
            data={data}
            onCollapse={onCollapse}
            onCheck={onCheck}
          ></TreeNode>
        </div>
      </div>
    );
  }
  return (
    <ConfigConsumer>{renderTree}</ConfigConsumer>
  )
};

export default Tree;