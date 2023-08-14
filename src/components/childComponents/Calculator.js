import React, { useState } from 'react';
import '../../assets/css/calculator.css';
import Keypad from './calculator/Keypad';
import DisplayResult from './calculator/DisplayResult';
import calculate from '../logic/calculate';

function Calculator() {
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    if (isResultDisplayed && !['+', '-', '*', '/'].includes(buttonName)) {
      setCalculatorState({
        total: calculatorState.next,
        next: buttonName,
        operation: null,
      });
      setIsResultDisplayed(false);
    } else {
      setCalculatorState((prevState) => calculate(prevState, buttonName));
    }
  };

  return (
    <div className="calculator">
      <DisplayResult result={calculatorState.next || calculatorState.total || '0'} />
      <Keypad
        handleClick={handleClick}
      />
    </div>
  );
}

export default Calculator;
