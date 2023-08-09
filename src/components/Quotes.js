import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import RenderQuotes from './childComponents/RenderQuotes';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const names = ['inspirational', 'intelligence', 'knowledge'];
    const randomCategory = names[Math.floor(Math.random() * names.length)];

    const apiKey = 'RN8eEX+Te+lyH3p9oof/ZA==wvp6dHPhWpLW8yd2';
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`, {
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setQuotes(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  let content;
  if (loading) {
    <p>Loading...</p>;
  } else if (error) {
    <p>
      Error:
      {error.message}
    </p>;
  } else {
    content = <RenderQuotes key={quotes.id} quotes={quotes} />;
  }

  return (
    <div className="quotes">{content}</div>
  );
}

export default Quotes;
