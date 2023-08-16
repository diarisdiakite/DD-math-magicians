import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Keypad from './Keypad';

describe('Keypad component', () => {
  it('renders correctly', () => {
    const handleClickMock = jest.fn();

    const tree = renderer
      .create(
        <MemoryRouter>
          <Keypad handleClick={handleClickMock} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
