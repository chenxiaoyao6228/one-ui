import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { CheckboxGroup } from '../index'

beforeEach(cleanup)

test('should work basically', () => {
  const onChange = jest.fn()
  const { getByDisplayValue } = render(<CheckboxGroup options={['Apple', 'Pear', 'Orange']} onChange={onChange} />)
  getByDisplayValue(/Apple/i).click()
  expect(onChange).toHaveBeenCalledWith(['Apple'])

  getByDisplayValue(/Pear/i).click()
  expect(onChange).toHaveBeenCalledWith(['Apple', 'Pear'])

  getByDisplayValue(/Orange/i).click()
  expect(onChange).toHaveBeenCalledWith(['Apple', 'Pear', 'Orange'])

  getByDisplayValue(/Pear/i).click()
  expect(onChange).toHaveBeenCalledWith(['Apple', 'Orange'])
})

test('does not trigger onChange callback of Checkbox and CheckboxGroup when CheckboxGroup is disabled', () => {
  const onChangeGroup = jest.fn()
  const options = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }]

  const { getByDisplayValue } = render(<CheckboxGroup options={options} onChange={onChangeGroup} disabled />)
  getByDisplayValue('Apple').click()
  expect(onChangeGroup).not.toHaveBeenCalled()

  getByDisplayValue(/Pear/i).click()
  expect(onChangeGroup).not.toHaveBeenCalled()
})
