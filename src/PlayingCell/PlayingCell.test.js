import { render, screen, fireEvent } from '@testing-library/react';
import testIds from '../App/testIs';
import { PlayingCell } from './PlayingCell';


describe('<PlayingCell />', () => {
  let cell;
  beforeEach(() => {
    render(<PlayingCell />)
  })

  test('Playing cell must be empty', () => {
    cell = screen.queryByTestId(testIds.playingCell);
    expect(cell).toBeEmptyDOMElement()
  })

  describe('after one click', () => {
    beforeEach(() => {
      cell = screen.queryByTestId(testIds.playingCell);
      fireEvent.click(cell)
    })

    test('Cell value is must be x', () => {
      expect(cell).toHaveTextContent('x')
    })
  })

  describe('after two clicks', () => {
    beforeEach(() => {
      cell = screen.queryByTestId(testIds.playingCell);
      fireEvent.click(cell)
      fireEvent.click(cell)
    })

    test('Playing cell must be empty', () => {
      expect(cell).toBeEmptyDOMElement()
    })
  })
})


