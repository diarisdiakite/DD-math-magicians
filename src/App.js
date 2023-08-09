import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <main className="App">
      <section className="container">
        <Quotes />
        <Calculator />
      </section>
    </main>
  );
}

export default App;
