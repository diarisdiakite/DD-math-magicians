import React from 'react';
import Calculator from '../childComponents/Calculator';
import Quotes from '../childComponents/Quotes';

function CalculatorPage() {
  return (
    <main className="App">
      <section className="container">
        <Quotes />
        <Calculator />
      </section>
    </main>
  );
}

export default CalculatorPage;
