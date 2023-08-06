import React from 'react';
import './css/Calculator.css';
import Keypad from './childComponents/Keypad';
import DisplayResult from './childComponents/DisplayResult';

function Calculator() {
  return (
    <div className="calculator">
      <DisplayResult />
      <Keypad />
    </div>
  );
}

export default Calculator;
