import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quotes />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
