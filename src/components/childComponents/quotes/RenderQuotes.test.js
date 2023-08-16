import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import RenderQuotes from './RenderQuotes';

describe('RenderQuotes component', () => {
  it('renders correctly', () => {
    const quote = [
      {
        id: 1878900,
        randomCategory: 'intelligence',
        quote: 'This is a test quote',
        author: 'quote author'
      }
    ]
    
    const tree = renderer
      .create(
        <RenderQuotes quotes = {quote} />  
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
