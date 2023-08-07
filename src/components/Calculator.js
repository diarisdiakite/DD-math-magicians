import React, { useState } from 'react';
import './css/Calculator.css';
import Keypad from './childComponents/Keypad';
import DisplayResult from './childComponents/DisplayResult';
import calculate from './logic/calculate';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');
  const [clickedButton, setClickedButton] = useState('');

  const handleClear = (buttonName) => {
    setDisplayValue('0');
    setClickedButton(buttonName);
  };

  const handleClick = (buttonName) => {
    setDisplayValue((prevValue) => prevValue + buttonName);
    setClickedButton(buttonName);
  };

  const handleCalculate = () => {
    try {
      const result = calculate(displayValue);
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <DisplayResult result={displayValue} clickedButton={clickedButton} />
      <Keypad
        handleClick={handleClick}
        handleCalculate={handleCalculate}
        handleClear={handleClear}
      />
    </div>
  );
}

export default Calculator;
