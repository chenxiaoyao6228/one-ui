import React from 'react';
import { NodeProps } from './types';

const TreeNode: React.FC<NodeProps> = ({ data }) => {
  let children = data.children;
  return (
    <div className='tree-node'>
      <div className='inner'>{data.name}</div>
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