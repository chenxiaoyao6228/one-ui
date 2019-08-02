import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../components/breadcrumb';
import './styles/breadcrumb.less';

storiesOf('Breadcrumb', module)
  .add('breadcrumb', () => {
    const navList = ['一级导航', '二级导航', '三级导航'];
    return (
      <div className="demo">
        <h2>默认分隔符</h2>
        <Breadcrumb>
          {navList.map(item => {
            return (<Breadcrumb.Item key={item}>
              <a >{item}</a>
            </Breadcrumb.Item>
            );
          })
          }
        </Breadcrumb>
        <h2>自定义分隔符</h2>
        <Breadcrumb seperator=">">
          {navList.map(item => {
            return (<Breadcrumb.Item key={item}>
              <a href="lal">{item}</a>
            </Breadcrumb.Item>
            );
          })
          }
        </Breadcrumb>
      </div>
    );
  },
  );
