import React from 'react';
import PropTypes from 'prop-types';

function RenderQuotes({ quotes }) {
  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <p>
            Your takeaway
            {' '}
            {quote.category}
            {' '}
            quote
          </p>
          <h3 key={`quote-${quote.id}`}>{quote.quote}</h3>
          <p key={`author-${quote.id}`}>{quote.author}</p>

        </div>
      ))}
    </div>
  );
}

RenderQuotes.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RenderQuotes;
