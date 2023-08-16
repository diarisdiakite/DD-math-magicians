import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Header';

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
