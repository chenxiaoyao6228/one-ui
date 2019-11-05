import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BackTop from '..'

beforeEach(cleanup)

test('should call the callback when backtop button is clicked', async () => {
  const callback = jest.fn()
  const { getByTestId } = render(<BackTop data-testid='backtop' onClick={callback} />)

  fireEvent.scroll(window, { target: { scrollY: 1000 } })

  fireEvent.click(getByTestId('backtop'))
  expect(callback).toHaveBeenCalledTimes(1)

  await new Promise(resolve => setTimeout(resolve, 1000))
  expect(Math.abs(Math.round(document.documentElement.scrollTop))).toBe(0)
})
