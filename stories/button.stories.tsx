import React from 'react';
import { storiesOf } from '@storybook/react';
import Btn from '../components/button';

storiesOf('Button', module)
    .add('btn',
        () => {
            return (<Btn prefix="lla" />);
        },
        { notes: 'A very simple component' },
    );
