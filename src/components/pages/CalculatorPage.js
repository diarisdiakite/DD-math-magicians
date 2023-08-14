import React from 'react';
import Calculator from '../childComponents/Calculator';

function CalculatorPage() {
  return (
    <main className="App">
      <section className="container">
        <h2 className="aside-calculator">Let us do some math!</h2>
        <Calculator />
      </section>
    </main>
  );
}

export default CalculatorPage;
