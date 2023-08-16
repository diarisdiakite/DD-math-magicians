import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
