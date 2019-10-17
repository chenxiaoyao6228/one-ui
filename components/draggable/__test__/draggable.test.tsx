/* tslint:disable */
import React from 'react';
import { render, cleanup } from "@testing-library/react"
import Draggable from '..';
import { fireEvent } from '@testing-library/react';

beforeEach(cleanup)

describe('Draggable component', () => {
  test('should be able to handle drag event', () => {
    const start = jest.fn()
    const drag = jest.fn()
    const end = jest.fn()
    const { getByTestId } = render(
      <Draggable
        data-testid="draggable-container"
        onStart={start}
        onDrag={drag}
        onEnd={end}
      />)
    fireEvent.drag(getByTestId('draggable-container'))
    // expect(start).toHaveBeenCalledTimes(1);
  });
});