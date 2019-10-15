import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../components/avatar';
import './styles/avatar.less';

storiesOf('Avatar', module)
  .add('avatar', () => {
    return (
      <div className="demo">
        <h2>Basic</h2>
        <div>
          <Avatar size='sm' shape='square' />
          <Avatar shape='square' />
          <Avatar size='lg' shape='square' />
          <Avatar size={64} shape='square' />
        </div>
        <div>
          <Avatar size='sm' shape='circle' />
          <Avatar shape='circle' />
          <Avatar size='lg' shape='circle' />
          <Avatar size={64} shape='circle' />
        </div>
        <h2>Image, Character</h2>
        <div>
          <Avatar size='sm' shape='circle' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
          <Avatar src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
          <Avatar size='lg' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
          <Avatar size={64} shape='circle' src="https://tse4-mm.cn.bing.net/th?id=OIP.vFJO1JF-8ZC6uCEnT6_t6QHaHa&w=150&h=150&c=7&o=5&pid=1.7" />
        </div>
        <div>
          <Avatar size='sm' shape='square' >U</Avatar>
          <Avatar shape='square' style={{ background: '#46c37b' }}>U</Avatar>
          <Avatar size='lg' shape='square' >U</Avatar>
          <Avatar size={64} shape='square' style={{ background: '#46c37b' }} >U</Avatar>
        </div>
      </div>
    )
  },
  );
