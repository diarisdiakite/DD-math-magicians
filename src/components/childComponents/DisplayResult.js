import React from 'react';
import PropTypes from 'prop-types';

function DisplayResult({ result }) {
  return (
    <div className="display">
      { result }
    </div>
  );
}

DisplayResult.propTypes = {
  result: PropTypes.string.isRequired,
  /* clickedButton: PropTypes.string.isRequired, */
};

export default DisplayResult;
