import React from 'react';
import PropTypes from 'prop-types';

function DisplayResult({ result, clickedButton }) {
  return (
    <div className="display">
      { result || clickedButton || 0 }
    </div>
  );
}

DisplayResult.propTypes = {
  result: PropTypes.string.isRequired,
  clickedButton: PropTypes.string.isRequired,
};

export default DisplayResult;
