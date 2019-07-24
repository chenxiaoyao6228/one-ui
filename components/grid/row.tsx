import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import './styles/styles.less';

export interface Props {
    prefix?: string;
    gutter?: string;
    align?: string;
    justify?: string;
    className?: string;
    style?: object;

}

export default class Row extends Component<Props> {
    static defaultProps = {
        prefix: 'che-row',
        gutter: 0,
    };
    static propTypes = {
        align: PropTypes.oneOf(['top', 'middle', 'bottom']),
        gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        justify: PropTypes.oneOf(['space-between', 'space-around', 'start', 'end', 'center']),
    };
    render() {
        const { prefix, children, align, gutter, justify, className, style } = this.props;
        const classes = cls(
            prefix,
            {
                [`${prefix}-flex-${justify}`]: justify,
                [`${prefix}-flex-${align}`]: align,
            },
            className,
            style,
        );
        // 使用margin负值抵消第一个与最后一个子元素的半个padding值
        const rowStyle = gutter ? { marginLeft: -gutter / 2, marginRight: -gutter / 2 } : {};
        return (
            <div className={classes} style={{ ...style, ...rowStyle }}>
                {
                    React.Children.map(children, (child: React.ReactElement<any>, index) => {
                        return cloneElement(child, { gutter, index });
                    })
                }
            </div >
        );
    }
}
