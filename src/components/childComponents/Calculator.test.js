import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Calculator from './Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
