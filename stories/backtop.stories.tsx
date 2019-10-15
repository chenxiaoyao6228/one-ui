import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../components/grid';
import Backtop from '../components/backtop';
import Button from '../components/button';
import './styles/backtop.less';
// import cls from 'classnames';
import './styles/grid.less';

storiesOf('Backtop', module)
  .add('backtop', () => (
    <div className='demo' style={{ minHeight: 3000 }}>
      <Row>
        <Col span={12}>
          <h2>Basic backtop</h2>
          <p>Scroll down the page to see the backtop button</p>
          <Backtop>
            <Button type="primary">Top</Button>
          </Backtop>
        </Col>
      </Row>
    </div>
  ))
