import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import DisplayResult from './DisplayResult';

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <DisplayResult />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
