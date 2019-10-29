import React from 'react';
import { NodeProps } from './types';
import { FaCaretDown, FaCaretRight, FaFolder, FaFolderOpen } from "react-icons/fa";
import Checkbox from './../checkbox/checkbox';

const TreeNode: React.FC<NodeProps> = ({ data }) => {
  let children = data.children;
  return (
    <div className='tree-node'>
      <div className='inner'>
        {data.collapsed ? <FaCaretDown /> : <FaCaretRight />}
        {data.collapsed ? <FaFolderOpen /> : <FaFolder />}
        <span>{data.name}</span>
      </div>
      {
        <div className='children'>
          {children &&
            children.length > 0 &&
            children.map(child => {
              return <TreeNode data={child} key={child.key}></TreeNode>;
            })}
        </div>
      }
    </div>
  );
};

export default TreeNode;