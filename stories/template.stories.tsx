import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../components/grid';
import Temlate from '../components/template';
import './styles/template.less';
// import cls from 'classnames';
import './styles/grid.less';

storiesOf('Template', module)
  .add('template', () => (
    <div className='demo'>
      <Row>
        <Col span={12}>
          <h2>Basic Template</h2>
          <Temlate></Temlate>
        </Col>
      </Row>
    </div>
  ))
    