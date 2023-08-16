import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom';
import QuotePage from './QuotePage';



describe('Header component', () => {
  it('renders correctly', () => {
      const tree = renderer
        .create(
        <MemoryRouter>
          <QuotePage />
        </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
  });  
})