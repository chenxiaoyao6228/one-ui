import React from 'react';
import { NodeProps } from './PropsTypes';
import { FaCaretDown, FaCaretRight, FaFolder, FaFolderOpen, FaFileAlt } from "react-icons/fa";

const TreeNode: React.FC<NodeProps> = ({ data, onCollapse, onCheck }) => {
  let children = data.children;
  return (
    <div className='tree-node'>
      <div className='inner'>
        {
          children && children.length > 0 ?
            <span onClick={() => { onCollapse(data.key) }}>
              {
                data.collapsed ? <FaCaretRight /> : <FaCaretDown />
              }
            </span> : ''
        }
        {data.type === 'folder'
          ? data.collapsed ? <FaFolder /> : <FaFolderOpen />
          : <FaFileAlt />
        }
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