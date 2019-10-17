import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../components/breadcrumb';
import './styles/breadcrumb.less';

storiesOf('Navigation', module)
  .add('breadcrumb', () => {
    const navList = ['Home', 'ArticleList', 'ArticleDetail'];
    return (
      <div className="demo">
        <h2>Default Seperator</h2>
        <Breadcrumb>
          {navList.map(item => {
            return (<Breadcrumb.Item key={item}>
              <span >{item}</span>
            </Breadcrumb.Item>
            );
          })
          }
        </Breadcrumb>
        <h2>Custom separator</h2>
        <Breadcrumb separator=">">
          {navList.map(item => {
            return (
              <Breadcrumb.Item key={item}>
                <a href="#">{item}</a>
              </Breadcrumb.Item>
            );
          })
          }
        </Breadcrumb>
      </div>
    );
  },
  );
