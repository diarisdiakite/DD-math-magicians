import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ContactPage from './ContactPage';

describe('ContactPage component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
