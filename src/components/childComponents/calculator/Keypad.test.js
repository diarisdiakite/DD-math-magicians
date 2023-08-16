import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Keypad from './Keypad';;

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Keypad />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
