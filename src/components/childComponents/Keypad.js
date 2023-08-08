import React from 'react';
import PropTypes from 'prop-types';

function Keypad({ handleClick /* handleClear, handleCalculate  */ }) {
  return (

    <div className="keypad">
      <div className="row">
        <button
          type="button"
          name="AC"
          className="key"
          onClick={() => handleClick('AC')}
        >
          AC
        </button>
        <button
          type="button"
          name="+/-"
          className="key"
          onClick={() => handleClick('+/-')}
        >
          +/-
        </button>
        <button
          type="button"
          name="%"
          className="key"
          onClick={() => handleClick('%')}
        >
          %
        </button>
        <button
          type="button"
          name="+"
          className="key operator"
          onClick={() => handleClick('/')}
        >
          /
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          name="7"
          className="key"
          onClick={() => handleClick('7')}
        >
          7
        </button>
        <button
          type="button"
          name="8"
          className="key"
          onClick={() => handleClick('8')}
        >
          8
        </button>
        <button
          type="button"
          name="9"
          className="key"
          onClick={() => handleClick('9')}
        >
          9
        </button>
        <button
          type="button"
          name="x"
          className="key operator"
          onClick={() => handleClick('x')}
        >
          x
        </button>
      </div>

      <div className="row">
        <button
          type="button"
          name="4"
          className="key"
          onClick={() => handleClick('4')}
        >
          4
        </button>
        <button
          type="button"
          name="5"
          className="key"
          onClick={() => handleClick('5')}
        >
          5
        </button>
        <button
          type="button"
          name="6"
          className="key"
          onClick={() => handleClick('6')}
        >
          6
        </button>
        <button
          type="button"
          name="-"
          className="key operator"
          onClick={() => handleClick('-')}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          name="1"
          className="key"
          onClick={() => handleClick('1')}
        >
          1
        </button>
        <button
          type="button"
          name="2"
          className="key"
          onClick={() => handleClick('2')}
        >
          2
        </button>
        <button
          type="button"
          name="3"
          className="key"
          onClick={() => handleClick('3')}
        >
          3
        </button>
        <button
          type="button"
          name="+"
          className="key operator"
          onClick={() => handleClick('+')}
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          name="0"
          className="key zero"
          onClick={() => handleClick('0')}
        >
          0
        </button>
        <button
          type="button"
          name="."
          className="key"
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          type="button"
          name="="
          className="key operator"
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </div>
  );
}

Keypad.propTypes = {
  handleClick: PropTypes.func.isRequired,
  /* handleCalculate: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired, */
};

export default Keypad;
