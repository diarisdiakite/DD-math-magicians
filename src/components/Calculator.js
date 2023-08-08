import React, { useState } from 'react';
import './css/Calculator.css';
import Keypad from './childComponents/Keypad';
import DisplayResult from './childComponents/DisplayResult';
import calculate from './logic/calculate';

function Calculator() {
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  /* const handleClick = (buttonName) => {
    if(setCalculatorState !== '0' && if ) {}
      setCalculatorState((prevState) => calculate(prevState, buttonName));
  }; */

  /* const handleClick = (buttonName) => {
    const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (calculatorState.next !== '0' && numbersArray.includes(buttonName)) {
      setCalculatorState({ ...calculatorState, next: '0' });
    }
    setCalculatorState((prevState) => calculate(prevState, buttonName));
  };
 */

  const handleClick = (buttonName) => {
    if (isResultDisplayed && !['+', '-', '*', '/'].includes(buttonName)) {
      setCalculatorState({
        total: calculatorState.next, // Use the displayed result as the new total
        next: buttonName, // Set the new number as the next value
        operation: null, // Clear the operation
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
