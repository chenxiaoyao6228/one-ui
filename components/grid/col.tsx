import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import './styles/styles.less';

const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

export interface ColSize {
    span?: number;
    order?: number;
    offsets?: number;
    push?: number;
    pull?: number;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: string | number;
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
    xs?: number | ColSize;
    sm?: number | ColSize;
    md?: number | ColSize;
    lg?: number | ColSize;
    xl?: number | ColSize;
}

export default class Col extends Component<ColProps, {}> {
    static defaultProps = {
        prefix: 'che-col',
    };
    static propTypes = {
        offset: PropTypes.number,
        order: PropTypes.number,
        span: PropTypes.number,
        xs: objectOrNumber,
        sm: objectOrNumber,
        md: objectOrNumber,
        lg: objectOrNumber,
        xl: objectOrNumber,
    };
    render() {
        const props: any = this.props;
        const { prefix, children, span, gutter, offset, className, style, ...others } = this.props;
        let sizeClassObj = {};
        // 遍历，为每个媒体查询断点生成特定的class
        ['xl', 'lg', 'md', 'sm', 'xs'].forEach(size => {
            let sizeProps: ColSize = {};
            // eg: xs = {{span: 5, gutter: 10}}
            if (typeof props[size] === 'number') {
                sizeProps.span = props[span];
            } else if (typeof props[size] === 'object') {
                sizeProps = props[size] || {};
            }
            delete others[size];

            sizeClassObj = {
                ...sizeClassObj,
                [`${prefix}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            };
        });

        const classes = cls(
            prefix,
            {
                [`${prefix}-${span}`]: span !== undefined,
            },
            className,
            sizeClassObj,
        );
        const colStyle = gutter ? { paddingLeft: Number(gutter) / 2, paddingRight: Number(gutter) / 2 } : {};

        return (
            <div className={classes} style={{ ...style, ...colStyle }}>
                {children}
            </div >
        );
    }
}
