import React from 'react';
import { NodeProps } from './types';
import { FaCaretDown, FaCaretRight, FaFolder, FaFolderOpen } from "react-icons/fa";

const TreeNode: React.FC<NodeProps> = ({ data, onCollapse, onCheck }) => {
  let children = data.children;
  return (
    <div className='tree-node'>
      <div className='inner'>
        <span onClick={() => { onCollapse(data.key) }}>
          {
            data.collapsed ? <FaCaretDown /> : <FaCaretRight />
          }
        </span>
        {data.collapsed ? <FaFolderOpen /> : <FaFolder />}
        <span>{data.name}</span>
      </div>
      {
        <div className='children'>
          {children &&
            children.length > 0 &&
            !data.collapsed &&
            children.map(child => {
              return <TreeNode
                data={child}
                key={child.key}
                onCollapse={onCollapse}
                onCheck={onCheck}
              ></TreeNode>;
            })}
        </div>
      }
    </div>
  );
};

export default TreeNode;