import renderer from 'react-test-renderer';
import RenderQuotes from './RenderQuotes';

describe('RenderQuotes component', () => {
  it('renders correctly', () => {
    const quotes = [
      {
        id: 1878900,
        randomCategory: 'intelligence',
        quote: 'This is a test quote',
        author: 'quote author',
      },
    ];

    const tree = renderer
      .create(
        <RenderQuotes quotes={quotes} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();

    const firstQuote = quotes[0];
    expect(firstQuote.id).toEqual(expect.any(Number));
    expect(firstQuote.author).toEqual(expect.any(String));
  });
});
