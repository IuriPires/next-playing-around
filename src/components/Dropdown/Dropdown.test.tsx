import { fireEvent, render, screen } from '@testing-library/react'
import Dropdown from './index'
import '@testing-library/jest-dom'

const mockedOptions = [
  { id: '1', value: '1', label: 'MSC Carnival', groupLabel: 'MSC' },
  { id: '2', value: '2', label: 'Ventura Cruise', groupLabel: 'Ventura' },
  { id: '3', value: '3', label: 'Ventura Magestic ', groupLabel: 'Ventura' },
]

describe('Dropdown', () => {
  it('Should render Dropdown correctly', () => {
    render(<Dropdown options={mockedOptions} placeholder="Select a ship" />)

    expect(screen.getByTestId('dropdown-input')).toBeInTheDocument()
    expect(screen.getByTestId('dropdown-input')).toHaveAttribute(
      'placeholder',
      'Select a ship'
    )
  })

  it('Should render Dropdown options after input focus', () => {
    render(<Dropdown options={mockedOptions} placeholder="Select a ship" />)

    const input = screen.getByTestId('dropdown-input')

    fireEvent.focus(input)

    expect(screen.getByTestId('dropdown-input-options')).toBeInTheDocument()
  })
})
