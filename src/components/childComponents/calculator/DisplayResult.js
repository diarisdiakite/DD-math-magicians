import React from 'react';
import PropTypes from 'prop-types';

function DisplayResult({ result }) {
  return (
    <div className="display">
      { result }
    </div>
  );
}

DisplayResult.defaultProps = 0;

DisplayResult.propTypes = {
  result: PropTypes.string,
};

export default DisplayResult;
