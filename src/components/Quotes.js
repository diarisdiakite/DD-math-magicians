import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import RenderQuotes from './childComponents/RenderQuotes';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  function handleFetchError(error) {
    throw new Error(`Error fetching quotes:, ${error}`);
  }

  useEffect(() => {
    // const category1 = Math.random['inspirational', 'intelligence', 'knowledge'];
    const names = ['inspirational', 'intelligence', 'knowledge'];
    const randomCategory = names[Math.floor(Math.random() * names.length)];

    const apiKey = 'RN8eEX+Te+lyH3p9oof/ZA==wvp6dHPhWpLW8yd2';
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`, {
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((resp) => resp.json())
      .then((json) => setQuotes(json))
      .catch((error) => handleFetchError(error));
  }, []);

  return (
    <div>
      <RenderQuotes key={quotes.id} quotes={quotes} />
    </div>
  );
}

export default Quotes;
