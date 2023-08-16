import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Quotes from './Quotes';

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Quotes />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
