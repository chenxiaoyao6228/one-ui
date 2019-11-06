import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles/navigation.less';

import Affix from '../components/affix';
import Button from '../components/button';
import { Row, Col } from '../components/grid'
import Breadcrumb from '../components/breadcrumb';
import Pagination from '../components/pagination';


const stories = storiesOf('Navigation', module)

// Affix
stories.add('Affix', () => (
  <div className='demo' style={{ minHeight: 3000 }}>
    <Row>
      <Col span={24} style={{ height: 200 }} ></Col>
      <Col span={8}>
        <h2>Basic Affix</h2>
        <Affix>
          <Button type='primary'>Basic Affix</Button>
        </Affix>
      </Col>
      <Col span={8}>
        <h2>With 120px OffsetTop </h2>
        <Affix offsetTop={120}>
          <Button type='primary'>With 120px OffsetTop</Button>
        </Affix>
      </Col>
      <Col span={8}>
        <h2>With Callback </h2>
        <Affix offsetTop={240} callback={(affixed) => { console.log('invoked the callback function in With Callback') }}>
          <Button type='primary' >With Callback</Button>
        </Affix>
      </Col>
    </Row>
  </div>
))


// Breadcrumb
stories.add('Breadcrumb', () => {
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
});

// Pagination
stories.add('Pagination', () => {
  return (
    <div className="demo demo-pagination">
      <h2>Basic</h2>
      <Pagination total={55}></Pagination>
      <h2>More</h2>
      <Pagination total={500} current={6}></Pagination>
    </div>
  )

})


