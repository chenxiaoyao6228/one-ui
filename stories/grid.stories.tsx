import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../components/grid';
import cls from 'classnames';
import './styles/grid.less';

storiesOf('Grid 网格', module)
    .add('网格', () => (
        <div>
            <h2>简单栅格</h2>
            <Row className="demo-row">
                <Col className="demo-col" span={12}>col-12</Col>
                <Col className="demo-col" span={12}>col-12</Col>
            </Row>
            <Row className="demo-row">
                <Col className="demo-col" span={8}>col-8</Col>
                <Col className="demo-col" span={8}>col-8</Col>
                <Col className="demo-col" span={8}>col-8</Col>
            </Row>
            <Row className="demo-row">
                <Col className="demo-col" span={4}>col-4</Col>
                <Col className="demo-col" span={8}>col-8</Col>
                <Col className="demo-col" span={4}>col-4</Col>
                <Col className="demo-col" span={8}> col-8</Col>
            </Row>
            <h2>区块间隔</h2>
            <Row className="demo-row" gutter="20">
                {
                    new Array(4).fill(6).map((col, index) => {
                        return (
                            <Col className={cls('demo-col', 'demo-col-gutter')} span={6} key={index}>
                                <div>col - 6</div>
                            </Col>
                        );
                    })
                }
            </Row>
            <h2>Flex布局</h2>
            <p>主轴</p>
            {
                ['space-between', 'space-around', 'start', 'end', 'center'].map((type, i) => {
                    return (
                        <div key={i}>
                            <Row className="demo-row" justify={type}>
                                <Col className="demo-col" span={4}>{type}</Col>
                                <Col className="demo-col" span={4}>{type}</Col>
                                <Col className="demo-col" span={4}>{type}</Col>
                            </Row>
                        </div>
                    );
                })
            }
            <p>副轴</p>
            {
                ['top', 'middle', 'bottom'].map((type, i) => {
                    return (
                        <div key={i}>
                            <Row align={type} className="demo-row demo-row-flex">
                                <Col span={4} className="demo-col">{type}</Col>
                                <Col span={4} className="demo-col">{type}</Col>
                                <Col span={4} className="demo-col">{type}</Col>
                            </Row>
                        </div>
                    );
                })
            }
            <h2>响应布局</h2>
            <Row className="demo-row">
                <Col className="demo-col" span={4} xs={{ span: 20 }} md={{ span: 12 }}>col-4, md-12,xs-20</Col>
                <Col className="demo-col" span={8} xs={{ span: 4 }} md={{ span: 12 }}>col-20, md-12,xs-4</Col>
            </Row >
        </div >
    ));
